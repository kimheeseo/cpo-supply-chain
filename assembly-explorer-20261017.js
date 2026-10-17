/* CPO Supply Chain · Oct 17, 2026 · progressive enhancement (no changes to baseline CAD model). */
(function(){
  'use strict';
  if(window.__cpoAssemblyExplorer20261017)return;
  window.__cpoAssemblyExplorer20261017=true;
  var $=function(sel,root){return (root||document).querySelector(sel)};
  var $$=function(sel,root){return Array.prototype.slice.call((root||document).querySelectorAll(sel))};
  var components=[
    {key:'Main_cable',name:'Main cable',ko:'주 케이블'},
    {key:'Branch_cables',name:'Branch cables',ko:'분기 케이블'},
    {key:'Fanout_fibers_A',name:'Fanout fibers A',ko:'팬아웃 광섬유 A'},
    {key:'Fanout_fibers_B',name:'Fanout fibers B',ko:'팬아웃 광섬유 B'},
    {key:'Breakout_sleeves',name:'Breakout sleeves',ko:'분기 보호 슬리브'},
    {key:'LC_connectors',name:'LC-like connectors',ko:'LC형 커넥터'},
    {key:'Connector_boots',name:'Connector boots',ko:'커넥터 부트'},
    {key:'Single_branch_connector',name:'Single branch connector',ko:'단일 분기 커넥터'},
    {key:'Main_termination',name:'Main termination',ko:'주 종단부'},
    {key:'Tag_pull_tab',name:'Tag / pull tab',ko:'식별 태그'}
  ];
  var isKorean=function(){return document.documentElement.lang.toLowerCase().indexOf('ko')===0};
  function componentName(o){return o.name+(isKorean()?' · '+o.ko:'')}
  function init3d(){
    var stage=$('#fauCadStage'),strip=$('#cadPartButtons'),buttons=$('[data-view-panel="fauCad"] .cad3d-buttons');
    if(!stage||!strip||!buttons)return;
    var overlay=document.createElement('div');overlay.className='cpo-cad-overlay';overlay.id='cpoCadPins';stage.appendChild(overlay);
    var caption=document.createElement('div');caption.className='cpo-cad-caption';caption.id='cpoCadCaption';
    caption.innerHTML='부품을 클릭해 이름 확인<span>Assembly View에서도 10개 CAD 그룹을 직접 선택할 수 있습니다.</span>';
    stage.appendChild(caption);
    var toggle=document.createElement('button');toggle.type='button';toggle.className='cad3d-btn cpo-cad-toggle';toggle.id='cpoCadLabelToggle';
    toggle.setAttribute('aria-pressed','true');toggle.textContent='부품명 표시: 켬';buttons.appendChild(toggle);
    var visible=true,lastSelected=null,lastUpdate=0;
    var map={};
    components.forEach(function(p,i){
      var btn=document.createElement('button');btn.type='button';btn.className='cpo-cad-pin';btn.hidden=true;
      btn.setAttribute('aria-label',componentName(p));btn.setAttribute('aria-pressed','false');
      btn.innerHTML='<b>'+(i+1)+'</b><span class="pin-label">'+p.name+'</span>';
      btn.addEventListener('pointerdown',function(e){e.stopPropagation()});
      btn.addEventListener('pointerup',function(e){e.stopPropagation()});
      btn.addEventListener('click',function(e){e.stopPropagation();pick(p.key)});
      overlay.appendChild(btn);map[p.key]=btn;
    });
    function pick(key){
      var base=$('#cadPartButtons [data-cad-key="'+key+'"]');
      if(base)base.click();
      else if(typeof window.showCadPartInfo==='function')window.showCadPartInfo(key);
      sync(true);
    }
    function sync(force){
      var state=window.fauCadState,sel=state&&state.selected;
      if(!force&&sel===lastSelected)return;
      lastSelected=sel;
      var p=components.find(function(a){return a.key===sel});
      if(p){caption.innerHTML='선택한 부품: '+componentName(p)+'<span>아래 부품 설명·공급망에서도 상세 내용을 확인할 수 있습니다.</span>';}
      else caption.innerHTML='부품을 클릭해 이름 확인<span>Assembly View에서 모델이나 번호를 선택하세요.</span>';
      components.forEach(function(o){map[o.key].setAttribute('aria-pressed',String(o.key===sel))});
    }
    function updatePins(ts){
      if(ts-lastUpdate<170)return;
      lastUpdate=ts;
      var state=window.fauCadState,active=$('[data-view-panel="fauCad"].active');
      if(!state||!state.ready||!active||!visible||document.hidden){
        components.forEach(function(p){map[p.key].hidden=true});
        return;
      }
      if(!window.THREE)return;
      var camera=state.activeCamera||state.camera;
      if(!camera||!state.scene||!state.byKey)return;
      state.scene.updateMatrixWorld(true);camera.updateMatrixWorld();
      components.forEach(function(p){
        var btn=map[p.key],meshes=state.byKey[p.key];
        if(!meshes||!meshes.length){btn.hidden=true;return}
        var mesh=meshes[0];if(!mesh.geometry){btn.hidden=true;return}
        if(!mesh.geometry.boundingBox)mesh.geometry.computeBoundingBox();
        var pos=mesh.geometry.boundingBox.getCenter(new THREE.Vector3()).applyMatrix4(mesh.matrixWorld).project(camera);
        if(!isFinite(pos.x)||!isFinite(pos.y)||pos.z>1||pos.z< -1){btn.hidden=true;return}
        var x=(pos.x+1)*50,y=(1-pos.y)*50;
        btn.hidden=(x<3||x>97||y<6||y>97);
        btn.style.left=x.toFixed(2)+'%';btn.style.top=y.toFixed(2)+'%';
        btn.setAttribute('aria-label',componentName(p));
      });
      sync(false);
    }
    toggle.addEventListener('click',function(){
      visible=!visible;toggle.setAttribute('aria-pressed',String(visible));
      toggle.textContent=visible?'부품명 표시: 켬':'부품명 표시: 끔';
      components.forEach(function(o){map[o.key].hidden=!visible});
    });
    stage.addEventListener('pointerup',function(e){
      if(e.target.closest('.cpo-cad-pin'))return;
      setTimeout(function(){sync(true)},50);
    });
    strip.addEventListener('click',function(){setTimeout(function(){sync(true)},10)});
    $('#cadViewReset')?.addEventListener('click',function(){setTimeout(function(){sync(true)},30)});
    // CAD model already has its own rendering loop; annotation updates are throttled and read-only.
    var raf=null;function frame(ts){updatePins(ts);raf=window.requestAnimationFrame(frame)}
    raf=window.requestAnimationFrame(frame);
    window.addEventListener('pagehide',function(){if(raf!==null)window.cancelAnimationFrame(raf)},{once:true});
  }
  function init2d(){
    var panel=$('[data-view-panel="fau2d"]'),shell=$('.fau2d-shell',panel);
    var stage=$('.fau2d-stage',panel);if(!panel||!shell||!stage)return;
    var toolbar=document.createElement('div');toolbar.className='cpo-optical-toolbar';
    var play=document.createElement('button');play.type='button';play.id='cpoOpticalPlay';play.textContent='▶ 동작 원리 · 레이저 경로';
    var next=document.createElement('button');next.type='button';next.className='cpo-optical-step';next.textContent='단계별 보기 →';
    var live=document.createElement('span');live.className='cpo-optical-status';live.setAttribute('aria-live','polite');live.textContent='광원 → PMF → PIC → FAU → SMF → 전면 커넥터';
    toolbar.append(play,next,live);shell.insertBefore(toolbar,stage);
    var ns='http://www.w3.org/2000/svg';
    var svg=document.createElementNS(ns,'svg');svg.classList.add('cpo-beam-svg');svg.setAttribute('viewBox','0 0 100 100');svg.setAttribute('preserveAspectRatio','none');
    svg.setAttribute('aria-hidden','true');
    function path(d,klass){
      var el=document.createElementNS(ns,'path');el.setAttribute('d',d);el.setAttribute('class','cpo-beam-path '+klass);svg.appendChild(el);return el;
    }
    var feed=path('M57 19 C45 24 41 43 30 62 C41 68 63 75 83 80','input');
    var output=path('M83 80 C73 66 60 48 47 40 C31 31 23 24 11 18','output');
    function pulse(klass){
      var el=document.createElementNS(ns,'circle');el.setAttribute('r','1.8');el.setAttribute('class','cpo-beam-dot '+klass);svg.appendChild(el);return el;
    }
    var dotIn=pulse('input'),dotOut=pulse('output');stage.appendChild(svg);
    var stages=[
      ['레이저/ELS','External Laser Source에서 CW 광이 출력됩니다.'],
      ['PM 광섬유','편광 상태를 보존하는 광섬유를 통해 광엔진으로 빛을 전달합니다.'],
      ['PIC 광엔진','PIC 내 변조기에서 Switch ASIC/EIC의 전기 데이터를 광신호에 실어 보냅니다.'],
      ['FAU / 광결합','광엔진의 빛을 FAU·광도파로/광섬유 경로와 결합합니다.'],
      ['SM 광섬유','변조된 다채널 광신호가 SM fiber harness를 지나갑니다.'],
      ['전면 커넥터','광신호가 전면 커넥터를 거쳐 외부 링크로 전달됩니다.']
    ];
    var box=document.createElement('section');box.className='cpo-flow-explainer';
    var heading=document.createElement('h4');heading.textContent='CPO 광신호 전달 원리 · Tx 개념 모델';
    var chain=document.createElement('div');chain.className='cpo-flow-chain';
    var desc=document.createElement('p');desc.className='cpo-flow-caption';desc.setAttribute('aria-live','polite');
    var caution=document.createElement('p');caution.className='cpo-flow-caution';
    caution.textContent='※ 이해를 돕기 위한 광 경로 개념 애니메이션입니다. 배경의 FAU 참고 사진은 CPO 전체 회로도가 아니며, 오버레이 선은 실제 케이블 경로·광학 설계 치수가 아닙니다. Rx(수신)는 외부 광신호가 반대 방향으로 PIC 수신기로 들어옵니다.';
    var buttons=[];
    stages.forEach(function(st,i){
      if(i){var arrow=document.createElement('span');arrow.className='cpo-flow-arrow';arrow.textContent='→';chain.appendChild(arrow)}
      var btn=document.createElement('button');btn.type='button';btn.textContent=st[0];btn.setAttribute('aria-current','false');
      btn.addEventListener('click',function(){stop();renderStep(i)});chain.appendChild(btn);buttons.push(btn);
    });
    box.append(heading,chain,desc,caution);
    var inspector=$('.part-inspector',panel);
    shell.insertBefore(box,inspector||null);
    var step=0,running=false,raf=0,last=0,elapsed=0,lessMotion=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    var inLen=feed.getTotalLength(),outLen=output.getTotalLength();
    function renderStep(i){
      step=Math.max(0,Math.min(stages.length-1,i));
      buttons.forEach(function(b,j){b.setAttribute('aria-current',j===step?'step':'false')});
      desc.textContent=(step+1)+' / '+stages.length+' · '+stages[step][1];
      if(!running)live.textContent=stages[step][0]+' · '+stages[step][1];
    }
    function stop(){
      running=false;svg.classList.remove('is-running');play.textContent='▶ 동작 원리 · 레이저 경로';
      if(raf)cancelAnimationFrame(raf);raf=0;last=0;
    }
    function animate(now){
      if(!running)return;
      if(document.hidden||!panel.classList.contains('active')){stop();return}
      if(last)elapsed+=Math.min(now-last,80);last=now;
      var t=(elapsed%7200)/7200;
      // First 48%: CW laser reaches the PIC; remaining 52%: modulated optical data exits.
      var inputPhase=t<.48;
      var p=inputPhase?feed:output;
      var ratio=inputPhase?t/.48:(t-.48)/.52;
      var point=p.getPointAtLength(Math.min(1,ratio)* (inputPhase?inLen:outLen));
      var dot=inputPhase?dotIn:dotOut,other=inputPhase?dotOut:dotIn;
      dot.setAttribute('cx',point.x.toFixed(3));dot.setAttribute('cy',point.y.toFixed(3));
      other.setAttribute('cx','-10');other.setAttribute('cy','-10');
      var i=Math.min(stages.length-1,Math.floor(t*stages.length));
      if(step!==i)renderStep(i);
      live.textContent=inputPhase?'입력 CW 광: ELS → PMF → PIC':'변조된 데이터 광: PIC → FAU → SMF → Connector';
      raf=requestAnimationFrame(animate);
    }
    play.addEventListener('click',function(){
      if(running){stop();return}
      renderStep(0);elapsed=0;last=0;
      if(lessMotion){
        svg.classList.remove('is-running');
        live.textContent='움직임 줄이기 설정: 경로를 고정 표시합니다. 단계별 보기 버튼을 이용하세요.';
        return;
      }
      running=true;svg.classList.add('is-running');play.textContent='■ 동작 정지';raf=requestAnimationFrame(animate);
    });
    next.addEventListener('click',function(){stop();renderStep((step+1)%stages.length)});
    $$('.view-tab').forEach(function(tab){
      tab.addEventListener('click',function(){if(tab.dataset.view!=='fau2d')stop()});
    });
    document.addEventListener('visibilitychange',function(){if(document.hidden)stop()});
    window.addEventListener('pagehide',stop,{once:true});
    renderStep(0);
  }
  function initKorea(){
    var modal=$('#koreaSalesModal'),result=$('#koreaSalesResult'),table=$('#koreaSalesTableWrap'),body=$('#koreaSalesBody');
    if(!modal||!result||!table||!body)return;
    var brand=document.createElement('div');brand.className='cpo-brand-card';brand.hidden=true;brand.id='cpoCorningBrand';
    brand.innerHTML='<div><strong>Corning · 광섬유/광케이블 제조사</strong><small>미국 제조사 → 한국 법인 1곳 · 공식 한국 Distributor 5곳 · 국내 취급 정보 1곳</small><a href="https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html" target="_blank" rel="noopener">Corning 공식 한국 Distributor 확인 ↗</a></div><button type="button" id="cpoCorningExpand" aria-expanded="true">한국 판매/지원 7곳 보기</button>';
    var filters=document.createElement('div');filters.className='cpo-korea-filters';filters.hidden=true;
    var choices=[['all','전체 7'],['official','공식 확인 6'],['review','취급 정보 1 · 확인 필요']];
    var filter='all',expanded=true;
    function applyFilter(){
      $$('tr',body).forEach(function(row){
        var tier=row.dataset.cpoTier||'official';
        row.hidden=(!expanded)||(filter!=='all'&&tier!==filter);
      });
      table.hidden=!expanded;
      filters.hidden=!expanded||brand.hidden;
      $$('#cpoCorningFilters button').forEach(function(btn){btn.setAttribute('aria-pressed',String(btn.dataset.filter===filter))});
    }
    choices.forEach(function(opt){
      var btn=document.createElement('button');btn.type='button';btn.dataset.filter=opt[0];btn.textContent=opt[1];
      btn.addEventListener('click',function(){filter=opt[0];applyFilter()});filters.appendChild(btn);
    });
    filters.id='cpoCorningFilters';
    result.insertBefore(brand,table);
    result.insertBefore(filters,table);
    $('#cpoCorningExpand').addEventListener('click',function(){
      expanded=!expanded;this.setAttribute('aria-expanded',String(expanded));this.textContent=expanded?'한국 판매/지원 7곳 접기':'한국 판매/지원 7곳 보기';applyFilter();
    });
    function decorate(key){
      brand.hidden=key!=='fiber';filters.hidden=key!=='fiber';
      if(key!=='fiber'){table.hidden=false;return}
      expanded=true;filter='all';
      var rows=$$('tr',body);
      rows.forEach(function(row,i){
        var label=i===0?'한국 법인':i===rows.length-1?'Corning 취급 정보 · 총판 지위 확인 필요':'Corning 공식 Distributor';
        var review=i===rows.length-1;
        row.dataset.cpoTier=review?'review':'official';
        var first=$('td:first-child',row);if(!first)return;
        var badge=document.createElement('span');badge.className='cpo-korea-tag'+(review?' review':'');badge.textContent=label;
        first.appendChild(document.createElement('br'));first.appendChild(badge);
      });
      $('#cpoCorningExpand').setAttribute('aria-expanded','true');
      $('#cpoCorningExpand').textContent='한국 판매/지원 7곳 접기';
      applyFilter();
      var text=$('#koreaSalesSelected');if(text)text.textContent='Optical Fiber / Cable → Corning → 한국 법인·대리점 (공식/취급 구분)';
    }
    document.addEventListener('click',function(e){
      var btn=e.target.closest('[data-korea-component]');
      if(btn&&modal.contains(btn))decorate(btn.getAttribute('data-korea-component'));
      if(e.target.closest('#koreaSalesBtn')){brand.hidden=true;filters.hidden=true;table.hidden=false}
    });
    var tags=$('#partTags'),partSelect=$('#partSelect');
    if(tags&&partSelect){
      var card=document.createElement('div');card.className='cpo-korea-cta';card.hidden=true;
      card.innerHTML='<span>Optical Fiber → Corning → 한국코닝 및 국내 총판/취급처</span><button type="button">🇰🇷 한국 영업·지원 업체 보기</button>';
      tags.insertAdjacentElement('afterend',card);
      card.querySelector('button').addEventListener('click',function(){
        var open=$('#koreaSalesBtn'),fiber=$('[data-korea-component="fiber"]',modal);
        if(open)open.click();if(fiber)fiber.click();
      });
      function update(){card.hidden=partSelect.value!=='dataFiber'}
      var title=$('#partTitle');
      if(title){new MutationObserver(update).observe(title,{childList:true,characterData:true,subtree:true})}
      partSelect.addEventListener('change',function(){setTimeout(update,0)});
      update();
    }
  }
  function init(){
    init3d();init2d();initKorea();
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});
  else init();
})();