---
title: "GitHub Copilot coding agent can now resolve merge conflicts on pull requests"
pubDate: 2026-03-26
tags: ["AI", "SOFTWARE_ENGINEERING", "GITHUB", "AGENTS"]
sourceUrl: "https://github.blog/changelog/2026-03-26-ask-copilot-to-resolve-merge-conflicts-on-pull-requests/"
summary: "GitHub has extended Copilot’s coding agent so teams can ask it to merge in a branch and resolve pull-request conflicts, pushing AI further into real maintenance and delivery work."
---

## Overview

GitHub Copilot’s coding agent can now resolve merge conflicts on pull requests when asked through an `@copilot` comment. The agent performs the work in its cloud development environment, updates the branch, and can verify that builds and tests still pass before pushing changes.

## Why It Matters For SWE

Merge conflicts are one of those annoying, high-frequency chores that burn engineering time without creating much product value. Giving an agent the ability to handle them is a strong signal that AI tooling is moving deeper into routine maintenance, not just greenfield code generation.

## Key Signals

- Copilot can now be asked to merge in another branch and resolve resulting conflicts.
- The work happens in an isolated cloud environment rather than on a developer’s machine.
- The same workflow also supports fixing failing CI, addressing review comments, and making targeted PR changes.
- Pull requests are becoming an increasingly agent-native surface inside GitHub.

## SWE Industry Takeaway

This is exactly the kind of task where AI can earn trust: repetitive, bounded, reviewable, and easy to validate with tests. If that pattern keeps spreading, a growing chunk of PR maintenance work will likely shift from engineers to agents supervised through normal review workflows.
