/* Official-source incremental supply-chain update, 2026-11-09. No Render dependency. */
(function(){'use strict';
if(window.__cpoMarket20261109)return;
var C=window.companies,B=window.companyBriefings;
if(!C||!B||!C.furukawa)return;
window.__cpoMarket20261109=true;
var r={date:'2026-10-28',title:'Furukawa Electric–SK Ecoplant Materials: AI 데이터센터·반도체 고기능 소재 MOU',source:'Furukawa Electric official press release',url:'https://cdntest.digitalpr.jp/r/146831',relevance:'company',summary:'양사는 AI 데이터센터·반도체용 패키징, 방열·절연 및 통신 인프라 소재 협력 MOU를 체결. Furukawa가 신제품을 개발하고 SK Ecoplant Materials가 한국 시장 평가·적용을 추진.',implication:'첨단 패키징·방열 소재 공급망 협력 확대 신호. CPO 전용 소재 공급 또는 양산 계약으로 해석하지 않음.'};
var n=Array.isArray(C.furukawa.news)?C.furukawa.news:[];
function norm(s){return String(s||'').split('?')[0].replace(/\/$/,'').toLowerCase();}
if(!n.some(function(x){return norm(x.url)===norm(r.url)}))n.push(r);
n.sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''))});
C.furukawa.news=n.slice(0,5);
function refresh(){if(typeof window.renderVendorList==='function')window.renderVendorList();if(typeof window.renderVendor==='function')window.renderVendor();}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
})();