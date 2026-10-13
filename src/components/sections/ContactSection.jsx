import { profile } from '../../data/profile'
import { email, resumes } from '../../data/portfolio'
import Arrow from '../ui/Arrow'
import useCopyEmail from '../../hooks/useCopyEmail'
import SectionHeader from '../ui/SectionHeader'
import ContentSection from '../layout/ContentSection'
const copyrightYear = new Date().getFullYear()

export default function ContactSection() {
  const { copied, copyEmail } = useCopyEmail(email)
  return (
    <ContentSection
      id="contact"
      className="content-section contact-section"
      aria-labelledby="contact-heading"
    >
      <div className="section-inner">
        <SectionHeader
          number="06"
          label="GET IN TOUCH"
          title={
            <span id="contact-heading">
              Let’s build something
              <br />
              <em>that makes sense.</em>
            </span>
          }
        >
          Working on an intuitive web product, an applied ML problem, or
          something in between? I’d love to hear about it.
        </SectionHeader>
        <a className="contact-email" href={`mailto:${email}`}>
          {email}
          <Arrow diagonal />
        </a>
        <div className="contact-actions">
          <button className="button secondary" onClick={copyEmail}>
            {copied ? 'Email copied ✓' : 'Copy email'}
            <span aria-live="polite" className="sr-only">
              {copied ? 'Email address copied to clipboard' : ''}
            </span>
          </button>
          <a
            className="text-link"
            href={profile.linkedIn}
            target="_blank"
            rel="noreferrer"
          >
            Connect on LinkedIn <Arrow diagonal />
          </a>
        </div>
        <div className="resume-box">
          <div>
            <p className="eyebrow">A CLOSER LOOK</p>
            <h3>Choose your perspective.</h3>
            <p>Two résumés. The same thoughtful approach.</p>
          </div>
          <div>
            <a href={resumes.web} target="_blank" rel="noreferrer">
              Web development <span>PDF ↗</span>
            </a>
            <a href={resumes.ml} target="_blank" rel="noreferrer">
              Machine learning <span>PDF ↗</span>
            </a>
          </div>
        </div>
        <footer>
          <span>© {copyrightYear} Sara Ghanbari</span>
          <a href="#intro">Back to the top ↑</a>
        </footer>
      </div>
    </ContentSection>
  )
}
