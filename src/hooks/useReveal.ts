import { useEffect, useRef, useState } from 'react'

type UseRevealOptions = {
  threshold?: number
  rootMargin?: string
}

export function useReveal<T extends HTMLElement = HTMLDivElement>(
  options: UseRevealOptions = {},
) {
  const ref = useRef<T | null>(null)
  const [visible, setVisible] = useState(false)
  const { threshold = 0.12, rootMargin = '0px 0px -48px 0px' } = options

  useEffect(() => {
    const el = ref.current
    if (!el || visible) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold, rootMargin },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, rootMargin, visible])

  return { ref, visible }
}
