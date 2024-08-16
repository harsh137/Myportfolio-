import Head from 'next/head'
import '../styles/globals.css'
import { Montserrat } from 'next/font/google'
import NavBar from '../components/NavBar'
import Footer from '../components/Footer'
import { AnimatePresence } from 'framer-motion'
import { useRouter } from 'next/router'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: '--font-mont',
})

export default function App({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
   
  <main className={`${montserrat.variable} font-sans bg-light dark:bg-dark dark:text-light w-full min-h-screen`}>
    <NavBar/>
    <AnimatePresence mode='wait'>
      <Component key={router.asPath} {...pageProps} />
    </AnimatePresence>
    <Footer />
  </main>
    </>
  )
}
