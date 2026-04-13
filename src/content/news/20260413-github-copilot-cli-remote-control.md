---
title: "GitHub puts Copilot CLI sessions on the web and mobile for remote steering and approvals"
pubDate: 2026-04-13
tags: ["GITHUB", "AI", "COPILOT", "DEVTOOLS"]
sourceUrl: "https://github.blog/changelog/2026-04-13-remote-control-cli-sessions-on-web-and-mobile-in-public-preview/"
summary: "GitHub launched remote access for Copilot CLI in public preview, letting developers monitor running sessions, send follow-up instructions, switch modes, and handle approvals from the web or mobile without staying pinned to the terminal that started the task."
---

## Overview

GitHub is extending Copilot CLI beyond the terminal by adding remote session control on the web and in GitHub Mobile. With `copilot --remote`, a running CLI session can stream activity to GitHub, exposing a private link or QR code that lets the same user observe and steer the task from another device.

## Why it matters

This is a small-sounding feature with real workflow consequences. Long-running agent sessions are annoying when they are chained to a single laptop window. Remote monitoring and intervention make CLI agents more practical for actual development work, especially when a session needs periodic approvals, clarification, or a mode change while the user is away from the machine that launched it.

## Key details

- GitHub says remote sessions mirror CLI activity to GitHub in real time and stay synchronized across the terminal, web UI, and mobile apps.
- Developers can send mid-session steering prompts, continue work after a turn finishes, review or adjust plans, and switch between plan, interactive, and autopilot modes remotely.
- The feature also supports handling permission prompts and responding to `ask_user` questions without returning to the original shell.
- Access is private to the user who started the session, and Business or Enterprise environments can gate usage behind admin policies for remote control and CLI access.
- GitHub explicitly recommends the feature for longer tasks, alongside `keep-alive`, which reinforces that Copilot CLI is increasingly meant for sustained agent runs rather than just quick inline help.

## SWE takeaway

The interesting shift here is not just convenience. GitHub is turning the CLI agent into a cross-device session that can be supervised, nudged, and approved from anywhere. That makes agentic terminal workflows feel less like a fragile demo and more like a usable day-to-day developer surface.
