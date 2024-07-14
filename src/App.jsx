import './App.css'
import ListOfCategories from './components/ListOfCategories'
import { getCategories } from './services/getCategories'

function App () {
  getCategories()
    .then(data => console.log(data))
  return (
    <main className='body'>
      <aside className='sidebar'>
        <ListOfCategories />
      </aside>
      <main className='main-content'>
        <h1>Hello World</h1>
      </main>
    </main>
  )
}

export default App
