import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, Moon, Home, ExternalLink } from "lucide-react";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <div className="container mx-auto px-6 py-12 max-w-5xl">
        <div className="pl-8 lg:pl-16">
          <HeroSection />
          <AboutSection />
          <WorkExperienceSection />
          <EducationSection />
          <SkillsSection />
          <ProjectsSection />
          <HackathonsSection />
          <CertificatesSection />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-24 text-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className="text-5xl lg:text-6xl font-bold leading-tight text-foreground">
            Hi, I'm Shantanu 
          </h1>
          <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            DevOps Engineer | Front-End Developer (react.js & TypeScript) | Passionate About CI/CD, Cloud, & Scalable Web Systems
          </p>
          <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3">
            Resume
          </Button>
        </div>
        <div className="flex-1 flex justify-center">
          <Avatar className="w-48 h-48 lg:w-56 lg:h-56 border-4 border-border/20 shadow-2xl">
            <AvatarImage src="/profile.jpg" alt="Shantanu" />
            <AvatarFallback className="text-4xl lg:text-6xl bg-muted">S</AvatarFallback>
          </Avatar>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-2 text-left">About</h2>
      <p className="text-base text-muted-foreground leading-relaxed max-w-4xl text-left">
        I'm a DevOps engineer with a front-end twist I build with Next.js and TypeScript, and I'm passionate about automation, cloud, and scalable systems. I've solved multiple DSA problems, which helps me think through complex issues logically and efficiently. Whether it's setting up CI/CD pipelines or building modern web apps, I love bridging development and operations to deliver clean, reliable solutions.
      </p>
    </section>
  );
}

