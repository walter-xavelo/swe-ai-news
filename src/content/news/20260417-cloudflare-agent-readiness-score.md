---
title: "Cloudflare launches Agent Readiness scoring to audit how well websites work with AI agents"
pubDate: 2026-04-17
tags: ["CLOUDFLARE", "AI", "DEVEX", "WEB"]
sourceUrl: "https://blog.cloudflare.com/agent-readiness/"
summary: "Cloudflare launched Agent Readiness scoring and a new Radar dataset to measure whether websites expose the standards AI agents need for discovery, content access, authentication, tool use, and protocol negotiation."
---

## Overview

Cloudflare introduced **Agent Readiness**, a public scoring tool at `isitagentready.com` plus supporting Radar data that measures how well websites are prepared for AI agents. The launch bundles together a set of emerging conventions — from markdown content negotiation and bot access controls to API catalogs, MCP server cards, agent skills discovery, and OAuth metadata — into a single audit workflow.

## Why it matters

A lot of agent progress still assumes that websites and docs will somehow become machine-friendly on their own. In practice, most sites are still optimized for browsers and search crawlers, not autonomous software that needs to discover capabilities, authenticate safely, and consume content efficiently. By turning agent compatibility into a score and concrete checklist, Cloudflare is trying to do for agent-facing web hygiene what Lighthouse did for performance and best practices.

## Key details

- Cloudflare’s scan scores sites across discoverability, content accessibility, bot access control, and protocol/capability discovery.
- The tool checks for standards such as `robots.txt`, sitemaps, RFC 8288 link headers, markdown responses for `Accept: text/markdown`, Content Signals, Web Bot Auth, API Catalogs, MCP Server Cards, Agent Skills indexes, and OAuth discovery endpoints.
- Radar now includes an “Adoption of AI agent standards” dataset based on scans of 200,000 high-traffic domains, giving developers a benchmark for how early the ecosystem still is.
- Cloudflare says only 4% of scanned sites expose Content Signals, about 3.9% support markdown content negotiation, and newer standards like MCP Server Cards and API Catalogs appear on only a tiny fraction of sites.
- Failed checks come with prompts intended for coding agents, which makes the tool part diagnostic and part implementation accelerator.
- Cloudflare also used the launch to describe changes to its own developer docs so they are cheaper and easier for AI systems to consume.

## SWE takeaway

This is strong DevEx news because agent-compatible interfaces are rapidly becoming part of the software surface area teams need to maintain. Cloudflare is effectively arguing that websites, docs portals, and APIs now need an agent-facing layer just as much as they need a human-facing one. If that framing sticks, expect “agent readiness” to become a practical checklist for developer platforms and documentation teams.
