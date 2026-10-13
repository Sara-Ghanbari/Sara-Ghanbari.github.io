export default function Landscape() {
  return (
    <svg
      className="landscape"
      viewBox="0 0 1440 1000"
      preserveAspectRatio="xMidYMax slice"
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sky" x2="0" y2="1">
          <stop stopColor="#32204e" />
          <stop offset=".6" stopColor="#805497" />
          <stop offset="1" stopColor="#b398bf" />
        </linearGradient>
        <linearGradient id="mist" x2="0" y2="1">
          <stop stopColor="#8d73a6" />
          <stop offset="1" stopColor="#352946" />
        </linearGradient>
        <symbol id="pine" viewBox="0 0 100 260">
          <path d="M48 0 29 52 40 48 19 87 33 82 8 129 27 122 1 172 23 163 0 211 43 197 43 260 55 260 55 198 99 212 78 165 98 175 73 123 92 131 66 82 81 88 58 48 70 53Z" />
        </symbol>
      </defs>
      <path fill="url(#sky)" d="M0 0h1440v1000H0z" />
      <g fill="#eee5f2" opacity=".6">
        {Array.from({ length: 40 }, (_, i) => (
          <circle
            key={i}
            cx={(i * 197 + 81) % 1440}
            cy={(i * 73 + 31) % 500}
            r={i % 4 === 0 ? 1.8 : 1}
          />
        ))}
      </g>
      <circle cx="1130" cy="183" r="41" fill="#eadbed" opacity=".8" />
      <path
        fill="#756089"
        d="M0 638 130 509 212 551 395 362 450 410 501 388 670 583 849 451 940 526 1120 331 1270 511 1440 442V1000H0Z"
      />
      <path
        fill="url(#mist)"
        d="M0 749 140 674 287 709 463 574 654 703 812 601 1005 715 1177 554 1331 674 1440 601V1000H0Z"
      />
      <path
        fill="#342a4c"
        d="M0 844Q160 709 350 793T720 783T1100 798T1440 733V1000H0Z"
      />
      <g fill="#302341" opacity=".8">
        {Array.from({ length: 26 }, (_, i) => (
          <use
            key={i}
            href="#pine"
            x={i * 61 - 15}
            y={650 + ((i * 37) % 120)}
            width={65 + (i % 3) * 20}
            height={260 + (i % 3) * 35}
          />
        ))}
      </g>
      <g fill="#211a30">
        {Array.from({ length: 19 }, (_, i) => (
          <use
            key={i}
            href="#pine"
            x={i * 88 - 34}
            y={756 + ((i * 47) % 90)}
            width={95 + (i % 3) * 20}
            height={300 + (i % 3) * 32}
          />
        ))}
      </g>
    </svg>
  )
}
