import { useState } from 'react'

type LikeButtonProps = {
  label?: string
}

export function LikeButton({ label = 'この説明はわかりやすい' }: LikeButtonProps) {
  const [liked, setLiked] = useState(false)

  return (
    <button
      type="button"
      className={liked ? 'like-button is-on' : 'like-button'}
      aria-pressed={liked}
      onClick={() => setLiked((value) => !value)}
    >
      {liked ? `いいね済み — ${label}` : `いいねする — ${label}`}
    </button>
  )
}
