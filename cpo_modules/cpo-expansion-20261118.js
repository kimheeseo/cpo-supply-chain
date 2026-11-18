/* CPO Supply Chain extension · 2026-11-18
   Additive: original 2D/3D/CAD and existing vendor data remain intact.
   Interactive educational Three.js geometry; not a manufacturable CAD model.
*/
(function(){
'use strict';
if(window.__cpoNov18Expansion)return;
window.__cpoNov18Expansion=true;
var DATA_CHECKED='2026-11-18';
var RELEASE_DATE='2026-11-19';
var domestic=[
 {company:'오이솔루션 (OE Solutions)',category:'외부광원 / ELS',product:'23 dBm O-band cooled ELSFP (200 mW/ch)',status:'샘플링 발표',evidence:'제조사 공식 보도자료',detail:'2026년 3분기 샘플 공급 개시 계획 발표. 양산 완료 또는 CPO 탑재 확정으로 해석하지 않음.',url:'https://oesolutions.com/ko/oe-solutions-announces-23dbm-ultra-high-power-cooled-elsfp-sampling-begins-q3-2026/'},
 {company:'에이치씨앤지 (HC&G)',category:'광결합 / PIC–fiber',product:'X-BRIDGE optical coupler',status:'개발 중',evidence:'제조사 공식 보도자료',detail:'CPO의 PIC–광섬유 간 수동 광결합부 개발 및 특허 관련 발표. 양산 사양 미공개.',url:'https://hcng.co.kr/kr/sub/media/media.php?bid=4&idx=108&mode=view'},
 {company:'ADST / 글로벌테크놀로지',category:'광조립·본딩 공정',product:'CPO 광정렬용 UV 경화 광원 공동개발',status:'공동개발 발표',evidence:'언론 보도',detail:'광정렬 장비용 UV 경화 광원 공동개발 발표. 출시·납품·양산 실적은 별도 확인 필요.',url:'https://www.etnews.com/20261012000252'},
 {company:'레이저앱스',category:'광도파로 / 공정',product:'CPO 광도파로 초정밀 레이저 가공',status:'기술개발 발표',evidence:'언론 보도',detail:'저손실 광도파로 가공 연구 성과 보도. 양산 제품 인증과 구분.',url:'https://m.etnews.com/20261027000067'},
 {company:'인옵틱스',category:'2.5D 광패키징',product:'유리 기반 광·전 통합 패키징 플랫폼 (GOFOP)',status:'개발·사업화 추진',evidence:'기업 인터뷰',detail:'2.5D 패키징에 적용하려는 유리 기반 광전통합 공정 플랫폼. 양산 CPO 제품으로 단정하지 않음.',url:'https://magazine.hankyung.com/job-joy/article/202607217933d'},
 {company:'우리로 / 한국첨단소재',category:'수동 광소자',product:'CWDM AWG / PLC 기반 AWG·광분배기',status:'인접 공급망',evidence:'언론 보도',detail:'데이터센터용 파장분할 부품. 특정 CPO 제품과의 적합성·납품 여부는 확인 필요.',url:'https://www.etnews.com/20261026000181'}
];
var channels=[
 {company:'Coherent',route:'한국 내 공식 거점',name:'Coherent Seoul',product:'광소자·광학부품 문의',basis:'제조사 공식 Location',url:'https://www.coherent.com/company/locations/apac/korea/coherent-seoul',note:'국내 사업장 확인; CPO 특정 SKU 재고·국내 대리점 자격은 미확인'},
 {company:'Corning',route:'한국 법인 + 공식 유통망',name:'한국코닝 / 공식 광통신 Distributor 명단',product:'광섬유·광접속',basis:'제조사 Distributor 안내',url:'https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html',note:'광통신 제품 유통망이며 CPO 부품 유통 승인 자체를 의미하지 않음'},
 {company:'Furukawa Electric',route:'한국 그룹 판매 법인',name:'Furukawa Sangyo Korea',product:'광섬유·광부품 문의',basis:'제조사 그룹 Sales Office',url:'https://www.furukawaelectric.com/en/company/group/salesoffice.html',note:'사업부별 취급 품목·제품별 공급 여부 확인 필요'},
 {company:'Sumitomo Electric',route:'한국 그룹 거점',name:'Sumitomo Electric (Korea) Electronics',product:'광섬유·광소재 문의',basis:'제조사 그룹 계열사 안내',url:'https://sumitomoelectric.com/company/office_group_companies/sumitomo-electric-korea-electronics-ltd',note:'공식 거점이나 광섬유 전 제품의 전담 총판이라고 단정하지 않음'},
 {company:'Amphenol',route:'한국 법인',name:'Amphenol Korea',product:'인터커넥트·커넥터',basis:'한국 공식 사이트',url:'https://www.amphenol.co.kr/',note:'CPO 전용 커넥터 제품별 판매 확인 필요'},
 {company:'Fujikura / DDK',route:'한국 유통사',name:'Mujin Electronics / Woo Shin Trading',product:'DDK 커넥터',basis:'제조사 Connector Distributor',url:'https://www.connector.fujikura.com/English/corprate_profile/world_text.html',note:'DDK 커넥터 유통 자격은 Fujikura 광섬유 공급 자격과 다름'},
 {company:'Molex',route:'한국 공식 유통 채널',name:'Molex 한국 Distributor 안내',product:'광·전기 인터커넥트',basis:'제조사 Distributor 안내',url:'https://www.molex.com/en-us/contact/molex-korea-distributors',note:'CPO 커넥터별 취급 여부 개별 문의'},
 {company:'SENKO',route:'한국 전담 채널 미확인',name:'SENKO 글로벌 공식 문의',product:'PIC Coupler·광커넥터',basis:'제조사 공식 Contact',url:'https://www.senko.com/contact/',note:'공식 자료에서 한국 전담 대리점을 확정하지 못함; 공식 문의 권장'},
 {company:'US Conec',route:'한국 전담 채널 미확인',name:'US Conec 제조사 문의',product:'MMC·MTP·광커넥터',basis:'제조사 공식 사이트',url:'https://www.usconec.com/about-us/company-overview',note:'공식 한국 대리점 정보를 별도 검증하지 못함'}
];
var $=function(s,r){return(r||document).querySelector(s)};
var $$=function(s,r){return Array.prototype.slice.call((r||document).querySelectorAll(s))};
function txt(x){return String(x==null?'':x).replace(/[&<>"']/g,function(c){return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;','\'':'&#39;'}[c]})}
var style=document.createElement('style');style.id='cpoNov18Style';style.textContent=`
#cpoNov18Directory{margin:20px 0;padding:22px;border:1px solid #d9e5f0;border-radius:18px;background:#f9fcff;color:#1c344d}
#cpoNov18Directory h2{font-size:22px;margin:6px 0}#cpoNov18Directory p{line-height:1.6;color:#4d647b}
.cpo-n18-pills{display:flex;gap:8px;flex-wrap:wrap;margin:14px 0}.cpo-n18-btn{padding:8px 13px;border-radius:10px;cursor:pointer;border:1px solid #afc9df;background:white;color:#244964;font-weight:750}
.cpo-n18-btn[aria-pressed="true"]{background:#163d61;border-color:#163d61;color:white}
.cpo-n18-rows{display:grid;gap:11px;grid-template-columns:repeat(auto-fit,minmax(min(100%,310px),1fr))}
.cpo-n18-entry{border:1px solid #d6e2ef;border-radius:13px;padding:14px;background:white;min-width:0}
.cpo-n18-entry h3{font-size:15px;margin:0 0 8px;color:#12304b}.cpo-n18-entry p{font-size:12px;margin:7px 0}
.cpo-n18-entry a{color:#086ab1;font-size:12px;font-weight:700;word-break:break-all}
.cpo-n18-meta{font-size:11px;color:#526980;margin-bottom:7px}.cpo-n18-status{font-size:11px;border-radius:50px;padding:3px 7px;background:#e9f2ff;color:#1d4f84;display:inline-block;margin-left:6px}
.cpo-n18-viewport{height:clamp(300px,48vw,520px);background:radial-gradient(ellipse at 60% 30%,#344e68 0,#101c2a 66%,#0a121b 100%);border-radius:14px;overflow:hidden;position:relative}
.cpo-n18-viewport canvas{display:block;width:100%;height:100%;touch-action:none;cursor:grab}
.cpo-n18-viewport canvas:active{cursor:grabbing}
.cpo-n18-fallback{color:#eff6ff;padding:25px;line-height:1.65;text-align:center}
.cpo-n18-view-heading{display:flex;gap:10px;align-items:center;flex-wrap:wrap;justify-content:space-between;margin:5px 0 14px}
.cpo-n18-view-heading h3{margin:0;font-size:19px}.cpo-n18-view-heading small{color:#62758a}
.cpo-n18-ui{padding:15px 5px;display:flex;align-items:center;gap:9px;flex-wrap:wrap}
.cpo-n18-ui button{background:#f1f6fd;border:1px solid #b7cfe2;color:#214b70;border-radius:8px;padding:9px 11px;font-weight:700;cursor:pointer}
.cpo-n18-ui button.active{background:#0b5da7;color:white;border-color:#0b5da7}
.cpo-n18-facts{display:grid;grid-template-columns:repeat(auto-fit,minmax(180px,1fr));gap:9px;margin-top:9px}
.cpo-n18-facts>div{background:#eef5fb;border:1px solid #d6e3ef;border-radius:10px;padding:10px;font-size:12px;color:#38556b;line-height:1.5}
.cpo-n18-facts b{color:#183d60}.cpo-n18-note{margin:10px 0;color:#576f85;font-size:12px;line-height:1.6}
.view-tab[data-view="cpoPro"],.view-tab[data-view="cpoPackaging"]{background:#ecf5ff;color:#155181}
.view-tab.active[data-view="cpoPro"],.view-tab.active[data-view="cpoPackaging"]{background:#0a5595;color:white}
@media(max-width:700px){#cpoNov18Directory{padding:13px}#cpoNov18Directory h2{font-size:19px}.cpo-n18-viewport{height:340px}.cpo-n18-ui button{font-size:12px;padding:8px}.view-tabs{flex-wrap:wrap}}
html[data-theme="dark"] #cpoNov18Directory{background:#152435;border-color:#38536a;color:#e7f3ff}
html[data-theme="dark"] .cpo-n18-entry,html[data-theme="dark"] .cpo-n18-facts>div{background:#21364b;color:#d8e9fa;border-color:#45647d}
html[data-theme="dark"] .cpo-n18-entry h3,html[data-theme="dark"] .cpo-n18-facts b{color:#fff}
.cpo-n18-picker{margin:12px 0 5px;padding:12px;border:1px solid #cadbec;background:#f4f9fe;border-radius:12px}
.cpo-n18-picker strong{display:block;font-size:13px;margin-bottom:9px;color:#15395b}
.cpo-n18-picker .cpo-n18-chips{display:flex;gap:7px;flex-wrap:wrap}
.cpo-n18-picker button{padding:8px 11px;border-radius:8px;background:white;border:1px solid #b4cedf;font-weight:650;color:#234e6f;cursor:pointer;font-size:12px;line-height:1.35}
.cpo-n18-picker button[aria-pressed="true"]{background:#0b5da7;color:white;border-color:#0b5da7}
.cpo-n18-inspector{margin:9px 0 10px;padding:14px;border:1px solid #bed6e8;background:#fff;border-radius:12px;min-height:66px;color:#213b55;font-size:13px;line-height:1.62}
.cpo-n18-inspector h4{font-size:17px;margin:0 0 7px;color:#173d5d}
.cpo-n18-inspector p{margin:5px 0}.cpo-n18-inspector a{color:#076eb5;font-weight:750}
.cpo-n18-inspector .cpo-n18-sub{font-size:11px;color:#60778b}
.cpo-n18-viewport canvas{cursor:crosshair}
html[data-theme="dark"] .cpo-n18-picker,html[data-theme="dark"] .cpo-n18-inspector{background:#1c3045;border-color:#42637f;color:#e2f2ff}
html[data-theme="dark"] .cpo-n18-inspector h4,html[data-theme="dark"] .cpo-n18-picker strong{color:#e9f5ff}
`;document.head.appendChild(style);
function init(){
 var tabs=$('.view-tabs'),existing=$('[data-view-panel="3d"]'),shell=tabs&&tabs.parentElement,arch=$('#architecture');
 if(!tabs||!existing||!shell||!arch||$('#cpoNov18Directory'))return;
 var badge=$('#buildBadge');if(badge)badge.textContent='v2.17.15 · '+RELEASE_DATE+' · CPO 3D / 패키징 / 국내 공급망';
 var button1=document.createElement('button');button1.type='button';button1.id='viewTabCpoPro';button1.className='view-tab';button1.setAttribute('data-view','cpoPro');button1.textContent='실사형 CPO 3D';
 var button2=document.createElement('button');button2.type='button';button2.id='viewTabCpoPackaging';button2.className='view-tab';button2.setAttribute('data-view','cpoPackaging');button2.textContent='2D·2.5D·3D 패키징';
 tabs.appendChild(button1);tabs.appendChild(button2);
 var pro=document.createElement('div');pro.className='view-panel';pro.setAttribute('data-view-panel','cpoPro');pro.innerHTML='<div class="cpo-n18-view-heading"><div><h3>실사형 CPO 보드 · 3D 개념 모델</h3><small>Switch ASIC · 광엔진 · ELS · PM fiber · FAU · 전면 커넥터</small></div><small>부품 터치: 설명 · 드래그: 회전 · 휠/핀치: 확대</small></div><div class="cpo-n18-viewport" id="cpoNov18ProScene"><div class="cpo-n18-fallback">3D 모델을 준비하는 중입니다.</div></div><div class="cpo-n18-picker" id="cpoNov18ProPicker"><strong>부품 선택 · 보드를 직접 터치하거나 아래 이름을 선택하세요.</strong><div class="cpo-n18-chips" data-picker-buttons="pro"></div></div><div class="cpo-n18-inspector" id="cpoNov18ProInspector" aria-live="polite">부품을 선택하면 기능·실제 제품 예시·제조사 링크가 표시됩니다.</div><div class="cpo-n18-ui"><button type="button" id="cpoNov18ProReset">기본 시점</button><button type="button" id="cpoNov18ProExplode" aria-pressed="false">부품 분해 보기</button><button type="button" id="cpoNov18ProFiber" aria-pressed="true">광섬유 표시: 켬</button></div><div class="cpo-n18-facts"><div><b>Switch ASIC</b><p>중심 패키지의 고속 데이터 처리 칩</p></div><div><b>Optical Engine</b><p>ASIC 전기 신호와 광섬유 사이의 광·전 변환</p></div><div><b>ELS / PMF</b><p>외부 광원에서 광엔진으로 빛 공급</p></div><div><b>FAU / Front connector</b><p>광엔진에서 전면 광접속부로 연결</p></div></div><p class="cpo-n18-note">※ 조립·광경로 이해를 위한 3D 예시입니다. 실제 CPO 제조사의 패키지 치수, ASIC 포트 배선, PIC 배치 및 광손실은 반영하지 않습니다.</p>';
 shell.appendChild(pro);
 var pack=document.createElement('div');pack.className='view-panel';pack.setAttribute('data-view-panel','cpoPackaging');
 pack.innerHTML='<div class="cpo-n18-view-heading"><div><h3>2D / 2.5D / 3D TSV / 3D Hybrid Bonding</h3><small>패키징 구조를 선택하고 3D 단면의 개별 부품을 터치해 확인</small></div><small>교육용 구조 비교 · 실제 제조 공정 스펙 아님</small></div><div class="cpo-n18-ui" id="cpoNov18PackModes"><button class="active" type="button" data-mode="2d">2D Package</button><button type="button" data-mode="25d">2.5D Interposer</button><button type="button" data-mode="tsv">3D TSV + Micro-bump</button><button type="button" data-mode="hybrid">3D Hybrid Bonding</button></div><div class="cpo-n18-viewport" id="cpoNov18PackScene"><div class="cpo-n18-fallback">패키징 3D 모델을 준비하는 중입니다.</div></div><div class="cpo-n18-picker" id="cpoNov18PackPicker"><strong>레이어·다이·TSV·본딩 접점을 직접 터치하거나 부품명을 선택하세요.</strong><div class="cpo-n18-chips" data-picker-buttons="pack"></div></div><div class="cpo-n18-inspector" id="cpoNov18PackInspector" aria-live="polite">부품을 선택하면 위치, 역할, 실제 적용 기술 예시가 표시됩니다.</div><div class="cpo-n18-ui"><button type="button" id="cpoNov18PackReset">기본 시점</button><button type="button" id="cpoNov18PackExplode" aria-pressed="false">분해 보기</button><button type="button" id="cpoNov18HybridTsv" aria-pressed="false">Hybrid에서 TSV 함께 보기: 끔</button></div><div id="cpoNov18PackText" class="cpo-n18-facts"></div><p class="cpo-n18-note"><b>분류 주의:</b> 2D·2.5D·3D는 집적 구조의 구분, TSV는 다이 내부 수직 관통전극, Die-to-Die는 접합 대상, Micro-bump/Hybrid Bonding은 접합 방식입니다. 따라서 TSV와 Hybrid Bonding은 함께 적용할 수도 있습니다.</p>';
 shell.appendChild(pack);
 function switchTab(key){
  if(pro3d && key!=='cpoPro')pro3d.ctx.pause();
  if(pack3d && key!=='cpoPackaging')pack3d.ctx.pause();
  $$('.view-tab',tabs).forEach(function(b){var active=b.getAttribute('data-view')===key;b.classList.toggle('active',active);b.setAttribute('aria-selected',String(active));});
  $$('.view-panel',shell).forEach(function(p){p.classList.toggle('active',p.getAttribute('data-view-panel')===key)});
 }
 button1.addEventListener('click',function(){switchTab('cpoPro');try{initPro()}catch(err){var box=$('#cpoNov18ProScene');if(box)box.innerHTML='<div class="cpo-n18-fallback">3D 렌더링에 오류가 발생했습니다. WebGL과 그래픽 드라이버를 확인해 주세요.</div>';console.error('CPO 3D init',err)}});
 button2.addEventListener('click',function(){switchTab('cpoPackaging');try{initPack()}catch(err){var box=$('#cpoNov18PackScene');if(box)box.innerHTML='<div class="cpo-n18-fallback">패키징 3D 렌더링에 오류가 발생했습니다. WebGL과 그래픽 드라이버를 확인해 주세요.</div>';console.error('CPO packaging init',err)}});
 var section=document.createElement('section');section.id='cpoNov18Directory';section.innerHTML='<div class="cpo-n18-meta">CPO SUPPLY CHAIN · 검토 기준일 '+DATA_CHECKED+'</div><h2>국내 CPO 공급망 · 해외 기업 국내 영업 채널</h2><p>제품 발표·개발·샘플·관련 공정 및 영업망을 구분했습니다. 과거 확인된 자료도 현재 공신력 있는 자료에 한해 표시하며, 제조사의 한국 법인 존재가 CPO 전용 제품의 공식 대리점 또는 재고 보유를 뜻하지 않습니다.</p><div class="cpo-n18-pills"><button class="cpo-n18-btn" type="button" data-kind="domestic" aria-pressed="true">국내 업체 / 제품 (6)</button><button class="cpo-n18-btn" type="button" data-kind="channel" aria-pressed="false">해외 업체 국내 채널 (9)</button></div><div id="cpoNov18Rows" class="cpo-n18-rows"></div><p class="cpo-n18-note">Source는 제조사 공식 자료 우선, 보도자료·언론은 별도 표기 · 제품별 국내 판매 권한과 실제 납품 가능 여부는 RFQ 확인 필요</p>';
 arch.insertAdjacentElement('afterend',section);
 var view='domestic',rows=$('#cpoNov18Rows');
 function renderRows(){var items=view==='domestic'?domestic:channels;rows.innerHTML=items.map(function(it){if(view==='domestic')return '<article class="cpo-n18-entry"><div class="cpo-n18-meta">'+txt(it.category)+' <span class="cpo-n18-status">'+txt(it.status)+'</span></div><h3>'+txt(it.company)+'</h3><b>'+txt(it.product)+'</b><p>'+txt(it.detail)+'</p><div class="cpo-n18-meta">'+txt(it.evidence)+'</div><a href="'+txt(it.url)+'" target="_blank" rel="noopener noreferrer">출처 확인 ↗</a></article>';return '<article class="cpo-n18-entry"><div class="cpo-n18-meta">'+txt(it.route)+'</div><h3>'+txt(it.company)+'</h3><b>'+txt(it.name)+'</b><p>'+txt(it.product)+' · '+txt(it.note)+'</p><div class="cpo-n18-meta">'+txt(it.basis)+'</div><a href="'+txt(it.url)+'" target="_blank" rel="noopener noreferrer">공식 채널 확인 ↗</a></article>'}).join('')}
 $$('.cpo-n18-btn',section).forEach(function(btn){btn.addEventListener('click',function(){view=btn.getAttribute('data-kind');$$('.cpo-n18-btn',section).forEach(function(b){b.setAttribute('aria-pressed',String(b===btn))});renderRows()})});renderRows();
 var pro3d=null,pack3d=null;

 // 클릭한 형상의 개념 이름과 공개 제품 예시를 연결합니다. 렌더링 모델은 특정 제조사 CAD가 아닙니다.
 var partCatalog={
  pro:{
   board:['패키지 기판 (Package substrate)','ASIC·광엔진·커넥터 등을 물리적으로 지지하고 전기 경로를 제공합니다.','CPO용 패키징 기판 · 도식화된 범용 부품','https://developer.nvidia.com/blog/how-industry-collaboration-fosters-nvidia-co-packaged-optics/'],
   trace:['패키지 배선 (Interconnect / Trace)','기판 또는 RDL의 금속 배선으로 칩 간 전원·고속 전기신호를 분배합니다.','고밀도 패키지 인터커넥트 · 개념 예시','https://developer.nvidia.com/blog/how-industry-collaboration-fosters-nvidia-co-packaged-optics/'],
   asic:['Switch ASIC','패킷 교환·라우팅을 담당하며 CPO 광엔진과 고속 전기 인터페이스로 연결됩니다.','NVIDIA Spectrum-X Ethernet Photonics 스위치 시스템 (해당 ASIC 실물 CAD는 아님)','https://www.nvidia.com/en-us/networking/spectrumx/'],
   oe:['광엔진 (Optical Engine)','광전 변환 회로·PIC와 전자회로를 포함하는 광엔진으로 CPO의 전기 신호를 광 신호로 변환하거나 역변환합니다.','NVIDIA Spectrum-X Ethernet Photonics 실리콘 포토닉스 엔진 · 기술 사례','https://developer.nvidia.com/blog/how-industry-collaboration-fosters-nvidia-co-packaged-optics/'],
   els:['외부 레이저 광원 (ELS)','패키지 외부에서 연속파(CW) 광을 만들고 광엔진에 공급합니다.','OE Solutions 23 dBm cooled O-band ELSFP (샘플링 발표)','https://oesolutions.com/blog/oe-solutions-announces-23dbm-ultra-high-power-cooled-elsfp-sampling-begins-q3-2026/'],
   pmf:['편광유지 광섬유 (PM fiber)','레이저 출력광의 편광을 유지하며 ELS에서 광엔진까지 공급합니다.','PMF 광원 공급 경로 · 단일 제조사 제품 지정 없음','https://developer.nvidia.com/blog/how-industry-collaboration-fosters-nvidia-co-packaged-optics/'],
   fiber:['광섬유 하네스 (Optical fiber)','광엔진에서 광접속부까지 다채널 광신호를 전달합니다.','CPO optical fiber harness · 개념 예시','https://www.nvidia.com/en-us/networking/spectrumx/'],
   fau:['광섬유 어레이 접속부 (FAU)','여러 가닥의 광섬유를 광엔진/PIC에 정렬·결합하는 광학 접속부입니다.','SENKO MPC / SEAT 등 PIC 결합 인터페이스 (구조 원리는 유사하나 CAD와 무관)','https://www.senko.com/mpc-series/'],
   connector:['전면 광커넥터 (Front connector)','장비 전면에서 광하네스를 착탈하도록 광 포트를 연결합니다.','MMC-16 계열 광접속 구조 · NVIDIA Spectrum-X 기술 사례','https://www.nvidia.com/en-us/networking/spectrumx/'],
   smd:['기판 소형 수동부품 (SMD)','전원 디커플링·종단·필터링 등에 쓰이는 소형 표면실장 소자입니다.','범용 SMD 저항·커패시터 · 특정 부품번호 미지정','']
  },
  pack:{
   board:['패키지 기판 (Package substrate)','인터포저·다이 및 신호·전원 배선을 지지하는 패키지 기반입니다.','TSMC 3DFabric 패키징 기술 참조','https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm'],
   trace:['기판 금속 배선 (Metal trace)','수평 전기 연결과 신호 경로를 형성하는 금속 배선입니다.','패키지 기판/RDL 개념 모델',''],
   dieA:['Die A / 칩 1','패키지 위에 실장한 첫 번째 칩입니다. 2D·2.5D에서는 인접 칩과 수평 연결할 수 있습니다.','ASIC 또는 로직 칩렛 예시 · 실물 모델 미지정','https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm'],
   dieB:['Die B / 칩 2','다른 기능을 담당하는 두 번째 반도체 칩으로, 수평 또는 수직으로 결합할 수 있습니다.','광엔진 칩렛 또는 메모리 칩렛 예시 · 실물 모델 미지정','https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm'],
   die:['적층 반도체 다이 (Stacked die)','실리콘 다이를 위아래로 쌓은 구조입니다. 다이 간 접속 방식과 관통전극은 별개입니다.','3D IC 스태킹 · TSMC SoIC 기술 사례','https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/SoIC_inDepth.htm'],
   interposer:['인터포저 (Interposer)','여러 다이 사이에서 고밀도 수평 배선을 제공하는 중간 기판입니다. TSV 적용 여부는 구조에 따라 달라집니다.','CoWoS 계열 실리콘 인터포저의 개념 예시','https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/3DFabric.htm'],
   bump:['접속용 금속 범프 (Bump)','다이와 기판 또는 인터포저를 전기적으로 연결하는 금속 접점입니다.','Bump 인터커넥트 · 패키징 기술 개념',''],
   microbump:['Micro-bump 접합부','적층 다이 사이를 미세 금속 범프로 전기적·기계적으로 접합합니다. TSV와 함께 쓰는 경우가 많습니다.','3D TSV + micro-bump 구조 기술 예시','https://research.tsmc.com/page/off-chip-interconnect/1.html'],
   tsv:['TSV (Through-Silicon Via)','실리콘 다이 내부를 관통하는 수직 금속 배선입니다. Die-to-Die Bonding과 다른 역할입니다.','3D TSV / 관통전극 기술 사례','https://research.tsmc.com/page/off-chip-interconnect/10.html'],
   hybridInterface:['Hybrid Bonding 접합 계면','인접 다이의 절연막과 Cu 접점을 미세 피치로 직접 접합하는 계면입니다.','TSMC SoIC 직접 접합 기술 사례','https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/SoIC_inDepth.htm'],
   hybridPad:['Hybrid Bonding Cu 패드','다이 접합면의 Cu 패드 사이 전기적 연결을 형성합니다. TSV와 동시에 존재할 수 있습니다.','SoIC Cu–Cu 연결 개념 예시','https://3dfabric.tsmc.com/english/dedicatedFoundry/technology/SoIC_inDepth.htm']
  }
 };
 function tagMesh(mesh,key,instance){mesh.userData.partKey=key;if(instance!=null)mesh.userData.partInstance=instance;return mesh}
 function tagTree(root,key,instance){root.traverse(function(obj){if(obj.isMesh)tagMesh(obj,key,instance)})}
 function installPick(ctx,kind){
  var canvas=ctx.renderer.domElement,T=ctx.T;
  var panel=$(kind==='pro'?'#cpoNov18ProInspector':'#cpoNov18PackInspector');
  var buttons=$(kind==='pro'?'#cpoNov18ProPicker .cpo-n18-chips':'#cpoNov18PackPicker .cpo-n18-chips');
  var ray=new T.Raycaster(),mouse=new T.Vector2(),start=null,helper=null;
  var catalog=partCatalog[kind];
  function clearOutline(){if(helper){ctx.scene.remove(helper);if(helper.geometry)helper.geometry.dispose();if(helper.material)helper.material.dispose();helper=null}}
  function drawSelection(key,inst,object){
   clearOutline();var b=new T.Box3(),count=0;
   ctx.group.updateMatrixWorld(true);
   ctx.group.traverse(function(n){
    if(!n.isMesh||!n.visible||n.userData.partKey!==key)return;
    if(inst!=null&&n.userData.partInstance!==inst)return;
    if(object&&inst==null&&n!==object)return;
    b.expandByObject(n);count++;
   });
   if(!count&&object)b.setFromObject(object);
   if(!b.isEmpty()){
    b.expandByScalar(.1);helper=new T.Box3Helper(b,0xffd04a);ctx.scene.add(helper)
   }
  }
  function select(key,inst,object){
   var data=catalog[key];if(!data)return;
   drawSelection(key,inst,object);
   var label=data[0]+(inst!=null?' #'+inst:'');
   var source=data[3]?'<a href="'+txt(data[3])+'" target="_blank" rel="noopener noreferrer">제조사·기술 출처 보기 ↗</a>':'<span class="cpo-n18-sub">특정 모델 출처 없음</span>';
   panel.innerHTML='<div class="cpo-n18-sub">3D 부품 선택됨 · 교육용 모델 (실제 제조사 CAD 아님)</div><h4>'+txt(label)+'</h4><p><b>기능:</b> '+txt(data[1])+'</p><p><b>관련 제품/기술 예시:</b> '+txt(data[2])+'</p><p>'+source+'</p>';
   $$('.cpo-n18-chips button',buttons).forEach(function(btn){btn.setAttribute('aria-pressed',String(btn.getAttribute('data-key')===key))});
   ctx.selectedPart={key:key,instance:inst||null};
  }
  function refresh(){
   clearOutline();ctx.selectedPart=null;
   panel.textContent='3D 모델의 개별 부품을 터치하거나 아래 부품 버튼을 눌러 기능·관련 제품을 확인하세요.';
   var keys=[];ctx.group.traverse(function(n){if(n.isMesh&&n.visible&&n.userData.partKey&&keys.indexOf(n.userData.partKey)<0)keys.push(n.userData.partKey)});
   // Keep the fallback list ordered consistently, even on small screens.
   keys.sort(function(a,b){return Object.keys(catalog).indexOf(a)-Object.keys(catalog).indexOf(b)});
   buttons.innerHTML='';
   keys.forEach(function(key){
     var b=document.createElement('button');b.type='button';b.setAttribute('data-key',key);b.setAttribute('aria-pressed','false');b.textContent=catalog[key][0];
     b.addEventListener('click',function(){select(key,null,null)});
     buttons.appendChild(b);
   });
  }
  function hitAt(ev){
   var rect=canvas.getBoundingClientRect();
   if(!rect.width||!rect.height)return;
   mouse.set((ev.clientX-rect.left)/rect.width*2-1,-((ev.clientY-rect.top)/rect.height)*2+1);
   ray.setFromCamera(mouse,ctx.camera);ctx.group.updateMatrixWorld(true);
   var hit=ray.intersectObjects(ctx.group.children,true).find(function(x){return x.object.visible&&x.object.userData.partKey});
   if(hit)select(hit.object.userData.partKey,hit.object.userData.partInstance||null,hit.object);
  }
  canvas.addEventListener('pointerdown',function(ev){if(ev.button!==0&&ev.pointerType==='mouse')return;start={x:ev.clientX,y:ev.clientY,id:ev.pointerId}});
  canvas.addEventListener('pointerup',function(ev){if(!start||start.id!==ev.pointerId)return;var dx=ev.clientX-start.x,dy=ev.clientY-start.y;start=null;if(dx*dx+dy*dy<144)hitAt(ev)});
  canvas.addEventListener('pointercancel',function(){start=null});
  ctx.pick={select:select,refresh:refresh};refresh();
 }

 function initRenderer(container){if(!window.THREE){container.innerHTML='<div class="cpo-n18-fallback">Three.js 라이브러리를 로드하지 못했습니다. 위의 기술 설명과 비교 자료를 이용하세요.</div>';return null}
 var T=window.THREE;var scene=new T.Scene();scene.background=new T.Color(0x142235);var camera=new T.PerspectiveCamera(41,1,.1,300);camera.position.set(18,23,28);var renderer;
 try{renderer=new T.WebGLRenderer({antialias:true,alpha:false,powerPreference:'high-performance'});}catch(e){container.innerHTML='<div class="cpo-n18-fallback">이 기기에서 WebGL을 사용할 수 없습니다. 아래 기술 설명은 이용 가능합니다.</div>';return null}
 renderer.setPixelRatio(Math.min(window.devicePixelRatio||1,2));renderer.outputEncoding=T.sRGBEncoding;renderer.shadowMap.enabled=true;renderer.shadowMap.type=T.PCFSoftShadowMap;renderer.toneMapping=T.ACESFilmicToneMapping;renderer.toneMappingExposure=1.25;
 container.innerHTML='';container.appendChild(renderer.domElement);
 var amb=new T.HemisphereLight(0xdfeeff,0x25313e,1.35);scene.add(amb);
 var light=new T.DirectionalLight(0xffffff,2.4);light.position.set(-15,27,17);light.castShadow=true;light.shadow.mapSize.set(1024,1024);light.shadow.camera.left=-35;light.shadow.camera.right=35;light.shadow.camera.top=35;light.shadow.camera.bottom=-35;scene.add(light);
 var edge=new T.DirectionalLight(0x60b9ff,1.1);edge.position.set(16,13,-12);scene.add(edge);
 var ctl=T.OrbitControls?new T.OrbitControls(camera,renderer.domElement):null;if(ctl){ctl.enableDamping=true;ctl.dampingFactor=.07;ctl.maxPolarAngle=Math.PI*.48;ctl.minDistance=9;ctl.maxDistance=70;ctl.target.set(0,1,0);ctl.update()}
 var floor=new T.Mesh(new T.PlaneGeometry(100,100),new T.MeshStandardMaterial({color:0x152435,roughness:.94}));floor.rotation.x=-Math.PI/2;floor.position.y=-.7;floor.receiveShadow=true;scene.add(floor);
 var group=new T.Group();scene.add(group);
 function size(){var w=container.clientWidth||700,h=container.clientHeight||400;camera.aspect=w/h;camera.updateProjectionMatrix();renderer.setSize(w,h,false)}size();
 var observer=window.ResizeObserver?new ResizeObserver(size):null;if(observer)observer.observe(container);else window.addEventListener('resize',size);
 var active=false;function frame(){if(!active)return;requestAnimationFrame(frame);if(ctl)ctl.update();renderer.render(scene,camera)}
 function activate(){size();if(!active){active=true;frame()}}function pause(){active=false}
 return {T:T,scene:scene,camera:camera,renderer:renderer,group:group,controls:ctl,activate:activate,pause:pause,size:size};
 }
 function material(T,color,metal,rough){return new T.MeshStandardMaterial({color:color,metalness:metal||0,roughness:rough==null?.38:rough})}
 function block(ctx,parent,w,h,d,x,y,z,mat){var T=ctx.T,o=new T.Mesh(new T.BoxGeometry(w,h,d),mat);o.position.set(x,y,z);o.castShadow=true;o.receiveShadow=true;parent.add(o);return o}
 function ball(ctx,parent,r,x,y,z,mat){var T=ctx.T,o=new T.Mesh(new T.SphereGeometry(r,12,8),mat);o.position.set(x,y,z);parent.add(o);return o}
 function tube(ctx,parent,points,r,mat){var T=ctx.T,curve=new T.CatmullRomCurve3(points.map(function(a){return new T.Vector3(a[0],a[1],a[2])}));var mesh=new T.Mesh(new T.TubeGeometry(curve,52,r,8,false),mat);parent.add(mesh);return mesh}
 function peg(ctx,parent,r,h,x,y,z,mat){var T=ctx.T,m=new T.Mesh(new T.CylinderGeometry(r,r,h,12),mat);m.position.set(x,y,z);parent.add(m);return m}
 function createPro(){var ctx=initRenderer($('#cpoNov18ProScene'));if(!ctx)return null;var g=ctx.group,T=ctx.T;
 var pcb=material(T,0x00645c,.3,.36),gold=material(T,0xe4ad49,.78,.24),dark=material(T,0x161e30,.65,.26),silver=material(T,0xa5b8cb,.8,.26),oeMat=material(T,0x263854,.68,.25),blue=material(T,0x04b4ff,.35,.3),amber=material(T,0xffa72d,.2,.3),glass=material(T,0x52dff7,.3,.16);
 block(ctx,g,23,.8,15,0,0,0,pcb);block(ctx,g,23,.12,15,0,.47,0,gold);
 for(var i=0;i<4;i++){for(var k=0;k<3;k++){block(ctx,g,.06,.045,10,-8.8+i*5.7,.56,0,gold)}}
 [[-10,-6],[10,-6],[-10,6],[10,6]].forEach(function(p){peg(ctx,g,.3,.24,p[0],.61,p[1],gold)});
 var asic=new T.Group();g.add(asic);block(ctx,asic,7,.7,5.6,0,1.04,0,silver);block(ctx,asic,6.4,.7,5,0,1.78,0,dark);
 for(var ix=0;ix<18;ix++){block(ctx,asic,.13,.11,.24,-2.9+ix*.34,1.15,-2.9,gold);block(ctx,asic,.13,.11,.24,-2.9+ix*.34,1.15,2.9,gold)}
 var engines=new T.Group();g.add(engines);var coords=[[-7.6,-3.1],[-7.6,0],[-7.6,3.1],[7.6,-3.1],[7.6,0],[7.6,3.1],[0,-5.5],[0,5.5]];
 coords.forEach(function(p,i){var x=p[0],z=p[1],cell=new T.Group();engines.add(cell);block(ctx,cell,2.5,.24,1.8,x,.83,z,gold);block(ctx,cell,1.86,.65,1.32,x,1.25,z,oeMat);block(ctx,cell,1.32,.07,.85,x,1.63,z,silver);for(var j=-1;j<=1;j++)block(ctx,cell,.08,.12,.11,x+j*.5,1.03,z-1,gold);tagTree(cell,'oe',i+1)});
 var els=new T.Group();g.add(els);block(ctx,els,4.8,1.8,3.1,-7.9,1.48,-5.4,silver);block(ctx,els,4.2,.11,2.45,-7.9,2.45,-5.4,dark);
 var fibers=new T.Group();g.add(fibers);var pmf=new T.Group();fibers.add(pmf);var inputs=[[-7.6,-3.1],[-7.6,0],[-7.6,3.1]];inputs.forEach(function(p,i){tube(ctx,pmf,[[-7.5,1.6,-4.7],[-9.2,2.3,-3.4+i*.6],[-8.8,2.1,p[1]-.4],[p[0],1.55,p[1]]],.1,amber)});
 coords.forEach(function(p,i){var xx=-9.5+i*2.55;var z=p[1];tube(ctx,fibers,[[p[0],1.65,z],[p[0],2.3,-4.8],[xx,2.1,-6.1],[xx,1.3,-7]],.09,blue)});
 var connectors=new T.Group();g.add(connectors);var fau=new T.Group();g.add(fau);
 for(var j=0;j<8;j++){var xx=-9.35+j*2.65,port=new T.Group();connectors.add(port);block(ctx,port,1.94,1.12,1.05,xx,1.09,-7.55,silver);block(ctx,port,1.52,.58,.12,xx,1.22,-8.13,glass);block(ctx,port,.3,.2,.3,xx,1.72,-7.5,gold);tagTree(port,'connector',j+1);
 var coupler=block(ctx,fau,1.20,.28,.40,xx,1.36,-6.65,gold);tagMesh(coupler,'fau',j+1)}
 var smd=material(T,0x1d2833,.2,.62);for(var j=0;j<16;j++){var x=-10.1+(j%8)*2.85;var z=j<8?6.8:-6.8;if(Math.abs(x)<2&&z>0)continue;block(ctx,g,.6,.28,.38,x,.69,z,smd)}
 g.children.forEach(function(n){if(n.isMesh)tagMesh(n,n.material===gold?'trace':n.material===smd?'smd':'board')});
 tagTree(asic,'asic');tagTree(els,'els');tagTree(fibers,'fiber');tagTree(pmf,'pmf');
 installPick(ctx,'pro');
 ctx.camera.position.set(22,22,27);ctx.controls&&ctx.controls.update();
 return {ctx:ctx,asic:asic,engines:engines,els:els,fibers:fibers,connectors:connectors,fau:fau};
 }
 function initPro(){if(!pro3d)pro3d=createPro();if(pro3d)pro3d.ctx.activate()}
 $('#cpoNov18ProReset').addEventListener('click',function(){if(!pro3d)return;pro3d.ctx.camera.position.set(22,22,27);if(pro3d.ctx.controls){pro3d.ctx.controls.target.set(0,1,0);pro3d.ctx.controls.update()}});
 var exp=false;$('#cpoNov18ProExplode').addEventListener('click',function(){if(!pro3d)return;exp=!exp;pro3d.asic.position.y=exp?2.2:0;pro3d.engines.position.y=exp?.95:0;pro3d.els.position.y=exp?2.5:0;pro3d.connectors.position.z=exp?-1.8:0;this.setAttribute('aria-pressed',String(exp))});
 var fiberOn=true;$('#cpoNov18ProFiber').addEventListener('click',function(){if(!pro3d)return;fiberOn=!fiberOn;pro3d.fibers.visible=fiberOn;this.textContent='광섬유 표시: '+(fiberOn?'켬':'끔');this.setAttribute('aria-pressed',String(fiberOn))});
 var mode='2d',packExplode=false,withTsv=false;var desc={
 '2d':['2D Package','두 개의 다이를 패키지 기판에 나란히 배치','다이가 수직 적층된 구조가 아니므로 일반적으로 TSV가 필요하지 않습니다.','D2D 수직 접합 필수 아님'],
 '25d':['2.5D Interposer','ASIC과 광엔진을 인터포저 위에 나란히 배치','실리콘 인터포저에는 TSV가 적용될 수 있지만 모든 2.5D 구조에서 필수는 아닙니다.','인터포저 기반 고밀도 수평 연결'],
 'tsv':['3D TSV + Micro-bump','적층 다이 내부에는 TSV, 다이 사이에는 Micro-bump','TSV는 관통 배선이며 Micro-bump는 다이 사이의 접속부입니다.','HBM 등의 일반적 3D 적층을 단순화'],
 'hybrid':['3D Hybrid Bonding','다이 사이 Cu–Cu 패드·절연막 직접 접합','Hybrid Bonding과 TSV는 대체 관계가 아닙니다. 필요하면 TSV가 동시에 사용됩니다.','Micro-bump 없는 미세 피치 접합']
 };
 function buildPackage(){if(!pack3d)return;var ctx=pack3d.ctx,g=ctx.group,T=ctx.T;while(g.children.length){var child=g.children[0];g.remove(child);child.traverse(function(n){if(n.geometry)n.geometry.dispose()})}
 var green=material(T,0x087764,.35,.34),silicon=material(T,0x8b9fb5,.65,.29),dark=material(T,0x2e4053,.54,.28),metal=material(T,0xe2a84d,.75,.21),iso=material(T,0x315778,.22,.4),bumps=material(T,0xd69762,.75,.27),under=material(T,0x465e74,.4,.45);
 tagMesh(block(ctx,g,16,.85,11,0,0,0,green),'board');for(var k=0;k<5;k++)tagMesh(block(ctx,g,13,.04,.13,0,.51,-4.5+k*2.1,metal),'trace');
 function die(parent,w,h,d,x,y,z,mat){return block(ctx,parent,w,h,d,x,y,z,mat)}
 if(mode==='2d'){tagMesh(die(g,5.2,1.1,6,-3.5,1.3,0,silicon),'dieA');tagMesh(die(g,5.2,1.1,6,3.5,1.3,0,dark),'dieB');for(var i=0;i<10;i++)tagMesh(peg(ctx,g,.15,.28,-5.5+i*1.2,.62,-3.2,metal),'bump')}
 if(mode==='25d'){tagMesh(die(g,13,.42,8,0,.85,0,under),'interposer');tagMesh(die(g,5.6,.94,5.2,2.65,1.64,0,dark),'dieA');tagMesh(die(g,4.2,.72,3.6,-3.5,1.54,0,silicon),'dieB');for(var i=0;i<11;i++)for(var j=0;j<5;j++){tagMesh(peg(ctx,g,.12,.2,-6.3+i*1.25,1.14,-3.5+j*1.75,metal),'bump')}}
 if(mode==='tsv'||mode==='hybrid'){var layers=[];for(var n=0;n<3;n++){var y=1.35+n*(packExplode?2.6:1.28);layers.push(y);tagMesh(die(g,10,.72,7,0,y,0,n===1?dark:silicon),'die',n+1)}
 for(var n=0;n<2;n++){var y=(layers[n]+layers[n+1])*.5;var bumpY=packExplode?layers[n]+.53:y;if(mode==='tsv'){for(var x=-4.4;x<=4.5;x+=1.1)for(var z=-2.7;z<=2.8;z+=1.25)tagMesh(ball(ctx,g,.14,x,bumpY,z,bumps),'microbump')}else{tagMesh(die(g,10,.07,7,0,layers[n]+.39,0,iso),'hybridInterface');for(var x=-4.6;x<4.9;x+=.44)for(var z=-3.15;z<3.2;z+=.44)tagMesh(peg(ctx,g,.085,.08,x,layers[n]+.45,z,metal),'hybridPad')}}
 if(mode==='tsv'||withTsv){for(var n=0;n<3;n++)for(var x=-3.7;x<4;x+=1.85)for(var z=-2.2;z<2.3;z+=2.2)tagMesh(peg(ctx,g,.16,.79,x,layers[n],z,metal),'tsv')}}
 var info=$('#cpoNov18PackText');var d=desc[mode];info.innerHTML='<div><b>'+txt(d[0])+'</b><p>'+txt(d[1])+'</p></div><div><b>핵심 구분</b><p>'+txt(d[2])+'</p></div><div><b>결론</b><p>'+txt(d[3])+'</p></div>';
 $('#cpoNov18HybridTsv').disabled=mode!=='hybrid';
 if(ctx.pick)ctx.pick.refresh();ctx.ctxReady=true;ctx.renderer.render(ctx.scene,ctx.camera);
 }
 function initPack(){if(!pack3d){var c=initRenderer($('#cpoNov18PackScene'));if(!c)return;pack3d={ctx:c};c.camera.position.set(17,15,24);installPick(c,'pack');buildPackage()}pack3d.ctx.activate()}
 $$('#cpoNov18PackModes [data-mode]').forEach(function(btn){btn.addEventListener('click',function(){mode=btn.getAttribute('data-mode');$$('#cpoNov18PackModes [data-mode]').forEach(function(b){b.classList.toggle('active',b===btn)});initPack();buildPackage()})});
 $('#cpoNov18PackReset').addEventListener('click',function(){initPack();if(!pack3d)return;pack3d.ctx.camera.position.set(17,15,24);pack3d.ctx.controls&&pack3d.ctx.controls.target.set(0,1,0);pack3d.ctx.controls&&pack3d.ctx.controls.update()});
 $('#cpoNov18PackExplode').addEventListener('click',function(){packExplode=!packExplode;this.setAttribute('aria-pressed',String(packExplode));initPack();buildPackage()});
 $('#cpoNov18HybridTsv').addEventListener('click',function(){withTsv=!withTsv;this.textContent='Hybrid에서 TSV 함께 보기: '+(withTsv?'켬':'끔');this.setAttribute('aria-pressed',String(withTsv));initPack();buildPackage()});
 // Suspend rendering when the viewer is hidden; revive on explicit tab activation.
 $$('.view-tab',tabs).forEach(function(b){if(b!==button1&&b!==button2)b.addEventListener('click',function(){if(pro3d)pro3d.ctx.pause();if(pack3d)pack3d.ctx.pause()})});
 }
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();