import { motion } from "framer-motion";
import { CheckCircle2, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export default function LeftColumn() {
  return (
    <div className="space-y-6">
      {/* Vision & Mission */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-t-4 border-t-primary shadow-md">
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle className="flex items-center text-primary font-bold text-lg">
              <CheckCircle2 className="w-5 h-5 mr-2" /> Vision
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-sm font-medium text-muted-foreground text-center italic">
            "Social transformation through Dynamic Education"
          </CardContent>
        </Card>
        <Card className="border-t-4 border-t-primary shadow-md">
          <CardHeader className="bg-primary/5 pb-4">
            <CardTitle className="flex items-center text-primary font-bold text-lg">
              <CheckCircle2 className="w-5 h-5 mr-2" /> Mission
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-4 text-sm font-medium text-muted-foreground space-y-2">
            <ul className="space-y-2">
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" /> To prepare students for successful careers in IT.</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" /> To develop professionalism and ethical values.</li>
              <li className="flex items-start"><CheckCircle2 className="w-4 h-4 text-primary mr-2 mt-0.5 shrink-0" /> To create an environment for holistic development.</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      {/* Marquees */}
      <div className="space-y-2">
        <div className="flex bg-card border rounded-full overflow-hidden shadow-sm">
          <div className="bg-[#1e3a8a] text-white px-4 py-2 font-bold text-sm whitespace-nowrap z-10 flex items-center">
            MCA LATEST <span className="ml-2">👉</span>
          </div>
          <div className="overflow-hidden flex-1 flex items-center bg-blue-50/50">
            <motion.div 
              animate={{ x: [ "100%", "-100%" ] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="whitespace-nowrap w-full"
            >
              <span className="text-sm font-medium text-[#1e3a8a]">
                First Year MCA Admission 2024-25 | AICTE Approval Letters
              </span>
            </motion.div>
          </div>
        </div>
        <div className="flex bg-card border rounded-full overflow-hidden shadow-sm">
          <div className="bg-[#1e3a8a] text-white px-4 py-2 font-bold text-sm whitespace-nowrap z-10 flex items-center">
            Placement Latest <span className="ml-2">👉</span>
          </div>
          <div className="overflow-hidden flex-1 flex items-center bg-blue-50/50">
            <motion.div 
              animate={{ x: [ "100%", "-100%" ] }}
              transition={{ repeat: Infinity, duration: 15, ease: "linear" }}
              className="whitespace-nowrap w-full"
            >
              <span className="text-sm font-medium text-orange-600">
                Total 47 Companies Visited for Campus for Batch (2022-2024) | Average CTC 4.5 LPA
              </span>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Hero Image Block */}
      <div className="rounded-2xl overflow-hidden relative shadow-lg group">
        <img 
          src="https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b" 
          alt="Industrial Visit" 
          className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-black/50 flex items-end">
          <div className="p-6 text-white w-full text-center">
            <h3 className="text-3xl font-black mb-1 drop-shadow-md">Industrial Visit 2025</h3>
            <p className="font-medium text-white/90">IOS Innotech Chandigarh</p>
          </div>
        </div>
      </div>

      {/* About Section */}
      <Card className="shadow-md border-border/50">
        <CardContent className="p-6 text-center">
          <h3 className="text-xl font-bold text-foreground mb-4">
            Bharati Vidyapeeth is an institution planted in the year 1964 by our founder<br />
            <span className="text-2xl mt-1 block">Dr. Patangrao Kadam</span>
          </h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            During the last 59 years, Bharati Vidyapeeth has made astonishing strides in the field of education. Today, it has over 156 educational units of various kinds, from pre-primary to post-graduate institutions and a full fledged professional university. Our objective has been to contribute to intellectual awaking and social transformation.
          </p>
        </CardContent>
      </Card>

      {/* Tabs Section */}
      <Tabs defaultValue="director" className="w-full">
        <TabsList className="w-full flex flex-wrap h-auto bg-primary/5 p-1 rounded-xl">
          <TabsTrigger value="director" className="flex-1 text-xs md:text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">Institute Director</TabsTrigger>
          <TabsTrigger value="history" className="flex-1 text-xs md:text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">History</TabsTrigger>
          <TabsTrigger value="philosophy" className="flex-1 text-xs md:text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">Philosophy</TabsTrigger>
          <TabsTrigger value="student" className="flex-1 text-xs md:text-sm py-2 data-[state=active]:bg-white data-[state=active]:text-primary data-[state=active]:shadow-sm rounded-lg">Student Council</TabsTrigger>
        </TabsList>
        <TabsContent value="director" className="mt-4 outline-none">
          <Card className="border-border/50 shadow-sm overflow-hidden">
            <div className="flex flex-col md:flex-row">
              <div className="w-full md:w-1/3 bg-muted">
                <img src="https://harmless-tapir-303.convex.cloud/api/storage/9a35e636-a4eb-419e-ba2b-edb716eef88b" alt="Founder" className="w-full h-full object-cover min-h-[250px]" />
              </div>
              <div className="w-full md:w-2/3 p-6 space-y-4">
                <div>
                  <h4 className="text-xl font-bold text-foreground">Dr. Patangrao Kadam</h4>
                  <p className="text-sm text-primary font-semibold">Founder, Bharati Vidyapeeth</p>
                </div>
                <p className="text-sm text-muted-foreground italic leading-relaxed border-l-2 border-primary/30 pl-4">
                  "I am indeed happy to welcome you to MCA. Bharati Vidyapeeth's Institute of Management & Information Technology, Navi Mumbai. We aim to form youth with creative abilities to face the corporate world."
                </p>
                <div className="flex justify-end">
                  <a href="#" className="text-xs font-bold text-primary hover:underline flex items-center">Read More <ChevronRight className="w-3 h-3 ml-1" /></a>
                </div>
              </div>
            </div>
          </Card>
        </TabsContent>
        {/* Placeholder for other tabs */}
        <TabsContent value="history" className="p-4 text-sm text-muted-foreground text-center">History Content</TabsContent>
        <TabsContent value="philosophy" className="p-4 text-sm text-muted-foreground text-center">Philosophy Content</TabsContent>
        <TabsContent value="student" className="p-4 text-sm text-muted-foreground text-center">Student Council Content</TabsContent>
      </Tabs>

      {/* Placements Tables */}
      <Card className="border-t-4 border-t-[#1e3a8a] shadow-md overflow-hidden">
        <div className="bg-[#1e3a8a] py-3 text-center">
          <h3 className="text-white font-bold text-lg">Placements</h3>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-border">
          <div className="p-0">
            <div className="bg-muted/30 py-2 text-center text-sm font-bold text-primary">Batch 2024</div>
            <div className="p-4 space-y-4">
              {[
                { name: "Ankita Vilas Pawar", company: "TCS", package: "4.6 LPA" },
                { name: "Swaraj Ganesh Sanap", company: "TCS", package: "4.6 LPA" },
                { name: "Mohammed Saad", company: "Capgemini", package: "4.0 LPA" },
              ].map((student, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold">{student.name}</p>
                    <p className="text-xs text-muted-foreground">{student.company}</p>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">{student.package}</Badge>
                </div>
              ))}
            </div>
          </div>
          <div className="p-0">
            <div className="bg-muted/30 py-2 text-center text-sm font-bold text-primary">Batch 2023</div>
            <div className="p-4 space-y-4">
              {[
                { name: "Shraddha Hajare", company: "BNP Paribas", package: "6 LPA" },
                { name: "Anjali Amarjeet", company: "BNP Paribas", package: "6 LPA" },
                { name: "Deepali Dashrath", company: "BNP Paribas", package: "6 LPA" },
              ].map((student, i) => (
                <div key={i} className="flex justify-between items-center text-sm border-b pb-2 last:border-0 last:pb-0">
                  <div>
                    <p className="font-semibold">{student.name}</p>
                    <p className="text-xs text-muted-foreground">{student.company}</p>
                  </div>
                  <Badge variant="outline" className="text-primary border-primary/20 bg-primary/5">{student.package}</Badge>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Congratulations Section */}
      <div className="space-y-4">
        <div className="flex items-center justify-center">
          <div className="h-px bg-border flex-1"></div>
          <span className="px-4 text-sm font-bold text-primary flex items-center"><span className="text-[#1e3a8a] mr-2">⭐</span> Congratulations! <span className="text-[#1e3a8a] ml-2">⭐</span></span>
          <div className="h-px bg-border flex-1"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {[
            { name: "AYYAKAR SWASTHA", rank: "Second Rank" },
            { name: "NADGE BHAKTI", rank: "Third Rank" },
            { name: "Sejal Johar", rank: "First Rank" },
            { name: "Tejaswini M", rank: "Second Rank" },
            { name: "Harshal Patil", rank: "Third Rank" },
          ].map((student, i) => (
            <Card key={i} className="overflow-hidden shadow-sm text-center bg-card">
              <div className="aspect-square bg-muted">
                <img src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${student.name}`} alt={student.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-2">
                <p className="text-xs font-bold truncate">{student.name}</p>
                <p className="text-[10px] text-primary">{student.rank}</p>
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Placement Partners */}
      <div className="space-y-4 pt-4">
         <div className="flex items-center justify-center">
          <div className="h-px bg-border flex-1"></div>
          <span className="px-4 text-sm font-bold text-primary flex items-center"><span className="text-[#1e3a8a] mr-2">⭐</span> Our Placement Partners <span className="text-[#1e3a8a] ml-2">⭐</span></span>
          <div className="h-px bg-border flex-1"></div>
        </div>
        <div className="flex flex-wrap justify-center gap-4">
           {/* Logos placeholders */}
           <img src="https://harmless-tapir-303.convex.cloud/api/storage/8355377a-f356-4a02-83dd-1cb6b4038f23" alt="Partner" className="h-10 object-contain" />
           <img src="https://harmless-tapir-303.convex.cloud/api/storage/635b8350-7422-44d6-9d35-5fb8fb02cafd" alt="Partner" className="h-10 object-contain" />
           <img src="https://harmless-tapir-303.convex.cloud/api/storage/34c864a0-d4be-4831-afa6-a9726103811b" alt="Partner" className="h-10 object-contain" />
           <img src="https://harmless-tapir-303.convex.cloud/api/storage/3dfd0b6f-c953-4deb-b03e-34bccc342831" alt="Partner" className="h-10 object-contain" />
        </div>
      </div>

    </div>
  );
}
