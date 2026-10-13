import { experience } from '../../data/experience'
import { useState } from 'react'
import ProjectDialog from '../projects/ProjectDialog'
import SectionHeader from '../ui/SectionHeader'
import ContentSection from '../layout/ContentSection'
export default function ExperienceSection() {
  const [selected, setSelected] = useState(null)
  return (
    <>
      <ContentSection
        id="experience"
        className="content-section"
        aria-labelledby="experience-heading"
      >
        <div className="section-inner">
          <SectionHeader
            number="05"
            label="EXPERIENCE & EDUCATION"
            title={
              <span id="experience-heading">
                Built in practice.
                <br />
                <em>Grounded in research.</em>
              </span>
            }
          />
          <p className="timeline-guide">
            2018 → Present · Research and teaching roles undertaken during my
            bachelor’s at the University of Tehran.
          </p>

          <div
            className="career-timeline grouped-timeline"
            role="region"
            aria-label="Education and career timeline, chronological by start date"
            tabIndex={0}
          >
            <ol>
              {experience.map((item) => (
                <li
                  key={item.id}
                  className={`career-chapter chapter-${item.id}`}
                >
                  <span className="timeline-node" />
                  <article>
                    <span className="timeline-date">{item.date}</span>
                    <span className="timeline-category">{item.category}</span>
                    <h3>{item.title}</h3>
                    <p className="organization">{item.organization}</p>
                    {item.id === 'bachelor' && (
                      <p className="study-context">
                        Research & teaching alongside my degree ↓
                      </p>
                    )}
                    <button
                      className="timeline-details"
                      aria-label={`View details: ${item.title}`}
                      onClick={() => setSelected(item)}
                    >
                      View details ↗
                    </button>
                  </article>
                </li>
              ))}
            </ol>
          </div>
          <div className="publications">
            <p className="eyebrow">SELECTED PUBLICATIONS</p>
            <p>
              <span>ICEE ’22</span> User Identification Based on Hand
              Geometrical Biometrics Using MediaPipe
            </p>
            <p>
              <span>ICRoM ’22</span> Deep-HFID: Deep Neural Network-Based Hands
              and Face Biometric Identification System Using Metric Learning
            </p>
          </div>
        </div>
      </ContentSection>
      <ProjectDialog
        project={
          selected
            ? {
                label: selected.category,
                title: selected.title,
                name: selected.title,
                description: selected.description,
                role: selected.date + ' · ' + selected.organization,
                items: [],
                stack: selected.stack,
              }
            : null
        }
        onClose={() => setSelected(null)}
      />
    </>
  )
}
