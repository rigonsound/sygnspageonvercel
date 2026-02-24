import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'SYGNS — A Symbolic Operating System',
  description: 'A Symbolic Operating System by Denmark+Winter. Tarot, numerology, astrology, and psychology with AI technology.',
  openGraph: {
    title: 'SYGNS — A Symbolic Operating System',
    description: 'Systematic self-knowledge. Not ambient wisdom.',
    siteName: 'SYGNS',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body style={{ margin: 0, padding: 0, backgroundColor: '#000' }}>
        {children}
      </body>
    </html>
  )
}
