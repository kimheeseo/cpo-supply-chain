/* Verified incremental CPO data snapshot, 2026-10-30; GitHub Pages static only. */
(function(){
'use strict';
if(window.__cpoMarket20261030)return;
var C=window.companies,B=window.companyBriefings,E=window.cpoEvents;
if(!C||!B||!Array.isArray(E)){console.warn('CPO 20261030: base static data unavailable');return;}
window.__cpoMarket20261030=true;
var records=[{"id":"amphenol","date":"2026-10-28","title":"Amphenol Q3 2026: IT Datacom 호조·매출 $10.2B·수주 $12.2B","source":"Amphenol IR","url":"https://investors.amphenol.com/news-and-events/news-details/2026/Amphenol-Reports-Record-Third-Quarter-2026-Results-and-Announces-Dividend-Increase-and-New-Stock-Repurchase-Program/default.aspx","relevance":"ai","summary":"3분기 매출 $10.2B(+65% YoY, 유기적 +37%), 수주 $12.2B(book-to-bill 1.19). 회사는 IT datacom의 강한 유기적 성장을 확인했으나 CPO 전용 매출은 공개하지 않음.","implication":"AI 데이터센터 인터커넥트 수요 확대 신호. USFP/고밀도 광커넥터의 실적 기여도는 별도 확인 필요."},{"id":"prysmian","date":"2026-10-29","title":"Prysmian Q3 2026: Digital Solutions 유기적 +17.3%·마진 25.0%","source":"Prysmian IR","url":"https://www.prysmian.com/en/media/press-releases/prysmian-to-exceed-2028-financial-targets-two-years-early-raises-2026-guidance-again-after-its-best-quarter-to-date","relevance":"component","summary":"3분기 Digital Solutions 유기적 매출 성장 +17.3%, 조정 EBITDA 마진 25.0%; 미국 광섬유 생산 기반과 Channell 인수 효과. 그룹 조정 EBITDA €851M.","implication":"광섬유·케이블 데이터센터 공급망의 실적 개선 확인. CPO·PMF·HCF 전용 매출은 분리 공시되지 않음."}];
var briefings=[{"id":"amphenol","date":"2026-10-28","title":"Amphenol Q3 2026 Results","points":["매출 $10.2B, 전년 동기 대비 65% 증가(유기적 +37%).","수주 $12.2B, book-to-bill 1.19:1.","IT datacom 시장에서 예외적으로 강한 유기적 성장. CPO 전용 매출은 미공시."],"implication":"AI 서버·스위치용 고밀도 인터커넥트 수요가 강하지만 VSFF/MMC/USFP별 매출은 별도로 확인되지 않습니다.","url":"https://investors.amphenol.com/news-and-events/news-details/2026/Amphenol-Reports-Record-Third-Quarter-2026-Results-and-Announces-Dividend-Increase-and-New-Stock-Repurchase-Program/default.aspx"},{"id":"prysmian","date":"2026-10-29","title":"Prysmian Q3 2026 Results","points":["Digital Solutions 유기적 성장 +17.3%, 조정 EBITDA 마진 25.0%.","그룹 조정 EBITDA €851M(+32.1% YoY), 2026년 전망 상향.","미국 광섬유 생산기반과 Channell 사업 통합의 기여를 회사가 언급."],"implication":"AI 데이터센터용 광섬유·케이블의 수요 강세를 시사하지만 CPO/PMF/MCF/HCF 제품별 매출로 해석할 수는 없습니다.","url":"https://www.prysmian.com/en/media/press-releases/prysmian-to-exceed-2028-financial-targets-two-years-early-raises-2026-guidance-again-after-its-best-quarter-to-date"}];
function canonical(url){return String(url||'').replace(/[?#].*$/,'').replace(/\/$/,'').toLowerCase();}
records.forEach(function(r){
 var c=C[r.id];if(!c)return;
 var news=Array.isArray(c.news)?c.news:[];
 if(!news.some(function(x){return canonical(x.url)===canonical(r.url)})){
  news.push({date:r.date,title:r.title,source:r.source,url:r.url,relevance:r.relevance,summary:r.summary,implication:r.implication});
 }
 news.sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''))});
 c.news=news.slice(0,5);
});
briefings.forEach(function(b){
 if(!C[b.id])return;
 if(!B[b.id]||String(B[b.id].date||'')<b.date){
  B[b.id]={date:b.date,title:b.title,points:b.points,implication:b.implication,url:b.url};
 }
});
/* NVIDIA Q3 FY27 date now has a dedicated Oct 28 company IR announcement. */
E.forEach(function(e){
 if(e.region==='corporate'&&e.company==='NVIDIA'&&e.start==='2026-11-17'){
  e.url="https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Sets-Conference-Call-for-Third-Quarter-Financial-Results/default.aspx";
  e.name='FY2027 Q3 Earnings Call · 14:00 PT';
  e.parts=e.parts||['Switch ASIC / System','Optical Engine / Interconnect'];
 }
});
function updateUi(){
 if(typeof window.renderUpcomingEvents==='function')window.renderUpcomingEvents();
 if(typeof window.renderVendorList==='function')window.renderVendorList();
 if(typeof window.renderVendor==='function')window.renderVendor();
 var root=document.getElementById('weeklyTrendBrief');
 if(root){
  var list=root.querySelector('.market-signal-list');
  var items=[{"date":"2026.10.28","stage":"실적 확인","title":"Amphenol, IT datacom 강세·3분기 수주 $12.2B","summary":"매출 $10.2B(+65%), 유기적 성장 +37%; 고밀도 인터커넥트 시장 성장 신호.","impact":"Connector · Interconnect · AI Datacom","production":"전사 실적 확인. CPO 전용 매출은 미공개.","insight":"USFP·VSFF·MMC의 실제 공급 확대는 별도 확인 필요.","url":"https://investors.amphenol.com/news-and-events/news-details/2026/Amphenol-Reports-Record-Third-Quarter-2026-Results-and-Announces-Dividend-Increase-and-New-Stock-Repurchase-Program/default.aspx","lenses":"commercial supply"},{"date":"2026.10.29","stage":"실적 확인","title":"Prysmian, 광통신 Digital Solutions +17.3% 성장","summary":"Digital Solutions 유기적 성장 +17.3%, 조정 EBITDA 마진 25.0%.","impact":"Optical Fiber · Cable · DCI","production":"사업부 실적 확인. CPO·HCF 전용 매출은 미공개.","insight":"AI 데이터센터 광배선 공급망 수요와 CPO 부품 수요를 구분.","url":"https://www.prysmian.com/en/media/press-releases/prysmian-to-exceed-2028-financial-targets-two-years-early-raises-2026-guidance-again-after-its-best-quarter-to-date","lenses":"commercial supply"}];
  if(list){
   items.forEach(function(d){
    if(Array.prototype.some.call(list.querySelectorAll('a.market-signal-card'),function(a){return canonical(a.getAttribute('href'))===canonical(d.url)}))return;
    var a=document.createElement('a');a.className='market-signal-card';a.href=d.url;a.target='_blank';a.rel='noopener';
    a.setAttribute('data-market-lenses',d.lenses);
    var top=document.createElement('span');top.className='market-signal-top';
    var stage=document.createElement('em');stage.className='market-stage platform';stage.textContent=d.stage;
    var time=document.createElement('time');time.dateTime=d.date.replace(/\./g,'-');time.textContent=d.date;
    top.appendChild(stage);top.appendChild(time);a.appendChild(top);
    var title=document.createElement('b');title.textContent=d.title;a.appendChild(title);
    var summary=document.createElement('span');summary.className='market-signal-summary';summary.textContent=d.summary;a.appendChild(summary);
    [['영향 부품',d.impact,'market-signal-meta'],['양산 판단',d.production,'market-signal-meta market-signal-check'],['시사점',d.insight,'market-signal-insight']].forEach(function(row){
     var span=document.createElement('span');span.className=row[2];var strong=document.createElement('strong');strong.textContent=row[0];span.appendChild(strong);span.appendChild(document.createTextNode(row[1]));a.appendChild(span);
    });
    var src=document.createElement('span');src.className='market-signal-source';src.textContent='기업 공식 IR ↗';a.appendChild(src);list.prepend(a);
   });
   var n=root.querySelector('.market-summary strong');if(n)n.textContent=String(list.querySelectorAll('a.market-signal-card').length);
  }
  var t=root.querySelector('.market-brief-actions time');if(t){t.dateTime='2026-10-30';t.textContent='2026.10.30 기준';}
 }
 var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.17.10 · 공식 IR/기업 기사 · 2026-10-30';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',updateUi,{once:true});else updateUi();
})();
