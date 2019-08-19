import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "anujverma000@gmail.com",
    size: 56,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img loading="lazy" src={photoURL} alt="Me" />
      <div>
        <div>I practice what I post.</div>
        <div className="subtitle">
          The best things come from living outside of your comfort zone.
        </div>
      </div>
    </div>
  )
}

export default Bio
