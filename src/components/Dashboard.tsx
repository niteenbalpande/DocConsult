import React from 'react'
import { Calendar, Clock, Users, Video } from 'lucide-react'

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Welcome, Dr. Smith</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Calendar className="text-blue-500 mr-4" size={24} />
            <div>
              <h2 className="text-xl font-semibold">Today's Appointments</h2>
              <p className="text-3xl font-bold">8</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Clock className="text-green-500 mr-4" size={24} />
            <div>
              <h2 className="text-xl font-semibold">Upcoming Consultation</h2>
              <p className="text-lg">In 30 minutes</p>
            </div>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Users className="text-purple-500 mr-4" size={24} />
            <div>
              <h2 className="text-xl font-semibold">Total Patients</h2>
              <p className="text-3xl font-bold">1,234</p>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        <ul className="space-y-4">
          <li className="flex items-center">
            <div className="bg-blue-100 p-2 rounded-full mr-4">
              <Users className="text-blue-500" size={20} />
            </div>
            <div>
              <p className="font-semibold">New patient registered</p>
              <p className="text-sm text-gray-500">2 hours ago</p>
            </div>
          </li>
          <li className="flex items-center">
            <div className="bg-green-100 p-2 rounded-full mr-4">
              <Video className="text-green-500" size={20} />
            </div>
            <div>
              <p className="font-semibold">Consultation completed</p>
              <p className="text-sm text-gray-500">4 hours ago</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Dashboard