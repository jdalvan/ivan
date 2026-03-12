import elearnImg from '../assets/elearn1.jpg';
import mlImg from '../assets/ml1.jpg';
import choirImg from '../assets/chior.jpg';
import kvanzImg from '../assets/kvanz.png';
import ivanImg from '../assets/ivan.png';
import { useState } from 'react';

export default function Projects() {
  const [filter, setFilter] = useState('all');

  const myProjects = [
    {
      title: "E-Learning Platform",
      category: "Full Stack",
      type: "fullstack",
      description: "Architected a modular system for lessons and courses, collaborating with a remote team to manage complex code merges.",
      tags: ["React", "Nodejs", "Tailwind"],
      link: "#",
      image: elearnImg
    },
    {
      title: "ML Pattern Analysis",
      category: "Machine Learning",
      type: "ml",
      description: "Developing models to analyze factors and prevalence in specialized data sets using Python and Scikit-learn.",
      tags: ["Python", "ML", "Pandas"],
      link: "#",
      image: mlImg
    },
    {
      title: "Choir Management System",
      category: "Backend / Database",
      type: "backend",
      description: "Designed a secure communication and management hub with a custom-built database schema and login logic.",
      tags: ["PHP", "SQL", "UI/UX"],
      link: "#",
      image: choirImg
    },
    {
      title: "Real-time Chat Application",
      category: "Full Stack",
      type: "fullstack",
      description: "Built a scalable real-time messaging platform with WebSocket integration, user authentication, and message history.",
      tags: ["React", "Node.js", "Socket.io", "MongoDB"],
      link: "#",
      image: elearnImg
    },
    {
      title: "Image Classification Model",
      category: "Machine Learning",
      type: "ml",
      description: "Developed a deep learning CNN model for image classification achieving 94% accuracy on test dataset using TensorFlow.",
      tags: ["Python", "TensorFlow", "CNN", "NumPy"],
      link: "#",
      image: mlImg
    },
    {
      title: "E-Commerce Backend API",
      category: "Backend",
      type: "backend",
      description: "Created RESTful API with Django for product management, inventory, orders, and payment integration with Stripe.",
      tags: ["Django", "Python", "PostgreSQL", "REST API"],
      link: "#",
      image: kvanzImg
    },
    {
      title: "Weather Dashboard",
      category: "Frontend",
      type: "frontend",
      description: "Interactive weather application with real-time data, location search, and 7-day forecast using OpenWeather API.",
      tags: ["React", "API Integration", "Tailwind", "Charts"],
      link: "#",
      image: kvanzImg
    },
    {
      title: "Sentiment Analysis Tool",
      category: "Machine Learning",
      type: "ml",
      description: "NLP-based sentiment analyzer for social media text, trained on 50K+ tweets with 88% accuracy rate.",
      tags: ["Python", "NLP", "NLTK", "Scikit-learn"],
      link: "#",
      image: mlImg
    },
    {
      title: "Task Management Web App",
      category: "Full Stack",
      type: "fullstack",
      description: "Collaborative task management tool with real-time updates, drag-and-drop, and team collaboration features.",
      tags: ["React", "Firebase", "Tailwind", "Redux"],
      link: "#",
      image: elearnImg
    },
    {
      title: "PDF Report Generator",
      category: "Backend",
      type: "backend",
      description: "Automated PDF generation system for reports with dynamic data binding and custom templating engine.",
      tags: ["Python", "ReportLab", "Django", "Celery"],
      link: "#",
      image: choirImg
    },
    {
      title: "Data Visualization Dashboard",
      category: "Full Stack",
      type: "fullstack",
      description: "Interactive analytics dashboard displaying real-time data with multiple chart types and drill-down capabilities.",
      tags: ["React", "D3.js", "Node.js", "PostgreSQL"],
      link: "#",
      image: kvanzImg
    },
    {
      title: "Recommendation Engine",
      category: "Machine Learning",
      type: "ml",
      description: "Collaborative filtering recommendation system for e-commerce with item-based and user-based approaches.",
      tags: ["Python", "Scikit-learn", "Numpy", "Pandas"],
      link: "#",
      image: mlImg
    }
  ];

  const filteredProjects = filter === 'all' ? myProjects : myProjects.filter(p => p.type === filter);

  return (
    <main className="bg-[#0F172A] dark:bg-[#0F172A] min-h-screen">
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 text-white" id="projects">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-12 gap-6">
          <div>
            <h2 className="text-[#E2FF6F] font-mono text-xs sm:text-sm uppercase tracking-widest mb-2">// Portfolio</h2>
            <h3 className="text-3xl sm:text-4xl font-bold italic">THE WORKS CLOSEST TO MY HEART</h3>
          </div>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-3 mb-12">
          <button 
            onClick={() => setFilter('all')}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              filter === 'all' 
                ? 'bg-[#E2FF6F] text-black' 
                : 'border border-gray-700 hover:border-[#E2FF6F]'
            }`}
          >
            All Projects
          </button>
          <button 
            onClick={() => setFilter('fullstack')}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              filter === 'fullstack' 
                ? 'bg-[#E2FF6F] text-black' 
                : 'border border-gray-700 hover:border-[#E2FF6F]'
            }`}
          >
            Full Stack
          </button>
          <button 
            onClick={() => setFilter('frontend')}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              filter === 'frontend' 
                ? 'bg-[#E2FF6F] text-black' 
                : 'border border-gray-700 hover:border-[#E2FF6F]'
            }`}
          >
            Frontend
          </button>
          <button 
            onClick={() => setFilter('backend')}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              filter === 'backend' 
                ? 'bg-[#E2FF6F] text-black' 
                : 'border border-gray-700 hover:border-[#E2FF6F]'
            }`}
          >
            Backend
          </button>
          <button 
            onClick={() => setFilter('ml')}
            className={`px-4 sm:px-6 py-2 rounded-full font-semibold transition ${
              filter === 'ml' 
                ? 'bg-[#E2FF6F] text-black' 
                : 'border border-gray-700 hover:border-[#E2FF6F]'
            }`}
          >
            Machine Learning
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project, index) => (
            <div key={index} className="group relative bg-slate-800/20 border border-slate-700 rounded-2xl overflow-hidden hover:border-[#E2FF6F]/50 transition-all duration-300 hover:shadow-lg hover:shadow-[#E2FF6F]/20">
              {/* Image Placeholder */}
              <div className="h-48 bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 transition overflow-hidden">
                 {project.image ? (
                   <img src={project.image} alt={project.title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300" />
                 ) : (
                   <div className="text-slate-500 font-bold uppercase tracking-widest text-center px-4">
                     <div className="text-3xl mb-2">📁</div>
                     {project.category}
                   </div>
                 )}
              </div>
              
              <div className="p-6">
                <p className="text-[#E2FF6F] text-xs font-bold mb-2 uppercase">{project.category}</p>
                <h4 className="text-lg sm:text-xl font-bold mb-3 line-clamp-2">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-900 px-2 py-1 rounded border border-slate-700 text-gray-300 italic">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center text-sm font-bold text-[#E2FF6F] group-hover:translate-x-2 transition-transform">
                  VIEW CASE STUDY <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No projects found in this category.</p>
          </div>
        )}

        {/* Projects Count */}
        <div className="text-center mt-12 text-gray-400">
          <p>Showing {filteredProjects.length} of {myProjects.length} projects</p>
        </div>
      </div>
    </section>
    </main>
  );
};

