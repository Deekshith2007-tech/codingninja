import React from 'react'
import { Star } from 'lucide-react'

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: 'Aniket Kumar',
      role: 'Software Engineer at Google',
      company: 'Google',
      image: '👨‍💼',
      quote: 'The curriculum was incredibly practical and industry-focused. I got my dream job within 2 months of completing the bootcamp!',
      rating: 5
    },
    {
      name: 'Priya Sharma',
      role: 'Data Analyst at Amazon',
      company: 'Amazon',
      image: '👩‍💼',
      quote: 'Amazing mentors and a supportive community. The projects helped me build a strong portfolio that impressed recruiters.',
      rating: 5
    },
    {
      name: 'Rajesh Patel',
      role: 'Product Manager at Microsoft',
      company: 'Microsoft',
      image: '👨‍💼',
      quote: 'The AI-integrated curriculum gave me a competitive edge. I learned not just coding but how to work with modern tools.',
      rating: 5
    },
    {
      name: 'Sneha Desai',
      role: 'ML Engineer at Meta',
      company: 'Meta',
      image: '👩‍💼',
      quote: 'Outstanding learning experience! The instructors were experts and the placement support was exceptional.',
      rating: 5
    },
    {
      name: 'Vikram Singh',
      role: 'Senior Developer at Apple',
      company: 'Apple',
      image: '👨‍💼',
      quote: 'One of the best decisions I made. The program accelerated my career by years. Highly recommended!',
      rating: 5
    },
    {
      name: 'Ananya Gupta',
      role: 'Full Stack Developer at Netflix',
      company: 'Netflix',
      image: '👩‍💼',
      quote: 'The real-world projects and live sessions made learning engaging and practical. I feel job-ready now!',
      rating: 5
    }
  ]

  return (
    <section className="section-padding bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="heading-md text-center mb-4">Success Stories</h2>
        <p className="text-center text-white/60 mb-12">Hear from our alumni who've transformed their careers</p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-primary/50 border border-white/10 rounded-xl p-6 hover:border-accent/50 transition"
            >
              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="text-accent fill-accent" size={16} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-white/80 mb-6 italic">"{testimonial.quote}"</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="text-3xl">{testimonial.image}</div>
                <div>
                  <p className="font-semibold text-white">{testimonial.name}</p>
                  <p className="text-sm text-white/60">{testimonial.role}</p>
                  <p className="text-xs text-accent">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="heading-sm mb-4">Ready to become one of them?</h3>
          <button className="btn-accent">Join Our Next Batch</button>
        </div>
      </div>
    </section>
  )
}
