import React, { useState } from 'react'
import { ChevronDown, ArrowRight } from 'lucide-react'

export default function CourseFinder() {
  const [formData, setFormData] = useState({
    experience: '',
    topic: '',
    name: '',
    phone: '',
    email: ''
  })
  const [showResult, setShowResult] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.experience && formData.topic && formData.name && formData.phone && formData.email) {
      setShowResult(true)
      setTimeout(() => setShowResult(false), 5000)
    }
  }

  return (
    <section className="section-padding bg-secondary/50">
      <div className="max-w-6xl mx-auto">
        <h2 className="heading-md text-center mb-4">Ready to become a top talent?</h2>
        <p className="text-center text-white/60 mb-12 max-w-2xl mx-auto">
          Find the perfect course tailored to your experience and goals
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-primary/50 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
            <h3 className="text-xl font-semibold mb-6 flex items-center gap-2">
              <span className="w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center text-sm">1</span>
              Let's find the right course for you
            </h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Experience Level */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Your Experience</label>
                <div className="space-y-3">
                  {['Professional - Technical', 'Professional - Non-Technical', 'College Student - Final Year', 'College Student - Early Year', 'Fresher'].map((option) => (
                    <label key={option} className="flex items-center gap-3 cursor-pointer">
                      <input
                        type="radio"
                        name="experience"
                        value={option}
                        checked={formData.experience === option}
                        onChange={handleInputChange}
                        className="w-4 h-4 accent-accent"
                      />
                      <span className="text-white">{option}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/* Topic Interest */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Topic of Interest</label>
                <select
                  name="topic"
                  value={formData.topic}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-secondary border border-white/20 text-white rounded-lg focus:border-accent outline-none transition"
                >
                  <option value="">Select a topic</option>
                  <option value="data-analytics">Data Analytics</option>
                  <option value="software-dev">Software Development</option>
                  <option value="data-science">Data Science</option>
                  <option value="generative-ai">Generative AI</option>
                  <option value="cloud-computing">Cloud Computing</option>
                  <option value="devops">DevOps</option>
                </select>
              </div>

              {/* Contact Info */}
              <div>
                <label className="block text-sm font-medium text-white mb-3">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  placeholder="Enter your name"
                  className="w-full px-4 py-3 bg-secondary border border-white/20 text-white rounded-lg focus:border-accent outline-none transition placeholder:text-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 bg-secondary border border-white/20 text-white rounded-lg focus:border-accent outline-none transition placeholder:text-white/50"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-white mb-3">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-secondary border border-white/20 text-white rounded-lg focus:border-accent outline-none transition placeholder:text-white/50"
                />
              </div>

              <button
                type="submit"
                className="w-full btn-accent flex items-center justify-center gap-2"
              >
                Find your course
                <ArrowRight size={20} />
              </button>

              <p className="text-xs text-white/50 text-center">
                We'll help match you with the perfect learning path for your career goals
              </p>
            </form>
          </div>

          {/* Result Card */}
          <div className="flex items-center justify-center">
            {showResult ? (
              <div className="bg-gradient-to-br from-accent/20 to-accent/5 border-2 border-accent/30 rounded-2xl p-8 text-center animate-bounce">
                <h3 className="text-2xl font-bold text-accent mb-2">Perfect Match Found!</h3>
                <p className="text-white mb-4">We've identified the ideal course based on your profile</p>
                <div className="text-sm text-white/70">
                  <p>📧 Check your email for details</p>
                  <p>📞 Our counselor will call you shortly</p>
                </div>
              </div>
            ) : (
              <div className="bg-secondary/50 border border-white/10 rounded-2xl p-8 text-center">
                <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <ChevronDown className="text-accent animate-bounce" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">Fill the form</h3>
                <p className="text-white/60">Complete your details to get personalized course recommendations</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}
