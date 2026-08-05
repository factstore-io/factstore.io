---
title: Security
description: How to report a security vulnerability in FactStore, what to expect after you report one, and the project's disclosure policy.
keywords:
  - security
  - vulnerability disclosure
  - responsible disclosure
  - FactStore
  - security.txt
hide_table_of_contents: false
---

# Security

We take security reports seriously and we are grateful for the people who send
them. This page explains how to report a vulnerability in FactStore and what
happens next.

## Reporting a vulnerability

**Please do not report security issues in public GitHub issues or discussions.**
Use one of these instead:

- **Preferred:**
  [open a private security advisory on GitHub](https://github.com/factstore-io/factstore/security/advisories/new).
  This keeps the report private until a fix is available and gives us a place to
  work with you directly.
- **By email:** [hello@factstore.io](mailto:hello@factstore.io), with
  `SECURITY` in the subject line.

A machine-readable version of this contact information is published at
[`/.well-known/security.txt`](/.well-known/security.txt), following
[RFC 9116](https://www.rfc-editor.org/rfc/rfc9116).

## What to include

The more of this you can give us, the faster we can act:

- the component and version affected (server, CLI, SDK, specification, or the
  FoundationDB implementation)
- a description of the issue and why you believe it is a security problem
- steps to reproduce it, ideally a minimal proof of concept
- the impact you think it has
- whether the issue is already publicly known

Please report in English or German.

## What to expect

FactStore is a small, pre-release open-source project rather than a company with
a staffed security team, so we will be honest about what we can promise:

| Stage | Target |
| --- | --- |
| Acknowledging your report | within 5 working days |
| An initial assessment | within 10 working days |
| Progress updates | at least every 14 days while we work on it |

We will tell you what we conclude, including if we decide something is not a
vulnerability and why.

## Disclosure

We follow coordinated disclosure. We ask that you give us a reasonable
opportunity to publish a fix before disclosing publicly — **90 days** is the
usual window, and we will normally be much faster than that. If a vulnerability
is being actively exploited, tell us and we will move immediately.

When a fix ships we publish a GitHub security advisory and credit the reporter
by name, unless you would rather stay anonymous.

## Scope

**In scope** — vulnerabilities in FactStore itself: the specification and its
implementations, the HTTP and gRPC server, the client SDK, the CLI, and
FactExplorer.

**Out of scope**:

- vulnerabilities in third-party dependencies, unless FactStore's own use of
  them causes the problem — please report those upstream
- issues in GitHub, GitHub Pages or other infrastructure we do not operate
- findings that require an already-compromised host or a
  person-in-the-middle position you had to create yourself
- missing hardening headers or similar findings on this documentation site that
  have no demonstrated impact — it is a static site with no accounts, no forms
  and no user data
- reports generated purely by an automated scanner, with no analysis of actual
  impact

## Safe harbour

If you make a good-faith effort to follow this policy, we will not pursue or
support any legal action against you for your research. Please avoid privacy
violations, service degradation and any destruction of data belonging to others,
and only test against your own installations.

## No bug bounty

We do not run a paid bug bounty programme. We offer credit, genuine thanks, and
a fast response.

## A note on maturity

FactStore is **pre-release** and is not yet recommended for production use. If
you are evaluating it for a production system, please read that statement
literally — not as boilerplate.
