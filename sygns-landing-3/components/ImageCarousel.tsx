'use client'

import { useRef } from 'react'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
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
  { src: morpheusImg, alt: 'Morpheus — Dream Interpretation' },
  { src: twoPathsImg, alt: 'Two Paths — Decision Clarifier' },
  { src: echoImg, alt: 'Echo — Memory Intelligence' },
  { src: dailyFocusImg, alt: 'Daily Focus' },
  { src: dashboardImg, alt: 'SYGNS Dashboard' },
  { src: oracleCardImg, alt: 'Oracle Card' },
  { src: andromedaImg, alt: 'Andromeda — Relational Analysis' },
  { src: theWeightImg, alt: 'The Weight' },
  { src: theStarImg, alt: 'The Star' },
  { src: theFoolImg, alt: 'The Fool' },
]

export function ImageCarousel() {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const sliderRef = useRef<any>(null)

  const settings = {
    dots: false,
    infinite: true,
    speed: 400,
    slidesToShow: 5,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0px',
    initialSlide: 4,
    autoplay: false,
    arrows: false,
    cssEase: 'cubic-bezier(0.4, 0, 0.2, 1)',
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3, initialSlide: 4 } },
      { breakpoint: 640, settings: { slidesToShow: 1, initialSlide: 4 } },
    ],
  }

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4">
      <button
        onClick={() => sliderRef.current?.slickPrev()}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/20 hover:bg-white/10 transition-all duration-300"
        aria-label="Previous slide"
      >
        <ChevronLeft className="w-6 h-6 text-white/70" />
      </button>

      <button
        onClick={() => sliderRef.current?.slickNext()}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-black/40 border border-white/20 hover:bg-white/10 transition-all duration-300"
        aria-label="Next slide"
      >
        <ChevronRight className="w-6 h-6 text-white/70" />
      </button>

      <Slider ref={sliderRef} {...settings}>
        {images.map((image, index) => (
          <div key={index} className="px-3">
            <div className="relative overflow-hidden rounded-lg" style={{ aspectRatio: '9/19' }}>
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover transition-all duration-500"
              />
              <div
                className="absolute inset-0 rounded-lg pointer-events-none"
                style={{
                  boxShadow: '0 0 40px rgba(198,163,74,0.3)',
                  border: '1px solid rgba(198,163,74,0.2)',
                }}
              />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  )
}
