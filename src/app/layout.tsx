import { MovieContextProvider } from '@/app/(home)/hooks/context'
import './globals.css'
import type { Metadata } from 'next'
import { DM_Sans } from 'next/font/google'


const DMSans = DM_Sans({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'MovieBox',
  description: 'Movie Listing Application, utilizing the TMDB API',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <MovieContextProvider>
          {children}
        </MovieContextProvider>
      </body>
    </html>
  )
}
