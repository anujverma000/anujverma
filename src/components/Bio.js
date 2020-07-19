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
      <div className={`${styles.bioDetails}`}>
        <h1 className={`${styles.titleName}`}>Anuj Verma</h1>
        <div className={`${styles.bioDesc}`}>
          <p>Software specialist with over 10 years experience in commercial software development.</p>
          <p>Have a solid background in the analysis, design, modeling and development.</p>
          <p>Strong Experience in developing applications of different business dynamics, including enterprise and end-user facing applications ranging from retail, e-commerce and banking. </p>
          <p>Worked in enterprise and startups both environments where I have taken projects from inception to final product. </p>
        </div>
      </div>
    </div>
  )
}

export default Bio
