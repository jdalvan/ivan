export default function Home({image}) {
    return (
        <>
               <main className="bg-gray-900 pt-32 flex flex-col md:flex-row items-center justify-around px-4 sm:px-6 lg:px-10 min-h-screen gap-8">
      <div className="max-w-2xl px-2 sm:px-0">
        <h2 className="text-gray-400 text-xl sm:text-2xl lg:text-3xl font-mono mb-2">/ Full Stack & ML Engineer</h2>
        <h1 className="text-4xl sm:text-5xl lg:text-6xl text-white font-extrabold leading-tight">
          Crafting Intelligence <br /> with <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#E2FF6F] to-white">Django & React</span>
        </h1>
        <p className="mt-6 text-gray-400 text-sm sm:text-base lg:text-lg">
          I specialize in building robust backends with Django and training 
          Machine Learning models, all while maintaining a high standard for 
          Figma-driven UI design.
        </p>
      </div>

      {/* Your Photo Container */}
      <div className="relative mt-12 md:mt-0">
        <div className="absolute -inset-4 bg-[#E2FF6F]/20 blur-3xl rounded-full"></div>
        {image && (
          <img 
            src={image} 
            alt="Dalvan" 
            className="relative w-64 sm:w-72 md:w-80 lg:w-96 grayscale hover:grayscale-0 transition-all duration-500"
          />
        )}
      </div>
    </main>
           

            
        </>
    )
}







