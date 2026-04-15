---
title: "GitHub adds selective Copilot cloud agent rollout with organization custom properties"
pubDate: 2026-04-15
tags: ["GITHUB", "AI", "AGENTS", "ADMIN"]
sourceUrl: "https://github.blog/changelog/2026-04-15-enable-copilot-cloud-agent-via-custom-properties"
summary: "GitHub now lets enterprises enable Copilot cloud agent for selected organizations using custom properties or new API endpoints, giving admins a more controlled way to pilot and expand agent access across large org structures."
---

## Overview

GitHub has added a more granular rollout model for Copilot cloud agent in enterprise environments. Instead of forcing admins to enable the agent everywhere, disable it everywhere, or delegate the choice entirely to each organization, GitHub now supports selectively enabling access for chosen organizations.

## Why it matters

Agent features become much more practical in large companies when platform teams can turn them on progressively instead of making a binary enterprise-wide decision. Controlled rollout matters for policy, cost management, security review, and simple organizational reality: most enterprises want to pilot new AI workflows with a few teams before opening the floodgates.

## Key details

- Enterprise admins and AI managers can now enable Copilot cloud agent for specific organizations rather than only using all-or-nothing policies.
- GitHub supports this through organization custom properties as well as new REST API endpoints for setting policy state, adding organizations, and disabling organizations.
- The same control is also available through the AI Controls page under the Copilot cloud agent settings.
- GitHub notes that custom-property evaluation happens at configuration time, so later property changes do not automatically re-enable or disable organizations.
- The feature is explicitly aimed at piloting Copilot cloud agent with selected teams and then expanding access over time.

## SWE takeaway

This is a small-surface admin feature with outsized practical importance. Agent adoption inside enterprises usually stalls on rollout control and governance, not on model quality alone, and GitHub is smoothing one of the exact friction points that shows up when AI tooling moves from experiment to managed platform capability.
