export default function About(){
    return(
        <div className="bg-[#0F172A] dark:bg-[#0F172A] min-h-screen">
            <main className="py-8 sm:py-12 lg:py-16">
         
    {/* Main Bio Section */}
    <section className="py-12 sm:py-16 lg:py-20 text-white px-4 sm:px-6">
  <div className="max-w-4xl mx-auto border-l-4 border-[#E2FF6F] pl-6 sm:pl-8">
    <h2 className="text-3xl sm:text-4xl font-bold mb-6 italic text-[#E2FF6F]">WHO AM I?</h2>
    <p className="text-base sm:text-lg text-gray-300 leading-relaxed mb-6">
      I'm Ivan Ishimwe, a Full Stack & Machine Learning Engineer passionate about bridging the gap between data science and practical software solutions. With expertise in Django, React, and ML model development, I create intelligent systems that solve real-world problems while maintaining exceptional UI/UX standards.
    </p>
    <p className="text-base sm:text-lg text-gray-300 leading-relaxed">
      Based in Kigali, Rwanda, I've worked on diverse projects ranging from educational platforms to ML-driven analytics systems. I believe in clean code, continuous learning, and leveraging technology to make a positive impact.
    </p>
    
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-slate-800/40 rounded-lg hover:bg-slate-800/60 transition">
         <h3 className="text-xl font-bold text-[#E2FF6F] mb-2">My Mission</h3>
         <p className="text-gray-400">To build software that doesn't just work, but learns and adapts. Creating solutions that empower users and drive innovation.</p>
      </div>
      <div className="p-6 bg-slate-800/40 rounded-lg hover:bg-slate-800/60 transition">
         <h3 className="text-xl font-bold text-[#E2FF6F] mb-2">My Passion</h3>
         <p className="text-gray-400">Finding harmony through singing, worship, and community engagement outside of the digital world.</p>
      </div>
    </div>
  </div>
</section>

{/* Experience Section */}
<section className="py-12 sm:py-16 lg:py-20 text-white px-4 sm:px-6 bg-slate-900/30">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#E2FF6F]">PROFESSIONAL JOURNEY</h2>
    
    <div className="space-y-8">
      <div className="border-l-4 border-[#E2FF6F] pl-6 sm:pl-8 py-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Full Stack Developer</h3>
        <p className="text-[#E2FF6F] font-semibold mb-2">E-Learning Platform Project</p>
        <p className="text-gray-400 mb-3">Led development of a modular learning system handling lessons, courses, and student progress tracking. Collaborated with remote teams using Git for complex code merges and version control.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">React</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Node.js</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Tailwind CSS</span>
        </div>
      </div>

      <div className="border-l-4 border-[#E2FF6F] pl-6 sm:pl-8 py-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Machine Learning Engineer</h3>
        <p className="text-[#E2FF6F] font-semibold mb-2">ML Pattern Analysis Project</p>
        <p className="text-gray-400 mb-3">Developing advanced ML models to analyze patterns and prevalence in specialized datasets. Utilizing Python, Scikit-learn, and Pandas for data preprocessing, feature engineering, and model evaluation.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Python</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Scikit-learn</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">Pandas</span>
        </div>
      </div>

      <div className="border-l-4 border-[#E2FF6F] pl-6 sm:pl-8 py-4">
        <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Backend & Database Engineer</h3>
        <p className="text-[#E2FF6F] font-semibold mb-2">Choir Management System</p>
        <p className="text-gray-400 mb-3">Designed and implemented a secure communication hub with custom database architecture. Built robust authentication, role-based access control, and efficient data management systems.</p>
        <div className="flex flex-wrap gap-2">
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">PHP</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">SQL</span>
          <span className="px-3 py-1 bg-slate-800 border border-slate-700 rounded-full text-sm">UI/UX</span>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Skills Highlight Section */}
<section className="py-12 sm:py-16 lg:py-20 text-white px-4 sm:px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#E2FF6F]">CORE COMPETENCIES</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
        <h4 className="text-lg font-bold text-[#E2FF6F] mb-3">Frontend</h4>
        <p className="text-gray-400 text-sm leading-relaxed">React, Vite, Tailwind CSS, Responsive Design, Modern UI/UX principles</p>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
        <h4 className="text-lg font-bold text-[#E2FF6F] mb-3">Backend</h4>
        <p className="text-gray-400 text-sm leading-relaxed">Django, Python, Node.js, REST APIs, Microservices Architecture</p>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
        <h4 className="text-lg font-bold text-[#E2FF6F] mb-3">Machine Learning</h4>
        <p className="text-gray-400 text-sm leading-relaxed">Model Training, Data Analysis, Scikit-learn, TensorFlow, Pandas</p>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
        <h4 className="text-lg font-bold text-[#E2FF6F] mb-3">Design</h4>
        <p className="text-gray-400 text-sm leading-relaxed">Figma, UI Design, UX Research, Prototyping, Design Systems</p>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
        <h4 className="text-lg font-bold text-[#E2FF6F] mb-3">Database</h4>
        <p className="text-gray-400 text-sm leading-relaxed">SQL, Database Design, Schema Optimization, Data Integrity</p>
      </div>
      
      <div className="p-6 bg-gradient-to-br from-slate-800/50 to-slate-900/50 rounded-lg border border-slate-700 hover:border-[#E2FF6F]/50 transition">
        <h4 className="text-lg font-bold text-[#E2FF6F] mb-3">Tools & DevOps</h4>
        <p className="text-gray-400 text-sm leading-relaxed">Git, GitHub, CI/CD, Docker, Version Control, Deployment</p>
      </div>
    </div>
  </div>
</section>

{/* Achievements Section */}
<section className="py-12 sm:py-16 lg:py-20 text-white px-4 sm:px-6 bg-slate-900/30">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#E2FF6F]">ACHIEVEMENTS & HIGHLIGHTS</h2>
    
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
      <div className="flex gap-4">
        <div className="text-3xl text-[#E2FF6F] font-bold">📊</div>
        <div>
          <h4 className="font-bold mb-2">5+ Major Projects</h4>
          <p className="text-gray-400 text-sm">Successfully delivered full-stack and ML solutions across various domains</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <div className="text-3xl text-[#E2FF6F] font-bold">🚀</div>
        <div>
          <h4 className="font-bold mb-2">Production-Ready Systems</h4>
          <p className="text-gray-400 text-sm">Built scalable applications handling real-world challenges</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <div className="text-3xl text-[#E2FF6F] font-bold">🤝</div>
        <div>
          <h4 className="font-bold mb-2">Team Collaboration</h4>
          <p className="text-gray-400 text-sm">Experienced in remote teamwork and complex project coordination</p>
        </div>
      </div>
      
      <div className="flex gap-4">
        <div className="text-3xl text-[#E2FF6F] font-bold">🎨</div>
        <div>
          <h4 className="font-bold mb-2">Design-Driven Development</h4>
          <p className="text-gray-400 text-sm">Figma-first approach ensuring exceptional user experiences</p>
        </div>
      </div>
    </div>
  </div>
</section>

{/* Personal Section */}
<section className="py-12 sm:py-16 lg:py-20 text-white px-4 sm:px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-[#E2FF6F]">BEYOND CODE</h2>
    
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-8 bg-slate-800/40 rounded-lg">
        <h3 className="text-xl font-bold text-[#E2FF6F] mb-4">🎤 Music & Worship</h3>
        <p className="text-gray-300 leading-relaxed">
          When I'm not coding, I'm singing and engaging in worship. Music is my creative outlet and a way to connect with my community on a deeper level. It brings balance to my technical pursuits.
        </p>
      </div>
      
      <div className="p-8 bg-slate-800/40 rounded-lg">
        <h3 className="text-xl font-bold text-[#E2FF6F] mb-4">🌱 Continuous Growth</h3>
        <p className="text-gray-300 leading-relaxed">
          I'm committed to staying updated with the latest technologies and best practices. Whether it's new frameworks, ML techniques, or design trends, I'm always learning and improving my craft.
        </p>
      </div>
    </div>
  </div>
</section>
               
            </main>
        </div>
    )
}