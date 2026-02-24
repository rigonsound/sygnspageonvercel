'use client'

import { motion } from 'framer-motion'
import { Apple } from 'lucide-react'
import { Starfield } from '@/components/Starfield'
import { ModuleGrid } from '@/components/ModuleGrid'
import { PricingCards } from '@/components/PricingCards'
import { ImageCarousel } from '@/components/ImageCarousel'
import { ModuleIcons } from '@/components/ModuleIcons'
import {
  img_541fa1380bfa098c484dd631a820d9439846629f as heroBanner,
  img_7086af7a1cd7fbaa60dd649af91bc8dba0c82b0f as deckImage,
} from '@/lib/assets'

const headlineStyle = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 300,
  fontSize: 'clamp(1.75rem, 5vw, 3rem)',
  lineHeight: '1.3',
  color: 'rgba(255, 255, 255, 0.95)',
  letterSpacing: '-0.02em',
} as React.CSSProperties

const bodyStyle = {
  fontFamily: 'Inter, sans-serif',
  fontWeight: 300,
  fontSize: 'clamp(0.9375rem, 2.5vw, 1.125rem)',
  lineHeight: '1.9',
  color: 'rgba(255, 255, 255, 0.7)',
  letterSpacing: '0.02em',
} as React.CSSProperties

