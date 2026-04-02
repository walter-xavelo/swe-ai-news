---
title: "GitHub makes Copilot organization custom instructions generally available"
pubDate: 2026-04-02
tags: ["GITHUB", "AI", "DEVELOPER_TOOLS"]
sourceUrl: "https://github.blog/changelog/2026-04-02-copilot-organization-custom-instructions-are-generally-available/"
summary: "GitHub has made organization-wide custom instructions for Copilot generally available, giving admins a central way to steer Copilot Chat, code review, and cloud agent behavior across repositories."
---

## Overview

GitHub has moved Copilot organization custom instructions to general availability. The feature lets Copilot Business and Copilot Enterprise admins define default guidance once at the organization level instead of relying only on per-repository instruction files.

## Why it matters

This is a quiet but important control-plane upgrade for AI coding at scale. As more teams use coding agents and chat across many repos, consistency becomes a governance problem: engineering standards, compliance expectations, architectural preferences, and review style all need to travel with the assistant. Centralized instructions are GitHub’s answer to that.

## Key details

- Organization admins can set default instructions in Copilot settings.
- The instructions apply across Copilot Chat on github.com.
- They also extend to Copilot code review.
- GitHub says the same defaults reach Copilot cloud agent workflows too.

## The bigger picture

We are seeing AI coding move from personal prompt hacks toward platform policy. Repository-level instructions are still useful, but org-wide defaults are what larger engineering teams need if they want agentic tooling to behave predictably across estates rather than repo by repo.