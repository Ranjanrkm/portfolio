import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Stars, Float } from '@react-three/drei';
import { motion } from 'framer-motion';

// 1. THE 3D BACKGROUND CORE
function TechCube() {
  const meshRef = useRef();
  
  useFrame((state, delta) => {
    meshRef.current.rotation.x += delta * 0.1;
    meshRef.current.rotation.y += delta * 0.15;
    meshRef.current.position.y = Math.sin(state.clock.elapsedTime) * 0.2;
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <mesh ref={meshRef}>
        <boxGeometry args={[3, 3, 3]} />
        <meshStandardMaterial color="#4f46e5" wireframe={true} />
      </mesh>
    </Float>
  );
}

// 2. REUSABLE SYSTEM NODE CARD (Mobile Optimized)
function ProjectCard({ title, role, description, tech, delay, link }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileTap={{ scale: 0.98 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true, margin: "-50px" }}
      className="pointer-events-auto bg-[#0a0a0e]/80 border border-white/5 p-6 md:p-8 rounded-[2rem] backdrop-blur-2xl hover:bg-white/5 transition-all duration-500 group flex flex-col relative overflow-hidden shadow-[0_0_40px_rgba(0,0,0,0.5)] md:hover:shadow-[0_0_50px_rgba(79,70,229,0.2)]"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/20 to-transparent rounded-full blur-3xl scale-150 md:scale-100 md:group-hover:scale-150 transition-transform duration-700 pointer-events-none"></div>
      
      <h3 className="text-2xl md:text-3xl font-black text-white mb-2 z-10 tracking-tight">{title}</h3>
      <h4 className="text-[10px] md:text-xs font-bold text-cyan-400 mb-6 uppercase tracking-[0.2em] z-10">{role}</h4>
      <p className="text-sm md:text-base text-zinc-400 mb-8 leading-relaxed font-light flex-grow z-10">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-8 z-10">
        {tech.map((item, index) => (
          <span key={index} className="text-[9px] md:text-[10px] font-bold text-zinc-300 bg-white/5 px-3 md:px-4 py-1.5 md:py-2 rounded-full border border-white/10 uppercase tracking-wider">
            {item}
          </span>
        ))}
      </div>
      <a 
        href={link} 
        target="_blank" 
        rel="noopener noreferrer" 
        className="text-xs md:text-sm font-bold text-white uppercase tracking-widest group-hover:text-cyan-400 transition-colors flex items-center gap-3 w-fit z-10 active:text-cyan-500"
      >
        Access Node <span className="translate-x-1 md:translate-x-0 md:group-hover:translate-x-2 transition-transform bg-white/10 p-1.5 md:p-2 rounded-full">→</span >
      </a>
    </motion.div>
  );
}

