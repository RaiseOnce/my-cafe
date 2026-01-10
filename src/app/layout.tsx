import type { Metadata } from 'next'
import localFont from 'next/font/local'
import '../styles/globals.scss'

const inter = localFont({
  src: [
    {
      path: '../../public/fonts/Inter/Inter-Thin.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/Inter-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/Inter-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/Inter/Inter-ExtraBold.woff2',
      weight: '800',
      style: 'normal',
    },
  ],
  variable: '--font-inter',
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.variable}>{children}</body>
    </html>
  )
}
