---
sidebar_position: 3
title: Appending Facts
description: Idempotency keys, append conditions and consistency guarantees when writing facts to a FactStore.
---

<head>
  <meta name="robots" content="noindex, follow" />
</head>

# Appending Facts

:::info Documentation in progress
This page has not been written yet. Until it lands, the
[Quick Start](./quick-start.md#appending-facts) covers the same ground in less
detail: simple appends, `AppendRequest`, idempotency keys and append
conditions.
:::

Planned for this page:

- unconditional appends, single and batched
- `AppendRequest`, and the `Appended` / `AppendConditionViolated` /
  `AlreadyApplied` outcomes
- idempotency keys, and what "processed at most once" guarantees across retries
- append conditions, and how to enforce invariants such as *"this course only
  has 30 seats"* without locking
- Dynamic Consistency Boundaries versus aggregate-based streams
