"use client";

import { motion } from "framer-motion";
import {
  Users,
  GraduationCap,
  Briefcase,
  Mail,
  ArrowRight,
  Microscope,
} from "lucide-react";
import Link from "next/link";
import facultyData from "@/data/faculty";
import SiteShell from "@/components/layout/SiteShell";

export default function FacultyListingPage() {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  return (
    <SiteShell>
      <main>
        {/* Dynamic HeaderSection */}
        <section className="relative py-24 bg-[#111827] overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[150px] -mr-64 -mt-64" />
          </div>

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <motion.div {...fadeIn}>
              <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-6 inline-block">
                Academic Leadership
              </span>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tighter leading-none">
                Expert <span className="text-primary italic">Faculty</span>
              </h1>
              <p className="text-gray-400 text-lg md:text-xl font-medium max-w-2xl mx-auto leading-relaxed">
                Our distinguished educators combine decades of institutional
                experience with cutting-edge industry research to mentor the
                next generation of IT leaders.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Faculty Grid Listing */}
        <section className="py-24 relative">
          {/* Subtle departmental indicators or filters could go here */}
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {facultyData.map((member, i) => (
                <motion.div
                  key={member.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: (i % 4) * 0.1 }}
                  viewport={{ once: true }}
                  className="group relative bg-card border border-border/80 hover:border-primary transition-all duration-300 flex flex-col justify-between"
                >
                  <div className="absolute top-0 left-0 w-1 h-full bg-primary transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300 origin-top" />
                  
                  <div>
                    {/* Image Container */}
                    <div className="h-64 w-full relative overflow-hidden bg-muted border-b border-border/60">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                      <div className="absolute top-4 right-4 bg-background/95 backdrop-blur px-2.5 py-1 text-[8px] font-black uppercase tracking-widest border border-border">
                        {member.experience} EXP
                      </div>
                    </div>

                    {/* Faculty Brief Details */}
                    <div className="p-6">
                      <p className="text-primary text-[9px] font-black uppercase tracking-[0.15em] mb-1">
                        {member.designation}
                      </p>
                      <h3 className="text-lg font-black text-foreground mb-4 tracking-tight group-hover:text-primary transition-colors truncate">
                        {member.name}
                      </h3>

                      <div className="space-y-2.5 pt-3 border-t border-border/40 flex flex-col">
                        <div className="flex items-center gap-2.5 text-muted-foreground">
                          <GraduationCap className="w-3.5 h-3.5 text-primary/80" />
                          <span className="text-[10px] font-bold uppercase tracking-wider truncate">
                            {member.qualification}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="px-6 pb-6 flex items-center justify-between gap-4">
                    <Link
                      href={`/faculty/${member.id}`}
                      className="inline-flex items-center gap-2 text-[9px] font-black uppercase tracking-widest text-primary hover:text-primary/80 transition-colors group/link border-t border-border/40 pt-4 flex-1"
                    >
                      <span>Detailed Profile</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover/link:translate-x-1 transition-transform" />
                    </Link>
                    <a
                      href={`mailto:${member.email}`}
                      className="p-2 bg-muted/50 rounded-full hover:bg-primary/10 hover:text-primary transition-all mt-3"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Bottom Contact Callout */}
            <motion.div
              {...fadeIn}
              className="mt-24 p-12 bg-primary/5 rounded-[3rem] border border-primary/20 flex flex-col md:flex-row items-center justify-between gap-8 border-b-4"
            >
              <div className="flex items-center gap-6">
                <div className="p-4 bg-primary text-white rounded-2xl hidden md:block">
                  <Microscope className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-foreground">
                    Interested in Collaborative Research?
                  </h3>
                  <p className="text-muted-foreground font-medium">
                    Connect with our specialized departments for academic
                    partnerships.
                  </p>
                </div>
              </div>
              <button className="px-10 py-5 bg-primary text-white font-black uppercase tracking-widest text-xs rounded-full shadow-lg">
                Connect with Research Cell
              </button>
            </motion.div>
          </div>
        </section>
      </main>
    </SiteShell>
  );
}
