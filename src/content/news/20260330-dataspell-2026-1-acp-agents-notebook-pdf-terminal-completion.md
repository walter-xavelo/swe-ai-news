---
title: "DataSpell 2026.1 expands ACP agent support and streamlines notebook workflows"
pubDate: 2026-03-30
tags: ["JETBRAINS", "AI", "DEVELOPER_TOOLS", "DATA"]
sourceUrl: "https://blog.jetbrains.com/dataspell/2026/03/dataspell-2026-1-ai-agents-ecosystem-export-notebooks-to-pdf-editor-improvements/"
summary: "JetBrains released DataSpell 2026.1 with broader ACP-based agent support, one-click agent discovery through the ACP Registry, native notebook-to-PDF export, and better terminal completion inside the IDE."
---

## Overview

JetBrains released DataSpell 2026.1 with a clear focus on combining data-science workflows and AI tooling inside one environment. The update widens support for external agents via the Agent Client Protocol, adds the ACP Registry for simpler discovery and installation, and ships a more self-contained notebook workflow with built-in PDF export.

## Why it matters

Notebook-heavy work is often fragmented across editors, terminals, browser tabs, and one-off export tooling. DataSpell is trying to reduce that sprawl. The more interesting signal is that JetBrains is treating agent interoperability as a platform feature across products, not a one-off experiment. For teams doing data engineering, analysis, or ML-adjacent development, that means the IDE can become both the notebook surface and the agent integration point.

## Key details

- AI chat now supports Codex, Cursor, and other agents through ACP in addition to JetBrains’ own tooling.
- The new ACP Registry is built in, so agents can be discovered and installed directly from the IDE.
- Jupyter notebooks can now be exported to PDF natively, without depending on Python, nbconvert, or LaTeX.
- The integrated terminal now offers command and parameter completion for tools like Git, Docker, and custom CLIs.
- New caret animation modes are included as smaller editor-quality improvements.

## SWE takeaway

Data workflows increasingly look like software engineering workflows: terminals, reproducible artifacts, shared tooling, and now agent orchestration. DataSpell 2026.1 is notable because it tightens those loops instead of treating notebook work as a separate universe.
