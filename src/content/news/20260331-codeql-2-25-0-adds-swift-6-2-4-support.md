---
title: "CodeQL 2.25.0 improves Swift, Java, and browser-side analysis"
pubDate: 2026-03-31
tags: ["GITHUB", "SECURITY", "SWIFT", "JAVA"]
sourceUrl: "https://github.blog/changelog/2026-03-31-codeql-2-25-0-adds-swift-6-2-4-support/"
summary: "GitHub shipped CodeQL 2.25.0 on March 31 with Swift 6.2.4 support, a rewritten Java control-flow graph, and new browser-oriented source modeling for JavaScript and TypeScript analysis."
---

## Overview

GitHub released CodeQL 2.25.0 with a set of language-analysis upgrades that matter to real security workflows, not just release notes. The update adds support for apps built with Swift 6.2.4, rewrites the Java control-flow graph for better precision, and expands JavaScript and TypeScript analysis with browser-specific source kinds.

## Why it matters

Static analysis only helps if it keeps pace with the languages and frameworks teams actually use. This release is notable because it improves both coverage and accuracy across several ecosystems at once: Swift for Apple teams, Java and Kotlin for enterprise backends, and browser-side JavaScript for web security work.

## Key details

- Swift analysis now supports apps built with Swift 6.2.4.
- Java and Kotlin analysis gets a rewritten control-flow graph intended to improve precision and represent constructs more accurately.
- C# analysis adds support for partial constructors in C# 14.
- JavaScript and TypeScript analysis now supports browser-oriented source kinds such as URL query, URL fragment, and message-event inputs.

## Industry signal

This is the sort of plumbing update that quietly matters a lot. As AI-generated code increases the volume of code changes entering review pipelines, teams need security tooling that is current, language-aware, and less noisy. Better analysis precision is not flashy, but it is exactly what makes automated review systems usable at scale.
