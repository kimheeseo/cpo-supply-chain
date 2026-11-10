/* CPO Supply Chain v2.15.3 · weekly product update */
(function(){
'use strict';
if(window.__cpoOcpProducts20261024)return;window.__cpoOcpProducts20261024=true;
var esc=function(v){return String(v==null?'':v).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]})};
var iwcsRows=[{"category":"Connector","kind":"MMC · Blind-mate","company":"US Conec","name":"MMC 기반 고밀도 Blind-Mate 광커넥터","summary":"2026 IWCS 논문. Mid-board 광연결을 위한 독립 floating 구조, 반복 장착 오차 흡수, GR-1435 환경·기계 시험과 IL/RL 모니터링을 제시합니다.","implication":"CPO/NPO 광엔진 전면부·중간기판 접속의 정렬 공차 및 유지보수 신뢰성 평가에 유용합니다. 논문 공개는 양산 인증이 아닙니다.","url":"https://www.usconec.com/media/aa3dckka/a-high-density-optical-blind-mate-connector-system-for-data-center-optical-networks.pdf","label":"기술논문 PDF"},{"category":"Connector","kind":"APC-MPO · Ferrule","company":"US Conec","name":"APC-MPO 이종 재질 페룰의 접속손실 연구","summary":"서로 다른 MT 페룰 재질, 가이드홀 직경 차이 0.45 µm인 12심 APC-MPO 샘플에서 접속손실 0.25 dB 미만(97% 기준)을 실험·모델링으로 보고했습니다.","implication":"제조사·재질 간 호환성 및 ferrule 공차 설계의 근거로 참고할 수 있습니다. CPO 전용 시험은 아닙니다.","url":"https://www.usconec.com/media/srhajpse/low-loss_intermateability_of_apc-mpo_connectors.pdf","label":"기술논문 PDF"},{"category":"Fiber","kind":"MCF + SCF","company":"STL (Sterlite Technologies)","name":"MCF·SCF 복합 Unitube Armored Cable 설계·성능","summary":"IWCS 11월 4일 Session 10 논문(초록 1006_1496_000097): MCF와 단일 코어 광섬유를 결합한 복합 유니튜브 외장케이블 설계·성능을 연구합니다.","implication":"MCF의 실제 케이블화, 코어 매핑 및 기계적 설계 검증을 위한 비교 자료입니다. 정량 결과는 원문 확인이 필요합니다.","url":"https://stl.tech/iwcs-2026/","label":"STL 공식 발표·세션"},{"category":"Fiber","kind":"High-density Interconnect","company":"STL (Sterlite Technologies)","name":"AI 데이터센터용 고밀도 Interconnect Plenum Cable","summary":"IWCS 11월 4일 Session 6 논문(초록 1006_1496_000096): 하이퍼스케일 데이터센터용 고심수 인터커넥트 플레넘 케이블 설계를 발표했습니다.","implication":"밀집 배선, 외경, 굴곡·시공성, 화재 성능을 비교할 때 유용하며 CPO 전용 케이블 출하 근거는 아닙니다.","url":"https://stl.tech/iwcs-2026/","label":"STL 공식 발표·세션"},{"category":"Test","kind":"HCF · MCF · PMF","company":"Arden Photonics","name":"HCF·MCF·PM 광섬유의 복합 특성 측정","summary":"IWCS 11월 3일 Supplier Spotlight 공식 일정에 포함된 'Characterization of Complex Fiber Optics (Hollow Core, Multicore, PM)' 세션입니다.","implication":"HCF/MCF/PMF 측정법·시험환경을 추적할 근거로 활용하되, 측정 성능 수치는 별도 원문 자료가 필요합니다.","url":"https://iwcs.org/events/cable-and-connectivity-industry-forum/supplier-exhibition/","label":"IWCS 공식 세션"},{"category":"Connector","kind":"TMT · MMC Assembly","company":"Fiber Optic Center","name":"MMC용 TMT Ferrule 조립 장비·치구","summary":"IWCS 11월 2~3일 부스 기술상담에서 MMC용 TMT 페룰의 형상 차이 때문에 MPO용 기존 조립 장비에 전용 치구·툴링이 필요함을 설명했습니다.","implication":"CPO 커넥터의 시제품→양산 전환 시 조립장비 호환성, 치구 투자 및 공정 수율 검토가 필요합니다.","url":"https://focenter.com/iwcs-booth-schedule-and-discussions","label":"업체 공식 IWCS 안내"}];

