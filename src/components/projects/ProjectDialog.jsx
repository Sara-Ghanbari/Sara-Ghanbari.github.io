import { useEffect, useId, useRef } from 'react'
import { email } from '../../data/portfolio'
import Arrow from '../ui/Arrow'
import Tags from '../ui/Tags'

export default function ProjectDialog({ project, onClose }) {
  const titleId = useId()
  const dialogRef = useRef(null)
  useEffect(() => {
    if (!project) return
    const dialog = dialogRef.current
    dialog.showModal()
    document.body.classList.add('modal-open')
    return () => {
      dialog.close()
      document.body.classList.remove('modal-open')
    }
  }, [project])
  return (
    <dialog
      ref={dialogRef}
      onCancel={() => onClose()}
      onClick={(event) => {
        if (event.target === dialogRef.current) onClose()
      }}
      aria-labelledby={titleId}
    >
      <button
        className="dialog-close"
        onClick={() => onClose()}
        aria-label="Close project details"
      >
        ×
      </button>
      {project && (
        <div className="dialog-content">
          <p className="eyebrow">{project.label}</p>
          <h2 id={titleId}>{project.title}</h2>
          <p className="dialog-description">{project.description}</p>
          <p className="dialog-role">{project.role}</p>
          {project.items.length > 0 && (
            <>
              <h3>My contribution</h3>
              <ul>
                {project.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </>
          )}
          <Tags items={project.stack} />
          {project.items.length > 0 && (
            <p className="project-note">
              This overview is based on my work experience. The portfolio
              visuals are conceptual illustrations; no client footage or
              proprietary interfaces are shown.
            </p>
          )}
          <a
            className="button primary"
            href={`mailto:${email}?subject=${encodeURIComponent('Let’s talk about ' + project.name)}`}
          >
            Discuss this work <Arrow diagonal />
          </a>
        </div>
      )}
    </dialog>
  )
}
