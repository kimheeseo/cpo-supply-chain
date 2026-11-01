/* CPO Supply Chain | 2026-11-02 | industry/company/technology/events/supply-chain/Korea support */
(function(){
'use strict';
if(window.__cpoIndustryExpansion20261102)return;
window.__cpoIndustryExpansion20261102=true;
var companies=[
{id:'nvidia',name:'NVIDIA',date:'2026-10-21',kind:'CPO 직접',text:'Spectrum-X / Quantum-X Photonics CPO와 광엔진 패키징 생태계 확대. SPIL 생산능력 확대 목표는 계획 수치로, 실제 출하량과 구분해야 합니다.',url:'https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Supply-Chain-Partners-Expand-Capacity-to-Accelerate-AI-Infrastructure-Buildout/default.aspx'},
{id:'broadcom',name:'Broadcom',date:'2026-10-08',kind:'CPO 직접',text:'OCP 2026에서 Tomahawk 6, TH6-Davisson 3세대 CPO 및 통합 광기술을 AI 이더넷 네트워킹 제품군으로 제시했습니다.',url:'https://investors.broadcom.com/news-releases/news-release-details/broadcom-redefines-ai-infrastructure-industry-leading-networking'},
{id:'marvell',name:'Marvell',date:'2026-09-20',kind:'CPO 직접',text:'ECOC 2026에서 200G/lane SiPh 기반 102.4T CPO 플랫폼 데모와 2nm 광연결 기술을 발표했습니다. 데모와 양산을 구분합니다.',url:'https://www.marvell.com/company/newsroom/marvell-industry-first-2nm-optical-technology-ai-data-center-infrastructure-ecoc-2026.html'},
{id:'tsmc',name:'TSMC',date:'2026 공개 보고서',kind:'파운드리/패키징',text:'COUPE는 SiPh PIC와 전기제어 EIC를 3D 집적하는 광엔진 플랫폼입니다. 연차보고서의 CPO 양산 목표는 목표 일정이며 고객별 공급을 보장하지 않습니다.',url:'https://investor.tsmc.com/sites/ir/annual-report/2025/2025%20TSMC%20Annual%20Report.E.pdf'},
{id:'intel',name:'Intel',date:'공식 기술 자료',kind:'Optical I/O',text:'광컴퓨트 인터커넥트(OCI) 칩렛에 PIC·EIC와 온칩 광원·SOA를 집적하는 접근을 소개합니다. 외부 ELS 구조만 사용하는 것은 아닙니다.',url:'https://www.intel.com/content/www/us/en/products/details/network-io/silicon-photonics.html'},
{id:'amd',name:'AMD',date:'2026',kind:'AI 네트워킹 인접',text:'Pensando Pollara 400 / Vulcano 800 NIC로 AI 클러스터 연결을 고도화합니다. 해당 공개 자료는 CPO 스위치 양산 발표가 아닙니다.',url:'https://www.amd.com/en/blogs/2026/next-gen-networking-transport-for-large-scale-ai-training.html'},
{id:'corning',name:'Corning',date:'2026-09-17',kind:'Fiber / Connector',text:'ECOC 2026에서 CPO/NPO용 Fiber-to-Chip 수동 연결 부품, MCF 솔루션, MMC/PRIZM TMT 연결기술을 소개했습니다.',url:'https://www.corning.com/worldwide/en/about-us/news-events/news-releases/2026/09/corning-to-showcase-new-cable-and-connectivity-innovations-to-accelerate-and-streamline-ai-network-growth-at-ecoc-2026.html'},
{id:'senko',name:'SENKO',date:'2026-09-14',kind:'FAU / 시험',text:'Advantest·VIAVI와 함께 탈착형 광커넥터를 적용한 CPO 모듈 자동시험을 발표했습니다. 반복 체결, BER, 제조 수율 검증이 핵심입니다.',url:'https://www.senko.com/senko-advantest-and-viavi-collaborate-to-address-a-hidden-bottleneck-in-cpo-module-level-testing/'},
{id:'usconec',name:'US Conec',date:'2026-10 (월 단위)',kind:'MMC / Blind-mate',text:'MMC 기반 고밀도 blind-mate 광커넥터 기술논문을 공개했습니다. 정렬 공차와 유지보수성 관점이며 CPO 전용 양산 인증은 별도 확인 대상입니다.',url:'https://www.usconec.com/resources/white-papers'},
{id:'sumitomo',name:'Sumitomo Electric',date:'2026-10-30',kind:'ELS / Fiber',text:'2026년 상반기 Infocommunications 실적을 발표했습니다. CW 레이저·PMF·MCF가 CPO 관련 공급망이나, 사업부 전체 매출을 CPO 매출로 해석하면 안 됩니다.',url:'https://sumitomoelectric.com/sites/default/files/2026-10/download_documents/2026_2m.pdf'},
{id:'furukawa',name:'Furukawa Electric',date:'2026-10-30',kind:'CPO Connector',text:'ECOC 2026에서 Snap-Beam 다심 탈착형 커넥터로 수상했습니다. 8×40채널, 총 320심 원터치 접속 기술을 소개했으며 양산 출하와는 구분합니다.',url:'https://www.furukawaelectric.com/en/release/2026/opt_20261030.html'}
];
var technologies=[
{name:'CPO · Co-Packaged Optics',meta:'ASIC과 광엔진의 패키지 근접 집적',text:'고속 전기 배선을 줄여 손실·전력·전면 밀도 문제를 완화합니다. 제조 수율, 열, 광접속·수리 가능성은 별도 해결 과제입니다.',source:'https://www.broadcom.com/info/optics/cpo'},
{name:'Optical Engine / PIC + EIC',meta:'광변조·검출과 전기 구동',text:'PIC가 광신호를 처리하고 EIC가 드라이버·TIA 등을 담당합니다. 다중 칩/패키징 공정에서 사전 시험과 수율이 중요합니다.',source:'https://www.intel.com/content/www/us/en/products/details/network-io/silicon-photonics.html'},
{name:'ELS · External Laser Source',meta:'외부 CW 광원',text:'열이 큰 스위치 ASIC 주변에서 레이저를 분리하는 설계입니다. 출력, RIN, 파장 안정성, 신뢰성, 레이저-광엔진 경로 손실을 검증합니다.',source:'https://developer.nvidia.com/blog/scaling-power-efficient-ai-factories-with-nvidia-spectrum-x-ethernet-photonics/'},
{name:'PMF · Polarization-Maintaining Fiber',meta:'광원 → PIC 편광 유지',text:'편광 민감 광결합/변조기에서 PER, 삽입손실, MFD, 굽힘반경, 외경, 온도·기계 응력을 확인합니다. 모든 CPO 구조에 PMF가 필수인 것은 아닙니다.',source:'https://www.corning.com/oem-solutions/worldwide/en/home/products-solutions/optical-communication-components/specialty-fiber/cpo-specialty-fiber.html'},
{name:'MCF · Multi-Core Fiber',meta:'공간 다중화·고밀도 연결',text:'동일 외경 내 복수 코어로 심선 밀도 개선 가능성을 연구합니다. 팬아웃, 코어 정렬, 크로스토크, 접속·측정, 기존 생태계와의 호환성이 과제입니다.',source:'https://www.corning.com/worldwide/en/about-us/news-events/news-releases/2026/09/corning-to-showcase-new-cable-and-connectivity-innovations-to-accelerate-and-streamline-ai-network-growth-at-ecoc-2026.html'},
{name:'Pluggable / NPO / CPO 비교',meta:'유지보수성 ↔ 배선 길이·전력·밀도',text:'Pluggable은 전면 교체가 용이하지만 ASIC↔전면 모듈 배선이 깁니다. NPO는 광엔진을 ASIC 가까이, CPO는 같은 패키지 근처에 배치합니다. 현장 교체성과 제조·시험은 구조마다 다릅니다.',source:'https://www.ofcconference.org/program/special-events/open-cpx-presents-accelerating-the-commercial-adoption-of-cpo-npo/'}
];
var events=[
{name:'OFC 2027',date:'2027-03-07 ~ 03-11',note:'기술회의 3/7~11, 전시 3/9~11 · 미국 로스앤젤레스. Demo Zone/Dataset Paper 제출 마감 2026-11-17.',url:'https://www.ofcconference.org/program/schedule-at-a-glance',state:'공식 일정'},
{name:'OCP Global Summit 2027',date:'2027-10-04 ~ 10-07',note:'미국 샌프란시스코 Moscone Center. AI 네트워킹·광인터커넥트 생태계 관련 발표 확인 대상.',url:'https://www.opencompute.org/events/ocp-summit/2027-ocp-global-summit/',state:'공식 일정'},
{name:'ECOC 2027',date:'2027-10-10 ~ 10-14',note:'기술회의 10/10~14, 전시 10/11~13 · 이탈리아 밀라노.',url:'https://www.ecocexhibition.com/future-dates/',state:'공식 일정'},
{name:'COBO → APC / PECC Summit',date:'2026-10-20 ~ 10-21 (종료)',note:'옛 COBO 관련 활동은 Advanced Photonics Coalition(APC) 연계 행사도 확인하세요. 2027 COBO 단독 공식 일정은 이번 검증에서 확인되지 않았습니다.',url:'https://www.optica.org/events/industry_events/2026/pecc_summit_optica_apc_photonic_enabled_cloud_computing_summit/',state:'과거 행사 · 차기 미확정'}
];
var layers=[
{name:'1. Chip / ASIC',companies:'NVIDIA · Broadcom · Marvell · AMD',text:'스위치·xPU·NIC·SerDes 설계. AMD는 AI 네트워킹 인접 업체로 분류합니다.'},
{name:'2. Package / Foundry',companies:'TSMC · SPIL · ASE · Amkor',text:'PIC-EIC/ASIC 이종집적, 인터포저, OSAT 패키징·시험. 양산 계약과 참여 발표는 구분합니다.'},
{name:'3. Optical Engine',companies:'Intel · Marvell · Coherent · Ayar Labs',text:'PIC/EIC, 변조기, 수신소자 및 광결합부; 설계와 제조 주체가 다를 수 있습니다.'},
{name:'4. Fiber / Laser',companies:'Corning · Sumitomo Electric · Lumentum · Coherent',text:'SMF·PMF·MCF, ELS/CW 레이저. 시스템 구조별 적용 품목은 다릅니다.'},
{name:'5. Connector / FAU',companies:'SENKO · US Conec · Furukawa Electric · Corning',text:'Fiber-to-PIC, FAU, MMC, 탈착형/Blind-mate 고밀도 광연결.'},
{name:'6. Assembly / Test',companies:'Fabrinet · Foxconn · Advantest · VIAVI · ficonTEC',text:'광정렬·패키징, 반복 측정, 최종 조립/열관리. 참여기업별 업무 범위 별도 확인.'},
{name:'7. System Vendor',companies:'NVIDIA · Broadcom 생태계 · Wiwynn · 네트워크 OEM/ODM',text:'CPO 스위치·컴퓨트 시스템 통합, 랙 배선 및 운영·정비 검증.'}
];
var korea=[
{name:'광섬유·케이블',text:'광섬유 제조사 한국 법인 또는 제조사가 공시한 판매 채널을 우선 조회합니다. PMF/MCF 사양과 실제 CPO 납품 가능 여부는 별도 확인합니다.',url:'https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html'},
{name:'레이저/광엔진',text:'국내 문의 창구가 있어도 ELS, PIC 또는 CPO 전용 SKU 판매권을 뜻하지 않습니다. 파장·출력·온도·수율·납기와 EOL 관리 요구를 확인합니다.',url:'https://www.coherent.com/ko/contact'},
{name:'커넥터/FAU',text:'MMC·SN-MT·MPC·Snap-Beam 등은 기구 공차, IL/RL, 반복 체결, 리플로 및 시험 조건을 확인하고 정식 국내 취급 여부를 제조사에 확인합니다.',url:'https://www.usconec.com/resources/white-papers'},
{name:'영업·기술지원 절차',text:'요구 규격(파장/채널수/심수/PER/삽입손실), 샘플·인증 조건, 품질보증, 양산 물량·납기, 국내/해외 담당자, IP·수출규제를 순서대로 확인합니다.',url:'https://www.furukawaelectric.com/en/company/group/salesoffice.html'}
];
function el(tag,cls,txt){var e=document.createElement(tag);if(cls)e.className=cls;if(txt!=null)e.textContent=txt;return e;}
function link(url,label){var a=el('a','cpo26-source',label||'공식 출처 보기');a.href=url;a.target='_blank';a.rel='noopener noreferrer';return a;}
function card(title,meta,copy,url){var a=el('article','cpo26-card');a.append(el('h3','',title),el('small','',meta),el('p','',copy));if(url)a.append(link(url));return a;}
function mount(){
 if(document.getElementById('cpoIndustry20261102'))return;
 var hero=document.querySelector('main.wrap .hero');
 if(!hero||!hero.parentNode)return;
 var root=el('section','cpo26-panel');root.id='cpoIndustry20261102';root.setAttribute('aria-label','2026년 11월 2일 CPO 업계 업데이트');
 var heading=el('div','cpo26-head');
 var headingTitle=el('div');headingTitle.append(el('strong','', 'CPO 산업 업데이트 · 2026.11.02'),el('p','','기업·기술·행사·7단계 공급망·국내 영업 가이드 | 공식 발표 및 제조사 자료 기준 정적 스냅샷'));
 heading.append(headingTitle);
 var tabs=el('div','cpo26-tabs');tabs.setAttribute('role','group');tabs.setAttribute('aria-label','CPO 산업 콘텐츠 분류');
 var view=el('div','cpo26-content');
 var groups=[['company','기업 동향'],['tech','기술 동향'],['event','행사·일정'],['layers','Supply Chain'],['korea','국내 영업·지원']];
 var sections={};
 groups.forEach(function(g){
  var b=el('button','',g[1]);b.type='button';b.setAttribute('aria-pressed',String(g[0]==='company'));b.dataset.cpo26Tab=g[0];tabs.append(b);
  var sect=el('div','cpo26-grid');sect.id='cpoIndustry20261102-'+g[0];sect.hidden=g[0]!=='company';view.appendChild(sect);sections[g[0]]=sect;
  b.addEventListener('click',function(){tabs.querySelectorAll('button').forEach(function(x){x.setAttribute('aria-pressed',String(x===b))});Object.keys(sections).forEach(function(k){sections[k].hidden=k!==g[0]})});
 });
 companies.forEach(function(x){sections.company.append(card(x.name,x.date+' · '+x.kind,x.text,x.url));});
 technologies.forEach(function(x){sections.tech.append(card(x.name,x.meta,x.text,x.source));});
 events.forEach(function(x){sections.event.append(card(x.name,x.date+' · '+x.state,x.note,x.url));});
 layers.forEach(function(x){sections.layers.append(card(x.name,x.companies,x.text,null));});
 korea.forEach(function(x){sections.korea.append(card(x.name,'한국 영업·기술 지원 확인 항목',x.text,x.url));});
 var sales=el('button','cpo26-open-sales','기존 국내 영업업체 상세 보기');sales.type='button';sales.addEventListener('click',function(){var target=document.getElementById('koreaSalesBtn');if(target)target.click();});sections.korea.prepend(sales);
 var foot=el('p','cpo26-disclaimer','기준일 2026-11-02. 기사 발표일과 행사 개최일은 구분합니다. 시연·개발·공급망 참여·회사 전체 실적은 CPO 전용 양산/매출을 뜻하지 않습니다. 국내 유통권·규격·호환성은 반드시 제조사에 재확인하세요.');
 root.append(heading,tabs,view,foot);
 hero.insertAdjacentElement('afterend',root);
}
function enhanceExistingNews(){
 var C=window.companies;if(!C)return;
 companies.forEach(function(x){
  var obj=C[x.id];if(!obj)return;
  var news=Array.isArray(obj.news)?obj.news:[];
  if(!news.some(function(n){return String(n.url||'').split('?')[0]===x.url.split('?')[0]})){
   news.push({date:/^\d{4}-\d{2}-\d{2}$/.test(x.date)?x.date:'2026-11-02',title:x.name+' · CPO 공급망 업데이트',summary:x.text,implication:'제품·시연·실적과 상용 공급/적격성은 분리해 검증',source:'제조사 공식 자료',url:x.url,relevance:'component'});
   news.sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''))});obj.news=news.slice(0,5);
  }
 });
 if(typeof window.renderVendorList==='function')window.renderVendorList();
 if(typeof window.renderVendor==='function')window.renderVendor();
}
function style(){
 if(document.getElementById('cpoIndustry20261102-css'))return;
 var s=el('style');s.id='cpoIndustry20261102-css';
 s.textContent=".cpo26-panel{margin:14px 0 20px;padding:16px;background:var(--card,#fff);border:1px solid #bed6e8;border-radius:15px;color:var(--text,#173e59);box-shadow:0 3px 16px #173e5910;min-width:0}"+
 ".cpo26-head{display:flex;justify-content:space-between;gap:10px;flex-wrap:wrap}.cpo26-head strong{font-size:17px;font-weight:850}.cpo26-head p{font-size:12px;line-height:1.65;color:var(--muted,#54768b);margin:5px 0 12px}"+
 ".cpo26-tabs{display:flex;flex-wrap:wrap;gap:7px;margin:2px 0 14px}.cpo26-tabs button,.cpo26-open-sales{cursor:pointer;border:1px solid #9bc4df;color:#0b5685;border-radius:9px;padding:9px 12px;background:#f6fbff;font:750 12px system-ui;min-height:38px}.cpo26-tabs button[aria-pressed=true],.cpo26-open-sales{background:#0c668f;color:white;border-color:#0c668f}"+
 ".cpo26-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:10px}.cpo26-grid[hidden]{display:none!important}.cpo26-card{background:var(--surface,#f8fbff);border:1px solid #d4e5ef;border-radius:10px;padding:12px 13px;min-width:0;line-height:1.55}.cpo26-card h3{font-size:14px;line-height:1.4;margin:0 0 5px;color:var(--text,#183e5a)}.cpo26-card small{display:block;color:var(--muted,#557487);font-size:11px;font-weight:700}.cpo26-card p{font-size:12px;line-height:1.7;margin:8px 0;color:var(--text,#38586d)}.cpo26-source{font-size:11px;font-weight:800;color:#126d9d;text-decoration:underline;text-underline-offset:2px}.cpo26-disclaimer{font-size:11px;color:var(--muted,#547387);line-height:1.6;margin:14px 0 0}.cpo26-open-sales{grid-column:1/-1;width:max-content;max-width:100%}"+
 "html[data-theme=dark] .cpo26-panel,body.dark .cpo26-panel{background:#142c3c;border-color:#476477;color:#e0eef6}html[data-theme=dark] .cpo26-card,body.dark .cpo26-card{background:#203c4e;border-color:#416276}html[data-theme=dark] .cpo26-card h3,html[data-theme=dark] .cpo26-card p,body.dark .cpo26-card h3,body.dark .cpo26-card p{color:#e2f1f8}html[data-theme=dark] .cpo26-tabs button,body.dark .cpo26-tabs button{background:#28485d;color:#d5edff}html[data-theme=dark] .cpo26-tabs button[aria-pressed=true],body.dark .cpo26-tabs button[aria-pressed=true]{background:#0c668f;color:white}"+
 "@media(max-width:720px){.cpo26-panel{padding:11px}.cpo26-grid{grid-template-columns:1fr}.cpo26-head strong{font-size:15px}.cpo26-tabs button{padding:8px 10px;font-size:11px}}";
 document.head.appendChild(s);
}
function init(){style();mount();enhanceExistingNews();var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.17.12 · CPO 산업/Assembly 2D · 2026-11-02';}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
