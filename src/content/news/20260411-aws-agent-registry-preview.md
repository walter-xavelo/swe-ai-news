---
title: "AWS previews Agent Registry as a control plane for discovering and governing enterprise agents"
pubDate: 2026-04-11
tags: ["AWS", "AI", "AGENTS", "PLATFORM"]
sourceUrl: "https://aws.amazon.com/blogs/machine-learning/the-future-of-managing-agents-at-scale-aws-agent-registry-now-in-preview/"
summary: "AWS introduced Agent Registry in preview inside Bedrock AgentCore, positioning it as a centralized catalog for discovering, approving, versioning, and reusing agents, tools, MCP servers, and agent skills across large organizations."
---

## Overview

AWS is pushing on a problem that is becoming more obvious as companies move from demos to real deployments: agent sprawl. Its new Agent Registry preview is meant to give platform teams one place to catalogue what agents, tools, MCP servers, and agent skills exist across the company, who owns them, how they are invoked, and whether they are approved for use.

## Why it matters

A lot of current agent tooling is still optimized for building single agents, not for managing dozens or hundreds of them across teams. Registry and governance are becoming just as important as model access. If enterprises cannot discover existing capabilities, enforce approval flows, and retire stale agents cleanly, they will end up with duplicated work and a messy security posture.

## Key details

- AWS says the registry stores structured metadata for agents, tools, MCP servers, agent skills, and custom resources, including ownership, capability descriptions, and invocation details.
- The system supports native MCP and A2A records, and can also ingest metadata manually through the console, SDK, or API.
- Entries move through lifecycle states such as draft, pending approval, and discoverable, which lets admins put publication behind governance controls instead of making every submission instantly searchable.
- AWS says the registry is accessible through the AgentCore console, APIs, and an MCP server, which means MCP-compatible clients can query it directly.
- The roadmap goes further than a simple catalog: AWS says it plans IDE discovery, automatic indexing across AWS agent services, richer taxonomies, and operational data from AgentCore Observability alongside registry records.

## SWE takeaway

The agent stack is maturing beyond prompts and tool calls into platform concerns like inventory, lifecycle, and access control. AWS is effectively arguing that enterprises will need an internal package-manager-like layer for agents, and that is a pretty believable direction for serious agent adoption.
