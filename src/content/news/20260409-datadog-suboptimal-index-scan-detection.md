---
title: "Datadog shows how suboptimal index scans can hide 99% latency wins"
pubDate: 2026-04-09
tags: ["SOFTWARE_ENGINEERING", "DATABASES", "OBSERVABILITY", "INFRASTRUCTURE"]
sourceUrl: "https://www.datadoghq.com/blog/detect-inefficient-index-scans-with-dbm/"
summary: "Datadog detailed how a PostgreSQL query that looked healthy on paper was still expensive in production, then turned that lesson into DBM detections that flag composite-index mismatches before engineers waste time assuming every index scan is already efficient."
---

## Overview

Datadog published a strong engineering writeup on a subtle but common database performance trap: an execution plan can show an index scan and still be badly misaligned with the query. In Datadog’s example, a PostgreSQL query used a composite index, but because the index column order did not match the query predicates, the database still had to scan far more index entries than expected.

## Why it matters

This is exactly the kind of issue that slips past quick debugging and even AI-assisted code review. “Uses an index” often gets treated as synonymous with “already optimized,” but real-world performance depends on predicate alignment, column order, and plan cost. For platform and backend teams, that makes observability on execution plans more valuable than simplistic query heuristics.

## Key details

- Datadog traced an expensive query on its recommendations table to a composite unique index ordered as `(entity, dbms, org_id, type)` while the hot query filtered on `org_id` and `dbms`.
- Because the query did not filter on the index’s leading column, PostgreSQL could not seek directly to the relevant slice of the B-tree and had to scan a much larger range.
- Adding a targeted secondary index on `(org_id, dbms)` dropped the index-scan node cost from about 317,000 to 104.9.
- Datadog says average runtime for the query fell from more than 300 ms to 38 μs, and it has expanded Database Monitoring recommendations to automatically flag similar suboptimal index-scan patterns.

## SWE takeaway

This is a good example of the broader shift toward tools that encode hard-won operational knowledge into product guidance. As agentic and AI-assisted workflows generate more code and schema changes, teams will need observability systems that catch subtle performance regressions early instead of relying on surface-level signals like “the planner used an index.”
