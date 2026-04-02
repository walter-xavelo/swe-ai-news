---
title: "ReSharper adds live monitoring so .NET developers can profile without restarting"
pubDate: 2026-03-31
tags: ["JETBRAINS", "DEVELOPER_TOOLS", "DOTNET", "DEVEX"]
sourceUrl: "https://blog.jetbrains.com/dotnet/2026/03/31/profile-dotnet-apps-without-restarting-monitoring-comes-to-resharper/"
summary: "JetBrains brought its Monitoring workflow to ReSharper, letting Visual Studio users watch live CPU, memory, GC, and runtime signals and jump into profiling data for a selected interval without restarting the app in profiling mode."
---

## Overview

JetBrains shipped Monitoring in ReSharper as part of the 2026.1 release, bringing a runtime-observability workflow that had previously been available in Rider into Visual Studio. The feature opens a live monitoring window while apps run or debug, showing CPU, memory, GC activity, counters, metrics, and related runtime information.

## Why it matters

The useful change here is workflow, not just telemetry. Instead of restarting an application in a separate profiling mode and hoping the same bottleneck appears again, developers can spot a spike while the app is already running, select the relevant time range, and inspect profiler data for that interval directly.

## Key details

- Monitoring starts automatically during run or debug sessions unless developers change that behavior.
- Developers can inspect CPU, memory, GC activity, counters, metrics, and environment data in one place.
- ReSharper can flag issues such as performance hotspots, slow ASP.NET Core actions, and database inefficiencies while the app is running.
- Selected time ranges or detected issues can be opened directly in the built-in profiler for deeper analysis.

## SWE takeaway

Developer tooling is increasingly collapsing the gap between coding, debugging, and performance investigation. That matters because modern software teams want shorter loops from symptom to root cause, especially as applications get more distributed and AI-assisted development increases the speed of change.
