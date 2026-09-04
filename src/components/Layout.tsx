import type { ReactNode } from 'react'
import { navigate } from '../navigate'

const links = [
  { href: '/', label: 'はじめに' },
  { href: '/syntax', label: '書き方' },
  { href: '/playground', label: '試す' },
] as const

type LayoutProps = {
  path: string
  children: ReactNode
}

export function Layout({ path, children }: LayoutProps) {
  return (
    <div className="shell">
      <header className="site-header">
        <p className="site-mark">react-mdx</p>
        <p className="site-title">MDX 手習い</p>
        <p className="site-lead">
          Markdown の文章に、React コンポーネントを埋め込めるファイル形式です。
        </p>
        <nav className="site-nav" aria-label="ページ">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={path === link.href ? 'is-current' : undefined}
              aria-current={path === link.href ? 'page' : undefined}
              onClick={(event) => {
                event.preventDefault()
                navigate(link.href)
              }}
            >
              {link.label}
            </a>
          ))}
        </nav>
      </header>
      <main className="site-main">{children}</main>
    </div>
  )
}
