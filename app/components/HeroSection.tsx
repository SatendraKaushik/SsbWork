import React from 'react';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url('https://i.pinimg.com/736x/10/62/3e/10623ea8b925aa5722fc919e259fde19.jpg')`
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90 backdrop-blur-sm" />
      </div>

      {/* Content */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-24 flex flex-col items-center justify-center gap-8 text-center"
      >
        <motion.a
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          href="#"
          className="inline-flex items-center rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
        >
          🎖️ <Separator className="mx-2 h-4" orientation="vertical" /> SSB Training Excellence
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl max-w-4xl"
        >
          Forge Your Path to
          <span className="block mt-2">SSB Excellence</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl text-lg text-gray-300 md:text-xl"
        >
          Comprehensive training programs to prepare you for the Special Service Bureau selection process.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 mt-4"
        >
          <Button size="lg" className="h-12 px-8 bg-white text-black hover:bg-gray-200" onClick={() => window.location.href = 'https://ssbsmartlearningapp.com/'}>
            Enroll Now
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="h-12 px-8 border-white text-white hover:bg-white/10"
          >
            Learn More
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default HeroSection;