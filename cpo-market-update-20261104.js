/* Official incremental update 2026-11-04; additive, idempotent; GitHub Pages only. */
(function(){'use strict';
if(window.__cpoMarket20261104)return;
var C=window.companies,B=window.companyBriefings,E=window.cpoEvents;
if(!C||!B||!Array.isArray(E))return;
window.__cpoMarket20261104=true;
var rows=[
{id:'lumentum',date:'2026-11-02',title:'Lumentum FY2027 Q1: 매출 $1.2626B, 두 번째 NPO/CPO 수주 $5B 초과',source:'Lumentum IR',url:'https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-First-Quarter-of-Fiscal-Year-2027-Financial-Results/default.aspx',summary:'FY2027 1분기 매출 $1.2626B(+136.5% YoY). 두 번째 주요 NPO/CPO 고객 수주를 확보했으며 관련 구매 약정은 $5B 초과. OCS·펌프 레이저 수요도 확대.',implication:'NPO/CPO 상용 수주 가시성이 개선됐으나 구매 약정과 인식 매출은 구분해야 합니다.',points:['매출 $1.2626B(+136.5% YoY), non-GAAP 영업이익률 42.3%.','두 번째 주요 NPO/CPO 고객 수주 및 $5B 초과 구매 약정 공개.','다음 분기 매출 전망 $1.575B~$1.625B(회사 전망치).']},
{id:'marvell',date:'2026-11-02',title:'Marvell–Lumentum $115B 기업가치 전액 주식 인수 합의',source:'Marvell IR',url:'https://investor.marvell.com/news-events/press-releases/detail/1040/marvell-and-lumentum-to-combine-creating-a-category-leader-in-ai-connectivity',summary:'Marvell이 Lumentum 인수 최종계약을 발표. 거래 내재 기업가치 약 $115B, 완료 예상 2028년 상반기(승인 조건). 광반도체·레이저·스위칭·패키징 역량 결합 추진.',implication:'CPO/ELS/광엔진 공급망의 수직통합 가능성. 거래는 아직 종결되지 않았습니다.',points:['전액 주식 거래, 내재 기업가치 약 $115B.','Marvell ASIC·전기광 인터커넥트와 Lumentum 레이저·OCS·InP 제조 역량 결합 계획.','2028년 상반기 종결 목표, 주주·규제 승인 필요.']}
];
function canon(u){return String(u||'').split('?')[0].replace(/\/$/,'').toLowerCase()}
rows.forEach(function(r){var c=C[r.id];if(!c)return;var news=Array.isArray(c.news)?c.news:[];if(!news.some(function(x){return canon(x.url)===canon(r.url)}))news.push({date:r.date,title:r.title,source:r.source,url:r.url,relevance:'component',summary:r.summary,implication:r.implication});news.sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''))});c.news=news.slice(0,5);if(!B[r.id]||String(B[r.id].date||'')<r.date)B[r.id]={date:r.date,title:r.title,points:r.points,implication:r.implication,url:r.url};});
/* Historical IR entries are retained; existing UI should filter past events. */
function refresh(){if(typeof window.renderUpcomingEvents==='function')window.renderUpcomingEvents();if(typeof window.renderVendorList==='function')window.renderVendorList();if(typeof window.renderVendor==='function')window.renderVendor();var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.17.12 · IR / CPO · 2026-11-04';}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
})();