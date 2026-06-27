import React from 'react'
import { Clock, Users, Award, Code } from 'lucide-react'

const CourseCard = ({ course }) => {
  return (
    <div className="bg-secondary/30 border border-white/10 rounded-xl overflow-hidden hover:border-accent/50 transition group cursor-pointer">
      {/* Course Image */}
      <div className="h-40 bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center overflow-hidden relative">
        <div className="text-5xl opacity-20 group-hover:scale-110 transition">{course.icon}</div>
        {course.isFeatured && (
          <div className="absolute top-4 right-4 bg-accent text-white text-xs font-bold px-3 py-1 rounded-full">
            Recommended
          </div>
        )}
      </div>

      {/* Course Info */}
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2">{course.title}</h3>
        <p className="text-white/60 text-sm mb-4 line-clamp-2">{course.description}</p>

        {/* Course Details */}
        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Clock size={16} className="text-accent" />
            <span>{course.duration}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Users size={16} className="text-accent" />
            <span>{course.students}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-white/70">
            <Award size={16} className="text-accent" />
            <span>{course.certification}</span>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-6 flex flex-wrap gap-2">
          {course.skills.map((skill) => (
            <span key={skill} className="text-xs bg-accent/10 text-accent px-3 py-1 rounded-full border border-accent/30">
              {skill}
            </span>
          ))}
        </div>

        {/* CTA Button */}
        <button className="w-full btn-accent text-sm">View Details</button>
      </div>
    </div>
  )
}

export default CourseCard
