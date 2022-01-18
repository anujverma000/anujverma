import React from 'react'
import styles from './Bio.module.css'
import { getGravatarURL } from '../utils/getGravatarURL'

function Bio(props) {
  let photoURL = getGravatarURL({
    email: "anujverma000@gmail.com",
    size: 320,
  })

  return (
    <div className={`
      ${styles.Bio}
      ${props.className || ''}
    `}>
      <img loading="lazy" src={photoURL} alt="Me" />
      <div className={styles.bioDetails}>
        <h1 className={styles.titleName}>Anuj Verma</h1>
        {/* <div className={styles.bioDesc}>
          <p>Detailed oriented and self motivated software professional with over 10 years experience in analysis, design and development.</p>
          <p>Passionate for result-oriented approach with a focus on quality and user experience.</p>
          <p>Product design, architect and leading development with focus on tracking, AB testing, SEO and AdOPs are some of the areas of expertise.</p>
        </div>
        <div>
          <a className={styles.primaryButton} href="AnujVerma.pdf" download>Resume</a>
          <a className={styles.button} href="/about">About Me</a>
        </div> */}
      </div>
    </div>
  )
}

export default Bio
