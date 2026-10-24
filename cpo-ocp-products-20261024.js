/* CPO Supply Chain v2.15.2 · weekly product update */
(function(){
'use strict';
if(window.__cpoOcpProducts20261024)return;window.__cpoOcpProducts20261024=true;
var esc=function(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
function removeDecorativeDashes(){
 var stage=document.querySelector('.fau2d-stage');
 if(!stage){
  if(!window.__cpoDashObserver){
   window.__cpoDashObserver=new MutationObserver(function(){
    var ready=document.querySelector('.fau2d-stage');
    if(ready){window.__cpoDashObserver.disconnect();window.__cpoDashObserver=null;removeDecorativeDashes()}
   });
   window.__cpoDashObserver.observe(document.documentElement,{childList:true,subtree:true});
  }
  return;
 }
 if(stage.querySelector('.fau2d-dash-cleanup'))return;
 var svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 svg.setAttribute('class','fau2d-dash-cleanup');svg.setAttribute('viewBox','0 0 1000 422');svg.setAttribute('preserveAspectRatio','none');svg.setAttribute('aria-hidden','true');
 svg.style.cssText='position:absolute;inset:0;width:100%;height:100%;z-index:3;pointer-events:none';
 ['M110 178 C220 245 365 333 500 410','M568 188 C526 235 460 324 398 410'].forEach(function(d){var p=document.createElementNS('http://www.w3.org/2000/svg','path');p.setAttribute('d',d);p.setAttribute('fill','none');p.setAttribute('stroke','#fff');p.setAttribute('stroke-width','14');p.setAttribute('stroke-linecap','round');svg.appendChild(p)});
 stage.appendChild(svg);
}
function mount(items){
 removeDecorativeDashes();
 if(document.getElementById('ocp2026ProductPanel'))return;
 var style=document.createElement('style');
 style.textContent='#ocp2026ProductPanel{margin:24px auto;padding:22px;border:1px solid #bfd0e1;border-radius:18px;background:linear-gradient(135deg,#f7fbff,#edf5fc);max-width:1280px;color:#172a3f}#ocp2026ProductPanel .ocp-head{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;flex-wrap:wrap}#ocp2026ProductPanel h2{margin:0;font-size:22px}#ocp2026ProductPanel p{color:#526b83}#ocp2026ProductPanel .ocp-filters{display:flex;gap:7px;flex-wrap:wrap;margin:12px 0}#ocp2026ProductPanel button{border:1px solid #b4c9de;background:#fff;color:#294b68;border-radius:999px;padding:7px 12px;font-weight:750;cursor:pointer}#ocp2026ProductPanel button[aria-pressed=true]{background:#174d7d;color:white;border-color:#174d7d}#ocp2026ProductPanel .ocp-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(245px,1fr));gap:12px}#ocp2026ProductPanel .ocp-card{background:white;border:1px solid #d5e2ee;border-radius:13px;padding:15px;box-shadow:0 4px 12px #17395c0b}#ocp2026ProductPanel .ocp-category{color:#17649b;font-size:11px;font-weight:850;text-transform:uppercase;letter-spacing:.04em}#ocp2026ProductPanel .ocp-card h3{font-size:16px;line-height:1.35;margin:6px 0}#ocp2026ProductPanel .ocp-company{font-size:12px;color:#526b83;font-weight:750}#ocp2026ProductPanel .ocp-status{display:inline-block;margin:8px 0;padding:3px 8px;border-radius:999px;background:#fff4d9;color:#735418;font-size:11px;font-weight:800}#ocp2026ProductPanel .ocp-card p{font-size:13px;line-height:1.55;margin:6px 0}#ocp2026ProductPanel .ocp-link{display:inline-block;margin-top:8px;color:#075d9c;font-weight:800;text-decoration:none}#ocp2026ProductPanel .ocp-note{padding:10px 12px;background:#fff8e8;border:1px solid #ead8a5;border-radius:10px;font-size:12px;margin-top:14px}';
 document.head.appendChild(style);
 var section=document.createElement('section');section.id='ocp2026ProductPanel';
 section.innerHTML='<div class="ocp-head"><div><div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:#13806b">WEEKLY PRODUCT UPDATE · 2026.10.24</div><h2>OCP 2026 CPO · 광 인터커넥트 제품/기술</h2><p>OCP Summit 발표와 이번 주 후속 제품·기술 소식을 출처와 함께 정리했습니다.</p></div><strong style="color:#45627e;font-size:13px">OCP Global Summit · San Jose</strong></div><div class="ocp-filters" role="group" aria-label="제품 분류 필터"><button data-filter="all" aria-pressed="true">전체</button><button data-filter="CPO" aria-pressed="false">CPO·DSP</button><button data-filter="Rack-scale" aria-pressed="false">랙 광연결</button></div><div class="ocp-cards">'+items.map(function(x){return '<article class="ocp-card" data-category="'+esc(x.category.indexOf('Rack-scale')>=0?'Rack-scale':'CPO')+'"><div class="ocp-category">'+esc(x.category)+'</div><h3>'+esc(x.name)+'</h3><div class="ocp-company">'+esc(x.company)+'</div><span class="ocp-status">'+esc(x.status)+'</span><p>'+esc(x.summary)+'</p><p><b>확인 상태:</b> '+esc(x.availability)+'</p><a class="ocp-link" href="'+esc(x.sourceUrl)+'" target="_blank" rel="noopener noreferrer">'+esc(x.sourceName)+' ↗</a></article>'}).join('')+'</div><div class="ocp-note">OCP 발표·전시·프로토타입 시연 사실을 제품 양산·구매 가능·호환성 검증 완료로 해석하지 않습니다. 실제 BOM 반영 전에는 제품번호, 포트/광규격, 시스템 호환성, 공급 상태를 확인하세요.</div>';
 var anchor=document.getElementById('architecture');
 var event=document.getElementById('eventBoxTitle');
 if(anchor&&anchor.parentNode)anchor.parentNode.insertBefore(section,anchor.nextSibling);
 else if(event&&event.parentNode)event.parentNode.insertBefore(section,event);
 else document.body.appendChild(section);
 section.querySelectorAll('[data-filter]').forEach(function(b){b.addEventListener('click',function(){var f=b.dataset.filter;section.querySelectorAll('[data-filter]').forEach(function(q){q.setAttribute('aria-pressed',String(q===b))});section.querySelectorAll('.ocp-card').forEach(function(card){card.hidden=f!=='all'&&card.dataset.category!==f})})});
 var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.15.2 · 접기형 시장 판단 · CPO 광경로 · 국내 채널 · 주간 제품 업데이트 · 2026-10-24';
}
fetch('./data/ocp_product_updates_20261024.json',{cache:'no-store'}).then(function(r){if(!r.ok)throw Error(r.status);return r.json()}).then(function(d){mount(d.products||[])}).catch(function(){});
})();