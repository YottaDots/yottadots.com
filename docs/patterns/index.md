---
id: index
title: Patterns
description: Reusable solutions that turn the four YottaDots rules into daily practice. Each pattern explains the problem, the solution, why it works and how you know it does.
image: /img/social/patterns.png
---

# YottaDots Patterns

Patterns describe reusable solutions to recurring organizational problems.
The [four rules of the method](../method/index.md) say *what* makes an
organization a federation. Patterns show *how* to make those rules work in
daily practice.

![Pattern map. The centre at the top, value streams in the middle, shared services at the bottom. Five numbered patterns are placed where they act. 1 Name what is central: on the centre. 2 Objection round on goals: on the arrows between the centre and the value streams. 3 Opt-out of shared services: on the line between value streams and shared services. 4 Guardrails that earn their place: on the boundary around the value streams. 5 AI with a human owner: alongside everything, wherever AI does work.](/img/diagrams/patterns-map.svg)

<small>Status: **proposed (v0.1).** These patterns are drafts for discussion.
None has been tested in practice yet. See [Evidence](#evidence) below.</small>

## The first five patterns

| # | Pattern | Problem it solves | Makes this rule work |
|---|---|---|---|
| 1 | [Name what is central](./name-what-is-central.md) | The centre slowly takes over decisions nobody gave it | Rule 3: everything not named stays with the value streams |
| 2 | [Objection round on goals](./objection-round-on-goals.md) | Goals are set without the people who must reach them | Rule 2: value streams help shape the what |
| 3 | [Opt-out of shared services](./opt-out-of-shared-services.md) | Shared services become monopolies that nobody can refuse | Rule 4: opt-out unless agreed as a guardrail |
| 4 | [Guardrails that earn their place](./guardrails-that-earn-their-place.md) | Rules pile up and never go away | Rules 3 and 4: the limits on freedom stay few and justified |
| 5 | [AI with a human owner](./ai-with-a-human-owner.md) | AI does work, but nobody is accountable for it | AI as a co-worker; humans remain accountable |

Patterns 1 to 4 each protect one of the federation's safeguards. Without
them, the rules exist on paper only. Pattern 5 applies everywhere AI does
work.

## How a pattern is written

Every pattern follows the same structure, so patterns are easy to compare and
to combine.

| Section | Question it answers |
|---|---|
| **In short** | What is the pattern, in two sentences? |
| **Context** | Where does this problem occur? |
| **Problem** | What tension or constraint exists? |
| **Pattern** | What organizational response is proposed? |
| **Why it works** | What mechanism makes the response effective? |
| **Guardrails** | What boundaries are required? |
| **Signals** | How do we know the pattern is working? |
| **Anti-patterns** | What commonly goes wrong? |
| **Evidence** | What do we know, and what still needs to be shown? |

Each pattern also has a visual summary that explains its one main idea.

## Evidence

YottaDots aims to be evidence-based. Each pattern therefore says plainly what
is known and what is not. At this stage the patterns are reasoned from the
rules of the method and from related practice in other frameworks. They have
not yet been tested as YottaDots patterns. A pattern becomes **accepted** once
real cases show that it works, and where it does not.

Used one of these patterns? Share what happened in a
[GitHub issue](https://github.com/YottaDots/yottadots.com/issues). Failures are
as useful as successes.

## Propose a pattern

Patterns can be proposed by anyone. Use the structure above and open a pull
request (see [Contribute](../community/contribute.md)). Accepted patterns
become part of the YottaDots knowledge base.

Candidates for later patterns include: stopping what a change replaces,
stable interfaces between value streams, and funding shared services.
