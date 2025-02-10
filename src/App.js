import React, { useState } from 'react';
import Papers from './Papers.js';  // Adjust the import path based on your file structure
import BlogPosts from './BlogPosts.js';  // Adjust the import path based on your file structure

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = ['home', 'writings'];

  return (
    <div style={{ fontFamily: 'Inter, sans-serif' }} className="min-h-screen bg-white text-black">
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
      <main className="w-full max-w-6xl mx-auto px-8 py-20">
        {activePage === 'home' && (
          <div className="text-left">
            {/*<h2 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h2>*/}
            <p className="mb-8">
              Hi :-) wellcome to my website. I am a PhD Economics graduate and a freelance mechanical engineering inspector. This portfolio highlights
              my academic work, professional projects, and personal writings.
            </p>
            <section className="mb-8">
              {/*
              <section className="mb-8">
                <h3 className="text-xl font-bold mb-2">Published Papers</h3>
                <ul className="list-disc list-inside">
                  <li>
                    <strong>Paper 1:</strong> Research on economic policy.
                  </li>
                  <li>
                    <strong>Paper 2:</strong> Analysis of market trends.
                  </li>
                </ul>
              </section>
              */}
              {/* Add the new Papers component */}
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

        {activePage === 'projects' && (
          <div className="text-left">
            <h2 className="text-3xl font-bold mb-6">Projects</h2>
            <p className="mb-6">
              A collection of projects showcasing my expertise in data science, visualization, and predictive modeling.
            </p>
            <ul className="list-disc list-inside">
              <li>Project 1: Market data visualization.</li>
              <li>Project 2: Predictive modeling for market trends.</li>
            </ul>
          </div>
        )}

        {activePage === 'writings' && (
          <div className="text-left">
            {/*<h2 className="text-3xl font-bold mb-6">Writings</h2>
            <p className="mb-6">
              Explore my essays, research articles, and thoughts on topics ranging from economics to mechanical
              engineering and beyond.
            </p>*/}
            <BlogPosts />
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
