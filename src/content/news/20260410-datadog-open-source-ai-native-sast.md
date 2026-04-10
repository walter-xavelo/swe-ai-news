---
title: "Datadog open sources an AI-native SAST pipeline aimed at cutting false positives"
pubDate: 2026-04-10
tags: ["SECURITY", "AI", "DEVTOOLS", "SOFTWARE_ENGINEERING"]
sourceUrl: "https://www.datadoghq.com/blog/open-source-ai-sast/"
summary: "Datadog published and open sourced an AI-native SAST project that uses LLM-based contextual analysis plus incremental scanning to catch code vulnerabilities with higher recall than traditional rule-based tools, especially for cross-file and context-heavy bugs."
---

## Overview

Datadog introduced an open source AI-native SAST project designed to improve on the biggest complaint developers have about static analysis: too many noisy findings. Instead of relying only on fixed rules, the system combines heuristics, context retrieval, LLM-based reasoning, and post-processing so it can analyze whether a suspected issue is actually exploitable in the surrounding code.

## Why it matters

This is one of the clearer examples of security tooling shifting from simple pattern matching toward code-aware reasoning. For teams increasingly reviewing AI-generated code or moving fast across large repositories, a scanner that can follow data flow and reduce false positives is much more likely to stay enabled in real workflows.

## Key details

- Datadog says the project filters candidate files first, retrieves related functions and files for context, then sends that bundle to an LLM for vulnerability analysis.
- Findings are post-processed with heuristic classification and an additional false-positive filtering step before they are surfaced to users.
- The company says a full repository scan happens at onboarding, while later scans are incremental so the system only re-analyzes code whose contents or context changed.
- On the OWASP Benchmark, Datadog reports materially higher true-positive rates for context-dependent categories such as command injection, SQL injection, path traversal, XSS, and trust-boundary issues.
- The open source repository is public, but Datadog notes that its incremental in-platform analysis remains available to Datadog customers.

## SWE takeaway

AI-assisted code generation is increasing the volume of code that needs review, and security teams are under pressure to keep scanning useful rather than annoying. Datadog’s release suggests the next generation of AppSec tools will compete on contextual accuracy and workflow fit, not just rule count.