---
title: "Pattern 3: Opt-out of shared services"
sidebar_label: 3. Opt-out of shared services
description: Value streams may stop using a shared service, with notice, unless the service has been agreed as a guardrail. Shared services have to earn their users.
image: /img/social/patterns-opt-out-of-shared-services.png
---

# Pattern 3: Opt-out of shared services

![Visual summary of pattern 3. On the left, an ordinary shared service, such as a design system or a data platform. Three value streams use it, and one has opted out with notice and uses its own solution. On the right, a guardrail service, such as identity and access or financial reporting. All value streams must use it, but it has a named owner, a stated reason and an exception route. Below: a shared service must earn its users; only a guardrail can make it mandatory.](/img/diagrams/pattern-opt-out.svg)

<small>Status: **proposed (v0.1).** Supports [rule 4](../method/index.md#what-makes-it-a-federation).</small>

## In short

A value stream may stop using a shared service, with notice, unless the
service has been agreed as a guardrail. Ordinary shared services have to earn
their users. Only a guardrail can make a service mandatory.

## Context

Organizations with shared services that value streams depend on: IT
platforms, data, HR, finance, procurement, design systems, legal support.

## Problem

Shared services are set up to save money and avoid duplication. But a
service that everyone must use has no reason to improve. Waiting times grow,
priorities are set by the service, and value streams build workarounds.
Making a service mandatory is a central decision, yet it is often taken
without anyone saying so.

## Pattern

1. **Split shared services in two kinds.**
   - **Ordinary services:** offered, not imposed. Value streams may use them
     or not.
   - **Guardrail services:** mandatory, because there is a stated reason such
     as law, security or a shared customer promise. They follow the rules for
     [guardrails](./guardrails-that-earn-their-place.md): named owner, reason,
     exception route, review.
2. **Opt out with notice.** A value stream that wants to leave an ordinary
   service says so in advance, for example one quarter ahead, with a short
   reason. The service gets a fair chance to respond.
3. **Opting out has a price.** A value stream that leaves pays for its own
   solution and meets the same guardrails, for example on security and data.
4. **Opting back in is possible,** on the same terms as other users.
5. **Opt-outs are feedback.** The service owner reviews every opt-out and
   reports them to the centre.

## Why it works

An exit option gives users a voice. When value streams can leave, the
service has a reason to listen to them, much as a supplier listens to a
customer who could switch. The point is not that many value streams leave.
The point is that they could.

This is close to the idea of the platform as a product in Team Topologies,
where internal platforms are treated as products that have to be good enough
for teams to choose. YottaDots makes the choice a formal right.

## Guardrails

- A service can only become mandatory through the
  [guardrail process](./guardrails-that-earn-their-place.md), never by
  decision of the service itself.
- The notice period and cost rules are **published** in advance, not
  negotiated per case.
- A value stream that opts out stays within all agreed guardrails.

## Signals

- Shared services ask their users what they need, and act on it.
- There are few opt-outs, and each one is explained.
- The list of guardrail services stays short.

## Anti-patterns

- **Everything becomes a guardrail.** Services that fear losing users get
  themselves declared mandatory. Watch the guardrail list.
- **Opt-out on paper.** The right exists, but the cost rules or notice period
  make it impossible in practice.
- **Fragmentation.** Value streams leave for small reasons and duplicate work
  across the organization. A short reason and a notice period help.
- **No way back.** Value streams that left cannot return without a penalty.

## Evidence

- Treating internal platforms as products is common advice, for example in
  Team Topologies.
- **[Needs Evidence]** That a formal opt-out right improves shared services
  more than it fragments them. No YottaDots cases yet.

## Related

- [Guardrails that earn their place](./guardrails-that-earn-their-place.md):
  how a service becomes mandatory.
- [Name what is central](./name-what-is-central.md): guardrail services are on
  the central list.
