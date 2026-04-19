---
title: "GitHub ships CodeQL 2.25.2 with Kotlin 2.3.20 support and broader query tuning"
pubDate: 2026-04-19
tags: ["GITHUB", "SECURITY", "CODEQL", "KOTLIN"]
sourceUrl: "https://github.blog/changelog/2026-04-15-codeql-2-25-2-adds-kotlin-2-3-20-support-and-other-updates/"
summary: "GitHub released CodeQL 2.25.2 with Kotlin 2.3.20 support, several false-positive reductions across Java, Kotlin, C/C++, and C#, plus severity score updates for XSS and log-injection findings across multiple languages."
---

## Overview

GitHub published **CodeQL 2.25.2**, a security-analysis update that is more useful than its small version bump suggests. The release adds support for **Kotlin 2.3.20**, tightens several noisy queries, and recalibrates security severity scores across a wide set of language packs.

## Why it matters

Static analysis only helps if teams trust the output enough to keep it on in real pipelines. This update matters because it addresses two common sources of drag in code scanning programs: lagging language support and alert fatigue. Better Kotlin coverage helps teams on newer JVM stacks, while false-positive reductions and severity adjustments make it easier to prioritize what actually deserves engineering time.

## Key details

- GitHub says CodeQL now supports analysis of Kotlin versions up to 2.3.20.
- The `java/tainted-arithmetic` query was tuned so it no longer flags common comparison-based bounds-checking patterns, reducing false positives.
- The `java/potentially-weak-cryptographic-algorithm` query no longer flags elliptic curve algorithms, HMAC-based algorithms, or PBKDF2 as insecure by default.
- GitHub also reduced false positives in several C/C++ queries, including `cpp/suspicious-add-sizeof`, `cpp/wrong-type-format-argument`, and `cpp/integer-multiplication-cast-to-long`.
- In C#, `cs/constant-condition` was simplified and `cs/constant-comparison` was removed because the former now covers those results.
- Security severity scores were updated across C/C++, C#, Go, Java/Kotlin, Python, Ruby, Swift, and Rust, including several XSS findings being raised from medium to high and many log-injection findings being lowered.
- GitHub notes the release is automatically deployed to users of code scanning on github.com and will arrive in a future GHES release.

## SWE takeaway

This is a good example of quiet but high-leverage security tooling work. The headline feature is Kotlin 2.3.20 support, but the more important engineering value is the reduction of scanner noise and the better calibration of finding severity. Those are the changes that make secure-by-default workflows easier to sustain in real CI rather than just in demos.
