import { ReactNode } from 'react'
import './globals.css'
import { Poppins } from 'next/font/google'

export const metadata = {
  title: 'Clima do Tempo',
  description: 'Generated by create next app',
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  style: ['normal', 'italic'],
})

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={poppins.className}>{children}</body>
    </html>
  )
}