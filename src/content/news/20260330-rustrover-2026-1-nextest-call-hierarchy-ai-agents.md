---
title: "RustRover 2026.1 brings cargo-nextest, call hierarchy, and wider AI agent support"
pubDate: 2026-03-30
tags: ["JETBRAINS", "RUST", "DEVELOPER_TOOLS", "AI"]
sourceUrl: "https://blog.jetbrains.com/rust/2026/03/30/whats-new-in-rustrover-2026-1/"
summary: "JetBrains released RustRover 2026.1 with native cargo-nextest support, Rust-aware call hierarchy, LLDB 21, better macro tooling, fewer false positives, and expanded in-IDE access to Copilot, Cursor, Codex, and other agents via ACP."
---

## Overview

JetBrains shipped RustRover 2026.1 with improvements aimed at large, fast-moving Rust codebases. The release adds native cargo-nextest execution inside the IDE, a dedicated call hierarchy view for Rust, easier macro-expansion access, LLDB 21, and multiple accuracy fixes for code insight in macro-heavy and rustc-internal projects.

## Why it matters

Rust teams often hit IDE pain in exactly the places this release targets: test execution at workspace scale, navigation through trait-heavy call chains, and noisy diagnostics around generated code or compiler internals. RustRover is also leaning harder into multi-agent workflows by exposing more AI assistants directly in the IDE, which matters for teams that want agent choice without leaving their primary editing environment.

## Key details

- cargo-nextest now runs natively inside the IDE with structured test output and progress reporting.
- A Rust-aware call hierarchy view helps trace trait methods and concrete implementations more clearly than flat usages lists.
- Module visibility can now be set at creation time, reducing cleanup for new code structure.
- The bundled debugger moves to LLDB 21 for better performance and reliability.
- Macro expansion is easier to inspect from the editor, and name resolution around derive and procedural macros has been improved.
- RustRover now supports more AI agents in chat, including GitHub Copilot, Cursor, Junie, and Codex through the Agent Client Protocol.
- JetBrains also notes quota-free next edit suggestions for eligible subscriptions and MCP-backed database assistance inside the IDE.

## SWE takeaway

This is a strong example of AI features landing alongside unglamorous but high-leverage tooling work. For real Rust teams, faster test feedback and better code navigation will likely matter as much as agent support—and that balance is exactly what makes the release credible.
