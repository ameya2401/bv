import { motion } from "framer-motion";
import { ArrowRight, FileText, Trophy, GraduationCap, Building } from "lucide-react";
import { documentAssetPaths } from "@/data/publicAssetMap";
import AboutTabs from "@/components/landing/AboutTabs";

export default function Landing() {
  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground antialiased selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden"
    >
      {/* Hero Section */}
      <section className="relative w-full min-h-[70vh] md:min-h-[85vh] flex items-center justify-center overflow-hidden mb-20 py-20">
        <div className="absolute inset-0 bg-primary/40 z-10 mix-blend-multiply"></div>
        <img
          className="absolute inset-0 w-full h-full object-cover object-[center_60%] z-0 grayscale-[10%]"
          alt="BVIMIT Campus Building"
          src="/images/hero-building.jpg"
        />
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative z-20 text-center text-primary-foreground px-4 max-w-4xl mx-auto flex flex-col items-center gap-6"
        >
          <motion.h1 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-5xl md:text-[64px] md:leading-[72px] font-bold text-white tracking-tight"
          >
            BVIMIT Mumbai<br />
            <span className="text-secondary font-medium tracking-normal text-transparent bg-clip-text bg-gradient-to-r from-secondary to-yellow-400">Industrial Visit 2025</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-lg md:text-xl text-primary-foreground/90 max-w-2xl text-center font-light mt-4"
          >
            IOS Innotech Chandigarh - Shaping Future Leaders through rigorous academics and industry exposure.
          </motion.p>
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="flex gap-4 mt-8"
          >
            <button className="bg-secondary text-black font-bold px-8 py-3 rounded-full hover:bg-secondary/90 transition-all hover:shadow-[0_0_20px_rgba(253,192,3,0.4)] hover:-translate-y-1">
              Apply Now
            </button>
            <button className="bg-white text-primary font-bold px-8 py-3 rounded-full hover:bg-gray-100 transition-all hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] hover:-translate-y-1">
              Explore Campus
            </button>
          </motion.div>
        </motion.div>
      </section>

      {/* Dynamic About Tabs Replicating Legacy Section */}
      <AboutTabs />

      {/* Latest Updates Grid (Mapped to Notifications & Placements) */}
      <section className="bg-transparent py-24 mt-20 relative overflow-hidden">
        {/* Subtle background accent */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl pointer-events-none translate-y-1/2 -translate-x-1/3"></div>
        
        <div className="max-w-7xl mx-auto px-4 md:px-10 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Notifications */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="bg-card border border-border border-t-4 border-t-secondary shadow-xl p-8 rounded-xl flex flex-col gap-4 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex justify-between items-center border-b border-border pb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Notifications</h3>
                <div className="p-2 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <FileText className="text-secondary w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground group-hover/item:text-primary transition-colors">MCA Latest Updates</h4>
                    <p className="text-sm text-muted-foreground mt-1">First Year MCA Admission 2024-25</p>
                    <a href="#" className="text-sm text-primary font-medium hover:underline mt-1 block">View Details <ArrowRight className="w-3 h-3 inline transition-transform group-hover/item:translate-x-1" /></a>
                  </div>
                </div>
                <div className="flex gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground flex items-center gap-2 group-hover/item:text-primary transition-colors">
                       MCA Brochure 2025-26 <span className="bg-secondary text-white text-[10px] px-2 py-0.5 rounded-sm">NEW</span>
                    </h4>
                    <p className="text-sm text-muted-foreground mt-1">Download the latest brochure for the upcoming academic year.</p>
                    <a href={documentAssetPaths.mcaBrochure2025} target="_blank" className="text-sm text-primary font-medium hover:underline mt-1 block">Download PDF <ArrowRight className="w-3 h-3 inline transition-transform group-hover/item:translate-x-1" /></a>
                  </div>
                </div>
              </div>
            </motion.div>
            {/* Placements */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-card border border-border border-t-4 border-t-primary shadow-xl p-8 rounded-xl flex flex-col gap-4 hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
            >
              <div className="flex justify-between items-center border-b border-border pb-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">Placement Highlights</h3>
                <div className="p-2 bg-secondary/10 rounded-full group-hover:bg-secondary/20 transition-colors">
                  <Building className="text-secondary w-6 h-6" />
                </div>
              </div>
              <div className="flex flex-col gap-6 mt-4">
                <div className="flex gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground group-hover/item:text-primary transition-colors">Saint Gobain (Batch 2025)</h4>
                    <p className="text-sm text-muted-foreground mt-1">CTC - 4.5 LPA</p>
                    <p className="text-sm text-muted-foreground italic mt-1">Placed: Bhavik Deshmukh</p>
                  </div>
                </div>
                <div className="flex gap-4 group/item">
                  <div className="w-2 h-2 rounded-full bg-secondary mt-2 flex-shrink-0 group-hover/item:scale-150 transition-transform"></div>
                  <div>
                    <h4 className="text-base font-bold text-foreground group-hover/item:text-primary transition-colors">Batch 2024 Records</h4>
                    <p className="text-sm text-muted-foreground mt-1">Total 47 Companies Visited for Campus | Average CTC 4.5 LPA</p>
                    <a href="#" className="text-sm text-primary font-medium hover:underline mt-1 block">View Full List <ArrowRight className="w-3 h-3 inline transition-transform group-hover/item:translate-x-1" /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Workshop Banner (Mapped to Vision & Mission Highlight) */}
      <section className="max-w-7xl mx-auto px-4 md:px-10 py-20">
        <div className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-md flex items-center justify-center">
          <img
            className="absolute inset-0 w-full h-full object-cover"
            alt="Campus Life"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9FuQqzRfEOoP4AGvqtjcOmj1fYKiC4pcjnCkT2SqK4SeGXzr4LTO9TBzLoK3olj8R5xh39QdQR_JBmQyQIIP3eaXovUSeMbPu3qBqOvQQnYNanqf_z5x1nDIZ6oYpOQbb-J107-fbmk7J9lg4IxLG5RL-tVym52E4h1x4R60aQ8G4Vh-3XQZVMx2GQZD3tU3MJcx0wJVxaokQ40q8vxAG2MXH80elcY_ghoHaD2DrRXoWm6HFVkYt9yRPvBKe73IOkGhvCdlueaAk"
          />
          <div className="absolute inset-0 bg-primary/80"></div>
          <div className="relative z-10 text-center text-white p-6 max-w-2xl">
            <span className="bg-secondary text-secondary-foreground text-xs px-3 py-1 rounded-full uppercase tracking-wider font-bold mb-4 inline-block">
              Vision & Mission
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Social transformation through Dynamic Education</h2>
            <p className="text-base text-primary-foreground/80 mb-6">
              Preparing students for successful careers in IT by developing professionalism, ethical values, and holistic development.
            </p>
            <button className="border border-secondary text-secondary hover:bg-secondary hover:text-secondary-foreground font-semibold px-6 py-2 rounded transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>
    </motion.main>
  );
}
