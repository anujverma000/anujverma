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
      <img src={photoURL} alt="Me" />
      <p>
        <span>I practice what I post.</span>
        <small className="subtitle">The best things come from living outside of your comfort zone.</small>
      </p>
    </div>
  )
}

export default Bio
