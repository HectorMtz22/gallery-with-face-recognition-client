import { useState, useEffect } from 'react'
import { getPhotos } from '../../services/getPhotos'
import styles from './gallery.module.css'
import { getCategories } from '../../services/getCategories'

const Gallery = ({ category, invalidate }) => {
  const [photos, setPhotos] = useState([])
  const [categories, setCategories] = useState([])
  useEffect(() => {
    getPhotos(category)
      .then(setPhotos)
  }, [category, invalidate])

  useEffect(() => {
    getCategories()
      .then(setCategories)
  }, [])

  return (
    <main className={styles.flex_gallery}>
      {
        photos.map(photo => {
          const categoryName = categories
            .filter(({ id }) => id === photo.classification)
            .map(({ name }) => name)[0]
          return (
            <section key={photo.filename} className={styles.item}>
              <img src={photo.url} alt={photo.title} className={styles.photo} />
              <article className={styles.oculto}>
                <h2>{categoryName}</h2>
              </article>
            </section>
          )
        })
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
