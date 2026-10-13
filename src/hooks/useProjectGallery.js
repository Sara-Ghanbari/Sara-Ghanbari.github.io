import { useCallback, useEffect, useRef, useState } from 'react'

const EDGE_TOLERANCE = 2

/** Measure real cards only; keep controls in sync after scrolling and resizing. */
export default function useProjectGallery(itemCount) {
  const track = useRef(null)
  const [state, setState] = useState({
    index: 0,
    overflow: false,
    start: true,
    end: true,
  })

  const measure = useCallback(() => {
    const element = track.current
    if (!element || !element.children.length) return
    const cards = Array.from(element.children)
    const origin = cards[0].offsetLeft
    const maxScroll = element.scrollWidth - element.clientWidth
    const index = cards.reduce(
      (nearest, card, index) =>
        Math.abs(card.offsetLeft - origin - element.scrollLeft) <
        Math.abs(cards[nearest].offsetLeft - origin - element.scrollLeft)
          ? index
          : nearest,
      0,
    )
    const next = {
      index,
      overflow: maxScroll > EDGE_TOLERANCE,
      start: element.scrollLeft <= EDGE_TOLERANCE,
      end: element.scrollLeft >= maxScroll - EDGE_TOLERANCE,
    }
    setState((previous) =>
      Object.keys(next).every((key) => previous[key] === next[key])
        ? previous
        : next,
    )
  }, [])

  useEffect(() => {
    const element = track.current
    if (!element) return
    const observer = new ResizeObserver(measure)
    observer.observe(element)
    Array.from(element.children).forEach((card) => observer.observe(card))
    measure()
    return () => observer.disconnect()
  }, [itemCount, measure])

  function goTo(index) {
    const element = track.current
    if (!element || !element.children.length) return
    const target = Math.max(0, Math.min(element.children.length - 1, index))
    element.scrollTo({
      left:
        element.children[target].offsetLeft - element.children[0].offsetLeft,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'instant'
        : 'smooth',
    })
  }

  function onKeyDown(event) {
    if (event.target !== event.currentTarget) return
    if (event.key !== 'ArrowRight' && event.key !== 'ArrowLeft') return
    event.preventDefault()
    goTo(state.index + (event.key === 'ArrowRight' ? 1 : -1))
  }

  return { track, ...state, measure, goTo, onKeyDown }
}
