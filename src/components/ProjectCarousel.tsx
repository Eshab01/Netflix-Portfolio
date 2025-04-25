
import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import ProjectCard, { ProjectProps } from './ProjectCard';

interface ProjectCarouselProps {
  title: string;
  projects: ProjectProps[];
}

const ProjectCarousel = ({ title, projects }: ProjectCarouselProps) => {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (carouselRef.current) {
      const { current } = carouselRef;
      const scrollAmount = direction === 'left' ? -300 : 300;
      current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-12">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-xl md:text-2xl font-bold text-white">{title}</h3>
        <div className="flex space-x-2">
          <button 
            onClick={() => scroll('left')}
            className="bg-netflix-gray/40 hover:bg-netflix-gray text-white p-2 rounded-full transition-colors"
          >
            <ChevronLeft size={20} />
          </button>
          <button 
            onClick={() => scroll('right')}
            className="bg-netflix-gray/40 hover:bg-netflix-gray text-white p-2 rounded-full transition-colors"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div 
        ref={carouselRef}
        className="carousel-container flex overflow-x-auto pb-4"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </div>
  );
};

export default ProjectCarousel;
