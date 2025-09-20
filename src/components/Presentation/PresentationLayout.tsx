import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronLeft, 
  ChevronRight, 
  X, 
  Home, 
  RotateCcw,
  Play,
  Pause,
  SkipBack,
  SkipForward,
  Maximize,
  Minimize
} from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { SlideTemplate } from './SlideTemplate';
import { presentationSlides } from './SlideData';

export const PresentationLayout: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [isFullScreen, setIsFullScreen] = useState(false);
  const navigate = useNavigate();

  const totalSlides = presentationSlides.length;

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlay, totalSlides]);

  // Custom fullscreen toggle (container-based, not browser fullscreen)
  const toggleFullScreen = useCallback(() => {
    setIsFullScreen(prev => !prev);
    
    // Hide/show website header when entering/exiting fullscreen
    const navbar = document.querySelector('header');
    if (navbar) {
      if (!isFullScreen) {
        navbar.style.display = 'none';
      } else {
        navbar.style.display = 'block';
      }
    }
  }, [isFullScreen]);

  // Cleanup: Show navbar when component unmounts
  useEffect(() => {
    return () => {
      const navbar = document.querySelector('header');
      if (navbar) {
        navbar.style.display = 'block';
      }
    };
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          nextSlide();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          prevSlide();
          break;
        case 'Escape':
          if (isFullScreen) {
            toggleFullScreen();
          } else {
            navigate('/');
          }
          break;
        case 'Home':
          setCurrentSlide(0);
          break;
        case 'End':
          setCurrentSlide(totalSlides - 1);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullScreen();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [navigate, totalSlides, toggleFullScreen, isFullScreen]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const resetPresentation = () => {
    setCurrentSlide(0);
    setIsAutoPlay(false);
  };

  return (
    <div className={`bg-black text-white relative overflow-hidden transition-all duration-500 ${
      isFullScreen 
        ? 'fixed inset-0 z-[9999]' 
        : 'min-h-screen'
    }`}>
      {/* Navigation Controls */}
      <motion.div
        className={`fixed left-2 right-2 sm:left-4 sm:right-4 z-50 flex items-center justify-between transition-all duration-300 ${
          isFullScreen ? 'top-4' : 'top-4'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        {/* Left Controls */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <motion.button
            onClick={() => {
              if (isFullScreen) {
                toggleFullScreen();
              }
              navigate('/');
            }}
            className="cyber-card p-2 sm:p-3 hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Exit Presentation"
          >
            {isFullScreen ? <X className="h-4 w-4 sm:h-5 sm:w-5 text-white" /> : <Home className="h-4 w-4 sm:h-5 sm:w-5 text-white" />}
          </motion.button>

          <motion.button
            onClick={resetPresentation}
            className="cyber-card p-2 sm:p-3 hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Reset to First Slide"
          >
            <RotateCcw className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
          </motion.button>
        </div>

        {/* Center - Progress Bar */}
        <div className="flex-1 max-w-xs sm:max-w-md mx-2 sm:mx-8">
          <div className="cyber-card p-2">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs sm:text-sm text-gray-400 font-['Orbitron']">
                SLIDE {currentSlide + 1} OF {totalSlides}
              </span>
              <span className="text-xs sm:text-sm text-gray-400">
                {Math.round(((currentSlide + 1) / totalSlides) * 100)}%
              </span>
            </div>
            <div className="w-full bg-gray-800 rounded-full h-2">
              <motion.div
                className="bg-gradient-to-r from-white to-accent-500 h-2 rounded-full"
                initial={{ width: 0 }}
                animate={{ width: `${((currentSlide + 1) / totalSlides) * 100}%` }}
                transition={{ duration: 0.3 }}
              />
            </div>
          </div>
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-1 sm:space-x-3">
          <motion.button
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className={`cyber-card p-3 transition-all duration-200 ${
              isAutoPlay ? 'border-accent-500/50 bg-accent-500/10' : 'hover:border-white/40'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isAutoPlay ? "Pause Auto-play" : "Start Auto-play"}
          >
            {isAutoPlay ? (
              <Pause className="h-4 w-4 sm:h-5 sm:w-5 text-accent-400" />
            ) : (
              <Play className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            )}
          </motion.button>

          {/* Custom Fullscreen Toggle Button */}
          <motion.button
            onClick={toggleFullScreen}
            className={`cyber-card p-3 transition-all duration-200 ${
              isFullScreen 
                ? 'border-green-500/50 bg-green-500/10 shadow-neon' 
                : 'hover:border-white/40'
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title={isFullScreen ? "Exit Fullscreen (F)" : "Enter Fullscreen (F)"}
          >
            {isFullScreen ? (
              <Minimize className="h-4 w-4 sm:h-5 sm:w-5 text-green-400" />
            ) : (
              <Maximize className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Main Slide Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="w-full h-full"
        >
          <SlideTemplate
            slide={presentationSlides[currentSlide]}
            currentSlide={currentSlide + 1}
            totalSlides={totalSlides}
          />
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <motion.div
        className="fixed bottom-4 sm:bottom-8 left-1/2 transform -translate-x-1/2 z-50"
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="flex items-center justify-center space-x-1 sm:space-x-2 md:space-x-4 px-2">
          <motion.button
            onClick={() => setCurrentSlide(0)}
            disabled={currentSlide === 0}
            className="cyber-card px-2 py-1.5 sm:p-3 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="First Slide"
          >
            <SkipBack className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
          </motion.button>

          <motion.button
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="cyber-card px-2 py-2 sm:p-3 md:p-4 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Previous Slide"
          >
            <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </motion.button>

          <div className="cyber-card px-2 py-1.5 sm:px-4 sm:py-2 md:px-6 md:py-3">
            <span className="text-xs sm:text-sm md:text-base text-white font-bold font-['Orbitron']">
              {currentSlide + 1} / {totalSlides}
            </span>
          </div>

          <motion.button
            onClick={nextSlide}
            disabled={currentSlide === totalSlides - 1}
            className="cyber-card px-2 py-2 sm:p-3 md:p-4 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Next Slide"
          >
            <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5 md:h-6 md:w-6 text-white" />
          </motion.button>

          <motion.button
            onClick={() => setCurrentSlide(totalSlides - 1)}
            disabled={currentSlide === totalSlides - 1}
            className="cyber-card px-2 py-1.5 sm:p-3 disabled:opacity-50 disabled:cursor-not-allowed hover:border-white/40 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            title="Last Slide"
          >
            <SkipForward className="h-3 w-3 sm:h-4 sm:w-4 md:h-5 md:w-5 text-white" />
          </motion.button>
        </div>
      </motion.div>

      {/* Slide Thumbnails - Hidden in fullscreen for cleaner view */}
      {!isFullScreen && (
        <motion.div
          className="hidden lg:block fixed right-4 top-1/2 transform -translate-y-1/2 z-40 max-h-96 overflow-y-auto"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: 100, opacity: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="space-y-2">
            {presentationSlides.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  currentSlide === index
                    ? 'bg-accent-500 shadow-neon'
                    : 'bg-gray-600 hover:bg-gray-500'
                }`}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                title={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      )}

      {/* Keyboard Shortcuts Help - Hidden in fullscreen */}
      {!isFullScreen && (
        <motion.div
          className="hidden md:block fixed bottom-4 right-4 cyber-card p-3 text-xs text-gray-400"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1 }}
        >
          <div className="space-y-1">
            <div>← → Navigate</div>
            <div>Space: Next</div>
            <div>Esc: Exit</div>
            <div>F: Fullscreen</div>
          </div>
        </motion.div>
      )}

      {/* Fullscreen Mode Indicator */}
      {isFullScreen && (
        <motion.div
          className="hidden sm:block fixed top-1/2 left-4 transform -translate-y-1/2 cyber-card p-2 z-40"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
        >
          <div className="text-xs text-green-400 font-['Orbitron']" style={{ writingMode: 'vertical-rl' }}>
            FULLSCREEN MODE
          </div>
        </motion.div>
      )}
    </div>
  );
};