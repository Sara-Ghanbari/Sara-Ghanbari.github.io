import { useEffect, useState } from 'react'

export default function useActiveSection() {
  const [activeSection, setActiveSection] = useState('intro')

  useEffect(() => {
    const sections = [...document.querySelectorAll('main > section')]
    let settleTimer

    // Replace rather than push: scrolling should not fill the Back history.
    function syncLocation() {
      const focusLine = window.innerHeight * 0.45
      const section = sections.find((item) => {
        const bounds = item.getBoundingClientRect()
        return bounds.top <= focusLine && bounds.bottom > focusLine
      })
      if (!section) return
      setActiveSection(section.id)
      const hash = `#${section.id}`
      if (window.location.hash !== hash) {
        window.history.replaceState(window.history.state, '', hash)
      }
    }

    function onScroll() {
      window.clearTimeout(settleTimer)
      settleTimer = window.setTimeout(syncLocation, 160)
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(({ isIntersecting, target }) => {
          if (!isIntersecting) return
          setActiveSection(target.id)
          target.classList.add('is-visible')
        })
      },
      { rootMargin: '-25% 0px -40% 0px', threshold: 0 },
    )
    sections.forEach((section) => observer.observe(section))

    // React mounts after the browser's initial fragment lookup. Restore deep links.
    const initialFrame = window.requestAnimationFrame(() => {
      const target = sections.find(
        (section) => `#${section.id}` === window.location.hash,
      )
      target?.scrollIntoView({ behavior: 'instant', block: 'start' })
      syncLocation()
    })
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('scrollend', syncLocation)
    return () => {
      observer.disconnect()
      window.cancelAnimationFrame(initialFrame)
      window.clearTimeout(settleTimer)
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('scrollend', syncLocation)
    }
  }, [])

  return activeSection
}
