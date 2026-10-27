/* CPO Supply Chain v2.17.5 · collapsible, readable market-signal brief for the event area. */
(function(){
  'use strict';
  if(window.__cpoWeeklyBrief20261017)return;
  window.__cpoWeeklyBrief20261017=true;
  var trends=[{"date":"2026.10.27","stage":"실적 확인","stageClass":"platform","title":"Corning, 광통신 매출 +44% · Gen AI 제품 매출 2배 이상","summary":"Q3 Optical Communications $2.379B, Enterprise Networks +84%. CPO 단독 매출은 미공개.","impact":"Optical Fiber · Cable · High-density Connector","production":"광통신 사업 실적 확인. CPO 전용 매출은 별도 미공개","insight":"광섬유·고밀도 커넥터 수요 증가를 실적에서 확인.","lenses":["commercial","supply"],"source":"Corning IR","url":"https://investor.corning.com/news-and-events/news/news-details/2026/Corning-Delivers-Outstanding-Third-Quarter-Results1/default.aspx"},{"date":"2026.10.21","stage":"증설 계획","stageClass":"ecosystem","title":"NVIDIA·SPIL, CPO 광엔진 제조능력 15배 확대 목표","summary":"2027년 중반 15배, 2028년 말 추가 2배 목표. 생산 실적이 아닌 계획.","impact":"Optical Engine · FAU · Advanced Packaging","production":"증설 목표 발표. 실제 양산·출하 실적 미공개","insight":"광엔진 패키징·광결합 수율과 생산능력 확대를 분리 검증.","lenses":["technology","supply"],"source":"NVIDIA IR","url":"https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Supply-Chain-Partners-Expand-Capacity-to-Accelerate-AI-Infrastructure-Buildout/default.aspx"},{"date":"2026.10.12","stage":"폼팩터 제안","stageClass":"demo","title":"NVIDIA·Cisco, 400G/lane·12.8T USFP 발표","summary":"USFP는 CPO와 구분되는 초고밀도 플러거블 광모듈 폼팩터.","impact":"Pluggable Optics · Connector · Switch","production":"폼팩터 발표 단계. 양산 출하 미확인","insight":"CPO·NPO·USFP의 광섬유 수량·전력·정비성을 비교.","lenses":["technology","supply"],"source":"NVIDIA IR","url":"https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-and-Cisco-Introduce-New-Pluggable-Optics-Form-Factor-to-Scale-AI-Factories/default.aspx"}];
  var labels={all:'전체',commercial:'상용화',technology:'기술/제품',supply:'공급망/광섬유'};
  function escapeHtml(value){return String(value||'').replace(/[&<>"']/g,function(ch){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]})}
  function signalCard(item){
    return '<a class="market-signal-card" data-market-lenses="'+item.lenses.join(' ')+'" href="'+item.url+'" target="_blank" rel="noopener">'+
      '<span class="market-signal-top"><em class="market-stage '+item.stageClass+'">'+item.stage+'</em><time datetime="'+item.date.replace(/\./g,'-')+'">'+item.date+'</time></span>'+ 
      '<b>'+escapeHtml(item.title)+'</b><span class="market-signal-summary">'+escapeHtml(item.summary)+'</span>'+
      '<span class="market-signal-meta"><strong>영향 부품</strong>'+escapeHtml(item.impact)+'</span>'+
      '<span class="market-signal-meta market-signal-check"><strong>양산 판단</strong>'+escapeHtml(item.production)+'</span>'+
      '<span class="market-signal-insight"><strong>시사점</strong>'+escapeHtml(item.insight)+'</span><span class="market-signal-source">'+item.source+' ↗</span></a>';
  }
  function build(){
    if(document.getElementById('weeklyTrendBrief'))return;
    var eventFilter=document.getElementById('eventFilter');if(!eventFilter)return;
    var section=document.createElement('section');section.className='market-brief';section.id='weeklyTrendBrief';section.setAttribute('aria-label','이번 주 CPO 시장 판단');
    var controls=Object.keys(labels).map(function(key){return '<button type="button" class="market-lens-btn" data-market-lens="'+key+'" aria-pressed="'+(key==='all')+'">'+labels[key]+'</button>'}).join('');
    section.innerHTML='<div class="market-brief-head"><div><b>이번 주 CPO 시장 판단</b><span>발표를 상용화·기술·공급망 신호로 분리해 읽습니다.</span></div><div class="market-brief-actions"><time datetime="2026-10-28">2026.10.28 기준</time><button type="button" class="market-brief-toggle" aria-expanded="true" aria-controls="marketBriefBody">시장 판단 접기 <span aria-hidden="true">⌃</span></button></div></div>'+ 
      '<div class="market-brief-body" id="marketBriefBody"><div class="market-summary" aria-label="시장 신호 요약"><div><strong>3</strong><span>공식 신호</span></div><div><strong>1</strong><span>확인된 실적</span></div><div><strong>3</strong><span>영향 부품군</span></div></div>'+ 
      '<p class="market-scope">※ Corning 실적과 NVIDIA·SPIL의 미래 증설 목표를 구분합니다. 광엔진 15배는 2027년 중반 목표치입니다.</p>'+ 
      '<div class="market-lens" role="group" aria-label="시장 판단 관점">'+controls+'</div><div class="market-signal-list">'+trends.map(signalCard).join('')+'</div></div>';
    eventFilter.parentNode.insertBefore(section,eventFilter);
    var toggle=section.querySelector('.market-brief-toggle');
    var body=section.querySelector('.market-brief-body');
    function setCollapsed(collapsed,save){
      section.classList.toggle('is-collapsed',collapsed);
      body.hidden=collapsed;
      toggle.setAttribute('aria-expanded',String(!collapsed));
      toggle.innerHTML=collapsed?'시장 판단 보기 <span aria-hidden="true">⌄</span>':'시장 판단 접기 <span aria-hidden="true">⌃</span>';
      if(save){try{localStorage.setItem('cpoMarketBriefCollapsed',collapsed?'1':'0');}catch(_){}}
    }
    var saved='';try{saved=localStorage.getItem('cpoMarketBriefCollapsed')||'';}catch(_){}
    setCollapsed(saved==='1',false);
    toggle.addEventListener('click',function(){setCollapsed(!section.classList.contains('is-collapsed'),true);});
    var buttons=Array.prototype.slice.call(section.querySelectorAll('.market-lens-btn')),cards=Array.prototype.slice.call(section.querySelectorAll('.market-signal-card'));
    buttons.forEach(function(button){button.addEventListener('click',function(){var lens=button.dataset.marketLens;buttons.forEach(function(btn){btn.setAttribute('aria-pressed',String(btn===button))});cards.forEach(function(card){card.hidden=lens!=='all'&&card.dataset.marketLenses.split(' ').indexOf(lens)<0})})});
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build,{once:true});else build();
})();
