
import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import ProjectCard from '../components/ProjectCard';
import { projectsData } from '../data/projects';

const Projects = () => {
  const categories = ['All', 'Web Applications', 'AI/ML Tools', 'Dashboard & Utility', 'Blockchain / Crypto', 'C++ Desktop'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredProjects = activeCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <SectionTitle 
          title="My " 
          redText="Projects"
          subtitle="Browse through all my work categorized by domain"
        />
        
        <div className="mb-12 flex flex-wrap gap-4 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeCategory === category
                  ? 'bg-netflix-red text-white'
                  : 'bg-netflix-gray/40 text-gray-300 hover:bg-netflix-gray/60'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProjects.map((project) => (
            <div key={project.id} className="flex justify-center">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Projects;
