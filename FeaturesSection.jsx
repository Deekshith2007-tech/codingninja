import React from 'react'
import { CheckCircle, Zap, Users, Trophy, BookOpen, Briefcase } from 'lucide-react'

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="text-accent" size={32} />,
      title: 'AI-Integrated Curriculum',
      description: 'Learn with cutting-edge AI tools integrated into every module for enhanced learning'
    },
    {
      icon: <Briefcase className="text-accent" size={32} />,
      title: '15+ Industry Projects',
      description: 'Work on real-world projects that match industry standards and build your portfolio'
    },
    {
      icon: <Trophy className="text-accent" size={32} />,
      title: '95% Placement Rate',
      description: 'Our graduates secure positions at top tech companies with competitive packages'
    },
    {
      icon: <Users className="text-accent" size={32} />,
      title: 'Lifetime Community',
      description: 'Access to exclusive alumni network and ongoing mentorship from industry experts'
    },
    {
      icon: <BookOpen className="text-accent" size={32} />,
      title: 'Comprehensive Learning',
      description: 'Self-paced modules with live sessions, doubt clearing, and personalized guidance'
    },
    {
      icon: <CheckCircle className="text-accent" size={32} />,
      title: 'Job Guarantee',
      description: 'Get placed or your money back - we stand by the quality of our programs'
    }
  ]

  return (
    <section className="section-padding bg-gradient-to-b from-secondary/50 to-primary">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-md text-center mb-16">Why choose our programs?</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-secondary/30 border border-white/10 rounded-xl p-8 hover:border-accent/50 transition group"
            >
              <div className="mb-4 p-3 bg-accent/10 rounded-lg w-fit group-hover:bg-accent/20 transition">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Additional Benefits */}
        <div className="mt-20 bg-gradient-to-r from-accent/10 to-accent/5 border border-accent/30 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h3 className="heading-sm mb-6">Complete Learning Experience</h3>
            <p className="text-white/70 mb-8">
              From fundamentals to advanced concepts, our comprehensive programs cover everything you need to excel in your chosen field. Get hands-on experience with the latest technologies, build a strong portfolio, and land your dream job.
            </p>
            <button className="btn-accent">Start Learning Today</button>
          </div>
        </div>
      </div>
    </section>
  )
}
