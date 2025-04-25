
import { Link } from 'react-router-dom';
import { FileDown, ArrowDown } from 'lucide-react';
import TypewriterText from '../components/TypewriterText';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import ProjectCarousel from '../components/ProjectCarousel';
import SectionTitle from '../components/SectionTitle';
import { projectsData } from '../data/projects';

const Home = () => {
  const webProjects = projectsData.filter(project => project.category === 'Web Applications');
  const aiProjects = projectsData.filter(project => project.category === 'AI/ML Tools');
  const dashboardProjects = projectsData.filter(project => project.category === 'Dashboard & Utility');
  
  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative h-screen flex items-center bg-black">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-netflix-black z-10"></div>
        <div className="absolute inset-0 overflow-hidden">
          <img 
            src="https://images.unsplash.com/photo-1626814026160-2237a95fc5a0?q=80&w=2070&auto=format&fit=crop" 
            alt="Background" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        
        <div className="container mx-auto px-4 relative z-20">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4">
            Welcome to the <span className="text-netflix-red">Codeflix</span> By Eshab Sachan
          </h1>
          <div className="text-xl md:text-2xl text-gray-300 mb-8">
            <TypewriterText 
              texts={[
                "BCA Student at Chandigarh University",
                "Frontend Dev",
                "Backend Explorer",
                "React & Python Enthusiast"
              ]} 
              className="font-medium"
            />
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/projects" className="netflix-btn">
              Explore Projects
            </Link>
            <a 
              href="/resume.pdf" 
              download
              className="netflix-btn-outlined flex items-center gap-2"
            >
              <FileDown size={20} />
              Download Resume
            </a>
            <a 
              href="#contact-section"
              className="netflix-btn-outlined flex items-center gap-2"
            >
              <ArrowDown size={20} />
              Let's Connect
            </a>
          </div>
        </div>
      </section>
      
      {/* Featured Projects Section */}
      <section className="py-20 container mx-auto px-4">
        <SectionTitle 
          title="Featured " 
          redText="Projects"
          subtitle="Browse through my latest work across different domains"
        />
        
        <ProjectCarousel title="Web Applications" projects={webProjects} />
        <ProjectCarousel title="AI/ML Tools" projects={aiProjects} />
        <ProjectCarousel title="Dashboard & Utility" projects={dashboardProjects} />
        
        <div className="text-center mt-12">
          <Link to="/projects" className="netflix-btn">
            View All Projects
          </Link>
        </div>
      </section>
      
      {/* About Section Preview */}
      <section className="py-20 bg-netflix-gray/20">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="About " 
            redText="Me"
            subtitle="A glimpse into who I am and what I do"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <img 
                src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?auto=format&fit=crop&q=80&w=1470"
                alt="Eshab Sachan" 
                className="rounded-lg shadow-xl w-full h-auto max-w-md mx-auto hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4 text-white">Hi, I'm Eshab Sachan</h3>
              <p className="text-gray-300 mb-6">
                A driven BCA student at Chandigarh University. I specialize in frontend and backend web 
                development and love building efficient, real-time, and AI-assisted apps. I'm currently 
                diving deep into Kotlin and backend system design.
              </p>
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-2 text-netflix-red">My Interests</h4>
                <ul className="text-gray-300 space-y-2">
                  <li>• Personal AI Assistant (Jarvis-style)</li>
                  <li>• Startup exploration</li>
                  <li>• Competitive coding and real-time systems</li>
                  <li>• Team collaboration on tech projects</li>
                </ul>
              </div>
              <Link to="/about" className="netflix-btn">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      {/* Contact Section */}
      <section id="contact-section" className="py-20 container mx-auto px-4">
        <SectionTitle 
          title="Let's " 
          redText="Connect"
          subtitle="Have a project in mind? Let's make it happen"
        />
        
        <div className="max-w-2xl mx-auto">
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-4 py-3 bg-netflix-gray border border-netflix-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-4 py-3 bg-netflix-gray border border-netflix-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                placeholder="your.email@example.com"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">Message</label>
              <textarea 
                id="message" 
                rows={5}
                className="w-full px-4 py-3 bg-netflix-gray border border-netflix-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                placeholder="Your message here..."
              ></textarea>
            </div>
            <button 
              type="submit" 
              className="netflix-btn w-full py-3"
            >
              Send Message
            </button>
          </form>
          
          <div className="text-center mt-8 text-gray-400">
            <p>Or email me directly at: <a href="mailto:eshabsa@gmail.com" className="text-netflix-red">eshabsa@gmail.com</a></p>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Home;
