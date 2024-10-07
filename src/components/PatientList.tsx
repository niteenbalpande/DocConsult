import React from 'react'
import { Link } from 'react-router-dom'

const patients = [
  { id: 1, name: 'John Doe', age: 35, lastVisit: '2023-03-15' },
  { id: 2, name: 'Jane Smith', age: 28, lastVisit: '2023-04-02' },
  { id: 3, name: 'Bob Johnson', age: 42, lastVisit: '2023-03-30' },
]

const PatientList = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Patient List</h1>
      <div className="bg-white shadow-md rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Age</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Last Visit</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {patients.map((patient) => (
              <tr key={patient.id}>
                <td className="px-6 py-4 whitespace-nowrap">{patient.name}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.age}</td>
                <td className="px-6 py-4 whitespace-nowrap">{patient.lastVisit}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <Link
                    to={`/consultation/${patient.id}`}
                    className="text-blue-600 hover:text-blue-900"
                  >
                    Start Consultation
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default PatientList