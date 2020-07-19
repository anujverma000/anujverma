import React from 'react'
import * as Navi from 'navi'
import styles from "../../index.module.css";
import contactStyles from "./contact.module.css";

export default Navi.route({
  title: "Contact",
  getView: () => Contact,
})

function Contact() {
  return (
    <>
    <h1>Get In Touch</h1>
    <div className={contactStyles.contactFormWrapper}>
      <div>
        <div>Dubai, UAE</div>
        <div>anujverma000@gmail.com</div>
      </div>
      <form name="contact" method="POST" data-netlify="true"  autocomplete="off">
        <div>
          <input className={styles.inputText} type="text" name="name" placeholder="Full Name"/>
          <input className={styles.inputText} type="email" name="email"  placeholder="Your Email"/>
        </div>  
        <div>
          <input className={styles.inputText} type="text" name="subject"  placeholder="Subject"/>
          <textarea className={styles.inputTextArea} name="message"></textarea>
        </div>
          <button type="submit">Send</button>
      </form>
    </div>
    </>
  )
}
