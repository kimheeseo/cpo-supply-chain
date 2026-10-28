/* Official CPO supply chain delta 2026-10-28. Additive, idempotent, static. */
(function(){
'use strict';
if(window.__cpoMarket20261028)return;
var C=window.companies,P=window.parts,E=window.cpoEvents,B=window.companyBriefings;
if(!C||!P||!E||!B){console.warn('CPO update: static data unavailable');return;}
window.__cpoMarket20261028=true;
function canonical(u){return String(u||'').replace(/[?#].*$/,'').replace(/\/$/,'').toLowerCase();}
function addNews(id,d){var c=C[id];if(!c)return;var a=c.news||(c.news=[]);if(a.some(function(x){return canonical(x.url)===canonical(d.url)}))return;a.push(d);a.sort(function(x,y){return String(y.date||'').localeCompare(String(x.date||''))});c.news=a.slice(0,5);}
function addBrief(id,b){if(!B[id]||String(B[id].date||'')<b.date)B[id]=b;}
function addEvent(x){if(!E.some(function(y){return y.region==='corporate'&&y.company===x.company&&y.start===x.start&&y.name===x.name}))E.push(x);}

/* Vendor roster additions from official OCP 2026 vendor announcements. */
function addVendor(id,info,category){
  if(!C[id])C[id]=info;
  var part=P[category];if(part&&Array.isArray(part.vendors)&&part.vendors.indexOf(id)<0)part.vendors.push(id);
}
addVendor('guc',{name:'Global Unichip (GUC)',initial:'GU',official:'https://www.guc-asic.com/',
  focus:'Custom ASIC · multi-chip packages · CPO system integration',product:'ASIC and MCP integration with Ayar TeraPHY optical engines',news:[]},'package');
addVendor('astera',{name:'Astera Labs',initial:'AL',official:'https://www.asteralabs.com/',
  focus:'PCIe/CXL scale-up connectivity · optical PCIe demonstration',product:'Scorpio Smart Fabric Switch · COSMOS link intelligence',news:[]},'switchAsic');
addVendor('viavi',{name:'VIAVI',initial:'VI',official:'https://www.viavisolutions.com/',
  focus:'Optical/RF test · CPO module-level characterization',product:'Optical component and module-level test ecosystem',news:[]},'test');
addVendor('advantest',{name:'Advantest',initial:'AD',official:'https://www.advantest.com/',
  focus:'Automated semiconductor test · photonics module integration',product:'Automated CPO test environment',news:[]},'test');

/* 2026-10-28 incremental vendor refresh:
   Official manufacturers only; membership/demonstration does NOT mean volume availability. */
addVendor('samtec',{name:'Samtec',initial:'ST',official:'https://www.samtec.com/',
  focus:'Open CPX MSA 1.0 · Si-Fly HD connector · socket',product:'Si-Fly HD · Open CPX Type 1/Type 2 interface · 224/448G roadmap',news:[]},'connector');
addVendor('mixx',{name:'Mixx Technologies',initial:'MX',official:'https://mixxtech.io/',
  focus:'Open CPX pluggable optical engine · detachable socket',product:'HBxIO™ optical engine · SxC™ detachable connector',news:[]},'opticalEngine');
addVendor('oece',{name:'OECE Technology',initial:'OE',official:'https://www.oece-tech.com/',
  focus:'Precision FAU · CPO/NPO high-density optical attachment',product:'36-fiber FAU · high-density precision V-groove assembly',news:[]},'fau');
addVendor('rvi',{name:'Rayleigh Vision Intelligence (RVi)',initial:'RV',official:'https://rvi-ai.com/',
  focus:'Open CPX MSA · micro-VCSEL optical engine',product:'XmartLink™ micro-VCSEL optical engine',news:[]},'opticalEngine');
var records=[["corning","2026-10-27","Corning Q3 2026: Optical Communications +44%, Gen AI 제품 매출 2배 이상","Corning IR","https://investor.corning.com/news-and-events/news/news-details/2026/Corning-Delivers-Outstanding-Third-Quarter-Results1/default.aspx","Optical Communications $2.379B(+44% YoY), Enterprise Networks +84%, Gen AI 제품 매출 +100% 초과. CPO 전용 매출은 별도 공시되지 않음.","고밀도 광섬유·케이블·커넥터의 AI 데이터센터 수요 증가를 실적으로 확인."],["nvidia","2026-10-21","NVIDIA·SPIL, CPO 광엔진 생산능력 2027년 중반까지 15배 확대 목표","NVIDIA IR","https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Supply-Chain-Partners-Expand-Capacity-to-Accelerate-AI-Infrastructure-Buildout/default.aspx","SPIL CPO optical engine 생산능력 2027년 중반 15배, 2028년 말 추가 2배 목표. Amkor 패키징 확대 계획도 공개.","수치는 목표치이며 실제 양산 수율·출하량과 구분."],["nvidia","2026-10-12","NVIDIA·Cisco, 400G/lane·최대 12.8T USFP 광모듈 폼팩터 발표","NVIDIA IR","https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Cisco-Introduce-New-Pluggable-Optics-Form-Factor-to-Scale-AI-Factories/default.aspx","400Gb/s/lane 전기 인터페이스, 최대 12.8Tb/s 및 2D 전기 커넥터. Amphenol·TE Connectivity 협력.","CPO와 별도 아키텍처인 초고밀도 pluggable 광모듈 진화."],["cisco","2026-10-12","NVIDIA·Cisco, 400G/lane USFP 광모듈 규격 발표","NVIDIA·Cisco","https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Cisco-Introduce-New-Pluggable-Optics-Form-Factor-to-Scale-AI-Factories/default.aspx","OSFP 크기의 16 full-duplex lane, 향후 32 lane 이상 확장 목표.","플러거블 광모듈 전기 인터페이스의 고밀도화."],["amphenol","2026-10-12","Amphenol, NVIDIA·Cisco USFP 커넥터 생태계 참여","NVIDIA IR","https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Cisco-Introduce-New-Pluggable-Optics-Form-Factor-to-Scale-AI-Factories/default.aspx","Amphenol·TE Connectivity가 USFP multi-source 하드웨어 생태계에 참여.","USFP 전기 커넥터와 VSFF/MMC 광커넥터는 구분 필요."],["spil","2026-10-21","SPIL, NVIDIA CPO 광엔진 제조능력 15배 확대 목표","NVIDIA IR","https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Supply-Chain-Partners-Expand-Capacity-to-Accelerate-AI-Infrastructure-Buildout/default.aspx","2027년 중반 15배, 2028년 말 추가 2배 생산능력 확대 목표.","광엔진 패키징·광결합 수율 검증 중요. 실제 생산 실적 미공개."],["amkor","2026-10-21","NVIDIA·Amkor, 첨단 패키징 생산능력 확대 계획","NVIDIA IR","https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Supply-Chain-Partners-Expand-Capacity-to-Accelerate-AI-Infrastructure-Buildout/default.aspx","Amkor는 2028년 말 interposer wafer capacity 300% 초과 확대 목표.","AI 반도체 전체 패키징 증설과 CPO 전용 증설 구분."]];

records.push(
 ["lumentum","2026-10-12","Lumentum·Astera Labs·Corning, 1060 nm VCSEL PCIe-over-optics 랙 수준 시연","Lumentum (official)",
 "https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Astera-Labs-and-Corning-to-Demonstrate-1060-nm-VCSEL-Based-PCIe-over-Optics-for-AI-Rack-Scale-Connectivity-at-the-2026-OCP-Global-Summit/default.aspx",
 "Scorpio PCIe switch와 VCSEL 광송수신, Corning MMF를 결합한 PCIe 5 광전송 PoC. CPO 양산 제품 발표와 별개.",
 "AI rack-scale 연결에서 VCSEL·MMF 광경로 실증 사례로 CPO와 플러거블 외 인접 기술 비교 필요."],
 ["corning","2026-10-12","Corning·Lumentum·Astera Labs, 1060 nm PCIe 광링크 공동 시연","Lumentum (official)",
 "https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Astera-Labs-and-Corning-to-Demonstrate-1060-nm-VCSEL-Based-PCIe-over-Optics-for-AI-Rack-Scale-Connectivity-at-the-2026-OCP-Global-Summit/default.aspx",
 "Corning multimode fiber 및 MMC 연결기술을 1060 nm VCSEL 기반 optical PCIe 실증에 활용.",
 "광섬유 유형·파장·광커넥터 요구가 아키텍처별로 달라짐."],
 ["astera","2026-10-12","Astera Labs Scorpio·Lumentum VCSEL·Corning MMF, PCIe 5 광링크 PoC","Lumentum (official)",
 "https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Astera-Labs-and-Corning-to-Demonstrate-1060-nm-VCSEL-Based-PCIe-over-Optics-for-AI-Rack-Scale-Connectivity-at-the-2026-OCP-Global-Summit/default.aspx",
 "랙 규모 PCIe 5 optical link의 개념 검증. 표준 CPO 광엔진/양산 출하와 구분.",
 "광전송을 적용한 랙 내 확장 연결 아키텍처 사례."],
 ["guc","2026-10-13","GUC·Wiwynn·Ayar Labs, CPO 기반 Optical Compute System 통합 시연","Wiwynn (official)",
 "https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026",
 "GUC MCP 내 Ayar TeraPHY 엔진과 SuperNova 광원을 통합한 플랫폼에서 실시간 텔레메트리 시연.",
 "CPO 공급망 분석 시 광엔진뿐 아니라 MCP·시스템 통합 업체도 포함."],
 ["wiwynn","2026-10-13","Wiwynn, GUC·Ayar와 함께 CPO 통합 Optical Compute System 시연","Wiwynn (official)",
 "https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026",
 "광엔진 상태 모니터링, 냉각, 분리형 FAU 및 섀시 내 광배선 실증.",
 "부품 단일 성능에서 시스템 유지보수성·제조성 검증 단계로 확대."],
 ["senko","2026-09-14","SENKO·Advantest·VIAVI, CPO 모듈 자동시험·분리형 광연결 협력","SENKO (official)",
 "https://www.senko.com/senko-advantest-and-viavi-collaborate-to-address-a-hidden-bottleneck-in-cpo-module-level-testing/",
 "분리형 광접속부와 자동시험 환경 및 고속 포토닉 테스트를 결합한 제조 단계 검증 추진.",
 "커넥터의 교체·테스트 가능성 및 양산 시험 반복성 중요."],
 ["viavi","2026-09-14","VIAVI·SENKO·Advantest, CPO 모듈 수준 HVM 시험 협업","SENKO (official)",
 "https://www.senko.com/senko-advantest-and-viavi-collaborate-to-address-a-hidden-bottleneck-in-cpo-module-level-testing/",
 "VIAVI optical test 기능을 Advantest 자동화 환경과 SENKO detachable connection에 통합 시연.",
 "CPO 공급망 내 광측정 자동화의 중요성 증가."],
 ["advantest","2026-09-14","Advantest·SENKO·VIAVI, 고반복성 CPO 모듈 시험 협업","SENKO (official)",
 "https://www.senko.com/senko-advantest-and-viavi-collaborate-to-address-a-hidden-bottleneck-in-cpo-module-level-testing/",
 "자동화 장비에 분리형 광연결/광측정을 결합한 제조 단계 검증.",
 "CPO 광엔진 테스트를 부품 개별 검증에서 모듈·양산 조건으로 확장."]
);

/* New, directly source-linked items. Dates describe the public announcements. */
records.push(
 ["samtec","2026-10-26","Samtec, Open CPX MSA 1.0 기반 Si-Fly HD·Type 2 연결 구조 공개","Samtec 공식 기술 블로그",
 "https://blog.samtec.com/post/samtec-si-fly-hd-implemented-in-open-cpx-msa/",
 "Open CPX Type 2 72 differential pair·36 lane 및 7.2 Tbps 연결; OCP 2026에서 prototype concept 소개. 224/448G는 규격 로드맵.",
 "광엔진/ASIC 주변 커넥터의 표준화 진행. 시제품과 실제 상용 양산은 별도 확인."],
 ["molex","2026-10-26","Open CPX MSA 1.0: 광·구리 모듈 공통 인터페이스 및 생태계 확대","Samtec 공식 기술 블로그",
 "https://blog.samtec.com/post/samtec-si-fly-hd-implemented-in-open-cpx-msa/",
 "Molex를 포함한 Open CPX 생태계의 표준화 방향 및 Type 1/2 광연결 구조 공개.",
 "CPO/NPO 엔진 인터페이스와 front-panel 광커넥터를 구분하여 검토."],
 ["lightmatter","2026-10-12","Lightmatter·Flex, 204.8 Tbps CPO switch tray 및 102.4 Tbps XPU tray 공개","Lightmatter 보도자료",
 "https://www.prnewswire.com/news-releases/lightmatter-delivers-open-rack-cpo-switch-and-xpu-scale-up-server-through-independent-collaborations-with-flex-and-other-industry-partners-302906361.html",
 "Passage CPO·Guide DR·vClick 광연결을 적용한 OCP 랙 수준 검증 시스템을 전시. 204.8T/102.4T는 플랫폼 사양.",
 "시스템 수준의 optical engine·외부 광원·탈착형 FAU 검증 사례로, 대량 출하 증빙과 구분."],
 ["oece","2026-09-22","OECE, 36-fiber FAU 공정 적격성·신뢰성 검증 및 양산 준비 발표","OECE Technology 공식 뉴스",
 "https://www.oece-tech.com/news/xinwenfabu/170.html",
 "36심 FAU에 대해 자체 공정 적격성 및 신뢰성 평가 완료를 발표. 실고객 CPO 인증과 분리해 해석.",
 "FAU 고채널화에서 pitch 안정성·열응력·삽입손실 관리가 핵심."],
 ["mixx","2026-09-22","Mixx Technologies, HBxIO 광엔진·SxC 커넥터의 Open CPX 지원 발표","Mixx Technologies 공식 뉴스",
 "https://mixxtech.io/mixx-technologies-supports-open-cpx-msa-specification-for-pluggable-near-package-and-co-packaged-optics/",
 "Open CPX MSA 규격에 대응하는 탈착형 광엔진·커넥터 로드맵 발표.",
 "멀티벤더 엔진/커넥터 호환성을 위한 설계 단계 협업 확대."],
 ["rvi","2026-09-29","RVi, Open CPX MSA 참여 및 XmartLink micro-VCSEL 광엔진 소개","RVi 공식 발표",
 "https://rvi-ai.com/news/open-cpx-msa-shaping-the-next-industry-standard-for-cpo-npo",
 "RVi는 Contributor 회원 합류와 XmartLink 광엔진의 표준 인터페이스 적용 방향을 발표.",
 "VCSEL 엔진도 CPO/NPO 규격 경쟁에서 등장; 상용 상태는 별도 검증."],
 ["coherent","2026-10-20","Advanced Photonics Coalition, CPO·SiPh·MCF 제조 표준·권고안 포트폴리오 발표","Advanced Photonics Coalition 공식 발표",
 "https://www.prnewswire.com/news-releases/advanced-photonics-coalition-announces-portfolio-of-specifications-and-best-practice-documents-to-accelerate-high-volume-manufacturing-of-optical-networking-gear-302913234.html",
 "60개 이상 회원사 협력을 통한 CPO, SiPh 제조, MCF 및 OCS 관련 기술 문서 발표; Coherent 단독 발표와 구분.",
 "광섬유/광엔진 패키징의 제조 적합성 평가 및 표준화 진행 확인."],
 ["lumentum","2026-09-21","Lumentum, 8채널 DWDM ELSFP의 CPO/NPO 적용 시연 및 2027년 공급 계획","Lumentum 공식 발표",
 "https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-to-Demonstrate-DWDM-ELSFP-Laser-Module-for-OCI-MSA-Applications-at-ECOC-2026/default.aspx",
 "1311/1331nm 인근 8개 DWDM 파장; 채널별 최대 24dBm 및 모듈 약 12W. 최초 공급 계획은 2027년 상반기.",
 "기존 UHP laser 생산 여부와 신규 8채널 ELSFP 모듈 양산 출하는 구분."]
);
records.forEach(function(r){addNews(r[0],{date:r[1],title:r[2],source:r[3],url:r[4],relevance:'component',summary:r[5],implication:r[6]})});
addBrief('corning',{date:'2026-10-27',title:'Corning Q3 2026 Results',points:['Optical Communications 매출 $2.379B, 전년 대비 44% 증가.','Enterprise Networks +84%, Gen AI 제품 매출 +100% 초과.','전체 Core Sales $5.081B(+19%), Core EPS $0.91.'],implication:'AI 데이터센터 광섬유·케이블·커넥터 수요 증가를 보여주지만 CPO 전용 매출은 별도 공시되지 않았습니다.',url:'https://investor.corning.com/news-and-events/news/news-details/2026/Corning-Delivers-Outstanding-Third-Quarter-Results1/default.aspx'});
addEvent({start:'2026-12-01',end:'2026-12-01',region:'corporate',company:'AMD',name:'UBS Global Technology and AI Conference',where:'Investor webcast',url:'https://ir.amd.com/news-events/press-releases/detail/1300/amd-to-report-fiscal-third-quarter-2026-financial-results'});
addEvent({start:'2026-12-09',end:'2026-12-09',region:'corporate',company:'AMD',name:'Barclays 24th Annual Global Technology Conference',where:'Investor webcast',url:'https://ir.amd.com/news-events/press-releases/detail/1300/amd-to-report-fiscal-third-quarter-2026-financial-results'});
if(typeof window.renderUpcomingEvents==='function')window.renderUpcomingEvents();
if(typeof window.renderVendorList==='function')window.renderVendorList();
if(typeof window.renderVendor==='function')window.renderVendor();
var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.17.7 · CPO Assembly 라벨 개선 · 업체/기사 추가 · 2026-10-28';
})();
