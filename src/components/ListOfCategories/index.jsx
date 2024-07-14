import { useState, useEffect } from 'react'
import { getCategories } from '../../services/getCategories'
import styles from './categories.module.css'

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
      {
        categories.map(category => (
          <section key={category} className={styles.item}>
            {category}
          </section>
        ))
      }
    </main>

  )
}

export default ListOfCategories
