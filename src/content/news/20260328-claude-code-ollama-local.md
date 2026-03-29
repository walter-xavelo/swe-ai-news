---
title: "Run Claude Code for Free via Ollama's New Anthropic API Compatibility"
pubDate: 2026-03-28
tags: ["SOFTWARE_ENGINEERING", "AI", "TOOLS", "OPEN_SOURCE"]
sourceUrl: "https://towardsdatascience.com/run-claude-code-for-free-with-local-and-cloud-models-from-ollama/"
summary: "Ollama has released compatibility with the Anthropic Messages API, allowing developers to run Claude Code locally using free open-source models, bypassing steep subscription costs."
---

## Overview

Anthropic's terminal-centric coding tool, **Claude Code**, has taken the developer community by storm since its release early this year. However, power users regularly face subscription costs of $100-200 per month on the MAX plan to afford the massive token volume required for heavy daily usage.

Ollama recently introduced native support for the Anthropic Messages API. This means developers can now point Claude Code directly at a local Ollama instance and interact with highly capable open-source models completely for free, offline.

## Setup Instructions

By altering a few environment variables, developers can intercept the requests meant for Anthropic's servers and process them locally:

1. **Install Ollama** and download a capable open-source developer model (e.g. Qwen or Llama variants):
   ```bash
   ollama pull qwen3-coder:480b-cloud
   ```

2. **Install Claude Code** officially via Anthropic's setup scripts.

3. **Route Traffic to Localhost** (Powershell example):
   ```powershell
   $env:ANTHROPIC_AUTH_TOKEN = "ollama"
   $env:ANTHROPIC_API_KEY = ""
   $env:ANTHROPIC_BASE_URL = "http://localhost:11434"
   ```

4. **Boot Claude Code** using the custom open source model:
   ```bash
   claude --model qwen3-coder:480b-cloud --allow-dangerously-skip-permissions
   ```

## Why This Matters

While local open-source models may not yet fully match the frontier reasoning capacity of Opus 4.5 or Claude 3.5 Sonnet, top-tier open-source models are extraordinarily powerful for rapid prototyping, generating zero-cost MVPs, or simply learning the Claude Code architectural workflow without worrying about a meter running. 

Furthermore, running local inference ensures complete privacy over proprietary personal or enterprise codebases.
