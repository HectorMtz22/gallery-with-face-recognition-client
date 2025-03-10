import { useState, useEffect } from 'react'
import { getPhotos } from '../../services/getPhotos'
import styles from './gallery.module.css'

const Gallery = ({ category, invalidate }) => {
  const [photos, setPhotos] = useState([])
  useEffect(() => {
    getPhotos(category)
      .then(setPhotos)
  }, [category, invalidate])
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
      {
        photos.length === 0 && (
          <h2 className={styles.center}>
            No hay fotos para mostrar.
            <br />
            Intenta subir una imagen
          </h2>
        )
      }
    </main>
  )
}

export default Gallery
