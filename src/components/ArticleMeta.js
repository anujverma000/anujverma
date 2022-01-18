import { join } from 'path'
import React from 'react'
import { Link } from 'react-navi'

import styles from './ArticleMeta.module.css'

function ArticleMeta({ blogRoot, meta, readingTime }) {
  let readingTimeElement
  if (readingTime) {
    let minutes = Math.max(Math.round(readingTime.minutes), 1)
    let cups = Math.round(minutes / 5);
    readingTimeElement =
      <span className={styles.readingTime}>
        {new Array(cups || 1).fill('☕️').join('')} {minutes} min read
      </span>
  }
      
  return (
    <div className={styles.ArticleMeta}>
      <div>{readingTimeElement || null}</div>
      {
        meta.tags &&
        meta.tags.length &&
          <ul className={styles.tags}>
            {meta.tags.map(tag =>
              <li key={tag}>
                <Link href={join(blogRoot, 'tags', tag)}>#{tag}</Link>
              </li>
            )}
          </ul>
      }
    </div>
  )
}

export default ArticleMeta
