---
title: "Pattern 4: Guardrails that earn their place"
sidebar_label: 4. Guardrails that earn their place
description: Every guardrail has a named owner, a stated reason, a test and an exception route, and is reviewed regularly. A guardrail that cannot justify itself again is removed.
image: /img/social/patterns-guardrails-that-earn-their-place.png
---

# Pattern 4: Guardrails that earn their place

![Visual summary of pattern 4: the life cycle of a guardrail, shown as a loop. 1. Propose: a guardrail with a named owner. 2. Test it against five questions: is there an owner, is the reason stated, can you check whether it is met, is it the lightest rule that works, and is there an exception route? 3. Apply it, with an exception route: a value stream may ask for an exception and the owner answers within a set time. 4. Review it regularly, for example every six months: keep, change or remove. Many exceptions are a signal to change the guardrail. Below: a guardrail has to earn its place again at every review.](/img/diagrams/pattern-guardrails.svg)

<small>Status: **proposed (v0.1).** Supports rules [3 and 4](../method/index.md#what-makes-it-a-federation).</small>

## In short

A guardrail is a rule that applies to all value streams. Each guardrail has
a named owner, a stated reason and an exception route. It is reviewed
regularly, and removed if it can no longer justify itself.

## Context

Every organization needs some rules that apply to everyone: laws and
regulations, security, finance, privacy, the brand, shared promises to
customers. In a YottaDots organization these are the guardrails. They are the
main limit on the value streams' freedom of how.

## Problem

Rules are easy to add and hard to remove. Each one makes sense when it is
written. Over time they pile up, their reasons are forgotten, and nobody feels
able to remove them. A federation with too many guardrails is a hierarchy
again, only with different words.

## Pattern

1. **Propose with an owner.** Every guardrail has one named owner, a person
   or role, who can explain it and decide on exceptions.
2. **Test before adoption.** A guardrail is adopted only if the answer to all
   five questions is yes:
   - Is there a **named owner**?
   - Is the **reason** stated, such as a law, a risk or a shared promise?
   - Can you **check** whether it is met?
   - Is it the **lightest rule** that does the job?
   - Is there an **exception route**?
3. **Apply with an exception route.** A value stream may ask for an
   exception, with a reason. The owner answers within a set time. Exceptions
   and answers are logged.
4. **Review regularly,** for example every six months. For each guardrail the
   owner shows that it is still needed. The outcome is: keep, change or
   remove.
5. **Adopt through the objection round.** New guardrails are added to the
   central list in the open, and value streams can object (see
   [Objection round on goals](./objection-round-on-goals.md)).

## Why it works

The review reverses the usual burden. A rule normally stays until someone
manages to remove it. Here, a rule leaves unless its owner shows it is still
needed. The exception route stops shadow routes: people who are blocked by a
rule have an official way to say so, so they do not need to work around it.
And the exception log shows which guardrails chafe, so the review has facts to
work with.

Similar ideas are known as sunset clauses in law-making.

## Guardrails

- The guardrail list is **public** and part of the
  [central list](./name-what-is-central.md).
- Exceptions are decided by the **owner**, not by escalation to whoever is
  most senior.
- A guardrail without an owner is **void** until it has one.

## Signals

- The number of guardrails stays small and stable, or goes down.
- Reviews remove or simplify guardrails from time to time.
- Exception requests are answered on time, and patterns in them lead to
  changes.
- People can explain why each guardrail exists.

## Anti-patterns

- **Rubber-stamp review.** Every guardrail is kept, every time, without
  discussion.
- **Vague guardrails.** "Act in line with our values" cannot be checked, so it
  can be used against anyone.
- **Guardrails as method.** A guardrail that prescribes how to work (for
  example, "all teams use Scrum") takes away the free how. Ask whether the
  goal can be reached with a lighter rule.
- **The exception route nobody uses,** because asking is slow or seen as
  disloyal.

## Evidence

- Sunset clauses are a known instrument in law-making. Their effect is mixed:
  reviews can become routine extensions.
- **[Needs Evidence]** That periodic review keeps the number of guardrails
  low in organizations. No YottaDots cases yet. The review period and the
  five questions are starting points, not proven values.

## Related

- [Opt-out of shared services](./opt-out-of-shared-services.md): only a
  guardrail can make a service mandatory.
- [Name what is central](./name-what-is-central.md): agreed guardrails are on
  the central list.
