---
title: "JetBrains adds Koog integration for Spring AI to layer orchestration over existing app stacks"
pubDate: 2026-04-16
tags: ["JETBRAINS", "AI", "AGENTS", "JAVA"]
sourceUrl: "https://blog.jetbrains.com/ai/2026/04/introducing-koog-integration-for-spring-ai-smarter-orchestration-for-your-agents/"
summary: "JetBrains introduced Koog integration for Spring AI, letting Java and Kotlin teams keep their existing Spring AI model, memory, and vector-store wiring while adding higher-level agent orchestration features such as workflows, persistence, checkpoints, and richer observability."
---

## Overview

JetBrains announced a new integration between Koog and Spring AI aimed at teams that already use Spring AI as their application-facing AI layer but now need more capable agent orchestration. The integration lets developers preserve existing Spring AI components while using Koog as a higher-level runtime on top.

## Why it matters

A lot of enterprise AI development stalls at the gap between basic LLM integration and production-grade agent runtime behavior. Spring AI gives Java teams broad provider and vector-store coverage, but more advanced execution patterns often need extra orchestration. JetBrains is explicitly trying to fill that gap without forcing a rewrite of the existing stack.

## Key details

- Koog can now sit above Spring AI while reusing existing `ChatModel`, chat memory, and vector-store integrations already present in the application.
- JetBrains positions Koog as the layer for multi-step workflows, persistence, checkpoints, history management, deterministic planning, and richer execution control.
- The integration exposes Koog beans that map onto existing Spring AI components, reducing migration friction and preserving current application configuration.
- JetBrains highlights stronger support for advanced agent strategies such as graph-based workflows, long-term memory, concurrent execution, and tailored observability integrations.
- The post frames Koog as a way to move from simple tool-calling loops toward more reliable enterprise agent systems in Java and Kotlin services.

## SWE takeaway

This is strong Java ecosystem news because it acknowledges a real production problem: framework-level model integration is not the same thing as a durable agent runtime. JetBrains is making a pragmatic pitch to enterprise teams that want more controllable agents without ripping out their existing Spring AI plumbing.
