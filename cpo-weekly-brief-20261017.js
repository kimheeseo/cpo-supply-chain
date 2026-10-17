/* CPO Supply Chain v2.14.1 · top-of-schedule weekly technology brief. */
(function(){
  'use strict';
  if(window.__cpoWeeklyBrief20261017)return;
  window.__cpoWeeklyBrief20261017=true;

  var trends=[
    {date:'2026.10.13',type:'시스템',title:'Wiwynn·Ayar·GUC, CPO 통합 시스템 라이브 시연',summary:'ASIC·광엔진·외부광원과 상태 텔레메트리를 한 시스템으로 검증했습니다.',insight:'시사점 · CPO 경쟁이 광소자 단품에서 패키징·냉각·운영 검증으로 넓어지고 있습니다.',source:'Wiwynn 공식',url:'https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026'},
    {date:'2026.09.21',type:'광엔진',title:'Coherent, PhotonLink 통합 광학 플랫폼 공개',summary:'레이저·실리콘포토닉스·광섬유·검출기와 조립·시험 역량을 CPO/NPO용으로 통합했습니다.',insight:'시사점 · 부품별 최적화보다 end-to-end 조립·시험 공급능력이 중요해지고 있습니다.',source:'Coherent 공식',url:'https://ir.coherent.com/news-releases/news-release-details/coherent-launches-photonlinktm-integrated-optics-platform-ai'},
    {date:'2026.09.21',type:'광섬유',title:'Lightera, 2세대 Hollow-Core Fiber 생태계 발표',summary:'지연·용량 민감 AI/DCI 구간을 겨냥한 HCF와 연계 생태계를 발표했습니다.',insight:'시사점 · CPO 패키지 밖 연결 구간에서도 저지연 광전송의 선택지가 확대되고 있습니다.',source:'Lightera 공식',url:'https://lightera.com/n/lightera-launches-second-generation-antiresonant-hollow-core-fiber-and-integrated-hcf-ecosystem/'}
  ];

  function build(){
    if(document.getElementById('weeklyTrendBrief'))return;
    var filter=document.getElementById('eventFilter');
    if(!filter)return;
    var section=document.createElement('section');
    section.className='weekly-trend-brief';
    section.id='weeklyTrendBrief';
    section.setAttribute('aria-label','이번 주 CPO 기술 동향');
    var cards=trends.map(function(item){
      return '<a class="weekly-trend-card" href="'+item.url+'" target="_blank" rel="noopener">'+
        '<span class="weekly-trend-top"><em>'+item.type+'</em><time datetime="'+item.date.replaceAll('.','-')+'">'+item.date+'</time></span>'+ 
        '<b>'+item.title+'</b><span class="weekly-trend-summary">'+item.summary+'</span>'+ 
        '<span class="weekly-trend-insight">'+item.insight+'</span><span class="weekly-trend-source">'+item.source+' ↗</span></a>';
    }).join('');
    section.innerHTML='<div class="weekly-trend-head"><div><b>이번 주 CPO 동향</b><span>3개 핵심 업데이트 · 공식 발표 기준</span></div><span class="weekly-trend-date">2026.10.17 기준</span></div><div class="weekly-trend-list">'+cards+'</div>';
    filter.parentNode.insertBefore(section,filter);
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',build,{once:true});else build();
})();
