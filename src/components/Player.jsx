import React from 'react'

function Player({ video, onStart, onStop }) {
  // If no video selected, show nothing
  if (!video) return null

  return (
    <div className="player-overlay" onClick={onStop}>
      <video
        className="player-fullscreen"
        autoPlay
        loop
        playsInline
        controls={false}
      >
        <source src={video.video} type="video/mp4" />
      </video>
      <button
        className="back-btn"
        onClick={(e) => {
          e.stopPropagation()
          onStop()
        }}
        aria-label="Back to menu"
      >
        ✕
      </button>
    </div>
  )
}

export default Player