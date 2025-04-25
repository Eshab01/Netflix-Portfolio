
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import SectionTitle from '../components/SectionTitle';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, X } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Error",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }
    
    // Here you would typically send the form data to a server
    console.log('Form submitted:', formData);
    
    toast({
      title: "Success",
      description: "Your message has been sent. I'll get back to you soon!",
    });
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="bg-netflix-black min-h-screen">
      <Navbar />
      
      <section className="pt-32 pb-20 container mx-auto px-4">
        <SectionTitle 
          title="Get in " 
          redText="Touch"
          subtitle="Have a project in mind? Let's make it happen"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Contact Information</h3>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="bg-netflix-red rounded-full p-3 text-white">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Email</h4>
                  <a href="mailto:eshabsa@gmail.com" className="text-gray-300 hover:text-netflix-red transition-colors">
                    eshabsa@gmail.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-netflix-red rounded-full p-3 text-white">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-white mb-1">Location</h4>
                  <p className="text-gray-300">Chandigarh University, Punjab, India</p>
                </div>
              </div>
            </div>
            
            <h3 className="text-2xl font-bold mb-6 text-white">Connect on Social</h3>
            
            <div className="flex space-x-4">
              <a href="https://github.com/Eshab01" target="_blank" rel="noopener noreferrer" className="bg-netflix-gray hover:bg-netflix-red transition-colors p-3 rounded-full text-white">
                <Github size={24} />
              </a>
              <a href="https://linkedin.com/in/eshab-sachan/" target="_blank" rel="noopener noreferrer" className="bg-netflix-gray hover:bg-netflix-red transition-colors p-3 rounded-full text-white">
                <Linkedin size={24} />
              </a>
              <a href="https://x.com/Eshab45571646?t=MZ4MGQc4MhF8PkaneZlqlA&s=09" target="_blank" rel="noopener noreferrer" className="bg-netflix-gray hover:bg-netflix-red transition-colors p-3 rounded-full text-white">
                <X size={24} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                  Name <span className="text-netflix-red">*</span>
                </label>
                <input 
                  type="text" 
                  id="name" 
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-netflix-gray border border-netflix-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                  placeholder="Your Name"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email <span className="text-netflix-red">*</span>
                </label>
                <input 
                  type="email" 
                  id="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-netflix-gray border border-netflix-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                  placeholder="your.email@example.com"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-300 mb-1">
                  Subject
                </label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-3 bg-netflix-gray border border-netflix-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                  placeholder="What's this about?"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                  Message <span className="text-netflix-red">*</span>
                </label>
                <textarea 
                  id="message" 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 bg-netflix-gray border border-netflix-gray/50 rounded-md focus:outline-none focus:ring-2 focus:ring-netflix-red text-white"
                  placeholder="Your message here..."
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="netflix-btn w-full py-3"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Contact;
