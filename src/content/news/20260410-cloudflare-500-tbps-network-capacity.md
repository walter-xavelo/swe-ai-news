---
title: "Cloudflare says its network has crossed 500 Tbps of external capacity"
pubDate: 2026-04-10
tags: ["CLOUDFLARE", "INFRASTRUCTURE", "SECURITY", "PLATFORMS"]
sourceUrl: "https://blog.cloudflare.com/500-tbps-of-capacity/"
summary: "Cloudflare says it has surpassed 500 Tbps of external interconnection capacity across 330+ cities, framing the milestone as both DDoS headroom and the physical foundation for its globally distributed developer and security platform."
---

## Overview

Cloudflare published a detailed infrastructure retrospective around a notable scale milestone: more than 500 terabits per second of external capacity across its global network. The post is partly a company history lesson, but it is also a concrete look at how network scale, edge compute, and automated defense now reinforce one another.

## Why it matters

For engineers building on managed edge platforms, the underlying network is part of the product. Capacity is not just a bragging-rights metric here. It affects how much DDoS absorption exists before traffic ever touches customer workloads, how widely developer workloads can be distributed, and how much resiliency a platform can offer during large attacks or routing instability.

## Key details

- Cloudflare says the 500 Tbps figure reflects total provisioned external interconnection capacity, not daily peak traffic, across transit, peering, IX, and network interconnect ports.
- The company says it now operates in 330+ cities and protects more than 20% of the web.
- It points to a 31.4 Tbps DDoS attack mitigated in 2025 as an example of why that capacity buffer matters in practice.
- The post also explains parts of Cloudflare’s mitigation path, including XDP, eBPF-based packet filtering, a distributed denial-of-service daemon, Quicksilver propagation, and L4 load balancing.
- Cloudflare ties the network milestone directly to its developer platform story, arguing that Workers, KV, Durable Objects, and containerized workloads benefit from the same globally distributed infrastructure and security primitives.

## SWE takeaway

Infrastructure scale increasingly shapes developer experience. The more application runtimes, storage layers, and security controls move to the edge, the more software teams need to evaluate platform capacity, routing architecture, and automated defense as part of normal engineering due diligence.