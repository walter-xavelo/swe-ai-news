---
title: "Copilot cloud agent now signs its commits"
pubDate: 2026-04-03
tags: ["GITHUB", "AI", "SECURITY", "DEVELOPER_TOOLS"]
sourceUrl: "https://github.blog/changelog/2026-04-03-copilot-cloud-agent-signs-its-commits"
summary: "GitHub says Copilot cloud agent now signs every commit it creates, allowing the agent to work in repositories that enforce signed-commit rules."
---

## Overview

GitHub has updated Copilot cloud agent so every commit it authors is signed and shows up as Verified on GitHub. That removes a major compatibility gap for teams that enforce signed commits through branch protection rules or rulesets.

## Why it matters

This is a small product change with outsized operational impact. For security-conscious teams, unsigned agent commits were a deal-breaker because they collided with existing repository protections. By closing that gap, GitHub makes it easier to use coding agents without punching holes in normal software supply chain controls.

## Key details

- Copilot cloud agent now signs every commit it creates.
- Signed commits appear as Verified on GitHub.
- Repositories using the "Require signed commits" rule can now accept agent-generated commits.
- GitHub frames this as a direct improvement to Copilot cloud agent adoption in protected repositories.

## Industry signal

The broader pattern is clear: agent tooling is being forced to fit into established engineering controls instead of asking teams to weaken them. That is the right direction. If AI coding is going to stick in serious environments, agents need to comply with branch protections, identity guarantees, audit trails, and policy enforcement out of the box.
