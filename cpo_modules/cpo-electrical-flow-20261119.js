/* CPO Supply Chain v2.17.16 · 2026-11-19
   Interactive electrical data, optical signal, CW laser, and DC supply path animations.
   All paths are educational illustrations, not real layout/netlist or speed simulation.
   This module enhances cpo-expansion-20261118.js without modifying its part-picking logic.
*/
(function(){
'use strict';
if(window.__cpoElectricalFlow20261119)return;
window.__cpoElectricalFlow20261119=true;
var doc=document,states={},raf=0,reduced=window.matchMedia&&window.matchMedia('(prefers-reduced-motion: reduce)').matches;
var colors={data:0xff8052,light:0x22dcff,cw:0xffd65a,power:0xbc83ff};
var $=function(s,r){return (r||doc).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||doc).querySelectorAll(s))};

var css=doc.createElement('style');css.id='cpoElectricalFlowStyles';
css.textContent='.cpo-flow-panel{margin:12px 0;padding:11px;border-radius:13px;border:1px solid #bfd8e9;background:#eff7fd;color:#244967;line-height:1.55;font-size:12px}' +
'.cpo-flow-panel>strong{display:block;margin-bottom:9px;font-size:14px;color:#183c60}' +
'.cpo-flow-actions{display:flex;flex-wrap:wrap;gap:7px;margin:8px 0}' +
'.cpo-flow-actions button{min-height:37px;cursor:pointer;background:#fff;color:#245478;border:1px solid #aac9df;border-radius:9px;padding:7px 10px;font-weight:730;font-size:12px}' +
'.cpo-flow-actions button[aria-pressed="true"]{background:#145c9b;color:#fff;border-color:#145c9b}' +
'.cpo-flow-status{margin:9px 0 5px;font-size:12px;color:#3c5e78;min-height:32px}' +
'.cpo-flow-legend{display:flex;flex-wrap:wrap;gap:8px 14px;color:#35536a;font-size:11px}' +
'.cpo-flow-legend span{display:inline-flex;gap:5px;align-items:center}' +
'.cpo-flow-legend i{display:inline-block;width:10px;height:10px;border-radius:50%}' +
'.cpo-flow-explain{font-size:11px;color:#647a8c;margin-top:6px}' +
'html[data-theme="dark"] .cpo-flow-panel{background:#172d43;color:#eaf5ff;border-color:#466987}' +
'html[data-theme="dark"] .cpo-flow-panel>strong,html[data-theme="dark"] .cpo-flow-status,html[data-theme="dark"] .cpo-flow-legend{color:#ecf6ff}' +
'@media(max-width:700px){.cpo-flow-actions button{font-size:12px;min-height:40px}}';
doc.head.appendChild(css);

