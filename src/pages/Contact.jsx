import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';

function Contact() {
  return (
    <main>
      <Nav />
      <div className="p-5" id="center">
        <form>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows="4" required></textarea>

          <button type="submit">Submit</button>
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default Contact;
