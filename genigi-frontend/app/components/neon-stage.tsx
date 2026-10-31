"use client";

import { useEffect, useRef, useState } from "react";

/**
 * The neon stage: one fullscreen WebGL pass that paints the hero's atmosphere â€”
 * perspective floor grid, drifting light fields, a radar ping and film grain.
 *
 * Performance contract:
 * - exactly one draw call, one fullscreen triangle, no dependencies;
 * - resolution capped at 1.5x DPR and ~2.4M pixels regardless of screen size;
 * - paused when offscreen, when the tab is hidden, and after a context loss;
 * - renders a single static frame when the visitor prefers reduced motion.
 */

const VERTEX_SHADER = `
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`;

const FRAGMENT_SHADER = `
precision mediump float;

uniform vec2 uRes;
uniform float uTime;
uniform vec2 uPointer;
uniform float uIntensity;
uniform float uLight;
uniform vec3 uSignal;
uniform vec3 uCyan;
uniform vec3 uMagenta;

float hash(vec2 p) {
  p = fract(p * vec2(123.34, 456.21));
  p += dot(p, p + 45.32);
  return fract(p.x * p.y);
}

float noise(vec2 p) {
  vec2 i = floor(p);
  vec2 f = fract(p);
  f = f * f * (3.0 - 2.0 * f);
  float a = hash(i);
  float b = hash(i + vec2(1.0, 0.0));
  float c = hash(i + vec2(0.0, 1.0));
  float d = hash(i + vec2(1.0, 1.0));
  return mix(mix(a, b, f.x), mix(c, d, f.x), f.y);
}

void main() {
  vec2 uv = gl_FragCoord.xy / uRes;
  vec2 p = (gl_FragCoord.xy - 0.5 * uRes) / uRes.y;
  float t = uTime;
  float horizon = 0.015;

  vec3 col = vec3(0.0);

  // --- Glow fields, parallaxed by the pointer -----------------------------
  vec2 q = p + uPointer * vec2(0.18, -0.14);
  float warp = noise(p * 1.35 + vec2(t * 0.035, -t * 0.02));

  float red = exp(-4.2 * length((q - vec2(-0.62, 0.10)) * vec2(0.85, 1.25)));
  float mag = exp(-5.4 * length((q - vec2(0.66, -0.16)) * vec2(0.80, 1.10)));
  float cy  = exp(-2.6 * length((q - vec2(0.04, 0.46)) * vec2(1.20, 0.90)));

  col += uSignal  * red * (0.40 + 0.30 * warp);
  col += uMagenta * mag * (0.20 + 0.16 * warp);
  col += uCyan    * cy  * 0.14;

  // --- Vertical light shaft -----------------------------------------------
  float shaft = pow(max(0.0, 1.0 - abs(p.x + 0.34 + 0.04 * sin(t * 0.21)) * 2.3), 9.0);
  col += uSignal * shaft * 0.10 * smoothstep(-0.55, 0.45, p.y + 0.35);

  // --- Perspective floor grid ---------------------------------------------
  if (p.y < horizon) {
    float d = horizon - p.y;
    vec2 gp = vec2(p.x * 1.15, 0.16) / max(d, 0.0012);
    vec2 cells = vec2(gp.x, gp.y + t * 0.85);
    vec2 gf = abs(fract(cells) - 0.5);
    float line = smoothstep(0.44, 0.5, max(gf.x, gf.y));
    float fade = smoothstep(0.02, 0.34, d) * smoothstep(0.95, 0.05, d);
    col += uCyan   * line * fade * 0.42;
    col += uSignal * line * fade * 0.10;
  }

  // --- Horizon rule --------------------------------------------------------
  float hz = smoothstep(0.005, 0.0, abs(p.y - horizon));
  col += mix(uSignal, uCyan, 0.35) * hz * 0.50;

  // --- Radar ping ----------------------------------------------------------
  float phase = fract(t * 0.16);
  float ping = smoothstep(0.016, 0.0, abs(length(q * vec2(1.0, 0.9)) - phase * 1.05));
  col += uSignal * ping * (1.0 - phase) * 0.28;

  // --- Slow horizontal sweep ----------------------------------------------
  float beam = exp(-80.0 * abs(fract(uv.y - t * 0.055) - 0.5));
  col += uCyan * beam * 0.035;

  // --- Scanlines, grain, vignette -----------------------------------------
  col *= 1.0 - 0.05 * (0.5 + 0.5 * sin(gl_FragCoord.y * 2.2));
  col += (hash(gl_FragCoord.xy + vec2(t * 60.0, t * 37.0)) - 0.5) * 0.04;
  float vig = smoothstep(1.30, 0.30, length(p * vec2(0.90, 1.10)));
  col *= mix(0.45, 1.0, vig);

  // --- Daylight HUD mode ---------------------------------------------------
  vec3 tint = uSignal * red * 0.10 + uCyan * cy * 0.11 + uMagenta * mag * 0.06;
  vec3 dayCol = vec3(0.930, 0.950, 0.985) + tint * 0.85;
  col = mix(col * uIntensity, dayCol, uLight);

  gl_FragColor = vec4(clamp(col, 0.0, 1.0), 1.0);
}
`;

function compile(gl: WebGLRenderingContext, type: number, source: string) {
  const shader = gl.createShader(type);
  if (!shader) return null;
  gl.shaderSource(shader, source);
  gl.compileShader(shader);
  if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
    gl.deleteShader(shader);
    return null;
  }
  return shader;
}

const rgb = (value: string, fallback: [number, number, number]): [number, number, number] => {
  const parts = value.trim().split(/[\s,/]+/).map(Number).filter((n) => !Number.isNaN(n));
  if (parts.length < 3) return fallback;
  return [parts[0] / 255, parts[1] / 255, parts[2] / 255];
};

export function NeonStage() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const recoveries = useRef(0);
  const [epoch, setEpoch] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const stage: HTMLCanvasElement = canvas;
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const context = stage.getContext("webgl", {
      alpha: false,
      antialias: false,
      depth: false,
      stencil: false,
      powerPreference: "high-performance",
      preserveDrawingBuffer: false,
    });

    // No WebGL: the CSS fallback on .neon-stage already carries the scene.
    if (!context) return;
    const gl = context as WebGLRenderingContext;

    // A lost context (GPU reset, driver timeout) paints the canvas blank. Give
    // it two fresh canvases, then leave the CSS fallback in place.
    const onContextLost = (event: Event) => {
      event.preventDefault();
      stop();
      if (recoveries.current >= 2) return;
      recoveries.current += 1;
      setEpoch((value) => value + 1);
    };
    stage.addEventListener("webglcontextlost", onContextLost);

    const vertex = compile(gl, gl.VERTEX_SHADER, VERTEX_SHADER);
    const fragment = compile(gl, gl.FRAGMENT_SHADER, FRAGMENT_SHADER);
    const program = gl.createProgram();

    if (!vertex || !fragment || !program) {
      if (vertex) gl.deleteShader(vertex);
      if (fragment) gl.deleteShader(fragment);
      if (program) gl.deleteProgram(program);
      return;
    }

    gl.attachShader(program, vertex);
    gl.attachShader(program, fragment);
    gl.linkProgram(program);
    gl.deleteShader(vertex);
    gl.deleteShader(fragment);

    if (!gl.getProgramParameter(program, gl.LINK_STATUS)) {
      gl.deleteProgram(program);
      return;
    }

    gl.useProgram(program);

    const buffer = gl.createBuffer();
    gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
    gl.bufferData(
      gl.ARRAY_BUFFER,
      new Float32Array([-1, -1, 3, -1, -1, 3]),
      gl.STATIC_DRAW,
    );

    const aPos = gl.getAttribLocation(program, "aPos");
    gl.enableVertexAttribArray(aPos);
    gl.vertexAttribPointer(aPos, 2, gl.FLOAT, false, 0, 0);

    const uniform = (name: string) => gl.getUniformLocation(program, name);
    const uRes = uniform("uRes");
    const uTime = uniform("uTime");
    const uPointer = uniform("uPointer");
    const uIntensity = uniform("uIntensity");
    const uLight = uniform("uLight");
    const uSignal = uniform("uSignal");
    const uCyan = uniform("uCyan");
    const uMagenta = uniform("uMagenta");

    let signal: [number, number, number] = [1, 0.18, 0.18];
    let cyan: [number, number, number] = [0.13, 0.9, 1];
    let magenta: [number, number, number] = [1, 0.17, 0.65];
    let light = 0;

    function readTheme() {
      const styles = getComputedStyle(document.documentElement);
      signal = rgb(styles.getPropertyValue("--signal-rgb"), signal);
      cyan = rgb(styles.getPropertyValue("--cyan-rgb"), cyan);
      magenta = rgb(styles.getPropertyValue("--magenta-rgb"), magenta);
      light = styles.getPropertyValue("--shader-light").trim() === "1" ? 1 : 0;
      if (uSignal) gl.uniform3f(uSignal, signal[0], signal[1], signal[2]);
      if (uCyan) gl.uniform3f(uCyan, cyan[0], cyan[1], cyan[2]);
      if (uMagenta) gl.uniform3f(uMagenta, magenta[0], magenta[1], magenta[2]);
      if (uLight) gl.uniform1f(uLight, light);
      if (uIntensity) gl.uniform1f(uIntensity, light === 1 ? 0.55 : 1);
    }

    let width = 1;
    let height = 1;

    function resize() {
      const rect = stage.getBoundingClientRect();
      if (rect.width === 0 || rect.height === 0) return;

      const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
      let w = Math.max(1, Math.round(rect.width * dpr));
      let h = Math.max(1, Math.round(rect.height * dpr));

      const maxPixels = 2_400_000;
      if (w * h > maxPixels) {
        const scale = Math.sqrt(maxPixels / (w * h));
        w = Math.max(1, Math.round(w * scale));
        h = Math.max(1, Math.round(h * scale));
      }

      if (w === width && h === height) return;
      width = w;
      height = h;
      stage.width = w;
      stage.height = h;
      gl.viewport(0, 0, w, h);
      if (uRes) gl.uniform2f(uRes, w, h);
    }

    // --- Pointer parallax, smoothed outside React -------------------------
    const target = stage.closest<HTMLElement>(".home-hero") ?? stage.parentElement;
    let aimX = 0;
    let aimY = 0;
    let toX = 0;
    let toY = 0;

    function onPointerMove(event: PointerEvent) {
      const rect = (target ?? stage).getBoundingClientRect();
      toX = ((event.clientX - rect.left) / rect.width - 0.5) * 2;
      toY = ((event.clientY - rect.top) / rect.height - 0.5) * 2;
    }

    function onPointerLeave() {
      toX = 0;
      toY = 0;
    }

    // --- Loop --------------------------------------------------------------
    let raf = 0;
    let last = 0;
    let time = 0;

    function draw() {
      aimX += (toX - aimX) * 0.055;
      aimY += (toY - aimY) * 0.055;
      if (uPointer) gl.uniform2f(uPointer, aimX, aimY);
      if (uTime) gl.uniform1f(uTime, time);
      gl.drawArrays(gl.TRIANGLES, 0, 3);
    }

    function frame(now: number) {
      raf = requestAnimationFrame(frame);
      const delta = last === 0 ? 16 : Math.min(now - last, 50);
      last = now;
      time += delta / 1000;
      draw();
    }

    function start() {
      if (raf !== 0 || motionQuery.matches) return;
      last = 0;
      raf = requestAnimationFrame(frame);
    }

    function stop() {
      if (raf !== 0) cancelAnimationFrame(raf);
      raf = 0;
    }

    let inView = true;

    function sync() {
      const shouldRun = inView && !document.hidden && !motionQuery.matches;
      if (shouldRun) start();
      else stop();
      if (!shouldRun) draw();
    }

    const observer = new IntersectionObserver(
      (entries) => {
        inView = entries.some((entry) => entry.isIntersecting);
        sync();
      },
      { rootMargin: "120px 0px" },
    );
    observer.observe(stage);

    const resizeObserver = new ResizeObserver(() => {
      resize();
      draw();
    });
    resizeObserver.observe(stage);

    const themeObserver = new MutationObserver(() => {
      readTheme();
      draw();
    });
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme", "class"],
    });

    const onVisibility = () => sync();
    const onMotionChange = () => sync();

    target?.addEventListener("pointermove", onPointerMove, { passive: true });
    target?.addEventListener("pointerleave", onPointerLeave);

    document.addEventListener("visibilitychange", onVisibility);
    motionQuery.addEventListener("change", onMotionChange);

    gl.clearColor(0, 0, 0, 1);
    resize();
    readTheme();
    draw();
    sync();

    return () => {
      stop();
      stage.removeEventListener("webglcontextlost", onContextLost);
      observer.disconnect();
      resizeObserver.disconnect();
      themeObserver.disconnect();
      target?.removeEventListener("pointermove", onPointerMove);
      target?.removeEventListener("pointerleave", onPointerLeave);
      document.removeEventListener("visibilitychange", onVisibility);
      motionQuery.removeEventListener("change", onMotionChange);
      gl.deleteBuffer(buffer);
      gl.deleteProgram(program);
      // Do not call WEBGL_lose_context here: React Strict Mode remounts this
      // effect on the same canvas, and a lost context would poison the second
      // mount (the canvas renders blank/white). The context is released with
      // the element.
    };
  }, [epoch]);

  return <canvas key={epoch} ref={canvasRef} className="neon-stage" aria-hidden="true" />;
}
