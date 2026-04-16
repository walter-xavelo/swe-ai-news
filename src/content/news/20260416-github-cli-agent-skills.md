---
title: "GitHub adds gh skill commands to discover, install, publish, and update agent skills"
pubDate: 2026-04-16
tags: ["GITHUB", "AI", "AGENTS", "CLI"]
sourceUrl: "https://github.blog/changelog/2026-04-16-manage-agent-skills-with-github-cli"
summary: "GitHub introduced a new gh skill command in GitHub CLI for searching, installing, pinning, publishing, and updating Agent Skills, adding package-manager-style workflows and provenance tracking to the fast-growing skills ecosystem for coding agents."
---

## Overview

GitHub launched `gh skill`, a new GitHub CLI capability aimed at making Agent Skills easier to use and distribute. Instead of manually copying skill directories around, developers can now discover skills in repositories, install them for specific agent hosts, pin versions, and update them through a standard CLI workflow.

## Why it matters

Agent skills are becoming a practical way to extend coding agents with reusable instructions, scripts, and task-specific playbooks. The missing piece has been distribution and lifecycle management. By putting skills into the GitHub CLI, GitHub is giving teams a more standard path to treat skills like real developer artifacts instead of ad hoc prompt bundles.

## Key details

- `gh skill install` can discover and install skills from GitHub repositories, either interactively or by targeting a specific skill directly.
- The command supports targeting different agent hosts, including GitHub Copilot, Claude Code, Cursor, Codex, and Gemini CLI.
- GitHub added version pinning by tag or commit SHA, which matters for reproducibility and safer rollout of behavior-changing skills.
- Installed skills record provenance metadata such as repository, ref, and tree SHA in skill frontmatter so update tracking survives moves and copies.
- `gh skill publish` validates skills against the Agent Skills spec and can help maintainers enable repo protections such as immutable releases, code scanning, and secret scanning.

## SWE takeaway

This is one of the more important agent-tooling releases of the day because it turns skills into something closer to packages: installable, updateable, pinnable, and auditable. If coding agents are going to become part of normal developer workflows, teams need exactly this sort of supply-chain and distribution layer around the prompts and scripts that shape agent behavior.
