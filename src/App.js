import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { FileText, Book, Terminal, Briefcase } from 'lucide-react';

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('about');

  const navItems = [
    { id: 'about', label: 'About' },
    { id: 'economics', label: 'Economics' },
    { id: 'engineering', label: 'Engineering' },
    { id: 'projects', label: 'Projects' },
  ];

  const projects = [
    {
      title: "Economic Research Papers",
      category: "Economics",
      icon: <Book className="w-6 h-6" />,
      items: [
        { title: "Paper 1", description: "Research on economic policy" },
        { title: "Paper 2", description: "Analysis of market trends" },
      ],
    },
    {
      title: "Engineering Inspections",
      category: "Engineering",
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { title: "Project 1", description: "Industrial equipment inspection" },
        { title: "Project 2", description: "Safety protocol development" },
      ],
    },
    {
      title: "Data Science Projects",
      category: "Data Science",
      icon: <Terminal className="w-6 h-6" />,
      items: [
        { title: "Analysis 1", description: "Market data visualization" },
        { title: "Analysis 2", description: "Predictive modeling" },
      ],
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        navItems={navItems}
        setActiveSection={setActiveSection}
        activeSection={activeSection}
      />
      <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to My Portfolio</h1>
          <p className="text-xl">
            PhD Economics Graduate & Mechanical Engineering Inspector
          </p>
        </div>
      </div>
      <main className="max-w-4xl mx-auto px-4 py-12">
      {activeSection === 'about' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              I am a PhD Economics graduate currently working as a freelance mechanical engineering inspector.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                onClick={() => setActiveSection('economics')}
              >
                <Book className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Economics Work</h3>
                <p className="text-gray-600">
                  Research on economic policy and analysis of market trends.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                onClick={() => setActiveSection('engineering')}
              >
                <Briefcase className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Engineering Work</h3>
                <p className="text-gray-600">
                  Industrial equipment inspections and safety protocols.
                </p>
              </div>
              <div
                className="bg-white p-6 rounded-lg shadow-md cursor-pointer"
                onClick={() => setActiveSection('projects')}
              >
                <Terminal className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Science Projects</h3>
                <p className="text-gray-600">
                  Market data visualization and predictive modeling.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'economics' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Economics Work</h2>
            <div className="grid gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Book className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Economic Research Papers</h3>
                <p className="text-gray-600">
                  Research on economic policy and market trends.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'engineering' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Engineering Work</h2>
            <div className="grid gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Briefcase className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Engineering Inspections</h3>
                <p className="text-gray-600">
                  Industrial equipment inspections and safety protocols.
                </p>
              </div>
            </div>
          </div>
        )}
        {activeSection === 'projects' && (
          <div>
            <h2 className="text-3xl font-bold mb-6">Data Science Projects</h2>
            <div className="grid gap-6">
              <div className="bg-white rounded-lg shadow-md p-6">
                <Terminal className="w-8 h-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-semibold mb-2">Data Science</h3>
                <p className="text-gray-600">
                  Market data visualization and predictive modeling.
                </p>
              </div>
            </div>
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default App;
