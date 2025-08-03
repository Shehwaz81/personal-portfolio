import { useState } from 'react'
import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite' 
import './App.css'

const Navbar = () => {
  return (
    <nav className="fixed top-3 left-1/2 transform -translate-x-1/2 z-50">
      <div className="bg-black/80 w-96 backdrop-blur-md border-3 border-green-700 rounded-3xl h-12 flex justify-center items-center text-white transition duration-300 hover:scale-102">
        <div className="flex space-x-8">
          <a href="#home" className="text-white/70 hover:text-white transition-colors text-sm">Home</a>
          <a href="#about" className="text-white/70 hover:text-white transition-colors text-sm">About</a>
          <a href="#projects" className="text-white/70 hover:text-white transition-colors text-sm">Projects</a>
          <a href="#contact" className="text-white/70 hover:text-white transition-colors text-sm">Contact</a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar
