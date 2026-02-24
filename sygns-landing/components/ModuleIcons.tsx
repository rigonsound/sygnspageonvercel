'use client'

import { motion } from 'framer-motion'
import {
  img_571e7d70614660645c5e1e3ac281ce2e0d8439f9 as icon1,
  img_f480785fd3252dbf18b6e0c2580388a8a7d1ce71 as icon2,
  img_a670a24240da4e95f7c84ce4d6d1c36b4d0f7120 as icon3,
  img_ff6f94ff87df6ba817c2ebc83aad41764004a1f1 as icon4,
  img_25947572a5ab1e8bcd6f16f21e431f98bdb3776a as icon5,
  img_c3c403e036bc8ff8d529e788dfe7e3597b431b41 as icon6,
  img_eee3d73fa87a8df25ac409e1ef03186e99bbb0b9 as icon7,
  img_c69179301f509610340f3c699001bbf6f55adf82 as icon8,
  img_601153da4a1a93abd69e69286fe1fafdef099fd6 as icon9,
} from '@/lib/assets'

const icons = [icon1, icon2, icon3, icon4, icon5, icon6, icon7, icon8, icon9]

export function ModuleIcons() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.7 }}
      className="flex justify-center items-center gap-3 sm:gap-4 max-w-4xl mx-auto overflow-x-auto px-4"
      style={{ scrollbarWidth: 'none' }}
    >
      {icons.map((icon, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.7 + index * 0.1 }}
          className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0"
        >
          <img
            src={icon}
            alt={`Module icon ${index + 1}`}
            className="w-full h-full object-contain"
            style={{ opacity: 0.6 }}
          />
        </motion.div>
      ))}
    </motion.div>
  )
}
