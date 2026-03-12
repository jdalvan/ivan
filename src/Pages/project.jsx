import elearnImg from '../assets/elearn1.jpg';
import mlImg from '../assets/ml1.jpg';
import choirImg from '../assets/chior.jpg';
export default function Projects() {
  const myProjects = [
    {
      title: "E-Learning Platform",
      category: "Full Stack (Laravel/React)",
      description: "Architected a modular system for lessons and courses, collaborating with a remote team to manage complex code merges.",
      tags: ["React", "Laravel", "Tailwind"],
      link: "#"
    },
    {
      title: "ML Pattern Analysis",
      category: "Machine Learning",
      description: "Developing models to analyze factors and prevalence in specialized data sets using Python and Scikit-learn.",
      tags: ["Python", "ML", "Pandas"],
      link: "#"
    },
    {
      title: "Choir Management System",
      category: "Backend / Database",
      description: "Designed a secure communication and management hub with a custom-built database schema and login logic.",
      tags: ["PHP", "SQL", "UI/UX"],
      link: "#"
    }
  ];

  return (
    <main className="bg-[#0F172A] dark:bg-[#0F172A] min-h-screen">
    <section className="py-20 px-6 text-white" id="projects">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-end mb-12">
          <div>
            <h2 className="text-[#E2FF6F] font-mono text-sm uppercase tracking-widest mb-2">// Portfolio</h2>
            <h3 className="text-4xl font-bold italic">THE WORKS CLOSEST TO MY HEART</h3>
          </div>
          <button className="hidden md:block border border-gray-700 px-6 py-2 rounded-full hover:bg-white hover:text-black transition">
            View All
          </button>
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {myProjects.map((project, index) => (
            <div key={index} className="group relative bg-slate-800/20 border border-slate-700 rounded-2xl overflow-hidden hover:border-[#E2FF6F]/50 transition-all duration-300">
              {/* Image Placeholder */}
              <div className="h-48 bg-slate-700/50 flex items-center justify-center group-hover:bg-slate-700 transition">
                 {project.title === "E-Learning Platform" ? (
                   <img src={elearnImg} alt={project.title} className="w-full h-full " />
                 ) : project.title === "ML Pattern Analysis" ? (
                   <img src={mlImg} alt={project.title} className="w-full h-full" />                 ) : project.title === "Choir Management System" ? (
                   <img src={choirImg} alt={project.title} className="w-full h-full " />                 ) : (
                   <span className="text-slate-500 font-bold uppercase tracking-widest">Project Preview</span>
                 )}
              </div>
              
              <div className="p-6">
                <p className="text-[#E2FF6F] text-xs font-bold mb-2 uppercase">{project.category}</p>
                <h4 className="text-xl font-bold mb-3">{project.title}</h4>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] bg-slate-900 px-2 py-1 rounded border border-slate-700 text-gray-300 italic">
                      #{tag}
                    </span>
                  ))}
                </div>
                
                <a href={project.link} className="inline-flex items-center text-sm font-bold group-hover:translate-x-2 transition-transform">
                  VIEW CASE STUDY <span className="ml-2">→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
  );
};

