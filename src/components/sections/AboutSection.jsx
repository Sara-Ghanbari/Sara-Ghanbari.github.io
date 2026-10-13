import SectionHeader from '../ui/SectionHeader'
import ContentSection from '../layout/ContentSection'
export default function AboutSection() {
  return (
    <ContentSection
      id="about"
      className="content-section"
      aria-labelledby="about-heading"
    >
      <div className="section-inner">
        <SectionHeader
          number="02"
          label="ABOUT & SKILLS"
          title={
            <span id="about-heading">
              Two disciplines.
              <br />
              <em>One curious mind.</em>
            </span>
          }
        />
        <p className="about-copy">
          I’m a Computer Science master’s student at Saarland University, with a
          background in Electrical Engineering. I enjoy the space between how a
          system works and how people experience it.
        </p>
        <div className="skill-columns">
          <div>
            <span className="skill-symbol" aria-hidden="true">
              &lt;/&gt;
            </span>
            <h3>Build the experience</h3>
            <p>
              React · JavaScript · HTML · CSS
              <br />
              REST APIs · AJAX · Responsive UI
              <br />
              Figma · Web accessibility
            </p>
          </div>
          <div>
            <span className="skill-symbol" aria-hidden="true">
              ∿
            </span>
            <h3>Understand the data</h3>
            <p>
              Python · PyTorch · TensorFlow
              <br />
              Scikit-learn · NumPy · Pandas
              <br />
              Computer vision · Model evaluation
            </p>
          </div>
        </div>
        <p className="shared-tools">
          <span>SHARED TOOLKIT</span> Git · Docker · Linux · C/C++ · MATLAB
        </p>
        <div className="education">
          <div>
            <span>2024 — PRESENT</span>
            <h3>M.Sc. Computer Science</h3>
            <p>Saarland University · Germany</p>
          </div>
          <div>
            <span>2018 — 2023</span>
            <h3>B.Sc. Electrical Engineering</h3>
            <p>University of Tehran · Control Systems</p>
          </div>
        </div>
        <p className="languages">
          Persian <span>Native</span> English <span>Professional</span> German{' '}
          <span>Basic</span>
        </p>
      </div>
    </ContentSection>
  )
}
