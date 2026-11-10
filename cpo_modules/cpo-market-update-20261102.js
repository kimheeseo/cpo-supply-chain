/* Official incremental CPO data: 2026-11-02. GitHub Pages only, additive and idempotent. */
(function(){
'use strict';
if(window.__cpoMarket20261102)return;
var C=window.companies,B=window.companyBriefings,E=window.cpoEvents;
if(!C||!B||!Array.isArray(E)){console.warn('CPO 20261102: base data not ready');return;}
window.__cpoMarket20261102=true;
function canon(u){return String(u||'').replace(/[?#].*$/,'').replace(/\/$/,'').toLowerCase();}
var records=[
{id:'furukawa',date:'2026-10-30',title:'Furukawa Snap-Beam CPO/PIC 320심 광커넥터 ECOC2026 수상',source:'Furukawa Electric Newsroom',url:'https://www.furukawaelectric.com/en/release/2026/opt_20261030.html',relevance:'component',summary:'자석 결합·렌즈 기반 탈착형 다심 커넥터 Snap-Beam이 ECOC2026 Fibre Infrastructure Innovation Award 수상. 8×40채널 갱커넥터로 총 320심 원터치 접속 기술 소개.',implication:'CPO/PIC 내부 고밀도 광결합의 정비성·리플로 호환성 평가 필요. 수상·시연과 대량 양산은 구분.'},
{id:'usconec',date:'2026-10',title:'US Conec 2026 IWCS: MMC 기반 고밀도 blind-mate 광커넥터 연구',source:'US Conec Technical White Papers',url:'https://www.usconec.com/resources/white-papers',relevance:'component',summary:'2026년 10월 공개된 기술논문에서 MMC 기반 mid-board blind-mate 다심 접속, 개별 float 정렬 및 GR-1435 환경·기계 시험과 IL/RL 모니터링을 소개. 정확한 일자는 미공개.',implication:'CPO/NPO 광접속부의 반복 체결·공차 흡수·현장 정비성 검증 항목으로 활용. 양산 인증과 동일시하지 않음.'},
{id:'sumitomo',date:'2026-10-30',title:'Sumitomo Electric FY2026 상반기: Infocommunications 매출 2,014.6억 엔',source:'Sumitomo Electric IR',url:'https://sumitomoelectric.com/sites/default/files/2026-10/download_documents/2026_2m.pdf',relevance:'component',summary:'2026년 상반기 Infocommunications 부문 매출 201.459B엔(전년 135.423B엔), 부문이익 61.237B엔(전년 22.075B엔). 회사 전체 매출 2,764.912B엔.',implication:'광통신 사업의 성장 확인. PMF/MCF·CPO 전용 매출은 미공시이며 사업부 전체 수치와 구분.'},
{id:'yofc',date:'2026-10-31',title:'YOFC 2026년 3분기 보고: 1~9월 순이익 61.28억 위안',source:'Shanghai Stock Exchange / YOFC filing',url:'https://static.sse.com.cn/disclosure/listedinfo/announcement/c/new/2026-10-31/601869_20261031_SL60.pdf',relevance:'company',summary:'YOFC의 2026년 1~9월 지배주주 귀속 순이익 61.28억 위안(전년 대비 약 +1,204.63%). 수치는 전체 회사 기준으로 광섬유·CPO 전용 실적과 구분.',implication:'AI 광섬유 공급망의 수익성 변화를 관찰할 지표이나 CPO/MCF/HCF 개별 수요 증거는 아님.'},
{id:'hengtong',date:'2026-10-29',title:'Hengtong 2026년 3분기 보고: 1~9월 순이익 61.63억 위안',source:'Shanghai Stock Exchange / Hengtong filing',url:'https://static.sse.com.cn/disclosure/listedinfo/announcement/c/new/2026-10-29/600487_20261029_XOLI.pdf',relevance:'company',summary:'1~9월 매출 643.67억 위안(+29.72%), 지배주주 귀속 순이익 61.63억 위안(+159.42%). 회사는 광통신 시장 수요 증가와 가격 개선을 언급.',implication:'광섬유·케이블 수요 확대의 재무 신호. PMF/CPO 전용 출하량은 확인되지 않음.'}
];
var briefings=[
{id:'furukawa',date:'2026-10-30',title:'Snap-Beam CPO/PIC Optical Connector · ECOC2026 Award',points:['ECOC2026 Fibre Infrastructure Innovation Award 수상 사실을 10월 30일 발표.','렌즈 기반 expanded-beam 경로, 자석 자동 결합 및 리플로 솔더링 지원 구조 소개.','8×40채널 갱커넥터로 320심 원터치 접속 기술을 발표.'],implication:'광엔진/PIC-광섬유 탈착 접속의 고밀도·정비성 개선 방향을 제시합니다. 기술 수상과 양산 출하는 구분합니다.',url:'https://www.furukawaelectric.com/en/release/2026/opt_20261030.html'},
{id:'sumitomo',date:'2026-10-30',title:'FY2026 First-Half Consolidated Results',points:['연결 매출 2,764.912B엔(+16.5% YoY), 영업이익 219.567B엔(+43.5%).','Infocommunications 매출 201.459B엔(전년 135.423B엔).','Infocommunications 부문이익 61.237B엔(전년 22.075B엔).'],implication:'광통신 부문 호조를 확인할 수 있지만 PMF·MCF·CPO 전용 매출이나 광엔진 출하량으로 환산할 수 없습니다.',url:'https://sumitomoelectric.com/sites/default/files/2026-10/download_documents/2026_2m.pdf'},
{id:'yofc',date:'2026-10-31',title:'YOFC 2026 Q3 Report (January–September)',points:['2026년 1~9월 지배주주 귀속 순이익 61.28억 위안.','전년 동기 대비 약 1,204.63% 증가(거래소 공시·후속 보도 기준).','전체 회사 실적이며 CPO·HCF·MCF 제품별 매출 분리는 없음.'],implication:'광섬유 사업의 수익성 개선 신호로 보되, CPO 광섬유의 실제 상용 공급 확대 증빙과 구분해야 합니다.',url:'https://static.sse.com.cn/disclosure/listedinfo/announcement/c/new/2026-10-31/601869_20261031_SL60.pdf'},
{id:'hengtong',date:'2026-10-29',title:'Hengtong 2026 Q3 Report (January–September)',points:['2026년 1~9월 매출 643.67억 위안(+29.72%).','지배주주 귀속 순이익 61.63억 위안(+159.42%).','광통신 시장 수요 증가 및 가격 개선을 사업 성장 요인으로 설명.'],implication:'광섬유·케이블 공급망 수익성 개선을 보여주지만 PMF/CPO 전용 제품별 수량·매출은 미공시입니다.',url:'https://static.sse.com.cn/disclosure/listedinfo/announcement/c/new/2026-10-29/600487_20261029_XOLI.pdf'}
];
records.forEach(function(r){
 var c=C[r.id];if(!c)return;
 var n=Array.isArray(c.news)?c.news:[];
 if(!n.some(function(x){return canon(x.url)===canon(r.url)}))n.push({date:r.date,title:r.title,source:r.source,url:r.url,relevance:r.relevance,summary:r.summary,implication:r.implication});
 n.sort(function(a,b){return String(b.date||'').localeCompare(String(a.date||''))});
 c.news=n.slice(0,5);
});
briefings.forEach(function(b){
 if(C[b.id]&&(!B[b.id]||String(B[b.id].date||'')<b.date))B[b.id]={date:b.date,title:b.title,points:b.points,implication:b.implication,url:b.url};
});
if(!E.some(function(e){return e.region==='corporate'&&e.company==='Lumentum'&&e.start==='2026-11-05'})){
 E.push({start:'2026-11-05',end:'2026-11-05',region:'corporate',company:'Lumentum',name:'FY2027 Q1 Financial Results · 14:00 PT',where:'Investor webcast',url:'https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-Reporting-Date-for-Fiscal-First-Quarter-2027-Financial-Results/default.aspx'});
}
function updateUi(){
 if(typeof window.renderUpcomingEvents==='function')window.renderUpcomingEvents();
 if(typeof window.renderVendorList==='function')window.renderVendorList();
 if(typeof window.renderVendor==='function')window.renderVendor();
 var root=document.getElementById('weeklyTrendBrief');
 if(root){
  var list=root.querySelector('.market-signal-list');
  var items=records.slice().sort(function(a,b){return a.date.localeCompare(b.date)});
  if(list)items.forEach(function(d){
   if(Array.prototype.some.call(list.querySelectorAll('a.market-signal-card'),function(a){return canon(a.getAttribute('href'))===canon(d.url)}))return;
   var a=document.createElement('a');a.className='market-signal-card';a.href=d.url;a.target='_blank';a.rel='noopener noreferrer';
   a.setAttribute('data-market-lenses',d.id==='usconec'||d.id==='furukawa'?'technology supply':'commercial supply');
   var top=document.createElement('span');top.className='market-signal-top';
   var stage=document.createElement('em');stage.className='market-stage platform';stage.textContent=d.id==='furukawa'?'기술 수상':d.id==='usconec'?'기술논문':'실적 확인';
   var time=document.createElement('time');time.dateTime=d.date;time.textContent=d.date.replace(/-/g,'.');top.appendChild(stage);top.appendChild(time);a.appendChild(top);
   var title=document.createElement('b');title.textContent=d.title;a.appendChild(title);
   var summary=document.createElement('span');summary.className='market-signal-summary';summary.textContent=d.summary;a.appendChild(summary);
   [['영향 부품',d.id==='furukawa'||d.id==='usconec'?'Connector · FAU · CPO':'Optical Fiber · Cable · AI Datacom','market-signal-meta'],['양산 판단','공식 발표/실적 확인. CPO 전용 양산·매출은 별도 검증 필요.','market-signal-meta market-signal-check'],['시사점',d.implication,'market-signal-insight']].forEach(function(row){
    var el=document.createElement('span');el.className=row[2];var strong=document.createElement('strong');strong.textContent=row[0];el.appendChild(strong);el.appendChild(document.createTextNode(row[1]));a.appendChild(el);
   });
   var src=document.createElement('span');src.className='market-signal-source';src.textContent=d.source+' ↗';a.appendChild(src);list.prepend(a);
  });
  var n=root.querySelector('.market-summary strong');if(n&&list)n.textContent=String(list.querySelectorAll('a.market-signal-card').length);
  var controls=root.querySelectorAll('[data-market-lens]');
  Array.prototype.forEach.call(controls,function(button){button.addEventListener('click',function(){
   var lens=button.getAttribute('data-market-lens');
   Array.prototype.forEach.call(list.querySelectorAll('a.market-signal-card'),function(card){card.hidden=lens!=='all'&&String(card.getAttribute('data-market-lenses')||'').split(' ').indexOf(lens)<0});
  });});
  var t=root.querySelector('.market-brief-actions time');if(t){t.dateTime='2026-11-02';t.textContent='2026.11.02 기준';}
 }
 var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.17.11 · CPO IR/커넥터/광섬유 · 2026-11-02';
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',updateUi,{once:true});else updateUi();
})();