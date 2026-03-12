export default function Skills() {
  const progressiveSkills = [
    { name: "Frontend (React/Vite)", level: 70 },
    { name: "Machine Learning", level: 87 },
    { name: "Backend (Django/Python)", level: 78 },
    { name: "Version Control (Git)", level: 70 },
  ];

  const definedSkills = [
    { name: "UI/UX Design (Figma)", level: 95 },
    { name: "Tailwind CSS", level: 80 },
    { name: "SQL & Database Design", level: 85 },
    { name: "Python Programming", level: 88 },
  ];

  const SkillBar = ({ skill }) => (
    <div className="p-4 mb-4 bg-[#0F172A] border border-slate-600 rounded hover:border-[#E2FF6F]/50 transition">
      <div className="flex justify-between mb-2">
        <span className="font-semibold text-sm sm:text-base">{skill.name}</span>
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
  );

  return (
   
    <div>
    <main className="bg-[#0F172A] dark:bg-[#0F172A] min-h-screen">
    <section className="border border-[#E2FF6F] py-8 sm:py-12 lg:py-16 px-4 sm:px-6 lg:px-8 text-white rounded-lg m-4" id="skills">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-[#E2FF6F] font-mono text-xs uppercase tracking-widest mb-2">// Technical Expertise</h2>
        <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold mb-12">Skills & Proficiency</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Progressive Skills */}
          <div className="border border-[#E2FF6F]/50 p-6 rounded-lg bg-slate-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl">🚀</div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#E2FF6F]">Progressive</h4>
            </div>
            <p className="text-gray-400 text-sm mb-6">Skills actively being improved and expanded</p>
            <div className="space-y-0">
              {progressiveSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>

          {/* Defined Skills */}
          <div className="border border-[#E2FF6F]/50 p-6 rounded-lg bg-slate-900/30">
            <div className="flex items-center gap-3 mb-6">
              <div className="text-2xl">✅</div>
              <h4 className="text-xl sm:text-2xl font-bold text-[#E2FF6F]">Defined</h4>
            </div>
            <p className="text-gray-400 text-sm mb-6">Well-established and mastered skills</p>
            <div className="space-y-0">
              {definedSkills.map((skill) => (
                <SkillBar key={skill.name} skill={skill} />
              ))}
            </div>
          </div>
        </div>

        {/* Summary Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
          <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
            <div className="text-2xl sm:text-3xl font-bold text-[#E2FF6F]">8</div>
            <p className="text-gray-400 text-sm mt-2">Total Skills</p>
          </div>
          <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
            <div className="text-2xl sm:text-3xl font-bold text-[#E2FF6F]">4</div>
            <p className="text-gray-400 text-sm mt-2">Progressive</p>
          </div>
          <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
            <div className="text-2xl sm:text-3xl font-bold text-[#E2FF6F]">4</div>
            <p className="text-gray-400 text-sm mt-2">Defined</p>
          </div>
          <div className="text-center p-4 bg-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
            <div className="text-2xl sm:text-3xl font-bold text-[#E2FF6F]">82%</div>
            <p className="text-gray-400 text-sm mt-2">Avg Level</p>
          </div>
        </div>
      </div>
    </section>
    </main>
    </div>

  )
}