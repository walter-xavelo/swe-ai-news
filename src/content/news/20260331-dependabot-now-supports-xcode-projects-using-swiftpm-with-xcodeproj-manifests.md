---
title: "Dependabot finally supports Xcode-managed SwiftPM projects without Package.swift"
pubDate: 2026-03-31
tags: ["GITHUB", "DEPENDENCIES", "SWIFT", "APPLE"]
sourceUrl: "https://github.blog/changelog/2026-03-31-dependabot-now-supports-xcode-projects-using-swiftpm-with-xcodeproj-manifests/"
summary: "GitHub updated Dependabot so it can discover and update Swift Package Manager dependencies in Xcode projects that store package rules inside .xcodeproj and .xcworkspace bundles instead of a top-level Package.swift file."
---

## Overview

GitHub added long-requested Dependabot support for Xcode projects that manage Swift Package Manager dependencies through `.xcodeproj` and `.xcworkspace` bundles. That means repositories no longer need a top-level `Package.swift` manifest for Dependabot to detect and update Swift dependencies.

## Why it matters

This closes a real gap in dependency automation for Apple developers. A large share of iOS and macOS projects rely on Xcode-managed package metadata stored in `project.pbxproj` and nested `Package.resolved` files, which previously left them outside Dependabot’s normal update path. For those teams, dependency hygiene often meant more manual work and slower patching.

## Key details

- Dependabot can now discover Xcode-managed `Package.resolved` files inside both `.xcodeproj` and `.xcworkspace` bundles.
- It reads version rules from `project.pbxproj` so updates respect constraints already defined in Xcode.
- The bot updates the relevant resolved files in place instead of requiring a different manifest layout.
- GitHub says the feature is generally available on cloud now and planned for GitHub Enterprise Server 3.22.

## Bigger picture

This is a good example of automation catching up to how teams actually build software instead of forcing projects into a canonical format. The more software supply-chain tooling adapts to real-world repository layouts, the less friction there is between secure defaults and day-to-day developer workflows.
