/* CPO Supply Chain v2.14.3 · collapsible, readable market-signal brief for the event area. */
(function(){
  'use strict';
  if(window.__cpoWeeklyBrief20261017)return;
  window.__cpoWeeklyBrief20261017=true;
  var trends=[
    {date:'2026.10.13',stage:'통합 시스템 데모',stageClass:'demo',title:'Wiwynn·Ayar·GUC, CPO 통합 시스템 라이브 시연',summary:'ASIC·광엔진·외부광원과 상태 텔레메트리를 한 시스템으로 검증했습니다.',impact:'ELS · PIC · ASIC · 패키징/냉각',production:'공개 발표에서 고객·출하량은 미공개',insight:'CPO 검증 범위가 광소자 단품에서 패키징·냉각·운영으로 확대되고 있습니다.',lenses:['commercial','technology','supply'],source:'Wiwynn 공식',url:'https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026'},
    {date:'2026.09.21',stage:'통합 플랫폼 공개',stageClass:'platform',title:'Coherent, PhotonLink 통합 광학 플랫폼 공개',summary:'레이저·실리콘포토닉스·광섬유·검출기와 조립·시험 역량을 CPO/NPO용으로 통합했습니다.',impact:'Laser · SiPh · Fiber attach · Assembly/Test',production:'특정 CPO 고객·양산 물량은 확인 필요',insight:'부품별 성능뿐 아니라 end-to-end 조립·시험 공급능력이 경쟁축이 됩니다.',lenses:['commercial','technology','supply'],source:'Coherent 공식',url:'https://ir.coherent.com/news-releases/news-release-details/coherent-launches-photonlinktm-integrated-optics-platform-ai'},
    {date:'2026.09.21',stage:'제품·생태계 발표',stageClass:'ecosystem',title:'Lightera, 2세대 Hollow-Core Fiber 생태계 발표',summary:'지연·용량 민감 AI/DCI 구간을 겨냥한 HCF와 연계 생태계를 발표했습니다.',impact:'HCF · DCI cable · AI cluster interconnect',production:'CPO 직접 적용·국내 조달 가능성은 별도 확인 필요',insight:'CPO 패키지 밖 연결 구간에서도 저지연 광전송 선택지가 확대됩니다.',lenses:['technology','supply'],source:'Lightera 공식',url:'https://lightera.com/n/lightera-launches-second-generation-antiresonant-hollow-core-fiber-and-integrated-hcf-ecosystem/'}
  ];
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
    section.innerHTML='<div class="market-brief-head"><div><b>이번 주 CPO 시장 판단</b><span>발표를 상용화·기술·공급망 신호로 분리해 읽습니다.</span></div><div class="market-brief-actions"><time datetime="2026-10-17">2026.10.17 기준</time><button type="button" class="market-brief-toggle" aria-expanded="true" aria-controls="marketBriefBody">시장 판단 접기 <span aria-hidden="true">⌃</span></button></div></div>'+ 
      '<div class="market-brief-body" id="marketBriefBody"><div class="market-summary" aria-label="시장 신호 요약"><div><strong>3</strong><span>공식 신호</span></div><div><strong>0</strong><span>공개 양산 근거</span></div><div><strong>3</strong><span>영향 부품군</span></div></div>'+ 
      '<p class="market-scope">※ 고객·물량·출하 근거가 공개된 경우에만 ‘양산’으로 표시합니다. 현재 3건은 데모·플랫폼·생태계 발표 단계입니다.</p>'+ 
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
