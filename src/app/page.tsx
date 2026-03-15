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

// Project data
const projects = {
  laravel: [
    {
      title: "Bali Trip Center",
      description: "Sistem booking hotel terintegrasi dengan manajemen reservasi, pembayaran, dan laporan real-time untuk industri hospitality.",
      tech: ["Laravel", "MySQL", "Livewire", "Tailwind CSS"],
      link: "https://balitripcenter.com",
      github: null,
      highlight: true
    },
    {
      title: "Sistem Manajemen Inventory",
      description: "Aplikasi manajemen stok dan inventaris dengan fitur tracking, laporan, dan notifikasi otomatis.",
      tech: ["Laravel", "Filament", "MySQL"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: false
    },
    {
      title: "E-Commerce Platform",
      description: "Platform e-commerce lengkap dengan sistem keranjang, checkout, pembayaran, dan dashboard admin.",
      tech: ["Laravel", "Vue.js", "Stripe API"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: false
    }
  ],
  react: [
    {
      title: "Dashboard Analytics",
      description: "Dashboard interaktif dengan visualisasi data real-time, chart dinamis, dan sistem monitoring performa.",
      tech: ["React", "Next.js", "Chart.js", "Tailwind CSS"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: true
    },
    {
      title: "Portfolio Website",
      description: "Website portfolio modern dengan animasi smooth, dark theme, dan optimasi performa maksimal.",
      tech: ["Next.js", "Framer Motion", "Tailwind CSS"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: false
    },
    {
      title: "Task Management App",
      description: "Aplikasi manajemen tugas dengan fitur drag-drop, kolaborasi tim, dan sinkronisasi real-time.",
      tech: ["React", "Redux", "Firebase"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: false
    }
  ],
  flutter: [
    {
      title: "Mobile Commerce App",
      description: "Aplikasi mobile e-commerce dengan UI modern, integrasi payment gateway, dan push notification.",
      tech: ["Flutter", "Dart", "Firebase", "Provider"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: true
    },
    {
      title: "Health Tracking App",
      description: "Aplikasi pelacakan kesehatan dengan fitur monitoring, grafik progress, dan reminder harian.",
      tech: ["Flutter", "SQLite", "FL Chart"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: false
    },
    {
      title: "Booking App",
      description: "Aplikasi booking service dengan kalender interaktif, notifikasi, dan manajemen jadwal.",
      tech: ["Flutter", "Dart", "REST API"],
      link: null,
      github: "https://github.com/abdinatsir",
      highlight: false
    }
  ]
}

// Skills data
const skills = {
  backend: [
    { name: "PHP / Laravel", level: 95, icon: Server },
    { name: "CodeIgniter", level: 85, icon: Server },
    { name: "MySQL / PostgreSQL", level: 90, icon: Database },
    { name: "REST API Design", level: 90, icon: Code },
  ],
  frontend: [
    { name: "JavaScript / TypeScript", level: 88, icon: Code },
    { name: "React / Next.js", level: 85, icon: Layers },
    { name: "Tailwind CSS", level: 92, icon: Palette },
    { name: "HTML5 / CSS3", level: 95, icon: Globe },
  ],
  mobile: [
    { name: "Flutter / Dart", level: 82, icon: Smartphone },
    { name: "Mobile UI/UX", level: 80, icon: Palette },
  ],
  tools: [
    { name: "Git / GitHub", level: 90, icon: Code },
    { name: "Blender 3D", level: 70, icon: Palette },
    { name: "Photoshop", level: 75, icon: Palette },
    { name: "Excel / Data Management", level: 95, icon: Database },
  ]
}

// Work experience
const experiences = [
  {
    period: "Jan 2024 – Mei 2025",
    position: "Freelancer Fullstack Web",
    company: "Sulapa4Studio",
    description: "Project manager untuk berbagai proyek pengembangan web. Bertanggung jawab dalam koordinasi tim, perencanaan arsitektur sistem, dan implementasi solusi teknis untuk klien.",
    icon: Briefcase
  },
  {
    period: "Des 2024 – Mar 2025",
    position: "Freelancer Fullstack Web",
    company: "Entercode",
    description: "Backend developer untuk aplikasi hotel balitripcenter.com. Mengembangkan sistem booking, manajemen kamar, dan integrasi payment gateway.",
    icon: Server
  },
  {
    period: "Jan 2023 – Okt 2024",
    position: "Clerk Administration",
    company: "PT Indomarco Prismatama",
    description: "Staf administrasi Indomaret DC Manado. Mengelola data inventaris, dokumen arsip, dan koordinasi logistik dengan sistem ERP perusahaan.",
    icon: Database
  }
]

// Language skills
const languages = [
  { name: "Indonesia", level: "Native", percentage: 100 },
  { name: "English", level: "Intermediate", percentage: 75 },
]

export default function Portfolio() {
  const [activeTab, setActiveTab] = useState<'laravel' | 'react' | 'flutter'>('laravel')
  const [isMounted, setIsMounted] = useState(false)
  
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
            AN
          </div>
          <div className="hidden md:flex gap-8">
            {['Tentang', 'Keahlian', 'Proyek', 'Pengalaman', 'Kontak'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className="text-gray-300 hover:text-white transition-colors relative group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-violet-500 to-cyan-500 transition-all group-hover:w-full" />
              </button>
            ))}
          </div>
          <Button
            className="btn-primary rounded-full px-6"
            onClick={() => scrollToSection('kontak')}
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
            <span className="gradient-text">Abdi Natsir</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4">
            Fullstack Web Developer
          </p>
          
          <p className="text-gray-400 mb-8 max-w-2xl mx-auto text-lg leading-relaxed">
            Profesional adaptif yang menggabungkan keahlian administratif dengan kompetensi pengembangan web. 
            Fokus pada ekosistem Laravel, React, dan Flutter untuk menciptakan solusi digital yang modern dan responsif.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <Button
              className="btn-primary rounded-full px-8 py-6 text-lg"
              onClick={() => scrollToSection('proyek')}
            >
              <Code className="mr-2 h-5 w-5" />
              Lihat Proyek
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-8 py-6 text-lg border-violet-500/30 hover:bg-violet-500/10"
              onClick={() => window.open('https://github.com/abdinatsir', '_blank')}
            >
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>

          {/* Quick Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
            {[
              { value: '3+', label: 'Tahun Pengalaman' },
              { value: '20+', label: 'Proyek Selesai' },
              { value: '15+', label: 'Klien Puas' },
              { value: '5', label: 'Teknologi Utama' },
            ].map((stat, i) => (
              <div key={i} className="glass-card rounded-xl p-4">
                <div className="text-3xl font-bold gradient-text">{stat.value}</div>
                <div className="text-sm text-gray-400">{stat.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scrollToSection('tentang')}
            className="mt-16 text-gray-400 hover:text-white transition-colors animate-bounce"
          >
            <ChevronDown className="w-8 h-8 mx-auto" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="tentang" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Tentang Saya</span>
            </h2>
            <div className="section-divider max-w-xs mx-auto" />
          </div>

          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Profile Card */}
            <div className="glass-card rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-3xl font-bold text-white">
                  AN
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Abdi Natsir</h3>
                  <p className="text-gray-400">Fullstack Web Developer</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-violet-400" />
                  <span>Makassar, Indonesia</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Calendar className="w-5 h-5 text-violet-400" />
                  <span>25 tahun</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Briefcase className="w-5 h-5 text-violet-400" />
                  <span>Freelance Fullstack Developer</span>
                </div>
              </div>

              <div className="mt-6 pt-6 border-t border-violet-500/20">
                <h4 className="text-sm font-semibold text-gray-400 mb-3 flex items-center gap-2">
                  <Languages className="w-4 h-4" />
                  Bahasa
                </h4>
                <div className="space-y-3">
                  {languages.map((lang, i) => (
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
              <p className="text-gray-300 text-lg leading-relaxed">
                Sebagai seorang profesional yang adaptif, saya menggabungkan keahlian administratif 
                dengan kompetensi tinggi dalam pengembangan web. Dengan pengalaman sebagai Clerk 
                dan Web Developer, saya memiliki pemahaman mendalam tentang manajemen data dan 
                arsitektur sistem.
              </p>
              <p className="text-gray-300 text-lg leading-relaxed">
                Fokus utama saya adalah ekosistem <span className="text-violet-400 font-semibold">Laravel</span> untuk 
                backend development, <span className="text-cyan-400 font-semibold">React/Next.js</span> untuk 
                frontend modern, dan <span className="text-pink-400 font-semibold">Flutter</span> untuk 
                pengembangan aplikasi mobile cross-platform.
              </p>
              
              <div className="flex flex-wrap gap-3 pt-4">
                {['Problem Solver', 'Detail-Oriented', 'Fast Learner', 'Team Player'].map((trait) => (
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
      <section id="keahlian" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Keahlian</span>
            </h2>
            <p className="text-gray-400 text-lg">Teknologi dan tools yang saya kuasai</p>
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
                {skills.backend.map((skill, i) => (
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
                {skills.frontend.map((skill, i) => (
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
                {skills.mobile.map((skill, i) => (
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
                {skills.tools.map((skill, i) => (
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
            <h3 className="text-xl font-semibold text-gray-300 mb-8">Tech Stack Utama</h3>
            <div className="flex flex-wrap justify-center gap-8">
              {[
                { name: 'Laravel', color: 'text-red-400', border: 'border-red-500/30', bg: 'bg-red-500/10' },
                { name: 'React', color: 'text-cyan-400', border: 'border-cyan-500/30', bg: 'bg-cyan-500/10' },
                { name: 'Flutter', color: 'text-blue-400', border: 'border-blue-500/30', bg: 'bg-blue-500/10' },
                { name: 'Next.js', color: 'text-white', border: 'border-white/30', bg: 'bg-white/10' },
                { name: 'Tailwind', color: 'text-teal-400', border: 'border-teal-500/30', bg: 'bg-teal-500/10' },
              ].map((tech, i) => (
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
      <section id="proyek" className="py-24 px-6 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Proyek Unggulan</span>
            </h2>
            <p className="text-gray-400 text-lg">Koleksi proyek terbaik yang telah saya kerjakan</p>
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
            {projects[activeTab].map((project, i) => (
              <div
                key={i}
                className={`project-card glass-card rounded-2xl overflow-hidden ${
                  project.highlight ? 'ring-2 ring-violet-500/50' : ''
                }`}
              >
                {project.highlight && (
                  <div className="bg-gradient-to-r from-violet-500 to-cyan-500 px-4 py-1 text-center">
                    <span className="text-sm font-semibold text-white flex items-center justify-center gap-1">
                      <Star className="w-4 h-4" /> Proyek Unggulan
                    </span>
                  </div>
                )}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-gray-400 mb-4 line-clamp-3">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, j) => (
                      <Badge
                        key={j}
                        variant="outline"
                        className="border-violet-500/30 text-violet-300"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-3">
                    {project.link && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-cyan-500/30 hover:bg-cyan-500/10 text-cyan-400"
                        onClick={() => window.open(project.link, '_blank')}
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </Button>
                    )}
                    {project.github && (
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 border-violet-500/30 hover:bg-violet-500/10 text-violet-400"
                        onClick={() => window.open(project.github, '_blank')}
                      >
                        <Github className="w-4 h-4 mr-2" />
                        GitHub
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="pengalaman" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Pengalaman Kerja</span>
            </h2>
            <p className="text-gray-400 text-lg">Perjalanan karir profesional saya</p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 top-0 bottom-0 w-px timeline-line hidden md:block" />

            {/* Experience Items */}
            <div className="space-y-8">
              {experiences.map((exp, i) => (
                <div
                  key={i}
                  className="relative pl-0 md:pl-20"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-4 top-8 w-8 h-8 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center hidden md:flex">
                    <exp.icon className="w-4 h-4 text-white" />
                  </div>

                  <div className="glass-card rounded-2xl p-6">
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
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="kontak" className="py-24 px-6 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">Mari Berkolaborasi</span>
            </h2>
            <p className="text-gray-400 text-lg">Tertarik untuk bekerja sama? Jangan ragu untuk menghubungi saya</p>
            <div className="section-divider max-w-xs mx-auto mt-4" />
          </div>

          <div className="glass-card rounded-2xl p-8 md:p-12">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="text-left space-y-6">
                <h3 className="text-2xl font-bold text-white">Hubungi Saya</h3>
                <p className="text-gray-400">
                  Saya selalu terbuka untuk diskusi proyek baru, ide kreatif, atau kesempatan untuk menjadi bagian dari visi Anda.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-3 rounded-lg bg-violet-500/20">
                      <MapPin className="w-5 h-5 text-violet-400" />
                    </div>
                    <span>Makassar, Indonesia</span>
                  </div>
                  <div className="flex items-center gap-3 text-gray-300">
                    <div className="p-3 rounded-lg bg-cyan-500/20">
                      <Mail className="w-5 h-5 text-cyan-400" />
                    </div>
                    <span>abdi.natsir@email.com</span>
                  </div>
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-violet-500/30 hover:bg-violet-500/10"
                    onClick={() => window.open('https://github.com/abdinatsir', '_blank')}
                  >
                    <Github className="w-5 h-5" />
                  </Button>
                  <Button
                    variant="outline"
                    size="icon"
                    className="rounded-full border-cyan-500/30 hover:bg-cyan-500/10"
                    onClick={() => window.open('#', '_blank')}
                  >
                    <Globe className="w-5 h-5" />
                  </Button>
                </div>
              </div>

              <div className="flex flex-col justify-center items-center gap-4">
                <Button
                  className="btn-primary rounded-full px-8 py-6 text-lg w-full max-w-xs"
                  onClick={() => window.open('mailto:abdi.natsir@email.com', '_blank')}
                >
                  <Mail className="mr-2 h-5 w-5" />
                  Kirim Email
                </Button>
                <p className="text-gray-500 text-sm">
                  Atau hubungi langsung via email
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
            © 2025 <span className="text-violet-400">Abdi Natsir</span>. All rights reserved.
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
