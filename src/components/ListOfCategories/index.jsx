import { useState, useEffect } from 'react'
import { getCategories } from '../../services/getCategories'
import styles from './categories.module.css'
import { Link, useLocation } from 'wouter'
import UploadDialog from '../UploadDialog'
import { getPrimaryPhotoByCategoryId } from '../../services/getPhotos'

const URI = import.meta.env.VITE_URI_SERVER

const ListOfCategories = ({ setInvalidate }) => {
  const [categories, setCategories] = useState([])
  const [photos, setPhotos] = useState([])
  const [location, setLocation] = useLocation()
  const [showModal, setShowModal] = useState(false)
  const categoryActive = location.split('/')[2]

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response)
      })
    getPrimaryPhotoByCategoryId()
      .then(response => {
        setPhotos(response)
      })
  }, [])

  return (
    <main className={styles.list}>
      {
        showModal && (
          <UploadDialog onClose={() => setShowModal(false)} setInvalidate={setInvalidate} />
        )
      }
      <section>
        <h2>Categorias</h2>
        <Link className={styles.item} href='/'>
          <img
            src='https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png'
            alt='Todas las categorías'
            className={styles.image}
          />
          Todas
        </Link>
        {
          categories.map(({ id, name }) => {
            const url = photos.filter(({ classification }) => classification === id)[0]?.url 
              || 'https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png'

            return (
              <Link
                key={id}
                className={`${styles.item} ${categoryActive === id ? styles.item_active : ''}`}
                href={`/category/${id}`}
              >
                <img
                  src={url}
                  alt={`Categoría de ${name}`}
                  className={`${styles.image} ${categoryActive === id ? styles.image_active : ''}`}
                />
                {name}
              </Link>
            )
          })
        }
      </section>
      <button className={styles.submit_button} onClick={() => setShowModal(true)}>
        Subir imagen
      </button>
    </main>

  )
}

export default ListOfCategories
