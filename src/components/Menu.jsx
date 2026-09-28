import React from 'react'
import ThumbnailCard from './ThumbnailCard.jsx'

function Menu({ videos, onSelect }) {
  const gridCols = videos.length <= 2 ? '2' : videos.length <= 4 ? '3' : '4'

  return (
    <div className={`thumbnail-grid cols-${gridCols}`}>
      {videos.map(video => (
        <ThumbnailCard
          key={video.id}
          video={video}
          onSelect={() => onSelect(video)}
        />
      ))}
    </div>
  )
}

export default Menu