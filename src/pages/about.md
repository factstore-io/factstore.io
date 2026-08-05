---
title: About FactStore
description: FactStore is an open-source event store for event sourcing, maintained as a community project and licensed under Apache 2.0. Who builds it, what it is, and where it stands.
keywords:
  - FactStore
  - about
  - open source event store
  - event sourcing
  - Apache 2.0
hide_table_of_contents: false
---

# About FactStore

**FactStore is an open-source event store for building event-sourced
applications.** It gives you a small set of well-defined primitives — append,
query, stream — and leaves the modelling decisions to you.

The project is free software, published under the
[Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0). There is no
hosted service, no paid tier and no sign-up. You run FactStore yourself, on your
own infrastructure.

## What the project produces

FactStore is a collection of libraries and tools rather than a single binary:

| Component | What it is |
| --- | --- |
| `factstore-specification` | The implementation-agnostic contracts and behavioural rules: the APIs for appending facts, reading streams, subscribing, and the ordering and consistency guarantees. Written in Kotlin. |
| `factstore-foundationdb` | An implementation of that specification using [FoundationDB](https://www.foundationdb.org/) as the storage engine, with strong consistency, ordered writes and efficient range reads. |
| HTTP & gRPC Server | A lightweight, cloud-native server exposing the full FactStore API. Deployable on-premise or in the cloud. |
| Kotlin Client SDK | An idiomatic, coroutine-native client for JVM applications. |
| Command-Line Interface | A native binary for scripting, exploration and local development. |
| FactExplorer | A browser-based UI for browsing stores, querying facts by subject or tag, and watching live fact streams. |

## The idea behind it

Every meaningful thing that happens in a system is a fact. An order was placed.
A payment was confirmed. A customer was onboarded. Those things happened, and
they do not un-happen. FactStore keeps a reliable, ordered record of them and
never throws that history away.

Two design decisions distinguish it from a plain append-only log:

- **Facts are retrievable along two independent axes.** By *subject*, which
  gives you the classic per-entity event stream, and by *tag*, which cuts across
  subjects entirely. In most event stores the second kind of question requires
  building a separate read model first. Here both are first-class queries over
  the same facts.
- **Consistency boundaries are chosen per operation.** Traditional
  aggregate-based streams and Dynamic Consistency Boundaries can be used in the
  same store, and mixed. FactStore does not decide for you when you design your
  schema.

## Project status

FactStore is **pre-release**. The APIs are usable and documented, and the
[5-Minute Tutorial](/docs/getting-started/five-minute-tutorial) works today, but
the project is not yet recommended for production workloads. Interfaces may
still change.

## Who maintains it

FactStore is maintained by [Domenic Cassisi](https://dcassisi.com) together with
contributors from the community. Development happens in the open on GitHub.

## Get in touch

- **Questions and design discussion** —
  [GitHub Discussions](https://github.com/factstore-io/factstore/discussions)
- **Bugs and feature requests** —
  [GitHub Issues](https://github.com/factstore-io/factstore/issues)
- **Security reports** — see the [security policy](/security)
- **Anything else** — [hello@factstore.io](mailto:hello@factstore.io)

Contributions are welcome, from typo fixes upwards.
