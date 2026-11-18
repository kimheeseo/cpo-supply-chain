# CPO Supply Chain v2.17.16 · 2026-11-19

## 신규 기능: 전기 데이터 / 전원 / 광 신호 흐름 애니메이션

### 1. 실사형 CPO 3D
- 송신(TX): Switch ASIC의 전기 데이터 → Optical Engine (PIC/변조기) → FAU/Optical fiber의 변조 광
- 외부광원(ELS): CW(연속파) 레이저 → PM fiber → Optical Engine (광 반송파 공급)
- 수신(RX): Optical fiber의 광 데이터 → Optical Engine (photodetector/TIA) → Switch ASIC의 전기 데이터
- 전원 공급(DC): 보드/패키지 전원 경로를 통해 Switch ASIC, 광엔진, ELS에 별도로 공급하는 교육용 경로
- 색상: 전기 데이터(주황), 광 데이터(하늘), CW 레이저(노랑), DC 전원(보라)
- 조작: 송신/수신 전환, 전체/데이터/전원/레이저 필터, 재생/일시정지, ×0.5/×1/×2 속도

### 2. 패키징 비교
- 2D: 다이 간 기판 수평 데이터 경로 + 별도 DC 전원 경로
- 2.5D: 인터포저 경유 데이터 경로 + 패키지 전원 경로
- 3D TSV + Micro-bump: TSV(다이 내부)와 Micro-bump(다이 간)를 연속 통과하는 수직 신호 및 전원 경로
- 3D Hybrid Bonding: Cu 직접 접합 계면 경로 및 선택적 TSV 관통 경로
- 분해 보기에서는 부품 위치와 신호 경로 사이의 불일치를 피하기 위해 흐름 표현 숨김

### 주의 사항
- 입자 애니메이션 속도는 실제 전기 전파 속도, 광속, 신호 지연 또는 데이터 속도와 무관합니다.
- 선로는 실제 제조사의 CAD/netlist, 물리적 회로 설계, 레이아웃, 임피던스 및 전원 레일 정의와 무관한 **교육용 개념 배선**입니다.
- ELS 공급은 일반적으로 광전 변환을 위한 광 반송파이며, 실제 데이터는 OE의 광 변조에 의해 부호화됩니다.
- DC 전원 흐름은 데이터 신호(PAM4 등)와 분리하여 보여줍니다.
- 실제 제품 사양과 정확한 전원 경로는 각 제조사 제품 설계 및 공식 데이터시트 확인이 필요합니다.
- 본 애니메이션에서는 패키징 일반 구조와 광학 CPO 보드를 혼합하여 실제 패키지 설계를 주장하지 않습니다.

### 적용 파일
- `cpo_modules/cpo-expansion-20261118.js` — 기존 3D 컨텍스트를 확장 모듈에 제공하고 버전 표시
- `cpo_modules/cpo-electrical-flow-20261119.js` — 경로 및 입자 애니메이션, UI 컨트롤, 상태 설명
- `index.html` — v2.17.16 파일 연결 및 캐시 무효화

### 기술 자료
- NVIDIA – https://developer.nvidia.com/blog/how-industry-collaboration-fosters-nvidia-co-packaged-optics/
- NVIDIA – https://developer.nvidia.com/blog/a-new-era-in-data-center-networking-with-nvidia-silicon-photonics-based-network-switching/
- TSMC – https://research.tsmc.com/english/research/interconnect/off-chip-interconnect/publish-time-2.html

검증 범위: 정적 JavaScript 파싱 및 리포지토리 연결·배포 상태. 별도 WebGL 실기기 자동화 검증이 되지 않았으면 성공했다고 표현하지 않습니다.
