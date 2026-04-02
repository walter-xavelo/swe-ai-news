---
title: "PyCharm 2026.1 adds debugpy, ACP agent support, Codex integration, and BYOK"
pubDate: 2026-03-30
tags: ["JETBRAINS", "AI", "DEVELOPER_TOOLS", "PYTHON"]
sourceUrl: "https://blog.jetbrains.com/pycharm/2026/03/what-s-new-in-pycharm-2026-1/"
summary: "JetBrains shipped PyCharm 2026.1 with a debugpy-based debugger path, better remote uv workflows, wider built-in web tooling, ACP agent discovery, native Codex chat integration, and bring-your-own-key model support."
---

## Overview

JetBrains released PyCharm 2026.1 with a mix of core IDE and AI workflow upgrades. The update introduces an optional debugpy-backed debugger aligned with the Debug Adapter Protocol, improves remote development with uv interpreters, expands JavaScript and TypeScript tooling in the free tier, and pushes PyCharm further toward an open AI workbench rather than a single-assistant experience.

## Why it matters

This is a meaningful DevEx release because it tackles both classic engineering friction and newer agent-era workflow problems. On the traditional side, better debugging and remote interpreter support matter for real Python teams working across SSH, Docker, and cloud environments. On the AI side, ACP Registry support, native Codex integration, and BYOK settings make model choice and agent interoperability first-class IDE concerns instead of side-channel hacks.

## Key details

- PyCharm can now use debugpy as its debugger backend, with PEP 669 support aimed at lower-overhead debugging on modern Python versions.
- Remote workflows get stronger uv interpreter support for SSH, WSL, and Docker-based setups.
- More JavaScript, TypeScript, and CSS tooling is available in the free tier.
- The ACP Registry is built into the IDE so developers can discover and install external coding agents directly.
- OpenAI Codex is now integrated into JetBrains AI chat, and developers can also plug in their own API keys for OpenAI, Anthropic, compatible providers, or local models.
- Next edit suggestions are positioned as a lightweight way to apply cascading code changes without invoking a full agent rewrite.

## SWE takeaway

PyCharm 2026.1 reflects where IDE competition is heading: not just better completion, but a broader control plane for debugging, remote execution, and model orchestration. That combination is increasingly what makes an AI-assisted IDE feel production-usable instead of merely impressive in demos.
