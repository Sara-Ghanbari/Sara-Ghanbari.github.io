export default function NetworkVisual() {
  return (
    <div
      className="network-visual"
      aria-label="Illustration of a neural network"
    >
      <svg viewBox="0 0 600 260" aria-hidden="true">
        {[0, 1, 2].flatMap((layer) =>
          Array.from({ length: 4 }, (_, a) =>
            Array.from({ length: 4 }, (_, b) => (
              <line
                key={`${layer}-${a}-${b}`}
                x1={90 + layer * 140}
                y1={45 + a * 56}
                x2={230 + layer * 140}
                y2={45 + b * 56}
                stroke={a === b ? '#bc9df2' : '#b6a4d8'}
                opacity={a === b ? 0.6 : 0.12}
              />
            )),
          ),
        )}
        {[0, 1, 2, 3].flatMap((layer) =>
          Array.from({ length: 4 }, (_, i) => (
            <g key={`${layer}-${i}`}>
              <circle
                cx={90 + layer * 140}
                cy={45 + i * 56}
                r="16"
                fill="#262332"
                stroke="#b99ae4"
                strokeOpacity=".4"
              />
              <circle
                cx={90 + layer * 140}
                cy={45 + i * 56}
                r="5"
                fill={i === layer ? '#c6f1d7' : '#ac8bcf'}
              />
            </g>
          )),
        )}
      </svg>
      <div className="mock-caption">
        <span>INPUT → REPRESENTATION → IDENTITY</span>
        <span>Concept illustration</span>
      </div>
    </div>
  )
}
