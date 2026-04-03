---
title: "GitHub adds organization-wide firewall controls for Copilot cloud agent"
pubDate: 2026-04-03
tags: ["GITHUB", "AI", "SECURITY", "DEVELOPER_TOOLS"]
sourceUrl: "https://github.blog/changelog/2026-04-03-organization-firewall-settings-for-copilot-cloud-agent"
summary: "GitHub now lets organization admins manage Copilot cloud agent firewall settings centrally, including default enforcement, recommended allowlists, and org-wide custom allowlist entries."
---

## Overview

GitHub has added organization-level firewall settings for Copilot cloud agent. Until now, firewall controls were handled at the repository level. The new rollout gives platform and security teams a central place to define how broadly the agent can access the internet across all repos in an organization.

## Why it matters

This is one of the more practical upgrades to enterprise AI coding governance. A coding agent becomes much easier to approve internally when admins can set default network guardrails once, instead of hoping every repository owner configures outbound access correctly. It also directly addresses the two enterprise worries that keep showing up in agent deployments: prompt injection and unintended data exfiltration.

## Key details

- Organization admins can turn the Copilot cloud agent firewall on or off for all repositories, or leave the decision to each repository.
- They can do the same with GitHub’s recommended allowlist.
- Admins can define an organization-wide custom allowlist for shared destinations such as internal package registries.
- They can also decide whether repository admins are allowed to add their own custom allowlist entries.
- Existing repository-level behavior is preserved by default unless an organization chooses to centralize control.

## SWE takeaway

The interesting shift here is not just another settings page. GitHub is turning agent adoption into a policy problem that platform teams can actually manage. Expect more engineering orgs to treat agent network controls the same way they already treat SSO, branch protection, and secrets policy: centrally, auditable, and opinionated by default.
