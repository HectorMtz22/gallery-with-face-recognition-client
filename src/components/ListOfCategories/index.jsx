import { useState, useEffect } from 'react'
import { getCategories } from '../../services/getCategories'
import styles from './categories.module.css'

const URI = import.meta.env.VITE_URI_SERVER

const ListOfCategories = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    getCategories()
      .then(response => {
        setCategories(response)
      })
  })

  return (
    <main className={styles.list}>
      <h2>Categorias</h2>
      <section className={styles.item}>
        <img
          src='https://cdn.pixabay.com/photo/2017/01/25/17/35/picture-2008484_1280.png'
          alt='Todas las categorías'
          className={styles.image}
        />
        Todas
      </section>
      {
        categories.map(category => (
          <section key={category} className={styles.item}>
            <img src={`${URI}/categories/${category}`} alt={`Categoría de ${category}`} className={styles.image} />
            {category}
          </section>
        ))
      }
    </main>

  )
}

export default ListOfCategories
