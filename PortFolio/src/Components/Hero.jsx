import React from 'react';

const Hero = () => {
  return (
    <section className="bg-blue-500 text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold">Hello, I'm Krishna!</h1>
        <p className="mt-4 text-lg">A passionate Front-End Developer</p>
        <button className="mt-8 px-6 py-2 bg-white text-blue-500 rounded-lg">Explore My Work</button>
      </div>
    </section>
  );
}

export default Hero;
