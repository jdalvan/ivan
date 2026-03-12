export default function Skills() {
  const skillSets = [
    { name: "Frontend (React/Vite)", level: 70 },
    { name: "UI/UX Design (Figma)", level: 95 },
    { name: "Backend (Django/Python)", level: 78 },
    { name: "Machine Learning", level: 87 },
    { name: "Tailwind CSS", level: 80 },
    { name: "Version Control (Git)", level: 70 },
    { name: "SQL & Database Design", level: 85 },
    

  ];

  return (
   
    <div>
    <main className="bg-[#0F172A] dark:bg-[#0F172A] min-h-screen">
    <section className="border border-[#E2FF6F] py-12 px-4 text-white rounded-lg" id="skills">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-[#E2FF6F] font-mono text-xs uppercase tracking-widest mb-2">// Technical Expertise</h2>
        <h3 className="text-3xl font-bold mb-8">Skills & Proficiency</h3>

        <div className="space-y-6 border border-[#E2FF6F] p-4 rounded-lg">
          {skillSets.map((skill) => (
            <div key={skill.name} className="p-4 mb-4 bg-[#0F172A] border border-slate-600 rounded">
              <div className="flex justify-between mb-2">
                <span className="font-semibold">{skill.name}</span>
                <span className="text-[#E2FF6F] font-mono">{skill.level}%</span>
              </div>
              {/* Progress Bar Container */}
              <div className="w-full bg-slate-800 rounded-full h-3">
                <div 
                  className="bg-gradient-to-r from-[#E2FF6F] to-emerald-400 h-3 rounded-full transition-all duration-1000"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </main>
    </div>

  )
}