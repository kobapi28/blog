import type { FC } from "preact/compat";
import c from 'clsx'
import s from './style.module.css'

type Props = {
  type: 'tag' | 'text'
  title: string
}

const Title: FC<Props> = ({ type, title }) => {
  return (
    <h1 className={c(s.root, type === 'text' && s.text)}>
      {type === 'tag' ? (
        <a className={s.link} href={`/tags/${title}`}>
          <span>#</span>
          <span>{title}</span>
        </a>
      ): title}
    </h1>
  );
}

export default Title;