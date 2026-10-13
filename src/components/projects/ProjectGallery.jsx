import useProjectGallery from '../../hooks/useProjectGallery'
import ProjectCard from './ProjectCard'

export default function ProjectGallery({ ids, label, onSelectProject }) {
  const { track, index, overflow, start, end, measure, goTo, onKeyDown } =
    useProjectGallery(ids.length)
  return (
    <div className="project-gallery" role="region" aria-label={label}>
      <div
        className="gallery-track"
        ref={track}
        onScroll={measure}
        tabIndex={overflow ? 0 : undefined}
        aria-label={overflow ? `${label}, scroll horizontally` : label}
        onKeyDown={onKeyDown}
      >
        {ids.map((id, index) => (
          <ProjectCard
            key={id}
            id={id}
            number={index + 1}
            onSelect={onSelectProject}
          />
        ))}
      </div>
      {overflow && (
        <div className="gallery-controls">
          <span aria-live="polite">
            {String(index + 1).padStart(2, '0')}{' '}
            <span>/ {String(ids.length).padStart(2, '0')}</span>
          </span>
          <p>Swipe or scroll horizontally</p>
          <div>
            <button
              aria-label={`Previous ${label} project`}
              disabled={start}
              onClick={() => goTo(index - 1)}
            >
              ←
            </button>
            <button
              aria-label={`Next ${label} project`}
              disabled={end}
              onClick={() => goTo(index + 1)}
            >
              →
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
