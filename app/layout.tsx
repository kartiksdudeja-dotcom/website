import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Supreme Villagio - Luxury Twin Villas & Townhouses in Pune | Starting ₹2.39 Cr',
  description: 'Exclusive 4 & 5 BHK Twin Villas & 4 BHK Townhouses at Somatane, Pune. Experience luxury living with world-class amenities, grand clubhouse, and strategic location. Book now!',
  keywords: 'supreme villagio, luxury villas pune, townhouses pune, twin villas, 4 bhk pune, 5 bhk pune, somatane pune, real estate pune, luxury homes',
  openGraph: {
    title: 'Supreme Villagio - Luxury Twin Villas & Townhouses',
    description: 'Starting at ₹2.39 Cr* | Grand Clubhouse | Easy Payment Plan',
    type: 'website',
  },
  metadataBase: new URL('http://localhost:3000'),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
