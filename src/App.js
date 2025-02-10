import React, { useState } from 'react';
import Papers from './Papers.js';
import BlogPosts from './BlogPosts.js';
import { Github } from 'lucide-react';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = ['home', 'writings'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-white text-black flex flex-col">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white z-10">
        <div className="w-full max-w-6xl mx-auto px-8 py-4 flex items-center">
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className="capitalize hover:underline"
              >
                {item}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="w-full max-w-6xl mx-auto px-8 py-20 flex-grow">
        {activePage === 'home' && (
          <div className="text-left">
            <p className="mb-8">
              Hi :-) wellcome to my website. I am a PhD Economics graduate and a freelance mechanical engineering inspector. This portfolio highlights
              my academic work, professional projects, and personal writings.
            </p>
            <section className="mb-8">
              <Papers />
            </section>
            <section>
              <h3 className="text-xl font-bold mb-2">Mechanical Engineering</h3>
              <p>
                Expertise in industrial equipment inspections and safety protocol development, bridging engineering and
                analytical precision.
              </p>
            </section>
          </div>
        )}

        {activePage === 'writings' && (
          <div className="text-left">
            <BlogPosts />
          </div>
        )}
      </main>

      {/* Footer - Only shown on home page */}
      {activePage === 'home' && (
        <footer className="w-full bg-white py-6 mt-auto">
          <div className="w-full max-w-6xl mx-auto px-8 flex justify-right">
            <a
              href="https://github.com/mdizadi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              <Github size={24} />
            </a>
          </div>
        </footer>
      )}
    </div>
  );
};

export default App;