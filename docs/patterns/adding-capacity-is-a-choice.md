---
title: "Pattern 6: Adding capacity is a choice too"
sidebar_label: 6. Adding capacity is a choice too
description: When a value stream says "no capacity", the first answer is to choose, not to hire. Adding a team, supplier or application is a what-decision with an objection round and a full cost of ownership.
image: /img/social/patterns-adding-capacity-is-a-choice.png
---

# Pattern 6: Adding capacity is a choice too

![Visual summary of pattern 6. A value stream says: no capacity. Two routes follow. The usual route: hire another team, which leads to more applications, more to maintain, and work that is never used. The YottaDots route has three steps. 1. Choose first: rank the work and stop or postpone something. 2. If capacity is still needed, treat it as a what-decision: name the full cost of ownership, including maintenance for years, and hold an objection round. 3. Check later whether what was built is used. Below: a no is information, not an obstacle to buy away.](/img/diagrams/pattern-adding-capacity.svg)

<small>Status: **proposed (v0.1).** Supports [rule 1](../method/index.md#what-makes-it-a-federation) and closes a gap described on [Why YottaDots?](../why/index.md).</small>

## In short

When a value stream says "we have no capacity", the first answer is to
choose: rank the work and stop or postpone something. Adding a team, a
supplier or a new application is itself a decision about the what. It is
taken in the open, with its full cost over the years, and value streams can
object to it.

## Context

Organizations where demand is higher than capacity and money is available:
fast-growing companies, high-tech firms with strong order books, and
organizations with large project budgets.

## Problem

A "no, we have no capacity" is useful information. It forces a choice: if we
do this, we cannot do that. But when money is available, it is easier to buy
the choice away. A manager hires an extra team or a supplier, and the work
goes ahead.

The costs come later. Each extra team builds its own solutions, so the number
of applications grows. All of them must be maintained, often for many
years. And because nothing was ever stopped, some of what is built is never
used. One developer at a high-tech manufacturer estimated, looking back, that
about 60 percent of their work was never used.

## Pattern

1. **Choose first.** When a value stream reports that it has no capacity, the
   centre ranks the work. Something is stopped or postponed before anything is
   added.
2. **Treat new capacity as a what-decision.** If capacity is still needed, a
   new team, supplier or application is proposed as a decision of the centre,
   with:
   - the reason: which priority it serves, and why choosing is not enough;
   - the **full cost of ownership**: not only building, but maintaining,
     supporting and eventually replacing it;
   - **who owns it** after it is built.
3. **Hold an objection round.** Value streams can object, for example because
   the new team duplicates what they already do, or because they will have to
   maintain the result (see
   [Objection round on goals](./objection-round-on-goals.md)).
4. **Check usage later.** Everything built with extra capacity gets a usage
   check after a set period (see [Usage check](./usage-check.md)).

## Why it works

The pattern restores the function of "no". Choosing first means that limited
capacity does what it should: it forces a priority. Naming the full cost of
ownership makes the long tail of maintenance visible at the moment of
decision, when it can still change the decision. And an objection round
brings in the people who will live with the result.

## Guardrails

- The centre may still decide to add capacity. The pattern makes the decision
  visible and reasoned; it does not forbid it.
- A value stream's "no capacity" may never count against it. It is
  information, not a lack of commitment.
- An [experiment budget](./experiment-budget.md) may not be used to add
  permanent capacity. Experiments are short and reversible.
- The full cost of ownership is estimated by the people who will maintain
  the result, not only by those who want it built.

## Signals

- When a value stream says no, something is stopped or postponed more often
  than a team is added.
- The number of applications and suppliers grows more slowly than the
  workload.
- Proposals for new capacity name an owner and a maintenance cost.

## Anti-patterns

- **The hidden team.** Capacity is added through a supplier contract or a
  project budget, so it never shows up as a decision.
- **Choosing on paper.** Work is "postponed" but quietly continues.
- **Build cost only.** The proposal counts the cost of building, not the
  years of maintenance.
- **Punishing the no.** Value streams that report limits are seen as
  unwilling, so they stop reporting them.

## Evidence

- Unused work is common: product analytics company Pendo found that about 80
  percent of features in the average software product it studied are rarely
  or never used. Pendo sells feature-adoption software.
- **[Needs Evidence]** That treating new capacity as a what-decision reduces
  sprawl and unused work. No YottaDots cases yet.

## Related

- [Why YottaDots?](../why/index.md): money replaces choices
- [Objection round on goals](./objection-round-on-goals.md)
- [Usage check: stop what is not used](./usage-check.md)
