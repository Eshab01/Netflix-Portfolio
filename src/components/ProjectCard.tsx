
import { useState } from 'react';
import { Github, ExternalLink } from 'lucide-react';

export interface ProjectProps {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubLink?: string;
  demoLink?: string;
  category: string;
}

const ProjectCard = ({ project }: { project: ProjectProps }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="netflix-card w-64 md:w-72 flex-shrink-0 mr-4 relative h-[360px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="h-40 overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-4">
        <h3 className="text-lg font-bold mb-2 text-white">{project.title}</h3>
        <p className="text-sm text-gray-300 mb-4 line-clamp-2">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.techStack.map((tech, index) => (
            <span 
              key={index} 
              className="text-xs bg-netflix-red/20 text-white px-2 py-1 rounded"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
      
      {isHovered && (
        <div className="absolute inset-0 bg-netflix-black/90 flex flex-col justify-center items-center p-6 animate-fade-in">
          <h3 className="text-xl font-bold mb-3 text-netflix-red">{project.title}</h3>
          <p className="text-sm text-center text-gray-300 mb-6">{project.description}</p>
          
          <div className="flex space-x-4">
            {project.githubLink && (
              <a 
                href={project.githubLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-white text-netflix-black p-2 rounded-full hover:bg-gray-200 transition-colors"
              >
                <Github size={20} />
              </a>
            )}
            
            {project.demoLink && (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer"
                className="bg-netflix-red text-white p-2 rounded-full hover:bg-red-700 transition-colors"
              >
                <ExternalLink size={20} />
              </a>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectCard;
