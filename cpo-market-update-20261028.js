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
records.forEach(function(r){addNews(r[0],{date:r[1],title:r[2],source:r[3],url:r[4],relevance:'component',summary:r[5],implication:r[6]})});
addBrief('corning',{date:'2026-10-27',title:'Corning Q3 2026 Results',points:['Optical Communications 매출 $2.379B, 전년 대비 44% 증가.','Enterprise Networks +84%, Gen AI 제품 매출 +100% 초과.','전체 Core Sales $5.081B(+19%), Core EPS $0.91.'],implication:'AI 데이터센터 광섬유·케이블·커넥터 수요 증가를 보여주지만 CPO 전용 매출은 별도 공시되지 않았습니다.',url:'https://investor.corning.com/news-and-events/news/news-details/2026/Corning-Delivers-Outstanding-Third-Quarter-Results1/default.aspx'});
addEvent({start:'2026-12-01',end:'2026-12-01',region:'corporate',company:'AMD',name:'UBS Global Technology and AI Conference',where:'Investor webcast',url:'https://ir.amd.com/news-events/press-releases/detail/1300/amd-to-report-fiscal-third-quarter-2026-financial-results'});
addEvent({start:'2026-12-09',end:'2026-12-09',region:'corporate',company:'AMD',name:'Barclays 24th Annual Global Technology Conference',where:'Investor webcast',url:'https://ir.amd.com/news-events/press-releases/detail/1300/amd-to-report-fiscal-third-quarter-2026-financial-results'});
if(typeof window.renderUpcomingEvents==='function')window.renderUpcomingEvents();
if(typeof window.renderVendorList==='function')window.renderVendorList();
if(typeof window.renderVendor==='function')window.renderVendor();
var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.17.6 · 3D 라벨 · 국내 채널 9개 부품군 · 제품/기사 · 2026-10-28';
})();
