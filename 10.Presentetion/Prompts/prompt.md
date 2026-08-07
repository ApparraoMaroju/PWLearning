# Standard Prompt - AI-Enabled Quality Engineering Presentation

**Purpose:** Reusable prompt template for creating a professional, pictorial presentation on "AI-Enabled Quality Engineering" (or similar QE/AI townhall topics). Captures the complete session history of prompts used to create the decks under `10.Presentetion/`.

**Date:** 2026-08-07
**Author Role:** Test Manager (Software Testing / Quality Engineering)
**Tool:** GitHub Copilot / AI-assisted content creation via Context & Prompt Engineering

---

## PROMPT 1 - Initial Presentation Request (2 professional slides)

You are a great Test Manager with 20+ years of experience who delivered high quality test deliveries. As we have a townhall, where all the software testing team members are gathering, where we have to present and talk about "AI Enabled Quality Engineering" for Manual testers. Currently we are trying to perform Test Management activities like Test Plan creation, Test Design, Bug creation, Bug Triage, etc., using Context Engineering/Prompt engineering by using GitHub Copilot. Targeting to enhance to Regression Test case identifier through RAG, Testing AI Applications/Agents, AI DevOps and AI Governance in future. Generate very professional slides one or two which can help to help us to the way that we are working and planning with AI on test management.

**Expected Output:**
- 1-2 professional slides (16:9) covering: how we work with AI today (Context Engineering + GitHub Copilot) and our future roadmap (RAG, AI app testing, AI DevOps, AI Governance).
- Each slide must include presenter notes.

---

## PROMPT 2 - Consolidate Into a Single Slide

Create a single professional slide with all the content that was created in "AI-Enabled-Quality-Engineering.pptx".

**Expected Output:**
- One dense but clean one-pager containing ALL previously created content (no content dropped):
  - Working model (Manual Testers -> Context Engineering -> GitHub Copilot -> Test Artifacts)
  - Four test-management activities (Test Plan Creation, Test Design, Bug Creation, Bug Triage)
  - Roadmap phases (NOW / NEXT / BEYOND)
  - Key enablers + takeaway

---

## PROMPT 3 - Add Pictorial Representations

The newly created presentation has good content, but it does not have any symbols, or pictures/graph, diagrams... please generate another version with some pictorial representations along with text, which will attract the audience.

**Expected Output:**
- Same content re-imagined with visual storytelling:
  - Custom flat icons (clipboard, pencil, bug, funnel, users, bulb, robot, shield, book, db, lock, bolt, rocket, trend, chart, layers, globe, target, check-circle)
  - Flow diagrams with arrows
  - A grouped bar chart ("Pilot Impact - Illustrative": 2x test cases/day, 5x faster bug reports, 2.5x defects triaged/day)
  - Timeline / roadmap cards
  - Enabler chips with icons

---

## PROMPT 4 - Strategic 4-Section Deck

Can we create another version which can include/cover:
1. Context & Functional Testing Shift
2. Market Trends and Business Impacts
3. Core Technology & Domain Pillars
4. Strategic Path Ahead & Roadmap

Please make sure that all the context that was created got covered with pictorial representation in a professional manner.

**Expected Output:**
- 4-slide deck, one slide per section, with icons + diagrams + chart:
  - Slide 1: Traditional vs AI-Enabled shift (with 4 test-management activity cards)
  - Slide 2: Market trends + business impacts + pilot-impact bar chart
  - Slide 3: Four technology/domain pillars + foundation strip
  - Slide 4: Three-phase roadmap (NOW / NEXT / BEYOND) + enablers + takeaway
- Page indicators ("1 / 4") and speaker notes on every slide.

---

## PROMPT 5 - Final Single-Slide One-Pager

Created presentation "AI-Enabled-Quality-Engineering-Strategic.pptx" has good context, but it is scattered in multiple slides. Please create a single slide with all content in a professional manner.

**Expected Output:**
- One 16:9 slide with a 4-quadrant layout (Shift / Trends & Impact / Pillars / Roadmap) containing ALL prior content: chart, icons, enablers, foundation, takeaway, example prompts.

---

