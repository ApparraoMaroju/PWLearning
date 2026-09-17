# Internship — tagminds.ai: Project Summary & Presentation Guide

**Student:** Maroju Lahari | **Company:** Lambda Digital Private Limited, Chennai
**Project:** tagminds.ai — AI-driven Enterprise Asset Management (EAM) platform
**Duration:** 15 June – 26 June 2026 (12 working days)

---

## 1. PROJECT SUMMARY (Half a Page — can be spoken in ~2 minutes)

This internship was completed at Lambda Digital Private Limited, Chennai, on the project **tagminds.ai — an AI-driven Enterprise Asset Management (EAM) platform**. The platform automates the cataloguing of enterprise equipment and material data, a task that is normally manual, slow, and error-prone.

As a Software Engineer Intern, I made two main contributions:

1. **Backend RESTful API development** — I helped build two RESTful APIs using **Python and FastAPI** for the Material Cataloguing module. The module accepts enterprise asset files (CSV, JSON, XML), validates them, cleans the data, and stores it in a relational database.
2. **System testing of the Cataloguing System** — I designed and executed a system test matrix that verified the full request–response flow, from API request, through validation and data processing, to database persistence.

**How the system works:** a client submits a material file to the `POST /catalog/material` endpoint. FastAPI routes the request, **Pydantic** validates the schema and blocks malformed input, **Pandas** scripts clean the data (removing nulls and duplicates, fixing types), and **SQLAlchemy** writes the records to **PostgreSQL**. The backend follows a modular MVC-style structure — routers, services, models, and database layers are kept separate for maintainability.

**Testing results:** end-to-end system tests confirmed valid payloads are accepted (HTTP 201 Created), missing fields are rejected (HTTP 422), null values are handled safely, and duplicate entries are blocked. I also compared performance before and after optimization — database **indexing and connection pooling** reduced API latency from **420 ms to 110 ms** and improved data synchronization precision to **100%**.

The internship also built my foundation in Python, OOP, Pandas, SQL/PostgreSQL, FastAPI, and security concepts (SSL, OAuth).

---

## 2. HOW TO EXPLAIN THE PROJECT (Best Approach in 5 Steps)

The internship was short, so **do not memorize the whole report**. Memorize ONE story and tell it in this order:

| Step | Question | What to say | Time |
| ---- | -------- | ----------- | ---- |
| 1 | What is the project? | One-line pitch (below) | 30 sec |
| 2 | What did YOU do? | 2 REST APIs + system testing | 1 min |
| 3 | How does it work? | The 4-step pipeline | 2 min |
| 4 | What did you test & find? | Test matrix + performance numbers | 1 min |
| 5 | What did you learn? | Skills + challenges | 1 min |

### One-line pitch (memorize this)
> "tagminds.ai is an AI-driven platform for Enterprise Asset Management. My work was on the Material Cataloguing System — building two REST APIs in Python FastAPI that automatically take material data from files like CSV and XML, clean it, and store it in PostgreSQL — and then system-testing that whole flow."

### Golden rules for the student
- **Always connect theory to practice.** Don't say "I learned Pandas" — say "I used Pandas to clean null values in the uploaded material files."
- **Draw the pipeline in your head** (or on paper if asked): file → FastAPI → Pydantic → Pandas → SQLAlchemy → PostgreSQL. Explain it step by step.
- **Use numbers as proof.** The test matrix (4/4 PASS) and the performance improvement (420 ms → 110 ms) are your strongest evidence.
- **If you don't know an answer**, be honest, but show the concept you do know: "I haven't worked on that in detail, but I understand the idea — it relates to…"
- **Sound confident with the terms**: REST, CRUD, API, ORM, validation, endpoint, system testing. Practice saying them aloud.

---

## 3. CLEAR SPEAKING NOTES (Section by Section)

### a. What is an EAM platform?
Enterprise Asset Management means **tracking and managing physical assets** — equipment, machinery, materials — through their lifecycle. Companies need an up-to-date catalogue of every material they use. Doing this manually is slow and full of errors, so **tagminds.ai automates the cataloguing** of this data.

### b. What did I actually contribute?
> "My contribution was in two areas — I worked on **building two RESTful APIs** (in Python FastAPI) for the Material Cataloguing System, and I was **involved in system testing** the same system to verify it works end-to-end."

### c. How does the cataloguing system work? (The 4-step pipeline)
1. **Payload Interception** — the client uploads a material file (CSV/JSON/XML) and the FastAPI routing engine catches the request.
2. **Structural Validation** — Pydantic validation objects inspect the incoming data and **block malformed requests** before any processing.
3. **Data Pipeline Execution** — business logic uses **Pandas** to clean the data — remove blank/null cells, drop duplicates, fix formats.
4. **Relational Synchronization** — the cleaned records match **SQLAlchemy** tables and are permanently written into **PostgreSQL**.

### d. Architecture (why modular?)
The backend follows a **Model-View-Controller (MVC)-style, modular structure** — API routers, business service layers, data models, and the database layer are separated. This is called *separation of concerns*: each layer has one job, which makes the code **easier to maintain, reuse, and test**.

### e. Database design
- Two related tables: **Manufacturers** and **Catalogued Materials** (one manufacturer → many materials).
- Material fields: `material_id` (UUID primary key), `catalog_code` (unique), `item_description` (text), `manufacturer_id` (foreign key), `last_updated` (timestamp).
- Used **SQLAlchemy ORM** (Object Relational Mapper) so database operations are done through Python classes instead of raw SQL.

### f. Development work (the APIs)
Standard REST/CRUD endpoints:

