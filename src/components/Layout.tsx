

import React, { Suspense, useEffect, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import PageTransition from './PageTransition'
import { AnimatePresence, motion } from 'framer-motion'
import EnhLogo from './EnhLogo'

const Layout: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true)
  const location = useLocation()

  // useScrollAnimations()

  // Reset scroll on route change
  useEffect(() => {
    // Delay slightly to ensure it scrolls after any exit animation
    const scrollReset = setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'auto' })
    }, 50)
    return () => clearTimeout(scrollReset)
  }, [location.pathname])

  // Simulated page load (you can disable if not needed)
  useEffect(() => {
    setIsLoading(true)
    const timer = setTimeout(() => setIsLoading(false), 800)
    return () => clearTimeout(timer)
  }, [location.pathname])

  const pageVariants = {
    initial: { opacity: 0, y: 10 },
    in: { opacity: 1, y: 0 },
    out: { opacity: 0, y: -10 }
  }

  const pageTransition = {
    type: 'tween',
    ease: 'anticipate',
    duration: 0.3
  }

  return (
    <div className="min-h-screen bg-black text-white relative overflow-x-hidden">
      {/* Simple Loading Screen */}
      <AnimatePresence>

        {isLoading && (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-black z-[100] flex items-center justify-center"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-center gap-4">
              {/* Logo Component or Image */}
              <EnhLogo className="w-20 h-20 animate-pulse" />
              {/* Or if using image: <img src={Logo} alt="Logo" className="w-20 h-20 animate-pulse" /> */}

              {/* Spinner */}
              {/* <div className="w-8 h-8 border-2 border-white border-t-transparent rounded-full animate-spin"></div> */}

              {/* Text */}
              {/* <span className="text-white text-lg">Loading...</span> */}
            </div>
          </motion.div>
        )}

      </AnimatePresence>

      {/* Background Gradient Overlay */}
      <div className="fixed inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900/20 via-transparent to-gray-900/20"></div>
      </div>

      {/* AnimatePresence wraps page content for route transitions */}
      <AnimatePresence mode="wait">
        <motion.main
          key={location.pathname}
          className="relative z-10 flex-1"
          variants={pageVariants}
          initial="initial"
          animate="in"
          exit="out"
          transition={pageTransition}
        >
          <PageTransition>
            <Outlet />
          </PageTransition>
        </motion.main>
      </AnimatePresence>
    </div>
  )
}

export default Layout

