# CPO Supply Chain

CPO Supply Chain Explorer — GitHub Pages frontend.

- **Current release:** v2.11.3
- **Application:** [Open CPO Supply Chain](https://kimheeseo.github.io/cpo-supply-chain/)
- **Launcher:** [index.html](https://github.com/kimheeseo/cpo-supply-chain/blob/main/index.html) loads [app.v2.11.3.txt](https://github.com/kimheeseo/cpo-supply-chain/blob/main/app.v2.11.3.txt)
- **Country classification:** [99-company CSV](https://github.com/kimheeseo/cpo-supply-chain/blob/main/list/261003_99%EA%B0%9C%EC%97%85%EC%B2%B4_%EA%B5%AD%EA%B0%80%EB%B3%84%EB%B6%84%EB%A5%98.csv)
- **CPO supplier research:** [Country and component list](https://github.com/kimheeseo/cpo-supply-chain/blob/main/list/261003_CPO_%EA%B5%AD%EA%B0%80%EB%B3%84%EC%97%85%EC%B2%B4%EB%A6%AC%EC%8A%A4%ED%8A%B8.csv)
- **Newly added supplier log:** [list/added_companies.csv](https://github.com/kimheeseo/cpo-supply-chain/blob/main/list/added_companies.csv)

## Version log

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
- The release launcher loads the versioned static runtime `app.v2.11.3.txt`.
- Corporate IR/event schedules and company briefing summaries are stored in the static site data.
- Render is not part of the deployment/update workflow for this site.


### v2.11.1 — 2026-10-03
- Corporate IR/events: nearest 5 with mapped CPO components.
- IR briefing refresh for SENKO, Fujikura and Sumitomo Electric.
- Checked all 93 registered companies; refreshed verified static article snapshots for 38 companies (49 curated entries).
- Article display priority: component → keyword → company → AI/Data Center, maximum 5.
- News display no longer depends on the Render news API.
