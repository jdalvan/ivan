import Header from "../Components/Navigation";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import kevine from "../assets/kevine.jpg";
export default function Contact(){
    return(
      <>
      <Header/>
    <main className="bg-[#0F172A] dark:bg-[#0F172A] min-h-screen">
            <section className="py-20 px-6 text-white" id="contact">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold italic mb-4">LET’S HAVE A <span className="text-[#E2FF6F]">CHAT</span></h2>
          <p className="text-gray-400">Have a project in mind or want to discuss Machine Learning? Reach out!</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Left Side: Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-[#E2FF6F] font-bold uppercase tracking-widest text-sm">Location</h3>
              <p className="text-lg">Kigali, Rwanda</p> 
            </div>

    <div className="bg-slate-800/30 shadow-xl rounded-2xl p-6 w-80 text-center">

      <img
        src={kevine}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h2 className="text-xl text-white font-bold">Ivan Ishimwe</h2>
      <p className="text-gray-500 mb-4">Machine Learning Engineer</p>

      <div className="flex justify-center gap-4 text-2xl">

        <a href="https://facebook.com/username" target="_blank">
          <FaFacebook className="text-blue-600 hover:scale-110" />
        </a>

        <a href="https://instagram.com/username" target="_blank">
          <FaInstagram className="text-pink-500 hover:scale-110" />
        </a>

        <a href="https://github.com/username" target="_blank">
          <FaGithub className="text-black hover:scale-110" />
        </a>

        <a href="https://linkedin.com/in/username" target="_blank">
          <FaLinkedin className="text-blue-700 hover:scale-110" />
        </a>

        <a href="https://wa.me/250798547693" target="_blank">
          <FaWhatsapp className="text-green-500 hover:scale-110" />
        </a>

        <a href="mailto:email@gmail.com" target="_blank">
          <FaEnvelope className="text-red-500 hover:scale-110" />
        </a>

      </div>
    </div>
          </div>

          {/* Right Side: Form */}
          <form className="bg-slate-800/30 p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
              <input 
                type="text" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-[#E2FF6F] transition"
                placeholder="type your name here..."
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
              <input 
                type="email" 
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-[#E2FF6F] transition"
                placeholder="youremail@gmail.com"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea 
                rows="4"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-[#E2FF6F] transition"
                placeholder="Let's build something amazing..."
              ></textarea>
            </div>
            <button className="w-full bg-[#E2FF6F] text-black font-bold py-3 rounded-lg hover:bg-[#d4f056] transition duration-300">
              SUBMIT HERE
            </button>
          </form>
        </div>
      </div>
    </section>
    </main>
        </>
    )
}