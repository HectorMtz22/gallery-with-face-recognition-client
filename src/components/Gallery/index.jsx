import { useState, useEffect } from 'react'
import { getPhotos } from '../../services/getPhotos'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    getPhotos()
      .then(setPhotos)
  }, [])
  return (
    <div>
      {
        photos.map(photo => (
          <img key={photo.id} src={photo.url} alt={photo.title} />
        ))
      }
    </div>
  )
}

export default Gallery
