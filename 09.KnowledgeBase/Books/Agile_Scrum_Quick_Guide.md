# Agile / Scrum Quick Guide

> **Purpose:** A concise reference for Scrum Team members, Product Owners, Scrum Masters, Project Managers, Developers, Testers, Business Analysts, and Stakeholders. This guide provides a high-level overview of the Agile/Scrum way of working — covering key concepts, roles, events, artifacts, and practices.

---

## Table of Contents

1. [Agile & Scrum Overview](#1-agile--scrum-overview)
2. [Agile Principles & Values](#2-agile-principles--values)
3. [Scrum Roles & Responsibilities](#3-scrum-roles--responsibilities)
4. [Scrum Events / Ceremonies](#4-scrum-events--ceremonies)
5. [Scrum Artifacts](#5-scrum-artifacts)
6. [Requirement Lifecycle](#6-requirement-lifecycle)
7. [Product Backlog Management](#7-product-backlog-management)
8. [User Stories](#8-user-stories)
9. [Backlog Refinement](#9-backlog-refinement)
10. [Estimation & Prioritization](#10-estimation--prioritization)
11. [Sprint Planning](#11-sprint-planning)
12. [Sprint Execution](#12-sprint-execution)
13. [Development & Testing](#13-development--testing)
14. [Definition of Ready](#14-definition-of-ready)
15. [Definition of Done](#15-definition-of-done)
16. [Sprint Review](#16-sprint-review)
17. [Sprint Retrospective](#17-sprint-retrospective)
18. [Release & Deployment](#18-release--deployment)
19. [Stakeholder Management](#19-stakeholder-management)
20. [Risk, Dependency & Impediment Management](#20-risk-dependency--impediment-management)
21. [Agile Metrics & Reporting](#21-agile-metrics--reporting)
22. [Agile Tools & Documentation](#22-agile-tools--documentation)
23. [Agile Governance](#23-agile-governance)
24. [End-to-End Agile Lifecycle](#24-end-to-end-agile-lifecycle)
25. [Responsibility Matrix](#25-responsibility-matrix)
26. [Agile Principles for Daily Work](#26-agile-principles-for-daily-work)
27. [One-Page Quick Reference](#27-one-page-quick-reference)

---

## 1. Agile & Scrum Overview

### What is Agile?
Agile is a **mindset and set of values and principles** for delivering value iteratively and incrementally. It emphasizes collaboration, flexibility, and continuous improvement rather than following a rigid plan.

### What is Scrum?
Scrum is a **lightweight framework** within the Agile family. It provides a structure for teams to deliver value through short, time-boxed iterations called **Sprints**, typically 1–4 weeks.

### Key Concepts

| Concept | Description |
|---|---|
| **Agile Mindset** | Embrace change, collaborate, and focus on delivering value |
| **Iterative Delivery** | Build and refine the product in repeated cycles |
| **Incremental Delivery** | Release working pieces of the product frequently |
| **Empirical Process Control** | Make decisions based on transparency, inspection, and adaptation |
| **Transparency** | Everyone has a shared understanding of work and progress |
| **Inspection** | Regularly review progress and outcomes |
| **Adaptation** | Adjust plans, processes, and products based on what is learned |

### Agile/Scrum Lifecycle (High Level)

```
Business Need
     ↓
Product Backlog (Epics → Features → User Stories)
     ↓
Sprint Planning
     ↓
Sprint (1–4 weeks)
  ├── Development
  ├── Testing
  └── Integration
     ↓
Sprint Review (Demo + Feedback)
     ↓
Sprint Retrospective (Improve)
     ↓
Repeat → Next Sprint
     ↓
Release to Production
```

---

## 2. Agile Principles & Values

> *Based on the Agile Manifesto — the foundation of all Agile frameworks.*

### Core Values

| We value... | Over... |
|---|---|
| Individuals and interactions | Processes and tools |
| Working software/product | Comprehensive documentation |
| Customer collaboration | Contract negotiation |
| Responding to change | Following a plan |

*Both sides have value; the left side is valued more.*

### Key Principles

| Principle | Summary |
|---|---|
| **Customer Collaboration** | Involve customers and stakeholders continuously, not just at milestones |
| **Respond to Change** | Welcome changing requirements, even late in development |
| **Working Product** | Deliver working software/product frequently as the primary measure of progress |
| **Individuals & Interactions** | People and communication drive success more than processes |
| **Continuous Improvement** | Teams regularly reflect and adjust how they work |
| **Early & Frequent Delivery** | Deliver value in small increments rather than one large release |
| **Sustainable Pace** | Teams should be able to maintain a consistent, healthy delivery pace |
| **Technical Excellence** | Good design and quality practices enable agility |
| **Simplicity** | Maximize the work not done — focus on what truly adds value |
| **Team Collaboration** | Best requirements, designs, and solutions emerge from self-organizing teams |

---

## 3. Scrum Roles & Responsibilities

### Scrum-Defined Accountabilities

| Role | Primary Responsibility | Key Activities |
|---|---|---|
| **Product Owner** | Product value and backlog | Prioritization, requirement clarification, acceptance, stakeholder communication |
| **Scrum Master** | Scrum effectiveness | Facilitation, coaching, impediment removal, process improvement |
| **Developers** | Product increment | Design, development, testing, integration, self-organization |
| **Stakeholders** | Business direction and feedback | Attend Sprint Reviews, provide feedback, business decisions |

> **Note:** In Scrum, "Developers" refers to all team members who create the product increment — including testers, designers, and analysts on the team.

### Commonly Used Supporting Roles *(Project/Organization Specific)*

| Role | Typical Focus |
|---|---|
| **Business Analyst** | Requirement elaboration, story writing, acceptance criteria |
| **Tester / QA** | Test planning, execution, quality assurance |
| **Architect** | Technical design, standards, non-functional requirements |
| **Release Manager** | Release planning, deployment coordination |
| **Project Manager** | Delivery tracking, governance, stakeholder reporting |
| **Technical Lead** | Technical direction, code standards, mentoring |

> These roles are not defined in the Scrum framework but are commonly used in organizations to support delivery.

---

## 4. Scrum Events / Ceremonies

### Official Scrum Events

| Event | Purpose | Participants | Time-Box | Typical Outcome |
|---|---|---|---|---|
| **Sprint** | Deliver a usable increment | Scrum Team | 1–4 weeks | Working product increment |
| **Sprint Planning** | Plan the Sprint | Scrum Team | ≤ 8 hours (4-week Sprint) | Sprint Goal + Sprint Backlog |
| **Daily Scrum** | Synchronize and plan the day | Developers | 15 minutes | Updated team plan |
| **Sprint Review** | Inspect the increment | Scrum Team + Stakeholders | ≤ 4 hours | Feedback + backlog updates |
| **Sprint Retrospective** | Improve team process | Scrum Team | ≤ 3 hours | Actionable improvements |

### Commonly Used Supporting Activities *(Not Official Scrum Events)*

| Activity | Purpose |
|---|---|
| **Backlog Refinement** | Clarify, estimate, and prioritize upcoming stories |
| **Release Planning** | Plan scope and timing for product releases |
| **Story Clarification** | Detailed discussion of requirements before Sprint Planning |
| **Technical / Architecture Discussion** | Resolve design decisions and technical constraints |
| **Defect Triage** | Prioritize and assign defects |
| **Dependency Discussion** | Identify and manage cross-team or external dependencies |

> These supporting activities are **commonly used practices** and may be adapted based on organizational needs.

---

## 5. Scrum Artifacts

| Artifact | Owner | Description |
|---|---|---|
| **Product Backlog** | Product Owner | Ordered list of all work needed for the product |
| **Sprint Backlog** | Developers | Work selected for the Sprint + plan to achieve the Sprint Goal |
| **Increment** | Developers | Usable, potentially releasable product at Sprint end |

### Associated Commitments

| Artifact | Commitment |
|---|---|
| Product Backlog | **Product Goal** — the long-term objective of the product |
| Sprint Backlog | **Sprint Goal** — the objective for the Sprint |
| Increment | **Definition of Done** — quality standard for completeness |

---

## 6. Requirement Lifecycle

```
Business Need
     ↓
Epic (large business goal or initiative)
     ↓
Feature (significant capability)
     ↓
User Story (specific, deliverable requirement)
     ↓
Acceptance Criteria (conditions for success)
     ↓
Refinement (clarification, estimation)
     ↓
Prioritization (ordered in backlog)
     ↓
Sprint (development + testing)
     ↓
Review (stakeholder acceptance)
     ↓
Done (meets Definition of Done)
```

| Stage | What Happens |
|---|---|
| **Business Need** | Stakeholders identify a problem or opportunity |
| **Epic** | High-level initiative captured in the Product Backlog |
| **Feature** | Broken into meaningful capabilities |
| **User Story** | Requirement expressed from the user's perspective |
| **Acceptance Criteria** | Conditions that confirm the story is complete |
| **Refinement** | Story is clarified, dependencies identified, estimate assigned |
| **Prioritization** | Product Owner orders backlog by value, risk, and dependency |
| **Sprint** | Team develops, tests, and integrates the story |
| **Review** | Stakeholder inspects and provides feedback |
| **Done** | Story meets Definition of Done |

---

## 7. Product Backlog Management

### Backlog Item Types

| Type | Description |
|---|---|
| **Epic** | Large body of work representing a major business initiative |
| **Feature** | A significant product capability derived from an Epic |
| **User Story** | A small, deliverable requirement written from the user's perspective |
| **Task** | A technical subtask created during Sprint Planning |
| **Bug / Defect** | An issue with existing functionality |
| **Technical Story** | Infrastructure, refactoring, or technical improvement work |
| **Spike** | Time-boxed research or investigation to reduce uncertainty |

### Hierarchy

```
Epic
 └── Feature
      └── User Story
           └── Task
```

> The exact hierarchy may vary depending on the organization's Agile tooling and implementation.

### Key Backlog Principles

- The Product Backlog is **never complete** — it evolves as the product and market evolve
- Items at the top are **more detailed and ready**; items lower down are less refined
- The Product Owner is **accountable** for the backlog's content, availability, and ordering
- Prioritization considers **business value, risk, dependencies, and team capacity**

---

## 8. User Stories

### Structure

> **As a** [type of user], **I want** [functionality], **so that** [business value].

*Example:* As a customer, I want to reset my password, so that I can regain access to my account.

### Key Components

| Component | Description |
|---|---|
| **Business Value** | Why this story matters to the user or business |
| **Acceptance Criteria** | Specific conditions that must be met for the story to be accepted |
| **Dependencies** | Other stories, teams, or systems this story relies on |
| **Assumptions** | Conditions assumed to be true during development |
| **Non-functional Requirements** | Performance, security, accessibility requirements if applicable |
| **Definition of Ready** | Criteria confirming the story is ready for Sprint Planning |

### Quality Characteristics (INVEST)

| Letter | Characteristic |
|---|---|
| **I** | Independent — can be delivered without another story |
| **N** | Negotiable — details can be discussed and adjusted |
| **V** | Valuable — delivers measurable benefit to the user |
| **E** | Estimable — team can reasonably estimate the effort |
| **S** | Small — fits within a single Sprint |
| **T** | Testable — acceptance criteria can be verified |

---

## 9. Backlog Refinement

> *Commonly used practice — not an official Scrum event, but widely adopted.*

**Why it matters:** Ensures stories are sufficiently understood and ready before Sprint Planning, reducing uncertainty and wasted Sprint time.

### What Happens in Refinement

- **Story clarification** — Product Owner and team discuss the requirement
- **Acceptance criteria review** — Confirm conditions of satisfaction
- **Dependency identification** — Surface cross-team or technical dependencies
- **Splitting large stories** — Break stories that are too large for a single Sprint
- **Technical clarification** — Developers identify design or architecture considerations
- **Estimation** — Team assigns a relative size estimate
- **Risk and assumption identification** — Surface known risks early

> **Expected Outcome:** Stories are understood, estimated, and ready for Sprint Planning.

---

## 10. Estimation & Prioritization

### Estimation

| Concept | Description |
|---|---|
| **Story Points** | Relative unit representing complexity, effort, and uncertainty |
| **Relative Estimation** | Estimate stories in relation to each other, not in absolute hours |
| **Planning Poker** | Team-based estimation technique using consensus |
| **Complexity** | How technically difficult the work is |
| **Effort** | Amount of work required |
| **Risk** | Uncertainty or unknowns that may affect delivery |

> Story Points represent **relative complexity and effort**, not exact hours or days.

### Prioritization Factors

| Factor | Description |
|---|---|
| **Business Value** | How much value this delivers to the customer or business |
| **Customer Impact** | Direct effect on user experience or customer outcomes |
| **Risk** | Technical or business risk of deferring the item |
| **Dependencies** | Items that are blockers for other work |
| **Urgency** | Time-sensitive business or market factors |
| **Cost of Delay** | Business cost of not delivering this sooner |
| **Technical Considerations** | Foundational work needed to enable future stories |

---

## 11. Sprint Planning

**Purpose:** Agree on the Sprint Goal and select work the team can realistically complete.

### Inputs

- Prioritized Product Backlog
- Team capacity for the Sprint
- Previous velocity (if available)
- Known dependencies and risks

### What Happens

1. Product Owner presents the highest-priority backlog items
2. Team discusses, clarifies, and confirms understanding
3. Sprint Goal is agreed upon
4. Team selects backlog items they commit to completing
5. Work is broken down into tasks as needed
6. Sprint Backlog is created

> **Expected Outcome:** A realistic Sprint Goal and Sprint Backlog aligned with team capacity.

---

## 12. Sprint Execution

**Duration:** 1–4 weeks (team determines Sprint length, then keeps it consistent)

### Daily Activities

| Activity | Description |
|---|---|
| **Daily Scrum** | 15-minute team sync — inspect progress toward Sprint Goal |
| **Development** | Build features and functionality |
| **Testing** | Continuous testing throughout the Sprint |
| **Code Review** | Peer review of code for quality and standards |
| **Integration** | Integrate components and test end-to-end flows |
| **Defect Resolution** | Identify and fix defects as they are found |
| **Requirement Clarification** | Ongoing discussion with Product Owner on story details |
| **Dependency Management** | Track and resolve blockers from other teams or systems |
| **CI/CD** | Continuous integration and automated build/test pipelines |
| **Documentation** | Update relevant documentation as part of the sprint |

> **Key Principle:** Build quality continuously — do not defer testing to the end of the Sprint.

---

## 13. Development & Testing

> **Quality is everyone's responsibility.**

### Testing Activities in Agile

| Testing Type | Description |
|---|---|
| **Unit Testing** | Developer-written tests for individual code components |
| **Code Review** | Peer review to ensure code quality and standards |
| **Integration Testing** | Verify components work together correctly |
| **API Testing** | Validate service interfaces and data contracts |
| **Functional Testing** | Confirm features behave as specified |
| **Regression Testing** | Ensure new changes do not break existing functionality |
| **Automation Testing** | Automated test suites for efficiency and repeatability |
| **System Testing** | End-to-end testing of the complete system |
| **Non-functional Testing** | Performance, security, accessibility as applicable |
| **Defect Management** | Log, prioritize, track, and resolve defects |
| **Test Evidence** | Record test results as proof of quality |

### Development & QA Collaboration

- Testing starts **as early as possible**, not at the end of the Sprint
- Developers and testers work **together on acceptance criteria**
- Defects found during the Sprint are **fixed within the Sprint** where possible
- Automation is built incrementally to support **fast regression cycles**

---

## 14. Definition of Ready

**What it means:** A story is sufficiently prepared to be included in Sprint Planning.

### Common Indicators *(Team/Organization Specific)*

- Requirement is understood by the team
- Business value is clear
- Acceptance criteria are defined
- Dependencies are identified
- Design or technical clarification is available where needed
- Testability is understood
- Story is appropriately sized for a single Sprint

> The Definition of Ready is **not a Scrum requirement** — organizations define their own criteria. It is a commonly used practice to improve Sprint Planning efficiency.

---

## 15. Definition of Done

**What it means:** A shared agreement on what "complete" means for any Product Backlog item and the Increment.

### Common Examples *(Team/Organization Specific)*

- Development is completed
- Code has been reviewed
- Unit tests are written and passing
- Required testing is completed
- Defects are resolved or formally accepted
- Acceptance criteria are satisfied
- Documentation is updated where required
- Integration is completed and verified
- The increment is deployable or usable

> The Definition of Done is **defined by the Scrum Team** and must be met before a story or Increment is considered complete.

---

## 16. Sprint Review

**Purpose:** Inspect the Sprint's Increment and adapt the Product Backlog based on feedback.

### What Happens

- Team **demonstrates** completed work to stakeholders
- Stakeholders **provide feedback** on the product
- Product Owner **reviews acceptance** of completed stories
- Team and stakeholders **discuss product direction**
- Product Backlog is **updated** based on feedback and new insights

> **Focus:** Inspect the outcome and adapt — not just a demo session.

> **Expected Outcome:** Stakeholder feedback collected, Product Backlog updated, product direction confirmed.

---

## 17. Sprint Retrospective

**Purpose:** Reflect on the team's process and identify improvements for the next Sprint.

### Key Questions

1. What went **well**?
2. What did **not** go well?
3. What can we **improve**?
4. What **actions** will we commit to?

### Common Techniques *(Examples Only)*

| Technique | Focus |
|---|---|
| **Start / Stop / Continue** | Identify what to add, remove, or keep doing |
| **4Ls** | Liked, Learned, Lacked, Longed For |
| **Mad / Sad / Glad** | Team sentiment and emotional check-in |
| **Sailboat** | Goals, risks, anchors, and wind in your sails |
| **5 Whys** | Root cause analysis of a problem |

> **Expected Outcome:** 1–3 actionable improvement items committed to for the next Sprint.

---

## 18. Release & Deployment

> *Release management practices may extend beyond standard Scrum and are often organization/project specific.*

### Release Flow

```
Development → Testing → Integration → Acceptance
     ↓
Release Readiness → Deployment → Production Validation → Monitoring
```

### Key Activities

| Activity | Description |
|---|---|
| **Release Planning** | Define scope, timing, and dependencies for a release |
| **Release Scope** | Determine which features are included in the release |
| **Deployment Readiness** | Confirm the environment, configuration, and sign-offs are ready |
| **Change Management** | Follow organizational change control processes |
| **Release Notes** | Document what is included in the release |
| **Rollback Planning** | Have a plan to revert if production issues occur |
| **Production Validation** | Verify the deployment was successful |
| **Post-Release Monitoring** | Monitor for defects, performance issues, and user feedback |

---

## 19. Stakeholder Management

**Why it matters:** Continuous stakeholder collaboration drives better products and prevents late surprises.

### Key Practices

| Practice | Description |
|---|---|
| **Stakeholder Identification** | Know who your stakeholders are and their level of influence |
| **Regular Communication** | Keep stakeholders informed throughout — not just at Sprint end |
| **Product Demonstrations** | Show working product at Sprint Reviews |
| **Feedback Collection** | Actively seek and act on stakeholder input |
| **Business Decisions** | Involve stakeholders in scope and priority decisions |
| **Dependency Management** | Coordinate cross-team and business dependencies |
| **Escalation** | Raise and resolve blockers quickly through appropriate channels |
| **Transparency** | Make progress, risks, and impediments visible |

> **Key Principle:** Collaborate continuously — do not treat Sprint Review as the only stakeholder touchpoint.

---

## 20. Risk, Dependency & Impediment Management

### Definitions

| Type | Definition |
|---|---|
| **Risk** | A potential future event that could negatively impact delivery |
| **Dependency** | Work that requires coordination with another team, system, or person |
| **Impediment** | An existing issue that is blocking or slowing the team |

### Management Flow

```
Identify → Assess → Communicate → Act → Track → Resolve
```

### Ownership

| Type | Primary Owner |
|---|---|
| **Risks** | Product Owner, Scrum Master, or Project Manager |
| **Dependencies** | Product Owner + Scrum Master coordination |
| **Impediments** | Scrum Master (with team support) |

---

## 21. Agile Metrics & Reporting

> **Metrics are used for transparency and continuous improvement — not to pressure or rank individuals.**

### Delivery Metrics

| Metric | What It Shows |
|---|---|
| **Velocity** | Average story points completed per Sprint |
| **Sprint Completion Rate** | Percentage of Sprint commitment delivered |
| **Burndown Chart** | Remaining work vs. time in a Sprint or release |
| **Burnup Chart** | Work completed vs. total scope over time |
| **Throughput** | Number of items completed per Sprint |
| **Cycle Time** | Time from work started to work completed |
| **Lead Time** | Time from request to delivery |

### Quality Metrics

| Metric | What It Shows |
|---|---|
| **Defect Density** | Number of defects per story or feature |
| **Defect Leakage** | Defects found after Sprint or in production |
| **Test Execution Rate** | Percentage of planned tests executed |
| **Automation Coverage** | Percentage of tests that are automated |
| **Regression Pass Rate** | Percentage of regression tests passing |

### Flow Metrics

| Metric | What It Shows |
|---|---|
| **Work in Progress (WIP)** | Number of items currently in progress |
| **Cycle Time** | Time items spend in active development |
| **Aging Work Items** | Items that have been in progress longer than expected |

---

## 22. Agile Tools & Documentation

### Commonly Used Tools

| Category | Examples |
|---|---|
| **Backlog & Project Management** | JIRA, Azure DevOps, Rally, Trello |
| **Documentation & Collaboration** | Confluence, SharePoint, Notion |
| **Version Control** | Git, GitHub, Azure Repos, Bitbucket |
| **CI/CD** | Jenkins, GitHub Actions, Azure Pipelines, GitLab CI |
| **Test Management** | Zephyr, Xray, Azure Test Plans, TestRail |
| **Communication** | Microsoft Teams, Slack, Zoom |

### Typical Documentation

| Document | Purpose |
|---|---|
| **Product Backlog** | Master list of all product requirements |
| **User Stories + Acceptance Criteria** | Requirement details and conditions of satisfaction |
| **Sprint Backlog** | Sprint-level work breakdown |
| **Architecture Documentation** | High-level technical design and decisions |
| **Test Cases / Test Plans** | Test scope, approach, and execution records |
| **Defect Records** | Defect log with status and resolution |
| **Release Notes** | Summary of what was released |
| **Retrospective Actions** | Improvement commitments from retrospectives |
| **Decision Records** | Key technical or business decisions and rationale |

---

## 23. Agile Governance

> Governance ensures accountability without adding unnecessary bureaucracy.

### Key Governance Areas

| Area | What It Covers |
|---|---|
| **Roles & Responsibilities** | Clear ownership of decisions and artifacts |
| **Process Compliance** | Team follows agreed-upon Agile/Scrum practices |
| **Traceability** | Requirements can be traced from business need to delivery |
| **Quality Standards** | Definition of Done, coding standards, test coverage |
| **Risk Management** | Risks are identified, tracked, and mitigated |
| **Change Management** | Changes to scope or priority follow a defined process |
| **Release Management** | Releases follow organizational approval and change control |
| **Documentation** | Key artifacts are maintained and accessible |
| **Audit Readiness** | Records support compliance and audit requirements |
| **Metrics** | Progress and quality data is visible and regularly reviewed |
| **Continuous Improvement** | Retrospective actions are tracked and followed through |

---

## 24. End-to-End Agile Lifecycle

```
          ┌──────────────────────────────────────┐
          │          BUSINESS NEED               │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │       EPIC / FEATURE                 │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │           USER STORY                 │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │           REFINEMENT                 │
          │  (Clarify · Estimate · Prepare)      │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │        PRIORITIZATION                │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │         SPRINT PLANNING              │
          │  (Sprint Goal + Sprint Backlog)      │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │       SPRINT EXECUTION               │
          │  Development · Testing · Integration │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │          SPRINT REVIEW               │
          │     (Demo + Stakeholder Feedback)    │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │       SPRINT RETROSPECTIVE           │
          │     (Reflect + Improve Process)      │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │        RELEASE TO PRODUCTION         │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │    MONITORING & FEEDBACK             │
          └──────────────┬───────────────────────┘
                         ↓
          ┌──────────────────────────────────────┐
          │          NEXT ITERATION              │
          └──────────────────────────────────────┘
```

---

## 25. Responsibility Matrix

> R = Responsible | A = Accountable | C = Consulted | I = Informed
> *(Adapt based on your organization's structure)*

| Activity | Product Owner | Scrum Master | Developers | BA / QA | Stakeholders |
|---|:---:|:---:|:---:|:---:|:---:|
| Requirement Definition | A | I | C | R | C |
| Backlog Management | A | C | C | R | I |
| Prioritization | A | C | C | C | C |
| Story Refinement | A | F | R | R | C |
| Estimation | C | F | A/R | R | I |
| Sprint Planning | A | F | R | R | I |
| Development | I | I | A/R | C | I |
| Testing | C | I | R | A/R | I |
| Defect Management | C | I | R | A/R | I |
| Sprint Review | A | F | R | R | R |
| Release Planning | A | C | C | R | C |
| Deployment | C | I | R | C | I |
| Retrospective | C | A/F | R | R | I |
| Continuous Improvement | C | A | R | R | I |

> **F** = Facilitates | Roles may vary by organization. Supporting roles (BA, QA) are project-specific.

---

## 26. Agile Principles for Daily Work

> Practical principles to guide day-to-day behavior in an Agile team.

1. **Deliver value early and frequently.** Don't wait until everything is perfect — deliver working increments regularly.
2. **Keep requirements transparent.** Everyone should have a shared understanding of what is being built and why.
3. **Collaborate continuously.** Work across roles and with stakeholders throughout the Sprint, not just at review time.
4. **Keep stories small and understandable.** Small stories are easier to estimate, test, and deliver within a Sprint.
5. **Build quality into the process.** Testing and quality activities happen throughout the Sprint, not at the end.
6. **Test continuously.** Identify defects early — the cost of fixing defects grows as time passes.
7. **Make impediments visible.** Don't silently struggle — raise blockers so the team and Scrum Master can address them.
8. **Adapt based on feedback.** Use Sprint Reviews, retrospectives, and stakeholder input to continuously improve the product and process.
9. **Improve a little every Sprint.** Small, consistent improvements compound into significant gains over time.
10. **Focus on outcomes, not activity.** Delivering value matters more than appearing busy — measure what gets done, not what gets started.

---

## 27. One-Page Quick Reference

```
┌─────────────────────────────────────────────────────────────────────┐
│                  AGILE / SCRUM QUICK REFERENCE                      │
├──────────────────┬──────────────────────────────────────────────────┤
│  SCRUM ROLES     │  Product Owner · Scrum Master · Developers       │
├──────────────────┼──────────────────────────────────────────────────┤
│  SCRUM EVENTS    │  Sprint · Sprint Planning · Daily Scrum           │
│                  │  Sprint Review · Sprint Retrospective             │
├──────────────────┼──────────────────────────────────────────────────┤
│  SCRUM ARTIFACTS │  Product Backlog · Sprint Backlog · Increment     │
├──────────────────┼──────────────────────────────────────────────────┤
│  BACKLOG ITEMS   │  Epic → Feature → User Story → Task              │
│                  │  Bug · Technical Story · Spike                    │
├──────────────────┼──────────────────────────────────────────────────┤
│  USER STORY      │  As a [user], I want [feature], so that [value]  │
├──────────────────┼──────────────────────────────────────────────────┤
│  ESTIMATION      │  Story Points · Planning Poker · Relative sizing  │
├──────────────────┼──────────────────────────────────────────────────┤
│  SPRINT CYCLE    │  Plan → Build → Test → Review → Retro → Repeat   │
├──────────────────┼──────────────────────────────────────────────────┤
│  DEF OF READY    │  Story understood · AC defined · Sized · Ready    │
├──────────────────┼──────────────────────────────────────────────────┤
│  DEF OF DONE     │  Dev done · Tested · Reviewed · AC met · DoD met │
├──────────────────┼──────────────────────────────────────────────────┤
│  KEY METRICS     │  Velocity · Burndown · Defect Rate · Cycle Time   │
├──────────────────┼──────────────────────────────────────────────────┤
│  TOP TOOLS       │  JIRA · Confluence · Azure DevOps · Git · Teams  │
├──────────────────┼──────────────────────────────────────────────────┤
│  CORE PRINCIPLES │  Deliver Early · Collaborate · Build Quality In  │
│                  │  Test Continuously · Adapt · Improve Every Sprint │
└──────────────────┴──────────────────────────────────────────────────┘
```

---

> *This Quick Guide provides a high-level overview of the Agile/Scrum way of working. It is intended as a reference and orientation tool — not a detailed procedural manual. Practices should be adapted to suit your organization, team, and project context.*

> *Scrum is defined in the official Scrum Guide (scrumguides.org). Where this guide references practices beyond the Scrum Guide, they are noted as "commonly used" or "organization/project specific."*
