export function SmileVisual({ overlay = false, className = '' }: { overlay?: boolean; className?: string }) {
  return (
    <div className={`relative overflow-hidden rounded-[32px] bg-gradient-to-br from-[#f7d8c8] via-[#fff8ee] to-[#d9a85d] ${className}`}>
      <div className="absolute inset-x-[10%] bottom-[22%] h-[24%] rounded-[100%] bg-white shadow-[inset_0_-12px_24px_rgba(120,70,40,.15)]" />
      <div className="absolute inset-x-[18%] bottom-[29%] grid grid-cols-8 gap-1">
        {Array.from({ length: 8 }).map((_, i) => <span key={i} className="h-16 rounded-b-2xl rounded-t-md bg-white/95 shadow-sm" />)}
      </div>
      <div className="absolute inset-x-[13%] bottom-[21%] h-3 rounded-full bg-[#a75f57]/35 blur-sm" />
      <div className="absolute left-[22%] top-[20%] h-12 w-12 rounded-full bg-white/30 blur-xl" />
      {overlay ? <DSDOverlayCanvas /> : null}
    </div>
  );
}

export function DSDOverlayCanvas() {
  return (
    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 1000 620" preserveAspectRatio="none">
      <defs><filter id="glow"><feGaussianBlur stdDeviation="2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs>
      <g stroke="#F8F2E8" strokeWidth="1" opacity=".55">{[150,250,350,450,550,650,750,850].map((x)=><line key={x} x1={x} y1="70" x2={x} y2="560"/>)}{[120,210,300,390,480].map((y)=><line key={y} x1="90" y1={y} x2="910" y2={y}/>)}</g>
      <line x1="500" y1="55" x2="500" y2="585" stroke="#C9A45C" strokeWidth="2" strokeDasharray="8 8" filter="url(#glow)" />
      <text x="512" y="92" fill="#C9A45C" fontSize="18" fontWeight="700">MIDLINE</text>
      <line x1="120" y1="240" x2="880" y2="240" stroke="#fff" strokeWidth="2" opacity=".85"/><text x="126" y="226" fill="#fff" fontSize="15" fontWeight="700">HIGH SMILE LINE</text>
      <line x1="150" y1="393" x2="850" y2="393" stroke="#C9A45C" strokeWidth="2"/><text x="160" y="383" fill="#C9A45C" fontSize="15" fontWeight="700">INCISAL EDGE</text>
      <path d="M170 430 C 340 520, 670 520, 830 430" fill="none" stroke="#C9A45C" strokeWidth="3" filter="url(#glow)"/><text x="690" y="462" fill="#C9A45C" fontSize="16" fontWeight="700">SMILE CURVE</text>
      <path d="M190 470 C 360 555, 650 555, 810 470" fill="none" stroke="#fff" strokeWidth="1.5" strokeDasharray="10 7"/><text x="685" y="522" fill="#fff" fontSize="14" fontWeight="700">LOWER LIP LINE</text>
      <g stroke="#C9A45C" strokeWidth="1.5" fill="none" opacity=".9">{Array.from({length:8}).map((_,i)=><rect key={i} x={315+i*47} y={292+(i%2)*5} width="41" height="104" rx="17"/>)}<line x1="315" y1="292" x2="691" y2="292"/><line x1="315" y1="397" x2="691" y2="397"/></g>
      <g fill="#C9A45C" fontSize="14" fontWeight="700"><text x="278" y="320">62%</text><text x="704" y="320">62%</text><text x="458" y="274">GOLDEN RATIO</text></g>
    </svg>
  );
}
