import { useRef } from 'react'
import StarField from '../visuals/StarField'

export default function ContentSection({ children, ...props }) {
  const sectionRef = useRef(null)
  return (
    <section ref={sectionRef} {...props}>
      <StarField containerRef={sectionRef} />
      {children}
    </section>
  )
}
