/* Official CPO market incremental update 2026-11-06. Additive, idempotent; GitHub Pages only. */
(function(){'use strict';
if(window.__cpoMarket20261106)return;
var C=window.companies,B=window.companyBriefings,E=window.cpoEvents;
if(!C||!B||!Array.isArray(E)){console.warn('CPO 20261106: base data unavailable');return;}
window.__cpoMarket20261106=true;
var rows=[
{id:'amd',date:'2026-11-03',title:'AMD Q3 2026: Data Center 매출 $8.546B, 전년 대비 97% 성장',source:'AMD official IR',url:'https://ir.amd.com/financial-information/sec-filings/content/0000002488-26-000188/q32026991.htm',summary:'2026년 3분기 총매출 $13.377B(+45% YoY), 데이터센터 매출 $8.546B(+97% YoY). EPYC 및 Instinct GPU 수요 확대.',implication:'AI 랙스케일 시스템의 광인터커넥트 수요 기반 확대 신호이나 CPO 전용 매출은 미공시.',points:['2026 Q3 총매출 $13.377B(+45% YoY).','Data Center 매출 $8.546B(+97% YoY).','Instinct MI450/EPYC 수요 확대; CPO 부품 매출은 별도 공시되지 않음.']},
{id:'coherent',date:'2026-11-04',title:'Coherent FY2027 Q1: 매출 $2.37B, 전년 대비 50% 성장',source:'Coherent official IR',url:'https://ir.coherent.com/news-releases/news-release-details/coherent-corp-reports-first-quarter-fiscal-2027-results',summary:'FY2027 1분기 매출 $2.37B(+50% YoY), GAAP 매출총이익률 39.1%, non-GAAP 매출총이익률 40.6%.',implication:'광통신·포토닉스 공급망 확대의 재무 신호이나 CPO/ELS 전용 매출은 별도 확인 필요.',points:['FY2027 Q1 매출 $2.37B(+50% YoY).','GAAP 매출총이익률 39.1%, non-GAAP 40.6%.','회사는 신성장 분야의 확대를 언급; CPO 제품별 매출은 분리하지 않음.']}
];
function canon(u){return String(u||'').replace(/[?#].*$/,'').replace(/\\/$/,'').toLowerCase();}
rows.forEach(function(r){var c=C[r.id];if(!c)return;var n=Array.isArray(c.news)?c.news:[];if(!n.some(function(x){return canon(x.url)===canon(r.url)}))n.push({date:r.date,title:r.title,source:r.source,url:r.url,relevance:'company',summary:r.summary,implication:r.implication});n.sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''))});c.news=n.slice(0,5);if(!B[r.id]||String(B[r.id].date||'')<r.date)B[r.id]={date:r.date,title:r.title,points:r.points,implication:r.implication,url:r.url};});
/* Remove superseded Lumentum Nov 5 earnings event: results released Nov 2. Preserve all other events. */
for(var i=E.length-1;i>=0;i--){var e=E[i];if(e&&e.region==='corporate'&&String(e.company||'').toLowerCase()==='lumentum'&&e.start==='2026-11-05'&&/result|earnings|financial/i.test(String(e.name||'')))E.splice(i,1);}
function refresh(){if(typeof window.renderUpcomingEvents==='function')window.renderUpcomingEvents();if(typeof window.renderVendorList==='function')window.renderVendorList();if(typeof window.renderVendor==='function')window.renderVendor();var b=document.getElementById('buildBadge');if(b)b.textContent='v2.17.12 · IR / AI Optical · 2026-11-06';}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
})();