---
title: "Amazon Bedrock adds granular cost attribution for per-principal inference tracking"
pubDate: 2026-04-18
tags: ["AWS", "AI", "INFRASTRUCTURE", "FINOPS"]
sourceUrl: "https://aws.amazon.com/blogs/machine-learning/introducing-granular-cost-attribution-for-amazon-bedrock/"
summary: "AWS introduced granular cost attribution for Amazon Bedrock inference, automatically tying usage to the IAM principal that made the call and enabling team- or project-level rollups through cost allocation tags in Billing, Cost Explorer, and CUR 2.0."
---

## Overview

AWS announced **granular cost attribution for Amazon Bedrock**, adding a cleaner way to understand who is generating inference spend inside an organization. Bedrock now automatically attributes inference costs to the **IAM principal** that made each call, with optional tag-based aggregation for teams, projects, and other chargeback dimensions.

## Why it matters

As LLM usage spreads through internal tools, coding assistants, and agent workflows, cloud AI spend becomes harder to explain. Teams do not just need a total bill — they need to know which users, roles, services, and model choices are driving it. This launch makes Bedrock billing more actionable for engineering leaders who need cost controls, internal accountability, and better signals for optimization.

## Key details

- Bedrock inference costs now flow into AWS billing data with attribution to the IAM principal that issued the request.
- The data shows up in **CUR 2.0** and can also be used with **AWS Cost Explorer** once relevant configuration is enabled.
- AWS supports attribution across IAM users, assumed roles, and federated identities.
- Teams can attach principal tags or session tags and activate them as cost allocation tags to roll spend up by dimensions like team, project, or cost center.
- AWS explicitly calls out gateway scenarios, noting that a single proxy role will collapse attribution unless the architecture uses per-user role assumption or session tagging.
- The post also highlights model- and token-direction-level visibility through usage types, which helps teams see who is driving expensive model or output-token usage.

## SWE takeaway

This is practical infrastructure news for anyone running LLM features in production. Better attribution does not make models cheaper, but it does make them governable. For software teams building Bedrock-backed copilots or internal agents, that kind of visibility is quickly becoming a prerequisite for scaling usage without losing cost discipline.
