import type { ReactNode } from 'react'

type CalloutType = 'info' | 'warn' | 'tip'

type CalloutProps = {
  type?: CalloutType
  title?: string
  children: ReactNode
}

const labels: Record<CalloutType, string> = {
  info: 'メモ',
  warn: '注意',
  tip: 'コツ',
}

export function Callout({ type = 'info', title, children }: CalloutProps) {
  return (
    <aside className={`callout callout-${type}`} role="note">
      <p className="callout-label">{title ?? labels[type]}</p>
      <div className="callout-body">{children}</div>
    </aside>
  )
}
