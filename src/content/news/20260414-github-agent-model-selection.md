---
title: "GitHub adds model selection for Claude and Codex agents on github.com"
pubDate: 2026-04-14
tags: ["GITHUB", "AI", "AGENTS", "DEVTOOLS"]
sourceUrl: "https://github.blog/changelog/2026-04-14-model-selection-for-claude-and-codex-agents-on-github-com"
summary: "GitHub now lets developers choose specific Anthropic and OpenAI models when launching Claude and Codex third-party coding agents on github.com, making the hosted agent workflow more configurable without changing subscriptions or leaving the GitHub surface."
---

## Overview

GitHub has added explicit model selection for its hosted Claude and Codex third-party coding agents on github.com. When a developer starts an agent task, they can now choose which Anthropic model powers Claude or which OpenAI model powers Codex, instead of treating each agent as a single fixed black box.

## Why it matters

This is an important maturity step for agentic developer tooling. Once coding agents move into real workflows, teams start caring about the tradeoffs between speed, quality, reasoning depth, and cost profile. Exposing model choice directly in the product gives developers and admins more control over those tradeoffs while keeping the agent workflow inside GitHub’s existing review and policy boundaries.

## Key details

- GitHub says model selection is now available for both Claude and Codex third-party coding agents on github.com.
- The listed Claude options currently include Sonnet 4.6, Opus 4.6, Sonnet 4.5, and Opus 4.5.
- The listed Codex options currently include GPT-5.2-Codex, GPT-5.3-Codex, and GPT-5.4.
- Access is included with an existing Copilot subscription, but Business and Enterprise customers need the relevant Anthropic or OpenAI policy enabled by an administrator.
- The repository or organization owner must also enable the agent in the repository’s Copilot cloud agent settings.

## SWE takeaway

GitHub is making hosted coding agents feel less like a single bundled feature and more like a configurable execution layer. That matters because serious teams increasingly want agent workflows that can be tuned to the task instead of accepting one model profile for every code review, bug fix, or implementation request.
