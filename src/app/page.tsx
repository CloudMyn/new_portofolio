'use client'

import { useEffect, useState, useMemo } from 'react'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { 
  Github, 
  ExternalLink, 
  Mail, 
  MapPin, 
  Calendar,
  Code,
  Server,
  Smartphone,
  Palette,
  Database,
  Layers,
  ChevronDown,
  Star,
  Zap,
  Globe,
  Briefcase,
  Languages
} from 'lucide-react'

import portfolio from '@/data/portfolio.json'
import { ProjectSlider } from '@/components/ProjectSlider'
import { ProjectModal } from '@/components/ProjectModal'

const iconMap: Record<string, any> = {
  Github, ExternalLink, Mail, MapPin, Calendar, Code, Server, Smartphone, 
  Palette, Database, Layers, ChevronDown, Star, Zap, Globe, Briefcase, Languages
}

// StarParticle component for background animation
const StarParticle = ({ style }: { style: React.CSSProperties }) => (
  <div className="star" style={style} />
)

// Generate random stars
const generateStars = (count: number) => {
  return Array.from({ length: count }, (_, i) => ({
    id: i,
    style: {
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 3 + 1}px`,
      height: `${Math.random() * 3 + 1}px`,
      '--duration': `${Math.random() * 3 + 2}s`,
      '--opacity': `${Math.random() * 0.5 + 0.3}`,
    } as React.CSSProperties,
  }))
}

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'laravel' | 'react' | 'flutter'>('laravel')
  const [isMounted, setIsMounted] = useState(false)
  const [selectedProject, setSelectedProject] = useState<any>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  
  const { personalInfo, projects, skills, experiences, languages, navigation, techStack } = portfolio as any
  
  const openProjectModal = (project: any) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  // Generate stars once using useMemo
  const stars = useMemo(() => generateStars(150), [])

  useEffect(() => {
    // Set mounted state after initial render for animation
    const timer = setTimeout(() => setIsMounted(true), 100)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen relative overflow-x-hidden">
      {/* Starfield Background */}
      <div className="starfield">
        {stars.map((star) => (
          <StarParticle key={star.id} style={star.style} />
        ))}
      </div>

      {/* Nebula Effects */}
      <div className="nebula nebula-1" />
      <div className="nebula nebula-2" />
      <div className="nebula nebula-3" />

      {/* Shooting Stars */}
      <div className="shooting-star" style={{ top: '10%', left: '80%', animationDelay: '0s' }} />
      <div className="shooting-star" style={{ top: '30%', left: '90%', animationDelay: '2s' }} />
      <div className="shooting-star" style={{ top: '60%', left: '70%', animationDelay: '4s' }} />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 glass py-4 px-6">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-bold gradient-text">
            {personalInfo.initials}
          </div>
          <div className="hidden md:flex gap-8">
            {navigation.map((item: any) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
          <Button
            className="btn-primary rounded-full px-6"
            onClick={() => scrollToSection('contact')}
          >
            Hubungi Saya
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative px-6 pt-20">
        <div className={`text-center max-w-4xl mx-auto ${isMounted ? 'animate-fade-in-up' : 'opacity-0'}`}>
          <div className="mb-6 inline-flex items-center gap-2 px-4 py-2 rounded-full glass">
            <Star className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-gray-300">Tersedia untuk proyek baru</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="text-white">Halo, Saya </span>
            <span className="gradient-text">{personalInfo.name}</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            {personalInfo.role}
          </p>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            {personalInfo.heroDescription}
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              className="btn-primary rounded-full px-8 py-6 text-lg"
              onClick={() => scrollToSection('projects')}
            >
              <Code className="mr-2 h-5 w-5" />
              Lihat Proyek
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-violet-500/30 hover:bg-violet-500/10"
              onClick={() => window.open(personalInfo.github, '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {personalInfo.stats.map((stat: any, i: number) => (
              <div key={i} className="glass-card rounded-xl p-4">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('about')}
            className="mt-16 text-gray-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-3xl font-bold text-white overflow-hidden border border-white/10">
                  {personalInfo.profileImage ? (
                    <img 
                      src={personalInfo.profileImage} 
                      alt={personalInfo.name}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    personalInfo.initials
                  )}
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">{personalInfo.name}</h3>
                  <p className="text-gray-400">{personalInfo.role}</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span>{personalInfo.location}</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-violet-400" />
                  <span>{personalInfo.age} years old</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase className="w-5 h-5 text-violet-400" />
                  <span>{personalInfo.currentStatus}</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-violet-500/20">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  Languages
                </h4>
                <div className="space-y-3">
                  {languages.map((lang: any, i: number) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-gray-300">{lang.name}</span>
                        <span className="text-violet-400">{lang.level}</span>
                      </div>
                      <div className="skill-bar h-2">
                        <div className="skill-progress" style={{ width: `${lang.percentage}%` }} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* About Text */}
            <div className="space-y-6">
              {personalInfo.aboutDescription.map((p: string, i: number) => (
                <p key={i} className="text-gray-300 text-lg leading-relaxed">
                  {p}
                </p>
              ))}
              
              <div className="flex flex-wrap gap-3 pt-4">
                {personalInfo.traits.map((trait: string) => (
                  <Badge key={trait} className="px-4 py-2 bg-violet-500/20 text-violet-300 border border-violet-500/30 rounded-full">
                    <Zap className="w-3 h-3 mr-1" />
                    {trait}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Skills</span>
            </h2>
            <p className="text-gray-400 text-lg">Technologies and tools I have mastered</p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Backend */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-violet-500/20">
                  <Server className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Backend</h3>
              </div>
              <div className="space-y-4">
                {skills.backend.map((skill: any, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-violet-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Frontend */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-cyan-500/20">
                  <Layers className="w-6 h-6 text-cyan-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Frontend</h3>
              </div>
              <div className="space-y-4">
                {skills.frontend.map((skill: any, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Mobile */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-pink-500/20">
                  <Smartphone className="w-6 h-6 text-pink-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Mobile</h3>
              </div>
              <div className="space-y-4">
                {skills.mobile.map((skill: any, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-pink-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Tools */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-lg bg-amber-500/20">
                  <Palette className="w-6 h-6 text-amber-400" />
                </div>
                <h3 className="text-xl font-bold text-white">Tools</h3>
              </div>
              <div className="space-y-4">
                {skills.tools.map((skill: any, i: number) => (
                  <div key={i}>
                    <div className="flex justify-between text-sm mb-1">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-amber-400">{skill.level}%</span>
                    </div>
                    <div className="skill-bar h-2">
                      <div className="skill-progress" style={{ width: `${skill.level}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech Stack Icons */}
          <div className="mt-16 text-center">
            <h3 className="text-xl font-semibold text-gray-300 mb-8">Core Tech Stack</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {techStack.map((tech: any, i: number) => (
                <div
                  key={i}
                  className={`tech-icon px-6 py-3 rounded-xl border ${tech.border} ${tech.bg} cursor-pointer`}
                >
                  <span className={`font-semibold ${tech.color}`}>{tech.name}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Featured Projects</span>
            </h2>
            <p className="text-gray-400 text-lg">A collection of the best projects I've worked on</p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          {/* Category Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: 'laravel', label: 'Laravel', icon: Server, color: 'red' },
              { id: 'react', label: 'React', icon: Layers, color: 'cyan' },
              { id: 'flutter', label: 'Flutter', icon: Smartphone, color: 'blue' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as 'laravel' | 'react' | 'flutter')}
                className={`px-6 py-3 rounded-xl font-semibold transition-all flex items-center gap-2 ${
                  activeTab === tab.id
                    ? `bg-${tab.color}-500/20 border border-${tab.color}-500/50 text-${tab.color}-400`
                    : 'glass-card text-gray-400 hover:text-white'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects[activeTab].map((project: any, i: number) => (
              <div
                key={i}
                onClick={() => openProjectModal(project)}
                className={`project-card glass-card rounded-2xl overflow-hidden flex flex-col group cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                  project.highlight ? 'ring-2 ring-violet-500/50' : ''
                }`}
              >
                {/* Project Image/Slider */}
                <div className="relative h-48 w-full overflow-hidden bg-gray-800/50">
                  <ProjectSlider 
                    images={project.images && project.images.length > 0 ? project.images : (project.image ? [project.image] : [])} 
                    title={project.title}
                    aspectRatio="h-full"
                  />
                  {project.highlight && (
                    <div className="absolute top-4 right-4 bg-violet-500 text-white text-[10px] font-bold px-2 py-1 rounded-full shadow-lg flex items-center gap-1 z-10">
                      <Star className="w-3 h-3 fill-white" /> Featured
                    </div>
                  )}
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-violet-600/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                    <div className="bg-white/10 backdrop-blur-md rounded-full px-4 py-2 text-white text-xs font-medium border border-white/20">
                      View Details
                    </div>
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-white mb-2 group-hover:text-violet-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 mb-4 line-clamp-2 text-sm flex-grow">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech: string, j: number) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="bg-violet-500/5 border-violet-500/20 text-violet-300 text-[10px] px-2"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 mt-auto pt-4 border-t border-white/5">
                    {project.link && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.link, '_blank');
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-violet-400 hover:text-violet-300 transition-colors"
                      >
                        <ExternalLink className="w-4 h-4" />
                        Live Demo
                      </button>
                    )}
                    {project.github && (
                      <button 
                        onClick={(e) => {
                          e.stopPropagation();
                          window.open(project.github, '_blank');
                        }}
                        className="flex items-center gap-2 text-sm font-medium text-gray-400 hover:text-white transition-colors"
                      >
                        <Github className="w-4 h-4" />
                        Source
                      </button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Modal */}
        <ProjectModal 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} 
          project={selectedProject} 
        />
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Work Experience</span>
            </h2>
            <p className="text-gray-400 text-lg">My professional career journey</p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp: any, i: number) => {
                const Icon = iconMap[exp.icon] || Briefcase
                return (
                  <div
                    key={i}
                    className="relative pl-0 md:pl-20"
                  >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center hidden md:flex border border-white/10">
                      <Icon className="w-4 h-4 text-white" />
                    </div>

                    <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-violet-500/30">
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <Badge className="bg-violet-500/20 text-violet-300 border border-violet-500/30">
                          {exp.period}
                        </Badge>
                        <span className="text-gray-500">•</span>
                        <span className="text-cyan-400 font-medium">{exp.company}</span>
                      </div>
                      <h3 className="text-xl font-bold text-white mb-3">{exp.position}</h3>
                      <p className="text-gray-400 leading-relaxed">{exp.description}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Let's Collaborate</span>
            </h2>
            <p className="text-gray-400 text-lg">Interested in working together? Don't hesitate to reach out</p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left space-y-6">
                <h3 className="text-2xl font-bold text-white">Contact Me</h3>
                <p className="text-gray-400">
                  I am always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-3 rounded-lg bg-violet-500/20">
                      <MapPin className="w-5 h-5 text-violet-400" />
                    </div>
                    <span>{personalInfo.location}</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-3 rounded-lg bg-cyan-500/20">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span>{personalInfo.email}</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-violet-500/30 hover:bg-violet-500/10 h-10 w-10"
                    onClick={() => window.open(personalInfo.github, '_blank')}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10 h-10 w-10"
                    onClick={() => window.open(personalInfo.website, '_blank')}
                  >
                    <Globe className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                <Button
                  className="btn-primary rounded-full px-8 py-6 text-lg w-full max-w-xs transition-transform hover:scale-105"
                  onClick={() => window.open(`mailto:${personalInfo.email}`, '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </Button>
                <p className="text-gray-500 text-sm">
                  Or reach out directly via email
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 border-t border-violet-500/10">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-gray-500">
            © 2025 <span className="text-violet-400">{personalInfo.name}</span>. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-500">
            <span>Crafted with</span>
            <Star className="w-4 h-4 text-violet-400 fill-violet-400" />
            <span>under the stars</span>
          </div>
        </div>
      </footer>
    </div>
  )
}
