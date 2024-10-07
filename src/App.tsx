import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Dashboard from './components/Dashboard'
import PatientList from './components/PatientList'
import ConsultationView from './components/ConsultationView'
import BlogList from './components/BlogList'
import BlogPost from './components/BlogPost'
import Sidebar from './components/Sidebar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/*" element={
          <div className="flex min-h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 p-10">
              <Routes>
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/patients" element={<PatientList />} />
                <Route path="/consultation/:id" element={<ConsultationView />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogPost />} />
              </Routes>
            </div>
          </div>
        } />
      </Routes>
    </Router>
  )
}

export default App