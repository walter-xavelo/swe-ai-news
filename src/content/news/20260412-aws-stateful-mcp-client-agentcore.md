---
title: "AWS adds stateful MCP client capabilities to Bedrock AgentCore Runtime for multi-turn agent workflows"
pubDate: 2026-04-12
tags: ["AWS", "AI", "MCP", "AGENTS"]
sourceUrl: "https://aws.amazon.com/blogs/machine-learning/introducing-stateful-mcp-client-capabilities-on-amazon-bedrock-agentcore-runtime/"
summary: "AWS added stateful MCP client support to Bedrock AgentCore Runtime, bringing elicitation, sampling, and progress notifications so hosted MCP servers can hold multi-turn sessions instead of behaving like one-shot tools."
---

## Overview

AWS expanded Bedrock AgentCore Runtime with stateful MCP client capabilities, aiming at a real limitation in early MCP deployments: too many integrations still behave like stateless request-response wrappers. With this release, AgentCore-hosted MCP servers can keep session context and ask the client for more information, request model-generated content, or stream progress updates while a task is running.

## Why it matters

A lot of agent workflows fall apart in production because they need to pause, clarify, and continue. Expense approvals, deployment workflows, research pipelines, and internal assistants often need mid-run user input or long-running progress reporting. Treating every tool call as a one-shot function makes those flows awkward. Stateful MCP closes some of that gap and makes the protocol more practical for real application behavior rather than toy demos.

## Key details

- AWS says AgentCore now supports three MCP client capabilities from the spec: elicitation for structured user input, sampling for client-side LLM generation, and progress notifications for long-running work.
- In stateful mode, AgentCore provisions a dedicated microVM per session and keeps it alive for the session lifetime, using an MCP session identifier to route follow-up requests back to the same runtime context.
- The company positions this as the step from simple stateless tool serving toward interactive, multi-turn workflows where servers can actively request clarification or surface incremental status.
- The sampling flow is notable because it lets server-side tool logic request model output from the client without directly holding model credentials, which could simplify some trust and architecture boundaries.
- AWS presents the feature as a near drop-in runtime change: enable stateful mode and then use the advertised capabilities only when the client declares support for them during initialization.

## SWE takeaway

MCP adoption will depend less on the protocol acronym and more on whether it can support the messy shape of actual work. Stateful sessions, explicit capability negotiation, and progress-aware tool execution are the kinds of details that make agent integrations feel like software instead of RPC cosplay. AWS is pushing in the right direction here.
