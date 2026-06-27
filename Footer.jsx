import React from 'react'
import { Mail, Phone, MapPin, Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="bg-primary border-t border-white/10">
      {/* Main Footer */}
      <div className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center font-bold text-white">
                  CN
                </div>
                <span className="text-xl font-bold text-white">Coding Ninjas</span>
              </div>
              <p className="text-white/60 text-sm mb-4">
                Empowering engineers to build successful careers in tech
              </p>
              <div className="flex gap-3">
                <button className="p-2 bg-secondary hover:bg-accent/20 rounded-lg transition text-accent">
                  <Facebook size={18} />
                </button>
                <button className="p-2 bg-secondary hover:bg-accent/20 rounded-lg transition text-accent">
                  <Twitter size={18} />
                </button>
                <button className="p-2 bg-secondary hover:bg-accent/20 rounded-lg transition text-accent">
                  <Linkedin size={18} />
                </button>
                <button className="p-2 bg-secondary hover:bg-accent/20 rounded-lg transition text-accent">
                  <Instagram size={18} />
                </button>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-semibold text-white mb-4">For Professionals</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-accent transition">All Programs</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">Data Analytics</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">Software Dev</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">Data Science</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">Generative AI</a></li>
              </ul>
            </div>

            {/* For Students */}
            <div>
              <h4 className="font-semibold text-white mb-4">For Students</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-white/60 hover:text-accent transition">Internships</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">Bootcamps</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">Placement Prep</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">Coding Practice</a></li>
                <li><a href="#" className="text-white/60 hover:text-accent transition">DSA Mastery</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-semibold text-white mb-4">Get in Touch</h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="text-accent mt-1" size={18} />
                  <a href="mailto:support@codingnin.com" className="text-white/60 hover:text-accent transition text-sm">
                    support@codingnin.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="text-accent mt-1" size={18} />
                  <a href="tel:+919876543210" className="text-white/60 hover:text-accent transition text-sm">
                    +91 98765 43210
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="text-accent mt-1" size={18} />
                  <span className="text-white/60 text-sm">
                    Bangalore, Delhi, Mumbai
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/10 py-8">
            <div className="grid md:grid-cols-3 gap-8 items-center">
              {/* Links */}
              <div className="flex flex-wrap gap-4 text-sm">
                <a href="#" className="text-white/60 hover:text-accent transition">Terms of Use</a>
                <a href="#" className="text-white/60 hover:text-accent transition">Privacy Policy</a>
                <a href="#" className="text-white/60 hover:text-accent transition">Refund Policy</a>
              </div>

              {/* Copyright */}
              <div className="text-center text-white/60 text-sm">
                © 2024 Coding Ninjas. All rights reserved.
              </div>

              {/* Scroll to Top */}
              <div className="flex justify-end">
                <button
                  onClick={scrollToTop}
                  className="p-3 bg-secondary hover:bg-accent/20 rounded-lg transition text-accent"
                >
                  <ArrowUp size={20} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
