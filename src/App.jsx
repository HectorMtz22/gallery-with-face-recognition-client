import './App.css'
import ListOfCategories from './components/ListOfCategories'
import { getCategories } from './services/getCategories'

function App () {
  getCategories()
    .then(data => console.log(data))
  return (
    <>
      <h1>Hello World</h1>
      <ListOfCategories />
    </>
  )
}

export default App
