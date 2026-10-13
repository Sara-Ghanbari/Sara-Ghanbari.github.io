import { useEffect, useRef, useState } from 'react'

export default function useCopyEmail(email) {
  const [copied, setCopied] = useState(false)
  const resetTimer = useRef(null)

  useEffect(() => () => clearTimeout(resetTimer.current), [])

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email)
      setCopied(true)
      clearTimeout(resetTimer.current)
      resetTimer.current = setTimeout(() => setCopied(false), 2500)
    } catch {
      window.location.href = `mailto:${email}`
    }
  }

  return { copied, copyEmail }
}
