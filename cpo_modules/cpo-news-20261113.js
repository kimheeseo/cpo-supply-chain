/* CPO news research snapshot, 2026-11-13 (Korea). */
(function(){'use strict';
if(window.__cpoNews20261113)return;window.__cpoNews20261113=true;
var entries=[
{id:'ayar',date:'2026-11-10',title:'Ayar Labs·Wiwynn, TSMC 기술 심포지엄 시연상',source:'Ayar Labs 공식 발표',url:'https://ayarlabs.com/news/ayar-labs-wins-demo-of-the-year-award-at-2026-tsmc-north-america-technology-symposium/',relevance:'component',summary:'TeraPHY 광엔진·SuperNova 외부 광원을 적용한 AI 서버 참조 설계 시연. 수상은 고객 양산 출하량을 의미하지 않습니다.'},
{id:'celestica',date:'2026-10-12',title:'Celestica DS6005: 102.4T CPO 스위치 발표',source:'Celestica 공식 발표',url:'https://celestica.gcs-web.com/news-releases/news-release-details/celestica-introduces-ds6005-data-center-switch-co-packaged',relevance:'component',summary:'Broadcom Tomahawk 6 Davisson 기반 64×1.6T, 전면 수랭과 교체형 외부 레이저를 갖춘 설계. 발표일은 10월이며 출하량은 미확인.'},
{id:'samsung',date:'2026-11-11',title:'삼성 실리콘 포토닉스 특허 취득 보도',source:'DIGITIMES 보도 · 회사 확인 미확인',url:'https://apps.digitimes.com/news/a20261111VL219/samsung-silicon-photonics-2026-cpo.html?chid=10',relevance:'keyword',summary:'Rockley Photonics의 미국 특허 4건 취득에 관한 보도입니다. 원 특허 문서와 회사 발표를 직접 확인하지 못했으며 CPO 양산을 뜻하지 않습니다.'}
];
function add(){var c=window.companies||{};entries.forEach(function(n){var v=c[n.id];if(!v)return;var a=Array.isArray(v.news)?v.news:[];if(!a.some(function(x){return String(x.url||'').split('?')[0]===n.url.split('?')[0]}))a.push(n);a.sort(function(x,y){return String(y.date||'').localeCompare(String(x.date||''))});v.news=a.slice(0,12)});
 if(typeof window.renderVendor==='function')window.renderVendor();if(typeof window.renderVendorList==='function')window.renderVendorList();
 var label=document.getElementById('cpoNewsUpdatedLabel');if(label)label.textContent='기사 추가 검토 · 2026-11-13 | 원문 발행일 별도 표기 · 주가 및 기존 자료는 각 데이터 기준';
 var reset=document.getElementById('resetBtn'), toolbar=reset&&reset.closest('.toolbar');if(!toolbar||document.getElementById('cpoBrief20261113'))return;
 var box=document.createElement('details');box.id='cpoBrief20261113';box.style.cssText='margin:0 0 14px;padding:12px 15px;border:1px solid #a9cbe0;border-radius:12px;background:var(--card,#fff);color:var(--text,#17384b);font-size:12px;line-height:1.65';
 box.innerHTML='<summary style="cursor:pointer;font-weight:800">2026.11.13 CPO 동향 · 신규 확인 자료 펼치기</summary>'+
 '<ul style="padding-left:20px;margin:8px 0">'+
 '<li><b>11.12 · TE Connectivity:</b> 미국 뉴욕주 고밀도 광섬유 배열(FAU) 연구·제조 시설에 6,000만 달러 초과 투자 계획. 시설 투자이며 CPO 매출·생산 실적은 아님. <a href="https://rochesterbiz.com/te-connectivity-to-establish-operations-in-rochester-ny-and-create-more-than-860-new-jobs/" target="_blank" rel="noopener noreferrer">지역 개발기관 발표 ↗</a></li>'+
 '<li><b>11.10 · Ayar Labs:</b> Wiwynn과 협업한 TeraPHY·SuperNova 기반 AI 서버 참조 설계로 TSMC 시연상 수상. 시연과 대량 출하는 구분. <a href="https://ayarlabs.com/news/ayar-labs-wins-demo-of-the-year-award-at-2026-tsmc-north-america-technology-symposium/" target="_blank" rel="noopener noreferrer">회사 발표 ↗</a></li>'+
 '<li><b>11.11 · 삼성:</b> Rockley 실리콘 포토닉스 특허 4건 취득 보도. 회사·특허 원문 직접 확인 전인 보도이며 양산 여부와 별개. <a href="https://apps.digitimes.com/news/a20261111VL219/samsung-silicon-photonics-2026-cpo.html?chid=10" target="_blank" rel="noopener noreferrer">보도 ↗</a></li>'+
 '<li><b>10.12 · Celestica:</b> 102.4T DS6005 CPO 스위치 발표. 교체형 외부 레이저·수랭 설계. <a href="https://celestica.gcs-web.com/news-releases/news-release-details/celestica-introduces-ds6005-data-center-switch-co-packaged" target="_blank" rel="noopener noreferrer">회사 발표 ↗</a></li>'+
 '<li><b>행사 확인:</b> OFC 2027 기술회의 3월 7~11일, 전시 3월 9~11일. <a href="https://www.ofcconference.org/exhibition-theater-programs" target="_blank" rel="noopener noreferrer">주최 측 일정 ↗</a></li></ul>'+
 '<div>검토 기준 2026.11.13 · 정적 조사 자료이며 주가·이전 기사·다른 행사 전체가 오늘 갱신된 것은 아닙니다.</div>';
 var labelNode=document.getElementById('cpoNewsUpdatedLabel');(labelNode||toolbar).insertAdjacentElement('afterend',box);
}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',add,{once:true});else add();
})();