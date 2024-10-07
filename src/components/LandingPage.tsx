import React from 'react'
import { Link } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { Stethoscope, Clock, Video, Shield, BookOpen } from 'lucide-react'

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-100 to-white">
      <Helmet>
        <title>DocConsult - Online Medical Consultations</title>
        <meta name="description" content="DocConsult provides 24/7 online medical consultations with experienced doctors. Secure, convenient, and affordable healthcare from the comfort of your home." />
      </Helmet>

      {/* Rest of the component remains the same */}
    </div>
  )
}

export default LandingPage