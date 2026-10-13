import { profile } from '../../data/profile'
import Portrait from '../ui/Portrait'
export default function HeroSection() {
  return (
    <section
      id="intro"
      className="hero is-visible"
      aria-labelledby="hero-title"
    >
      <div className="hero-top"></div>
      <div className="hero-body">
        <div className="hero-profile-row">
          <Portrait src={profile.portrait} />
          <div className="mobile-profile">
            <p className="profile-roles">
              {profile.roles[0]} <span>{profile.roles[1]}</span>
            </p>
            <p>{profile.degree}</p>
            <p className="profile-location">
              <span aria-hidden="true">⌖</span> {profile.location}
            </p>
          </div>
        </div>
        <p className="eyebrow">HI, I’M SARA GHANBARI</p>
        <h1 id="hero-title">
          Human-centered.
          <br />
          <span>Data-driven.</span>
        </h1>
        <p className="hero-description">
          I build intuitive web experiences and applied AI systems — turning
          complex data into something people can use.
        </p>
      </div>
      <div className="hero-bottom">
        <span>CODE WITH PURPOSE. BUILD WITH CURIOSITY.</span>
        <a href="#about">
          Scroll to discover <span aria-hidden="true">↓</span>
        </a>
      </div>
    </section>
  )
}
