import type { MDXComponents } from 'mdx/types'
import type { ComponentPropsWithoutRef, ReactNode } from 'react'
import { Callout } from './components/Callout'
import { Counter } from './components/Counter'
import { LikeButton } from './components/LikeButton'
import { navigate } from './navigate'

type WrapperProps = {
  children?: ReactNode
  components?: MDXComponents
}

export const mdxComponents: MDXComponents = {
  wrapper({ children }: WrapperProps) {
    return <article className="prose">{children}</article>
  },
  h1: (props: ComponentPropsWithoutRef<'h1'>) => (
    <h1 className="prose-h1" {...props} />
  ),
  a: ({ href, onClick, ...props }: ComponentPropsWithoutRef<'a'>) => (
    <a
      className="prose-a"
      href={href}
      onClick={(event) => {
        onClick?.(event)
        if (event.defaultPrevented || !href?.startsWith('/')) {
          return
        }
        event.preventDefault()
        navigate(href)
      }}
      {...props}
    />
  ),
  Callout,
  Counter,
  LikeButton,
}
