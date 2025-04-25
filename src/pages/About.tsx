
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { FileDown, Trophy, Calendar, BookOpen } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <SectionTitle 
          title="About " 
          redText="Me"
          subtitle="Get to know me better"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img 
              src="https://images.unsplash.com/photo-1602992708529-c9fdb12905c9?auto=format&fit=crop&q=80&w=1470" 
              alt="Eshab Sachan" 
              className="rounded-lg shadow-xl w-full h-auto hover:scale-105 transition-transform duration-500"
            />
          </div>
          <div>
            <h3 className="text-2xl font-bold mb-4 text-white">Hi, I'm Eshab Sachan</h3>
            <p className="text-gray-300 mb-6">
              A driven BCA student at Chandigarh University. I specialize in frontend and backend web 
              development and love building efficient, real-time, and AI-assisted apps. I'm currently 
              diving deep into Kotlin and backend system design.
            </p>
            <p className="text-gray-300 mb-6">
              My journey in software development began with a curiosity for how digital products are built.
              This curiosity evolved into a passion for creating user-friendly applications that solve real-world problems.
              I enjoy the challenge of turning complex requirements into elegant, efficient solutions.
            </p>
            <div className="mb-6">
              <h4 className="text-lg font-semibold mb-2 text-netflix-red">My Interests</h4>
              <ul className="text-gray-300 space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-netflix-red">•</span>
                  <span>Personal AI Assistant (Jarvis-style)</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-netflix-red">•</span>
                  <span>Startup exploration</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-netflix-red">•</span>
                  <span>Competitive coding and real-time systems</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-netflix-red">•</span>
                  <span>Team collaboration on tech projects</span>
                </li>
              </ul>
            </div>
            <a 
              href="/resume.pdf" 
              download
              className="netflix-btn flex items-center gap-2 w-fit"
            >
              <FileDown size={20} />
              Download Resume
            </a>
          </div>
        </div>
        
        {/* Timeline */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-white">My Journey</h3>
          
          <div className="relative border-l-2 border-netflix-red pl-8 ml-4 space-y-12">
            <TimelineItem 
              year="2023 - Present"
              title="BCA Student"
              subtitle="Chandigarh University"
              description="Pursuing a Bachelor's degree in Computer Applications with focus on programming fundamentals, web development, and database management."
              icon={<BookOpen />}
            />
            
            <TimelineItem 
              year="2023"
              title="Sadbhavna Diwas"
              subtitle="Volunteer Work"
              description="Participated as a volunteer in Sadbhavna Diwas, contributing to community development initiatives."
              icon={<Calendar />}
            />
            
            <TimelineItem 
              year="2022"
              title="First Coding Project"
              subtitle="Personal Milestone"
              description="Built my first complete web application, sparking a passion for software development."
              icon={<Trophy />}
            />
          </div>
        </div>
        
        {/* Achievements Section */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-8 text-white">Achievements & Events</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="netflix-card p-6">
              <h4 className="text-xl font-bold mb-3 text-netflix-red">Volunteering</h4>
              <p className="text-gray-300">
                Contributed as a volunteer for Sadbhavna Diwas, helping with organization and technical support.
              </p>
            </div>
            
            <div className="netflix-card p-6">
              <h4 className="text-xl font-bold mb-3 text-netflix-red">College Contributions</h4>
              <p className="text-gray-300">
                Actively participating in hackathons and coding contests.
              </p>
            </div>
            
            <div className="netflix-card p-6">
              <h4 className="text-xl font-bold mb-3 text-netflix-red">Personal Projects</h4>
              <p className="text-gray-300">
                Successfully completed and deployed multiple web applications and tools that solve real-world problems.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

const TimelineItem = ({ 
  year, 
  title, 
  subtitle, 
  description, 
  icon 
}: { 
  year: string; 
  title: string; 
  subtitle: string; 
  description: string; 
  icon: React.ReactNode; 
}) => {
  return (
    <div className="relative">
      <div className="absolute -left-12 mt-1 bg-netflix-black p-1">
        <div className="bg-netflix-red text-white p-2 rounded-full">
          {icon}
        </div>
      </div>
      <div>
        <div className="text-sm text-netflix-red font-medium mb-1">{year}</div>
        <h4 className="text-xl font-bold text-white mb-1">{title}</h4>
        <div className="text-sm text-gray-400 mb-2">{subtitle}</div>
        <p className="text-gray-300">{description}</p>
      </div>
    </div>
  );
};

export default About;
