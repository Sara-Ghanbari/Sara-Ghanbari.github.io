import SectionHeader from '../ui/SectionHeader'
import ContentSection from '../layout/ContentSection'
import ProjectGallery from '../projects/ProjectGallery'
export default function MachineLearningSection({ onSelectProject }) {
  return (
    <ContentSection
      id="ml"
      className="content-section ml-section"
      aria-labelledby="ml-heading"
    >
      <div className="section-inner">
        <SectionHeader
          number="04"
          label="MACHINE LEARNING"
          title={
            <span id="ml-heading">
              Beyond the model.
              <br />
              <em>Into the real world.</em>
            </span>
          }
        >
          Computer vision, biometric identification, and careful evaluation.
          Research with a path to practical use.
        </SectionHeader>
        <ProjectGallery
          ids={[
            'biometric',
            // 'vision',
            'lfw',
            'features',
            'vgg',
            'gan',
            'notes',
          ]}
          label="machine learning"
          onSelectProject={onSelectProject}
        />
      </div>
    </ContentSection>
  )
}
