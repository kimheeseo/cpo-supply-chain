/* CPO Supply Chain v2.17.4 · collapsible, readable market-signal brief for the event area. */
(function(){
  'use strict';
  if(window.__cpoWeeklyBrief20261017)return;
  window.__cpoWeeklyBrief20261017=true;
  var trends=[
    {date:'2026.10.23',stage:'부품 양산 공시',stageClass:'platform',title:'TFC, CPO 지원 FAU·ELS 안정적 양산·납품 공시',summary:'CPO 지원 부품의 안정적 양산·납품을 확인했습니다. NPO 지원 부품은 샘플 단계라고 별도 설명했습니다.',impact:'FAU · ELS · Fiber attach · Precision coupling',production:'FAU·ELS 부품 양산/납품 공시. 완제품 CPO 양산과 구분',insight:'정렬 수율·광결합 손실·부품별 양산 성숙도를 함께 비교해야 합니다.',lenses:['commercial','technology','supply'],source:'TFC 기업 공시',url:'https://stock.stockstar.com/notice/SN2026102300022661.shtml'},
    {date:'2026.10.23',stage:'수요·주문 공시',stageClass:'ecosystem',title:'InnoLight, 2027년 주문 가시성 및 1.6T 수요 전망 공개',summary:'회사는 해외 고객 주문이 2027년까지 확보됐다고 공시했습니다. NPO/XPO는 향후 수요가 예상되는 기술로 언급했습니다.',impact:'1.6T Optical Module · NPO/XPO · DSP · Fiber',production:'광모듈 주문 가시성. NPO/XPO 양산 출하 증거는 별도 확인',insight:'플러거블 광모듈 수요와 NPO/XPO 상용화 단계를 혼동하지 않아야 합니다.',lenses:['commercial','technology','supply'],source:'SZSE 공식 공시',url:'https://disc.static.szse.cn/download/disc/disk03/finalpage/2026-10-23/164b4f4b-4300-4847-b351-815ae6c9ad5c.pdf'},
    {date:'2026.10.21',stage:'개발 투자',stageClass:'demo',title:'Photon Bridge, 다파장 ELS 개발에 €10M 조달',summary:'다중 저출력 InP 레이저 기반의 파장당 최대 40mW 목표. 첫 샘플 2027년, 양산 준비 2028년 계획.',impact:'Multi-wavelength Laser · ELS · InP foundry',production:'개발·고객검증 단계. 현재 대량 출하 근거 없음',insight:'CPO용 레이저 경쟁은 광출력뿐 아니라 제조 수율·파운드리 다변화로 확대됩니다.',lenses:['technology','supply'],source:'Photon Bridge 공식',url:'https://www.photonbridge.com/news/photon-bridge-raises-%E2%82%AC10m-to-tackle-ai%E2%80%99s-emerging-laser-bottleneck'}
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
    section.innerHTML='<div class="market-brief-head"><div><b>이번 주 CPO 시장 판단</b><span>발표를 상용화·기술·공급망 신호로 분리해 읽습니다.</span></div><div class="market-brief-actions"><time datetime="2026-10-26">2026.10.26 기준</time><button type="button" class="market-brief-toggle" aria-expanded="true" aria-controls="marketBriefBody">시장 판단 접기 <span aria-hidden="true">⌃</span></button></div></div>'+ 
      '<div class="market-brief-body" id="marketBriefBody"><div class="market-summary" aria-label="시장 신호 요약"><div><strong>3</strong><span>공식 신호</span></div><div><strong>1</strong><span>공개 양산 근거</span></div><div><strong>3</strong><span>영향 부품군</span></div></div>'+ 
      '<p class="market-scope">※ 고객·물량·출하 근거가 공개된 경우에만 ‘양산’으로 표시합니다. TFC의 양산 공시는 FAU·ELS 부품에 한정되며 CPO 스위치 시스템 양산을 뜻하지 않습니다.</p>'+ 
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
