export default function MapVisual() {
  return (
    <div
      className="map-visual"
      aria-label="Illustrative geospatial interface, not a project screenshot"
    >
      <div className="mock-toolbar">
        <span>
          <i /> ATLAS / EXPLORER
        </span>
        <span>↗</span>
      </div>
      <svg viewBox="0 0 600 235" aria-hidden="true">
        <defs>
          <pattern
            id="grid"
            width="30"
            height="30"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M30 0H0V30"
              fill="none"
              stroke="#c7e5db"
              strokeOpacity=".08"
            />
          </pattern>
        </defs>
        <rect width="600" height="235" fill="url(#grid)" />
        <g stroke="#759e90" strokeWidth="1" fill="#324f49">
          <path d="m12 61 115-39 71 64-46 93-129-10Z" />
          <path d="m198 86 90-55 104 50-16 76-156 25-68-3Z" />
          <path d="m392 81 98-60 98 54-13 125-199-43Z" />
        </g>
        <path
          d="M-20 194Q120 211 175 122T385 107T630 37"
          fill="none"
          stroke="#8dd4c1"
          strokeWidth="13"
          opacity=".4"
        />
        <path
          d="m74 0 50 85 120 18 94 91 262-5M0 126l138 24L278 0m52 235 48-143L558 0"
          fill="none"
          stroke="#d1dac0"
          strokeOpacity=".5"
          strokeWidth="2"
        />
        {[
          [124, 85],
          [244, 103],
          [378, 92],
          [338, 194],
        ].map(([x, y]) => (
          <g key={x}>
            <circle cx={x} cy={y} r="15" fill="#b4efd6" opacity=".13" />
            <circle cx={x} cy={y} r="4" fill="#b4efd6" />
          </g>
        ))}
      </svg>
      <div className="mock-caption">
        <span>Layers & spatial insights</span>
        <span>Illustrative interface</span>
      </div>
    </div>
  )
}
