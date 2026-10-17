# CPO Supply Chain

CPO Supply Chain Explorer — GitHub Pages frontend.

- **Current release:** v2.14.3 (v2.13.7 base runtime + 2026-10-17 collapsible market-signal brief)
- **Application:** [Open CPO Supply Chain](https://kimheeseo.github.io/cpo-supply-chain/)
- **Launcher:** [index.html](https://github.com/kimheeseo/cpo-supply-chain/blob/main/index.html) loads [app.v2.13.7.txt](https://github.com/kimheeseo/cpo-supply-chain/blob/main/app.v2.13.7.txt) with isolated [assembly](./assembly-explorer-20261017.js), [v2.14.0 release](./cpo-release-20261017.js), and [weekly brief](./cpo-weekly-brief-20261017.js) enhancements.
- **Country classification:** [99-company CSV](https://github.com/kimheeseo/cpo-supply-chain/blob/main/list/261003_99%EA%B0%9C%EC%97%85%EC%B2%B4_%EA%B5%AD%EA%B0%80%EB%B3%84%EB%B6%84%EB%A5%98.csv)
- **CPO supplier research:** [Country and component list](https://github.com/kimheeseo/cpo-supply-chain/blob/main/list/261003_CPO_%EA%B5%AD%EA%B0%80%EB%B3%84%EC%97%85%EC%B2%B4%EB%A6%AC%EC%8A%A4%ED%8A%B8.csv)
- **Newly added supplier log:** [list/added_companies.csv](https://github.com/kimheeseo/cpo-supply-chain/blob/main/list/added_companies.csv)

## Version log

### version: 2.14.3 — 2026-10-17

- The “이번 주 CPO 시장 판단” panel now has a header-level 접기/보기 button, matching the collapsible event experience.
- It stays open on first visit so the three weekly signals remain visible, and remembers the viewer’s most recent open/closed choice locally.

### version: 2.14.2 — 2026-10-17

- Replaced the compact weekly article cards with a readable **CPO 시장 판단** brief. Every source-linked card now separates announcement stage, affected components, disclosed production evidence, and implication.
- Added `전체 · 상용화 · 기술/제품 · 공급망/광섬유` lens filters. A production tag is intentionally withheld unless the cited source publishes customer, shipment, volume-production, or equivalent evidence.
- Added the audit record [data/market_signals_20261017.json](./data/market_signals_20261017.json). Existing event/IR/domestic/overseas/policy filters remain below this panel.

### version: 2.14.1 — 2026-10-17

- Added a **이번 주 CPO 동향** block above the selectable event schedule. It presents three source-linked cards covering system integration, optical-engine integration, and fiber/DCI context, each with a concise implication.
- The existing `기업 IR / 발표 · 국내 · 국외 · 정책` event filters remain closed by default and continue to work independently below the weekly brief.

### version: 2.14.0 — 2026-10-17

- CPO Assembly(2D) now adds a readable **whole-CPO Tx optical-path schematic** below the play control. The laser pulse moves through ELS → PM fiber → PIC/EIC modulation → FAU → SMF harness → front I/O, with the active stage and a short explanation updated in real time. The original conceptual-path control and reduced-motion behavior remain available.
- The Korea sales/support dialog now provides manufacturer filters for **Optical Fiber / Cable** and **Front Connector**. The fiber view distinguishes Corning (Korea office + five official distributors), Furukawa Electric/Lightera (Furukawa Sangyo Korea), Sumitomo Electric (SEKEL), and Fujikura (official global inquiry when a dedicated Korea fiber channel could not be confirmed). The connector view adds Fujikura/DDK's two official Korea distributors alongside the existing Amphenol and Molex/Arrow routes.
- Every displayed route includes a classification (Korea office, official distributor, reported handling, or global inquiry), an official-source link, and public phone/email when published. Namhae ENG remains explicitly marked as product-handling information, not an unverified Corning authorization claim.
- Refreshed source-linked briefing data with the October 13 Wiwynn–Ayar Labs–GUC live CPO demonstration at OCP Global Summit 2026 and Lightera's September 21 second-generation HCF announcement. Existing recent Coherent, Fujikura, and Sumitomo Electric entries are retained.
- Added the audit record [data/korea_vendor_channels_20261017.json](./data/korea_vendor_channels_20261017.json). The Base64 application runtime and core supplier registry are preserved; this release is an additive static GitHub Pages enhancement.

### version: 2.13.8 — 2026-10-17

- CPO Assembly(3D): show ten clickable, projected CAD-group name tags directly over the Three.js assembly. Clicking any tag or original mesh highlights the corresponding group and immediately displays its name; the tags remain usable in **Assembly View**, not only in exploded/detail mode. Labels can be hidden.
- CPO Assembly(2D): add **동작 원리 · 레이저 경로** play/stop and step-by-step controls. Illustrate ELS → PM fiber → PIC/modulator → FAU → SM harness → connector with differentiated CW input and modulated output beams, including a clear conceptual-not-to-scale note and reduced-motion support.
- Korea sales/support: add contextual **Optical Fiber → Corning → 한국코닝·공식 Distributor·확인 필요 취급처** drilldown, source/status badges and filters (Korea subsidiary 1, Corning-listed distributors 5, third-party reported reseller 1).
- Keep the official Korea Corning distributor roster separate from Namhae ENG, whose Corning product handling is reported by a third party but whose current official Corning distributor status is not confirmed.
- Current launcher labels **국내 영업업체 / 국가별 업체** remain unchanged, and the core supplier registry/3D geometry remains preserved.
- Sources and role definitions: [data/korea_corning_channels_20261017.json](./data/korea_corning_channels_20261017.json). The extension is isolated to separate JS/CSS to avoid rewriting the 2.13.7 Base64 app payload.

### version: 2.13.3 — 2026-10-14

- Renamed the CPO event panel to `주요 행사 일정` and changed the event buttons to closed-by-default accordion behavior: 기업 IR / 발표, 국내, 국외 are inactive until selected, and only the selected category is displayed.
- Added a `정책` button with country filters for 미국, 중국, 일본, 한국 and 유럽. Policy cards link to official government/public-program sources and distinguish direct CPO measures from broader CPO-enabling photonics, advanced-packaging and optical-infrastructure measures.
- Added source records for U.S. CHIPS advanced packaging/photonics, China MIIT `光电共封`, Japan NEDO Green Innovation Fund CPO/optical-smart-NIC R&D, Korea optical-computing semiconductor/AIDC-optical infrastructure programs, and EU PIXEurope.
- Source/verification record: `data/update_20261014_policy.json`.

### version: 2.13.2 — 2026-10-14

- Reduced the text size of labels inside the main passive 2D CPO image to 60% of the previous size while keeping the image itself unchanged and non-interactive.
- Refreshed source-linked products for US, China, Korea and Japan across large enterprises and startups/SMEs, including NVIDIA, Ayar Labs, OpenLight, Avicena, Accelink, HG Genuine, Lessengers, FOSTEC, OE Solutions, AIO Core and THine Electronics. Demo/evaluation/roadmap status is explicitly distinguished from production.
- Added HG Genuine, AIO Core and THine Electronics to the supplier registry, and normalized country names so equivalent labels such as 미국/美国/美國 and 중국/中国/中國 are merged into one country entry.
- Source/verification record: `data/update_20261014.json`.

### version: 2.13.1 — 2026-10-12

- Added officially announced Lumentum Q1 FY2027 earnings webcast on November 5; kept corporate IR dates separate from exhibitions and restricted corporate display to dates after today (maximum five).
- Added source-linked news for Sumitomo Electric's PRISM Lab, Lightera's second-generation HCF integration, and Lumentum's earnings-date notice. Preserved existing product, vendor, stock, and 3D data.
- Updated the versioned static runtime and GitHub Pages launcher without changing Render services.

### version: 2.11.9 — 2026-10-10

- Added CIOE 2026 and OFC 2026 company filters and event source links for exhibitors with CPO or adjacent optical interconnect products.
- Added source-linked product and article records for 3.2T NPO, optical engines, ELSFP, CPO fiber attach, SiPh wafer test, and CPO/NPO interconnects; distinguished announced demos and roadmaps from production status.
- Added HYC, Enlitech, LightSpeed Photonics and Photonect to the supplier directory.


Record every application update here as a chronological release history. For each update, add a dated `### version: x.y.z — YYYY-MM-DD` entry at the top of this section and list the concrete changes, including feature additions, UI changes, data changes, bug fixes, and behavior changes. Keep entries concise but specific enough to show what changed and its effect. Do not replace or remove earlier entries; preserve the full history. Keep the version in this README, the launcher, and the versioned app payload filename aligned with the latest release.

### version: 2.11.3 — 2026-10-05

- Added 12 source-checked article records across 10 suppliers; includes ficonTEC/HTSI CPO test cooperation, AST/Broadcom substrate capacity, TFC optical engines, HPE/AMD Helios, and HFCL OptiQ AI. Older relevant backfills are shown with their actual publication dates.
- Updated SENKO's briefing to its September 25 GPEF announcement; retained the other 15 briefings and existing corporate dates. Added SEMICON West (October 13–15) from the official organizer.
- Suppressed two known duplicate announcements in the five-article display while retaining underlying records. Upcoming-event filtering now uses the Korean calendar date consistently.
- Preserved all supplier mappings, product specifications, country filters, domestic sales contacts, stock links and 3D views. Research coverage and source limitations: `data/update_20261005.json`.

### version: 2.11.2 — 2026-10-04

- Added 12 previously unrepresented official announcements for AMD, Indium, SENKO, Accelink, NTT Innovative Devices, HFCL, Dell and STL; preserved prior records. Dates span September 4–October 1.
- Added OCP Global Summit (October 12–15) to exhibitions from AMD's dated official announcement. Corporate IR dates and 16 existing briefings remain unchanged.
- Corporate event components now derive from the current parts/vendors mapping. Up to five priority-selected articles display newest first; future-dated articles are excluded.
- Included all 99 vendors in discovery, including six suppliers appended by the existing runtime. See `data/update_20261004.json` for sources and verification limits.

### version: 2.10.3 — 2026-10-03

- Added six source-checked suppliers: Accelink, InnoLight, and Eoptolink (CIOE 2026 exhibitors in China); HFCL and Sterlite Technologies (optical-fiber suppliers in India); and NTT Innovative Devices (Japan). Existing Taiwan suppliers and Japanese fiber makers remain in the supplier list.
- Added product detail dialogs with product-specific descriptions, published specifications, and links to official product documents. Where a manufacturer does not publish a specification, the app says so instead of substituting the company homepage for product data.
- Added clickable email inquiry links when an official address is published; companies without a public email retain a link to their official inquiry form.
- Added PM fiber and single-mode fiber comparison tables for LS Cable & System reference, including fiber diameter, attenuation, mode-field diameter, bend conditions, wavelength, and the relevant source links. Model and test-condition differences are identified in the comparison.
- Updated the country classification from the original 93-company snapshot to 99 companies and added a sourced country/component research CSV.

### version: 2.10.2 — 2026-10-02

- Added a country selector that filters the supplier list for the selected country while keeping the chosen component.
- Added a country browsing button beside “국내 영업업체”: choose a country, then a component, to view only matching suppliers.
- Added India, Vietnam, and Singapore as country choices; Taiwan was already represented. The current dataset has no suppliers registered for India, Vietnam, or Singapore, so those choices show zero until suppliers are added.

### version: 2.10.1 — 2026-10-02

- Updated the launcher and version label to v2.10.1. No other differences from v2.10.0 were found in the app payload.

### version: 2.10.0 — 2026-10-02

- Added a first-visit PC/mobile screen choice and saved the selected layout for later visits.
- Added country labels to company names in the supplier explorer.

## Newly added companies

Record each newly added supplier as one row in [list/added_companies.csv](https://github.com/kimheeseo/cpo-supply-chain/blob/main/list/added_companies.csv). Include its addition date, name, country, CPO component/category, website, source, release version, and notes. This file is an additions log; do not re-list existing suppliers unless correcting their record.


## Deployment policy

- **GitHub-only static deployment**: the public homepage is deployed only through GitHub Pages.
- The release launcher loads the versioned base runtime `app.v2.13.7.txt` plus the separate `assembly-explorer-20261017.js`/`.css`, `cpo-release-20261017.js`/`.css`, and `cpo-weekly-brief-20261017.js`/`.css` enhancements.
- Corporate IR/event schedules and company briefing summaries are stored in the static site data.
- Render is not part of the deployment/update workflow for this site.


### v2.11.1 — 2026-10-03
- Corporate IR/events: nearest 5 with mapped CPO components.
- IR briefing refresh for SENKO, Fujikura and Sumitomo Electric.
- Checked all 93 registered companies; refreshed verified static article snapshots for 38 companies (49 curated entries).
- Article display priority: component → keyword → company → AI/Data Center, maximum 5.
- News display no longer depends on the Render news API.
