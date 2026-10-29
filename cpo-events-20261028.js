/* CPO Supply Chain v2.17.9 — 2026-10-28
 * Verified corporate IR and government/public R&D schedule.
 * Additive GitHub Pages enhancement: keeps 2D/3D, supplier and event core intact.
 * Data: ./data/cpo_event_calendar_20261028.json
 */
(function(){
'use strict';
if(window.__cpoEvents20261028)return;
window.__cpoEvents20261028=true;
var root=null,list=null,watch=null,policyBox=null,policyButton=null,more=null;
var data=null,policyOn=false,country='전체';
var $=function(s,r){return(r||document).querySelector(s)};
function escapeHtml(s){return String(s==null?'':s).replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]})}
function todaySeoul(){return new Date().toLocaleDateString('sv-SE',{timeZone:'Asia/Seoul'})}
function dateLabel(v){return String(v||'').replace(/-/g,'.')}
function isUrl(url){return /^https:\/\/[a-z0-9.-]+\//i.test(String(url||''))}
function sourceLink(item){return isUrl(item.url)?'<a href="'+escapeHtml(item.url)+'" target="_blank" rel="noopener noreferrer">공식 출처 ↗</a>':''}
function css(){
 if($('#cpoEvent20261028Style'))return;
 var el=document.createElement('style');
 el.id='cpoEvent20261028Style';
 el.textContent=
 '#cpoPolicyFilter.active{background:#136b8d;color:#fff;border-color:#136b8d}' +
 '#cpoPolicyBox{margin:10px 0 0;padding:12px;border:1px solid #abc5d5;border-radius:12px;background:#f7fbfd;color:#24455a}' +
 '#cpoPolicyBox[hidden],#cpoMoreCorporate[hidden],#eventList[hidden],#irWatchList[hidden]{display:none!important}' +
 '.cpo-event-meta{font-size:11px;line-height:1.55;color:#577082;margin:0 0 10px}' +
 '.cpo-policy-filters{display:flex;gap:5px;flex-wrap:wrap;margin-bottom:10px}' +
 '.cpo-policy-filters button{border:1px solid #adc4d2;border-radius:7px;background:#fff;color:#32556b;font:750 11px system-ui;padding:6px 10px;min-height:32px;cursor:pointer}' +
 '.cpo-policy-filters button[aria-pressed="true"]{color:#fff;background:#14769a;border-color:#14769a}' +
 '.cpo-policy-item{background:#fff;border:1px solid #cbdce7;padding:11px 12px;border-radius:9px;margin:7px 0;font-size:12px;line-height:1.55}' +
 '.cpo-policy-item strong{display:block;color:#173e54;font-size:13px;margin:3px 0 5px}' +
 '.cpo-policy-head{display:flex;gap:7px;align-items:center;flex-wrap:wrap}' +
 '.cpo-policy-date{font-weight:850;color:#075e90}' +
 '.cpo-policy-tag{border-radius:5px;background:#e6f1fa;color:#1a5b7d;padding:2px 6px;font-size:10px;font-weight:800}' +
 '.cpo-policy-item p{margin:4px 0;color:#486579}' +
 '.cpo-policy-item a,.cpo-extra-list a{color:#05659d;font-weight:750;text-decoration:underline;text-underline-offset:2px}' +
 '#cpoMoreCorporate{margin-top:10px;padding:8px 11px;border:1px solid #b5d3df;border-radius:10px;background:#eff7fb;color:#24495e;font:650 12px system-ui}' +
 '#cpoMoreCorporate summary{cursor:pointer;font-weight:850;color:#075879;min-height:25px;line-height:25px}' +
 '.cpo-extra-list{display:grid;gap:7px;margin:8px 0 3px}.cpo-extra-row{padding:9px;background:white;border-radius:7px;border:1px solid #cbdfe9;line-height:1.6}' +
 '.cpo-schedule-alert{padding:8px;border-left:3px solid #d49b36;background:#fff8e8;margin-top:10px;font-size:11px;line-height:1.6}' +
 'html[data-theme="dark"] #cpoPolicyBox,html[data-theme="dark"] #cpoMoreCorporate{background:#152d41;color:#cbe5f4;border-color:#456a82}' +
 'html[data-theme="dark"] .cpo-policy-item,html[data-theme="dark"] .cpo-extra-row{background:#1b3547;border-color:#466477;color:#d6e7f1}' +
 'html[data-theme="dark"] .cpo-policy-item strong{color:#e1f3ff}' +
 'html[data-theme="dark"] .cpo-policy-item p{color:#b3d4e3}' +
 '@media(max-width:650px){#cpoPolicyBox{padding:9px}.cpo-policy-item{padding:9px}.cpo-policy-filters button{min-height:38px}}';
 document.head.appendChild(el);
}
function integrate(){
 root=$('#eventFilter');list=$('#eventList');watch=$('#irWatchList');
 if(!root||!list)return;
 css();
 policyButton=document.createElement('button');
 policyButton.type='button';policyButton.id='cpoPolicyFilter';
 policyButton.className='event-filter-btn';
 policyButton.textContent='정부 일정 · 정책';
 policyButton.setAttribute('aria-pressed','false');
 root.appendChild(policyButton);
 policyBox=document.createElement('section');
 policyBox.id='cpoPolicyBox';policyBox.hidden=true;
 policyBox.setAttribute('aria-label','정부 일정·지원사업 일정');
 list.insertAdjacentElement('afterend',policyBox);
 more=document.createElement('details');
 more.id='cpoMoreCorporate';more.hidden=true;
 list.insertAdjacentElement('afterend',more);

 policyButton.addEventListener('click',function(){
  policyOn=!policyOn;
  syncMode();
 });
 root.addEventListener('click',function(ev){
  if(ev.target.closest('[data-event-filter]')){
   policyOn=false;syncMode();
  }
 });
 // Wait until the official dates are loaded; no unsupported placeholder dates.
 fetch('./data/cpo_event_calendar_20261028.json?v=2.17.9',{cache:'no-store'})
 .then(function(r){if(!r.ok)throw Error('HTTP '+r.status);return r.json()})
 .then(function(x){
   if(!x||!Array.isArray(x.policyEvents)||!Array.isArray(x.companyEvents))throw Error('Bad calendar schema');
   data=x;mergeCorporate(x.companyEvents);
   if(typeof window.renderUpcomingEvents==='function'){
    var base=window.renderUpcomingEvents;
    window.renderUpcomingEvents=function(){base.apply(this,arguments);renderCorporateMore();if(policyOn)syncMode()};
    window.renderUpcomingEvents();
   }else renderCorporateMore();
   paintPolicy();syncMode();
   var badge=$('#buildBadge');
   if(badge){badge.textContent='v2.17.10 · CPO 3D ELS · 공식 IR/기업 기사 · 2026-10-30';}
   var sub=$('#eventBoxSub');
   if(sub)sub.textContent='기업 IR 5개 + 추가 일정 · 정부 공모/정책 · 공식 출처';
 })
 .catch(function(error){
  data={companyEvents:[],policyEvents:[],undatedWatch:[]};
  policyBox.innerHTML='<p class="cpo-event-meta">정부 일정 데이터를 불러오지 못했습니다. 페이지를 새로고침해 주세요. ('+escapeHtml(error.message)+')</p>';
 });
 syncMode();
}
function mergeCorporate(items){
 var events=window.cpoEvents;
 if(!Array.isArray(events))return;
 items.forEach(function(item){
  if(!item||item.region!=='corporate'||!item.start||!isUrl(item.url))return;
  if(events.some(function(old){return old.region==='corporate'&&old.company===item.company&&old.start===item.start}))return;
  // Keep only fields recognized by the existing renderer.
  events.push({start:item.start,end:item.end||item.start,region:'corporate',
   company:item.company,name:item.name,where:item.where,parts:item.parts||[],url:item.url});
 });
}
function renderCorporateMore(){
 if(!more)return;
 var events=Array.isArray(window.cpoEvents)?window.cpoEvents:[];
 var later=events.filter(function(x){return x.region==='corporate'&&x.start>todaySeoul()})
 .sort(function(a,b){return a.start.localeCompare(b.start)||String(a.company).localeCompare(String(b.company))})
 .slice(5);
 var selected=$('#eventFilter [data-event-filter].active');
 var hidden=policyOn ||(selected&&selected.getAttribute('data-event-filter')!=='corporate')||later.length===0;
 more.hidden=!!hidden;
 if(!later.length)return;
 var currentOpen=more.open;
 more.innerHTML='<summary>이후 기업 IR 일정 '+later.length+'건 더 보기 · 공식 링크</summary><div class="cpo-extra-list">'+
 later.map(function(e){return '<div class="cpo-extra-row"><b>'+escapeHtml(dateLabel(e.start))+' · '+escapeHtml(e.company)+'</b><div>'+escapeHtml(e.name)+'</div>'+sourceLink(e)+'</div>'}).join('')+'</div>';
 more.open=currentOpen;
}
function paintPolicy(){
 if(!policyBox||!data)return;
 var choices=['전체','한국','미국','일본','중국','유럽'];
 var filtered=data.policyEvents.filter(function(item){
  return item.end>=todaySeoul()&&(country==='전체'||item.country===country);
 }).sort(function(a,b){return a.start.localeCompare(b.start)||a.country.localeCompare(b.country)});
 var filters='<div class="cpo-policy-filters" role="group" aria-label="정부 일정 국가 필터">'+
 choices.map(function(value){return '<button type="button" data-policy-country="'+escapeHtml(value)+'" aria-pressed="'+(value===country?'true':'false')+'">'+escapeHtml(value)+'</button>'}).join('')+'</div>';
 var cards=filtered.map(function(item){
  var range=dateLabel(item.start)+(item.end!==item.start?' – '+dateLabel(item.end):'');
  return '<article class="cpo-policy-item"><div class="cpo-policy-head">'+
   '<span class="cpo-policy-date">'+escapeHtml(range)+'</span>'+
   '<span class="cpo-policy-tag">'+escapeHtml(item.country)+'</span>'+
   '<span class="cpo-policy-tag">'+escapeHtml(item.type)+'</span>'+
   '<span class="cpo-policy-tag">'+escapeHtml(item.stage)+'</span></div>'+
   '<strong>'+escapeHtml(item.title)+'</strong><p>'+escapeHtml(item.detail)+'</p>'+
   '<p>'+escapeHtml(item.agency)+' · '+escapeHtml(item.relation)+'</p>'+sourceLink(item)+'</article>';
 }).join('');
 var watch=(data.undatedWatch||[]).filter(function(x){return country==='전체'||x.country===country})
 .map(function(x){return '<div class="cpo-schedule-alert"><b>'+escapeHtml(x.period)+' · '+escapeHtml(x.country)+' · 일자 미정</b> — '+escapeHtml(x.title)+
  '<div>'+escapeHtml(x.detail)+'</div>'+sourceLink(x)+'</div>'}).join('');
 policyBox.innerHTML='<div class="cpo-event-meta"><b>공식 일정 검증: '+escapeHtml(data.checked)+'</b> · 공개 공모·IR 자료 기준 정적 스냅샷 (자동 갱신 아님). '+
 '광소자·반도체·AI 컴퓨팅 인접 사업도 포함하며 CPO 전용 보조금으로 간주하면 안 됩니다. 접수 시간·자격은 원문 우선.</div>'+
 filters+(cards||'<p class="cpo-event-meta">해당 국가에서 날짜가 확정된 향후 CPO·광인터커넥트 관련 공식 일정이 확인되지 않았습니다.</p>')+
 watch;
 policyBox.querySelectorAll('[data-policy-country]').forEach(function(btn){
  btn.addEventListener('click',function(){country=this.getAttribute('data-policy-country');paintPolicy();});
 });
}
function syncMode(){
 if(!list||!policyBox||!policyButton)return;
 policyBox.hidden=!policyOn;
 list.hidden=policyOn;
 if(watch)watch.hidden=policyOn;
 policyButton.classList.toggle('active',policyOn);
 policyButton.setAttribute('aria-pressed',String(policyOn));
 if(policyOn){
  root.querySelectorAll('[data-event-filter]').forEach(function(btn){btn.classList.remove('active');btn.setAttribute('aria-pressed','false')});
  if(more)more.hidden=true;
  if(data&&!policyBox.querySelector('.cpo-policy-filters'))paintPolicy();
 }else renderCorporateMore();
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',integrate,{once:true});
else integrate();
})();