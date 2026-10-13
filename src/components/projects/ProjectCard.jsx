import { projects } from '../../data/portfolio'
import MapVisual from '../visuals/MapVisual'
import NetworkVisual from '../visuals/NetworkVisual'
import ProjectVisual from '../visuals/ProjectVisual'
import Tags from '../ui/Tags'
import Arrow from '../ui/Arrow'

export default function ProjectCard({ id, number, onSelect }) {
  const project = projects[id]
  return (
    <button
      className="featured-project gallery-card"
      onClick={() => onSelect(id)}
      aria-label={`Explore ${project.name}`}
    >
      {id === 'gis' ? (
        <MapVisual />
      ) : id === 'biometric' ? (
        <NetworkVisual />
      ) : (
        <ProjectVisual kind={id} />
      )}
      <div className="project-info">
        <div>
          <span className="eyebrow">
            {String(number).padStart(2, '0')} / {project.label}
          </span>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
        <span className="circle-arrow">
          <Arrow diagonal />
        </span>
      </div>
      <Tags items={project.stack} />
      <span className="project-action">
        Explore project <Arrow />
      </span>
    </button>
  )
}
