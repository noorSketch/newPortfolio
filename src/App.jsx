import React, { useState, useEffect } from 'react';
// Importing specific icons from lucide-react library for UI elements
import { 
  Github, 
  Linkedin, 
  Mail, 
  Moon, 
  Sun, 
  Code, 
  User, 
  Briefcase, 
  Send,
  ChevronRight,
  Menu, 
  X,
  MapPin,
  Terminal,
  BookOpen,
  ExternalLink
} from 'lucide-react';

/**
 * THEME CONFIGURATION
 * Primary: Soft Pastel Turquoise (#33a68b)
 * This is the main Application component
 */
const App = () => {
  // --- STATE MANAGEMENT ---
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // --- TYPEWRITER ANIMATION STATE ---
  const [displayText, setDisplayText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(150);

  const roles = ["Tech Enthusiast", "Junior Developer"];

  // EFFECT: Set browser title and Favicon
  useEffect(() => {
    // Set Document Title
    document.title = "Afiqah Zahid | Portfolio";

    // Create and inject Favicon
    const link = document.querySelector("link[rel*='icon']") || document.createElement('link');
    
    // --- CARA TUKAR EMOJI ---
    // Anda boleh gantikan 👩🏻‍💻 di bawah dengan mana-mana emoji yang anda suka.
    // Gunakan shortcut (Windows + .) atau (Control + Command + Space di Mac) untuk pilih emoji.
    // Contoh: Developer wanita dengan tona kulit sederhana 🧕🏻👩🏻‍🚀🧙🏻‍♀️

    const selectedEmoji = "🧙🏻‍♀️"; 

    link.rel = 'shortcut icon';
    link.type = 'image/svg+xml';
    link.href = `data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>${selectedEmoji}</text></svg>`;
    
    document.getElementsByTagName('head')[0].appendChild(link);
  }, []);

  // EFFECT: Handle Typewriter Logic
  useEffect(() => {
    const handleType = () => {
      const i = loopNum % roles.length;
      const fullText = roles[i];

      setDisplayText(
        isDeleting 
          ? fullText.substring(0, displayText.length - 1) 
          : fullText.substring(0, displayText.length + 1)
      );

      setTypingSpeed(isDeleting ? 80 : 150);

      if (!isDeleting && displayText === fullText) {
        setTimeout(() => setIsDeleting(true), 2500);
      } 
      else if (isDeleting && displayText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [displayText, isDeleting, loopNum, typingSpeed]);

  // --- UTILITY FUNCTIONS ---
  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };

  const scrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
    setActiveSection(id);
  };

  const navLinks = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  // --- DATA PROJEK (Updated with your project names) ---
  // CARA GUNA: Jika guna folder public, letak path string: "/images/faktarena.png"
  // Jika guna import, letak nama variable: faktarenaImg
  const projects = [
    {
      title: "FaktArena",
      description: "Trivia game related to Malaysia factual information built with a focus on interactive learning.",
      tags: ["React", "Tailwind", "Vite"],
      image: "./faktArena.jpg",
      link: "https://noorsketch.github.io/MyTrivia-Game/"
    },
    {
      // Menggunakan ./ supaya ia mencari relatif kepada root folder di GitHub Pages
      title: "Type3ee",
      description: "Typing game that helps improve typing speed and accuracy through challenging levels.",
      tags: ["React", "Tailwind", "Vite"],
      image: "./type3ee.jpg",
      link: "https://noorsketch.github.io/TypingGame-Type3ee/"
    },
    {
      title: "AI Generated Meeting Minute",
      description: "SaaS platform that automatically generates structured meeting minutes using Gemini AI API.",
      tags: ["ASP.NET", "Gemini AI"],
      image: "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=800&auto=format&fit=crop",
      link: "#"
    }
  ];

  const marqueeSkills = [
    { name: "HTML", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg" },
    { name: "CSS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg" },
    { name: "JavaScript", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg" },
    { name: "Python", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg" },
    { name: "ReactJS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "NodeJS", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Vite", imgUrl: "https://raw.githubusercontent.com/vitejs/vite/main/docs/public/logo.svg" },
    { name: "Java", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg" },
    { name: "C++", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cplusplus/cplusplus-original.svg" },
    { name: "Postman", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg" },
    { name: "GitHub", imgUrl: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg", invertDark: true }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 overflow-x-hidden ${isDarkMode ? 'bg-[#0a0f12] text-zinc-100' : 'bg-[#f4fafa] text-[#1a2e35]'}`}>
      
      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: flex;
            width: max-content;
            animation: marquee 30s linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
          .cursor-blink {
            animation: blink 1s step-end infinite;
          }
          @keyframes blink {
            from, to { border-color: transparent }
            50% { border-color: #33a68b }
          }

          /* This ensures smooth scrolling stops at the right place below the nav */
          section {
            scroll-margin-top: 20px;
          }
        `}
      </style>

      <nav className={`fixed top-0 w-full z-50 transition-colors duration-300 ${isDarkMode ? 'bg-[#0a0f12]/80' : 'bg-[#f4fafa]/80'} backdrop-blur-md`}>
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="text-xl font-bold cursor-pointer text-[#33a68b] opacity-70 tracking-tight" onClick={() => scrollTo('home')}>
            Afiqah Zahid
          </div>

          <div className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollTo(link.id)}
                className={`text-[15px] font-semibold transition-colors hover:text-[#33a68b] ${activeSection === link.id ? 'text-[#33a68b]' : 'text-[#4c6a73]'}`}
              >
                {link.name}
              </button>
            ))}
            <button 
              onClick={toggleDarkMode}
              className={`p-2 rounded-full transition-colors ${isDarkMode ? 'bg-zinc-800 text-teal-400' : 'bg-white shadow-sm text-teal-600 border border-teal-50'}`}
            >
              {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <div className="md:hidden flex items-center gap-4">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-[#1a2e35] dark:text-white">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className={`md:hidden p-6 flex flex-col gap-4 border-t transition-colors ${isDarkMode ? 'bg-[#0a0f12] border-zinc-800' : 'bg-white border-zinc-100'}`}>
            {navLinks.map((link) => (
              <button key={link.id} onClick={() => scrollTo(link.id)} className="text-left font-semibold py-2">
                {link.name}
              </button>
            ))}
            <button onClick={toggleDarkMode} className="flex items-center gap-2 py-2 font-semibold">
              {isDarkMode ? <><Sun size={18} /> Light Mode</> : <><Moon size={18} /> Dark Mode</>}
            </button>
          </div>
        )}
      </nav>

      <main className="w-full">
        {/* HOME SECTION */}
        <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-20">
          <div className="max-w-4xl mx-auto w-full flex flex-col items-center">
            <h1 className="text-[40px] md:text-[64px] font-bold leading-[1.1] text-[#1a2e35] dark:text-white tracking-tight mb-6">
              Hi, I'm <span className="text-[#33a68b]"> Afiqah Zahid</span>
            </h1>
            
            <div className="flex flex-col items-center gap-2 mb-6">
              <div className="h-8 flex items-center justify-center">
                <span className="text-[18px] md:text-[22px] font-medium text-[#5b7a83] dark:text-zinc-400">
                   <span className="text-[#1a2e35] dark:text-white font-bold border-r-2 border-[#33a68b] pr-1 cursor-blink">{displayText}</span>
                </span>
              </div>
              <span className="text-[10px] md:text-[11px] font-semibold text-zinc-600 dark:text-zinc-400 flex items-center gap-1 px-3 py-1 bg-white/50 dark:bg-white/5 rounded-full border border-zinc-200/50 dark:border-white/10 shadow-sm">
                <MapPin size={10} className="text-[#33a68b]" /> Remote, Anywhere
              </span>
            </div>

            <div className="relative w-full max-w-2xl mx-auto group mb-10">
              <div className="absolute inset-0 bg-white/40 dark:bg-white/5 backdrop-blur-md border border-white/60 dark:border-white/10 rounded-full z-0 shadow-sm"></div>
              <div className="overflow-hidden rounded-full">
                <div className="animate-marquee py-3 px-6 flex items-center">
                  {[...marqueeSkills, ...marqueeSkills].map((skill, index) => (
                    <div key={index} className="mx-6 flex items-center gap-2 transition-all duration-300 group/item hover:scale-125 cursor-default">
                      <img 
                        src={skill.imgUrl} 
                        alt={skill.name} 
                        className={`w-6 h-6 grayscale opacity-70 transition-all duration-300 group-hover/item:grayscale-0 group-hover/item:opacity-100 ${skill.invertDark ? 'dark:invert' : ''}`} 
                      />
                      <span className="text-[13px] font-bold text-[#4c6a73] dark:text-zinc-400 whitespace-nowrap transition-colors group-hover/item:text-[#33a68b]">{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center gap-3 max-w-2xl">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-lg text-[12px] font-medium">
                <BookOpen size={12} className="text-[#33a68b]" />
                <span>Current Position : <span className="font-bold">Intern at Isuzu Hicom</span></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-lg text-[12px] font-medium">
                <Terminal size={12} className="text-[#33a68b]" />
                <span>Current Project : <span className="font-bold">AI generated meeting minute</span></span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-zinc-900/5 dark:bg-white/5 border border-zinc-200 dark:border-white/10 rounded-lg text-[12px] font-medium">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                <span>Open to opportunities</span>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className="min-h-screen flex items-center py-24 max-w-6xl mx-auto px-6 border-t border-zinc-100 dark:border-zinc-900">
          <div className="flex flex-col md:flex-row gap-16 items-center w-full">
            <div className="w-full md:w-1/2">
              <div className="relative w-full aspect-square max-w-sm mx-auto overflow-hidden rounded-2xl bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800">
                <div className="absolute inset-0 bg-[#33a68b] opacity-10"></div>
                <div className="absolute inset-0 flex items-center justify-center">

                  {/* <User size={70} className="text-[#33a68b]" /> */}
                  {/* IMEJ SEBENAR BOLEH DILETAK DI SINI */}
                  <img 
                    src ="https://plus.unsplash.com/premium_photo-1661627522817-99a84c5c77e7?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Afiqah Zahid" 
                    className="w-full h-full object-cover"
                    onError={(e) => { e.target.style.display = 'none'; }}
                  />

                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex flex-col gap-6">
              <h2 className="text-3xl font-bold flex items-center gap-3">
                <User className="text-[#33a68b]" /> About Me
              </h2>
              <p className="text-[#5b7a83] dark:text-zinc-400 leading-relaxed text-lg">
                I am a passionate software developer currently completing my internship in software development. I enjoy building web applications, learning new technologies, and solving real-world problems through code.
              </p>
              <p className="text-[#5b7a83] dark:text-zinc-400 leading-relaxed text-lg">
                My recent work includes developing an AI-powered meeting assistant that converts speech to transcripts and generates structured meeting minutes automatically.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-2">
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-teal-50 dark:border-zinc-800 shadow-sm">
                  <h4 className="font-bold text-[#33a68b] text-sm uppercase">Pursuing</h4>
                  <p className="text-sm text-[#5b7a83] dark:text-zinc-400">Sijil Teknologi Maklumat</p>
                  <p className="text-sm text-[#5b7a83] dark:text-zinc-400" style={{ fontSize: '0.720rem' }}>@ Kolej Komuniti Paya Besar</p>
                </div>
                <div className="p-6 rounded-2xl bg-white dark:bg-zinc-900 border border-teal-50 dark:border-zinc-800 shadow-sm">
                  <h4 className="font-bold text-[#33a68b] text-sm uppercase">Focus</h4>
                  <p className="text-sm text-[#5b7a83] dark:text-zinc-400">Web & AI Dev</p>
                  <p className="text-sm text-[#5b7a83] dark:text-zinc-400">API Integration</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* PROJECTS SECTION */}
        <section id="projects" className="min-h-screen flex flex-col justify-center py-24 max-w-6xl mx-auto px-6 border-t border-zinc-100 dark:border-zinc-900">
          <h2 className="text-3xl font-bold mb-12 flex items-center justify-center gap-3 text-center">
            <Briefcase className="text-[#33a68b]" /> Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group p-8 rounded-3xl bg-white dark:bg-zinc-900 border border-teal-50 dark:border-zinc-800 transition-all hover:shadow-xl hover:shadow-[#33a68b]/5 hover:-translate-y-1">
                {/* --- BAHAGIAN YANG SAYA EDIT: Ganti Code icon kepada Image --- */}
                <div className="w-full aspect-video rounded-2xl overflow-hidden bg-zinc-100 dark:bg-zinc-800 mb-6 relative">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors"></div>
                </div>
                {/* -------------------------------------------------------- */}
                
                <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                <p className="text-[#5b7a83] dark:text-zinc-400 text-sm mb-6 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                    <span key={i} className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-teal-50 dark:bg-teal-900/20 text-[#33a68b] rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>

                <a href={project.link} className="flex items-center gap-2 text-[15px] font-bold text-[#33a68b] hover:gap-3 transition-all">
                  View Project <ExternalLink size={16} />
                </a>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className="min-h-screen flex items-center justify-center py-24 max-w-6xl mx-auto px-6 border-t border-zinc-100 dark:border-zinc-900">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-[42px] font-bold mb-8 text-[#1a2e35] dark:text-white">Let's work together.</h2>
            <a 
              href="https://t.me/afiqahzahid" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex w-full md:w-auto px-10 py-4 bg-[#1a2e35] dark:bg-white text-white dark:text-[#1a2e35] font-bold rounded-2xl transition-transform active:scale-95 items-center justify-center gap-3 mx-auto shadow-lg hover:opacity-90 no-underline"
            >
              Send a Message <Send size={18} />
            </a>
          </div>
        </section>
      </main>

      <footer className="py-12 border-t border-zinc-100 dark:border-zinc-900">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-sm text-[#5b7a83]">
            © {new Date().getFullYear()} Afiqah Zahid. All rights reserved.
          </div>
          <div className="flex items-center gap-8">
            <a href="https://github.com/noorSketch" target="_blank" rel="noreferrer" className="text-[#5b7a83] hover:text-[#33a68b] transition-colors"><Github size={20} /></a>
            <a href="#" className="text-[#5b7a83] hover:text-[#33a68b] transition-colors"><Linkedin size={20} /></a>
            <a href="mailto:noorafiqahmz01@gmail.com" className="text-[#5b7a83] hover:text-[#33a68b] transition-colors"><Mail size={20} /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;