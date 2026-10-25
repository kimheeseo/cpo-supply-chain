/* CPO static verified market/IR update · 2026-10-26 · additive, idempotent, no Render dependency */
(function(){
  'use strict';
  if(window.__cpoVerifiedMarket20261026)return;
  var companies=window.companies,parts=window.parts,events=window.cpoEvents,briefings=window.companyBriefings;
  if(!companies||!parts||!events||!briefings){console.warn('CPO 2026-10-26: base static data unavailable');return;}
  window.__cpoVerifiedMarket20261026=true;
  function company(id,record,partIds){
    if(!companies[id])companies[id]=record;
    (partIds||[]).forEach(function(k){var p=parts[k];if(p&&Array.isArray(p.vendors)&&p.vendors.indexOf(id)<0)p.vendors.push(id);});
  }
  function news(id,entry){
    var c=companies[id];if(!c)return;
    if(!Array.isArray(c.news))c.news=[];
    function key(u){return String(u||'').replace(/\?.*$/,'').replace(/\/$/,'').toLowerCase();}
    if(c.news.some(function(n){return key(n.url)===key(entry.url)}))return;
    c.news.push(entry);c.news.sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''));});
  }
  function brief(id,item){
    var old=briefings[id];
    if(!old||String(old.date||'')<item.date)briefings[id]=item;
  }
  company('photonbridge',{name:'Photon Bridge',initial:'PB',official:'https://www.photonbridge.com/',focus:'InP multi-wavelength laser · CPO external light source',product:'Multi-wavelength laser source · 2027 samples planned',news:[]},['els']);
  company('tianfu',{name:'TFC Optical Communication (天孚通信)',initial:'TF',official:'https://www.tfcsz.com/',focus:'FAU · ELS · precision optical coupling · CPO components',product:'CPO supporting FAU and ELS · company-reported stable production/delivery; NPO samples',news:[]},['fau','els']);
  company('innolight',{name:'InnoLight (中际旭创)',initial:'IN',official:'https://www.innolight.com/',focus:'800G/1.6T transceivers · NPO/XPO optical interconnect',product:'800G · 1.6T optical transceivers; NPO/XPO roadmap',news:[]},['opticalModule']);
  var tfcDisclosure='https://stock.stockstar.com/notice/SN2026102300022661.shtml';
  var tianfuIR='https://static.cninfo.com.cn/finalpage/2026-10-22/1225617545.PDF';
  var innolightIR='https://disc.static.szse.cn/download/disc/disk03/finalpage/2026-10-23/164b4f4b-4300-4847-b351-815ae6c9ad5c.pdf';
  var photon='https://www.photonbridge.com/news/photon-bridge-raises-%E2%82%AC10m-to-tackle-ai%E2%80%99s-emerging-laser-bottleneck';
  news('tianfu',{date:'2026-10-23',title:'TFC: CPO용 FAU·ELS 부품 안정적 양산·납품 공시',source:'TFC 2026-057 회사 공시(전문)',url:tfcDisclosure,relevance:'component',summary:'CPO 지원용 FAU·ELS의 안정적 양산·납품을 회사가 확인. 완제품 CPO 스위치 양산을 의미하지 않음.',implication:'FAU 결합손실·정렬 수율·ELS 조달 안정성이 공급망 경쟁 요소.'});
  news('tianfu',{date:'2026-10-22',title:'TFC IR: CPO 증산 속도 변화 없음·NPO는 샘플 단계',source:'CNINFO 공식 투자자관계 기록',url:tianfuIR,relevance:'component',summary:'CPO 지원 FAU·ELS는 고객 요구에 맞춰 증산; NPO 지원 부품은 샘플 단계.',implication:'CPO 지원 부품의 양산과 NPO 시제품 단계를 구분해야 함.'});
  news('innolight',{date:'2026-10-23',title:'InnoLight: 2027년 주문 가시성·1.6T 광모듈 수요 공시',source:'SZSE 공식 기업 공시',url:innolightIR,relevance:'component',summary:'해외 고객 주문이 2027년까지 확보됐다고 공시. 일부 고객의 2028년 수요 전망은 확정 발주가 아님.',implication:'800G/1.6T 실수요와 NPO/XPO의 미래 기대를 분리해 추적.'});
  news('photonbridge',{date:'2026-10-21',title:'Photon Bridge, AI/CPO 다파장 레이저 개발에 €10M 조달',source:'Photon Bridge 공식',url:photon,relevance:'component',summary:'파장당 최대 40mW 목표. 2027년 샘플, 2028년 양산 준비 계획.',implication:'ELS의 InP 제조 수율·다파장 집적·파운드리 다변화 중요.'});
  news('furukawa',{date:'2026-10-20',title:'Furukawa Electric 등, NEDO 광칩렛 제조·검사 R&D 선정',source:'Furukawa Electric 공식',url:'https://www.furukawaelectric.com/release/2026/comp_20261020.html',relevance:'component',summary:'광칩렛 제조·검사·패키징 기술 개발. 생산성 10배는 목표치.',implication:'PIC-FAU 정렬·광학 검사와 패키징 수율의 동시 검증 필요.'});
  news('lightmatter',{date:'2026-10-12',title:'Lightmatter·Flex, 204.8Tbps CPO 시스템 생산검증 공개',source:'Lightmatter 보도자료 배포',url:'https://www.prnewswire.com/news-releases/lightmatter-delivers-open-rack-cpo-switch-and-xpu-scale-up-server-through-independent-collaborations-with-flex-and-other-industry-partners-302906361.html',relevance:'component',summary:'CPO 스위치·XPU 트레이 통합 생산검증 발표. 실제 양산 출하량은 미공개.',implication:'광엔진 단품보다 스위치·레이저·FAU 시스템 통합 검증 중요.'});
  news('tsmc',{date:'2026-10-15',title:'TSMC Q3 2026 실적 발표',source:'TSMC 공식 IR',url:'https://investor.tsmc.com/english/quarterly-results/2026/q3',relevance:'company',summary:'매출 467.2억 달러, 매출총이익률 66.4%, 영업이익률 58.7%. CPO 전용 매출 미공시.',implication:'첨단 패키징 수요의 간접 참고치로 해석.'});
  brief('tianfu',{date:'2026-10-23',title:'TFC 2026-057 · CPO FAU/ELS 사업 현황',points:['CPO 지원 FAU·ELS 부품의 안정적 양산·납품을 회사가 공시.','2026년 상반기 매출 28.28억 위안, 순이익 12.04억 위안.','10/22 IR에서 NPO 지원 부품은 샘플 단계라고 설명.'],implication:'FAU/ELS 부품 양산과 CPO 완제품 양산은 별개이며, NPO는 샘플 상태입니다.',url:tfcDisclosure});
  brief('innolight',{date:'2026-10-23',title:'InnoLight 2026-100 · 광인터커넥트 운영 공시',points:['2026년 상반기 매출 417.78억 위안, 전년 동기 대비 182.49% 증가.','해외 주요 고객 주문이 2027년까지 확보됐다고 설명.','1.6T·800G 수요 강세를 예상하며 NPO/XPO는 후속 기술 방향으로 언급.'],implication:'현재 매출 기반의 플러거블 광모듈 수요와 NPO/XPO의 미래 전망을 구분합니다.',url:innolightIR});
  brief('photonbridge',{date:'2026-10-21',title:'Photon Bridge · €10M 레이저 개발 투자',points:['다파장 레이저 제조 확장을 위한 €10M 조달.','파장당 광섬유 출력 최대 40mW를 목표로 설계.','2027년 첫 샘플 공급, 2028년 양산 준비 계획.'],implication:'개발·고객검증 단계이며 현재 대량 공급을 의미하지 않습니다.',url:photon});
  brief('tsmc',{date:'2026-10-15',title:'TSMC Q3 2026 Quarterly Results',points:['3분기 매출 US$46.72B, 전년 동기 대비 41.2% 증가.','매출총이익률 66.4%.','영업이익률 58.7%; CPO 전용 매출 미공시.'],implication:'첨단 파운드리 수요 참고 지표이며 CPO 매출 추정치는 아닙니다.',url:'https://investor.tsmc.com/english/quarterly-results/2026/q3'});
  var amd={start:'2026-11-03',end:'2026-11-03',region:'corporate',company:'AMD',name:'Q3 2026 Financial Results',where:'Webcast · 17:00 ET',parts:['Switch ASIC / xPU'],url:'https://ir.amd.com/news-events/press-releases/detail/1300/amd-to-report-fiscal-third-quarter-2026-financial-results'};
  if(!events.some(function(e){return e.region==='corporate'&&e.company==='AMD'&&e.start==='2026-11-03'}))events.push(amd);
  if(typeof window.renderUpcomingEvents==='function')window.renderUpcomingEvents();
  if(typeof window.renderVendorList==='function')window.renderVendorList();
  if(typeof window.renderVendor==='function')window.renderVendor();
})();
