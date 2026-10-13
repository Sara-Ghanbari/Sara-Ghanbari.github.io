export default function SocialIcon({ kind }) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="social-icon">
      {kind === 'linkedin' ? (
        <>
          <rect x="3" y="3" width="18" height="18" rx="3" fill="currentColor" />
          <path
            d="M7 10v7m0-10v.1M11 17v-7m0 3c0-4 6-4 6 0v4"
            fill="none"
            stroke="#30233e"
            strokeWidth="2"
          />
        </>
      ) : (
        <g
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="3" y="5" width="18" height="14" rx="3" />
          <path className="envelope-flap" d="m3 6 9 7 9-7" />
        </g>
      )}
    </svg>
  )
}
