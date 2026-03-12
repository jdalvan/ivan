export default function About(){
    return(
        <div className="bg-[#0F172A] dark:bg-[#0F172A] min-h-screen">
            <main className="py-16 text-center flex flex-row-2">
         
    <section className="py-20 text-white px-6">
  <div className="max-w-4xl mx-auto border-l-4 border-[#E2FF6F] pl-8">
    <h2 className="text-4xl font-bold mb-6 italic text-[#E2FF6F]">WHO AM I?</h2>
    <p className="text-lg text-gray-300 leading-relaxed">
      {/* Insert the "Bridging Data Science" text here */}
    </p>
    
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="p-6 bg-slate-800/40 rounded-lg">
         <h3 className="text-xl font-bold text-[#E2FF6F] mb-2">My Mission</h3>
         <p className="text-gray-400">To build software that doesn't just work, but learns and adapts.</p>
      </div>
      <div className="p-6 bg-slate-800/40 rounded-lg">
         <h3 className="text-xl font-bold text-[#E2FF6F] mb-2">My Hobbies</h3>
         <p className="text-gray-400">Finding harmony through singing and worship outside of the digital world.</p>
      </div>
    </div>
  </div>
</section>
               
            </main>
        </div>
    )
}