function WorkExperienceSection() {
  const experiences = [
    {
      company: "SkillZam",
      role: "Front-End Developer",
      type: "Intern",
      duration: "Feb 2024 - May 2024",
      logo: "/file.svg"
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-left">Work Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full bg-white p-2 border" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-base truncate">{exp.company}</span>
                <span className="text-xs bg-muted px-2 py-0.5 rounded-full font-medium">{exp.type}</span>
              </div>
              <div className="text-sm text-muted-foreground leading-tight">{exp.role}</div>
            </div>
            <div className="text-sm text-muted-foreground whitespace-nowrap ml-4">{exp.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function EducationSection() {
  const education = [
    {
      institution: "Basaveshwar Engineering College",
      degree: "Bachelor of Engineering in Information Science",
      duration: "2020 - 2024",
      logo: "/globe.svg"
    },
    
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-left">Education</h2>
      <div className="flex flex-col gap-4">
        {education.map((edu, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img src={edu.logo} alt={edu.institution} className="w-12 h-12 rounded-full bg-white p-2 border" />
            <div className="flex-1 min-w-0">
              <span className="font-bold text-base truncate block">{edu.institution}</span>
              <span className="text-sm text-muted-foreground block leading-tight">{edu.degree}</span>
            </div>
            <div className="text-sm text-muted-foreground whitespace-nowrap ml-4">{edu.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    "C", "C++", "JavaScript", "TypeScript", "React", "Next.js", "Redux",
    "Node.js", "Express", "MongoDB", "PostgreSQL", "Prisma", "Tailwind CSS",
    "Docker", "Redis"
  ];

  return (
    <section className="py-8">
      <h2 className="text-2xl font-bold mb-4 text-left">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-muted text-foreground rounded-full px-3 py-1 text-sm font-medium border">
            {skill}
          </span>
        ))}
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Deployit",
      year: "2025",
      description: "Built a platform to deploy static websites with ease",
      image: "/deployit.png"
    },
    {
      title: "Instant Messaging App",
      year: "2024",
      description: "Real-time messaging application with instant notifications",
      image: "/messaging.png"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <Button variant="outline" size="sm" className="mb-6">
          My Projects
        </Button>
        <h2 className="text-4xl font-bold mb-6">Check out my latest work</h2>
        <p className="text-muted-foreground max-w-3xl mx-auto text-lg">
          I've worked on a variety of projects, from simple websites to complex web applications. Here are a few of my favorites.
        </p>
      </div>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <Card key={index} className="overflow-hidden border-border/30 bg-card/50">
            <div className="aspect-video bg-muted/50 flex items-center justify-center">
              <div className="text-muted-foreground text-sm">Project Preview</div>
            </div>
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <span className="text-sm text-muted-foreground">{project.year}</span>
              </div>
              <p className="text-sm text-muted-foreground">{project.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function HackathonsSection() {
  const hackathons = [
    {
      title: "CodeZen Hackathon 2025",
      location: "Online",
      year: "2025",
      description: "Top 7 out of 50+ teams - Built an AI-powered Ayurvedic health assistant platform.",
      logo: "CZ"
    },
    {
      title: "NSUT Avinya'25 (ShlokaDecode)",
      location: "Delhi, India",
      year: "2025",
      description: "Top 7 out of 30+ teams - Developed an interactive web app for the Hindi society.",
      logo: "NS"
    },
    {
      title: "TCS CodeVita Season 12",
      location: "Global",
      year: "2024",
      description: "Secured Global Rank 1341 out of thousands of global participants.",
      logo: "TC"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <Button variant="outline" size="sm" className="mb-6 rounded-full">
          Hackathons
        </Button>
        <h2 className="text-4xl font-bold mb-6">I like <span className="text-primary">building</span> things.</h2>
        <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
          As a university student, I've participated in hackathons where passionate developers from across the country come together to build innovative products in just a few days. These events have shown me the power of collaboration, creativity, and fast-paced problem-solving.
        </p>
      </div>
      <div className="space-y-6">
        {hackathons.map((hackathon, index) => (
          <Card key={index} className="border-border/30 bg-card/50 hover:bg-card/70 transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Avatar className="w-16 h-16 border-2 border-border/30">
                  <AvatarFallback className="bg-primary text-primary-foreground text-lg font-semibold">
                    {hackathon.logo}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-xl">{hackathon.title}</h3>
                      <p className="text-muted-foreground">{hackathon.location}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      {hackathon.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{hackathon.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function CertificatesSection() {
  const certificates = [
    {
      title: "CodeHelp DSA Master Course",
      year: "2023",
      type: "Online",
      description: "Completed Love Babbar's Supreme 2.0 course — covered all major DSA topics with hands-on problem solving.",
      logo: "CH"
    },
    {
      title: "GfG 160 Days DSA Program",
      year: "2023",
      type: "Online",
      description: "Followed GeeksforGeeks' structured 160-day roadmap — practiced problems across arrays, trees, graphs, and DP.",
      logo: "GF"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <Button variant="outline" size="sm" className="mb-6 rounded-full">
          Certificates
        </Button>
        <h2 className="text-4xl font-bold mb-6">Sharpening my problem-solving skills</h2>
        <p className="text-muted-foreground max-w-4xl mx-auto text-lg leading-relaxed">
          As a college student passionate about Data Structures and Algorithms, I've completed structured DSA programs to build a strong foundation in problem-solving and system design. These certifications reflect my commitment to mastering core CS fundamentals through consistent practice and real-world challenges.
        </p>
      </div>
      <div className="space-y-6">
        {certificates.map((cert, index) => (
          <Card key={index} className="border-border/30 bg-card/50 hover:bg-card/70 transition-colors duration-300">
            <CardContent className="p-8">
              <div className="flex items-start gap-6">
                <Avatar className="w-16 h-16 border-2 border-border/30">
                  <AvatarFallback className="bg-secondary text-secondary-foreground text-lg font-semibold">
                    {cert.logo}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1 space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-xl">{cert.title}</h3>
                      <p className="text-muted-foreground">{cert.type}</p>
                    </div>
                    <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{cert.description}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}

function SocialLinks() {
  const socialLinks = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: ExternalLink, label: "Twitter", href: "https://twitter.com" },
    { icon: Mail, label: "Email", href: "mailto:contact@example.com" },
  ];

  return (
    <TooltipProvider>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-card/90 backdrop-blur-md border border-border/50 rounded-full px-8 py-4 shadow-lg transition-all duration-300 hover:scale-110 hover:shadow-xl group">
          {socialLinks.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <Button 
                  variant="ghost" 
                  size="sm" 
                  className="h-10 w-10 p-0 hover:bg-muted transition-all duration-300 hover:scale-125 group-hover:scale-110"
                >
                  <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <Separator orientation="vertical" className="h-6" />
          <Tooltip>
            <TooltipTrigger asChild>
              <Button 
                variant="ghost" 
                size="sm" 
                className="h-10 w-10 p-0 hover:bg-muted transition-all duration-300 hover:scale-125 group-hover:scale-110"
              >
                <Moon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Toggle Theme</p>
            </TooltipContent>
          </Tooltip>
        </div>
      </div>
    </TooltipProvider>
  );
}
