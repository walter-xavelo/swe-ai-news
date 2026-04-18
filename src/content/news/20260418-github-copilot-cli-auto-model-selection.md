---
title: "GitHub Copilot CLI adds auto model selection with discounted premium request billing"
pubDate: 2026-04-18
tags: ["GITHUB", "AI", "CLI", "DEVEX"]
sourceUrl: "https://github.blog/changelog/2026-04-17-github-copilot-cli-now-supports-copilot-auto-model-selection/"
summary: "GitHub made Copilot auto model selection generally available in Copilot CLI, letting the tool route prompts across supported models dynamically while preserving admin policy controls and slightly reducing premium request cost when auto is used."
---

## Overview

GitHub has made **Copilot auto model selection** generally available in **GitHub Copilot CLI**. Instead of forcing developers to choose a fixed model for every task, the CLI can now automatically route prompts to an eligible model based on availability, plan entitlements, and policy constraints.

## Why it matters

Model choice is becoming part of the everyday developer workflow, but it is still friction. Auto selection is useful because it shifts that decision from the user to the platform for common cases, which can reduce rate-limit pain and make CLI-based coding flows feel more reliable. For teams using Copilot broadly, it also points toward a more policy-governed and workload-aware agent experience rather than a single hard-coded default.

## Key details

- GitHub says auto model selection is now available for all Copilot plans in Copilot CLI.
- The feature dynamically routes requests to supported models such as GPT-5.4, GPT-5.3-Codex, Sonnet 4.6, and Haiku 4.5, with the eligible set changing over time.
- The CLI still shows which model actually handled a request, so users keep visibility into what was used.
- Developers can switch back and forth between auto and explicitly selected models at any time.
- Auto respects administrator model policies, which matters for enterprise governance and compliance.
- GitHub also says paid subscribers receive a 10% discount on the model multiplier when auto is used, currently limited to models in the 0x to 1x multiplier range.

## SWE takeaway

This is a small but important ergonomics change for AI coding workflows. As command-line agents and coding assistants become more multi-model by default, automatic routing plus transparent reporting is likely to become a standard expectation. The interesting part here is not just convenience — it is the combination of adaptive model choice, cost incentives, and enterprise policy enforcement in a tool developers use directly in the terminal.
