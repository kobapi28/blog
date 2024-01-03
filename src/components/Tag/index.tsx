import type { FC } from "preact/compat"
import s from './style.module.css'

type Props = {
  tag: string
}

const Tag: FC<Props> = ({ tag }) => {
  return (
    <a className={s.root} href={`/tags/${tag}`}>
      <span>#</span>
      <span>{tag}</span>
    </a>
  )
}

export default Tag