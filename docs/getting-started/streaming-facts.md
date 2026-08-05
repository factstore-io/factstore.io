---
sidebar_position: 5
title: Streaming Facts
description: Ordered, resumable real-time fact streams in FactStore — subscriptions, replay and checkpointing.
---

<head>
  <meta name="robots" content="noindex, follow" />
</head>

# Streaming Facts

:::info Documentation in progress
This page has not been written yet. Until it lands, the
[Quick Start](./quick-start.md#streaming-facts) covers `streamAll()` and
`StreamingOptionSet`, and the
[5-Minute Tutorial](./five-minute-tutorial.mdx) shows a live subscription
against a running server.
:::

Planned for this page:

- `streamAll()` and catch-up semantics — history first, then live
- `StreamingOptionSet`: `lastSeenId`, `batchSize`, `pollDelayMs`
- checkpointing and resuming exactly where you left off
- `subscribe` versus `replay`, and when you want each
- building projections and integrations on top of a stream
