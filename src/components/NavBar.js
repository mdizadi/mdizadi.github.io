import React from 'react';
import { Menu, X } from 'lucide-react';

const NavBar = ({ isMenuOpen, setIsMenuOpen, navItems, setActiveSection, activeSection }) => (
  <nav className="bg-white shadow-md">
    <div className="max-w-6xl mx-auto px-4">
      <div className="flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-gray-800">My Portfolio</h1>
        <div className="hidden md:flex items-center space-x-8">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveSection(item.id)}
              className={`text-sm font-medium transition-colors hover:text-blue-600 ${
                activeSection === item.id ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-600 hover:text-gray-900"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
    </div>
  </nav>
);

export default NavBar;
