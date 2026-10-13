const captions = {
  vision: 'OBJECT DETECTION',
  lfw: 'FACE VERIFICATION',
  features: 'FEATURE SELECTION',
  vgg: 'NEURAL REPRESENTATIONS',
  gan: 'EMOJI GENERATION',
  notes: 'MUSICAL SEQUENCES',
}
export default function ProjectVisual({ kind }) {
  return (
    <div
      className={`project-visual visual-${kind}`}
      aria-label={`${captions[kind]} concept illustration`}
    >
      <svg viewBox="0 0 600 210" aria-hidden="true">
        {kind === 'vision' ? (
          <>
            <path d="M70 165 190 45h230l110 120Z" fill="#314b46" />
            <path
              d="M100 165h400M175 95h270M210 45l-25 120m90-120v120m75-120 25 120m40-120 70 120"
              stroke="#83b9a1"
              opacity=".3"
            />
            <rect
              x="237"
              y="35"
              width="88"
              height="135"
              rx="5"
              fill="none"
              stroke="#bde8d2"
              strokeWidth="2"
            />
            <circle cx="281" cy="72" r="16" fill="#81a596" />
            <path d="M256 141v-34q25-24 50 0v34" fill="#81a596" />
            <text x="240" y="25" fill="#bde8d2" fontSize="12">
              PERSON · DETECTED
            </text>
          </>
        ) : kind === 'lfw' ? (
          <>
            {[145, 375].map((x) => (
              <g key={x} transform={`translate(${x} 25)`}>
                <rect
                  width="90"
                  height="135"
                  rx="12"
                  fill="#344452"
                  stroke="#8aafc9"
                />
                <ellipse cx="45" cy="48" rx="22" ry="28" fill="#7295a8" />
                <path d="M12 120q0-47 33-47t33 47" fill="#7295a8" />
                {[
                  [35, 43],
                  [55, 43],
                  [45, 56],
                  [37, 67],
                  [53, 67],
                ].map(([cx, cy]) => (
                  <circle
                    key={`${cx}-${cy}`}
                    cx={cx}
                    cy={cy}
                    r="2.5"
                    fill="#d3f5e6"
                  />
                ))}
              </g>
            ))}
            <path
              d="M248 95h110m-10-8 10 8-10 8"
              fill="none"
              stroke="#bde8d2"
              strokeWidth="2"
              strokeDasharray="5 4"
            />
            <text
              x="303"
              y="135"
              textAnchor="middle"
              fill="#bde8d2"
              fontSize="12"
            >
              FACE VERIFICATION
            </text>
          </>
        ) : kind === 'features' ? (
          <>
            <path d="M110 25v150h390" fill="none" stroke="#78998d" />
            {Array.from({ length: 32 }, (_, i) => (
              <circle
                key={i}
                cx={155 + (i % 8) * 38 + (i > 15 ? 38 : 0)}
                cy={65 + Math.sin(i * 2.1) * 25 + (i > 15 ? 65 : 0)}
                r={4 + (i % 3)}
                fill={i > 15 ? '#c7a4eb' : '#a8dfc7'}
                opacity=".8"
              />
            ))}
            <path
              d="m145 155 310-115"
              stroke="#efcb94"
              strokeWidth="2"
              strokeDasharray="7 6"
            />
            <text x="395" y="190" fill="#efcb94" fontSize="12">
              DECISION BOUNDARY
            </text>
          </>
        ) : kind === 'vgg' ? (
          <>
            {[0, 1, 2, 3, 4].map((i) => (
              <g key={i} transform={`translate(${95 + i * 86} ${35 + i * 10})`}>
                {[2, 1, 0].map((j) => (
                  <rect
                    key={j}
                    x={j * 7}
                    y={-j * 6}
                    width={58 - i * 7}
                    height={130 - i * 20}
                    rx="3"
                    fill={j === 0 ? '#695780' : '#34333f'}
                    stroke="#bea0db"
                    opacity={1 - j * 0.22}
                  />
                ))}
                <text
                  x="18"
                  y={151 - i * 10}
                  textAnchor="middle"
                  fill="#c3b6d2"
                  fontSize="11"
                >
                  {['INPUT', 'CONV', 'POOL', 'CONV', 'FEATURES'][i]}
                </text>
              </g>
            ))}
          </>
        ) : kind === 'gan' ? (
          <>
            {Array.from({ length: 36 }, (_, i) => (
              <rect
                key={i}
                x={70 + (i % 6) * 13}
                y={65 + Math.floor(i / 6) * 13}
                width="10"
                height="10"
                fill={['#665178', '#c8a5e8', '#94bbac'][(i * 7) % 3]}
                opacity={0.3 + (i % 4) * 0.2}
              />
            ))}
            <path
              d="M165 103h65m-10-8 10 8-10 8M335 103h55m-10-8 10 8-10 8"
              fill="none"
              stroke="#bde8d2"
              strokeWidth="2"
            />
            <rect
              x="240"
              y="65"
              width="85"
              height="80"
              rx="12"
              fill="#44374f"
              stroke="#b998d6"
            />
            <text
              x="282"
              y="112"
              fill="#e0d1ed"
              textAnchor="middle"
              fontSize="26"
            >
              G
            </text>
            <circle cx="447" cy="105" r="48" fill="#e8bf79" />
            <circle cx="431" cy="93" r="5" fill="#574233" />
            <circle cx="463" cy="93" r="5" fill="#574233" />
            <path
              d="M427 116q20 24 40 0"
              fill="none"
              stroke="#574233"
              strokeWidth="4"
              strokeLinecap="round"
            />
          </>
        ) : (
          <>
            {[60, 80, 100, 120, 140].map((y) => (
              <path key={y} d={`M65 ${y}h470`} stroke="#bca5d5" opacity=".2" />
            ))}
            <path
              d="M65 104q12-65 24 0t24 0 24 0 24 0 24 0 24 0"
              fill="none"
              stroke="#bde8d2"
              strokeWidth="2"
            />
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <g
                key={i}
                transform={`translate(${285 + i * 38} ${110 - Math.sin(i) * 28})`}
              >
                <ellipse rx="9" ry="6" transform="rotate(-25)" fill="#c7a4eb" />
                <path
                  d="M8 0v-39l13 7"
                  fill="none"
                  stroke="#c7a4eb"
                  strokeWidth="3"
                />
              </g>
            ))}
            <text
              x="300"
              y="186"
              textAnchor="middle"
              fill="#c5b2db"
              fontSize="12"
            >
              AUDIO → SEQUENCE → NOTES
            </text>
          </>
        )}
      </svg>
      <div className="mock-caption">
        <span>{captions[kind]}</span>
        <span>Concept illustration</span>
      </div>
    </div>
  )
}
