import { useEffect } from 'react'

/** Update only CSS variables, at most once per frame; React never rerenders on movement. */
export default function usePointerGlow(containerRef, glowRef) {
  useEffect(() => {
    const container = containerRef.current
    const glow = glowRef.current
    if (!container || !glow) return

    const finePointer = window.matchMedia(
      '(any-hover: hover) and (any-pointer: fine)',
    )
    let frame = null
    let pointer = null

    const paint = () => {
      frame = null
      if (!pointer) return
      const bounds = container.getBoundingClientRect()
      glow.style.setProperty('--star-x', `${pointer.x - bounds.left}px`)
      glow.style.setProperty('--star-y', `${pointer.y - bounds.top}px`)
      glow.dataset.active = 'true'
    }

    const handleMove = (event) => {
      if (!finePointer.matches || event.pointerType === 'touch') return
      pointer = { x: event.clientX, y: event.clientY }
      if (frame === null) frame = requestAnimationFrame(paint)
    }

    const reset = () => {
      if (frame !== null) cancelAnimationFrame(frame)
      frame = null
      pointer = null
      delete glow.dataset.active
    }

    // Reset during scroll so a stale pointer cannot illuminate the next section.
    container.addEventListener('pointermove', handleMove, { passive: true })
    container.addEventListener('pointerleave', reset)
    container.addEventListener('pointercancel', reset)
    window.addEventListener('scroll', reset, { passive: true })
    window.addEventListener('blur', reset)
    finePointer.addEventListener('change', reset)

    return () => {
      reset()
      container.removeEventListener('pointermove', handleMove)
      container.removeEventListener('pointerleave', reset)
      container.removeEventListener('pointercancel', reset)
      window.removeEventListener('scroll', reset)
      window.removeEventListener('blur', reset)
      finePointer.removeEventListener('change', reset)
    }
  }, [containerRef, glowRef])
}
