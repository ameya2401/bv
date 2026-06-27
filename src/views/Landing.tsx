"use client";

import { motion } from "framer-motion";
import { 
  ArrowRight, 
  FileText, 
  Trophy, 
  GraduationCap, 
  Building, 
  Target, 
  Search, 
  Mail, 
  Phone, 
  User, 
  MessageSquare,
  Sparkles,
  ChevronLeft,
  ChevronRight
} from "lucide-react";
import { useEffect, useState } from "react";
import AboutTabs from "@/components/landing/AboutTabs";

export default function Landing() {
  // Carousel State
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
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  // Form State
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

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="bg-background text-foreground antialiased selection:bg-secondary selection:text-secondary-foreground overflow-x-hidden pt-6 pb-20"
    >
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        {/* TOP SECTION: Vision & Mission (Left) + Registration Form (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Vision & Mission (Col span 2) */}
          <div className="lg:col-span-2 flex flex-col gap-6">
            <div className="bg-card border border-border border-t-4 border-t-primary rounded-2xl shadow-lg overflow-hidden flex flex-col h-full">
              <div className="bg-primary text-primary-foreground py-4 px-6 flex items-center gap-3">
                <Target className="w-6 h-6" />
                <h2 className="text-xl font-bold uppercase tracking-wide">Vision</h2>
              </div>
              <div className="p-6 border-b border-border bg-muted/20 text-center">
                <p className="text-2xl font-serif italic text-foreground font-semibold">
                  "Social Transformation Through Dynamic Education"
                </p>
              </div>
              <div className="bg-primary text-primary-foreground py-4 px-6 flex items-center gap-3">
                <Target className="w-6 h-6" />
                <h2 className="text-xl font-bold uppercase tracking-wide">Mission</h2>
              </div>
              <div className="p-6 flex-grow flex flex-col justify-center">
                <div className="space-y-4">
                  {[
                    "To prepare students for careers in the industry and pursue research in all branches of computing field through effective teaching-learning process.",
                    "To strengthen the industry-institute interaction by providing up-to-date programs.",
                    "To imbibe amongst the students ethical usage of technical knowledge beneficial to the society.",
                    "To provide an environment that fosters a framework for promoting collaborative and multidisciplinary activities."
                  ].map((item, idx) => (
                    <div key={idx} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-secondary/10 flex items-center justify-center text-secondary shrink-0 mt-0.5">
                        ✓
                      </div>
                      <p className="text-muted-foreground text-sm leading-relaxed">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Registration Form */}
          <div className="bg-card border border-border border-t-4 border-t-secondary rounded-2xl shadow-lg overflow-hidden flex flex-col">
            <div className="bg-secondary text-secondary-foreground py-4 px-6 flex items-center gap-3">
              <FileText className="w-6 h-6" />
              <h2 className="text-xl font-bold uppercase tracking-wide">Registration / Inquiry</h2>
            </div>
            <form onSubmit={handleFormSubmit} className="p-6 flex flex-col gap-4 flex-grow justify-center">
              <div className="grid grid-cols-2 gap-3">
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="First Name"
                    value={formData.firstname}
                    onChange={(e) => setFormData({ ...formData, firstname: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:border-primary text-sm"
                  />
                </div>
                <div className="relative">
                  <User className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                  <input
                    type="text"
                    required
                    placeholder="Last Name"
                    value={formData.lastname}
                    onChange={(e) => setFormData({ ...formData, lastname: e.target.value })}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:border-primary text-sm"
                  />
                </div>
              </div>

              <div className="relative">
                <Mail className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                <input
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:border-primary text-sm"
                />
              </div>

              <div className="relative">
                <Phone className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                <input
                  type="tel"
                  required
                  pattern="[0-9]{10}"
                  placeholder="10-Digit Mobile No."
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:border-primary text-sm"
                />
              </div>

              <div className="relative">
                <MessageSquare className="absolute left-3 top-3.5 w-4 h-4 text-muted-foreground" />
                <textarea
                  required
                  placeholder="Your Message..."
                  rows={2}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-border bg-background focus:outline-none focus:border-primary text-sm resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground font-bold py-3 rounded-full hover:bg-primary/95 transition-all shadow-md mt-2 flex items-center justify-center gap-2"
              >
                Submit Inquiry
                <ArrowRight className="w-4 h-4" />
              </button>
            </form>
          </div>

        </div>

        {/* MID SECTION: Scrolling Marquees (College Tickers) */}
        <div className="space-y-4">
          
          {/* MCA Latest Marquee */}
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex items-stretch h-12">
            <div className="bg-primary text-primary-foreground px-4 font-bold flex items-center gap-2 uppercase tracking-wide text-xs shrink-0 select-none">
              <Sparkles className="w-4 h-4 animate-pulse" />
              MCA Latest
            </div>
            <div className="flex-grow overflow-hidden flex items-center relative bg-muted/10">
              <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-bold text-foreground">
                <a href="https://manthan2k26.vercel.app/" target="_blank" className="hover:text-primary transition-colors flex items-center gap-2">
                  <img src="/gifs/newred.gif" alt="New" className="w-8 inline" />
                  Manthan 2026 (24th & 25th March 2026)
                </a>
                <a href="/events-seminars" className="hover:text-primary transition-colors flex items-center gap-2">
                  <img src="/gifs/newred.gif" alt="New" className="w-8 inline" />
                  Sports Day 2026 (18th March 2026)
                </a>
                <a href="/events-seminars" className="hover:text-primary transition-colors flex items-center gap-2">
                  <img src="/gifs/newred.gif" alt="New" className="w-8 inline" />
                  ICET 2026 (10th & 11th April 2026)
                </a>
              </div>
            </div>
          </div>

          {/* Placement Latest Marquee */}
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex items-stretch h-12">
            <div className="bg-secondary text-secondary-foreground px-4 font-bold flex items-center gap-2 uppercase tracking-wide text-xs shrink-0 select-none">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Placement Latest
            </div>
            <div className="flex-grow overflow-hidden flex items-center relative bg-muted/10">
              <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-bold text-foreground">
                <a href="/placements" className="hover:text-primary transition-colors flex items-center gap-2">
                  <img src="/gifs/newred.gif" alt="New" className="w-8 inline" />
                  Total 47 Companies Visited for Campus (Batch 2022-2024)
                </a>
                <span className="flex items-center gap-2">
                  <img src="/gifs/newred.gif" alt="New" className="w-8 inline" />
                  Average CTC - 4 to 4.5 LPA
                </span>
                <span className="flex items-center gap-2">
                  <img src="/gifs/newred.gif" alt="New" className="w-8 inline" />
                  Highest Stipend - 50K / Month
                </span>
                <span className="flex items-center gap-2">
                  <img src="/gifs/newred.gif" alt="New" className="w-8 inline" />
                  Highest CTC - 18 LPA
                </span>
              </div>
            </div>
          </div>

          {/* Top 10 Companies Marquee */}
          <div className="bg-card border border-border rounded-xl shadow-sm overflow-hidden flex items-stretch h-12">
            <div className="bg-primary/90 text-primary-foreground px-4 font-bold flex items-center gap-2 uppercase tracking-wide text-xs shrink-0 select-none">
              <Sparkles className="w-4 h-4 animate-pulse" />
              Top Companies
            </div>
            <div className="flex-grow overflow-hidden flex items-center relative bg-muted/10">
              <div className="animate-marquee whitespace-nowrap flex gap-12 text-sm font-bold text-foreground">
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />Carwala.com - 9 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />Josh Technologies - 8.70 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />Bank of America - 6.45 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />BNP Paribas - 6 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />Princeton Blue - 6.25 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />Zeus Learning - 7.5 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />V2S Technology - 4.20 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />CRM NEXT - 4.5 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />Finovate - 4.5 LPA</span>
                <span><img src="/gifs/new01.gif" alt="dot" className="inline w-4 mr-2" />IDBI Intech - 3.25 to 4.5 LPA</span>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM SECTION: Slideshow (Left) + Notifications Card (Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Custom Slideshow Carousel (Col span 2) */}
          <div className="lg:col-span-2 relative w-full h-[400px] rounded-2xl overflow-hidden shadow-lg border border-border group">
            <img
              src={slides[activeSlide].img}
              alt={slides[activeSlide].title}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 scale-100 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent"></div>
            
            {/* Slide Info Overlay */}
            <div className="absolute bottom-6 left-6 right-6 text-white space-y-2">
              <h3 className="text-2xl font-bold font-serif">{slides[activeSlide].title}</h3>
              <p className="text-sm text-gray-200">{slides[activeSlide].subtitle}</p>
            </div>

            {/* Navigation Arrows */}
            <button 
              onClick={() => setActiveSlide((prev) => (prev - 1 + slides.length) % slides.length)}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button 
              onClick={() => setActiveSlide((prev) => (prev + 1) % slides.length)}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/80 transition-colors opacity-0 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Notifications Card */}
          <div className="bg-card border border-border border-t-4 border-t-primary rounded-2xl shadow-lg flex flex-col h-[400px]">
            <div className="bg-primary text-primary-foreground py-4 px-6 flex items-center justify-between">
              <h3 className="text-lg font-bold uppercase tracking-wide">Notifications</h3>
              <FileText className="w-5 h-5" />
            </div>
            
            <div className="p-4 overflow-y-auto flex-grow custom-scrollbar">
              <div className="space-y-4">
                {[
                  { message: "Provisional Merit List 2025-26", link: "/pdf/Provisnal Marit List 2025-26.pdf", isNew: true },
                  { message: "PhD Computer Application Advertisement 2025-26", link: "/pdf/Ph.D.-Advt.-for-2025-26_BVIMIT (2).pdf", isNew: true },
                  { message: "PhD Application Form 2025-26", link: "/pdf/PhD_Application Form 2025-26.docx", isNew: true },
                  { message: "Anti Ragging Committee Notification", link: "/pdf/Anti Raggin Committee.pdf", isNew: false },
                  { message: "SPOC for NPTEL Local Chapter Details", link: "/pdf/spoc-nptel.pdf", isNew: false },
                  { message: "BVIMIT Signed MOUs List", link: "/pdf/mouup.pdf", isNew: false }
                ].map((note, idx) => (
                  <div key={idx} className="flex gap-3 items-start border-b border-border pb-3 last:border-0 last:pb-0">
                    <img src="/gifs/newred.gif" alt="Red Flag" className={`w-8 shrink-0 ${note.isNew ? "block" : "invisible"}`} />
                    <a 
                      href={note.link} 
                      target="_blank" 
                      rel="noreferrer"
                      className="text-sm font-bold text-foreground hover:text-primary transition-colors leading-snug"
                    >
                      {note.message}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* INSTITUTIONAL DESCRIPTION SECTION */}
        <section className="bg-card border border-border rounded-2xl shadow-sm p-8 text-center space-y-4">
          <h2 className="text-3xl font-serif font-bold text-primary">
            Social Transformation Through Dynamic Education
          </h2>
          <div className="w-20 h-1 bg-secondary mx-auto rounded-full"></div>
          <p className="text-muted-foreground text-justify max-w-5xl mx-auto leading-relaxed text-sm sm:text-base">
            During the last 55 years, Bharati Vidyapeeth has made astonishing strides in the field of education, particularly, higher and professional education. Today Bharati Vidyapeeth conducts more than 156 educational units of various kinds, right from pre-primary schools to postgraduate institutions and a full fledged professional university (BVDU). At Bharati Vidyapeeth, our objective has been to contribute to intellectual awaking and social transformation in different spheres such as education, economic, social &amp; cultural fields in India and more particularly in Maharashtra. Information Technology has invaded our society in a very significant manner. Hence to keep pace with the modern times, the year 2002 marked the establishment of Bharati Vidyapeeth’s Institute of Management &amp; Information Technology. At BVIMIT MCA course, we impart I.T. Management education to meet the demand of the I.T. Industry.
          </p>
        </section>

        {/* Dynamic About Tabs Replicating Legacy Tabs */}
        <div className="pt-8">
          <AboutTabs />
        </div>

      </div>
    </motion.main>
  );
}