// 3. THE MASTER APPLICATION
function App() {
  return (
    <div className="w-screen min-h-screen bg-black font-sans overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* BACKGROUND MATRIX */}
      <div className="fixed top-0 left-0 w-full h-full z-0 pointer-events-none">
        <Canvas camera={{ position: [0, 0, 9] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#22d3ee" />
          <Stars radius={50} depth={50} count={3000} factor={4} saturation={0} fade speed={1.5} />
          <TechCube />
          <OrbitControls enableDamping={true} enableZoom={false} autoRotate autoRotateSpeed={0.5} />
        </Canvas>
      </div>

      {/* FOREGROUND OS */}
      <div className="relative z-10 w-full">
        
        {/* BOOT SEQUENCE (HERO) */}
        <section className="h-[100svh] flex flex-col items-center justify-center pointer-events-none px-4 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="text-center relative z-10"
          >
            <h1 className="text-5xl md:text-7xl lg:text-[9rem] font-black mb-4 tracking-tighter text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.2)]">
              BUILDING <br className="md:hidden" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-cyan-400 to-indigo-500 animate-gradient bg-[length:200%_auto]">ECOSYSTEMS</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl text-zinc-400 max-w-4xl mx-auto font-light tracking-wide mb-2">
              <span className="text-white font-bold tracking-widest uppercase">Ranjan Kumar Mahato</span>
            </p>
            <p className="text-xs md:text-sm lg:text-lg text-zinc-500 max-w-3xl mx-auto font-light tracking-widest uppercase">
              Architect of Nexus AI, Vyayam AI & AssistIQ
            </p>
          </motion.div>
          <div className="absolute bottom-12 animate-bounce text-cyan-500 text-[9px] md:text-[10px] tracking-[0.5em] uppercase font-bold">
            Scroll to Initialize
          </div>
        </section>

        {/* THE ARCHITECT (IMAGE 1 + ID BADGE) */}
        <section className="min-h-screen flex items-center px-4 md:px-10 py-20 md:py-32 pointer-events-auto border-t border-white/5 bg-gradient-to-b from-transparent to-black/50">
          <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 items-center">
            
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              className="flex justify-center items-center"
            >
              {/* ID Badge Container */}
              <div className="relative group cursor-crosshair">
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-3xl blur-3xl opacity-30 md:opacity-20 md:group-hover:opacity-50 transition-opacity duration-500"></div>
                
                <motion.div 
                  whileHover={{ rotateY: -5, rotateX: 5, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="relative bg-[#0a0a0e]/90 border border-white/20 p-3 md:p-4 rounded-3xl backdrop-blur-xl shadow-2xl z-10"
                >
                  <div className="relative overflow-hidden rounded-2xl">
                    <img src="/pic1.jpeg" alt="Ranjan Kumar Mahato" className="w-56 h-72 md:w-80 md:h-[400px] object-cover grayscale-0 md:grayscale md:group-hover:grayscale-0 transition-all duration-700" />
                    <div className="absolute left-0 w-full h-[2px] bg-cyan-400 shadow-[0_0_20px_#22d3ee] z-30 animate-[scan_3s_ease-in-out_infinite] pointer-events-none"></div>
                  </div>
                  
                  {/* Name Tag below picture */}
                  <div className="mt-4 md:mt-6 text-center pb-2">
                    <h3 className="text-lg md:text-2xl font-black text-white tracking-widest">RANJAN K. MAHATO</h3>
                    <p className="text-cyan-400 text-[10px] md:text-xs font-bold tracking-[0.3em] mt-1">LEAD AI ARCHITECT</p>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: true, margin: "-50px" }}
              className="text-center lg:text-left"
            >
              <h2 className="text-4xl md:text-5xl lg:text-7xl font-black text-white mb-4 md:mb-6 tracking-tighter">
                The <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-300 drop-shadow-[0_0_15px_rgba(34,211,238,0.5)]">Architect</span>
              </h2>
              <p className="text-sm md:text-lg lg:text-xl text-zinc-400 leading-relaxed font-light mb-8 md:mb-10 max-w-2xl mx-auto lg:mx-0">
                I am a Full-Stack AI Engineer specializing in the intersection of high-performance web architecture and generative intelligence. 
                <br/><br/>
                Whether building multi-tenant SaaS platforms like <span className="text-cyan-300 font-medium">Nexus AI</span> or orchestrating complex data pipelines for <span className="text-cyan-300 font-medium">Vyayam AI</span>, my focus is always on creating systems that are resilient, highly scalable, and beautifully designed.
              </p>
              
              <div className="flex items-center gap-4 bg-[#0a0a0e] border border-white/10 w-fit px-5 py-2.5 md:px-6 md:py-3 rounded-full backdrop-blur-md shadow-[0_0_30px_rgba(34,211,238,0.1)] mx-auto lg:mx-0">
                 <div className="relative flex h-2.5 w-2.5 md:h-3 md:w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 md:h-3 md:w-3 bg-cyan-500"></span>
                </div>
                <span className="text-[10px] md:text-xs text-cyan-400 font-bold tracking-[0.2em] uppercase">Identity_Verified</span>
              </div>
            </motion.div>
          </div>
        </section>

        {/* ACADEMIC HUD */}
        <section className="py-20 md:py-32 px-4 md:px-10 pointer-events-auto border-t border-white/5 relative bg-[#030305]/80 backdrop-blur-md">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-zinc-500 mb-12 md:mb-16 tracking-[0.5em] uppercase text-center md:text-left">
              Education Route
            </h2>
            
            <div className="flex flex-col gap-10 md:gap-12 border-l-[2px] md:border-l-[3px] border-cyan-500/30 pl-6 md:pl-10 relative ml-2 md:ml-4">
              
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-50px" }} className="relative group">
                <span className="absolute -left-[31px] md:-left-[51px] top-1 md:top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-black border-[2px] md:border-[3px] border-cyan-400 shadow-[0_0_15px_#22d3ee] md:group-hover:scale-125 transition-transform"></span>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                  <h4 className="text-xl md:text-3xl font-black text-white tracking-tight">B. P Poddar Institute of Management & Tech</h4>
                  <span className="text-cyan-400 font-mono text-[10px] md:text-sm tracking-widest bg-cyan-400/10 border border-cyan-400/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full w-fit">2022 - 2026</span>
                </div>
                <p className="text-sm md:text-lg text-zinc-400 font-light italic">
                  B.Tech in Information Technology <br className="md:hidden" /><span className="hidden md:inline text-zinc-600 mx-2 not-italic">|</span> <span className="text-indigo-300 font-medium not-italic tracking-wide">CGPA: 7.08 / 10.0</span>
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }} viewport={{ once: true, margin: "-50px" }} className="relative group">
                <span className="absolute -left-[31px] md:-left-[51px] top-1 md:top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-black border-[2px] md:border-[3px] border-indigo-500 shadow-[0_0_15px_#6366f1] md:group-hover:scale-125 transition-transform"></span>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                  <h4 className="text-lg md:text-2xl font-bold text-white">Shree Jain Vidyalaya, Kolkata</h4>
                  <span className="text-indigo-400 font-mono text-[10px] md:text-sm tracking-widest bg-indigo-500/10 border border-indigo-500/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full w-fit">2019 - 2021</span>
                </div>
                <p className="text-sm md:text-lg text-zinc-400 font-light italic">
                  12th | WBCHSE <br className="md:hidden" /><span className="hidden md:inline text-zinc-600 mx-2 not-italic">|</span> <span className="text-zinc-300 font-medium not-italic tracking-wide">Percentage: 72.6 / 100</span>
                </p>
              </motion.div>

              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: 0.2 }} viewport={{ once: true, margin: "-50px" }} className="relative group">
                <span className="absolute -left-[31px] md:-left-[51px] top-1 md:top-2 w-5 h-5 md:w-6 md:h-6 rounded-full bg-black border-[2px] md:border-[3px] border-zinc-500 md:group-hover:scale-125 transition-transform"></span>
                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-2 gap-2">
                  <h4 className="text-lg md:text-2xl font-bold text-white">Sree Bhamasah Arya Vidyalaya, Kolkata</h4>
                  <span className="text-zinc-400 font-mono text-[10px] md:text-sm tracking-widest bg-zinc-500/10 border border-zinc-500/20 px-3 py-1 md:px-4 md:py-1.5 rounded-full w-fit">2014 - 2019</span>
                </div>
                <p className="text-sm md:text-lg text-zinc-400 font-light italic">
                  10th | WBBSE <br className="md:hidden" /><span className="hidden md:inline text-zinc-600 mx-2 not-italic">|</span> <span className="text-zinc-300 font-medium not-italic tracking-wide">Percentage: 81 / 100</span>
                </p>
              </motion.div>

            </div>
          </div>
        </section>

        {/* FLAGSHIP ARCHITECTURES - WITH NEW NEXUS AI DESC */}
        <section className="py-20 md:py-32 px-4 md:px-10 pointer-events-none relative z-10 border-t border-white/5 bg-black/40">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-zinc-500 mb-12 md:mb-16 tracking-[0.5em] uppercase text-center">
              Active Deployments
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ProjectCard 
                title="Nexus AI"
                role="Multi-Tenant AI Support SaaS"
                description="A powerful B2B platform that lets any business instantly train and deploy a custom AI support agent. Features a dynamic context engine (RAG) for perfectly accurate answers and a lightweight embeddable website widget."
                tech={["React", "Node.js", "Firebase", "Gemini 2.5 Flash"]}
                delay={0.1}
                link="https://nexus-ai-eta-gray.vercel.app/"
              />
              <ProjectCard 
                title="Vyayam AI"
                role="Full-Stack AI Workout Generator"
                description="An advanced fitness web application that crafts tailored workout routines. It utilizes artificial intelligence for reliable failovers and includes a live, secure database architecture."
                tech={["React", "Node.js", "Firebase", "Generative AI APIs"]}
                delay={0.2}
                link="https://vyayam-ai.onrender.com/#/"
              />
              <ProjectCard 
                title="AssistIQ"
                role="AI Virtual Assistant"
                description="A dynamic, voice-enabled conversational agent. Engineered to process complex queries in real-time while maintaining highly secure session states across devices."
                tech={["React", "Node.js", "MongoDB", "Gemini API"]}
                delay={0.3}
                link="https://virtualassistant-nkmj.onrender.com/signup"
              />
            </div>
          </div>
        </section>

        {/* THE COMMAND CENTER (ORACLE & 500+) */}
        <section className="py-20 md:py-32 px-4 md:px-10 pointer-events-auto border-t border-white/5">
          <div className="max-w-7xl mx-auto">
            
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="bg-black border border-white/10 p-8 md:p-12 rounded-[2rem] flex flex-col justify-center items-center text-center relative overflow-hidden group shadow-[0_0_40px_rgba(0,0,0,1)] lg:col-span-2"
              >
                <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(34,211,238,0.1)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[gradient_8s_linear_infinite] pointer-events-none"></div>
                <div className="text-3xl md:text-5xl lg:text-6xl font-black text-white mb-4 md:mb-6 leading-tight z-10 drop-shadow-2xl tracking-tighter">
                  Oracle Certified <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Generative AI Professional</span>
                </div>
                <p className="text-sm md:text-lg text-zinc-400 max-w-xl mb-8 md:mb-10 z-10 font-light">
                  Officially credentialed in architecting and optimizing highly scalable AI models within enterprise cloud infrastructures.
                </p>
                <a href="https://catalog-education.oracle.com/ords/certview/sharebadge?id=6F4BF136CF5A182246F12427F6B4E6D88D12DEB4AF271307792778EBC6AE3A63" target="_blank" rel="noreferrer" className="z-10 flex items-center gap-2 md:gap-3 text-xs md:text-sm font-black tracking-widest text-black bg-cyan-400 px-6 py-4 md:px-10 md:py-5 rounded-full shadow-[0_0_30px_rgba(34,211,238,0.5)] md:hover:shadow-[0_0_50px_rgba(34,211,238,1)] hover:bg-white transition-all transform md:hover:-translate-y-1 active:scale-95">
                  VERIFY CREDENTIAL ↗
                </a>
              </motion.div>

              <motion.div 
                className="bg-[#0a0a0e] border border-white/10 p-8 md:p-10 rounded-[2rem] flex flex-col items-center justify-center text-center relative overflow-hidden shadow-2xl"
              >
                <div className="text-6xl md:text-7xl font-black text-white mb-2 tracking-tighter drop-shadow-[0_0_20px_rgba(255,255,255,0.3)]">
                  500<span className="text-indigo-500">+</span>
                </div>
                <h3 className="text-lg md:text-xl font-bold text-zinc-300 mb-6 md:mb-8">Algorithmic Solutions</h3>
                
                <div className="grid grid-cols-3 gap-3 md:gap-4 w-full">
                  <a href="https://leetcode.com/u/Ranjan_Solver/" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 md:py-4 bg-black border border-zinc-800 rounded-2xl md:hover:border-cyan-400 md:hover:shadow-[0_0_20px_rgba(34,211,238,0.3)] transition-all group/btn active:scale-95">
                    <span className="text-cyan-500 font-black text-xl md:text-2xl mb-1 md:group-hover/btn:scale-110 transition-transform">LC</span>
                    <span className="text-[8px] md:text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Verify</span>
                  </a>
                  <a href="https://www.geeksforgeeks.org/profile/ranjan2003kmpd3?tab=activity" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 md:py-4 bg-black border border-zinc-800 rounded-2xl md:hover:border-green-400 md:hover:shadow-[0_0_20px_rgba(74,222,128,0.3)] transition-all group/btn active:scale-95">
                    <span className="text-green-500 font-black text-xl md:text-2xl mb-1 md:group-hover/btn:scale-110 transition-transform">GFG</span>
                    <span className="text-[8px] md:text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Verify</span>
                  </a>
                  <a href="https://www.codechef.com/users/goofy_gale_11" target="_blank" rel="noreferrer" className="flex flex-col items-center justify-center py-3 md:py-4 bg-black border border-zinc-800 rounded-2xl md:hover:border-orange-400 md:hover:shadow-[0_0_20px_rgba(251,146,60,0.3)] transition-all group/btn active:scale-95">
                    <span className="text-orange-500 font-black text-xl md:text-2xl mb-1 md:group-hover/btn:scale-110 transition-transform">CC</span>
                    <span className="text-[8px] md:text-[9px] text-zinc-500 font-mono uppercase tracking-widest">Verify</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* SYSTEM ARCHITECTURE (TECHNICAL SKILLS) */}
        <section className="py-20 md:py-24 px-4 md:px-10 pointer-events-auto border-t border-white/5 relative z-10 bg-black">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-cyan-500 mb-10 md:mb-12 tracking-[0.5em] uppercase text-center">
              System Architecture & Skills
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              
              <div className="bg-[#0a0a0e] border border-white/10 p-6 md:p-8 rounded-3xl md:hover:border-cyan-500/50 transition-colors group">
                <div className="text-cyan-400 text-sm md:text-base mb-4 opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity">01 // LANGUAGES</div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  <span className="px-4 py-2 bg-black border border-zinc-800 rounded-lg text-white font-mono text-xs md:text-sm shadow-md">Java</span>
                </div>
              </div>

              <div className="bg-[#0a0a0e] border border-white/10 p-6 md:p-8 rounded-3xl md:hover:border-indigo-500/50 transition-colors group lg:col-span-2">
                <div className="text-indigo-400 text-sm md:text-base mb-4 opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity">02 // FRONTEND</div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["JavaScript", "React.js", "HTML", "CSS", "Tailwind CSS"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-black border border-zinc-800 rounded-lg text-white font-mono text-xs md:text-sm shadow-md">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0a0a0e] border border-white/10 p-6 md:p-8 rounded-3xl md:hover:border-green-500/50 transition-colors group">
                <div className="text-green-400 text-sm md:text-base mb-4 opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity">03 // BACKEND</div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Node.js", "Express.js"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-black border border-zinc-800 rounded-lg text-white font-mono text-xs md:text-sm shadow-md">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0a0a0e] border border-white/10 p-6 md:p-8 rounded-3xl md:hover:border-orange-500/50 transition-colors group">
                <div className="text-orange-400 text-sm md:text-base mb-4 opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity">04 // DATABASES & CLOUD</div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["MongoDB", "MySQL", "Firebase"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-black border border-zinc-800 rounded-lg text-white font-mono text-xs md:text-sm shadow-md">{tech}</span>
                  ))}
                </div>
              </div>

              <div className="bg-[#0a0a0e] border border-white/10 p-6 md:p-8 rounded-3xl md:hover:border-pink-500/50 transition-colors group">
                <div className="text-pink-400 text-sm md:text-base mb-4 opacity-100 md:opacity-50 md:group-hover:opacity-100 transition-opacity">05 // TOOLS & PLATFORMS</div>
                <div className="flex flex-wrap gap-2 md:gap-3">
                  {["Git", "GitHub", "VS Code"].map((tech) => (
                    <span key={tech} className="px-4 py-2 bg-black border border-zinc-800 rounded-lg text-white font-mono text-xs md:text-sm shadow-md">{tech}</span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* =========================================
            NEXT-LEVEL FOOTER 2.0
            ========================================= */}
        <footer className="pt-24 pb-12 md:pb-20 px-4 md:px-10 pointer-events-auto relative z-10 bg-[#020203]">
          <div className="max-w-7xl mx-auto">
            {/* Main Container with Ambient Glow */}
            <div className="bg-[#07070a] rounded-[2rem] md:rounded-[3rem] p-8 md:p-16 border border-white/5 shadow-[0_0_80px_rgba(0,0,0,0.8)] relative overflow-hidden group">
              
              {/* Ambient Background Blur Elements */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none md:group-hover:bg-cyan-500/20 transition-colors duration-700"></div>
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none md:group-hover:bg-indigo-500/20 transition-colors duration-700"></div>

              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-16 items-center">
                
                {/* Left Side: Cyber-Ring Avatar */}
                <div className="col-span-1 lg:col-span-5 flex flex-col items-center text-center">
                  
                  {/* Rotating Orbital Rings around Profile Pic */}
                  <div className="relative w-48 h-48 md:w-64 md:h-64 mb-8 flex items-center justify-center">
                    <div className="absolute inset-0 rounded-full border-[2px] border-dashed border-cyan-500/30 animate-[spin_20s_linear_infinite]"></div>
                    <div className="absolute inset-2 rounded-full border border-indigo-500/40 animate-[spin_15s_linear_infinite_reverse]"></div>
                    
                    <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full overflow-hidden border-2 border-zinc-800 shadow-[0_0_40px_rgba(34,211,238,0.15)] group-hover:shadow-[0_0_60px_rgba(34,211,238,0.4)] transition-all duration-700 z-10">
                      <img src="/pic2.jpg" alt="Ranjan Creator Profile" className="w-full h-full object-cover grayscale md:group-hover:grayscale-0 transition-all duration-700 scale-110 md:group-hover:scale-100" />
                    </div>
                  </div>

                  <h3 className="text-2xl md:text-3xl font-black text-white tracking-widest uppercase drop-shadow-lg">Ranjan K. Mahato</h3>
                  <div className="flex items-center gap-3 mt-3 justify-center bg-black/50 px-4 py-2 rounded-full border border-white/10">
                    <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse shadow-[0_0_10px_rgba(74,222,128,0.8)]"></div>
                    <span className="text-[10px] md:text-xs text-green-400 font-mono font-bold tracking-wider">Available for Deployment</span>
                  </div>
                </div>

                {/* Right Side: Philosophy & Interactive Nodes */}
                <div className="col-span-1 lg:col-span-7 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter text-center lg:text-left drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
                    Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500 animate-pulse">Connection</span>
                  </h2>
                  
                  {/* The "Great Lines" */}
                  <div className="border-l-4 border-cyan-500/50 pl-6 mb-10 mx-auto lg:mx-0 max-w-2xl text-center lg:text-left">
                    <p className="text-lg md:text-xl lg:text-2xl text-zinc-300 font-light italic leading-relaxed">
                      "Building ecosystems isn't just about writing code; it's about bridging the gap between human intuition and machine precision. Let's architect the future."
                    </p>
                  </div>

                  {/* Interactive Social Nodes */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    <a href="https://github.com/Ranjanrkm" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] hover:-translate-y-1 transition-all group/link active:scale-95">
                      <svg className="w-6 h-6 text-zinc-400 group-hover/link:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                      <span className="font-bold tracking-widest text-sm text-zinc-300 group-hover/link:text-white">GITHUB</span>
                    </a>
                    
                    <a href="https://www.linkedin.com/in/ranjan-kumar-mahato-90112424b/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-[#0077b5]/20 hover:border-[#0077b5]/50 hover:shadow-[0_0_20px_rgba(0,119,181,0.3)] hover:-translate-y-1 transition-all group/link active:scale-95">
                      <svg className="w-6 h-6 text-zinc-400 group-hover/link:text-[#0077b5] transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                      <span className="font-bold tracking-widest text-sm text-zinc-300 group-hover/link:text-white">LINKEDIN</span>
                    </a>

                    <a href="https://x.com/RanjanM83866213" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-white/10 hover:border-white/50 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1 transition-all group/link active:scale-95">
                      <svg className="w-6 h-6 text-zinc-400 group-hover/link:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/></svg>
                      <span className="font-bold tracking-widest text-sm text-zinc-300 group-hover/link:text-white">X (TWITTER)</span>
                    </a>

                    <a href="https://www.instagram.com/ranjan_mahato_rkm/" target="_blank" rel="noreferrer" className="flex items-center gap-4 p-4 bg-white/5 border border-white/10 rounded-2xl hover:bg-pink-500/20 hover:border-pink-500/50 hover:shadow-[0_0_20px_rgba(236,72,153,0.3)] hover:-translate-y-1 transition-all group/link active:scale-95">
                      <svg className="w-6 h-6 text-zinc-400 group-hover/link:text-pink-500 transition-colors" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                      <span className="font-bold tracking-widest text-sm text-zinc-300 group-hover/link:text-white">INSTAGRAM</span>
                    </a>
                  </div>

                  {/* Hyper-Premium Glowing Email Button */}
                  <div className="w-full">
                    <a href="mailto:mahatoranjan5432@gmail.com" className="group/btn relative inline-flex w-full md:w-auto items-center justify-center px-8 py-5 bg-gradient-to-r from-cyan-500 to-indigo-600 rounded-2xl overflow-hidden font-black tracking-[0.2em] text-white shadow-[0_0_40px_rgba(34,211,238,0.4)] hover:shadow-[0_0_60px_rgba(99,102,241,0.6)] hover:scale-[1.02] transition-all active:scale-95 text-xs md:text-sm">
                      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.2)_50%,transparent_75%)] bg-[length:250%_250%,100%_100%] animate-[gradient_2s_linear_infinite]"></div>
                      <span className="relative z-10">INITIATE SECURE COMMS</span>
                    </a>
                  </div>
                  
                </div>
              </div>
              
              {/* Copyright Bar inside the card */}
              <div className="relative z-10 flex flex-col md:flex-row justify-between items-center mt-12 md:mt-16 pt-8 border-t border-white/10 text-center md:text-left gap-4 md:gap-0">
                <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-widest flex items-center justify-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-500"></span> Base: Kolkata, West Bengal
                </p>
                <div className="bg-black/50 border border-white/5 px-6 py-2 rounded-lg">
                  <p className="text-zinc-500 font-mono text-[9px] md:text-[10px] uppercase tracking-[0.3em]">
                    © 2026 RANJAN K. MAHATO • SYSTEM_STABLE
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}

export default App;