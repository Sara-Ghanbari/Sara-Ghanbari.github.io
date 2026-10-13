export default function SectionHeader({ number, label, title, children }) {
  return (
    <header className="section-header">
      <p className="eyebrow">
        <span>{number} /</span> {label}
      </p>
      <h2>{title}</h2>
      {children && <p className="section-description">{children}</p>}
    </header>
  )
}
