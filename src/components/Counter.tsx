import { useState } from 'react'

type CounterProps = {
  initial?: number
}

export function Counter({ initial = 0 }: CounterProps) {
  const [count, setCount] = useState(initial)

  return (
    <div className="widget">
      <p className="widget-label">カウンター</p>
      <p className="widget-value" aria-live="polite">{count}</p>
      <div className="widget-actions">
        <button type="button" onClick={() => setCount((value) => value - 1)}>
          -1
        </button>
        <button type="button" onClick={() => setCount(initial)}>
          リセット
        </button>
        <button type="button" onClick={() => setCount((value) => value + 1)}>
          +1
        </button>
      </div>
    </div>
  )
}
