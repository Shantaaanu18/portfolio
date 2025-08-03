"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Github, Linkedin, Mail, Moon, Home, ExternalLink, Twitter, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { SunIcon } from "@radix-ui/react-icons";
import './globals.css';

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
          <CertificatesSection />
          <ContactSection />
        </div>
        <SocialLinks />
      </div>
    </div>
  );
}

function HeroSection() {
  return (
    <section className="py-1 text-center">
      <div className="flex flex-col lg:flex-row items-center justify-center gap-12 max-w-6xl mx-auto">
        <div className="flex-1 space-y-6 text-center lg:text-left">
          <h1 className=" text-foreground text-6xl lg:text-7xl font-bold leading-tight ">Hi, I'm Shantanu</h1>
          <p className="text-xl lg:text-2xl text-foreground leading-relaxed max-w-2xl mx-auto lg:mx-0">
            DevOps Engineer | Front-End Developer (react.js & TypeScript) | Passionate About CI/CD, Cloud, & Scalable Web Systems.
          </p>
          <a
  href="https://drive.google.com/file/d/1sBcEWsulH2SthBtq46R2DzzLqHLoLxDs/view?usp=drive_link" 
  rel="noopener noreferrer"
>
  <Button
    size="lg"
    className="bg-foreground text-background hover:bg-foreground/90 px-8 py-3"
  >
    Resume
  </Button>
</a>
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
      <h2 className="text-3xl font-bold mb-2 text-left text-foreground">About</h2>
      <p className="text-lg text-foreground leading-relaxed max-w-4xl text-left">
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
      logo: "/SkillZam.png"
    }
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4 text-left text-foreground">Work Experience</h2>
      <div className="flex flex-col gap-4">
        {experiences.map((exp, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img src={exp.logo} alt={exp.company} className="w-12 h-12 rounded-full bg-white p-2 border" />
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <span className="font-bold text-lg truncate text-foreground">{exp.company}</span>
                <span className="text-sm bg-muted px-2 py-0.5 rounded-full font-medium">{exp.type}</span>
              </div>
              <div className="text-base text-foreground leading-tight">{exp.role}</div>
            </div>
            <div className="text-base text-foreground whitespace-nowrap ml-4">{exp.duration}</div>
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
      logo: "/BEC.png"
    },
    
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4 text-left text-foreground">Education</h2>
      <div className="flex flex-col gap-4">
        {education.map((edu, idx) => (
          <div key={idx} className="flex items-center gap-4">
            <img src={edu.logo} alt={edu.institution} className="w-12 h-12 rounded-full bg-white p-2 border" />
            <div className="flex-1 min-w-0">
              <span className="font-bold text-lg truncate block text-foreground">{edu.institution}</span>
              <span className="text-base text-foreground block leading-tight">{edu.degree}</span>
            </div>
            <div className="text-base text-foreground whitespace-nowrap ml-4">{edu.duration}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

function SkillsSection() {
  const skills = [
    "C", "C++", "JavaScript", "TypeScript", "React", "Next.js", "CI/CD Pipelines",
    "Node.js", "Express", "MongoDB", "Azure", "Prisma", "Tailwind CSS",
    "Docker", "Redis", "GitHub", "GitHub Actions"
  ];

  return (
    <section className="py-8">
      <h2 className="text-3xl font-bold mb-4 text-left text-foreground">Skills</h2>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, idx) => (
          <span key={idx} className="bg-white text-black rounded-full px-3 py-1 text-base font-medium border">
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
      title: "Aartistly.com",
      year: "2025",
      description: "Built a platform to instantly book top artists for your event",
      image: "/deployit.png",
      video: "/video/aartistly.mp4" 
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
              {project.video ? (
                <video
                  src={project.video}
                  controls
                  className="w-full h-full object-cover"
                  preload="metadata"
                />
              ) : (
                <div className="text-muted-foreground text-sm">No Preview Available</div>
              )}
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


function CertificatesSection() {
  const certificates = [
    {
      title: "The Complete 2023 Web-Development Bootcamp",
      year: "2023",
      type: "Online",
      description: "The Complete 2023 Web Development Bootcamp is a comprehensive beginner-to-advanced course that teaches full-stack web development through hands-on projects.",
      logo: "/udemy.png"
    },
    {
      title: "NPTEL Online Cloud Computing Certification",
      year: "2024",
      type: "Online",
      description: "A certified NPTEL course covering cloud fundamentals, virtualization, service models, and deployment with hands-on concepts and IIT-level instruction.",
      logo: "/nptel.png"
    }
  ];

  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <Button variant="outline" size="sm" className="mb-6 rounded-full">
          Certificates
        </Button>
        <h2 className="text-5xl font-bold mb-6 text-foreground">Sharpening my problem-solving skills</h2>
        <p className="text-foreground max-w-4xl mx-auto text-xl leading-relaxed">
        Passionate about Web Development and DevOps, I’ve completed structured programs that strengthened my skills in building scalable web applications and deploying them efficiently. These certifications reflect my commitment to mastering modern development workflows, automation, and real-world deployment strategies through consistent practice and hands-on projects.
        </p>
      </div>
      <div className="relative">
        <div className="absolute left-7 top-10 bottom-2 w-0.5 bg-white/10"></div>
        <div className="space-y-6">
          {certificates.map((cert, index) => (
            <div key={index} className="flex items-start gap-6 pb-6">
              <div className="relative z-10">
                <Avatar className="w-16 h-16 border-2 border-border/30">
                <Avatar className="w-16 h-16 border-2 border-border/30">
  <AvatarImage src={cert.logo} alt={cert.title} />
</Avatar>
                </Avatar>
              </div>
                          <div className="flex-1 space-y-3">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-2xl text-foreground">{cert.title}</h3>
                  <p className="text-foreground">{cert.type}</p>
                </div>
                <span className="text-base text-foreground bg-muted/50 px-3 py-1 rounded-full">
                  {cert.year}
                </span>
              </div>
                      <p className="text-foreground leading-relaxed text-lg">{cert.description}</p>
            </div>
            </div>
          ))}
        </div>
        <div className="absolute left-7.5 top-35 w-225 h-0.5 bg-white/10"></div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section className="py-20">
      <div className="text-center mb-12">
        <Button variant="outline" size="sm" className="mb-6 rounded-full">
          Contact
        </Button>
        <h2 className="text-5xl font-bold mb-6 text-foreground">Get in Touch</h2>
        <p className="text-foreground max-w-3xl mx-auto text-xl">
          Want to chat? Just shoot me a dm with a direct question on <a href="https://x.com/Shantaaaanu" className="text-blue-500 underline">twitter</a> and I'll respond whenever I can. I will ignore all soliciting.
        </p>
      </div>
    </section>
  );
}

function SocialLinks() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const socialLinks = [
    { icon: Home, label: "Home", href: "#" },
    { icon: Github, label: "GitHub", href: "https://github.com/Shantaaanu18" },
    { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/shantanu-kulkarni-393595226/" },
    { icon: Twitter, label: "Twitter", href: "https://x.com/Shantaaaanu" },
    { icon: Mail, label: "Email", href: "mailto:shantanusk2002@gmail.com" },
  ];

  return (
    <TooltipProvider>
      <div className="fixed bottom-8 left-1/2 transform -translate-x-1/2 z-50">
        <div className="flex items-center gap-4 bg-card/90 backdrop-blur-md border border-border/50 rounded-full px-8 py-4 shadow-lg transition-all duration-300 hover:scale-110 group hover:shadow-[0_0_20px_2px_rgba(255,255,255,0.2)]">
          {socialLinks.map((link, index) => (
            <Tooltip key={index}>
              <TooltipTrigger asChild>
                <a href={link.href} target="_blank" rel="noopener noreferrer">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-muted transition-all duration-300 hover:scale-125 group-hover:scale-110"
                  >
                    <link.icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  </Button>
                </a>
              </TooltipTrigger>
              <TooltipContent>
                <p>{link.label}</p>
              </TooltipContent>
            </Tooltip>
          ))}
          <Separator orientation="vertical" className="h-6" />
          {mounted && (
            <Tooltip>
              <TooltipTrigger asChild>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
                  className="h-10 w-10 p-0 hover:bg-muted transition-all duration-300 hover:scale-125 group-hover:scale-110"
                >
                  {resolvedTheme === "dark" ? (
                    <Sun className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  ) : (
                    <Moon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                  )}
                </Button>
              </TooltipTrigger>
              <TooltipContent>
                <p>Toggle Theme</p>
              </TooltipContent>
            </Tooltip>
          )}
        </div>
      </div>
    </TooltipProvider>
  );
}

