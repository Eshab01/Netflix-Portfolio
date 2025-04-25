
import { ReactNode } from 'react';
import { 
  Code, 
  FileCode, 
  Braces, 
  Database, 
  Globe, 
  Layout, 
  Code2, 
  Cpu, 
  Github, 
  Figma, 
  Server, 
  Layers
} from 'lucide-react';

interface SkillDataProps {
  id: number;
  title: string;
  icon: ReactNode;
  description: string;
  category: string;
}

export const skillsData: SkillDataProps[] = [
  {
    id: 1,
    title: "Python",
    icon: <Code size={36} />,
    description: "Building applications, scripts, and automation tools with Python.",
    category: "Languages"
  },
  {
    id: 2,
    title: "C++",
    icon: <Code2 size={36} />,
    description: "Developing efficient desktop applications and system tools.",
    category: "Languages"
  },
  {
    id: 3,
    title: "SQL",
    icon: <Database size={36} />,
    description: "Database design, querying, and management for applications.",
    category: "Languages"
  },
  {
    id: 4,
    title: "Kotlin",
    icon: <FileCode size={36} />,
    description: "Learning modern Android app development with Kotlin.",
    category: "Languages"
  },
  {
    id: 5,
    title: "ReactJS",
    icon: <Layout size={36} />,
    description: "Building interactive user interfaces and single-page applications.",
    category: "Frontend"
  },
  {
    id: 6,
    title: "TypeScript",
    icon: <Braces size={36} />,
    description: "Developing type-safe, maintainable JavaScript applications.",
    category: "Frontend"
  },
  {
    id: 7,
    title: "HTML",
    icon: <Code size={36} />,
    description: "Creating structured, semantic web page layouts.",
    category: "Frontend"
  },
  {
    id: 8,
    title: "CSS",
    icon: <Layout size={36} />,
    description: "Styling web applications with modern CSS frameworks.",
    category: "Frontend"
  },
  {
    id: 9,
    title: "JavaScript",
    icon: <Braces size={36} />,
    description: "Building dynamic, interactive web applications.",
    category: "Frontend"
  },
  {
    id: 10,
    title: "GitHub Desktop",
    icon: <Github size={36} />,
    description: "Version control and project collaboration using GitHub's desktop client.",
    category: "Tools"
  },
  {
    id: 11,
    title: "Vercel",
    icon: <Server size={36} />,
    description: "Deploying and hosting web applications with minimal configuration.",
    category: "Tools"
  },
  {
    id: 12,
    title: "Git Bash",
    icon: <Cpu size={36} />,
    description: "Command-line Git operations and version control.",
    category: "Tools"
  },
  {
    id: 13,
    title: "Figma",
    icon: <Figma size={36} />,
    description: "UI/UX design and prototyping for web and mobile applications.",
    category: "Tools"
  },
  {
    id: 14,
    title: "Firebase",
    icon: <Server size={36} />,
    description: "Backend services for web and mobile applications using Firebase.",
    category: "Others"
  },
  {
    id: 15,
    title: "Node.js",
    icon: <Server size={36} />,
    description: "Server-side JavaScript for building backend applications.",
    category: "Others"
  },
  {
    id: 16,
    title: "APIs",
    icon: <Globe size={36} />,
    description: "Building and consuming RESTful and GraphQL APIs.",
    category: "Others"
  }
];
