import React from 'react'
import { Zap, Brain, Sparkles } from 'lucide-react'

export default function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 md:px-8 lg:px-16 bg-gradient-to-b from-primary via-secondary to-primary">
      <div className="max-w-6xl mx-auto">
        {/* Tagline */}
        <div className="flex justify-center mb-8">
          <div className="flex items-center gap-3 px-6 py-3 rounded-full border border-accent/30 bg-accent/5">
            <Zap className="text-accent" size={20} />
            <span className="text-white text-sm md:text-base">Ready to 10X your career!</span>
          </div>
        </div>

        {/* Main Heading */}
        <h1 className="heading-lg text-center mb-6 leading-tight">
          <span className="gradient-text">Give your career an unfair AI advantage</span>
        </h1>

        {/* Subheading */}
        <p className="text-xl md:text-2xl text-center text-white/70 mb-16 max-w-3xl mx-auto">
          Master cutting-edge technologies with industry-aligned curriculum and real-world projects
        </p>

        {/* Visual Elements - Using Tailwind for shapes */}
        <div className="relative h-96 md:h-[500px] flex items-center justify-center mb-20">
          {/* Floating cards with icons */}
          <div className="absolute top-10 left-10 md:left-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500/20 to-blue-600/20 rounded-3xl border border-blue-400/30 backdrop-blur-sm flex items-center justify-center transform hover:scale-110 transition">
            <Brain className="text-blue-300" size={48} />
          </div>

          {/* Center glowing circle */}
          <div className="relative w-48 h-48 md:w-64 md:h-64">
            <div className="absolute inset-0 bg-gradient-to-br from-accent via-accent/50 to-transparent rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute inset-0 border-2 border-accent/30 rounded-full"></div>
            <div className="absolute inset-8 bg-gradient-to-b from-white/20 to-transparent rounded-full"></div>
          </div>

          <div className="absolute bottom-10 right-10 md:right-20 w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-accent/20 to-accent/10 rounded-3xl border border-accent/30 backdrop-blur-sm flex items-center justify-center transform hover:scale-110 transition">
            <Sparkles className="text-accent" size={48} />
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent">95%</p>
            <p className="text-white/60 text-sm md:text-base">Placement Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent">50K+</p>
            <p className="text-white/60 text-sm md:text-base">Students Trained</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-accent">500+</p>
            <p className="text-white/60 text-sm md:text-base">Industry Partners</p>
          </div>
        </div>
      </div>
    </section>
  )
}
