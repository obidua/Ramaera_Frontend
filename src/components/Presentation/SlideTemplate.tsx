import React from 'react';
import { motion } from 'framer-motion';
import { 
  Factory, 
  ShoppingCart, 
  Users, 
  Target, 
  IndianRupee,
  Quote,
  Rocket,
  ArrowRight,
  Shield,
  Building,
  Heart,
  Sparkles
} from 'lucide-react';
import { Slide } from './SlideData';
import EnhLogo from '../EnhLogo';

interface SlideTemplateProps {
  slide: Slide;
  currentSlide: number;
  totalSlides: number;
}

const iconMap: Record<string, React.ComponentType<any>> = {
  Factory,
  ShoppingCart,
  Users,
  Target,
  IndianRupee,
  Building,
  Heart,
  Sparkles
};

export const SlideTemplate: React.FC<SlideTemplateProps> = ({ slide, currentSlide, totalSlides }) => {
  // Helper function to render list items with proper alignment
  const renderListItemContent = (item: string) => {
    // Check if the item starts with an emoji or bullet
    const emojiRegex = /^[\u{1F300}-\u{1F9FF}]|^[\u{2600}-\u{26FF}]|^[\u{2700}-\u{27BF}]|^•/u;
    const match = item.match(emojiRegex);
    
    if (match) {
      const icon = match[0];
      const text = item.slice(icon.length).trim();
      return (
        <div className="flex items-start">
          <span className="w-6 sm:w-8 flex-shrink-0 mr-2 sm:mr-3 text-accent-400 text-sm sm:text-base">
            {icon}
          </span>
          <span className="flex-grow text-sm sm:text-base md:text-lg leading-relaxed">
            {text}
          </span>
        </div>
      );
    }
    
    // If no emoji/bullet, render normally with consistent indentation
    return (
      <div className="flex items-start">
        <span className="w-6 sm:w-8 flex-shrink-0 mr-2 sm:mr-3 text-accent-400 text-sm sm:text-base">
          •
        </span>
        <span className="flex-grow text-sm sm:text-base md:text-lg leading-relaxed">
          {item}
        </span>
      </div>
    );
  };

  const renderContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6 sm:mb-8 md:mb-12"
            >
              <EnhLogo size="lg" variant="floating" className="w-24 h-24 sm:w-32 sm:h-32 md:w-48 md:h-48" />
            </motion.div>
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-4 sm:mb-6 md:mb-8 font-['Orbitron'] holographic px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-accent-400 mb-4 sm:mb-6 md:mb-8 font-medium px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {slide.subtitle}
            </motion.p>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {slide.content}
            </motion.p>
          </div>
        );

      case 'stats':
        return (
          <div className="text-center">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 font-['Orbitron'] cyber-text px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slide.subtitle}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4">
              {slide.stats?.map((stat, index) => {
                const IconComponent = stat.icon ? iconMap[stat.icon] : Factory;
                return (
                  <motion.div
                    key={index}
                    className="cyber-card p-4 sm:p-6 md:p-8 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    <IconComponent className="h-8 w-8 sm:h-10 sm:w-10 md:h-12 md:w-12 text-accent-400 mx-auto mb-2 sm:mb-4" />
                    <div className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-1 sm:mb-2 golden-accent font-['Orbitron']">
                      {stat.value}
                    </div>
                    <div className="text-sm sm:text-base text-gray-400 font-medium">{stat.label}</div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        );

      case 'process':
        return (
          <div className="text-center">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 font-['Orbitron'] cyber-text px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slide.subtitle}
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 px-4">
              {slide.processSteps?.map((step, index) => (
                <motion.div
                  key={index}
                  className="cyber-card p-4 sm:p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-gradient-to-r from-white to-accent-500 text-black rounded-full flex items-center justify-center text-lg sm:text-xl md:text-2xl font-bold mx-auto mb-2 sm:mb-4 shadow-neon">
                    {step.number}
                  </div>
                  <h3 className="text-base sm:text-lg font-bold text-white mb-1 sm:mb-2 font-['Orbitron']">{step.title}</h3>
                  <p className="text-gray-300 text-xs sm:text-sm">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        );

      case 'quote':
        return (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              animate={{ scale: 1, rotate: 0 }}
              transition={{ duration: 1 }}
              className="mb-8"
            >
              <Quote className="h-16 w-16 sm:h-20 sm:w-20 md:h-24 md:w-24 text-accent-400 mx-auto pulse-glow" />
            </motion.div>
            <motion.blockquote
              className="text-xl sm:text-2xl md:text-3xl lg:text-5xl font-bold text-white mb-4 sm:mb-6 md:mb-8 holographic leading-tight font-['Orbitron'] px-4"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              "{slide.content}"
            </motion.blockquote>
            <motion.p
              className="text-gray-300 text-base sm:text-lg md:text-xl font-medium golden-accent px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.6 }}
            >
              Building India's industrial future, one factory at a time.
            </motion.p>
          </div>
        );

      case 'cta':
        return (
          <div className="text-center">
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 font-['Orbitron'] holographic px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 md:mb-12 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slide.subtitle}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 max-w-4xl mx-auto px-4">
              {Array.isArray(slide.content) ? slide.content.map((item, index) => (
                <motion.div
                  key={index}
                  className="cyber-card p-4 sm:p-6 hover:border-accent-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  <p className="text-sm sm:text-base md:text-lg font-medium text-white">{item}</p>
                </motion.div>
              )) : (
                <motion.div
                  className="col-span-2 cyber-card p-4 sm:p-6 md:p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-base sm:text-lg md:text-xl text-white">{slide.content}</p>
                </motion.div>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div>
            <motion.h1
              className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-4 sm:mb-6 font-['Orbitron'] cyber-text px-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.p
                className="text-base sm:text-lg md:text-xl text-accent-400 mb-4 sm:mb-6 md:mb-8 font-medium px-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {slide.subtitle}
              </motion.p>
            )}
            <motion.div
              className="text-left max-w-4xl mx-auto px-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {Array.isArray(slide.content) ? (
                <ul className="space-y-2 sm:space-y-3 md:space-y-4">
                  {slide.content.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    >
                      {renderListItemContent(item)}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-base sm:text-lg md:text-xl text-gray-300 leading-relaxed text-center">
                  {slide.content}
                </p>
              )}
            </motion.div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={slide.image}
          alt={slide.title}
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-black/80 via-black/60 to-black/80"></div>
      </div>
      <div className="absolute inset-0 cyber-grid-bg opacity-20 z-5"></div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-2 sm:px-4 md:px-6 lg:px-8 pt-24 sm:pt-28 md:pt-32 lg:pt-36 pb-16 sm:pb-20 md:pb-24">
        {renderContent()}
      </div>

      {/* Slide Number */}
      <motion.div
        className="absolute bottom-4 sm:bottom-6 md:bottom-8 right-2 sm:right-4 md:right-8 cyber-card px-2 sm:px-3 md:px-4 py-1 sm:py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-xs sm:text-sm text-gray-400 font-['Orbitron']">
          {currentSlide} / {totalSlides}
        </span>
      </motion.div>
    </div>
  );
};