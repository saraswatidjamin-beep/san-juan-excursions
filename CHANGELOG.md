
## 2026-07-03
- New: Half-Day El Yunque Rainforest & Waterslide Adventure review (EN, tour_review, 2358w, product 162160P1)
## 2026-07-09
- **New page:** hiking-tours-buyers-guide-san-juan (EN, buyer's guide — El Yunque hiking tours compared)
- **Updated:** 4-hiking-tours-san-juan (cross-links)

## 2026-08-09 (link-health-flywheel)
- **bioluminescent-bay-night-kayaking-biobay-tour-review.html**: Fixed 2 dead explore-more links to deleted Vieques comparison pages (slug truncated at 70 chars, page removed in e94e031). Repointed to /biobay-tours-buyers-guide-san-juan/ (matches 301 destination + dir variant).
- **privacy/index.html + terms/index.html**: Replaced generic Viator destination-browse URL (viator.com/San-Juan/d903 — zero commission, Pitfall 85) with homepage link.

## 2026-08-16 (link-health-flywheel)
- **favicon.svg (new)**: Site was missing favicon (404 on live). Added brand-colored SVG (ocean blue #0077B6, white S) matching fleet pattern.
- 6 additional files: included pending price-fix output (data-price attributes) in this commit

## 2026-08-30 (link-health-flywheel)
- **5 pages**: Fixed SLUG_MISMATCH on product 358368P1 (Small-Group El Yunque Waterslide and Transportation with Photos). Previous href used stale slug `El-Yunque-waterslide-adventure-Transportation` (from older API snapshot in `data/viator-products.json`); replaced with API-current canonical `Small-Group-El-Yunque-Waterslide-and-Transportation-with-Photos`. Files: `index.html`, `el-yunque/index.html`, `el-yunque/waterslide-comparison/index.html`, `el-yunque/best-el-yunque-tours/index.html`, `planning/index.html`. Also updated 2 stale `data-goatcounter-click` attrs in `el-yunque/index.html` and `el-yunque/waterslide-comparison/index.html` (GoatCounter dimension must match outbound href slug for attribution). Both URLs resolve to the same productCode `d903-358368P1` — change is slug canonicalization, not 404 fix.
