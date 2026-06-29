"use client";

import { motion } from "framer-motion";
import { ArrowRight, ChevronLeft, ChevronRight, Target, Award, Rocket, Building2 } from "lucide-react";
import { useEffect, useState } from "react";
import AboutTabs from "@/components/landing/AboutTabs";
import visionMissionImg from "../../image.png";

const placementPartners = [
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/8355377a-f356-4a02-83dd-1cb6b4038f23", text: "TCS" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/635b8350-7422-44d6-9d35-5fb8fb02cafd", text: "Accenture" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/34c864a0-d4be-4831-afa6-a9726103811b", text: "L&T Infotech" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/3dfd0b6f-c953-4deb-b03e-34bccc342831", text: "Infosys" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/6235a095-3a80-45fe-8a9c-d82fe1cb9b5e", text: "Wipro" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/72eeee92-6aed-4f2f-84ec-cbd9bd147d12", text: "Capgemini" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/5ce9ae7d-4cb3-4ac3-b2c4-78a1edeb45ab", text: "Cognizant" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/7b6e455e-b116-4367-9ae4-cd4ba129aec9", text: "Tech Mahindra" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/b05f2886-923a-40ab-bf22-5e72229459fe", text: "ICICI Bank" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/2d967117-5e83-4a26-b9b4-8724f35df734", text: "Josh Tech" },
   { image: "https://harmless-tapir-303.convex.cloud/api/storage/9b5c70b3-3ace-43e9-bc43-fafb9a4d0f88", text: "Zeus Learning" }
];

