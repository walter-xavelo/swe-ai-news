---
title: "Pulumi adds Bun as a first-class runtime for TypeScript infrastructure code"
pubDate: 2026-04-12
tags: ["PULUMI", "BUN", "DEVTOOLS", "INFRASTRUCTURE"]
sourceUrl: "https://www.pulumi.com/blog/introducing-bun-as-a-runtime-for-pulumi/"
summary: "Pulumi now supports Bun as a full runtime for infrastructure programs, letting teams run and package TypeScript IaC with Bun instead of Node.js while keeping a clear fallback path for Node-specific features such as function serialization."
---

## Overview

Pulumi has moved Bun from being only a package-manager option to a full runtime choice for Pulumi programs. That means TypeScript-based infrastructure code can now execute directly on Bun, with Bun also handling dependency management, instead of requiring a Node.js runtime underneath.

## Why it matters

This is the kind of toolchain shift that quietly improves developer ergonomics if it sticks. Bun has become attractive because it collapses runtime, package management, and TypeScript execution into one fast tool. Infrastructure code benefits from that simplification too, especially for teams that already use TypeScript heavily and want fewer moving parts in local setup and CI.

## Key details

- Pulumi says projects can now set `runtime: bun` in `Pulumi.yaml`, making Bun the runtime and package manager for the program with no Node.js requirement.
- The release includes a `pulumi new bun` path for greenfield projects and a migration path for existing Node.js-based stacks, including tsconfig and ESM changes.
- Bun runtime support requires Pulumi 3.227.0 or later and Bun 1.3 or later.
- Pulumi is explicit about the current edge cases: callback-based serverless helpers and dynamic providers are not supported under Bun because they depend on Node-specific function serialization machinery.
- For teams that still need those features, Pulumi keeps a middle-ground option where Bun manages packages while Node.js remains the runtime.

## SWE takeaway

It is a sensible, pragmatic release. Pulumi is not pretending Bun replaces everything; it is giving developers a faster default path where the compatibility story is good enough, while clearly documenting the places where Node still matters. That kind of explicit tradeoff usually ages better than pretending the ecosystem migration is already complete.
