'use client'

import * as React from 'react'
import Autoplay from 'embla-carousel-autoplay'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel'
import { Code } from 'lucide-react'

interface ProjectSliderProps {
  images?: string[]
  title: string
  aspectRatio?: string
}

export function ProjectSlider({ images, title, aspectRatio = 'aspect-video' }: ProjectSliderProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: false })
  )

  if (!images || images.length === 0) {
    return (
      <div className={`w-full ${aspectRatio} bg-gradient-to-br from-violet-500/20 to-cyan-500/20 flex items-center justify-center`}>
        <Code className="w-12 h-12 text-violet-400/30" />
      </div>
    )
  }

  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-full h-full"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent className="-ml-0">
        {images.map((image, index) => (
          <CarouselItem key={index} className="pl-0 h-full">
            <div className={`relative w-full ${aspectRatio} overflow-hidden`}>
              <img
                src={image}
                alt={`${title} - image ${index + 1}`}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
