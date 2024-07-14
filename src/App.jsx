import './App.css'
import { getCategories } from './services/getCategories'

function App () {
  getCategories()
    .then(data => console.log(data))
  return (
    <>
      <h1>Hello World</h1>
    </>
  )
}

export default App
