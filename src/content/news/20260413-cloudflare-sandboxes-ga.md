---
title: "Cloudflare makes Sandboxes generally available for persistent AI coding and agent runtimes"
pubDate: 2026-04-13
tags: ["CLOUDFLARE", "AI", "AGENTS", "INFRASTRUCTURE"]
sourceUrl: "https://blog.cloudflare.com/sandbox-ga/"
summary: "Cloudflare made Sandboxes and Containers generally available, packaging persistent shell access, filesystem state, preview URLs, snapshots, and credential-safe outbound controls into an agent runtime designed for coding and other long-lived developer workflows."
---

## Overview

Cloudflare has taken its Sandbox product to general availability and is positioning it as the missing execution layer for serious AI agents. The pitch is straightforward: if agents are going to clone repositories, run builds, keep background processes alive, inspect logs, and resume work later, they need something closer to a real computer than a stateless function call.

## Why it matters

A lot of agent demos still quietly depend on brittle request-response loops or generic containers that are slow to start and awkward to manage at scale. Cloudflare is trying to turn that execution environment into a product primitive: persistent but on-demand, interactive but isolated, and cheap enough to use for lots of concurrent agent sessions. That matters for coding agents, internal developer copilots, and any workflow where the model needs to iteratively build, test, and recover state.

## Key details

- Sandboxes now provide persistent, isolated environments with shell access, a filesystem, background processes, and live preview URLs for running and validating in-progress apps.
- Cloudflare highlights PTY support, which means agents and humans can reconnect to a real terminal session instead of faking shell access through one-shot command transcripts.
- The platform also includes persistent code contexts for Python, JavaScript, and TypeScript so state can survive across multiple execution steps, more like a notebook than a disposable REPL.
- Filesystem watching, process management, and readiness checks are meant to support the feedback loops developers actually use while iterating on code.
- Cloudflare says upcoming snapshot support will let teams suspend and quickly restore environments, reducing the tradeoff between keeping agents warm and paying for idle compute.
- The broader design is tightly connected to Cloudflare’s agent push: use lightweight Workers where possible, then escalate to Sandboxes when the workload needs a fuller machine model.

## SWE takeaway

This is one of the clearest signs that agent infrastructure is growing up. Useful coding agents do not just need model access; they need durable execution, resumable state, and safe ways to touch real developer tooling. Cloudflare is packaging that stack into something opinionated enough to be practical, which makes this release more important than a typical platform GA announcement.
