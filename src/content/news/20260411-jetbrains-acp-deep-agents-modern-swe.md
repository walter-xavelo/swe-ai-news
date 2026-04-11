---
title: "JetBrains showcases ACP plus Deep Agents as a more inspectable coding-agent workflow"
pubDate: 2026-04-11
tags: ["JETBRAINS", "AI", "AGENTS", "DEVEX"]
sourceUrl: "https://blog.jetbrains.com/ai/2026/04/using-acp-deep-agents-to-demystify-modern-software-engineering/"
summary: "A JetBrains guest post from LangChain’s Jacob Lee argues that pairing ACP with Deep Agents can make coding agents easier to inspect, permission, and adapt than black-box terminal tools, while keeping them tightly integrated with IDE context."
---

## Overview

JetBrains published a detailed guest post from LangChain founding engineer Jacob Lee about building a custom coding agent around Deep Agents and the Agent Client Protocol. The core argument is not just that custom agents are possible, but that developers can regain control over how agents behave by moving the harness layer into software they can inspect, modify, and observe.

## Why it matters

The most interesting part of the post is the framing: competitive advantage in AI coding is increasingly about harness design, permissions, observability, and context flow rather than only raw model quality. If the agent layer is open enough to debug and reshape, teams can tune workflows around their own risk tolerance and engineering habits instead of accepting a sealed product experience.

## Key details

- Lee describes replacing a terminal-first workflow with an IDE-integrated ACP client so the agent can receive direct code context, file mentions, and permission handling inside the editor.
- Deep Agents provided core building blocks such as filesystem tools, shell access, planning via todos, human-in-the-loop approval, sub-agents, and streaming.
- The ACP adapter mapped agent plans, permission requests, threads, and session persistence onto protocol primitives without much custom glue, which is a strong signal that ACP is becoming a practical interoperability layer.
- Observability through LangSmith traces was presented as a major advantage, making it easier to debug prompt issues, context mistakes, and tool overreach.
- The post also highlights model portability: once the harness is under developer control, switching model providers mid-workflow becomes much less disruptive.

## SWE takeaway

This is a good snapshot of where serious coding-agent workflows are headed: protocol-driven clients, explicit permission boundaries, session persistence, and tooling that treats observability as a first-class feature instead of an afterthought. The black box is starting to crack open, and that is healthy for developers.
