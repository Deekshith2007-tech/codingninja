import React, { useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import CourseFinder from './components/CourseFinder'
import CoursesSection from './components/CoursesSection'
import FeaturesSection from './components/FeaturesSection'
import TestimonialsSection from './components/TestimonialsSection'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-primary">
      <Header />
      <Hero />
      <CourseFinder />
      <CoursesSection />
      <FeaturesSection />
      <TestimonialsSection />
      <Footer />
    </div>
  )
}

export default App
