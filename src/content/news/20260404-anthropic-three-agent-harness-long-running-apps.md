---
title: "Anthropic details a three-agent harness for long-running app development"
pubDate: 2026-04-04
tags: ["ANTHROPIC", "AI", "AGENTS", "SOFTWARE_ENGINEERING"]
sourceUrl: "https://www.anthropic.com/engineering/harness-design-long-running-apps"
summary: "Anthropic says long-running coding agents get more reliable when planning, generation, and evaluation are split across separate agents with explicit handoff artifacts and context resets instead of one monolithic session."
---

## Overview

Anthropic published a detailed look at how it is structuring long-running autonomous app development. The design uses three distinct roles: a planner to break work into chunks, a generator to implement changes, and an evaluator to critique the result before the next iteration. The key idea is that long jobs degrade when a single agent tries to plan, build, and judge its own work inside one growing context window.

## Why it matters

This is one of the clearest public writeups so far on how serious teams are moving beyond "one prompt, one agent" coding loops. For SWE teams building agent workflows, the useful lesson is not just that multi-agent setups can work, but that they need explicit orchestration primitives: structured handoffs, evaluation criteria, and clean context resets that keep long tasks from drifting or ending prematurely.

## Key details

- Anthropic says context resets beat simple compaction for long tasks because they avoid the model's tendency to get anxious near context limits and wrap work early.
- The harness separates generation from evaluation so the system is not grading its own output with the same model state that produced it.
- For design-heavy work, Anthropic calibrated evaluator prompts around concrete criteria like design quality, originality, craft, and functionality.
- For coding workflows, the same pattern becomes a planner → generator → evaluator loop that can run for hours while preserving coherence through artifacts passed between sessions.

## SWE takeaway

The practical takeaway is that durable agentic coding probably looks more like CI orchestration than chat. Teams experimenting with autonomous development should expect to invest in handoff formats, skeptical evaluators, and restartable stages instead of assuming bigger context windows alone will solve reliability.
