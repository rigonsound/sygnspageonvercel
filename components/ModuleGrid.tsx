'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import {
  img_c2c0ae075938ff819734b5e062585cd82da6f058 as andromedaIcon,
  img_7112c14abe836080e0785793f72d1479aaba5bac as dailyFocusIcon,
  img_6012111e2b4552c79e2d037fcd56ff6b5b87d94a as echoIcon,
  img_b9faebac3f7ff6c45bbd41e533190748f492b7b2 as numbersIcon,
  img_b3cc679cd7a9df1556bc3a77abea365946f5be26 as oracleIcon,
  img_5b8c23e12d743c4c727a3822e076612f393a0399 as starsIcon,
  img_ef591ddbd26d1732d5a27cabfe5e2aa01246077e as twoPathsIcon,
  img_700b5699d405c9c453430414d64de61d701fccc8 as morpheusIcon,
  img_6fdb6bd1ac7932d08211efd297118efd67ee854f as zodiacIcon,
} from '@/lib/assets'

const modules = [
  { name: 'Daily Focus', color: '#60A5FA', icon: dailyFocusIcon, description: "A single interpretive lens for the day ahead. Not a to-do list—a thematic anchor. What energy you're working with, what requires conscious attention, where friction might surface." },
  { name: 'The Oracle', color: '#A78BFA', icon: oracleIcon, description: 'Tarot Re:Imagined. Built around The Oracle Tarot Re:Imagined deck, this system works through structured spreads and contextual interpretation to deliver a clear answer.' },
  { name: 'Andromeda', color: '#F472B6', icon: andromedaIcon, description: 'Relational analysis interface. Measures compatibility, tension points, and communication gaps between two people. Structural assessment of how two personalities interface.' },
  { name: 'Two Paths', color: '#FB923C', icon: twoPathsIcon, description: "Binary decision clarifier. When you're stuck between two choices, this isolates the core trade-off. Reveals which path aligns with your actual priorities versus your stated ones." },
  { name: 'Numbers', color: '#4ADE80', icon: numbersIcon, description: 'Numerological pattern recognition. Identifies recurring cycles in your life through birth date and name analysis. Shows you the architecture you keep building.' },
  { name: 'Chinese Zodiac', color: '#EF4444', icon: zodiacIcon, description: 'Behavioral archetype framework. Twelve categories of instinctive response patterns. How you approach conflict, ambition, relationships by default.' },
  { name: 'Stars', color: '#818CF8', icon: starsIcon, description: "Astrological positioning system. Birth chart analysis focused on structural dynamics, not predictions. Where you experience resistance, where energy flows naturally." },
  { name: 'Echo', color: '#2DD4BF', icon: echoIcon, description: 'Adaptive memory intelligence. Tracks your usage patterns, learns which modules resonate when, surfaces relevant insights at optimal moments.' },
  { name: 'Morpheus', color: '#C084FC', icon: morpheusIcon, description: "Dream symbolism decoder. You input dream imagery, it translates subconscious signals into conscious language. Pattern detection for what your mind processes while offline." },
]

export function ModuleGrid() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null)

  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', width: '100%', maxWidth: '72rem', margin: '0 auto' }}>
      {modules.map((module, index) => (
        <motion.div
          key={module.name}
          className="module-grid-item"
          style={{
            aspectRatio: '1/1',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            background: hoveredIndex === index
              ? 'linear-gradient(135deg, rgba(25,25,25,1) 0%, rgba(5,5,5,1) 100%)'
              : 'linear-gradient(135deg, rgba(15,15,15,1) 0%, rgba(0,0,0,1) 100%)',
            transition: 'background 0.3s ease',
          }}
          onHoverStart={() => setHoveredIndex(index)}
          onHoverEnd={() => setHoveredIndex(null)}
          onClick={() => setSelectedIndex(selectedIndex === index ? null : index)}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.05 }}
          viewport={{ once: true }}
        >
          {selectedIndex === index ? (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
              style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign: 'center', height: '100%' }}>
              <h4 style={{ fontFamily: 'Inter, sans-serif', fontWeight: 400, fontSize: '0.875rem', letterSpacing: '0.05em', color: module.color, marginBottom: '0.75rem' }}>{module.name}</h4>
              <p style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.7rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.75)', letterSpacing: '0.01em' }}>{module.description}</p>
            </motion.div>
          ) : (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}
              style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
              <img src={module.icon} alt={module.name} style={{ width: '4rem', height: '4rem', objectFit: 'contain' }} />
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.875rem', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.9)', textAlign: 'center', padding: '0 1rem' }}>{module.name}</span>
            </motion.div>
          )}
        </motion.div>
      ))}
    </div>
  )
}
