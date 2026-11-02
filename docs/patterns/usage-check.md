---
title: "Pattern 7: Usage check: stop what is not used"
sidebar_label: "7. Usage check"
description: Check regularly whether what was built is actually used. What is not used is improved, or stopped and removed, so it no longer costs maintenance.
image: /img/social/patterns-usage-check.png
---

# Pattern 7: Usage check: stop what is not used

![Visual summary of pattern 7. Delivered work, such as applications, features and reports, goes through a usage check at a set moment. Three outcomes: used, so keep it; little used, so improve it or ask why; not used, so stop it and remove it. Removing is planned work with an owner. Below: what is not used still costs money until it is removed.](/img/diagrams/pattern-usage-check.svg)

<small>Status: **proposed (v0.1).** Supports the [Evolve principle](../method/principles/evolve.md).</small>

## In short

Check regularly whether what was built is used. What is used, keep. What is
little used, improve or question. What is not used, stop and remove, so it
no longer costs maintenance and attention.

## Context

Any organization that builds things for its customers or for itself:
applications, features, reports, dashboards, processes. It matters most
where a lot has been built over the years and little has ever been removed.

## Problem

Delivered work is usually counted as done. Whether anyone uses it is rarely
checked. Unused work does not disappear: it still needs maintenance, security
updates, support and licences, and it makes the landscape harder to
understand. Over the years the cost of keeping unused things alive grows,
while nobody feels responsible for removing them.

## Pattern

1. **Agree how use is measured** when the work is delivered: users, frequency,
   transactions, or another measure that fits.
2. **Set a check moment,** for example three or six months after delivery, and
   then every year.
3. **Decide on one of three outcomes:**
   - **used:** keep it;
   - **little used:** improve it, or ask the intended users why;
   - **not used:** stop it and remove it.
4. **Plan the removal as real work,** with an owner and a date. Removing is
   not "free"; it competes with new work and must be prioritized.
5. **Report the results** to the centre and the value streams, so the lessons
   feed the next round of choices.

## Why it works

What is measured gets attention. A planned usage check turns "delivered" into
"delivered and used", which is what the organization wanted in the first
place. Removing unused work frees capacity that would otherwise go to
maintenance. And the results make the next decisions better: a centre that
sees how much of last year's work is not used will choose more carefully.

## Guardrails

- The usage check is about the **work**, not the people who built it. Unused
  work is usually the result of choices made elsewhere.
- Some things are rarely used but still essential, such as disaster recovery
  or legal reporting. Their owner can say so, with a reason.
- Users are told before something is removed.

## Signals

- Usage is known for most of what has been delivered.
- Things are actually removed, every year.
- The share of work that is never used goes down over time.

## Anti-patterns

- **Measuring nothing.** "Everyone uses it" without data.
- **Never removing.** Unused work is marked as such, but stays.
- **Blame.** The check is used to find someone to blame, so people hide the
  results.
- **Usage as the only goal.** Features are pushed on users to raise the
  numbers.

## Evidence

- Unused work is common: product analytics company Pendo found that about 80
  percent of features in the average software product it studied are rarely
  or never used. Pendo sells feature-adoption software.
- **[Needs Evidence]** That a regular usage check reduces maintenance cost and
  improves later choices. No YottaDots cases yet.

## Related

- [Adding capacity is a choice too](./adding-capacity-is-a-choice.md)
- [Guardrails that earn their place](./guardrails-that-earn-their-place.md): the
  same review idea, applied to rules
- [Evolve](../method/principles/evolve.md)
