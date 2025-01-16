import React, { useState } from 'react';

const App = () => {
  const [activePage, setActivePage] = useState('home');

  const navItems = ['home', 'projects', 'writings'];

  return (
    <div className="min-h-screen bg-white text-black font-serif">
      {/* Header */}
      <header className="fixed top-0 w-full bg-white shadow-md z-10">
        <div className="w-full max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold"></h1>
          <nav className="flex space-x-6">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActivePage(item)}
                className={`capitalize text-lg hover:underline ${
                  activePage === item ? 'font-semibold underline' : ''
                }`}
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
            <h2 className="text-3xl font-bold mb-6">Welcome to My Portfolio</h2>
            <p className="mb-8">
              I am a PhD Economics graduate and a freelance mechanical engineering inspector. This portfolio highlights
              my academic work, professional projects, and personal writings.
            </p>
            <section className="mb-8">
              <h3 className="text-2xl font-bold mb-2">Papers</h3>
              <ul className="list-disc list-inside">
                <li>
                  <strong>Paper 1:</strong> Research on economic policy.
                </li>
                <li>
                  <strong>Paper 2:</strong> Analysis of market trends.
                </li>
              </ul>
            </section>
            <section>
              <h3 className="text-2xl font-bold mb-2">Mechanical Engineering Inspector</h3>
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
            <h2 className="text-3xl font-bold mb-6">Writings</h2>
            <p>
              Explore my essays, research articles, and thoughts on topics ranging from economics to mechanical
              engineering and beyond.
            </p>
          </div>
        )}
      </main>
    </div>
  );
};

export default App;
