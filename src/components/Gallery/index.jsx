import { useState, useEffect } from 'react'
import { getPhotos } from '../../services/getPhotos'
import styles from './gallery.module.css'

const Gallery = () => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    getPhotos()
      .then(setPhotos)
  }, [])
  return (
    <main className={styles.flex_gallery}>
      {
        photos.map(photo => (
          <section key={photo.filename} className={styles.item}>
            <img src={photo.url} alt={photo.title} className={styles.photo} />
            <article className={styles.oculto}>
              <h2>{photo.classification}</h2>
            </article>
          </section>
        ))
      }
    </main>
  )
}

export default Gallery
