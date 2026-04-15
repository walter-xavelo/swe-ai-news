---
title: "Cloudflare upgrades Browser Run with live view, human handoff, CDP, and MCP support"
pubDate: 2026-04-15
tags: ["CLOUDFLARE", "AI", "AGENTS", "INFRA"]
sourceUrl: "https://blog.cloudflare.com/browser-run-for-ai-agents/"
summary: "Cloudflare rebranded Browser Rendering to Browser Run and added live observability, human-in-the-loop handoff, direct CDP access, MCP client support, session recordings, and a 4x concurrency increase for agent-driven browser automation."
---

## Overview

Cloudflare has turned Browser Rendering into **Browser Run** and used the rename to make the product much more agent-oriented. The updated service is positioned as a managed remote browser for AI agents that need to navigate websites, inspect pages, click through flows, and escalate to a human when automation hits a wall.

## Why it matters

Browser automation is becoming core infrastructure for agentic workflows, but most teams still end up stitching together brittle headless browser setups, ad hoc observability, and manual recovery paths. Cloudflare is packaging those pieces into a hosted platform that is easier to plug into coding agents and operational workflows, especially for teams that want browser execution without running and patching their own fleet.

## Key details

- Browser Run now exposes the Chrome DevTools Protocol directly, so existing CDP tooling and browser-control agents can connect with minimal changes.
- Cloudflare added MCP client support, which means tools such as Claude Desktop, Cursor, Codex, and OpenCode can use Browser Run as a remote browser.
- New observability features include Live View and session recordings, giving developers a way to see what the agent did and debug failures after the fact.
- Human in the Loop lets an agent hand control to a person for cases like login prompts or tricky edge cases, then resume the session afterward.
- Cloudflare also added WebMCP support and raised concurrency limits from 30 to 120 browsers, which makes the service more useful for higher-throughput agent workloads.

## SWE takeaway

This is the kind of release that makes web-using agents look less like demos and more like deployable infrastructure. The interesting part is not just “browser automation in the cloud”; it is Cloudflare trying to standardize remote browser control, debugging, and handoff patterns in a way that fits real agent systems.
