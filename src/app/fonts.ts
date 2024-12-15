import { Exo_2, Lato } from 'next/font/google'

export const lato = Lato({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  variable: '--font-lato',
})

export const exo2 = Exo_2({
  display: "swap",
  subsets: ["latin"],
  weight: ["400", "700"],
  preload: true,
  variable: '--font-exo',
})