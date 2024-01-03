import type { FC } from "preact/compat"
import Tag from "../Tag"
import s from './style.module.css'

type Props = {
  title: string
  date: string
  tags: string[]
  url: string
}

const PostItem: FC<Props> = ({ title, date, tags, url }) => {
  return (
    <article className={s.root}>
      <a href={url} className={s.link}/>
      <h2 className={s.title}>{title}</h2>
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