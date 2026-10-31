---
title: How we make visuals
sidebar_label: Visuals
image: /img/social/community-visuals.png
---

# How we make visuals

YottaDots visuals are made the same way as the rest of the site: AI drafts,
humans decide. Every visual is made from source files in the repository, so
anyone can see how it was made, reuse it under CC BY 4.0, and propose a
change.

## Three kinds of visuals

| Kind | What | How it is made |
|---|---|---|
| **Share images** | The image shown when a page is shared on LinkedIn, X, Slack or Teams | Generated automatically from the page title and first paragraph, with one fixed template |
| **Visual summaries** | One image at the top of an article that summarises its message | Drawn as code (SVG), drafted by AI, reviewed by a human |
| **Diagrams** | Explanations inside a page: structures, flows, comparisons | Drawn as code (SVG), drafted by AI, reviewed by a human |
| **Illustrations** | Images that set a mood rather than explain | Only by exception, with the founder's approval (see the rules below) |

## The visual style

- **Colours:** orange `#f28c28` on dark `#18191b`, with grey `#3a3c40` for
  lines and secondary shapes. Use orange for what matters most.
- **Font:** Inter.
- **The federation motif:** independent members (clusters of dots) around a
  small shared core. Lines run from the members to the core, because members
  delegate to the core and not the other way round. Use it as the recurring
  graphic element.
- **Simple and flat:** no gradients, shadows or 3D. A visual explains one idea.

## Who does what

| Step | AI co-worker | Human |
|---|---|---|
| 1. Ask | | Says what needs explaining, and for whom |
| 2. Draft | Proposes the visual as code (SVG or template), in the YottaDots style | |
| 3. Review | Checks the result as an image: readability, colours, text size, alt text | Judges it: is it correct, clear, on-brand? |
| 4. Change | Adjusts it based on feedback | |
| 5. Publish | Opens a pull request | Approves and merges |

Because visuals are code, every change is visible in the pull request, and
the AI's part is recorded in the commit history (see
[How YottaDots uses AI](../ai-coworker/how-we-use-ai.md)).

Visual summaries and diagrams are stored in `static/img/diagrams/` as SVG. The
SVG file is the source: open it in any text editor or vector tool to change
it.

## Rules

- **Every visual has alt text** that says what it shows.
- **Text in a visual must also be in the page.** A visual supports the text; it
  never replaces it.
- **No AI-generated images of people,** and no images in the style of a
  recognisable artist or brand.
- **No visuals copied from others** unless their license allows it. Say where
  they come from.
- **AI-generated illustrations** (raster images from image-generation tools)
  are only used with the founder's approval and are labelled as AI-generated.
  They may not be protected by copyright.
- **The logo** is not covered by CC BY 4.0 and may only be used as described in
  the [trademark policy](https://github.com/YottaDots/yottadots.com/blob/main/TRADEMARKS.md).

## Share images in practice

Each page automatically gets a share image like this one:

![Share image for the Principles page: the YottaDots logo, the title "Principles", the first sentence of the page and the federation motif on a dark background](/img/social/method-principles.png)

To improve a page's share image, add a short `description` to the page's front
matter. That text is also used by search engines. For more control, use
`card_title`, `card_description` or `card_section`.