/* 75th IWCS forum, Orlando, Nov 1-4 2026. Supplier talks and paper abstracts
   must not be interpreted as verified volume shipments or CPO-specific revenue. */
function mountIwcs(before){
 if(document.getElementById('iwcs2026FeaturedPanel'))return;
 var sty=document.createElement('style');sty.id='iwcs2026FeaturedStyles';
 sty.textContent=
 '#iwcs2026FeaturedPanel{box-sizing:border-box;margin:18px auto 12px;padding:19px;max-width:1280px;border:1px solid #a9d3d1;border-radius:18px;background:linear-gradient(135deg,#effcf9,#f7fafc);color:#19364a}' +
 '#iwcs2026FeaturedPanel .iwcs-head{display:flex;align-items:flex-start;justify-content:space-between;flex-wrap:wrap;gap:10px}' +
 '#iwcs2026FeaturedPanel h2{font-size:21px;margin:6px 0}' +
 '#iwcs2026FeaturedPanel p{font-size:13px;line-height:1.6;color:#465e72;margin:6px 0}' +
 '#iwcs2026FeaturedPanel .iwcs-date{font-size:11px;color:#087969;font-weight:900;letter-spacing:.035em}' +
 '#iwcs2026FeaturedPanel .iwcs-filters{display:flex;gap:7px;flex-wrap:wrap;margin:13px 0}' +
 '#iwcs2026FeaturedPanel button{border:1px solid #a8c7cf;border-radius:999px;padding:7px 13px;background:#fff;color:#28485b;font-weight:750;cursor:pointer}' +
 '#iwcs2026FeaturedPanel button[aria-pressed=true]{background:#0d716e;border-color:#0d716e;color:#fff}' +
 '#iwcs2026FeaturedPanel .iwcs-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(min(100%,285px),1fr));gap:11px}' +
 '#iwcs2026FeaturedPanel .iwcs-card{padding:14px;border-radius:12px;border:1px solid #d4e5e8;background:#fff;min-width:0}' +
 '#iwcs2026FeaturedPanel .iwcs-card[hidden]{display:none}' +
 '#iwcs2026FeaturedPanel .iwcs-card h3{font-size:15px;line-height:1.4;margin:7px 0;color:#153e55}' +
 '#iwcs2026FeaturedPanel .iwcs-meta{font-size:11px;font-weight:850;color:#0a756f}' +
 '#iwcs2026FeaturedPanel .iwcs-source{display:inline-block;margin-top:8px;color:#0865a0;font-weight:800;text-decoration:underline;text-underline-offset:2px;font-size:12px}' +
 '#iwcs2026FeaturedPanel .iwcs-note{border-top:1px solid #cee2e5;margin-top:12px;padding-top:10px;font-size:11px;color:#556c7d;line-height:1.6}' +
 '#ocp2026ProductPanel{padding:12px 17px!important;margin:10px auto 24px!important;background:var(--card,#fff)!important}' +
 '#ocp2026ProductPanel .ocp-archive-toggle{display:flex;align-items:center;justify-content:space-between;gap:10px;width:100%;border:1px solid #c1d1e2;border-radius:12px;background:#f4f8fc;color:#164e79;font-weight:850;font-size:14px;padding:12px 14px;cursor:pointer;text-align:left}' +
 '#ocp2026ProductPanel .ocp-archive-body{padding-top:12px}' +
 '#ocp2026ProductPanel .ocp-archive-body[hidden]{display:none}' +
 'html[data-theme=dark] #iwcs2026FeaturedPanel,body.dark #iwcs2026FeaturedPanel{background:#16313e;color:#edf9fd;border-color:#3f7777}' +
 'html[data-theme=dark] #iwcs2026FeaturedPanel .iwcs-card,body.dark #iwcs2026FeaturedPanel .iwcs-card{background:#1f3a4a;border-color:#3c626d}' +
 'html[data-theme=dark] #iwcs2026FeaturedPanel .iwcs-card h3,body.dark #iwcs2026FeaturedPanel .iwcs-card h3{color:#e9f8ff}' +
 'html[data-theme=dark] #iwcs2026FeaturedPanel p,body.dark #iwcs2026FeaturedPanel p{color:#c2d8e5}' +
 '@media(max-width:700px){#iwcs2026FeaturedPanel{padding:12px}#iwcs2026FeaturedPanel h2{font-size:18px}}';
 document.head.appendChild(sty);
 var panel=document.createElement('section');panel.id='iwcs2026FeaturedPanel';panel.setAttribute('aria-label','IWCS 2026 최신 광섬유·커넥터 기술');
 panel.innerHTML='<div class="iwcs-head"><div><div class="iwcs-date">LATEST CONFERENCE · 2026.11.01–11.04</div><h2>IWCS 2026 · 광섬유·커넥터 기술 업데이트</h2><p>미국 올랜도 · 75주년 IWCS. 공식 학회 프로그램과 업체 기술논문·발표 자료 기준으로 정리했습니다.</p></div><a class="iwcs-source" href="https://iwcs.org/events/cable-and-connectivity-industry-forum/technical-symposium/" target="_blank" rel="noopener noreferrer">IWCS 공식 프로그램 ↗</a></div>'+
 '<div class="iwcs-filters" role="group" aria-label="IWCS 기술분야 필터"><button type="button" data-iwcs-filter="all" aria-pressed="true">전체 '+iwcsRows.length+'</button><button type="button" data-iwcs-filter="Connector" aria-pressed="false">커넥터·접속</button><button type="button" data-iwcs-filter="Fiber" aria-pressed="false">광섬유·케이블</button><button type="button" data-iwcs-filter="Test" aria-pressed="false">측정·검증</button></div>'+
 '<div class="iwcs-cards">'+iwcsRows.map(function(x){return '<article class="iwcs-card" data-iwcs-category="'+esc(x.category)+'"><div class="iwcs-meta">'+esc(x.kind)+' · '+esc(x.company)+'</div><h3>'+esc(x.name)+'</h3><p>'+esc(x.summary)+'</p><p><b>시사점:</b> '+esc(x.implication)+'</p><a class="iwcs-source" href="'+esc(x.url)+'" target="_blank" rel="noopener noreferrer">'+esc(x.label)+' ↗</a></article>'}).join('')+'</div>'+
 '<div class="iwcs-note">자료 구분: IWCS 학회 발표·기술논문·부스 발표. 각 기업의 공개 초록과 안내를 요약한 것으로, 판매 중·CPO 전용 양산·규격 인증을 의미하지 않습니다. 옛 OCP 2026 발표는 아래 버튼으로 확인할 수 있습니다.</div>';
 before.parentNode.insertBefore(panel,before);
 panel.querySelectorAll('[data-iwcs-filter]').forEach(function(b){
  b.addEventListener('click',function(){
   var mode=b.getAttribute('data-iwcs-filter');
   panel.querySelectorAll('[data-iwcs-filter]').forEach(function(q){q.setAttribute('aria-pressed',String(q===b))});
   panel.querySelectorAll('.iwcs-card').forEach(function(c){c.hidden=mode!=='all'&&c.getAttribute('data-iwcs-category')!==mode});
  });
 });
}
function mount(items){
 document.querySelectorAll('.fau2d-dash-cleanup').forEach(function(x){x.remove()});
 if(document.getElementById('ocp2026ProductPanel'))return;
 var style=document.createElement('style');
 style.textContent='#ocp2026ProductPanel{margin:24px auto;padding:22px;border:1px solid #bfd0e1;border-radius:18px;background:linear-gradient(135deg,#f7fbff,#edf5fc);max-width:1280px;color:#172a3f}#ocp2026ProductPanel .ocp-head{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;flex-wrap:wrap}#ocp2026ProductPanel h2{margin:0;font-size:22px}#ocp2026ProductPanel p{color:#526b83}#ocp2026ProductPanel .ocp-filters{display:flex;gap:7px;flex-wrap:wrap;margin:12px 0}#ocp2026ProductPanel button{border:1px solid #b4c9de;background:#fff;color:#294b68;border-radius:999px;padding:7px 12px;font-weight:750;cursor:pointer}#ocp2026ProductPanel button[aria-pressed=true]{background:#174d7d;color:white;border-color:#174d7d}#ocp2026ProductPanel .ocp-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(245px,1fr));gap:12px}#ocp2026ProductPanel .ocp-card{background:white;border:1px solid #d5e2ee;border-radius:13px;padding:15px;box-shadow:0 4px 12px #17395c0b}#ocp2026ProductPanel .ocp-category{color:#17649b;font-size:11px;font-weight:850;text-transform:uppercase;letter-spacing:.04em}#ocp2026ProductPanel .ocp-card h3{font-size:16px;line-height:1.35;margin:6px 0}#ocp2026ProductPanel .ocp-company{font-size:12px;color:#526b83;font-weight:750}#ocp2026ProductPanel .ocp-status{display:inline-block;margin:8px 0;padding:3px 8px;border-radius:999px;background:#fff4d9;color:#735418;font-size:11px;font-weight:800}#ocp2026ProductPanel .ocp-card p{font-size:13px;line-height:1.55;margin:6px 0}#ocp2026ProductPanel .ocp-link{display:inline-block;margin-top:8px;color:#075d9c;font-weight:800;text-decoration:none}#ocp2026ProductPanel .ocp-note{padding:10px 12px;background:#fff8e8;border:1px solid #ead8a5;border-radius:10px;font-size:12px;margin-top:14px}';
 document.head.appendChild(style);
 var section=document.createElement('section');section.id='ocp2026ProductPanel';
 section.innerHTML='<div class="ocp-head"><div><div style="font-size:11px;font-weight:900;letter-spacing:.12em;color:#13806b">WEEKLY PRODUCT UPDATE · 2026.10.24</div><h2>OCP 2026 CPO · 광 인터커넥트 제품/기술</h2><p>OCP Summit 발표와 이번 주 후속 제품·기술 소식을 출처와 함께 정리했습니다.</p></div><strong style="color:#45627e;font-size:13px">OCP Global Summit · San Jose</strong></div><div class="ocp-filters" role="group" aria-label="제품 분류 필터"><button data-filter="all" aria-pressed="true">전체</button><button data-filter="CPO" aria-pressed="false">CPO·DSP</button><button data-filter="Rack-scale" aria-pressed="false">랙 광연결</button></div><div class="ocp-cards">'+items.map(function(x){return '<article class="ocp-card" data-category="'+esc(x.category.indexOf('Rack-scale')>=0?'Rack-scale':'CPO')+'"><div class="ocp-category">'+esc(x.category)+'</div><h3>'+esc(x.name)+'</h3><div class="ocp-company">'+esc(x.company)+'</div><span class="ocp-status">'+esc(x.status)+'</span><p>'+esc(x.summary)+'</p><p><b>확인 상태:</b> '+esc(x.availability)+'</p><a class="ocp-link" href="'+esc(x.sourceUrl)+'" target="_blank" rel="noopener noreferrer">'+esc(x.sourceName)+' ↗</a></article>'}).join('')+'</div><div class="ocp-note">OCP 발표·전시·프로토타입 시연 사실을 제품 양산·구매 가능·호환성 검증 완료로 해석하지 않습니다. 실제 BOM 반영 전에는 제품번호, 포트/광규격, 시스템 호환성, 공급 상태를 확인하세요.</div>';
 var ocpMarkup=section.innerHTML;
 section.innerHTML='<button type="button" class="ocp-archive-toggle" aria-expanded="false" aria-controls="ocp2026ArchiveBody">지난 OCP 2026 자료 보기 <span aria-hidden="true">▾</span></button><div id="ocp2026ArchiveBody" class="ocp-archive-body" hidden>'+ocpMarkup+'</div>';
 var ocpArchiveButton=section.querySelector('.ocp-archive-toggle');
 ocpArchiveButton.addEventListener('click',function(){
  var body=section.querySelector('#ocp2026ArchiveBody');
  var opening=body.hidden;
  body.hidden=!opening;
  ocpArchiveButton.setAttribute('aria-expanded',String(opening));
  ocpArchiveButton.innerHTML=opening?'지난 OCP 2026 자료 접기 <span aria-hidden="true">▴</span>':'지난 OCP 2026 자료 보기 <span aria-hidden="true">▾</span>';
 });
 var anchor=document.getElementById('architecture');
 var event=document.getElementById('eventBoxTitle');
 if(anchor&&anchor.parentNode)anchor.parentNode.insertBefore(section,anchor.nextSibling);
 else if(event&&event.parentNode)event.parentNode.insertBefore(section,event);
 else document.body.appendChild(section);
 mountIwcs(section);
 section.querySelectorAll('[data-filter]').forEach(function(b){b.addEventListener('click',function(){var f=b.dataset.filter;section.querySelectorAll('[data-filter]').forEach(function(q){q.setAttribute('aria-pressed',String(q===b))});section.querySelectorAll('.ocp-card').forEach(function(card){card.hidden=f!=='all'&&card.dataset.category!==f})})});
 /* Header badge date/version is managed by the latest vendor/news updater. */
}
fetch('./data/ocp_product_updates_20261024.json',{cache:'no-store'}).then(function(r){if(!r.ok)throw Error(r.status);return r.json()}).then(function(d){mount(d.products||[])}).catch(function(){mount([])});
})();