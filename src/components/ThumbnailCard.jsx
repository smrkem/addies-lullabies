import React from 'react'

function ThumbnailCard({ video, onSelect }) {
  return (
    <button
      className="thumbnail-card"
      onClick={onSelect}
      aria-label={`Play ${video.title}`}
    >
      <img
        src={video.thumbnail}
        alt={video.title}
        loading="lazy"
      />
      <span className="card-title">{video.title}</span>
    </button>
  )
}

export default ThumbnailCard