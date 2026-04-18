---
title: "Google Cloud details a production path for multi-agent systems with Cloud Run and Terraform"
pubDate: 2026-04-18
tags: ["GOOGLE", "AI", "AGENTS", "INFRASTRUCTURE"]
sourceUrl: "https://cloud.google.com/blog/topics/developers-practitioners/create-expert-content-deploying-a-multi-agent-system-with-terraform-and-cloud-run/"
summary: "Google Cloud published a deployment-focused guide for moving a multi-agent content system into production using Cloud Run, Terraform, Secret Manager, dedicated service accounts, telemetry, and Vertex AI memory integration."
---

## Overview

Google Cloud published the latest part of its **Dev Signal** series, focusing on how to take a multi-agent application from local experimentation into a more production-ready deployment. The post uses **Cloud Run** and **Terraform** as the deployment backbone and adds operational concerns such as memory persistence, tracing, IAM scoping, and secret management.

## Why it matters

A lot of agent content still stops at demos. This write-up is more useful than that because it focuses on the boring but essential engineering work needed to run agent systems as real services: packaging, secrets, permissions, telemetry, and reproducible infrastructure. That makes it relevant to teams trying to turn prototypes into dependable internal tools.

## Key details

- Google frames the deployment around a FastAPI application server that exposes the agent over HTTP and connects it to a Vertex AI memory bank for persistent state.
- The guide uses Cloud Run for serving and Terraform for provisioning the supporting platform, including Artifact Registry, service accounts, IAM bindings, and Secret Manager.
- The post emphasizes least-privilege design by avoiding the default compute service account and granting only narrowly scoped roles to the runtime identity.
- It enables tracing through Google ADK telemetry so teams can inspect agent reasoning steps, model calls, and MCP tool activity in production.
- Google distinguishes between sampled production monitoring and targeted evaluation, which is a useful operational distinction for agent debugging.
- The deployment path is positioned as a step toward more advanced CI/CD, evaluation, and observability practices rather than a one-off demo setup.

## SWE takeaway

This is one of the more helpful agent-infrastructure posts of the day because it is not just about model orchestration — it is about operating the system responsibly. The strongest signal is that production agent work is converging on familiar platform patterns: server wrappers, least-privilege IAM, secret isolation, telemetry, and infrastructure as code.
