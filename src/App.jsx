import React, { useState, useEffect } from 'react'
import Menu from './components/Menu.jsx'
import Player from './components/Player.jsx'
import './index.css'

function App() {
  const [videos, setVideos] = useState([])
  const [selectedVideo, setSelectedVideo] = useState(null)
  const [isPlaying, setIsPlaying] = useState(false)
  const [loading, setLoading] = useState(true)

  // Load videos from JSON
  useEffect(() => {
    async function loadVideos() {
      try {
        const response = await fetch('/videos.json')
        if (!response.ok) throw new Error('Failed to load videos')
        const data = await response.json()
        setVideos(data)
      } catch (err) {
        console.error('Error loading videos:', err)
        // Fallback with hardcoded videos
        setVideos([
          { id: 1, title: 'Canon in D', video: 'canon-in-d-clip1-web-v2.mp4', thumbnail: 'canon-image.png' },
          { id: 2, title: 'Cinn Lullaby', video: 'cinn-sleep-web.mp4', thumbnail: 'cinn-image.png' },
          { id: 3, title: 'Elsa Sleep', video: 'elsa-sleep.mp4', thumbnail: 'elsa-image.png' }
        ])
      } finally {
        setLoading(false)
      }
    }
    loadVideos()
  }, [])

  const videoInfo = videos.find(v => v.id === selectedVideo?.id)

  const handleSelectVideo = (video) => {
    setSelectedVideo(video)
  }

  const handleStartPlayer = () => {
    if (videoInfo) {
      setIsPlaying(true)
    }
  }

  const handleStopPlayer = () => {
    setIsPlaying(false)
    setSelectedVideo(null)
  }

  if (loading) {
    return (
      <div className="loading-spinner">
        <div className="spinner"></div>
      </div>
    )
  }

  return (
    <div className="app-container">
      <header className="status-bar">
        <span>Lullabies</span>
        {isPlaying && <span className="status-item active">Playing</span>}
        {!selectedVideo && <span className="status-item">Select a video</span>}
      </header>

      <main className="content-area">
        <Menu videos={videos} onSelect={handleSelectVideo} />
        <Player
          video={selectedVideo}
          onStart={handleStartPlayer}
          onStop={handleStopPlayer}
        />
      </main>
    </div>
  )
}

export default App