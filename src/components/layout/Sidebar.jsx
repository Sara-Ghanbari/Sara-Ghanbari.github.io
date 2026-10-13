import { profile } from '../../data/profile'
import { email, resumes } from '../../data/portfolio'
import Arrow from '../ui/Arrow'
import SocialIcon from '../ui/SocialIcon'
export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="identity">
        <p className="eyebrow">DEVELOPER & RESEARCHER</p>
        <a href="#intro" className="name">
          Sara
          <br />
          Ghanbari<span>.</span>
        </a>
        <p>
          {profile.roles[0]} <br /> {profile.roles[1]}
          <br />
          {profile.degree}
        </p>
        <span className="location">
          <span aria-hidden="true">⌖</span> {profile.location}
        </span>
      </div>
      <div className="sidebar-actions" aria-label="Contact and résumés">
        <a className="button primary sidebar-contact" href="#contact">
          Get in touch <Arrow diagonal />
        </a>
        <div className="sidebar-resumes">
          <a href={resumes.web} target="_blank" rel="noreferrer">
            Web résumé <Arrow diagonal />
          </a>
          <a href={resumes.ml} target="_blank" rel="noreferrer">
            ML résumé <Arrow diagonal />
          </a>
        </div>
      </div>
      <div className="sidebar-bottom">
        <div className="socials">
          <a href={profile.linkedIn} target="_blank" rel="noreferrer">
            <SocialIcon kind="linkedin" /> <span>LinkedIn</span>
          </a>
          <a href={`mailto:${email}`}>
            <SocialIcon kind="email" /> <span>Email</span>
          </a>
        </div>
        <p>Bridging pixels & predictions.</p>
      </div>
    </aside>
  )
}
