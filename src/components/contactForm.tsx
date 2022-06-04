import React from 'react'

const ContactForm = () => {
  return (
    <section className="contactForm">
        <h2>Contact</h2>
        <form method="post" action="https://formspree.io/f/myyooroz">
            <input type="email" name="_replyto" placeholder="Email" />
            <input type="text" name="name" placeholder="Name" />
            <textarea name="message" placeholder="Message" />
            <input type="submit" className="submit" />
        </form>
    </section>
  )
}

export default ContactForm