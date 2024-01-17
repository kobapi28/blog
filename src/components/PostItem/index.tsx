import type { FC } from "preact/compat"
import Tag from "../Tag"
import s from './style.module.css'
import c from 'clsx'

type Props = {
  title: string
  date: string
  tags: string[]
  url: string
  description: string
  className?: string
}

const PostItem: FC<Props> = ({ title, date, tags, url, description, className }) => {
  return (
    <article className={c(s.root, className)}>
      <a href={url} className={s.link}/>
      <h2 className={s.title}>{title}</h2>
      <p>{description}</p>
      <ul className={s.tags}>
        {tags.map(tag => (
          <li>
            <Tag tag={tag} />
          </li>
        ))}
      </ul>
      <p className={s.date}>{date}</p>
    </article>
  )
}

export default PostItem