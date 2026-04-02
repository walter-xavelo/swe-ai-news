---
title: "Cloudflare opens client-side security tooling and uses LLM triage to slash false positives"
pubDate: 2026-03-30
tags: ["AI", "SECURITY", "JAVASCRIPT", "RESEARCH"]
sourceUrl: "https://blog.cloudflare.com/client-side-security-open-to-everyone/"
summary: "Cloudflare made advanced client-side security features self-serve and described a two-stage detection pipeline where a graph neural network flags suspicious JavaScript and an LLM second pass sharply reduces false positives at web scale."
---

## Overview

Cloudflare opened up more of its client-side security stack to self-serve customers and, more interestingly, explained how it is using AI to detect malicious JavaScript in the browser without overwhelming teams with noise. The system first runs a graph neural network over JavaScript structure and then sends only suspicious scripts to an LLM for a semantic second opinion.

That combination is aimed at one of the hardest problems in browser security: catching rare, high-impact skimming or injected-script attacks without burying engineers in false alarms.

## Why it matters

This is the kind of applied AI security work that actually matters to software teams. Frontend supply-chain risk is real, but browser-side security products are only useful if their detections are credible enough to operationalize. A model that catches everything but floods teams with junk is not helping.

Cloudflare is making a strong practical argument here: use a high-recall structural model to catch weird code patterns, then use an LLM where semantic judgment is most valuable. That is a more believable agentic pattern than replacing the whole pipeline with one big model.

## Key details

- Cloudflare says Client-Side Security assesses billions of scripts per day using browser reporting rather than active scanning or application instrumentation.
- The first-stage detector is a graph neural network operating on the JavaScript abstract syntax tree to find structurally suspicious behavior even under obfuscation.
- Only scripts flagged by the GNN are passed to an LLM hosted on Workers AI for semantic triage.
- Cloudflare reports the LLM layer reduced overall false positives by roughly 3x and reduced false positives on unique scripts by around 200x in internal evaluations.
- The company also made advanced client-side security features self-serve and expanded complimentary domain-based threat intelligence in the base bundle.

## Industry signal

Security teams are not just asking whether AI can detect threats. They are asking whether AI can make detection usable. This post is a strong example of AI being inserted into a narrow, high-leverage decision point inside a larger production system instead of being treated as magic end-to-end automation.