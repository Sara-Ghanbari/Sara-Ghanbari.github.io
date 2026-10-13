import { useRef } from 'react'
import usePointerGlow from '../../hooks/usePointerGlow'

/** Decorative stars share the exact tile and origin of the section background. */
export default function StarField({ containerRef }) {
  const glowRef = useRef(null)
  usePointerGlow(containerRef, glowRef)
  return <div ref={glowRef} className="star-field-glow" aria-hidden="true" />
}
