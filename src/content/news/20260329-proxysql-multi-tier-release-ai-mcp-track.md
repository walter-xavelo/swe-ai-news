---
title: "ProxySQL Introduces Multi-Tier Release Strategy With Stable, Innovative, and AI Tracks"
pubDate: 2026-03-29
tags: ["DATABASES", "AI", "INFRASTRUCTURE"]
sourceUrl: "https://www.infoq.com/news/2026/03/proxysql-multi-tier-release/"
summary: "ProxySQL 3.0.6 arrives with a new multi-tier release strategy that separates production stability from faster-moving observability features and an experimental AI/MCP track for autonomous database operations."
---

## Overview

ProxySQL has announced a new three-tier release strategy alongside version 3.0.6. The project now splits releases into Stable, Innovative, and AI/MCP tracks, giving database teams a clearer boundary between production-safe upgrades and more experimental functionality.

## Why it matters

This is a smart signal about where infrastructure software is heading. Instead of pretending AI features belong in the same risk bucket as core routing and failover logic, ProxySQL is isolating experimental automation into its own track. That makes it easier for serious ops teams to adopt AI-adjacent capabilities without blurring operational safety.

## Key details

- Stable releases focus on predictable production use.
- Innovative releases surface newer observability and platform features earlier.
- The AI/MCP track explores native AI integrations and an MCP stack for more autonomous database management.
- ProxySQL 3.0.6 also improves PostgreSQL support, authentication reliability, and Prometheus-oriented monitoring.

## The bigger picture

Infrastructure vendors are increasingly trying to add AI without sacrificing operator trust. ProxySQL’s release split is notable because it treats AI capability as something worth isolating, versioning, and operationally framing on its own terms. That is exactly the kind of posture more infra projects will probably need as agentic features creep deeper into production systems.
