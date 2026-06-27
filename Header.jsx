import React, { useState } from 'react'
import { Menu, X, ChevronDown } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(null)

  return (
    <nav className="fixed top-0 w-full bg-primary/95 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-16">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-white">
              CN
            </div>
            <span className="text-xl font-bold text-white hidden sm:inline">Coding Ninjas</span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen('professional')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-2 text-white hover:text-accent transition">
                For working professionals
                <ChevronDown size={18} />
              </button>
              {dropdownOpen === 'professional' && (
                <div className="absolute top-full left-0 mt-2 bg-secondary border border-white/10 rounded-lg p-4 min-w-48">
                  <p className="text-sm text-white/70 mb-3">Popular Courses</p>
                  <a href="#" className="block text-white hover:text-accent mb-2">Data Analytics</a>
                  <a href="#" className="block text-white hover:text-accent mb-2">Software Development</a>
                  <a href="#" className="block text-white hover:text-accent mb-2">Data Science</a>
                  <a href="#" className="block text-white hover:text-accent">Generative AI</a>
                </div>
              )}
            </div>

            <div
              className="relative group"
              onMouseEnter={() => setDropdownOpen('student')}
              onMouseLeave={() => setDropdownOpen(null)}
            >
              <button className="flex items-center gap-2 text-white hover:text-accent transition">
                For College Students
                <ChevronDown size={18} />
              </button>
              {dropdownOpen === 'student' && (
                <div className="absolute top-full left-0 mt-2 bg-secondary border border-white/10 rounded-lg p-4 min-w-48">
                  <p className="text-sm text-white/70 mb-3">Programs</p>
                  <a href="#" className="block text-white hover:text-accent mb-2">Internship Programs</a>
                  <a href="#" className="block text-white hover:text-accent mb-2">Placement Preparation</a>
                  <a href="#" className="block text-white hover:text-accent mb-2">Coding Practice</a>
                  <a href="#" className="block text-white hover:text-accent">Summer Bootcamp</a>
                </div>
              )}
            </div>
          </div>

          {/* Login Button */}
          <div className="hidden md:flex">
            <button className="btn-accent">Login</button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-white/10">
            <a href="#" className="block py-3 text-white hover:text-accent">For working professionals</a>
            <a href="#" className="block py-3 text-white hover:text-accent">For College Students</a>
            <button className="w-full mt-4 btn-accent">Login</button>
          </div>
        )}
      </div>
    </nav>
  )
}
