(()=>{"use strict";(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,41025,e=>{var t=e.i(43476),r=e.i(71645);e.s(["HeroReticle",0,function(){let e=(0,r.useRef)(null);return(0,r.useEffect)(()=>{let t=e.current,r=t?.closest(".home-hero");if(!t||!r)return;let n=window.matchMedia("(hover: hover) and (pointer: fine)"),a=window.matchMedia("(prefers-reduced-motion: no-preference)");if(!n.matches||!a.matches)return;let o=0,i=0,l=0,c=0,s=0,u=!1,f=()=>{c+=(i-c)*.18,s+=(l-s)*.18,t.style.transform=`translate3d(${c}px, ${s}px, 0)`,o=Math.abs(i-c)>.1||Math.abs(l-s)>.1?requestAnimationFrame(f):0},m=e=>{let t=r.getBoundingClientRect();i=e.clientX-t.left,l=e.clientY-t.top,u||(u=!0,c=i,s=l,r.dataset.aim="on"),r.style.setProperty("--aim-x",((i/t.width-.5)*2).toFixed(3)),r.style.setProperty("--aim-y",((l/t.height-.5)*2).toFixed(3)),o||(o=requestAnimationFrame(f))},d=()=>{u=!1,delete r.dataset.aim,r.style.setProperty("--aim-x","0"),r.style.setProperty("--aim-y","0")},h=()=>{t.classList.remove("is-fire"),t.offsetWidth,t.classList.add("is-fire")};return r.addEventListener("pointermove",m),r.addEventListener("pointerleave",d),r.addEventListener("pointerdown",h),()=>{r.removeEventListener("pointermove",m),r.removeEventListener("pointerleave",d),r.removeEventListener("pointerdown",h),o&&cancelAnimationFrame(o),delete r.dataset.aim}},[]),(0,t.jsx)("div",{className:"hero-reticle",ref:e,"aria-hidden":"true",children:(0,t.jsx)("span",{})})}])},49674,e=>{var t=e.i(43476),r=e.i(71645);let n=`
attribute vec2 aPos;
void main() {
  gl_Position = vec4(aPos, 0.0, 1.0);
}
`,a=`
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
`;function o(e,t,r){let n=e.createShader(t);return n?(e.shaderSource(n,r),e.compileShader(n),e.getShaderParameter(n,e.COMPILE_STATUS))?n:(e.deleteShader(n),null):null}let i=(e,t)=>{let r=e.trim().split(/[\s,/]+/).map(Number).filter(e=>!Number.isNaN(e));return r.length<3?t:[r[0]/255,r[1]/255,r[2]/255]};e.s(["NeonStage",0,function(){let e=(0,r.useRef)(null),l=(0,r.useRef)(0),[c,s]=(0,r.useState)(0);return(0,r.useEffect)(()=>{let t=e.current;if(!t)return;let r=window.matchMedia("(prefers-reduced-motion: reduce)"),c=t.getContext("webgl",{alpha:!1,antialias:!1,depth:!1,stencil:!1,powerPreference:"high-performance",preserveDrawingBuffer:!1});if(!c)return;let u=e=>{e.preventDefault(),Y(),l.current>=2||(l.current+=1,s(e=>e+1))};t.addEventListener("webglcontextlost",u);let f=o(c,c.VERTEX_SHADER,n),m=o(c,c.FRAGMENT_SHADER,a),d=c.createProgram();if(!f||!m||!d){f&&c.deleteShader(f),m&&c.deleteShader(m),d&&c.deleteProgram(d);return}if(c.attachShader(d,f),c.attachShader(d,m),c.linkProgram(d),c.deleteShader(f),c.deleteShader(m),!c.getProgramParameter(d,c.LINK_STATUS))return void c.deleteProgram(d);c.useProgram(d);let h=c.createBuffer();c.bindBuffer(c.ARRAY_BUFFER,h),c.bufferData(c.ARRAY_BUFFER,new Float32Array([-1,-1,3,-1,-1,3]),c.STATIC_DRAW);let g=c.getAttribLocation(d,"aPos");c.enableVertexAttribArray(g),c.vertexAttribPointer(g,2,c.FLOAT,!1,0,0);let v=c.getUniformLocation(d,"uRes"),p=c.getUniformLocation(d,"uTime"),y=c.getUniformLocation(d,"uPointer"),x=c.getUniformLocation(d,"uIntensity"),b=c.getUniformLocation(d,"uLight"),L=c.getUniformLocation(d,"uSignal"),w=c.getUniformLocation(d,"uCyan"),S=c.getUniformLocation(d,"uMagenta"),P=[1,.18,.18],E=[.13,.9,1],R=[1,.17,.65],A=0;function C(){let e=getComputedStyle(document.documentElement);P=i(e.getPropertyValue("--signal-rgb"),P),E=i(e.getPropertyValue("--cyan-rgb"),E),R=i(e.getPropertyValue("--magenta-rgb"),R),A=+("1"===e.getPropertyValue("--shader-light").trim()),L&&c.uniform3f(L,P[0],P[1],P[2]),w&&c.uniform3f(w,E[0],E[1],E[2]),S&&c.uniform3f(S,R[0],R[1],R[2]),b&&c.uniform1f(b,A),x&&c.uniform1f(x,1===A?.55:1)}let M=1,F=1;function T(){let e=t.getBoundingClientRect();if(0===e.width||0===e.height)return;let r=Math.min(window.devicePixelRatio||1,1.5),n=Math.max(1,Math.round(e.width*r)),a=Math.max(1,Math.round(e.height*r));if(n*a>24e5){let e=Math.sqrt(24e5/(n*a));n=Math.max(1,Math.round(n*e)),a=Math.max(1,Math.round(a*e))}(n!==M||a!==F)&&(M=n,F=a,t.width=n,t.height=a,c.viewport(0,0,n,a),v&&c.uniform2f(v,n,a))}let U=t.closest(".home-hero")??t.parentElement,_=0,B=0,q=0,N=0;function z(e){let r=(U??t).getBoundingClientRect();q=((e.clientX-r.left)/r.width-.5)*2,N=((e.clientY-r.top)/r.height-.5)*2}function I(){q=0,N=0}let D=0,O=0,V=0;function H(){_+=(q-_)*.055,B+=(N-B)*.055,y&&c.uniform2f(y,_,B),p&&c.uniform1f(p,V),c.drawArrays(c.TRIANGLES,0,3)}function j(e){D=requestAnimationFrame(j);let t=0===O?16:Math.min(e-O,50);O=e,V+=t/1e3,H()}function Y(){0!==D&&cancelAnimationFrame(D),D=0}let G=!0;function K(){let e=G&&!document.hidden&&!r.matches;e?0!==D||r.matches||(O=0,D=requestAnimationFrame(j)):Y(),e||H()}let X=new IntersectionObserver(e=>{G=e.some(e=>e.isIntersecting),K()},{rootMargin:"120px 0px"});X.observe(t);let W=new ResizeObserver(()=>{T(),H()});W.observe(t);let $=new MutationObserver(()=>{C(),H()});$.observe(document.documentElement,{attributes:!0,attributeFilter:["data-theme","class"]});let k=()=>K(),J=()=>K();return U?.addEventListener("pointermove",z,{passive:!0}),U?.addEventListener("pointerleave",I),document.addEventListener("visibilitychange",k),r.addEventListener("change",J),c.clearColor(0,0,0,1),T(),C(),H(),K(),()=>{Y(),t.removeEventListener("webglcontextlost",u),X.disconnect(),W.disconnect(),$.disconnect(),U?.removeEventListener("pointermove",z),U?.removeEventListener("pointerleave",I),document.removeEventListener("visibilitychange",k),r.removeEventListener("change",J),c.deleteBuffer(h),c.deleteProgram(d)}},[c]),(0,t.jsx)("canvas",{ref:e,className:"neon-stage","aria-hidden":"true"},c)}])}])})();