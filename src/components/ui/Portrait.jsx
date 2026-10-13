/** Supply an image source here when the portrait is ready. */
export default function Portrait({ src }) {
  return (
    <div className="hero-portrait">
      {src ? (
        <img src={src} alt="Sara Ghanbari" />
      ) : (
        <>
          <svg viewBox="0 0 120 140" fill="none" aria-hidden="true">
            <circle cx="60" cy="48" r="23" />
            <path d="M17 122v-12a43 43 0 0 1 86 0v12" />
          </svg>
          <span>Portrait coming soon</span>
        </>
      )}
    </div>
  )
}
