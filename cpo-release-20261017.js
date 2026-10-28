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


  /* 2026-10-28: category coverage. Only official published contacts or clearly labelled HQ inquiries.
     A Korean office or distributor does NOT imply authorization for a particular CPO SKU. */
  function record(channel,role,tier,tierLabel,sourceUrl,sourceName,phone,email){
    return {channel:channel,role:role,tier:tier,tierLabel:tierLabel,sourceUrl:sourceUrl,
      sourceName:sourceName,phone:phone||'',email:email||''};
  }
  function brand(id,name,product,records){return {id:id,name:name,product:product,records:records}}
  var koreanContact='국내 법인/영업 또는 공식 문의 창구. CPO 제품의 취급·수입·호환·양산 여부는 별도 확인';
  koreaDirectory.laser={
    title:'Laser / External Laser Source · 제품 및 한국 연락 창구',
    note:'CPO 외부 광원(ELS)과 인접 레이저·SOA 기술을 구분합니다. 한국 문의 번호가 제품별 CPO 영업 담당자를 의미하지는 않습니다.',
    brands:[
      brand('lumentum','Lumentum','ELSFP-350 · CW laser · InP laser',[
        record('Lumentum APAC 고객 서비스','한국 접속 지원 번호 · ELSFP 국내 공급 여부 별도 문의','global','APAC 공식 문의','https://www.lumentum.com/en/company/contact-us/apac','Lumentum APAC official customer service','001-800-0825-5483','customer.service@lumentum.com')]),
      brand('coherent','Coherent','PhotonLink · UHP CW laser · OptiFocus',[
        record('Coherent 공식 한국어 문의','한국어 제조사 문의 양식 · 광원/PhotonLink 담당 부서 연결 필요','office','한국어 공식 문의','https://www.coherent.com/ko/contact','Coherent 공식 한국어 연락처')]),
      brand('anritsu','Anritsu','SOA · Gain Chip · Swept Light Source (CPO ELS와 구분)',[
        record('안리쓰코퍼레이션 과천','광소자 부문 영업·기술 문의 · 특정 ELS 호환 미검증','office','국내 연락 창구','https://www.anritsu.com/ko-kr/sensing-devices/contact-us','Anritsu Sensing & Devices Korea','02-6259-7300')])
    ]
  };
  koreaDirectory.pmFiber={
    title:'Polarization-Maintaining Fiber · 국내 문의 및 품목',
    note:'PMF의 파장, MFD, PER, 코팅/외경 및 광엔진 연결 적합성은 제품별 추가 확인 대상입니다.',
    brands:[
      brand('corning','Corning','PANDA PM 1310 · Reduced-Clad PMF · PM BI R5 1310',[
        record('한국코닝(주)','Corning 한국 문의 · CPO 특수 PMF는 담당 부서 확인','office','한국 법인','https://www.corning.com/oem-solutions/worldwide/en/home/products-solutions/optical-communication-components/specialty-fiber/cpo-specialty-fiber.html','Corning CPO specialty fiber','02-796-9500','krregion@corning.com')]),
      brand('sumitomo','Sumitomo Electric','PANDA PM fiber · precision fiber · optical cable',[
        record('Sumitomo Electric (Korea) Electronics','한국 영업점, PMF 제품별 판매·담당 조직 확인 필요','office','한국 영업점','https://sumitomoelectric.com/company/office_group_companies/sumitomo-electric-korea-electronics-ltd','Sumitomo Korea official office','02-3453-4511')]),
      brand('coherent','Coherent','Tight-geometry PMF · mode-matched specialty fiber',[
        record('Coherent 한국어 문의','ECOC 2026 공개 PMF·특수광섬유 제품군 문의','office','한국어 공식 문의','https://www.coherent.com/news/press-releases/showcases-optical-innovations-scale-ai-infrastructure-ecoc-2026','Coherent specialty fiber announcement')])
    ]
  };
  koreaDirectory.opticalEngine={
    title:'Optical Engine / PIC · 제품 및 공식 문의 채널',
    note:'PIC/광엔진 개발사에 국내 공식 판매 법인이 공개되지 않은 경우 해외 제조사 직접 문의로 표시합니다. 반도체 설계 지원과 상용 광엔진 공급을 혼동하지 마세요.',
    brands:[
      brand('coherent','Coherent','PhotonLink · silicon photonics · optical assemblies',[
        record('Coherent 한국어 제조사 문의','한국어 문의 양식 · CPO/NPO 광엔진 공급 규격은 개별 협의','office','한국어 공식 문의','https://www.coherent.com/ko/contact','Coherent Korean inquiry')]),
      brand('ayar','Ayar Labs','TeraPHY™ Optical Engine · SuperNova™ Light Source',[
        record('Ayar Labs 본사','한국 지정 판매업체 확인되지 않음 · 영문 본사 직접 문의','global','해외 본사 문의','https://ayarlabs.com/contact/','Ayar Labs official contact','+1-650-963-7200','info@ayarlabs.com')]),
      brand('corning','Corning','Fiber-to-PIC GlassBridge™ · CPO FlexConnect™ (광엔진 연결 부품)',[
        record('한국코닝(주)','광엔진 자체가 아닌 Fiber-to-PIC 및 결합부품 문의','office','한국 법인','https://www.corning.com/oem-solutions/worldwide/en/home/products-solutions/optical-communication-components/co-packaged-optics.html','Corning CPO products','02-796-9500','krregion@corning.com')])
    ]
  };
  koreaDirectory.switchAsic={
    title:'Switch ASIC / Networking · 국내 영업 문의',
    note:'네트워킹 시스템·AI 제품의 한국 영업 창구입니다. Switch ASIC 단품 판매 또는 CPO 플랫폼 직접 공급 자격은 별도 문의가 필요합니다.',
    brands:[
      brand('nvidia','NVIDIA','Spectrum-X Photonics · Quantum-X Photonics · GPU/AI fabric',[
        record('NVIDIA 엔터프라이즈 영업','국내 기업 대상 공식 구매 상담 양식','office','한국어 공식 문의','https://www.nvidia.com/ko-kr/contact/sales/','NVIDIA enterprise sales Korea')]),
      brand('cisco','Cisco','Silicon One · networking switches · optical networking',[
        record('Cisco Korea 영업팀','한국 공식 영업 및 제품 문의','office','한국 영업팀','https://www.cisco.com/site/kr/ko/about/contact-cisco/index.html','Cisco Korea official contact','080-377-0880','kr_contactsales@cisco.com')])
    ]
  };
  koreaDirectory.package={
    title:'Package / Substrate / OSAT · 국내 패키징 생태계',
    note:'표시 업체는 반도체 패키징·파운드리·설계 생태계 역할을 기준으로 선정했습니다. 각 업체의 CPO 전용 OSAT 라인·공급 승인 상태는 미확인입니다.',
    brands:[
      brand('amkor','Amkor Technology','Advanced packaging · package assembly · test',[
        record('앰코테크놀로지코리아 송도 고객지원센터','국내 생산/지원센터 · CPO 광패키징 가능 여부 별도 확인','office','국내 고객지원센터','https://amkor.com/kr/contact-us/','Amkor Korea official contact','032-728-4114')]),
      brand('ase','ASE','OSAT · advanced packaging · photonic integration 인접 공정',[
        record('ASE Korea Sales Office','한국 공식 영업 사무소 · CPO 생산 실적 별도 검증','office','한국 영업 사무소','https://ase.aseglobal.com/about-ase/contact/global-sales/','ASE global official sales','031-940-0458','yglee@asekr.com')]),
      brand('samsung','Samsung Foundry','2.5D/3D integration · advanced packaging · SAFE ecosystem',[
        record('삼성 Foundry 국내 네트워크','국내 제조사 · 패키징/Foundry 협력 문의','office','국내 제조사','https://semiconductor.samsung.com/kr/about-us/business-area/foundry/','Samsung Foundry official technology','031-209-7114')])
    ]
  };
  koreaDirectory.fau={
    title:'Fiber Array Unit / Fiber-to-Chip · 문의 및 제품군',
    note:'FAU/PIC 접속 상품의 한국 판매권과 공정 호환성, 삽입손실, 피치·채널 수는 상세 규격 확인이 필요합니다.',
    brands:[
      brand('corning','Corning','Fiber Array Units · GlassBridge™ Fiber-to-PIC',[
        record('한국코닝(주)','CPO FAU 및 광결합 제품군 문의 · 직접 공급 여부 추가 확인','office','한국 법인','https://www.corning.com/oem-solutions/worldwide/en/home/products-solutions/optical-communication-components/co-packaged-optics.html','Corning CPO fiber-to-PIC','02-796-9500','krregion@corning.com')]),
      brand('coherent','Coherent','OptiAlign FAU · FlexConnect detachable FAU · FiberPack',[
        record('Coherent 한국어 제조사 문의','OptiAlign/FlexConnect 제품 담당 조직 연결 요청','office','한국어 공식 문의','https://www.coherent.com/news/press-releases/showcases-optical-innovations-scale-ai-infrastructure-ecoc-2026','Coherent ECOC 2026 FAU portfolio')]),
      brand('ayar','Ayar Labs','TeraPHY™ optical engine fiber interface (참고)',[
        record('Ayar Labs 본사','광엔진 접속 방식 기술 문의 · FAU 제조사로 분류하지 않음','global','해외 본사 문의','https://ayarlabs.com/contact/','Ayar Labs official contact','+1-650-963-7200','info@ayarlabs.com')])
    ]
  };
  koreaDirectory.test={
    title:'Optical / RF / High-speed Test · 국내 영업 연락처',
    note:'측정기 제조사 공식 한국 고객센터 및 제조사 판매 경로입니다. 특정 CPO 광엔진 자동시험 호환 여부는 모델별 확인이 필요합니다.',
    brands:[
      brand('keysight','Keysight','Optical spectrum analyzer · BERT · high-speed optical test',[
        record('키사이트코리아','한국 영업 및 기술지원 대표 창구','office','국내 공식 문의','https://www.keysight.com/kr/ko/contact.1.html','Keysight Korea contact','080-769-0800','korea_call@keysight.com')]),
      brand('anritsu','Anritsu','Optical testing · spectrum analyzer · BERT',[
        record('안리쓰 과천','국내 광·RF 측정기 영업·기술지원','office','한국 지점','https://www.anritsu.com/ko-kr/contact-us','Anritsu Korea Test & Measurement','02-6259-7300')]),
      brand('tektronix','Tektronix','Oscilloscope · high-speed signal analysis',[
        record('한국 텍트로닉스','국내 제품 판매 및 파트너 문의','office','한국 법인','https://www.tek.com/ko/buy/partner-locator','Tektronix Korea partner locator','02-565-1455')]),
      brand('viavi','VIAVI','mTLS · mOSA · optical component test · CPO module test',[
        record('VIAVI 공식 영업 연결','한국 파트너 또는 지역 세일즈 담당 연결 신청','global','공식 문의 경로','https://www.viavisolutions.com/en-us/support/customer-support','VIAVI sales & support')])
    ]
  };
  // Expand the existing fiber / connector categories, preserving reviewed local contacts.
  koreaDirectory.fiber.brands[0].product='SMF-28® Ultra · CPO FlexConnect™ · PANDA PMF · optical cable';
  koreaDirectory.fiber.brands[1].product='Lightera / Furukawa optical cable · HCF · MCF ecosystem';
  koreaDirectory.fiber.brands[2].product='PANDA PM fiber · SDM4 MCF · optical cable';
  koreaDirectory.connector.brands[0].product='DDK electric connectors (광 CPO connector 공급 자격 미확인)';
  koreaDirectory.connector.brands.push(
    brand('corning','Corning','MMC 16F/24F · GlassBridge™ · LC/SC optical connectivity',[
      record('한국코닝(주)','광커넥터 제품군 국내 문의 · MMC 국내 취급 여부 별도 확인','office','한국 법인','https://www.corning.com/oem-solutions/worldwide/en/home/products-solutions/optical-communication-components/co-packaged-optics.html','Corning CPO connector lineup','02-796-9500','krregion@corning.com')]),
    brand('senko','SENKO','SN® · SN-MT · detachable PIC connector',[
      record('SENKO 글로벌 공식 문의','한국 내 해당 광커넥터 지정 총판 미확인 · 본사 문의','global','제조사 본사 문의','https://www.senko.com/news/','SENKO optical connectivity news')]),
    brand('usconec','US Conec','MMC® · PRIZM® TMT · high-density ferrules',[
      record('US Conec 공식 제품 문의','한국 내 제품별 공급사 및 기술 연락처는 제조사 확인 필요','global','제조사 본사 문의','https://www.usconec.com/','US Conec official')])
  );
  koreaDirectory.connector.brands[2].records.push(
    record('KDPS','Molex 공식 한국 Distributor 목록의 등록 업체 · CPO 제품 공급 여부 별도 문의','authorized','공식 목록 등록','https://www.molex.com/en-us/contact/molex-korea-distributors','Molex Korea official distributors','031-406-5700','kdps@e-kdps.com')
  );
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
      // Place the Corning overview ABOVE the table/headers as its own normal-flow row.
      var overview=null;
      if(key==='fiber'){
        overview=document.createElement('div');overview.className='cpo-directory-overview';
        overview.innerHTML='<strong>Corning · 광섬유/광케이블 제조사</strong>'+
          '<span>한국 법인 1곳 · 공식 Distributor 5곳 · 취급 정보 1곳(총판 여부 확인 필요)</span>'+
          '<a href="https://www.corning.com/optical-communications/in/en/home/support/distributors/korea.html" target="_blank" rel="noopener noreferrer">Corning 공식 한국 채널 보기 ↗</a>';
      }
      toolbar.appendChild(title);
      if(overview)toolbar.appendChild(overview);
      toolbar.append(filters,note);
      result.insertBefore(toolbar,tableWrap);repaint();
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
    var current='v2.17.7 · 3D 부품명 분리 · 국내 영업 9개 부품군 · 업체/기사 · 2026-10-28';
    if(!badge||badge.textContent===current)return;
    badge.textContent=current;
  }
  function init(){initWholeCpoFlow();initKoreaDirectory();appendLatestNews();refreshBadge();var badge=$('#buildBadge');if(badge)new MutationObserver(refreshBadge).observe(badge,{childList:true,characterData:true,subtree:true});}
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',init,{once:true});else init();
})();
