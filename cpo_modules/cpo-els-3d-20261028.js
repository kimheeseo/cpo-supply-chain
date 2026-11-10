/* CPO Supply Chain v2.17.8 (2026-10-28)
   ELS/CW laser + PMF + PIC conceptual 3D extension to the existing fanout CAD viewer.
   Additive only: original CAD geometry, original part labels and 2D optical path remain unchanged.
*/
(function () {
  'use strict';
  if (window.__cpoEls3d20261028) return;
  window.__cpoEls3d20261028 = true;

  var S = function (selector, root) { return (root || document).querySelector(selector); };
  var labels = {
    External_Laser_Source: {
      layer: 'laser', label: 'ELS / CW Laser',
      ko: 'CPO 송신 경로의 외부 연속파 레이저 광원(External Laser Source)입니다. PMF로 광엔진에 CW 광을 공급합니다. 본 3D 레이저 하우징은 교육용 개념 추가 모델이며 기존 fan-out CAD 원본 형상이나 실제 치수에 포함되지 않습니다.',
      en: 'Concept external CW laser source: its optical output reaches the PIC over PMF. This housing is a teaching overlay, not part of the uploaded fan-out CAD or a manufacturing dimension.'
    },
    PMF_Input_Link: {
      layer: 'pmFiber', label: 'PMF · ELS → PIC',
      ko: '레이저에서 PIC까지 CW 광을 전달하는 편광유지광섬유(PMF) 입력 경로입니다. ELS와 광엔진을 연결하는 개념도이며 실제 배선 길이·굽힘반경을 나타내지 않습니다.',
      en: 'Conceptual polarization-maintaining input fiber routing CW light from ELS to PIC; path length and bending radius are not design values.'
    },
    PIC_Optical_Engine: {
      layer: 'opticalEngine', label: 'PIC / Optical engine',
      ko: 'CW 입력광을 변조하여 데이터 신호를 생성하는 PIC 기반 광엔진입니다. Switch ASIC/EIC의 전기 신호가 변조기에 입력되는 송신 경로를 도식화했습니다. 형상은 교육용 개념 모델입니다.',
      en: 'Concept PIC optical engine. Modulates CW light using electrical signals from the switch ASIC/EIC; this is a teaching model.'
    },
    FAU_Optical_Link: {
      layer: 'fau', label: 'PIC → FAU (Tx output)',
      ko: 'PIC 변조광이 FAU/광결합부를 거쳐 광섬유 하네스로 나가는 송신 경로입니다. 기존 3D 팬아웃 CAD와 시각적으로만 연결한 교육용 경로로, 실제 부품 연결이나 광학 치수는 검증되지 않았습니다.',
      en: 'Concept optical output link from PIC via FAU toward the fiber harness. This graphical connection does not validate actual CAD connectivity.'
    }
  };

  function injectStyles() {
    if (S('#cpoEls3dStyles')) return;
    var style = document.createElement('style');
    style.id = 'cpoEls3dStyles';
    style.textContent =
      '.cpo-els-controls{display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin:9px 0 12px;padding:10px 12px;border:1px solid #9ec3d9;background:#eef7fc;border-radius:10px;color:#244c63;font:600 12px/1.5 system-ui,sans-serif}' +
      '.cpo-els-controls button{border:1px solid #1d81ad;border-radius:8px;padding:7px 12px;min-height:36px;font:750 12px system-ui;cursor:pointer;background:#146f96;color:white}' +
      '.cpo-els-controls button[aria-pressed="false"]{background:#e3eff4;color:#32627a;border-color:#a3bfcc}' +
      '.cpo-els-controls strong{color:#114a75}.cpo-els-controls small{flex:1 1 230px;font-weight:500;color:#42667a}' +
      '.cpo-els-3d-pin{position:absolute;z-index:30;left:50%;top:50%;transform:translate(-50%,-160%);border:2px solid #fff0b4;border-radius:9px;padding:7px 10px;background:#a14c06;color:#fff;font:900 12px/1.1 system-ui;white-space:nowrap;box-shadow:0 3px 13px #0008;pointer-events:auto;cursor:pointer}' +
      '.cpo-els-3d-pin:hover,.cpo-els-3d-pin:focus-visible{background:#bf6508;outline:3px solid #ffcf76;outline-offset:2px}' +
      '.cpo-els-3d-pin[hidden],.cpo-els-controls[hidden]{display:none!important}' +
      '[data-view-panel="fauCad"] .cpo-els-disclaimer{font-size:11px;color:#5e7281;margin:0 2px 8px;line-height:1.45}' +
      '@media(max-width:650px){.cpo-els-controls{padding:8px;font-size:11px}.cpo-els-controls button{min-height:40px}.cpo-els-3d-pin{font-size:10px;padding:6px 8px}}' +
      'html[data-theme="dark"] .cpo-els-controls{background:#19344b;border-color:#477089;color:#c4e0f1}' +
      'html[data-theme="dark"] .cpo-els-controls small,html[data-theme="dark"] .cpo-els-controls strong{color:#c4e0f1}';
    document.head.appendChild(style);
  }

  function initExtension(state) {
    if (state.__elsExtensionReady || !state.scene || !state.byKey || !window.THREE) return;
    state.__elsExtensionReady = true;
    injectStyles();
    var THREE = window.THREE;
    var tab = S('[data-view-panel="fauCad"]');
    var stage = S('#fauCadStage');
    var strip = S('#cadPartButtons');
    if (!tab || !stage || !strip) return;

    var accessory = new THREE.Group();
    accessory.name = 'Concept ELS + PMF + PIC (not uploaded CAD)';
    state.scene.add(accessory);
    var materials = {
      laser: new THREE.MeshStandardMaterial({color:0xb46510,metalness:.58,roughness:.3,emissive:0x000000}),
      face: new THREE.MeshStandardMaterial({color:0x26394d,metalness:.5,roughness:.33,emissive:0x000000}),
      gold: new THREE.MeshStandardMaterial({color:0xe9be66,metalness:.52,roughness:.36,emissive:0x000000}),
      pmf: new THREE.MeshStandardMaterial({color:0xf4a622,roughness:.5,emissive:0x000000}),
      pic: new THREE.MeshStandardMaterial({color:0x14669a,metalness:.42,roughness:.32,emissive:0x000000}),
      chip: new THREE.MeshStandardMaterial({color:0x49b8db,metalness:.18,roughness:.4,emissive:0x000000}),
      output: new THREE.MeshStandardMaterial({color:0x18af9c,roughness:.5,emissive:0x000000})
    };
    function register(key,mesh) {
      // Each selectable part gets its own material so highlights do not leak across groups.
      mesh.material = mesh.material.clone();
      mesh.userData.cadKey = key;
      mesh.userData.elsConcept = true;
      mesh.userData.basePosition = mesh.position.clone();
      mesh.userData.explodeOffset = new THREE.Vector3(0,0,0);
      mesh.castShadow = true;
      mesh.receiveShadow = true;
      state.objects.push(mesh);
      (state.byKey[key] || (state.byKey[key] = [])).push(mesh);
      accessory.add(mesh);
      return mesh;
    }
    function box(key,size,pos,material) {
      var m = new THREE.Mesh(new THREE.BoxGeometry(size[0],size[1],size[2]),material);
      m.position.set(pos[0],pos[1],pos[2]);
      return register(key,m);
    }
    function cylinder(key,start,end,radius,material) {
      var a = new THREE.Vector3(start[0],start[1],start[2]);
      var b = new THREE.Vector3(end[0],end[1],end[2]);
      var m = new THREE.Mesh(new THREE.CylinderGeometry(radius,radius,a.distanceTo(b),16),material);
      m.position.copy(a.clone().add(b).multiplyScalar(.5));
      m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),b.clone().sub(a).normalize());
      return register(key,m);
    }
    function tube(key,pts,radius,material) {
      var path = new THREE.CatmullRomCurve3(pts.map(function(p){return new THREE.Vector3(p[0],p[1],p[2]);}));
      return register(key,new THREE.Mesh(new THREE.TubeGeometry(path,64,radius,9,false),material));
    }

    // The ELS is OUTSIDE the PIC/CPO package; coordinates are illustrative only.
    box('External_Laser_Source',[70,40,24],[147,-171,27],materials.laser);
    box('External_Laser_Source',[9,33,18],[110,-171,27],materials.face);
    box('External_Laser_Source',[30,24,1.8],[150,-191.7,28],materials.gold);
    cylinder('External_Laser_Source',[104,-171,27],[110,-171,27],5.2,materials.gold);
    cylinder('External_Laser_Source',[97,-171,27],[104,-171,27],2.8,materials.face);
    cylinder('External_Laser_Source',[186,-171,26],[192,-171,26],5.2,materials.face);

    var cwPoints = [[97,-171,27],[73,-175,27],[49,-156,27],[24,-144,25],[13,-144,25]];
    tube('PMF_Input_Link',cwPoints,1.55,materials.pmf);
    cylinder('PMF_Input_Link',[13,-144,25],[17,-144,25],4.2,materials.gold);

    // PIC and output path are a visually adjacent conceptual signal-flow segment.
    box('PIC_Optical_Engine',[49,32,16],[-8,-144,24],materials.pic);
    box('PIC_Optical_Engine',[29,23,3],[-8,-144,33.5],materials.chip);
    box('PIC_Optical_Engine',[15,7,2],[-10,-144,36],materials.gold);
    cylinder('PIC_Optical_Engine',[-35,-144,24],[-32,-144,24],3.9,materials.face);

    var txPoints = [[-35,-144,24],[-52,-128,23],[-72,-94,20],[-92,-63,12],[-116,-44,3]];
    tube('FAU_Optical_Link',txPoints,1.5,materials.output);
    cylinder('FAU_Optical_Link',[-116,-44,3],[-121,-44,3],3.5,materials.face);

    Object.keys(labels).forEach(function(key){
      if(window.cadPartCatalog)window.cadPartCatalog[key]=labels[key];
      if(S('#cadPartButtons [data-cad-key="' + key + '"]'))return;
      var btn=document.createElement('button');
      btn.type='button';btn.className='cad3d-part-btn';
      btn.setAttribute('data-cad-key',key);
      btn.textContent=labels[key].label;
      btn.addEventListener('click',function(){select(key);});
      strip.appendChild(btn);
    });

    var controls = document.createElement('div');
    controls.className='cpo-els-controls';
    controls.id='cpoEls3dControls';
    controls.innerHTML = '<strong>v2.17.8 · ELS · Laser 3D 추가</strong><button type="button" id="cpoElsShow" aria-pressed="true">ELS/PMF 표시: 켬</button>' +
      '<button type="button" id="cpoElsRun" aria-pressed="false">▶ 레이저 광경로</button>' +
      '<small id="cpoElsStatus" aria-live="polite">CW 레이저 → PMF → PIC 광엔진 → FAU / 광하네스</small>';
    strip.parentNode.insertBefore(controls,strip);
    var disclaimer=document.createElement('p');
    disclaimer.className='cpo-els-disclaimer';
    disclaimer.textContent='※ 주황색 ELS·PMF 및 청색 PIC·출력 경로는 2D 설명을 보완하는 교육용 3D 개념 모델입니다. 업로드된 fan-out CAD 원본에 없는 부품이며 실제 광학 배치·치수·호환성은 검증되지 않았습니다.';
    controls.parentNode.insertBefore(disclaimer,strip);

    var overlay = S('#cpoCadPins') || stage;
    var pin = document.createElement('button');
    pin.type='button';pin.id='cpoEls3dPin';pin.className='cpo-els-3d-pin';
    pin.setAttribute('aria-label','ELS / CW Laser 3D 부품 설명');
    pin.textContent='ELS · 레이저';
    overlay.appendChild(pin);
    var visible = true, playing = false, raf = 0;
    var status = S('#cpoElsStatus');
    var pathPts = cwPoints.concat(txPoints);
    var path = new THREE.CatmullRomCurve3(pathPts.map(function(p){return new THREE.Vector3(p[0],p[1],p[2]);}));
    var pulse = new THREE.Mesh(new THREE.SphereGeometry(4.4,18,12),
      new THREE.MeshBasicMaterial({color:0xffe28c,transparent:true,opacity:.95,depthTest:false}));
    pulse.visible = false;
    pulse.renderOrder=12;
    state.scene.add(pulse);
    var reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    function select(key) {
      if(typeof window.showCadPartInfo==='function')window.showCadPartInfo(key);
      else if(status)status.textContent=labels[key].ko;
    }
    pin.addEventListener('click',function(){select('External_Laser_Source');});
    function stop() {
      playing=false;pulse.visible=false;
      if(raf)window.cancelAnimationFrame(raf);
      raf=0;S('#cpoElsRun').setAttribute('aria-pressed','false');
      S('#cpoElsRun').textContent='▶ 레이저 광경로';
    }
    function animate(ts) {
      if(!playing)return;
      if(document.hidden||!tab.classList.contains('active')){stop();return;}
      var progress=(ts%7200)/7200;
      pulse.position.copy(path.getPoint(progress));
      pulse.material.color.setHex(progress<.52?0xffe28c:0x6cffe1);
      pulse.visible=true;
      if(status)status.textContent=progress<.52?'ELS CW 광 → PMF → PIC 입력':'PIC 변조광 → FAU / 광섬유 하네스';
      raf=window.requestAnimationFrame(animate);
    }
    S('#cpoElsRun').addEventListener('click',function(){
      if(playing){stop();return;}
      if(!visible){visible=true;accessory.visible=true;S('#cpoElsShow').setAttribute('aria-pressed','true');S('#cpoElsShow').textContent='ELS/PMF 표시: 켬';}
      if(reduced){
        if(status)status.textContent='움직임 줄이기 설정: ELS → PMF → PIC → FAU 경로를 고정 표시합니다.';
        return;
      }
      playing=true;S('#cpoElsRun').setAttribute('aria-pressed','true');
      S('#cpoElsRun').textContent='■ 애니메이션 정지';
      raf=window.requestAnimationFrame(animate);
    });
    S('#cpoElsShow').addEventListener('click',function(){
      visible=!visible;accessory.visible=visible;
      if(!visible)stop();
      this.setAttribute('aria-pressed',String(visible));
      this.textContent=visible?'ELS/PMF 표시: 켬':'ELS/PMF 표시: 끔';
      if(status)status.textContent=visible?'CW 레이저 → PMF → PIC 광엔진 → FAU / 광하네스':'추가 교육용 ELS·PMF·PIC 모델 숨김 (기존 CAD 유지)';
    });
    document.addEventListener('visibilitychange',function(){if(document.hidden)stop();});
    var lastPin=0;
    function updatePin(ts) {
      window.requestAnimationFrame(updatePin);
      if(ts-lastPin<90)return;lastPin=ts;
      var active=visible&&tab.classList.contains('active')&&!document.hidden;
      if(!active){pin.hidden=true;return;}
      var camera=state.activeCamera||state.camera;
      if(!camera){pin.hidden=true;return;}
      var rect=stage.getBoundingClientRect();
      if(rect.width<1||rect.height<1){pin.hidden=true;return;}
      state.scene.updateMatrixWorld(true);
      camera.updateMatrixWorld();
      var screen=new THREE.Vector3(147,-171,44).project(camera);
      var x=(screen.x+1)*.5*rect.width,y=(1-screen.y)*.5*rect.height;
      pin.hidden=screen.z>1||screen.z< -1||x<68||x>rect.width-68||y<40||y>rect.height-35;
      if(!pin.hidden){pin.style.left=x.toFixed(1)+'px';pin.style.top=y.toFixed(1)+'px';}
    }
    window.requestAnimationFrame(updatePin);
  }

  function boot() {
    var stage = S('#fauCadStage');
    if (!stage) return;
    var observer = new MutationObserver(function(){
      var state=window.fauCadState;
      if(state&&state.ready){observer.disconnect();initExtension(state);}
    });
    observer.observe(S('[data-view-panel="fauCad"]')||stage,{attributes:true,attributeFilter:['class'],subtree:true});
    var timer=window.setInterval(function(){
      var state=window.fauCadState;
      if(state&&state.ready){window.clearInterval(timer);observer.disconnect();initExtension(state);}
    },350);
    var state=window.fauCadState;
    if(state&&state.ready){window.clearInterval(timer);observer.disconnect();initExtension(state);}
  }
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',boot,{once:true});
  else boot();
})();