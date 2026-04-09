---
title: "GitHub availability report details March incidents across Actions and Copilot"
pubDate: 2026-04-09
tags: ["GITHUB", "INFRASTRUCTURE", "INCIDENTS", "AI"]
sourceUrl: "https://github.blog/news-insights/company-news/github-availability-report-march-2026/"
summary: "GitHub’s April 9 availability report breaks down four March incidents, including a cache-expiry cascade that hit core services, Redis misconfiguration that delayed Actions, and authentication failures that took Copilot Coding Agent sessions offline."
---

## Overview

GitHub published its March 2026 availability report with unusually useful detail for engineering teams that depend on GitHub as build, source, and AI-assistant infrastructure. The incidents covered github.com, the GitHub API, Git operations, GitHub Actions, and Copilot-related services rather than a single narrow subsystem.

## Why it matters

This is a reminder that AI coding workflows now inherit the same operational risk profile as the rest of the delivery stack. When Copilot agent sessions fail because a backing datastore cannot authenticate, or Actions queues stall because Redis routing changes go wrong, the impact is no longer confined to “developer convenience” features. It directly slows review, automation, and deployment loops.

## Key details

- GitHub said a March 3 cache-expiry bug triggered replication delays that pushed github.com request failures to roughly 40% and API failures to about 43%, while Copilot requests saw an error rate around 21%.
- A March 5 Redis load balancer misconfiguration caused severe GitHub Actions degradation, with 95% of workflow runs failing to start within five minutes and average delays around 30 minutes.
- On March 19 and March 20, the Copilot Coding Agent service could not start new agent sessions or load existing ones because of an authentication issue connecting to its datastore.
- GitHub says immediate follow-up work includes a killswitch and stronger monitoring for the cache mechanism, tighter safeguards around Redis configuration changes, and automated monitoring for credential lifecycle events.

## SWE takeaway

Developer platforms are increasingly a single dependency chain spanning source control, CI, notifications, and coding agents. Teams adopting agentic workflows should treat provider resilience, fallback paths, and incident visibility as part of their AI rollout plan, not as an afterthought.
