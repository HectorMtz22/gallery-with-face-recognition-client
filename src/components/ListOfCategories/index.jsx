import { useState, useEffect } from 'react'
import { getCategories } from '../../services/getCategories'
import styles from './categories.module.css'
import { Link, useLocation } from 'wouter'

const URI = import.meta.env.VITE_URI_SERVER

const ListOfCategories = () => {
  const [categories, setCategories] = useState([])
  const [location, setLocation] = useLocation()
  const categoryActive = location.split('/')[2]

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response)
      })
  }, [])

  return (
    <main className={styles.list}>
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
        categories.map(category => (
          <Link
            key={category}
            className={`${styles.item} ${categoryActive === category ? styles.item_active : ''}`}
            href={`/categories/${category}`}
          >
            <img
              src={`${URI}/categories/${category}`}
              alt={`Categoría de ${category}`}
              className={`${styles.image} ${categoryActive === category ? styles.image_active : ''}`}
            />
            {category}
          </Link>
        ))
      }
    </main>

  )
}

export default ListOfCategories
