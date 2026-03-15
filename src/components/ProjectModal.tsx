'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from '@/components/ui/dialog'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { 
  Github, 
  ExternalLink, 
  Star,
  X
} from 'lucide-react'
import { ProjectSlider } from './ProjectSlider'

interface ProjectModalProps {
  isOpen: boolean
  onClose: () => void
  project: any
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-950 border-violet-500/20 text-white p-0 gap-0">
        <div className="relative">
          <ProjectSlider 
            images={project.images && project.images.length > 0 ? project.images : (project.image ? [project.image] : [])} 
            title={project.title}
          />
          {project.highlight && (
            <div className="absolute top-4 left-4 bg-violet-500 text-white text-[10px] font-bold px-3 py-1.5 rounded-full shadow-lg flex items-center gap-1 z-10">
              <Star className="w-3 h-3 fill-white" /> Featured
            </div>
          )}
        </div>

        <div className="p-6 md:p-8">
          <DialogHeader className="mb-6">
            <div className="flex justify-between items-start gap-4">
              <div>
                <DialogTitle className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                  {project.title}
                </DialogTitle>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech: string, j: number) => (
                    <Badge
                      key={j}
                      variant="outline"
                      className="bg-violet-500/10 border-violet-500/20 text-violet-300 text-xs px-2.5 py-0.5"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </DialogHeader>

          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-200 mb-2">Description</h4>
              <DialogDescription className="text-gray-400 text-base leading-relaxed">
                {project.description}
              </DialogDescription>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 border-t border-white/5">
              {project.link && (
                <Button 
                  onClick={() => window.open(project.link, '_blank')}
                  className="btn-primary rounded-full px-6 flex items-center gap-2"
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Preview
                </Button>
              )}
              {project.github && (
                <Button 
                  variant="outline"
                  onClick={() => window.open(project.github, '_blank')}
                  className="rounded-full px-6 border-violet-500/30 hover:bg-violet-500/10 flex items-center gap-2"
                >
                  <Github className="w-4 h-4" />
                  View Source
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