export default function Home() {
  return (
    <div className="bg-black text-white min-h-screen overflow-x-hidden">
      <Starfield />

      <div className="relative z-10">

        {/* ── HERO ── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-center max-w-4xl"
          >
            <div className="mb-16">
              <img
                src={heroBanner}
                alt="SYGNS by Denmark+Winter"
                className="w-full max-w-2xl mx-auto"
                style={{ opacity: 0.95 }}
              />
            </div>

            <motion.h1
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="mb-12 px-4"
              style={headlineStyle}
            >
              A Symbolic Operating System
            </motion.h1>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6"
            >
              <button
                className="flex items-center gap-3 px-8 py-3 rounded-md transition-all duration-300 hover:bg-white/10"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(0,0,0,0.4)',
                }}
              >
                <Apple size={28} strokeWidth={1.5} />
                <div className="text-left">
                  <div style={{ fontSize: '0.65rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.02em' }}>
                    Download on the
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.01em', marginTop: '-2px' }}>
                    App Store
                  </div>
                </div>
              </button>

              <button
                className="flex items-center gap-3 px-8 py-3 rounded-md transition-all duration-300 hover:bg-white/10"
                style={{
                  border: '1px solid rgba(255,255,255,0.3)',
                  fontFamily: 'Inter, sans-serif',
                  background: 'rgba(0,0,0,0.4)',
                }}
              >
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 20.5V3.5C3 2.91 3.34 2.39 3.84 2.15L13.69 12L3.84 21.85C3.34 21.6 3 21.09 3 20.5Z" fill="#00D9FF"/>
                  <path d="M16.81 15.12L6.05 21.34L14.54 12.85L16.81 15.12Z" fill="#FFCE00"/>
                  <path d="M3.84 2.15C4.27 1.93 4.79 2.01 5.16 2.35L16.81 8.88L14.54 11.15L3.84 2.15Z" fill="#00F076"/>
                  <path d="M16.81 8.88L19.69 10.54C20.41 10.96 20.41 12.04 19.69 12.46L16.81 14.12L14.54 11.85L16.81 8.88Z" fill="#FF3E00"/>
                </svg>
                <div className="text-left">
                  <div style={{ fontSize: '0.65rem', fontWeight: 300, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.02em' }}>
                    GET IT ON
                  </div>
                  <div style={{ fontSize: '1.1rem', fontWeight: 500, color: 'rgba(255,255,255,0.95)', letterSpacing: '-0.01em', marginTop: '-2px' }}>
                    Google Play
                  </div>
                </div>
              </button>
            </motion.div>

            <ModuleIcons />
          </motion.div>
        </section>

        {/* ── WHAT IT IS ── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl"
          >
            <div className="space-y-6 text-left" style={bodyStyle}>
              <p>
                Most decision-making tools promise clarity through addition—more data, more options,
                more frameworks. SYGNS works in reverse. It eliminates variables until only the
                structural truth remains.
              </p>
              <p>
                Consider it an analytical layer between instinct and action. Not prophetic. Not
                therapeutic. Observational.
              </p>
              <p>
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Daily Focus</strong> identifies what demands attention now.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>The Oracle</strong> exposes cognitive blind spots through symbolic inquiry.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Andromeda</strong> quantifies interpersonal tension and alignment.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Crossroads</strong> isolates binary decisions from emotional interference.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Numbers</strong> traces recurring life architecture through numerological patterns.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Chinese Zodiac</strong> categorizes behavioral default settings.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Stars</strong> positions identity within larger archetypal structures.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Morpheus</strong> translates subconscious imagery into actionable insight.<br />
                <strong style={{ fontWeight: 400, color: 'rgba(255,255,255,0.9)' }}>Echo</strong> is the connective intelligence. It learns, adapts, remembers.
              </p>
              <p>
                Where other systems optimize for engagement, Echo optimizes for precision. It
                doesn't amplify what you want to hear. It surfaces what you need to see.
              </p>
              <p>This isn't ambient wisdom. It's systematic self-knowledge.</p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-20 w-full"
            >
              <ImageCarousel />
            </motion.div>
          </motion.div>
        </section>

        {/* ── MODULE GRID ── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-7xl"
          >
            <h2 className="mb-16 text-center px-4" style={headlineStyle}>
              All The Sygns™ Modules
            </h2>
            <ModuleGrid />
          </motion.div>
        </section>

        {/* ── HOW IT WORKS ── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl"
          >
            <h2 className="mb-12 px-4" style={headlineStyle}>
              Signal Over Noise
            </h2>
            <div className="space-y-6 text-left" style={{ ...bodyStyle, fontSize: '1.125rem' }}>
              <p>
                The methodology is deceptively simple. Use it daily. Track what resonates. Let the
                system adapt to your behavioral fingerprint.
              </p>
              <p>
                Most people abandon self-reflection tools because they demand performance—journaling
                as obligation, meditation as discipline. SYGNS removes friction. Open it. Engage
                with what feels relevant. Close it. The intelligence accumulates passively.
              </p>
              <p style={{ marginTop: '2rem' }}>
                There are no notifications. No gamification. No streaks to maintain.
              </p>
              <p>
                What you get instead: a gradually refined model of your own decision architecture.
                The longer you use it, the sharper it becomes at isolating what actually matters
                versus what merely feels urgent.
              </p>
              <p>You are not being guided. You are being calibrated.</p>
            </div>
          </motion.div>
        </section>

        {/* ── PRICING ── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="w-full max-w-7xl"
          >
            <h2 className="mb-16 text-center px-4" style={headlineStyle}>
              Activate Your System
            </h2>
            <PricingCards />
          </motion.div>
        </section>

        {/* ── GET YOUR DECK ── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-4xl"
          >
            <h2 className="mb-8 px-4" style={headlineStyle}>
              Get Your Deck
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-10"
            >
              <img
                src={deckImage}
                alt="Oracle Tarot Re:Imagined"
                className="w-full max-w-2xl mx-auto"
                style={{ opacity: 0.9 }}
              />
            </motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: true }}
              className="mb-10"
              style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1.125rem', lineHeight: '1.8', color: 'rgba(255,255,255,0.7)', letterSpacing: '0.02em' }}
            >
              Get your Oracle Tarot Re:Imagined deck and unlock the full power of The Oracle.
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <a
                href="https://denmarkandwinterstore.myshopify.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-12 py-4 rounded-sm transition-all duration-300 hover:bg-[#C6A34A] hover:text-black"
                style={{ border: '1px solid #C6A34A', fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.875rem', letterSpacing: '0.1em', color: '#C6A34A', background: 'transparent', textDecoration: 'none' }}
              >
                GET YOUR DECK
              </a>
            </motion.div>
          </motion.div>
        </section>

        {/* ── FINAL CTA ── */}
        <section className="min-h-screen flex flex-col items-center justify-center px-6 py-32">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl"
          >
            <h2 className="mb-12 px-4" style={headlineStyle}>
              The system is here
            </h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="mb-16"
            >
              <img
                src={heroBanner}
                alt="SYGNS by Denmark+Winter"
                className="w-full max-w-md mx-auto"
                style={{ opacity: 0.95 }}
              />
            </motion.div>
          </motion.div>
        </section>

        <div className="h-32" />
      </div>
    </div>
  )
}
