import React, { useState } from 'react'
import CourseCard from './CourseCard'
import { ChevronLeft, ChevronRight } from 'lucide-react'

export default function CoursesSection() {
  const [activeTab, setActiveTab] = useState('professionals')

  const courses = {
    professionals: [
      {
        title: 'Data Analytics with AI',
        description: 'Master data analytics combined with AI tools for advanced insights and decision making',
        icon: '📊',
        duration: '6 months',
        students: '20K+ Enrolled',
        certification: 'Industry Certification',
        skills: ['Python', 'SQL', 'Tableau', 'AI Tools'],
        isFeatured: true
      },
      {
        title: 'Software Development Bootcamp',
        description: 'Build full-stack applications with modern web technologies and best practices',
        icon: '💻',
        duration: '5 months',
        students: '15K+ Enrolled',
        certification: 'Professional Certificate',
        skills: ['React', 'Node.js', 'MongoDB', 'AWS'],
        isFeatured: false
      },
      {
        title: 'Generative AI & LLMs',
        description: 'Explore large language models, prompt engineering, and AI application development',
        icon: '🤖',
        duration: '4 months',
        students: '8K+ Enrolled',
        certification: 'AI Specialist Badge',
        skills: ['LLMs', 'Prompt Engineering', 'API Integration'],
        isFeatured: false
      },
      {
        title: 'Data Science Mastery',
        description: 'Advanced machine learning, deep learning, and statistical analysis techniques',
        icon: '🔬',
        duration: '6 months',
        students: '12K+ Enrolled',
        certification: 'Data Science Certificate',
        skills: ['ML', 'Deep Learning', 'Statistics', 'Python'],
        isFeatured: false
      }
    ],
    students: [
      {
        title: 'Competitive Programming',
        description: 'Master algorithms and data structures for coding interviews and competitions',
        icon: '⚡',
        duration: '3 months',
        students: '25K+ Enrolled',
        certification: 'Problem Solving Certificate',
        skills: ['DSA', 'C++', 'Problem Solving'],
        isFeatured: true
      },
      {
        title: 'Web Development Fundamentals',
        description: 'Learn HTML, CSS, JavaScript and build responsive websites from scratch',
        icon: '🌐',
        duration: '4 months',
        students: '18K+ Enrolled',
        certification: 'Web Developer Certificate',
        skills: ['HTML', 'CSS', 'JavaScript', 'Responsive Design'],
        isFeatured: false
      },
      {
        title: 'Placement Preparation',
        description: 'Complete interview preparation with mock tests, resume building, and coaching',
        icon: '🎯',
        duration: '8 weeks',
        students: '30K+ Enrolled',
        certification: 'Interview Ready Badge',
        skills: ['Interview Skills', 'DSA', 'System Design'],
        isFeatured: false
      },
      {
        title: 'Mobile App Development',
        description: 'Build iOS and Android apps using React Native and modern frameworks',
        icon: '📱',
        duration: '5 months',
        students: '10K+ Enrolled',
        certification: 'Mobile Developer Certificate',
        skills: ['React Native', 'Firebase', 'App Development'],
        isFeatured: false
      }
    ]
  }

  const currentCourses = courses[activeTab]

  return (
    <section className="section-padding bg-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-md text-center mb-4">Explore all our courses</h2>
        <p className="text-center text-white/60 mb-12">Choose your learning path based on your career goals</p>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <button
            onClick={() => setActiveTab('professionals')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'professionals'
                ? 'bg-accent text-white'
                : 'bg-secondary text-white hover:bg-secondary/80'
            }`}
          >
            For Professionals
          </button>
          <button
            onClick={() => setActiveTab('students')}
            className={`px-6 py-3 rounded-lg font-semibold transition ${
              activeTab === 'students'
                ? 'bg-accent text-white'
                : 'bg-secondary text-white hover:bg-secondary/80'
            }`}
          >
            For Students
          </button>
        </div>

        {/* Course Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {currentCourses.map((course, index) => (
            <CourseCard key={index} course={course} />
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn-secondary">
            View All Courses
          </button>
        </div>
      </div>
    </section>
  )
}
