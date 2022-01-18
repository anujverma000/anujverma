import React from 'react'
import { Link } from 'react-navi'
import ArticleMeta from './ArticleMeta'
import { formatDate } from '../utils/formats'
import styles from './ArticleSummary.module.css'

function ArticleSummary({ blogRoot, route }) {
  return (
    <article className={styles.ArticleSummary}>
      <time dateTime={route.data.date.toUTCString()}>{formatDate(route.data.date)}</time>
      <h2><Link href={route.url.href}>{route.title}</Link></h2>
      <ArticleMeta blogRoot={blogRoot} meta={route.data} />
      <p>{route.data.spoiler}</p>
    </article>
  )
}

export default ArticleSummary