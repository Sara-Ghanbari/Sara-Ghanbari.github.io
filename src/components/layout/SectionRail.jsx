import { sections } from '../../data/portfolio'
const paths = {
  intro: 'M3 11 12 3l9 8M5 10v11h5v-7h4v7h5V10',
  about: 'M16 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 21v-2a8 8 0 0 1 16 0v2',
  web: 'm8 6-6 6 6 6m8-12 6 6-6 6M14 3l-4 18',
  ml: 'M12 3v5m0 8v5M3 12h5m8 0h5M5 5l4 4m6 6 4 4M5 19l4-4m6-6 4-4M8 8h8v8H8Z',
  experience: 'M8 6V3h8v3M3 7h18v14H3ZM3 12l9 4 9-4M12 13v5',
  contact: 'M3 5h18v14H3ZM3 6l9 7 9-7',
}
export default function SectionRail({ active }) {
  return (
    <nav className="section-rail" aria-label="Section navigation">
      {sections.map(([id, label]) => (
        <a
          key={id}
          href={`#${id}`}
          aria-label={label}
          aria-current={active === id ? 'location' : undefined}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d={paths[id]} />
          </svg>
          <span className="rail-tooltip">{label}</span>
        </a>
      ))}
    </nav>
  )
}
