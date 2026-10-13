import SectionHeader from '../ui/SectionHeader'
import ContentSection from '../layout/ContentSection'
import ProjectGallery from '../projects/ProjectGallery'
export default function WebSection({ onSelectProject }) {
  return (
    <ContentSection
      id="web"
      className="content-section "
      aria-labelledby="web-heading"
    >
      <div className="section-inner">
        <SectionHeader
          number="03"
          label="WEB DEVELOPMENT"
          title={
            <span id="web-heading">
              Complex data.
              <br />
              <em>Clear experiences.</em>
            </span>
          }
        >
          Interfaces that make information useful. From geospatial exploration
          to real-time AI monitoring.
        </SectionHeader>
        <ProjectGallery
          ids={['gis', 'vision']}
          label="web development"
          onSelectProject={onSelectProject}
        />
      </div>
    </ContentSection>
  )
}
