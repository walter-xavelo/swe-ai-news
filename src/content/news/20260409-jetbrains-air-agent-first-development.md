---
title: "JetBrains Air makes the case for agent-first development inside a familiar IDE"
pubDate: 2026-04-09
tags: ["JETBRAINS", "AI", "AGENTS", "DEVEX"]
sourceUrl: "https://blog.jetbrains.com/air/2026/04/my-journey-to-agent-first-development-with-air/"
summary: "A JetBrains Air engineering post argues that agent adoption accelerates when developers can review, steer, and fix agent output inside the same environment they already use for normal work instead of bouncing between terminal UIs, chats, and editors."
---

## Overview

JetBrains used its Air blog to publish a firsthand account of moving from casual AI use to what it calls agent-first development. The interesting part is not the testimonial by itself, but the product argument underneath it: developers adopt agents more seriously when prompting, code review, local edits, and task switching all happen inside one familiar workspace.

## Why it matters

A lot of discussion around coding agents still centers on model quality alone. This post is a useful counterpoint. Workflow design matters just as much. If the human has to bounce between a terminal TUI, a chat window, and a separate editor just to inspect and correct output, the friction can erase much of the promised productivity gain.

## Key details

- The author says the turning point was being able to inspect agent output, make small corrections, and continue the task without changing applications or interaction patterns.
- JetBrains frames Air as a way to keep agent work inside an IDE-style environment rather than forcing developers into terminal-native agent UX.
- The post also highlights a realistic use pattern: let the agent handle repetitive implementation work that follows established patterns, while the human keeps ownership of architecture, design, and project-specific judgment.
- One concrete example described using Air to implement a Gemini CLI integration by leveraging existing Claude and Codex integrations as a template, with the agent doing much of the repetitive coding while the engineer reviewed and redirected over a long chat.

## SWE takeaway

The next wave of AI coding competition is likely to be won on orchestration and ergonomics as much as raw model output. Teams evaluating agent tools should look closely at how easy it is to review changes, keep context anchored in the codebase, and switch between human and agent work without fragmenting the workflow.
