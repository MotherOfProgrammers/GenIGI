<div align="center">

# GenIGI

### Engineering the next generation of Project IGI II modifications.

**Reverse engineering · Native tooling · Gameplay systems · Multiplayer infrastructure**

A programming-first modding project focused on building ambitious, modern experiences for *Project IGI 2: Covert Strike* through deep technical investigation, purpose-built tools, and disciplined engineering.

[Overview](#overview) · [Vision](#vision) · [Engineering](#engineering) · [Roadmap](#roadmap) · [Contributing](#contributing)

</div>

---

## Overview

**GenIGI is an engineering workspace for advanced IGI II modifications.**

Rather than relying solely on manual asset edits or superficial changes, GenIGI explores the game at a deeper technical level: examining its data formats, understanding its executable and runtime behavior, building custom utilities, and developing repeatable workflows for creating and validating modifications.

The goal is to make ambitious changes possible through **programming, reverse engineering, and a growing body of practical knowledge**—with tools that help turn complex game internals into a more manageable development process.

## Vision

The long-term vision is to push the original game further while respecting the identity that made it memorable.

- **Modernized visuals** — higher-quality weapon and character textures, improved presentation, and carefully developed visual enhancements.
- **Expanded gameplay** — new weapons, combat options, movement features, and other multiplayer-focused additions where technically feasible.
- **Campaign development** — investigate the mission formats and scripting systems needed to create new single-player experiences.
- **Multiplayer restoration** — research the legacy networking stack and work toward a reliable, integrated multiplayer experience.
- **Developer tooling** — build utilities that make asset inspection, conversion, parsing, comparison, and validation faster and more repeatable.

These are project goals, not a claim that every feature is already implemented or ready for release.

## Engineering

GenIGI takes a **tooling-first, evidence-driven approach** to game modification.

### Reverse engineering

Study executable behavior, imported APIs, embedded strings, data structures, and file formats to form testable hypotheses about how the game works. Static analysis is treated as a starting point, with runtime testing used to validate conclusions.

### Native and scripting tools

Use the right language for the task: native code for low-level utilities and performance-sensitive work, and scripting for automation, parsing, asset pipelines, and development workflows.

### Asset and data pipelines

Develop repeatable workflows for inspecting and transforming game resources, extracting structured data, comparing versions, and validating generated output before it reaches the game.

### Multiplayer research

Investigate the original networking and service-discovery paths, including legacy GameSpy-related behavior. The objective is an in-game experience that feels native to IGI II—without requiring players to operate a separate launcher—where the underlying engine and protocol permit it.

### Test before claiming

A feature is not considered complete merely because it compiles or appears to work once. Compatibility, error handling, reproducibility, performance, and real gameplay behavior matter.

## Development principles

1. **Understand before modifying.** Build evidence about the game's behavior before changing it.
2. **Automate repeatable work.** Prefer reliable tools and pipelines over fragile manual steps.
3. **Preserve what should remain stable.** Keep modifications scoped and test their effects on unrelated game systems.
4. **Be honest about status.** Distinguish research, prototypes, working features, and release-ready functionality.
5. **Build for maintainability.** Clear interfaces, useful diagnostics, and documented formats make future work easier.
6. **Respect the original game.** GenIGI aims to extend the possibilities of IGI II, not erase its legacy.

## Roadmap

The roadmap is evolving as technical discoveries are validated.

- [ ] Expand executable and file-format research.
- [ ] Improve asset inspection, parsing, conversion, and validation tools.
- [ ] Build a reliable workflow for weapon and texture modifications.
- [ ] Investigate multiplayer discovery, connectivity, and hosting requirements.
- [ ] Prototype and validate new multiplayer content and gameplay systems.
- [ ] Research the mission scripting and asset requirements for a new campaign.
- [ ] Publish reproducible test results and document compatibility.

Check the repository's issues, commits, and releases for the latest verified progress.

## Getting started

GenIGI is an actively developed technical project. Setup instructions may vary between tools and components.

1. Clone or download this repository.
2. Read the documentation and requirements for the specific tool you want to use.
3. Install only the dependencies required by that component.
4. Test modifications on a separate copy of the game files.
5. Keep backups of original assets and record which game version you are testing.

Do not assume every tool is a finished end-user mod. Some components may be experimental or intended for development use.

## Contributing

Contributions that improve correctness, tooling, documentation, compatibility, or reproducibility are welcome.

- Report reproducible bugs with relevant logs and file-format details.
- Include test cases when changing parsers or converters.
- Document findings with evidence rather than assumptions.
- Keep changes focused and explain how they were validated.
- Avoid sharing copyrighted game assets or proprietary files in issues and pull requests.

Before submitting a substantial change, check the repository's contribution guidance if one is available.

## Project status

GenIGI is under active development. Features and compatibility may change as reverse engineering and testing progress. No specific performance, graphics, multiplayer, or campaign milestone should be considered complete unless it is demonstrated by the corresponding implementation and documented test results.

## Legal and compatibility notice

*Project IGI 2: Covert Strike* and its original game assets remain the property of their respective rights holders. GenIGI is an independent community project and is not affiliated with or endorsed by the original game's publisher or developers.

Use game files you are legally entitled to access. Do not redistribute original proprietary assets, executable files, or other copyrighted game content without authorization. Compatibility, distribution, and online-service requirements should be checked before publishing a release.

---

<div align="center">

**GenIGI — Deep engineering. Better tools. New possibilities for IGI II.**

</div>