| Operation | HTTP Verb | Endpoint |
| --------- | --------- | -------- |
| Create | POST | /catalog/material |
| Read | GET | /catalog/{item_id} |
| Update | PUT / PATCH | /catalog/{item_id} |
| Delete | DELETE | /catalog/{item_id} |

### g. Work done — Unit testing
Explain it as: *testing each small component by itself with mock input, before putting everything together.* Examples from my work:
- **Pydantic schema test** — sending a request missing `catalog_code` → correctly rejected with HTTP 422.
- **Pandas service test** — feeding CSV with blank cells → nulls scrubbed safely, pipeline doesn't break.
- **SQLAlchemy layer test** — inserting a duplicate catalog code → `IntegrityError` raised and transaction rolled back.

### h. Work done — System testing
Explain it as: *testing the whole system end-to-end, the way a real user would use it.* I used **Postman** to send real requests to the API and verified:
- the HTTP status code returned,
- the error messages when validation fails,
- and that the data actually reached the PostgreSQL database (verified with DBeaver).

**Test matrix (all PASS):**

| Test | What was checked | Result |
| ---- | ---------------- | ------ |
| TC-001 | Valid payload → record saved in DB | 201 Created, PASS |
| TC-002 | Missing required field → rejected | 422, clear error, PASS |
| TC-003 | Null values in file → handled safely | Data scrubbed, PASS |
| TC-004 | Duplicate catalog code → blocked | IntegrityError, rollback, PASS |

### i. Performance verification (very impressive point!)
I compared the system **before and after optimization** (adding database indexing and connection pooling):

| Metric | Before | After |
| ------ | ------ | ----- |
| API end-to-end latency | 420 ms | **110 ms** |
| Payload ingestion success | 94.2% | **99.9%** |
| Data sync precision | 91.5% | **100%** |
| DB connection overhead | High (un-pooled) | **Minimal (pooled)** |

### j. Challenges faced (be honest — it shows learning)
- Learning Python and OOP from scratch in a short time.
- SQL and database relationships were new to me.
- Integrating Python + PostgreSQL + FastAPI together took practice.
- Managing internship work along with academic commitments.

### k. Skills gained
- Python, OOP, exception handling, logging
- Data handling with Pandas, CSV, JSON, XML
- SQL, PostgreSQL, SQLAlchemy ORM
- FastAPI REST API development + testing with Postman
- Project structuring / design patterns, basic frontend (HTML/CSS/JS/React), SSL & OAuth concepts
- Problem-solving, debugging, time management, teamwork

---

## 4. TESTING TERMS IN ONE LINE EACH

| Term | Simple meaning | Your example |
| ---- | -------------- | ------------ |
| **Unit test** | Test one small unit (a function/module) in isolation. | Pydantic schema rejects a missing field. |
| **Integration test** | Test that two or more modules work together. | API route → database layer writes correctly. |
| **System test** | Test the whole system end-to-end like a user. | Postman: send request, check response + DB. |
| **Mock data** | Representative fake input used for safe testing. | Mock material specification datasets. |
| **Regression** | Re-checking that new changes didn't break old features. | Re-running the matrix after optimization. |

---

## 5. LIKELY VIVA QUESTIONS & MODEL ANSWERS

1. **What is the project about?**
   → "tagminds.ai, an AI-driven Enterprise Asset Management platform that automates cataloguing of enterprise equipment and material data."

2. **What did you actually do?**
   → "I developed two RESTful APIs in Python FastAPI for the Material Cataloguing System, and I was involved in system testing of that system."

3. **Why FastAPI?**
   → "It's a modern Python framework — fast, supports async, gives automatic interactive documentation at /docs (Swagger), and automatic request validation with Pydantic."

4. **What is an ORM? Why SQLAlchemy?**
   → "An Object Relational Mapper maps Python classes to database tables, so we work with objects instead of raw SQL. It's cleaner, safer (helps prevent SQL injection), and easier to maintain."

5. **What is REST and how do CRUD operations map to it?**
   → "REST uses standard HTTP verbs — POST for create, GET for read, PUT/PATCH for update, DELETE for delete — mapped to my /catalog/material endpoints."

6. **How did you test the system?**
   → "With a structured test matrix using mock data — component-level checks for validation and data cleaning, and end-to-end system tests through Postman, verifying status codes and database persistence."

7. **What were your test results?**
   → "All four system test cases passed. Performance-wise, adding database indexing and connection pooling cut latency from 420 ms to 110 ms and improved sync precision to 100%."

8. **What is Pydantic's role?**
   → "It validates incoming data against the defined schema. If a required field like catalog_code is missing, the request is rejected with HTTP 422 before it reaches the database."

9. **Why a modular/MVC structure?**
   → "Separation of concerns — routers, services, models and DB layers are separate, which makes the code maintainable, reusable, and easier to test."

10. **What challenges did you face?**
    → "Everything was new — Python, OOP, SQL. Integrating them into a working API in 12 days was challenging, but it taught me how to learn fast and manage time."

11. **What would you do next?**
    → "Add ML for smarter classification of materials, strengthen authentication with OAuth in production, deploy on the cloud, and build a frontend with React."

---

## 6. KEY NUMBERS CHEAT SHEET (Memorize These)

- **12** working days (15–26 June 2026)
- **2** RESTful APIs (FastAPI, Python)
- **4** system test cases (TC-001 → TC-004), **all PASS**
- Latency: **420 ms → 110 ms**
- Ingestion success: **94.2% → 99.9%**
- Sync precision: **91.5% → 100%**
- Stack: **FastAPI + Pydantic + Pandas + SQLAlchemy + PostgreSQL**
- Endpoints: `POST /catalog/material`, `GET / PUT / DELETE /catalog/{item_id}`
- Validation errors return **HTTP 422**, success returns **HTTP 201**
