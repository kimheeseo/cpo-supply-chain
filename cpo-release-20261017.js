/* CPO Supply Chain v2.14.0 · verified whole-path explainer, Korea sales/support directory, and fresh source-linked news. */
(function(){
  'use strict';
  if(window.__cpoRelease20261017)return;
  window.__cpoRelease20261017=true;
  var $=function(sel,root){return (root||document).querySelector(sel)};
  var escapeHtml=function(value){return String(value==null?'':value).replace(/[&<>"']/g,function(ch){return ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch])})};
  var koreaDirectory={
    fiber:{
      title:'Optical Fiber / Cable · 제조사별 국내 영업·지원 채널',
      note:'표시된 “한국 법인/공식 판매 채널”은 제조사 공식 페이지를 기준으로 확인했습니다. CPO·PMF·특정 광섬유의 판매 가능 여부와 규격은 각 채널에 개별 확인이 필요합니다.',
      brands:[
        {id:'corning',name:'Corning',product:'SMF · optical cable · high-density connectivity',records:[
          {channel:'한국코닝(주)',role:'한국 법인 · Corning Optical Communications 문의',tier:'office',tierLabel:'한국 법인',phone:'02-796-9500',email:'krregion@corning.com',sourceName:'Corning Korea 공식 Contact',sourceUrl:'https://www.corning.com/kr/ko/contact-us.html'},
          {channel:'A.J. World Co. Ltd.',role:'Corning Optical Communications 공식 Distributor · Carrier',tier:'authorized',tierLabel:'공식 Distributor',phone:'02-576-5216',email:'smun69@ajw.co.kr',sourceName:'Corning Korea distributor directory',sourceUrl:'https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html'},
          {channel:'Daeshin NS Co., Ltd.',role:'Corning Optical Communications 공식 Distributor · Enterprise',tier:'authorized',tierLabel:'공식 Distributor',phone:'070-7013-0005',email:'sms@ds-ns.net',sourceName:'Corning Korea distributor directory',sourceUrl:'https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html'},
          {channel:'Daeyoung E&C Co., Ltd.',role:'Corning Optical Communications 공식 Distributor · Carrier',tier:'authorized',tierLabel:'공식 Distributor',phone:'02-719-3629',email:'hjeuk@millotek.com',sourceName:'Corning Korea distributor directory',sourceUrl:'https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html'},
          {channel:'MK Square21 Ltd.',role:'Corning Optical Communications 공식 Distributor · Carrier',tier:'authorized',tierLabel:'공식 Distributor',phone:'02-3283-0807',email:'mkkim11@nate.com',sourceName:'Corning Korea distributor directory',sourceUrl:'https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html'},
          {channel:'NTOP Information Communication',role:'Corning Optical Communications 공식 Distributor · Enterprise',tier:'authorized',tierLabel:'공식 Distributor',phone:'032-667-4800',email:'k2@ntopinfo.co.kr',sourceName:'Corning Korea distributor directory',sourceUrl:'https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html'},
          {channel:'남해이엔지(주)',role:'Corning 제품 취급 정보 · 현행 공식 Distributor 지위는 확인 필요',tier:'reported',tierLabel:'취급 정보 · 확인 필요',phone:'031-708-2071',email:'ysjung@nheng.kr',sourceName:'제품 취급 정보',sourceUrl:'https://g2bmarket.com/detail/namhaeienji'}
        ]},
        {id:'furukawa',name:'Furukawa Electric / Lightera',product:'Optical fiber cable · components · HCF/MCF ecosystem',records:[
          {channel:'Furukawa Sangyo Korea Co., Ltd.',role:'한국 판매 법인 · 광섬유 케이블·광부품을 포함한 Group 제품 판매',tier:'office',tierLabel:'한국 판매 법인',phone:'031-898-7688',email:'minha.kim@furukawaelectric.com',sourceName:'Furukawa Electric 공식 global sales office',sourceUrl:'https://www.furukawaelectric.com/en/company/group/salesoffice.html'}
        ]},
        {id:'sumitomo',name:'Sumitomo Electric',product:'Optical fiber · PM fiber · multicore fiber · cable',records:[
          {channel:'Sumitomo Electric (Korea) Electronics, Ltd.',role:'한국 영업점 · 전자선·케이블 판매. 광섬유/광케이블 및 CPO 적용 가능 품목은 제품별 문의',tier:'office',tierLabel:'한국 영업점',phone:'02-3453-4511',sourceName:'Sumitomo Electric Korea 공식 office',sourceUrl:'https://sumitomoelectric.com/company/office_group_companies/sumitomo-electric-korea-electronics-ltd'}
        ]},
        {id:'fujikura',name:'Fujikura',product:'Optical fiber · high-density cable · modular patch panel',records:[
          {channel:'Fujikura 글로벌 제품 문의',role:'Fujikura 공식 광섬유/케이블 문의 양식 · 국내 광섬유 전담 판매채널은 공개 자료에서 확인되지 않음',tier:'global',tierLabel:'본사 문의',sourceName:'Fujikura official contact form',sourceUrl:'https://www.fujikura.co.jp/en/contact/'}
        ]}
      ]
    },
    connector:{
      title:'Front Connector · 해외 제조사별 국내 판매 채널',
      note:'Fujikura는 DDK 커넥터 사업부가 공개한 한국 Distributor를 표시합니다. 해당 Distributor 목록은 광섬유/케이블 판매권이나 CPO 호환성 자체를 보증하지 않습니다.',
      brands:[
        {id:'fujikura-ddk',name:'Fujikura / DDK Connector',product:'Connector · interconnect',records:[
          {channel:'Mujin Electronics Co., Ltd.',role:'Fujikura DDK 공식 Korea Distributor',tier:'authorized',tierLabel:'공식 Distributor',phone:'02-767-3911',sourceName:'Fujikura Connector distributor list',sourceUrl:'https://www.connector.fujikura.com/English/corprate_profile/world_text.html'},
          {channel:'Woo Shin Trading Co.',role:'Fujikura DDK 공식 Korea Distributor',tier:'authorized',tierLabel:'공식 Distributor',phone:'02-523-0430',sourceName:'Fujikura Connector distributor list',sourceUrl:'https://www.connector.fujikura.com/English/corprate_profile/world_text.html'}
        ]},
        {id:'amphenol',name:'Amphenol',product:'Fiber-optic connector · interconnect',records:[
          {channel:'Amphenol Korea',role:'한국 법인/영업 · fiber-optic interconnect 문의',tier:'office',tierLabel:'한국 법인',email:'info@amphenol.co.kr',sourceName:'Amphenol Korea',sourceUrl:'https://www.amphenol.co.kr/'}
        ]},
        {id:'molex',name:'Molex',product:'CPO connectivity · connector · ELSFP',records:[
          {channel:'Arrow Korea',role:'Molex Korea Distributor 안내 경로',tier:'authorized',tierLabel:'유통 채널',email:'joseph.rah@arrow.com',sourceName:'Molex Korea distributors',sourceUrl:'https://www.molex.com/en-us/contact/molex-korea-distributors'}
        ]}
      ]
    }
  };

  function contactHtml(record){
    var out=[];
    if(record.email)out.push('<a href="mailto:'+escapeHtml(record.email)+'">'+escapeHtml(record.email)+'</a>');
    if(record.phone)out.push('<a href="tel:'+escapeHtml(record.phone.replace(/[^0-9+]/g,''))+'">'+escapeHtml(record.phone)+'</a>');
    if(!out.length)out.push('<span>공식 문의 양식 이용</span>');
    return out.join('<br>');
  }
  function initKoreaDirectory(){
    var grid=$('#koreaComponentGrid'),result=$('#koreaSalesResult'),tableWrap=$('#koreaSalesTableWrap'),table=$('.korea-sales-table',tableWrap),body=$('#koreaSalesBody'),empty=$('#koreaSalesEmpty'),selected=$('#koreaSalesSelected');
    if(!grid||!result||!tableWrap||!table||!body||!selected)return;
    var active={fiber:'all',connector:'all'},toolbar=null,originalHeader=table.querySelector('thead tr').innerHTML;
    function render(key){
      var section=koreaDirectory[key];if(!section)return;
      result.classList.add('open');tableWrap.hidden=false;tableWrap.style.display='';tableWrap.classList.add('cpo-directory-mode');
      if(empty)empty.hidden=true;
      selected.textContent=section.title;
      table.querySelector('thead tr').innerHTML='<th>제조사 · 제품군</th><th>한국 채널</th><th>구분</th><th>공식 근거 · 연락처</th>';
      if(toolbar)toolbar.remove();
      toolbar=document.createElement('section');toolbar.className='cpo-directory-toolbar';toolbar.id='cpoDirectoryToolbar';
      var title=document.createElement('div');title.className='cpo-directory-title';title.innerHTML='<b>제조사별 채널 보기</b><span>— 공식 근거와 구분을 함께 표시</span>';
      var filters=document.createElement('div');filters.className='cpo-directory-filters';
      function repaint(){
        var filter=active[key]||'all';
        Array.prototype.forEach.call(filters.querySelectorAll('button'),function(btn){btn.setAttribute('aria-pressed',String(btn.dataset.brand===filter))});
        body.innerHTML='';
        section.brands.filter(function(brand){return filter==='all'||brand.id===filter}).forEach(function(brand){
          brand.records.forEach(function(record,index){
            var row=document.createElement('tr');
            row.innerHTML='<td><span class="cpo-access-brand">'+escapeHtml(brand.name)+'</span><span class="cpo-access-product">'+escapeHtml(brand.product)+'</span></td>'+
              '<td><span class="cpo-access-channel">'+escapeHtml(record.channel)+'</span><span class="cpo-access-role">'+escapeHtml(record.role)+'</span></td>'+
              '<td><span class="cpo-access-tier '+escapeHtml(record.tier)+'">'+escapeHtml(record.tierLabel)+'</span></td>'+
              '<td class="cpo-access-contact">'+contactHtml(record)+'<br><a class="cpo-source-link" href="'+escapeHtml(record.sourceUrl)+'" target="_blank" rel="noopener">'+escapeHtml(record.sourceName)+' ↗</a></td>';
            body.appendChild(row);
          });
        });
      }
      [['all','전체'],].concat(section.brands.map(function(brand){return [brand.id,brand.name]})).forEach(function(item){
        var button=document.createElement('button');button.type='button';button.className='cpo-directory-filter';button.dataset.brand=item[0];button.textContent=item[1];
        button.addEventListener('click',function(){active[key]=item[0];repaint()});filters.appendChild(button);
      });
      var note=document.createElement('p');note.className='cpo-directory-note';note.textContent='※ '+section.note;
      toolbar.append(title,filters,note);result.insertBefore(toolbar,tableWrap);repaint();
    }
    grid.addEventListener('click',function(event){
      var button=event.target.closest('[data-korea-component]');if(!button||!grid.contains(button))return;
      var key=button.getAttribute('data-korea-component');
      if(!koreaDirectory[key]){
        if(toolbar)toolbar.hidden=true;
        tableWrap.classList.remove('cpo-directory-mode');
        table.querySelector('thead tr').innerHTML=originalHeader;
        return;
      }
      event.preventDefault();event.stopImmediatePropagation();event.stopPropagation();render(key);
    },true);
  }

  function initWholeCpoFlow(){
    var explainer=$('.cpo-flow-explainer'),play=$('#cpoOpticalPlay');
    if(!explainer||!play||$('#cpoSystemFlow'))return;
    var block=document.createElement('section');block.className='cpo-system-flow';block.id='cpoSystemFlow';
    block.innerHTML='<h5>전체 CPO 송신(Tx) 광 경로</h5><p>광원부터 전면 커넥터까지의 개념도입니다. 실제 layout·배선 길이·광학 결합 방향은 제품별로 다릅니다.</p>'+ 
      '<svg class="cpo-system-svg" viewBox="0 0 700 132" role="img" aria-label="External laser source to PM fiber, PIC, FAU, SM fiber harness, and front connector"><path class="cpo-system-line" d="M83 67 H132 H229 H341 H455 H570 H640"/><path class="cpo-system-line is-lit" id="cpoSystemPath" d="M83 67 H132 H229 H341 H455 H570 H640"/>'+ 
      '<g class="cpo-system-node" data-step="0"><rect x="14" y="42" width="69" height="50"/><text x="48" y="62">ELS</text><text class="sub" x="48" y="78">Laser</text></g>'+ 
      '<g class="cpo-system-node" data-step="1"><rect x="132" y="42" width="97" height="50"/><text x="180" y="62">PM Fiber</text><text class="sub" x="180" y="78">CW delivery</text></g>'+ 
      '<g class="cpo-system-node" data-step="2"><rect x="341" y="29" width="114" height="76"/><text x="398" y="55">PIC / EIC</text><text class="sub" x="398" y="71">modulation</text><text class="sub" x="398" y="85">near ASIC</text></g>'+ 
      '<g class="cpo-system-node" data-step="3"><rect x="455" y="42" width="115" height="50"/><text x="512" y="62">FAU</text><text class="sub" x="512" y="78">fiber attach</text></g>'+ 
      '<g class="cpo-system-node" data-step="4"><rect x="570" y="42" width="70" height="50"/><text x="605" y="62">SMF</text><text class="sub" x="605" y="78">harness</text></g>'+ 
      '<g class="cpo-system-node" data-step="5"><rect x="640" y="42" width="48" height="50"/><text x="664" y="62">I/O</text><text class="sub" x="664" y="78">out</text></g><circle class="cpo-system-dot" id="cpoSystemPulse" r="6" cx="83" cy="67"/></svg>'+ 
      '<div class="cpo-system-caption"><span id="cpoSystemStatus"><b>대기</b> · 재생 버튼을 누르면 입력 CW 광과 변조된 출력 광의 흐름을 표시합니다.</span><span>ELS → PMF → PIC → FAU → SMF → I/O</span></div>';
    explainer.appendChild(block);
    var svg=$('.cpo-system-svg',block),path=$('#cpoSystemPath',block),dot=$('#cpoSystemPulse',block),status=$('#cpoSystemStatus',block),nodes=Array.prototype.slice.call(block.querySelectorAll('.cpo-system-node'));
    var running=false,raf=0,start=0,length=0,reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function setActive(step){nodes.forEach(function(node){node.classList.toggle('is-active',Number(node.dataset.step)===step)})}
    function stop(){running=false;svg.classList.remove('is-running');play.textContent='▶ 동작 원리 · 전체 CPO 광경로';play.setAttribute('aria-pressed','false');if(raf)cancelAnimationFrame(raf);raf=0;}
    function frame(now){
      if(!running)return;if(document.hidden){stop();return}if(!start)start=now;
      if(!length)length=path.getTotalLength();var progress=((now-start)%6200)/6200,point=path.getPointAtLength(progress*length);
      dot.setAttribute('cx',point.x.toFixed(2));dot.setAttribute('cy',point.y.toFixed(2));
      var step=Math.min(5,Math.floor(progress*6));setActive(step);
      status.innerHTML='<b>'+['CW 광원','PMF 전달','PIC 변조','FAU 결합','SMF harness','전면 I/O'][step]+'</b> · '+['Laser가 연속파 광을 생성합니다.','PMF가 편광 상태를 유지하며 PIC로 전달합니다.','PIC/EIC가 전기 데이터를 광신호로 변조합니다.','FAU가 칩과 광섬유 배열을 정렬·결합합니다.','다채널 광신호가 SMF harness를 통과합니다.','전면 커넥터를 통해 외부 광링크로 나갑니다.'][step];
      raf=requestAnimationFrame(frame);
    }
    play.textContent='▶ 동작 원리 · 전체 CPO 광경로';play.setAttribute('aria-pressed','false');
    play.addEventListener('click',function(event){
      event.preventDefault();event.stopImmediatePropagation();event.stopPropagation();
      if(running){stop();return}
      if(reduced){setActive(2);status.innerHTML='<b>움직임 줄이기 설정</b> · 고정 도식과 단계별 보기로 경로를 확인하세요.';return}
      running=true;start=0;svg.classList.add('is-running');play.textContent='■ 전체 CPO 광경로 정지';play.setAttribute('aria-pressed','true');raf=requestAnimationFrame(frame);
    },true);
    document.addEventListener('visibilitychange',function(){if(document.hidden)stop()});
  }

  function appendLatestNews(){
    var companies=window.companies;if(!companies)return;
    var updates=[
      {id:'ayar',item:{date:'2026-10-13',title:'Wiwynn·Ayar Labs·GUC, OCP 2026에서 integrated optical compute system CPO 라이브 시연',source:'Wiwynn (official)',url:'https://www.wiwynn.com/news/wiwynn-ayar-labs-and-guc-advance-co-packaged-optics-with-live-demonstration-of-integrated-optical-compute-system-at-ocp-global-summit-2026',summary:'Wiwynn compute system에 GUC ASIC, Ayar TeraPHY™ optical engine과 SuperNova™ light source를 통합하고 실시간 health telemetry를 시연했습니다.',implication:'개별 광소자 발표를 넘어 시스템 레벨 패키징·냉각·상태 모니터링까지 검증 범위가 확대되고 있습니다.',relevance:'high'}},
      {id:'furukawa',item:{date:'2026-09-21',title:'Lightera, 2세대 antiresonant hollow-core fiber 및 HCF 생태계 고도화 발표',source:'Lightera (Furukawa Electric Group)',url:'https://lightera.com/n/lightera-launches-second-generation-antiresonant-hollow-core-fiber-and-integrated-hcf-ecosystem/',summary:'지연·용량 민감 네트워크를 겨냥한 2세대 HCF와 통합 생태계를 ECOC 2026에서 공개했습니다.',implication:'단기 CPO 부품과 별개로, AI/DCI 구간의 지연·대역폭 요구가 HCF 기반 전송 기술로도 확장되고 있습니다.',relevance:'high'}}
    ];
    var changed=false;
    updates.forEach(function(update){var company=companies[update.id];if(!company)return;company.news=Array.isArray(company.news)?company.news:[];if(company.news.some(function(n){return n.url===update.item.url}))return;company.news.unshift(update.item);company.news.sort(function(a,b){return String(b.date).localeCompare(String(a.date))});changed=true});
    if(changed&&typeof window.renderVendor==='function')window.renderVendor();
  }
  function refreshBadge(){
    var badge=$('#buildBadge');
    var current='v2.17.3 · 2D→3D 탭 순서 · 단계별 이미지 강조 · 국내 채널 · 2026-10-24';
    if(!badge||badge.textContent===current)return;
    badge.textContent=current;
  }
  function init(){initWholeCpoFlow();initKoreaDirectory();appendLatestNews();refreshBadge();var badge=$('#buildBadge');if(badge)new MutationObserver(refreshBadge).observe(badge,{childList:true,characterData:true,subtree:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