export default function Landing() {
   const [formData, setFormData] = useState({
      firstname: "",
      lastname: "",
      email: "",
      phone: "",
      message: ""
   });

   const handleFormSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      alert(`Thank you for registering, ${formData.firstname}! We will get back to you shortly.`);
      setFormData({ firstname: "", lastname: "", email: "", phone: "", message: "" });
   };

   const [activeSlide, setActiveSlide] = useState(0);
   const slides = [
      {
         img: "/images/carousel/2.jpg",
         title: "Accredited & Affiliated",
         subtitle: "BVIMIT provides top-tier education affiliated with Mumbai University"
      },
      {
         img: "/images/carousel/1.jpg",
         title: "Vibrant Campus Life",
         subtitle: "Empowering students through state-of-the-art infrastructure"
      }
   ];

   useEffect(() => {
      const timer = setInterval(() => {
         setActiveSlide((prev) => (prev + 1) % slides.length);
      }, 6000);
      return () => clearInterval(timer);
   }, []);

   return (
      <main className="bg-background text-foreground overflow-x-hidden selection:bg-primary selection:text-white">

         {/* Floating Announcements Ticker */}
         <div className="absolute top-6 left-1/2 -translate-x-1/2 w-[90%] max-w-5xl z-50">
            <div className="bg-primary text-white rounded-full px-6 py-2 shadow-2xl flex items-center overflow-hidden">
               <span className="bg-white text-primary text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full mr-4 shrink-0">Alerts</span>
               <div className="flex flex-1 animate-marquee whitespace-nowrap gap-8 items-center text-xs font-bold tracking-widest uppercase opacity-90">
                  <a href="/pdf/Provisnal Marit List 2025-26.pdf" className="hover:text-white transition-colors">Provisional Merit List 2025-26 Released</a>
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <a href="/pdf/Ph.D.-Advt.-for-2025-26_BVIMIT (2).pdf" className="hover:text-white transition-colors">PhD Computer Application Advertisement</a>
                  <span className="w-1 h-1 bg-white rounded-full"></span>
                  <a href="/pdf/Anti Raggin Committee.pdf" className="hover:text-white transition-colors">Anti Ragging Committee Notification</a>
               </div>
            </div>
         </div>

         {/* Asymmetric Hero Section */}
         <section className="relative min-h-[85vh] flex items-center pt-20 pb-10 bg-[#0B1120] text-white">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,_rgba(0,8,136,0.3))_0%,_transparent_50%)] -z-10" />
            
            <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8">
               <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-8 items-center">
                  
                  {/* Left Typography Block */}
                  <div className="lg:col-span-7 pr-0 lg:pr-12">
                     <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8, ease: "easeOut" }}>
                        <h5 className="text-sm font-bold uppercase tracking-[0.2em] text-[#ffcc00] mb-4">
                           ADMISSIONS OPEN FOR 2024-25
                        </h5>
                        <h1 className="text-5xl sm:text-7xl lg:text-[5.5rem] font-black leading-[1.1] tracking-tighter text-white mb-6">
                           Master of Computer <br />
                           <span className="text-[#3b82f6] italic font-serif block mt-2 text-6xl lg:text-[6rem] drop-shadow-sm">Applications (MCA)</span>
                        </h1>
                        <p className="text-lg md:text-xl text-white/80 max-w-xl font-medium leading-relaxed">
                           A premier two-year postgraduate program designed to forge the next generation of visionary software engineers and IT leaders. Experience a curriculum that bridges the gap between foundational computing theory and advanced industry practice at Bharati Vidyapeeth's IMIT.
                        </p>
                     </motion.div>
                  </div>

                  {/* Right Overlapping Form - UNTOUCHED */}
                  <div className="lg:col-span-5 relative">
                     <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                        className="bg-card border-2 border-primary shadow-[20px_20px_0px_0px_rgba(0,8,136,0.15)] rounded-2xl p-10 lg:ml-10"
                     >
                        <div className="flex items-center gap-4 mb-8">
                           <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-white">
                              <Rocket className="w-6 h-6" />
                           </div>
                           <div>
                              <h3 className="text-2xl font-black tracking-tight">Begin Journey</h3>
                              <p className="text-xs font-bold text-muted-foreground uppercase tracking-widest mt-1">Admissions 2026</p>
                           </div>
                        </div>

                        <form onSubmit={handleFormSubmit} className="space-y-5">
                           <div className="grid grid-cols-2 gap-5">
                              <div className="space-y-1">
                                 <label className="text-[10px] font-black uppercase text-foreground/60 tracking-widest ml-1">First Name</label>
                                 <input type="text" required value={formData.firstname} onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                                    className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-background transition-all text-sm font-medium" />
                              </div>
                              <div className="space-y-1">
                                 <label className="text-[10px] font-black uppercase text-foreground/60 tracking-widest ml-1">Last Name</label>
                                 <input type="text" required value={formData.lastname} onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                                    className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-background transition-all text-sm font-medium" />
                              </div>
                           </div>
                           <div className="space-y-1">
                              <label className="text-[10px] font-black uppercase text-foreground/60 tracking-widest ml-1">Email Address</label>
                              <input type="email" required value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                 className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-background transition-all text-sm font-medium" />
                           </div>
                           <div className="space-y-1">
                              <label className="text-[10px] font-black uppercase text-foreground/60 tracking-widest ml-1">Mobile Number</label>
                              <input type="tel" required pattern="[0-9]{10}" value={formData.phone} onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                 className="w-full px-4 py-3 bg-muted border-none rounded-lg focus:ring-2 focus:ring-primary focus:bg-background transition-all text-sm font-medium" />
                           </div>
                           <button type="submit" className="w-full bg-primary text-white font-black uppercase tracking-widest py-4 rounded-lg hover:bg-primary/90 transition-all hover:-translate-y-1 hover:shadow-lg flex items-center justify-center gap-3 mt-4">
                              Submit Inquiry <ArrowRight className="w-5 h-5" />
                           </button>
                        </form>
                     </motion.div>
                  </div>

               </div>
            </div>
         </section>


         {/* Restructured: Full-Width Carousel and Tabs */}
         <section className="py-20 relative max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col gap-16">

               {/* Carousel Full Width */}
               <div className="w-full mx-auto relative">
                  <div className="relative w-full aspect-[21/9] md:aspect-[2.5/1] rounded-3xl overflow-hidden shadow-2xl border-4 border-white dark:border-background">
                     <img
                        src={slides[activeSlide].img}
                        alt={slides[activeSlide].title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.5s] scale-100"
                     />
                     <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                     <div className="absolute bottom-10 left-10 right-10 text-white">
                        <h3 className="text-4xl md:text-5xl font-black tracking-tight mb-4">{slides[activeSlide].title}</h3>
                        <p className="text-xl text-white/90 font-medium max-w-2xl">{slides[activeSlide].subtitle}</p>
                     </div>
                  </div>

                  <div className="flex gap-4 mt-8 justify-center">
                     <button onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
                        className="w-14 h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                        <ChevronLeft className="w-6 h-6" />
                     </button>
                     <button onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
                        className="w-14 h-14 rounded-full bg-card shadow-lg border border-border flex items-center justify-center text-foreground hover:bg-primary hover:text-white transition-colors">
                        <ChevronRight className="w-6 h-6" />
                     </button>
                  </div>
               </div>

               {/* Tabs Full Width Below */}
               <div className="w-full">
                  <AboutTabs />
               </div>

            </div>
         </section>

         {/* Restructured: Academic Excellence in Staggered Layout */}
         <section className="bg-foreground text-background py-24 relative">
            <div className="max-w-[1500px] mx-auto px-4 sm:px-6 lg:px-8">

               <div className="text-center mb-16">
                  <h2 className="text-5xl md:text-7xl font-black tracking-tighter mb-6">Academic Excellence</h2>
                  <p className="text-background/60 max-w-2xl mx-auto font-medium text-xl">
                     Explore the highlights of our programs, placements, and campus activities in an environment built for success.
                  </p>
               </div>

               <div className="flex flex-col gap-12">

                  {/* Vision & Mission Banner */}
                  <div className="group relative overflow-hidden rounded-3xl bg-black border border-white/10 min-h-[450px] flex items-center">
                     <img src={visionMissionImg.src} alt="Vision" className="absolute inset-0 w-full h-full object-cover opacity-40 group-hover:opacity-30 transition-opacity duration-700 group-hover:scale-105" />
                     <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent" />
                     <div className="relative z-10 p-10 md:p-16 max-w-3xl">
                        <div className="w-16 h-16 bg-primary text-white flex items-center justify-center rounded-2xl mb-8 shadow-2xl">
                           <Target className="w-8 h-8" />
                        </div>
                        <h3 className="text-4xl md:text-5xl font-black mb-6">Vision & Mission</h3>
                        <p className="text-xl text-white/80 font-medium leading-relaxed">
                           To prepare students for careers in the industry and pursue research in all branches of computing field through effective teaching-learning process.
                        </p>
                     </div>
                  </div>

                  {/* Split Section: Placements and Recruiters */}
                  <div className="flex flex-col lg:flex-row gap-12">

                     {/* Placements Impact */}
                     <div className="lg:w-1/3 bg-white text-foreground rounded-3xl p-10 flex flex-col justify-between border-b-8 border-primary shadow-2xl">
                        <div>
                           <div className="flex justify-between items-start mb-12">
                              <div className="w-14 h-14 bg-primary/10 text-primary flex items-center justify-center rounded-2xl">
                                 <Building2 className="w-7 h-7" />
                              </div>
                              <span className="text-xs font-black uppercase tracking-widest text-muted-foreground bg-muted px-4 py-2 rounded-full">Impact</span>
                           </div>
                           <p className="text-8xl font-black tracking-tighter text-primary">18<span className="text-3xl text-foreground">LPA</span></p>
                           <p className="font-black uppercase tracking-wider text-sm mt-4 text-muted-foreground">Highest CTC Offered</p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 mt-16 border-t border-border pt-8">
                           <div>
                              <p className="text-4xl font-black">47+</p>
                              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-2">Companies</p>
                           </div>
                           <div>
                              <p className="text-4xl font-black">4.5<span className="text-xl">L</span></p>
                              <p className="text-[10px] font-black uppercase tracking-widest text-muted-foreground mt-2">Average</p>
                           </div>
                        </div>
                     </div>

                     {/* Top Recruiters */}
                     <div className="lg:w-2/3 bg-[#1A1A1A] border border-white/5 rounded-3xl p-10 md:p-16 flex flex-col justify-center">
                        <div className="flex justify-between items-center mb-12">
                           <h3 className="text-3xl md:text-4xl font-black">Top Recruiters</h3>
                           <Award className="w-10 h-10 text-primary" />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8">
                           {[
                              { name: "Carwala.com", package: "9.0 LPA", role: "Software Engineer" },
                              { name: "Josh Tech", package: "8.7 LPA", role: "Full Stack Developer" },
                              { name: "Bank of America", package: "6.45 LPA", role: "Analyst" },
                              { name: "Zeus Learning", package: "7.5 LPA", role: "Software Developer" },
                           ].map((c, i) => (
                              <div key={i} className="flex justify-between items-center border-b border-white/10 pb-6 group">
                                 <div>
                                    <p className="font-black text-xl text-white group-hover:text-primary transition-colors">{c.name}</p>
                                    <p className="text-sm text-white/50 font-medium mt-2">{c.role}</p>
                                 </div>
                                 <span className="bg-white/10 group-hover:bg-primary text-white font-bold text-sm px-5 py-2.5 rounded-xl transition-colors">{c.package}</span>
                              </div>
                           ))}
                        </div>
                     </div>
                  </div>

                  {/* MCA Latest Horizontal Banner */}
                  <div className="bg-primary text-white rounded-3xl p-10 md:p-16 flex flex-col lg:flex-row lg:items-center justify-between gap-10">
                     <div className="shrink-0">
                        <h3 className="text-4xl font-black mb-4">MCA Latest</h3>
                        <p className="text-primary-foreground/80 font-medium">Stay updated with our events</p>
                     </div>

                     <div className="flex flex-col md:flex-row gap-8 lg:gap-16 flex-1 justify-end">
                        <a href="https://manthan2k26.vercel.app/" className="block group">
                           <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Mar 24-25, 2026</p>
                           <h4 className="text-2xl font-black group-hover:-translate-y-1 transition-transform">Manthan 2026</h4>
                        </a>
                        <div className="w-px h-16 bg-white/20 hidden md:block" />
                        <a href="/events-seminars" className="block group">
                           <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Mar 18, 2026</p>
                           <h4 className="text-2xl font-black group-hover:-translate-y-1 transition-transform">Sports Day</h4>
                        </a>
                        <div className="w-px h-16 bg-white/20 hidden md:block" />
                        <a href="/events-seminars" className="block group">
                           <p className="text-sm font-bold uppercase tracking-widest text-white/60 mb-2">Apr 10-11, 2026</p>
                           <h4 className="text-2xl font-black group-hover:-translate-y-1 transition-transform">ICET Conference</h4>
                        </a>
                     </div>
                  </div>

               </div>
            </div>
         </section>

         {/* Moved Up: Placement Network */}
         <section className="bg-muted py-16 border-y border-border overflow-hidden">
            <div className="text-center mb-10 max-w-3xl mx-auto px-4">
               <h2 className="text-3xl font-black tracking-tighter mb-4">Our Placement Network</h2>
               <p className="text-muted-foreground font-medium text-lg">Partnering with global industry leaders to provide exceptional career opportunities for our students.</p>
            </div>

            <div className="relative flex">
               {/* Fade overlays */}
               <div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-r from-muted to-transparent z-10"></div>
               <div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 bg-gradient-to-l from-muted to-transparent z-10"></div>

               <div className="flex animate-marquee-fast whitespace-nowrap items-center py-4">
                  {[...placementPartners, ...placementPartners, ...placementPartners].map((partner, index) => (
                     <div key={index} className="mx-12 lg:mx-20 flex flex-col items-center justify-center min-w-[150px] md:min-w-[200px]">
                        <img src={partner.image} alt={partner.text} className="h-14 lg:h-16 object-contain hover:scale-110 transition-transform duration-300" />
                     </div>
                  ))}
               </div>
            </div>
         </section>

         <style dangerouslySetInnerHTML={{
            __html: `
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 35s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        @keyframes marquee-fast {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee-fast {
          animation: marquee-fast 25s linear infinite;
        }
        .animate-marquee-fast:hover {
          animation-play-state: paused;
        }
      `}} />
      </main>
   );
}
