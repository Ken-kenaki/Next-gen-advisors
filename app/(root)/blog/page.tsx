import React from 'react'
import { Calendar, FileText, Clock } from 'lucide-react'

const NoBlogPage = () => {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center">
        
        {/* Empty State Illustration */}
        <div className="relative mb-8">
          <div className="w-32 h-32 bg-gradient-to-r from-blue-100 to-indigo-100 rounded-full mx-auto flex items-center justify-center shadow-lg">
            <div className="w-24 h-24 bg-gradient-to-r from-blue-50 to-indigo-50 rounded-full flex items-center justify-center">
              <FileText className="w-12 h-12 text-blue-400" />
            </div>
          </div>
          
          {/* Decorative elements */}
          <div className="absolute -top-2 -right-2 w-10 h-10 bg-yellow-100 rounded-full flex items-center justify-center animate-pulse">
            <Calendar className="w-5 h-5 text-yellow-500" />
          </div>
          <div className="absolute -bottom-2 -left-2 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center animate-pulse delay-300">
            <Clock className="w-5 h-5 text-purple-500" />
          </div>
        </div>

        {/* Message */}
        <h1 className="text-3xl font-bold text-gray-800 mb-3">
          No Blog Posts Yet
        </h1>
        
        <p className="text-gray-600 mb-6">
          Our blog is currently brewing fresh content. 
          Check back soon for insightful articles and updates!
        </p>

        {/* Stats or Info Cards */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-blue-600">0</div>
            <div className="text-sm text-gray-500">Posts</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-green-600">Coming</div>
            <div className="text-sm text-gray-500">Soon</div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm">
            <div className="text-2xl font-bold text-purple-600">∞</div>
            <div className="text-sm text-gray-500">Ideas</div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="space-y-4">
          <button className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium py-3 rounded-lg hover:opacity-90 transition-opacity shadow-md">
            Subscribe for Updates
          </button>
          
          <p className="text-sm text-gray-500">
            Be the first to know when we publish new content
          </p>
        </div>

        {/* Optional: Loading animation */}
        <div className="mt-10">
          <div className="inline-flex items-center space-x-2 text-gray-400">
            <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-150"></div>
            <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-300"></div>
            <span className="text-sm ml-2">Content is being prepared...</span>
          </div>
        </div>

      </div>
    </div>
    </>
  )
}

export default NoBlogPage