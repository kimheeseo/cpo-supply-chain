# CPO Supply Chain

CPO Supply Chain Explorer — GitHub Pages frontend.

- **Current release:** v2.10.1
- **Application:** [Open CPO Supply Chain](https://kimheeseo.github.io/cpo-supply-chain/)
- **Launcher:** `index.html` loads `app.v2.10.1.txt`
- **Country classification:** [93-company CSV](list/261002_93개업체_국가별분류.csv)
- **Newly added supplier log:** [added_companies.csv](list/added_companies.csv)

## Version log

### version: 2.10.1 — 2026-10-02

- Updated the launcher and version label to v2.10.1. No other differences from v2.10.0 were found in the app payload.

### version: 2.10.0 — 2026-10-02

- Added a first-visit PC/mobile screen choice and saved the selected layout for later visits.
- Added country labels to company names in the supplier explorer.

For each future user-requested application improvement that changes the release version, append a dated `### version: x.y.z — YYYY-MM-DD` entry here with the concrete changes. Keep the version in the launcher and payload filename aligned with the latest release.

## Newly added companies

Record each newly added supplier as one row in [list/added_companies.csv](list/added_companies.csv). Include its addition date, name, country, CPO component/category, website, source, release version, and notes. This file is an additions log; do not re-list existing suppliers unless correcting their record.
