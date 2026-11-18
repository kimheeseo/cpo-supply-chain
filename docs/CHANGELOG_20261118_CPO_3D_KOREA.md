# CPO Supply Chain · 2026-11-18 update

## 적용 위치
- Published entrypoint: `index.html` → `cpo_modules/cpo-expansion-20261118.js`
- Existing base application `app_runtime/app.v2.17.11.txt` unchanged.
- Original 2D, 3D and CPO Assembly tabs remain available.

## 신규 UI
1. **실사형 CPO 3D**: WebGL(Three.js) based rotatable and zoomable conceptual CPO board with a switch ASIC, eight optical engines, ELS, PM fiber inputs, FAU/fiber routing and front-panel connectors. Reset, exploded-part view and optical-fiber visibility controls.
2. **2D·2.5D·3D 패키징**: four switchable 3D diagrams (2D, 2.5D interposer, TSV + micro-bump, hybrid bonding). Rotation, zoom, exploded-view control, and a switch to display **TSV together with hybrid bonding**.
3. **국내 업체/제품 정보**: six CPO and adjacent technology records with `source_url`, evidence class and development/sampling status.
4. **해외 업체 한국 영업 채널**: nine records distinguishing verified manufacturer sales locations / distributors from channels with unclear local authorization.

## 기술적 정의
- TSV (Through-Silicon Via) is a conductor inside a die or interposer; it is **not** a die-to-die bonding method.
- Die-to-Die (D2D) specifies **what is bonded**; Die-to-Wafer and Wafer-to-Wafer describe other bonding configurations.
- Micro-bump or hybrid bonding specifies **how** the mating surfaces are interconnected.
- A 3D stack using hybrid bonding can **also** contain TSVs. The illustrations are educational, non-scale, non-CAD diagrams.
- 2.5D interposers may contain TSVs but this depends on the architecture.

## 공식 자료 우선 · 확인된 제품/프로그램
- OE Solutions 23 dBm cooled ELSFP: https://oesolutions.com/ko/oe-solutions-announces-23dbm-ultra-high-power-cooled-elsfp-sampling-begins-q3-2026/
- HC&G X-BRIDGE CPO coupler development: https://hcng.co.kr/kr/sub/media/media.php?bid=4&idx=108&mode=view
- Coherent Seoul office: https://www.coherent.com/company/locations/apac/korea/coherent-seoul
- Corning Korean Optical Communications distributors: https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html
- Furukawa group Korea channel: https://www.furukawaelectric.com/en/company/group/salesoffice.html
- Sumitomo Korea group: https://sumitomoelectric.com/company/office_group_companies/sumitomo-electric-korea-electronics-ltd
- Amphenol Korea: https://www.amphenol.co.kr/
- Fujikura/DDK distributors: https://www.connector.fujikura.com/English/corprate_profile/world_text.html
- Molex Korea distributors: https://www.molex.com/en-us/contact/molex-korea-distributors

### 보도 기반 · 별도 검증 필요
- ADST/글로벌테크놀로지 CPO UV 경화: https://www.etnews.com/20261012000252
- 레이저앱스 가공 기술: https://m.etnews.com/20261027000067
- 인옵틱스 GOFOP: https://magazine.hankyung.com/job-joy/article/202607217933d
- 우리로/한국첨단소재 광소자: https://www.etnews.com/20261026000181

## 상태 및 한계
- Repo: `kimheeseo/cpo-supply-chain`; module deployed via the branch's GitHub Pages entrypoint.
- Static JS parser check passed. Browser-level WebGL interaction on the hosted Pages URL has **not** been independently verified in this update session.
- All 3D graphics are original geometric teaching models; not a measured photorealistic reproduction nor manufacturer CAD.
- A manufacturer's Korean office is **not** proof of official CPO product distribution or local stock. Check products via RFQ.
