/* 2026-11-10 verified CPO sales-status and white-paper additions. GitHub Pages only; additive/idempotent. */
(function(){'use strict';
if(window.__cpoMarket20261110)return;
var C=window.companies,B=window.companyBriefings;
if(!C||!B)return;
window.__cpoMarket20261110=true;
function norm(s){return String(s||'').split('?')[0].replace(/\/$/,'').toLowerCase();}
function addNews(id,entry){var v=C[id];if(!v)return;var a=Array.isArray(v.news)?v.news:[];if(!a.some(function(x){return norm(x.url)===norm(entry.url)}))a.push(entry);a.sort(function(x,y){return String(y.date||'').localeCompare(String(x.date||''))});v.news=a.slice(0,5);}
function upBrief(id,b){if(C[id]&&(!B[id]||String(B[id].date||'')<=b.date))B[id]=b;}
var coherentDeck='https://ir.coherent.com/static-files/4c75f2dd-b6ef-4abb-9cf1-df95638a9058';
var furukawaDeck='https://www.furukawaelectric.com/en/ir/library/finalreport/pdf/2027/20261109_pre.pdf';
var whiteMMC='https://www.usconec.com/media/aa3dckka/a-high-density-optical-blind-mate-connector-system-for-data-center-optical-networks.pdf';
var whiteMPO='https://www.usconec.com/media/srhajpse/low-loss_intermateability_of_apc-mpo_connectors.pdf';
addNews('coherent',{date:'2026-11-04',title:'Coherent FY27 Q1: Scale-across/DCI 실제 분기 매출 $200M 초과, PhotonLink는 미래 계약·매출 전망',source:'Coherent official investor presentation p.4,7',url:coherentDeck,relevance:'component',summary:'Scale-across/DCI 매출 $200M+는 인식 매출(다만 CPO 전용 아님). PhotonLink 5년 약 $20B LTA는 미래 계약이며, 2027년 3월 분기 PhotonLink 매출 $100M+는 전망.',implication:'CPO 단독 매출·장기구매약정·인식된 인접 광연결 매출을 구분해야 함.'});
upBrief('coherent',{date:'2026-11-04',title:'Coherent FY2027 Q1 IR: 실제 매출 vs PhotonLink 계약',points:['전체 Q1 매출 $2.370B; Datacenter and Communications 부문 약 82% 매출 비중.','Scale-across/DCI 인식 매출 $200M 초과(엄밀히 CPO 직접 매출은 아님).','PhotonLink 신규 LTA 약 $20B/5년, 해당 장기계약 매출은 2028년 초부터 확대 예정; 다른 PhotonLink 사업 매출의 2027년 목표와 구분.'],implication:'분기 실매출과 장기 구매계약, 아직 인식되지 않은 CPO/NPO 광결합 사업을 구분해야 합니다.',url:coherentDeck});
addNews('furukawa',{date:'2026-11-09',title:'Furukawa FY2026 상반기 광솔루션 매출 1,309억 엔; TMT 페룰·DFB 레이저 증설',source:'Furukawa Electric official FY2026 H1 investor presentation',url:furukawaDeck,relevance:'component',summary:'Optical Solutions 상반기 매출 JPY130.9B(전년 JPY91.0B); TMT 페룰 2배, DFB 레이저 칩 5배 확대 목표. CPO 별도 매출 미공개.',implication:'VSFF 페룰과 광소자 생산 확대 계획은 확인되나 실제 CPO 제품 매출로 환산할 수 없음.'});
upBrief('furukawa',{date:'2026-11-09',title:'Furukawa FY2026 H1 Results and optical connectivity capacity',points:['Optical Solutions H1 매출 1,309억 엔, 전년 910억 엔; 부문 영업이익 236억 엔.','MT/TMT 페룰 생산능력 2배 확대 및 DFB 레이저 칩 5배 확대 목표.','연결 상반기 매출 7,377억 엔, 영업이익 576억 엔; CPO 제품별 매출은 미공개.'],implication:'광섬유·커넥터 공급망 실적 확대는 확인되지만 CPO 전용 매출과는 구분합니다.',url:furukawaDeck});
addNews('usconec',{date:'2026-10',title:'US Conec IWCS 2026: APC-MPO 타재질 페룰 상호호환 저손실 연구 (White Paper)',source:'US Conec technical paper',url:whiteMPO,relevance:'component',summary:'서로 다른 MT 페룰 재질과 가이드홀 직경 차이 0.45µm 조건에서 12심 APC-MPO 샘플의 97%가 접속손실 0.25dB 미만.',implication:'CPO 인접 다심 접속의 공차·손실 모델 참고자료. 직접 CPO 매출·양산 증거 아님.'});
window.cpoRevenueSignals=window.cpoRevenueSignals||[];
[
{company:'Coherent',asOf:'2026-11-04',category:'recognized_adjacent_not_cpo_only',period:'FY2027 Q1',amount:'USD >200M',subject:'Scale-across/DCI',url:coherentDeck},
{company:'Coherent',asOf:'2026-11-04',category:'long_term_agreement_not_revenue',period:'5-year LTA',amount:'USD ~20B',subject:'PhotonLink; revenue ramp from early 2028 under this LTA',url:coherentDeck},
{company:'Lumentum',asOf:'2026-11-02',category:'purchase_commitment_not_revenue',period:'multi-year',amount:'USD >5B',subject:'NPO/CPO purchase commitments',url:'https://investor.lumentum.com/financial-news-releases/news-details/2026/Lumentum-Announces-First-Quarter-of-Fiscal-Year-2027-Financial-Results/default.aspx'},
{company:'Furukawa Electric',asOf:'2026-11-09',category:'recognized_segment_not_cpo_only',period:'FY2026 H1',amount:'JPY 130.9B',subject:'Optical Solutions sales (not CPO-specific)',url:furukawaDeck}
].forEach(function(x){if(!window.cpoRevenueSignals.some(function(y){return y.company===x.company&&y.category===x.category&&y.asOf===x.asOf}))window.cpoRevenueSignals.push(x);});
window.cpoWhitePapers=window.cpoWhitePapers||[];
[
{company:'US Conec',published:'2026-10',kind:'technical_paper',title:'A High Density Optical Blind-Mate Connector System for Data Center Optical Networks',url:whiteMMC},
{company:'US Conec',published:'2026-10',kind:'technical_paper',title:'Low-Loss Intermateability of APC-MPO Connectors between Different Material Plugs',url:whiteMPO},
{company:'NVIDIA',published:'2026-01-06',kind:'technical_blog',title:'Scaling Power-Efficient AI Factories with NVIDIA Spectrum-X Ethernet Photonics',url:'https://developer.nvidia.com/blog/scaling-power-efficient-ai-factories-with-nvidia-spectrum-x-ethernet-photonics/'}
].forEach(function(x){if(!window.cpoWhitePapers.some(function(y){return norm(y.url)===norm(x.url)}))window.cpoWhitePapers.push(x);});
function refresh(){if(typeof window.renderVendorList==='function')window.renderVendorList();if(typeof window.renderVendor==='function')window.renderVendor();var badge=document.getElementById('buildBadge');if(badge)badge.textContent='v2.17.13 · CPO Revenue & White Papers · 2026-11-10';}
if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',refresh,{once:true});else refresh();
})();