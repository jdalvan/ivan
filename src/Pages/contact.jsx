import Header from "../Components/Navigation";
import { FaFacebook, FaInstagram, FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import kevine from "../assets/kevine.jpg";
import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact(){
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendToWhatsApp = (name, email, message) => {
        const phoneNumber = '250798547693';
        const whatsappMessage = `Hello Ivan! My name is ${name}.\n\nEmail: ${email}\n\nMessage: ${message}`;
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://wa.me/${phoneNumber}?text=${encodedMessage}`, '_blank');
    };

    const sendToEmail = async () => {
        try {
            const templateParams = {
                to_email: 'ishvannyonly19@gmail.com',
                from_name: formData.name,
                from_email: formData.email,
                message: formData.message,
                reply_to: formData.email
            };

            await emailjs.send(
                'service_9h8v7s8',
                'template_contact_form',
                templateParams,
                'user_9h8v7s8'
            );
            return true;
        } catch (error) {
            console.error('Email sending failed:', error);
            return false;
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        if (!formData.name || !formData.email || !formData.message) {
            setStatus('Please fill in all fields!');
            return;
        }

        setLoading(true);
        setStatus('');

        try {
            // Send to email
            const emailSent = await sendToEmail();
            
            // Send to WhatsApp
            sendToWhatsApp(formData.name, formData.email, formData.message);

            if (emailSent) {
                setStatus('✅ Message sent! You will be redirected to WhatsApp to continue the conversation.');
                setTimeout(() => {
                    setFormData({ name: '', email: '', message: '' });
                    setStatus('');
                }, 3000);
            } else {
                setStatus('⚠️ WhatsApp link opened! Email sending had issues.');
            }
        } catch (error) {
            setStatus('❌ Failed to send message. Please try again.');
        } finally {
            setLoading(false);
        }
    };

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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
          {/* Left Side: Info */}
          <div className="space-y-6 sm:space-y-8">
            <div>
              <h3 className="text-[#E2FF6F] font-bold uppercase tracking-widest text-sm">Location</h3>
              <p className="text-lg">Kigali, Rwanda</p> 
            </div>

    <div className="bg-slate-800/30 shadow-xl rounded-2xl p-6 w-full sm:w-80 mx-auto text-center">

      <img
        src={kevine}
        alt="profile"
        className="w-24 h-24 rounded-full mx-auto mb-4"
      />

      <h2 className="text-lg sm:text-xl text-white font-bold">Ivan Ishimwe</h2>
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
          <form onSubmit={handleSubmit} className="bg-slate-800/30 p-6 sm:p-8 rounded-2xl backdrop-blur-sm border border-slate-700">
            {status && (
              <div className={`mb-4 p-4 rounded-lg text-center font-semibold ${
                status.includes('✅') ? 'bg-green-900/40 text-green-300 border border-green-700' :
                status.includes('❌') ? 'bg-red-900/40 text-red-300 border border-red-700' :
                'bg-yellow-900/40 text-yellow-300 border border-yellow-700'
              }`}>
                {status}
              </div>
            )}
            
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Your Name</label>
              <input 
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-[#E2FF6F] transition text-white"
                placeholder="type your name here..."
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Email Address</label>
              <input 
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-[#E2FF6F] transition text-white"
                placeholder="youremail@gmail.com"
                required
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium mb-2 text-gray-300">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="4"
                className="w-full bg-slate-900 border border-slate-700 rounded-lg py-3 px-4 focus:outline-none focus:border-[#E2FF6F] transition text-white resize-none"
                placeholder="Let's build something amazing..."
                required
              ></textarea>
            </div>
            <button 
              type="submit" 
              disabled={loading}
              className="w-full bg-[#E2FF6F] text-black font-bold py-3 rounded-lg hover:bg-[#d4f056] transition duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'SENDING...' : 'SUBMIT HERE'}
            </button>
            <p className="text-xs text-gray-400 mt-4 text-center">
              💡 Tip: Your message will be sent to both email and WhatsApp!
            </p>
          </form>
        </div>
      </div>
    </section>
    </main>
        </>
    )
}