## PROMPT 6 - Save Session Prompts (THIS FILE)

Review all the prompts that have been used so far to create the presentation, generate a standard prompt and save it under prompt.md which can be used as reference or for further use in the same path.

---

## REUSABLE STANDARD PROMPT TEMPLATE

Use the following template for any future townhall / presentation generation. Replace the bracketed `[ ]` fields.

```
You are an expert presentation designer with deep software-testing (Quality
Engineering) domain knowledge. Create a professional, audience-attracting
presentation deck on "[TOPIC]".

CONTEXT:
- Audience: [e.g., software testing team at townhall]
- Presenter: Test Manager with 20+ years of experience
- Purpose: [e.g., share how we work with AI and plan ahead]
- Current state: [e.g., using Context Engineering + GitHub Copilot for
  Test Plan creation, Test Design, Bug Creation, Bug Triage]
- Future direction: [e.g., RAG-based regression test-case identification,
  testing AI applications/agents, AI DevOps, AI Governance]

REQUIREMENTS:
1. Professional 16:9 slides, clean and consistent design.
2. PICTORIAL representation throughout - use symbols, icons, diagrams,
   flow charts, timelines, bar charts and graphs alongside text (do not
   create text-heavy slides).
3. All context provided above MUST be fully covered - nothing dropped.
4. Structure the story in clear thematic sections, e.g.:
   a. Current shift / context
   b. Market trends & business impact
   c. Core technology & domain pillars
   d. Strategic path ahead & roadmap
5. Consistent color theme and design language across the deck (suggest:
   navy #1F3864 + blue #2E74B5 accents, light gray panels #F2F2F2,
   semantic colors: blue = foundation, orange = next, green = governed).
6. Include presenter/speaker notes on every slide.
7. Add page indicators and a footer.

DELIVERABLE:
- Save the deck as a .pptx file in the target folder.
- Verify layout (no overlapping/clipped text, no misalignment) by
  rendering slides to images and reviewing them.
- Keep icons/embedded content self-contained (portable file).

OUTPUT FILES:
- [Folder]/[DeckName].pptx
```

---

## OUTPUT FILES CREATED IN THIS SESSION

| File | Description |
|------|-------------|
| `10.Presentetion/AI-Enabled-Quality-Engineering.pptx` | Initial 2-slide deck |
| `10.Presentetion/AI-Enabled-Quality-Engineering-Summary.pptx` | Single consolidated slide (text) |
| `10.Presentetion/AI-Enabled-Quality-Engineering-Pictorial.pptx` | Single pictorial slide (icons + chart) |
| `10.Presentetion/AI-Enabled-Quality-Engineering-Strategic.pptx` | 4-slide strategic deck |
| `10.Presentetion/AI-Enabled-Quality-Engineering-OnePager.pptx` | Final single one-pager (4 quadrants) |
| `10.Presentetion/Prompts/prompt.md` | This standard prompt file (reusable reference) |

---

## DESIGN SYSTEM REFERENCE

**Colors:**
- Navy `#1F3864` (header, takeaway bands)
- Blue `#2E74B5` (accents, headings)
- Light blue `#9DC3E6` / Pale blue `#EDF4FB` (card fills)
- Orange `#ED7D31` (shift / next phase)
- Green `#548235` (governed phase, checkmarks)
- Gray `#404040`, Light gray `#F2F2F2`, Mid gray `#B0B0B0`

**Icons (custom flat pictograms, embedded PNGs):**
users, bulb, robot, clipboard, doc, pencil, bug, funnel, gear, magnifier,
shield, book, db, lock, bolt, rocket, trend, chart, layers, globe, target,
check-circle

**Diagrams used:** step flow with arrows, traditional-vs-AI comparison,
grouped bar chart (labeled "Illustrative"), vertical/horizontal phase
timelines, 2x2 activity grid, enabler chips, takeaway band.

**Layout rules:** 16:9 (13.33 x 7.5 in); consistent margins (0.45 in);
header band 1.0 in + blue accent line; footer with deck name + page number;
cards with rounded corners and subtle borders; generous padding; no text
overlap or clipping (always visually verify via rendered PNGs).
