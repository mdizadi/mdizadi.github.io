import React, { useState } from 'react';
import NavBar from './components/NavBar';
import ProjectCard from './components/ProjectCard';
import Footer from './components/Footer';
import { Book, Terminal, Briefcase } from 'lucide-react';

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
      title: 'Economic Research Papers',
      icon: <Book className="w-6 h-6" />,
      items: [
        { title: 'Paper 1', description: 'Research on economic policy' },
        { title: 'Paper 2', description: 'Analysis of market trends' },
      ],
    },
    {
      title: 'Engineering Inspections',
      icon: <Briefcase className="w-6 h-6" />,
      items: [
        { title: 'Project 1', description: 'Industrial equipment inspection' },
        { title: 'Project 2', description: 'Safety protocol development' },
      ],
    },
    {
      title: 'Data Science Projects',
      icon: <Terminal className="w-6 h-6" />,
      items: [
        { title: 'Analysis 1', description: 'Market data visualization' },
        { title: 'Analysis 2', description: 'Predictive modeling' },
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
      <main className="max-w-4xl mx-auto px-4 py-12">
        {activeSection === 'about' && <h1>About Section Content</h1>}
        {activeSection === 'economics' && <ProjectCard project={projects[0]} />}
        {activeSection === 'engineering' && <ProjectCard project={projects[1]} />}
        {activeSection === 'projects' && <ProjectCard project={projects[2]} />}
      </main>
      <Footer />
    </div>
  );
};

export default App;
