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
              Architect of Vyayam AI, AssistIQ & Nexus AI
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
                Whether orchestrating multiple AI models for <span className="text-cyan-300 font-medium">Vyayam AI</span> or building secure real-time protocols for <span className="text-cyan-300 font-medium">AssistIQ</span>, my focus is always on creating systems that are resilient, scalable, and beautifully designed.
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

        {/* FLAGSHIP ARCHITECTURES */}
        <section className="py-20 md:py-32 px-4 md:px-10 pointer-events-none relative z-10 border-t border-white/5 bg-black/40">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-xs md:text-sm font-bold text-zinc-500 mb-12 md:mb-16 tracking-[0.5em] uppercase text-center">
              Active Deployments
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              <ProjectCard 
                title="Vyayam AI"
                role="Full-Stack AI Workout Generator"
                description="An advanced fitness web application that crafts tailored workout routines. It utilizes artificial intelligence for reliable failovers and includes a live, secure database architecture."
                tech={["React", "Node.js", "Firebase", "Generative AI APIs"]}
                delay={0.1}
                link="https://vyayam-ai.onrender.com/#/"
              />
              <ProjectCard 
                title="AssistIQ"
                role="AI Virtual Assistant"
                description="A dynamic, voice-enabled conversational agent. Engineered to process complex queries in real-time while maintaining highly secure session states across devices."
                tech={["React", "Node.js", "MongoDB", "Gemini API"]}
                delay={0.2}
                link="https://virtualassistant-nkmj.onrender.com/signup"
              />
              <ProjectCard 
                title="Nexus AI"
                role="Next-Gen AI Interface"
                description="A cutting-edge artificial intelligence platform designed for seamless integration. Engineered with high-performance frameworks to deliver rapid, scalable intelligence."
                tech={["React", "Tailwind CSS", "AI Integration", "Vercel"]}
                delay={0.3}
                link="https://nexus-ai-eta-gray.vercel.app/"
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

        {/* REDESIGNED CONTACT FOOTER (IMAGE 2 + GREAT LINES) */}
        <footer className="pt-20 pb-10 md:pb-16 px-4 md:px-10 pointer-events-auto relative bg-[#030305]">
          <div className="max-w-7xl mx-auto">
            <div className="bg-[#0a0a0e] rounded-[2rem] md:rounded-[3rem] p-6 md:p-16 border border-white/10 shadow-[0_0_100px_rgba(0,0,0,1)] relative overflow-hidden">
              
              <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-center">
                
                {/* Left Side: Avatar Profile (Using pic2.jpg) */}
                <div className="col-span-1 lg:col-span-4 flex flex-col items-center text-center mt-4 md:mt-0">
                  <div className="w-40 h-40 md:w-64 md:h-64 rounded-full overflow-hidden border-4 border-zinc-800 shadow-[0_0_30px_rgba(79,70,229,0.3)] mb-4 md:mb-6 md:hover:scale-105 md:hover:border-cyan-500 transition-all duration-500">
                    <img src="/pic2.jpg" alt="Ranjan Creator Profile" className="w-full h-full object-cover grayscale-0 md:grayscale md:hover:grayscale-0 transition-all duration-500" />
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-white tracking-widest uppercase">Ranjan K. Mahato</h3>
                  <div className="flex items-center gap-2 mt-2 justify-center">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <span className="text-[10px] md:text-xs text-zinc-400 font-mono">Available for New Opportunities</span>
                  </div>
                </div>

                {/* Right Side: Philosophy & Network Links */}
                <div className="col-span-1 lg:col-span-8 flex flex-col justify-center">
                  <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 tracking-tighter text-center lg:text-left">
                    Initiate <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-500">Connection</span>
                  </h2>
                  
                  {/* The "Great Lines" */}
                  <div className="border-l-2 md:border-l-4 border-indigo-500 pl-4 md:pl-6 mb-8 md:mb-10 mx-auto lg:mx-0 max-w-2xl text-center lg:text-left">
                    <p className="text-base md:text-xl lg:text-2xl text-zinc-300 font-light italic leading-relaxed">
                      "Building ecosystems isn't just about writing code; it's about bridging the gap between human intuition and machine precision. Let's architect the future."
                    </p>
                  </div>

                  <div className="flex flex-col xl:flex-row gap-8 xl:gap-10 items-center lg:items-start xl:items-center">
                    {/* Social Grid */}
                    <div className="grid grid-cols-2 gap-x-4 md:gap-x-8 gap-y-4 text-xs md:text-sm lg:text-base font-bold tracking-wider w-full md:w-auto">
                      <a href="https://github.com/Ranjanrkm" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white md:hover:translate-x-2 transition-all flex items-center gap-2 active:scale-95">
                        <span className="text-cyan-400">/</span> GitHub
                      </a>
                      <a href="https://www.linkedin.com/in/ranjan-kumar-mahato-90112424b/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white md:hover:translate-x-2 transition-all flex items-center gap-2 active:scale-95">
                        <span className="text-cyan-400">/</span> LinkedIn
                      </a>
                      <a href="https://x.com/RanjanM83866213" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white md:hover:translate-x-2 transition-all flex items-center gap-2 active:scale-95">
                        <span className="text-cyan-400">/</span> X (Twitter)
                      </a>
                      <a href="https://www.instagram.com/ranjan_mahato_rkm/" target="_blank" rel="noreferrer" className="text-zinc-400 hover:text-white md:hover:translate-x-2 transition-all flex items-center gap-2 active:scale-95">
                        <span className="text-cyan-400">/</span> Instagram
                      </a>
                    </div>

                    {/* Glowing Email Button */}
                    <div className="mt-2 md:mt-0 xl:ml-auto w-full md:w-auto">
                      <a href="mailto:mahatoranjan5432@gmail.com" className="flex md:inline-flex items-center justify-center px-6 md:px-8 py-4 bg-white/5 border border-white/20 rounded-full text-white text-[10px] md:text-xs font-black tracking-[0.2em] hover:bg-cyan-500 hover:text-black hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] md:hover:scale-105 transition-all active:scale-95 text-center">
                        INITIATE SECURE COMMS
                      </a>
                    </div>
                  </div>
                  
                  {/* Location & Copyright */}
                  <div className="flex flex-col md:flex-row justify-between items-center mt-12 md:mt-16 pt-6 md:pt-8 border-t border-zinc-800 text-center md:text-left gap-4 md:gap-0">
                    <p className="text-zinc-500 font-mono text-[10px] md:text-xs uppercase tracking-widest">
                      Base: Kolkata, West Bengal
                    </p>
                    <p className="text-zinc-600 font-mono text-[8px] md:text-[10px] uppercase tracking-[0.3em]">
                      © 2026 RANJAN K. MAHATO • SYSTEM_STABLE
                    </p>
                  </div>
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