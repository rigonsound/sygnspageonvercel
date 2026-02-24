'use client'

import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'Gold', subtitle: 'Full Access', priceMain: '$7.99', priceSecondary: 'month', additionalText: '$2.99 week',
    features: [
      'Complete access to all nine symbolic modules: Daily Focus, The Oracle, Andromeda, Crossroads, Numbers, Chinese Zodiac, Stars, Echo, and Morpheus.',
      'ECHO memory system learns your patterns and provides personalized daily guidance.',
      'ECHO journaling interface to record reflections and track synchronicities.',
      'Unlocks The Oracle Crossroads mode for binary decision analysis.',
      'Enhanced AI engine for deeper symbolic pattern recognition.',
    ],
    borderColor: '#C6A34A', titleColor: '#C6A34A',
  },
  {
    name: 'Diamond', subtitle: 'Higher Power', priceMain: 'Pay as you go', additionalText: 'Advanced Intelligence',
    features: [
      'Advanced analytical engine powered by premium AI models for maximum insight depth.',
      'Includes all GOLD tier features and modules with enhanced processing.',
      'Deep pattern synthesis across multiple symbolic systems simultaneously.',
      'Maximum processing depth for complex multi-layered interpretations.',
      'Metered usage model for high-performance computational analysis.',
    ],
    borderColor: '#818CF8', titleColor: '#818CF8',
  },
]

export function PricingCards() {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem', maxWidth: '64rem', margin: '0 auto' }}>
      {tiers.map((tier, index) => (
        <motion.div key={tier.name} style={{ position: 'relative' }}
          initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }} viewport={{ once: true }}>
          <div style={{ background: 'rgba(0,0,0,0.4)', borderRadius: '0.75rem', padding: '3rem', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.6875rem', letterSpacing: '0.25em', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', textAlign: 'center', marginBottom: '0.5rem' }}>SYGNS</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '2rem', letterSpacing: '-0.03em', color: tier.titleColor, textAlign: 'center', marginBottom: '0.5rem' }}>{tier.name}</div>
            <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.9375rem', letterSpacing: '0.05em', color: 'rgba(255,255,255,0.7)', textAlign: 'center', marginBottom: '2rem' }}>{tier.subtitle}</div>
            <div style={{ textAlign: 'center', marginBottom: '2.5rem' }}>
              {'priceSecondary' in tier && tier.priceSecondary ? (
                <>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.5rem', color: 'rgba(255,255,255,0.95)' }}>
                    {tier.priceMain} <span style={{ fontWeight: 300, color: 'rgba(255,255,255,0.7)' }}>{tier.priceSecondary}</span>
                  </div>
                  {tier.additionalText && <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '1.5rem', color: 'rgba(255,255,255,0.95)', marginTop: '0.5rem' }}>{tier.additionalText}</div>}
                </>
              ) : (
                <div style={{ fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '1rem', color: 'rgba(255,255,255,0.8)' }}>{tier.priceMain}</div>
              )}
            </div>
            <ul style={{ listStyle: 'none', flexGrow: 1 }}>
              {tier.features.map((feature, i) => (
                <li key={i} style={{ display: 'flex', alignItems: 'flex-start', marginBottom: '0.875rem', fontFamily: 'Inter, sans-serif', fontWeight: 300, fontSize: '0.8125rem', lineHeight: '1.5', color: 'rgba(255,255,255,0.65)' }}>
                  <span style={{ marginRight: '0.625rem', color: 'rgba(255,255,255,0.4)' }}>•</span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      ))}
    </div>
  )
}
