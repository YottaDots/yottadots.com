---
title: "Pattern 5: AI with a human owner"
sidebar_label: 5. AI with a human owner
description: Every piece of work AI does has a named human owner who decides and is accountable for the result. AI prepares, drafts and checks; the owner decides; the AI's part is visible.
image: /img/social/patterns-ai-with-a-human-owner.png
---

# Pattern 5: AI with a human owner

![Visual summary of pattern 5, in three parts from left to right. First, the AI co-worker prepares, drafts, checks and summarises. Second, a named human owner reviews, decides and is accountable for the result. Third, the result is visible: the AI's part is logged and disclosed. Below: no owner, no AI task. The value stream decides how it uses AI, within the agreed guardrails.](/img/diagrams/pattern-ai-human-owner.svg)

<small>Status: **proposed (v0.1).** Supports the [Augment principle](../method/principles.md#augment). Open question: how the "co-worker" idea fits with human accountability.</small>

## In short

Every piece of work AI does has one named human owner. AI prepares, drafts
and checks. The owner decides and is accountable for the result. The AI's
part is visible to the people affected.

## Context

Any value stream that uses AI for real work: writing, analysis, code,
customer contact, planning, reporting. It matters most when AI output is used
in decisions or reaches customers.

## Problem

AI can do more and more of the work, but it cannot be held accountable. When
something goes wrong, "the AI did it" is no answer, yet it is easy to get
there: AI output passes through several hands, each assumes someone else
checked it, and in the end nobody owns it. The opposite also happens: fear of
mistakes keeps AI out of work it could do well.

## Pattern

1. **Name the owner.** For every task AI does, one human is named as owner:
   a person or role, not a team. No owner, no AI task.
2. **Divide the work.** AI prepares, drafts, checks and summarises. The owner
   reviews and decides. For each kind of task, the owner sets how closely the
   work must be checked.
3. **Make the AI's part visible.** Record where AI contributed, in a way that
   fits the work: a note in a document, a line in a commit, a label on a
   customer message.
4. **The value stream decides how.** Which tools, for which tasks and how the
   checks are done is part of the free how, within the agreed guardrails, for
   example on privacy and data.

YottaDots itself works this way: see
[How we use AI](../ai-coworker/how-we-use-ai.md).

## Why it works

Accountability needs a person. Naming one before the work starts means the
question "who checks this?" has an answer in advance. It also makes it safer
to use AI more: the owner knows the work is theirs, so they decide how much to
rely on it. And visible AI use lets others judge the result with the right
level of trust.

## Guardrails

- The owner is a **human**, always. AI can be named as a contributor, never
  as an owner.
- The owner must have the **authority and the time** to check the work.
  Naming someone who cannot do that does not count.
- Decisions about people, such as hiring, appraisal or dismissal, need extra
  care and may be limited by law and by agreed guardrails.

## Signals

- For any AI-assisted result, people can say who owns it.
- Mistakes in AI output are found by the owner before they reach others,
  more often than after.
- Value streams use AI for more work over time, without more incidents.

## Anti-patterns

- **Rubber-stamp owner.** The owner approves everything without looking,
  because there is too much to check.
- **Team as owner.** "The team owns it" means nobody does.
- **Hidden AI.** AI contributes, but no one says so.
- **AI only bolted on.** AI is added to every step of an old process, instead
  of redesigning the work (see [AI as a co-worker](../ai-coworker/index.md)).

## Evidence

- Human oversight of AI is a common requirement in AI regulation and
  guidance, such as the EU AI Act for high-risk systems.
- **[Needs Evidence]** That a named owner per AI task leads to fewer errors
  without slowing the work down. No YottaDots cases yet.

## Related

- [AI as a co-worker](../ai-coworker/index.md)
- [How we use AI](../ai-coworker/how-we-use-ai.md)
- [Guardrails that earn their place](./guardrails-that-earn-their-place.md):
  AI guardrails follow the same rules as any other.
