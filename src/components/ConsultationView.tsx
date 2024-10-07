import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import { Video, Mic, MicOff, VideoOff, Phone } from 'lucide-react'

const ConsultationView = () => {
  const { id } = useParams()
  const [isMuted, setIsMuted] = useState(false)
  const [isVideoOff, setIsVideoOff] = useState(false)

  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold">Consultation with Patient #{id}</h1>
      <div className="bg-white p-6 rounded-lg shadow">
        <div className="aspect-w-16 aspect-h-9 mb-4">
          <div className="bg-gray-300 rounded-lg flex items-center justify-center">
            {isVideoOff ? (
              <p className="text-gray-500">Video is off</p>
            ) : (
              <img
                src="https://source.unsplash.com/random/800x600?doctor"
                alt="Video call"
                className="w-full h-full object-cover rounded-lg"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => setIsMuted(!isMuted)}
            className={`p-2 rounded-full ${
              isMuted ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {isMuted ? <MicOff size={24} /> : <Mic size={24} />}
          </button>
          <button
            onClick={() => setIsVideoOff(!isVideoOff)}
            className={`p-2 rounded-full ${
              isVideoOff ? 'bg-red-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
          >
            {isVideoOff ? <VideoOff size={24} /> : <Video size={24} />}
          </button>
          <button className="p-2 rounded-full bg-red-500 text-white">
            <Phone size={24} />
          </button>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-xl font-semibold mb-4">Patient Notes</h2>
        <textarea
          className="w-full h-32 p-2 border border-gray-300 rounded"
          placeholder="Enter patient notes here..."
        ></textarea>
      </div>
    </div>
  )
}

export default ConsultationView