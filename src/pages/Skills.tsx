
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import SkillCard from '../components/SkillCard';
import { skillsData } from '../data/skills';
import { useState } from 'react';

const Skills = () => {
  const categories = ['All', 'Languages', 'Frontend', 'Tools', 'Others'];
  const [activeCategory, setActiveCategory] = useState('All');
  
  const filteredSkills = activeCategory === 'All' 
    ? skillsData 
    : skillsData.filter(skill => skill.category === activeCategory);
  
  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <SectionTitle 
          title="Skills & " 
          redText="Technologies"
          subtitle="The tools and technologies I work with"
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
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSkills.map((skill) => (
            <SkillCard 
              key={skill.id}
              title={skill.title}
              icon={skill.icon}
              description={skill.description}
            />
          ))}
        </div>
      </section>
      
      {/* Experience Section */}
      <section className="py-20 bg-netflix-gray/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Learning " 
            redText="Journey"
            subtitle="My experience and learning path"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <ExperienceCard 
              title="Front-End Development"
              period="2+ Years"
              description="Building responsive and interactive user interfaces using React, TypeScript, and modern CSS frameworks."
              skills={['React', 'TypeScript', 'Tailwind CSS', 'HTML/CSS']}
            />
            
            <ExperienceCard 
              title="Back-End Exploration"
              period="1+ Year"
              description="Developing backend services and APIs using Node.js and exploring database technologies."
              skills={['Node.js', 'Express', 'Firebase', 'APIs']}
            />
            
            <ExperienceCard 
              title="Desktop Applications"
              period="1+ Year"
              description="Creating desktop applications and tools using C++ to solve specific problems efficiently."
              skills={['C++', 'Desktop Development', 'Application Design']}
            />
          </div>
        </div>
      </section>
      
      {/* Current Focus */}
      <section className="py-20 container mx-auto px-4">
        <SectionTitle 
          title="Currently " 
          redText="Learning"
          subtitle="Skills and technologies I'm currently focusing on"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="netflix-card p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-netflix-red">Kotlin Development</h3>
              <p className="text-gray-300 mb-6">
                Exploring Kotlin for building modern, concise, and safe applications for Android and beyond.
                Learning about coroutines, multiplatform development, and Kotlin's advanced features.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">Kotlin</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">Android</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">Coroutines</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-netflix-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
          
          <div className="netflix-card p-8 relative overflow-hidden group">
            <div className="relative z-10">
              <h3 className="text-2xl font-bold mb-4 text-netflix-red">Backend System Design</h3>
              <p className="text-gray-300 mb-6">
                Studying advanced backend architecture patterns, scalability concepts, and performance optimization.
                Focusing on building robust and maintainable systems.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">Architecture</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">Scalability</span>
                <span className="bg-white/10 px-3 py-1 rounded-full text-sm text-white">Databases</span>
              </div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-netflix-red/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const ExperienceCard = ({ 
  title, 
  period, 
  description, 
  skills 
}: { 
  title: string; 
  period: string; 
  description: string; 
  skills: string[]; 
}) => {
  return (
    <div className="netflix-card p-6 flex flex-col h-full">
      <h3 className="text-xl font-bold mb-1 text-white">{title}</h3>
      <div className="text-netflix-red font-medium text-sm mb-4">{period}</div>
      <p className="text-gray-300 mb-6 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto">
        {skills.map((skill, index) => (
          <span key={index} className="bg-netflix-red/20 px-3 py-1 rounded-full text-sm text-white">
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Skills;
