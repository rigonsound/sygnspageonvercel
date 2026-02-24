'use client'

import { motion } from 'framer-motion'

interface PricingTier {
  name: string
  subtitle: string
  priceMain?: string
  priceSecondary?: string
  additionalText?: string
  features: string[]
  borderColor: string
  titleColor: string
}

const tiers: PricingTier[] = [
  {
    name: 'Gold',
    subtitle: 'Full Access',
    priceMain: '$7.99',
    priceSecondary: 'month',
    additionalText: '$2.99 week',
    features: [
      'Complete access to all nine symbolic modules: Daily Focus, The Oracle, Andromeda, Crossroads, Numbers, Chinese Zodiac, Stars, Echo, and Morpheus.',
      'ECHO memory system learns your patterns and provides personalized daily guidance.',
      'ECHO journaling interface to record reflections and track synchronicities.',
      'Unlocks The Oracle Crossroads mode for binary decision analysis.',
      'Enhanced AI engine for deeper symbolic pattern recognition.',
    ],
    borderColor: '#C6A34A',
    titleColor: '#C6A34A',
  },
  {
    name: 'Diamond',
    subtitle: 'Higher Power',
    additionalText: 'Advanced Intelligence',
    priceMain: 'Pay as you go',
    features: [
      'Advanced analytical engine powered by premium AI models for maximum insight depth.',
      'Includes all GOLD tier features and modules with enhanced processing.',
      'Deep pattern synthesis across multiple symbolic systems simultaneously.',
      'Maximum processing depth for complex multi-layered interpretations.',
      'Metered usage model for high-performance computational analysis.',
    ],
    borderColor: '#818CF8',
    titleColor: '#818CF8',
  },
]

export function PricingCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto">
      {tiers.map((tier, index) => (
        <motion.div
          key={tier.name}
          className="relative"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          viewport={{ once: true }}
        >
          {/* Glow effect */}
          <div
            className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 blur-xl"
            style={{
              background: `radial-gradient(circle at center, ${tier.borderColor}15, transparent 70%)`,
            }}
          />

          {/* Card */}
          <div
            className="relative bg-black/40 backdrop-blur-sm rounded-xl p-12 h-full flex flex-col transition-all duration-500 hover:bg-black/60"
            style={{
              border: '1px solid rgba(255, 255, 255, 0.05)',
            }}
          >
            {/* SYGNS label */}
            <div
              className="text-center mb-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.6875rem',
                letterSpacing: '0.25em',
                color: 'rgba(255, 255, 255, 0.5)',
                textTransform: 'uppercase',
              }}
            >
              SYGNS
            </div>

            {/* Tier name */}
            <div
              className="text-center mb-2"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 600,
                fontSize: '2rem',
                letterSpacing: '-0.03em',
                color: tier.titleColor,
                lineHeight: '1',
              }}
            >
              {tier.name}
            </div>

            {/* Subtitle */}
            <div
              className="text-center mb-8"
              style={{
                fontFamily: 'Inter, sans-serif',
                fontWeight: 300,
                fontSize: '0.9375rem',
                letterSpacing: '0.05em',
                color: 'rgba(255, 255, 255, 0.7)',
              }}
            >
              {tier.subtitle}
            </div>

            {/* Additional text for Diamond */}
            {tier.additionalText && !tier.priceSecondary && (
              <div
                className="text-center mb-3"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 500,
                  fontSize: '1.125rem',
                  letterSpacing: '0.02em',
                  color: 'rgba(255, 255, 255, 0.9)',
                }}
              >
                {tier.additionalText}
              </div>
            )}

            {/* Price */}
            <div className="text-center mb-10">
              {tier.priceSecondary ? (
                <>
                  <div
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontWeight: 500,
                      fontSize: '1.5rem',
                      letterSpacing: '-0.02em',
                      color: 'rgba(255, 255, 255, 0.95)',
                      lineHeight: '1.4',
                    }}
                  >
                    {tier.priceMain}{' '}
                    <span
                      style={{
                        fontWeight: 300,
                        color: 'rgba(255, 255, 255, 0.7)',
                      }}
                    >
                      {tier.priceSecondary}
                    </span>
                  </div>
                  {tier.additionalText && (
                    <div
                      style={{
                        fontFamily: 'Inter, sans-serif',
                        fontWeight: 500,
                        fontSize: '1.5rem',
                        letterSpacing: '-0.02em',
                        color: 'rgba(255, 255, 255, 0.95)',
                        marginTop: '0.5rem',
                        lineHeight: '1.4',
                      }}
                    >
                      {tier.additionalText}
                    </div>
                  )}
                </>
              ) : (
                <div
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '1rem',
                    letterSpacing: '0.03em',
                    color: 'rgba(255, 255, 255, 0.8)',
                  }}
                >
                  {tier.priceMain}
                </div>
              )}
            </div>

            {/* Features */}
            <ul className="space-y-3.5 flex-grow text-left">
              {tier.features.map((feature, i) => (
                <li
                  key={i}
                  className="flex items-start"
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 300,
                    fontSize: '0.8125rem',
                    lineHeight: '1.5',
                    letterSpacing: '0.015em',
                    color: 'rgba(255, 255, 255, 0.65)',
                  }}
                >
                  <span
                    className="mr-2.5"
                    style={{ color: 'rgba(255, 255, 255, 0.4)' }}
                  >
                    •
                  </span>
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
