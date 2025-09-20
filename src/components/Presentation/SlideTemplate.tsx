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
  const renderContent = () => {
    switch (slide.type) {
      case 'title':
        return (
          <div className="text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-12"
            >
              <EnhLogo size="xl" variant="floating" />
            </motion.div>
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-8 font-['Orbitron'] holographic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-2xl md:text-3xl text-accent-400 mb-8 font-medium"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {slide.subtitle}
            </motion.p>
            <motion.p
              className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed"
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
              className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] cyber-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slide.subtitle}
            </motion.p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {slide.stats?.map((stat, index) => {
                const IconComponent = stat.icon ? iconMap[stat.icon] : Factory;
                return (
                  <motion.div
                    key={index}
                    className="cyber-card p-8 text-center"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                  >
                    <IconComponent className="h-12 w-12 text-accent-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-2 golden-accent font-['Orbitron']">
                      {stat.value}
                    </div>
                    <div className="text-gray-400 font-medium">{stat.label}</div>
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
              className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] cyber-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slide.subtitle}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              {slide.processSteps?.map((step, index) => (
                <motion.div
                  key={index}
                  className="cyber-card p-6 text-center"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-white to-accent-500 text-black rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4 shadow-neon">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2 font-['Orbitron']">{step.title}</h3>
                  <p className="text-gray-300 text-sm">{step.description}</p>
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
              <Quote className="h-24 w-24 text-accent-400 mx-auto pulse-glow" />
            </motion.div>
            <motion.blockquote
              className="text-3xl md:text-5xl font-bold text-white mb-8 holographic leading-tight font-['Orbitron']"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
            >
              "{slide.content}"
            </motion.blockquote>
            <motion.p
              className="text-gray-300 text-xl font-medium golden-accent"
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
              className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] holographic"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            <motion.p
              className="text-xl text-gray-300 mb-12"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {slide.subtitle}
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {Array.isArray(slide.content) ? slide.content.map((item, index) => (
                <motion.div
                  key={index}
                  className="cyber-card p-6 hover:border-accent-500/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
                >
                  <p className="text-lg font-medium text-white">{item}</p>
                </motion.div>
              )) : (
                <motion.div
                  className="col-span-2 cyber-card p-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <p className="text-xl text-white">{slide.content}</p>
                </motion.div>
              )}
            </div>
          </div>
        );

      default:
        return (
          <div>
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 font-['Orbitron'] cyber-text"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              {slide.title}
            </motion.h1>
            {slide.subtitle && (
              <motion.p
                className="text-xl text-accent-400 mb-8 font-medium"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {slide.subtitle}
              </motion.p>
            )}
            <motion.div
              className="text-left max-w-4xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {Array.isArray(slide.content) ? (
                <ul className="space-y-4">
                  {slide.content.map((item, index) => (
                    <motion.li
                      key={index}
                      className="text-lg text-gray-300 leading-relaxed flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 + 0.6 }}
                    >
                      <span className="mr-3 text-accent-400">•</span>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              ) : (
                <p className="text-xl text-gray-300 leading-relaxed text-center">
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
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {renderContent()}
      </div>

      {/* Slide Number */}
      <motion.div
        className="absolute bottom-8 right-8 cyber-card px-4 py-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-sm text-gray-400 font-['Orbitron']">
          {currentSlide} / {totalSlides}
        </span>
      </motion.div>
    </div>
  );
};