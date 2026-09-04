import { MDXProvider } from '@mdx-js/react'
import { useSyncExternalStore } from 'react'
import { Layout } from './components/Layout'
import { mdxComponents } from './mdx-components'
import Home from './pages/Home.mdx'
import Playground from './pages/Playground.mdx'
import Syntax from './pages/Syntax.mdx'

const routes = {
  '/': Home,
  '/syntax': Syntax,
  '/playground': Playground,
} as const

type Path = keyof typeof routes

function subscribe(onStoreChange: () => void) {
  window.addEventListener('popstate', onStoreChange)
  return () => window.removeEventListener('popstate', onStoreChange)
}

function getPath() {
  return window.location.pathname
}

function isPath(value: string): value is Path {
  return value in routes
}

export function App() {
  const pathname = useSyncExternalStore(subscribe, getPath, () => '/')
  const path: Path = isPath(pathname) ? pathname : '/'
  const Page = routes[path]

  return (
    <MDXProvider components={mdxComponents}>
      <Layout path={path}>
        <Page name="学習者" />
      </Layout>
    </MDXProvider>
  )
}
