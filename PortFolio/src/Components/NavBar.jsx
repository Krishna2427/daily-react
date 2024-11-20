import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between">
        <h1 className="text-xl font-bold ms-2">My Portfolio</h1>
        <div className="flex">
          <a href="#about" className="px-4 hover:underline decoration-yellow-400">About</a>
          <a href="#projects" className="px-4 hover:underline decoration-yellow-400">Projects</a>
          <a href="#contact" className="px-4 hover:underline decoration-yellow-400">Contact</a>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