function toolbar(kind){
 var box=doc.createElement('div');box.className='cpo-flow-panel';box.id='cpoFlow'+kind;
 var dir=kind==='pro'?'<div class="cpo-flow-actions" role="group" aria-label="신호 방향"><button data-flow-action="direction" data-value="tx" aria-pressed="true">송신 TX</button><button data-flow-action="direction" data-value="rx" aria-pressed="false">수신 RX</button></div>':'';
 var filters=kind==='pro'?
 '<button data-flow-action="filter" data-value="all" aria-pressed="true">전체</button><button data-flow-action="filter" data-value="signal" aria-pressed="false">데이터 경로</button><button data-flow-action="filter" data-value="power" aria-pressed="false">전원 경로</button><button data-flow-action="filter" data-value="laser" aria-pressed="false">CW 레이저</button>':
 '<button data-flow-action="filter" data-value="all" aria-pressed="true">신호 + 전원</button><button data-flow-action="filter" data-value="signal" aria-pressed="false">데이터 경로</button><button data-flow-action="filter" data-value="power" aria-pressed="false">전원 경로</button>';
 var legend='<div class="cpo-flow-legend"><span><i style="background:#ff8052"></i>전기 데이터</span>'+
 (kind==='pro'?'<span><i style="background:#22dcff"></i>광 데이터</span><span><i style="background:#ffd65a"></i>ELS 연속파(CW)</span>':'')+
 '<span><i style="background:#bc83ff"></i>DC 전원</span></div>';
 box.innerHTML='<strong>'+(kind==='pro'?'CPO 데이터·전원·광신호 흐름':'반도체 패키징 데이터·전원 경로')+'</strong>'+dir+
 '<div class="cpo-flow-actions" role="group" aria-label="흐름 종류">'+filters+'</div>'+
 '<div class="cpo-flow-actions"><button data-flow-action="play" aria-pressed="false">▶ 애니메이션 재생</button><button data-flow-action="speed">속도 ×1</button></div>'+
 legend+'<p class="cpo-flow-status" aria-live="polite"></p><div class="cpo-flow-explain">색상·경로·입자 속도는 교육용 개념 표현입니다. 실제 전압·전류·대역폭·패키지 배선 길이를 뜻하지 않습니다.</div>';
 return box;
}
function setupPanels(){
 var one=$('#cpoNov18ProPicker'),two=$('#cpoNov18PackPicker');
 if(one&&!$('#cpoFlowpro'))one.parentNode.insertBefore(toolbar('pro'),one);
 if(two&&!$('#cpoFlowpack'))two.parentNode.insertBefore(toolbar('pack'),two);
}
function description(s){
 if(s.kind==='pro'){
  if(s.direction==='rx')return '수신: 광섬유(광 데이터) → 광엔진의 광검출기/TIA → 전기 데이터 → Switch ASIC. 일반적인 직접검출 수신 경로에서는 ELS 광이 필요하지 않습니다.';
  return '송신: Switch ASIC(전기 데이터) → 광엔진에서 CW 빛을 변조 → FAU·광섬유(광 데이터). ELS는 PM fiber를 통해 CW 광을 공급합니다.';
 }
 if(s.mode==='25d')return '2.5D: ASIC·칩렛 사이 데이터는 인터포저의 수평 배선을 이용합니다. 전원은 하부 패키지를 통해 각 다이에 공급됩니다.';
 if(s.mode==='tsv')return '3D TSV: 다이 내부 TSV와 다이 사이 Micro-bump 접점이 함께 수직 전기 경로를 구성합니다. 데이터와 전원은 별도 네트로 가정했습니다.';
 if(s.mode==='hybrid')return '3D Hybrid Bonding: 인접 다이는 Cu 직접 접합 패드로 연결됩니다.'+(s.withTsv?' TSV도 함께 사용하여 상하 다이 관통 전기 경로를 표시합니다.':' TSV를 끈 상태에서는 인접 다이 접합 계면만 표시합니다.');
 return '2D: 두 다이가 기판 배선으로 전기 데이터를 교환합니다. 전원(DC)은 기판의 다른 배선 경로를 통해 공급됩니다.';
}
function updateStatus(s){
 var p=$('.cpo-flow-status',s.host);if(!p)return;
 p.textContent=description(s)+(s.exploded?' 부품 분해 보기 중에는 경로 위치가 달라지므로 애니메이션을 숨깁니다.':'');
}
function applyVisibility(s){
 s.root.visible=!s.exploded;
 s.paths.forEach(function(p){
  var show=s.filter==='all'||s.filter==='power'&&p.type==='power'||
    s.filter==='laser'&&p.type==='cw'||
    s.filter==='signal'&&(p.type==='data'||p.type==='light'||p.type==='cw');
  p.line.visible=show;
  p.dots.forEach(function(x){x.visible=show});
 });
}
function clear(s){
 while(s.root.children.length){
  var obj=s.root.children[0];s.root.remove(obj);
  obj.traverse(function(n){if(n.geometry)n.geometry.dispose();if(n.material)n.material.dispose()});
 }
 s.paths=[];
}
function add(s,type,points,phase){
 var T=s.ctx.T, curve=new T.CatmullRomCurve3(points.map(function(v){return new T.Vector3(v[0],v[1],v[2])}));
 var tube=new T.Mesh(new T.TubeGeometry(curve,54,.067,7,false),new T.MeshBasicMaterial({color:colors[type],transparent:true,opacity:.68,depthWrite:false,depthTest:false}));
 tube.renderOrder=14;s.root.add(tube);
 var dots=[];for(var i=0;i<3;i++){
  var dot=new T.Mesh(new T.SphereGeometry(.21,12,8),new T.MeshBasicMaterial({color:colors[type],depthTest:false,depthWrite:false}));
  dot.renderOrder=15;s.root.add(dot);dots.push(dot);
 }
 s.paths.push({type:type,curve:curve,line:tube,dots:dots,phase:phase||0});
}
function build(s){
 clear(s);
 if(s.kind==='pro'){
  if(s.direction==='tx'){
   add(s,'data',[[0,2.36,0],[-2.1,2.42,.2],[-5,2.16,0],[-7.6,1.69,0]],.04);
   add(s,'light',[[-7.6,1.75,0],[-8.6,2.75,-2.9],[-8.0,2.4,-5.7],[-6.7,1.58,-8.08]],.29);
   add(s,'cw',[[-7.9,2.64,-5.4],[-9.4,3.04,-3.4],[-9.1,2.7,-1.1],[-7.6,1.7,0]],.52);
  }else{
   add(s,'light',[[-6.7,1.58,-8.08],[-8.0,2.4,-5.7],[-8.6,2.75,-2.9],[-7.6,1.75,0]],.04);
   add(s,'data',[[-7.6,1.69,0],[-5,2.16,0],[-2.1,2.42,.2],[0,2.36,0]],.36);
  }
  add(s,'power',[[11,.64,5.6],[7,.66,4.0],[3,.7,3],[0,1.7,0]],.06);
  add(s,'power',[[-11,.64,5.6],[-8,.7,3.8],[-7.6,1.3,0]],.45);
  add(s,'power',[[-11,.7,-5.4],[-9,.75,-5.4],[-7.9,1.52,-5.4]],.66);
 }else if(s.mode==='2d'){
  add(s,'data',[[-3.5,1.95,0],[-3,1.1,0],[-2.7,.57,0],[2.7,.57,0],[3,1.1,0],[3.5,1.95,0]],.04);
  add(s,'power',[[-7.5,.66,4],[-5.7,.65,2],[-3.5,1.8,0]],.25);
  add(s,'power',[[7.5,.66,4],[5.7,.65,2],[3.5,1.8,0]],.64);
 }else if(s.mode==='25d'){
  add(s,'data',[[2.65,2.25,0],[2.65,1.15,0],[0,1.15,0],[-3.5,1.15,0],[-3.5,1.98,0]],.04);
  add(s,'power',[[7.5,.65,4],[6,1.07,2],[2.65,2.23,0]],.3);
  add(s,'power',[[-7.5,.65,4],[-6,1.07,2],[-3.5,1.98,0]],.67);
 }else if(s.mode==='tsv'){
  add(s,'data',[[-3.7,.65,-2.2],[-3.7,1.35,-2.2],[-3.7,1.99,-2.2],[-3.7,2.63,-2.2],[-3.7,3.27,-2.2],[-3.7,3.91,-2.2]],.08);
  add(s,'power',[[3.7,.65,2.2],[3.7,1.35,2.2],[3.7,1.99,2.2],[3.7,2.63,2.2],[3.7,3.27,2.2],[3.7,3.91,2.2]],.52);
 }else{
  var end=s.withTsv?3.91:2.63;
  add(s,'data',[[0,1.35,0],[0,1.75,0],[0,1.95,0],[0,end,0]],.09);
  add(s,'power',[[2,1.35,1.75],[2,1.75,1.75],[2,1.95,1.75],[2,end,1.75]],.56);
 }
 applyVisibility(s);updateStatus(s);position(s);
}
function position(s){
 s.paths.forEach(function(p){p.dots.forEach(function(dot,i){dot.position.copy(p.curve.getPointAt((s.elapsed*.23+p.phase+i/3)%1))})});
}
function refreshButtons(s){
 $$('button[data-flow-action]',s.host).forEach(function(b){
  var a=b.getAttribute('data-flow-action'),v=b.getAttribute('data-value');
  if(a==='direction')b.setAttribute('aria-pressed',String(s.direction===v));
  if(a==='filter')b.setAttribute('aria-pressed',String(s.filter===v));
  if(a==='play'){b.textContent=s.playing?'⏸ 일시정지':'▶ 애니메이션 재생';b.setAttribute('aria-pressed',String(s.playing))}
  if(a==='speed')b.textContent='속도 ×'+s.speed;
 });
}
function newState(kind,ctx){
 var T=ctx.T,host=$('#cpoFlow'+kind),root=new T.Group();root.name='Animated optical and electrical pathways (concept)';ctx.scene.add(root);
 var state={kind:kind,ctx:ctx,host:host,root:root,paths:[],filter:'all',direction:'tx',mode:'2d',withTsv:false,exploded:false,playing:!reduced,speed:1,elapsed:0,last:0};
 host.addEventListener('click',function(ev){
  var b=ev.target.closest('button[data-flow-action]');if(!b||!host.contains(b))return;
  var action=b.getAttribute('data-flow-action'),v=b.getAttribute('data-value');
  if(action==='play'){state.playing=!state.playing;state.last=0}
  else if(action==='speed'){state.speed=state.speed===1?2:state.speed===2?.5:1}
  else if(action==='filter'){state.filter=v;applyVisibility(state)}
  else if(action==='direction'){state.direction=v;build(state)}
  refreshButtons(state);schedule();
 });
 if(kind==='pack')readPack(state);
 build(state);refreshButtons(state);return state;
}
function readPack(s){
 var b=$('#cpoNov18PackModes button.active');
 s.mode=b?b.getAttribute('data-mode'):'2d';
 s.withTsv=$('#cpoNov18HybridTsv')&&$('#cpoNov18HybridTsv').getAttribute('aria-pressed')==='true';
}
function getContexts(){return window.__cpoFlow3dContexts||{}}
function ensure(kind){
 setupPanels();
 var ctx=getContexts()[kind],host=$('#cpoFlow'+kind);
 if(!ctx||!host)return null;
 if(states[kind]&&states[kind].ctx===ctx)return states[kind];
 if(states[kind]&&states[kind].root)states[kind].ctx.scene.remove(states[kind].root);
 states[kind]=newState(kind,ctx);schedule();return states[kind];
}
function active(kind){var panel=$('[data-view-panel="'+(kind==='pro'?'cpoPro':'cpoPackaging')+'"]');return panel&&panel.classList.contains('active')}
function tick(now){
 raf=0;
 var any=false;
 ['pro','pack'].forEach(function(kind){
  var s=states[kind];if(!s||!s.playing||s.exploded||!active(kind)||doc.hidden){if(s)s.last=0;return}
  if(s.last)s.elapsed+=Math.min(.06,Math.max(0,(now-s.last)/1000))*s.speed;
  s.last=now;position(s);any=true;
 });
 if(any)schedule();
}
function schedule(){if(raf||!Object.keys(states).some(function(k){return states[k].playing&&!states[k].exploded&&active(k)}))return;raf=requestAnimationFrame(tick)}
function syncOnClick(ev){
 var target=ev.target;if(!target||!target.closest)return;
 var b=target.closest('button');if(!b)return;
 var id=b.id||'';
 if(id==='viewTabCpoPro'||id==='viewTabCpoPackaging'){
  setTimeout(function(){var s=ensure(id==='viewTabCpoPro'?'pro':'pack');if(s){s.last=0;schedule()}},0);return;
 }
 if(b.closest('#cpoNov18PackModes')||id==='cpoNov18HybridTsv'||id==='cpoNov18PackExplode'){
  setTimeout(function(){var s=ensure('pack');if(!s)return;readPack(s);s.exploded=$('#cpoNov18PackExplode')&&$('#cpoNov18PackExplode').getAttribute('aria-pressed')==='true';build(s);s.last=0;schedule()},0);
 }else if(id==='cpoNov18ProExplode'){
  setTimeout(function(){var s=ensure('pro');if(!s)return;s.exploded=$('#cpoNov18ProExplode')&&$('#cpoNov18ProExplode').getAttribute('aria-pressed')==='true';applyVisibility(s);updateStatus(s);s.last=0;schedule()},0);
 }
}
function init(){setupPanels();doc.addEventListener('click',syncOnClick);doc.addEventListener('visibilitychange',function(){Object.keys(states).forEach(function(k){states[k].last=0});schedule()})}
if(doc.readyState==='loading')doc.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();