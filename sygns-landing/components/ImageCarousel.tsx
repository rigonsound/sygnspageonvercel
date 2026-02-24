'use client'

import { useRef, useState } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import {
  img_e21a027213d53d1b7d4af1ef6c6ddb1cd41f46b2 as morpheusImg,
  img_7e6d58da7cb735389dbcecdf91f13d0625a71d87 as twoPathsImg,
  img_6e53e5381f105010db751ad715cf3bfc01e3e079 as echoImg,
  img_48b4079cd64b0d6bb49aa3e3b8f3c633d05898fb as dailyFocusImg,
  img_73cef9a166918161153be4bc9f36b7f04542d09e as dashboardImg,
  img_e930f13464dbd5db146d0223b13c6fde6b60388b as oracleCardImg,
  img_5c6aeb3b294899d4b6a6d4256a008bae4aa442fc as andromedaImg,
  img_59660b6a93dc8821bb498bd6f7f16d7c85a0e8d5 as theWeightImg,
  img_d32e7c771df94a1b72f52fe2a024ae6a24e43664 as theStarImg,
  img_5baa053141f50dca0cf3864020e9363eb5e2d514 as theFoolImg,
} from '@/lib/assets'

const images = [
  { src: morpheusImg, alt: 'Morpheus' },
  { src: twoPathsImg, alt: 'Two Paths' },
  { src: echoImg, alt: 'Echo' },
  { src: dailyFocusImg, alt: 'Daily Focus' },
  { src: dashboardImg, alt: 'Dashboard' },
  { src: oracleCardImg, alt: 'Oracle' },
  { src: andromedaImg, alt: 'Andromeda' },
  { src: theWeightImg, alt: 'The Weight' },
  { src: theStarImg, alt: 'The Star' },
  { src: theFoolImg, alt: 'The Fool' },
]

export function ImageCarousel() {
  const [current, setCurrent] = useState(4)
  const total = images.length

  const prev = () => setCurrent((c) => (c - 1 + total) % total)
  const next = () => setCurrent((c) => (c + 1) % total)

  const getVisible = () => {
    const visible = []
    for (let i = -2; i <= 2; i++) {
      visible.push((current + i + total) % total)
    }
    return visible
  }

  return (
    <div className="relative w-full max-w-5xl mx-auto px-12">
      <button
        onClick={prev}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/20 hover:bg-white/10 transition-all duration-300"
        aria-label="Previous"
      >
        <ChevronLeft className="w-6 h-6 text-white/70" />
      </button>

      <button
        onClick={next}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/20 hover:bg-white/10 transition-all duration-300"
        aria-label="Next"
      >
        <ChevronRight className="w-6 h-6 text-white/70" />
      </button>

      <div className="flex items-center justify-center gap-3 overflow-hidden">
        {getVisible().map((imgIndex, pos) => {
          const isCenter = pos === 2
          return (
            <motion.div
              key={imgIndex}
              animate={{
                scale: isCenter ? 1 : 0.8,
                opacity: isCenter ? 1 : 0.4,
              }}
              transition={{ duration: 0.3 }}
              className="flex-shrink-0"
              style={{ width: isCenter ? '200px' : '140px' }}
            >
              <div
                className="relative overflow-hidden rounded-lg"
                style={{ aspectRatio: '9/19' }}
              >
                <img
                  src={images[imgIndex].src}
                  alt={images[imgIndex].alt}
                  className="w-full h-full object-cover"
                />
                {isCenter && (
                  <div
                    className="absolute inset-0 rounded-lg pointer-events-none"
                    style={{
                      boxShadow: '0 0 40px rgba(198,163,74,0.3)',
                      border: '1px solid rgba(198,163,74,0.2)',
                    }}
                  />
                )}
              </div>
            </motion.div>
          )
        })}
      </div>
    </div>
  )
}
