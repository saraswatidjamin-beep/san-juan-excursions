# San Juan / Puerto Rico — GBrain Research & Prep Work Audit

**Generated:** 2026-06-16
**Agent:** Hermes Agent (deepseek-v4-pro)
**Purpose:** Comprehensive audit of all San Juan / Puerto Rico knowledge in gbrain + existing prep work status

---

## 1. GBRAIN KNOWLEDGE — ALL SAN JUAN / PUERTO RICO REFERENCES

### 1.1 Viator Opportunity Ranking (May 2026)
**Source:** `affiliate-fleet/viator-opportunity-ranking`

San Juan + Puerto Rico excursions is **ranked #5** globally out of 60+ destinations.

- **Revenue estimate:** $2,100/mo (months 12-24, base case)
- **Assumptions:** 4-6% effective take rate on Viator, multilingual execution, strong internal linking
- **Listed under "Fastest monetization"** group alongside Porto, Madeira, Algarve, Oahu
- **Core thesis:** Places where travelers need help making tradeoffs (routes, bundles, seasons, audience fit) AND SERPs are fragmented

### 1.2 Revenue Priority Ranking
**Source:** `affiliate-fleet/revenue-priority-ranking`

San Juan is **ranked #3** in revenue-first build priority (2-year outlook):

- **$2,100/mo by month 12**
- **6.8M airport arrivals** — US market = English-first = faster ranking
- **Key content angles:** Bio bay + El Yunque + Old San Juan combos = natural comparison content
- **US travelers** have higher conversion rates and AOV expectations
- **Risk:** Some US travel blog competition
- **Hurricane season:** June-November means content should emphasize year-round activities + hurricane policies
- **Build sequence:** After Tenerife ships (#1) and Lapland (#2)

### 1.3 Site Priority Q2 2026 — Full 20-Site Build Plan
**Source:** `affiliate-fleet/site-priority-q2-2026`

San Juan is **#7 in build order** (Batch 2: New Geography, Proven Format, Sites 6–10):

| Attribute | Value |
|-----------|-------|
| **Batch** | 2 (New Geography, Proven Format) |
| **Build slot** | #7 overall |
| **Timeline** | Weeks 7-8 (of ~20 week plan) |
| **Template reuse** | ~60% (excursion-based, city-base format) |
| **Build effort** | Medium |
| **Risk** | US market means stronger English SERP competition. Need sharper content. |
| **Why positioned here:** US-dollar market, strong demand, bio bay + El Yunque combos are perfect comparison content. Faster path to revenue than non-English markets. |

### 1.4 Site Build Priority (Short List)
**Source:** `affiliate-fleet/site-build-priority`

San Juan is **NOT in the current top 5** short-list build priority:
1. Porto ✅ (DONE)
2. Tenerife (NEXT UP)
3. Algarve
4. Lapland (START NOW for winter 2026/27)
5. Puerto Vallarta

> San Juan is queued behind these 5 — it's in the full 20-site plan but not yet prioritized for immediate build.

---

## 2. FLEET REGISTRY STATUS

**Source:** `affiliate-fleet/fleet-registry` (Live — June 4, 2026)

### Active Sites (4 live, 1 concept):

| Site | Domain | Status | Grade | Pages | Languages |
|------|--------|--------|-------|-------|-----------|
| Tenerife Outdoor Guide | tenerife-outdoor-guide.com | Live | A | 58 (12 EN + 23 DE + 23 ES) | EN, DE, ES |
| Madeira Trail Guide | madeira-trail-guide.com | Live | A | 26 (EN-only) | EN, DE (partial) |
| Porto Wine Tours | porto-sommelier.com | Live | A | 17 (EN-only) | EN, ES (partial) |
| Lapland Adventure Guide | lapland-adventure-guide.com | Live | A | 17 (EN-only) | EN |
| Costa Rica Surfing | costaricasurfingguide.com | Concept | — | 4 | EN |

**San Juan / Puerto Rico:** ❌ **NOT in fleet registry** — no entry exists.

### Current Build Activity (June 16, 2026):
- **Yogyakarta Temple Tours** is actively being built — 20+ Vercel deployments visible, project `yogyakarta-temple-tours` exists in Vercel team `natasha-djamin-s-projects`
- Yogyakarta is site #6 in the build plan, directly before San Juan (#7)

---

## 3. EXISTING PREP WORK — FILE SYSTEM AUDIT

### 3.1 Site Directory
```
/Users/saraswati/sites/san-juan-excursions/
├── data/              ← EMPTY (created Jun 16 05:14)
```

**Status:** Directory exists but is **completely empty** — scaffolded with a `data/` subdirectory only. No HTML, CSS, images, config, or content files.

### 3.2 Content Bank
```
/Users/saraswati/.hermes/affiliate-crons/content-banks/san-juan*
```
**Status:** ❌ **DOES NOT EXIST.** No content bank created.

### 3.3 Vercel Project
```
vercel projects ls → team natasha-djamin-s-projects
```
- No `san-juan-excursions` or similar project
- Active projects: lapland-adventure-guide, tenerife-outdoor-guide, madeira-hiking, porto-wine-tours, yogyakarta-temple-tours

**Status:** ❌ **No Vercel project.**

### 3.4 Domain Registration
```
dig +short san-juan-excursions.com → (empty — no DNS)
```
**Status:** ❌ **No domain registered or configured.** `san-juan-excursions.com` does not resolve.

### 3.5 MemPalace / Hermes Conversations
**Status:** No San Juan / Puerto Rico specific conversations stored in MemPalace. All semantic search results returned general affiliate fleet discussions (Porto, Madeira, Tenerife build sessions) with similarity scores >0.45 (weak).

---

## 4. CRITICAL MISSING PIECES

| Item | Status | Notes |
|------|--------|-------|
| **Viator destination ID** | ❌ Unknown | Not in any gbrain page. Needs `GET /partner/destinations` API lookup. DestIds of existing sites: Tenerife=5404, Madeira=5392, Porto=26879, Lapland=5581 |
| **Domain name** | ❌ Not chosen/registered | `san-juan-excursions.com` does not resolve. Needs domain strategy decision. |
| **Author persona** | ❌ Not created | Fleet sites have detailed personas (Alejandro Vega, Sofia Almeida, Tiago Ferreira, Mia Ahola). San Juan needs a local Puerto Rican expert persona with EEAT signals. |
| **Content bank** | ❌ Not created | Needs Viator product research, 40+ facts, 12+ products, local knowledge base |
| **SERP research** | ❌ Not done | No competitor analysis for San Juan / Puerto Rico excursion SERPs |
| **Content briefs** | ❌ Not written | 0 content briefs for San Juan |
| **Site scaffold** | ❌ Empty | Directory exists but no files |
| **Fleet registry entry** | ❌ Not registered | No entry in fleet-registry.yaml or gbrain fleet registry |

---

## 5. KEY STRATEGIC NOTES FROM GBRAIN

### Positioning
- San Juan is the **fastest path to a US-market affiliate site** in the fleet
- English-first = simpler execution (no multilingual complexity)
- 6.8M airport arrivals = strong demand signal
- Bio bay + El Yunque + Old San Juan = natural comparison/tradeoff content (AI-resistant)

### Template Reuse
- ~60% template reuse from existing sites (Madeira/Porto excursion format)
- City-base format with day trips/excursions = familiar architecture
- Comparison pages ("private vs group bio bay tour", "which El Yunque trail") resist AI click loss

### Timing
- Scheduled for **Weeks 7-8** in the 20-site build plan
- Currently Yogyakarta (Week 5-6) is being built → San Juan is NEXT
- **Hurricane season consideration:** June-November. Content must address weather policies and emphasize year-round activities

### Revenue Potential
- **$2,100/mo** projected (months 12-24)
- **USD market** = higher AOV, higher conversion rates
- **Cookie spill:** 30-day Viator cookie captures whatever the visitor eventually books
- Effective take rate: 4-6% on Viator bookings

### Risks
- US travel blog competition (stronger than European SERPs for other fleet sites)
- Hurricane season may affect booking confidence seasonally
- Needs sharper differentiation than European sites

---

## 6. NEXT ACTIONS (for parent agent)

1. **Find Viator destId** for San Juan / Puerto Rico via Viator API
2. **Choose and register domain** (san-juan-excursions.com or alternative)
3. **Create author persona** — a Puerto Rican local expert with bio bay/El Yunque guiding experience
4. **Scaffold Vercel project** under `natasha-djamin-s-projects` team
5. **Build content bank** — research San Juan/Puerto Rico excursions, Viator products, local knowledge
6. **SERP competitor analysis** — who ranks for San Juan excursion terms?
7. **Create fleet registry entry** — add to `affiliate-fleet/fleet-registry` in gbrain
8. **Begin content briefs** — 10+ briefs following the proven excursion comparison format

---

## 7. SOURCES CONSULTED

| gbrain Page | Type | Relevance |
|-------------|------|-----------|
| `affiliate-fleet/viator-opportunity-ranking` | concept | San Juan ranked #5 globally, $2,100/mo |
| `affiliate-fleet/revenue-priority-ranking` | concept | San Juan #3 revenue priority, USD velocity |
| `affiliate-fleet/site-priority-q2-2026` | concept | San Juan #7 build order, Batch 2, Weeks 7-8 |
| `affiliate-fleet/site-build-priority` | concept | Top 5 short-list (San Juan not in top 5) |
| `affiliate-fleet/fleet-registry` | concept | No San Juan entry; 4 live + 1 concept site |
| `affiliate-fleet-registry-2026-06-07` | note | YAML fleet registry — no San Juan entry |
| `reference/hanuman/skills/viator-specialist-skill` | note | Viator API config: PID=P00299531, MCID=42383 |
| `reference/hanuman/knowledge-package/...system_overview` | note | Affiliate system architecture overview |
