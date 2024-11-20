import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="bg-gray-100 py-20">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold">Contact Me</h2>
        <form className="mt-8 max-w-md mx-auto">
          <input type="text" className="block w-full p-3 border rounded-lg mb-4" placeholder="Your Name" />
          <input type="email" className="block w-full p-3 border rounded-lg mb-4" placeholder="Your Email" />
          <textarea className="block w-full p-3 border rounded-lg mb-4" placeholder="Your Message"></textarea>
          <button className="bg-blue-500 text-white px-6 py-3 rounded-lg">Send Message</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;
