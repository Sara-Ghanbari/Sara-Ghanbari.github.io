import { useEffect } from 'react'

const GESTURE_THRESHOLD = 35
const GESTURE_IDLE_MS = 180
const TRANSITION_MS = 850

/** One wheel gesture advances one slide; oversized slides retain native scrolling. */
export default function useSectionScroll() {
  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 901px) and (pointer: fine)')
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)')
    let accumulated = 0
    let previousTime = 0
    let lockedUntil = 0
    let previousDirection = 0

    function onWheel(event) {
      if (
        !desktop.matches ||
        event.ctrlKey ||
        event.defaultPrevented ||
        document.querySelector('dialog[open]') ||
        event.shiftKey ||
        Math.abs(event.deltaX) > Math.abs(event.deltaY)
      )
        return

      const slides = [...document.querySelectorAll('main > section')]
      if (!slides.length || event.deltaY === 0) return

      const direction = Math.sign(event.deltaY)
      const now = performance.now()
      const currentIndex = slides.findIndex((slide) => {
        const bounds = slide.getBoundingClientRect()
        return bounds.top <= innerHeight / 2 && bounds.bottom > innerHeight / 2
      })
      if (currentIndex < 0) return

      // Preserve scrolling inside independent scrollable controls.
      for (
        let node = event.target;
        node instanceof HTMLElement && node !== document.body;
        node = node.parentElement
      ) {
        const overflow = getComputedStyle(node).overflowY
        if (
          /(auto|scroll)/.test(overflow) &&
          node.scrollHeight > node.clientHeight
        ) {
          const canScroll =
            direction > 0
              ? node.scrollTop + node.clientHeight < node.scrollHeight - 1
              : node.scrollTop > 0
          if (canScroll) return
        }
      }

      if (now < lockedUntil) {
        event.preventDefault()
        return
      }

      const bounds = slides[currentIndex].getBoundingClientRect()
      const hasMoreContent =
        direction > 0 ? bounds.bottom > innerHeight + 2 : bounds.top < -2
      if (bounds.height > innerHeight + 2 && hasMoreContent) {
        accumulated = 0
        return
      }

      const nextSlide = slides[currentIndex + direction]
      if (!nextSlide) return
      event.preventDefault()

      if (
        now - previousTime > GESTURE_IDLE_MS ||
        direction !== previousDirection
      )
        accumulated = 0
      previousTime = now
      previousDirection = direction
      const unit =
        event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? innerHeight : 1
      accumulated += Math.abs(event.deltaY) * unit
      if (accumulated < GESTURE_THRESHOLD) return

      accumulated = 0
      lockedUntil = now + TRANSITION_MS
      nextSlide.scrollIntoView({
        behavior: reducedMotion.matches ? 'instant' : 'smooth',
        block: 'start',
      })
    }

    window.addEventListener('wheel', onWheel, { passive: false })
    return () => window.removeEventListener('wheel', onWheel)
  }, [])
}
