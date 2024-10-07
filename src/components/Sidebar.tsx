import React from 'react'
import { Link } from 'react-router-dom'
import { Home, Users, Video, BookOpen } from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="bg-blue-600 text-white w-64 space-y-6 py-7 px-2 absolute inset-y-0 left-0 transform -translate-x-full md:relative md:translate-x-0 transition duration-200 ease-in-out">
      <nav>
        <Link to="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <Home className="inline-block mr-2" size={20} />
          Dashboard
        </Link>
        <Link to="/patients" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <Users className="inline-block mr-2" size={20} />
          Patients
        </Link>
        <Link to="/consultation/new" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <Video className="inline-block mr-2" size={20} />
          New Consultation
        </Link>
        <Link to="/blog" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-blue-700 hover:text-white">
          <BookOpen className="inline-block mr-2" size={20} />
          Blog
        </Link>
      </nav>
    </div>
  )
}

export default Sidebar