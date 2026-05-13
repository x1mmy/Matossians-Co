import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from 'react'

type BeforeAfterSliderProps = {
  /** Image that shows the “before” state (left side of the comparison). */
  beforeSrc: string
  /** Image that shows the “after” state (full frame underneath). */
  afterSrc: string
  beforeAlt: string
  afterAlt: string
}

const MIN = 4
const MAX = 96

export function BeforeAfterSlider({
  beforeSrc,
  afterSrc,
  beforeAlt,
  afterAlt,
}: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [containerWidth, setContainerWidth] = useState(0)
  const [position, setPosition] = useState(50)
  const [userTouched, setUserTouched] = useState(false)
  const [reduceMotion, setReduceMotion] = useState(false)

  const onInteract = useCallback(() => {
    setUserTouched(true)
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(prefers-reduced-motion: reduce)')
    const sync = () => setReduceMotion(mq.matches)
    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const ro = new ResizeObserver(() => {
      setContainerWidth(el.offsetWidth)
    })
    ro.observe(el)
    setContainerWidth(el.offsetWidth)
    return () => ro.disconnect()
  }, [])

  useEffect(() => {
    if (reduceMotion || userTouched) return
    const id = window.setInterval(() => {
      const t = Date.now() / 5200
      const next = 50 + Math.sin(t * Math.PI * 2) * 11
      setPosition(Math.min(MAX, Math.max(MIN, next)))
    }, 72)
    return () => window.clearInterval(id)
  }, [reduceMotion, userTouched])

  const clamped = Math.min(MAX, Math.max(MIN, position))

  return (
    <div
      ref={containerRef}
      className="relative h-full min-h-[min(100dvh,560px)] w-full touch-pan-y lg:min-h-[100dvh]"
    >
      <img
        src={afterSrc}
        alt={afterAlt}
        className="absolute inset-0 h-full w-full object-cover"
        width={1200}
        height={900}
        loading="eager"
        decoding="async"
        fetchPriority="high"
      />

      <div
        className="absolute inset-y-0 left-0 top-0 z-[1] overflow-hidden"
        style={{ width: `${clamped}%` }}
        aria-hidden
      >
        <img
          src={beforeSrc}
          alt={beforeAlt}
          className="absolute left-0 top-0 h-full object-cover"
          width={1200}
          height={900}
          loading="eager"
          decoding="async"
          style={{
            width: containerWidth > 0 ? `${containerWidth}px` : '100%',
            maxWidth: 'none',
          }}
        />
      </div>

      <div
        className="pointer-events-none absolute inset-y-0 z-[2] w-0.5 bg-white/90 shadow-[1px_0_0_rgba(17,17,16,0.12)]"
        style={{ left: `${clamped}%`, transform: 'translateX(-50%)' }}
        aria-hidden
      />

      <div
        className="pointer-events-none absolute z-[2] flex size-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/80 bg-[#111110]/90 text-white shadow-[0_6px_20px_-6px_rgba(17,17,16,0.45)]"
        style={{ left: `${clamped}%`, top: '50%' }}
        aria-hidden
      >
        <span className="flex gap-0.5">
          <span className="h-4 w-px bg-white/90" />
          <span className="h-4 w-px bg-white/90" />
          <span className="h-4 w-px bg-white/90" />
        </span>
      </div>

      <input
        type="range"
        min={MIN}
        max={MAX}
        step={0.5}
        value={clamped}
        onChange={(e) => {
          onInteract()
          setPosition(Number(e.target.value))
        }}
        onPointerDown={onInteract}
        onKeyDown={onInteract}
        aria-label="Drag to compare before and after photos"
        className="absolute inset-0 z-[3] h-full w-full cursor-ew-resize opacity-0"
      />

      <div className="pointer-events-none absolute left-3 top-3 z-[4] flex flex-wrap gap-2 sm:left-4 sm:top-4">
        <span className="rounded-sm bg-[#111110]/85 px-2.5 py-1 font-jetbrains text-[10px] font-medium uppercase tracking-[0.12em] text-white sm:text-xs">
          Before
        </span>
        <span className="rounded-sm bg-white/90 px-2.5 py-1 font-jetbrains text-[10px] font-medium uppercase tracking-[0.12em] text-[#111110] sm:text-xs">
          After
        </span>
      </div>

      <p className="pointer-events-none absolute bottom-3 left-3 right-3 z-[4] text-center font-jetbrains text-[10px] font-medium uppercase tracking-[0.14em] text-white/90 drop-shadow-[0_1px_2px_rgba(17,17,16,0.65)] sm:bottom-4 sm:text-xs">
        Drag the slider to compare
      </p>
    </div>
  )
}
