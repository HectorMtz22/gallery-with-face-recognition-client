import './App.css'
import Gallery from './components/Gallery'
import ListOfCategories from './components/ListOfCategories'
import { getCategories } from './services/getCategories'
import { Route, Switch } from 'wouter'

function App () {
  getCategories()
    .then(data => console.log(data))
  return (
    <main className='body'>
      <aside className='sidebar'>
        <ListOfCategories />
      </aside>
      <main className='main-content'>
        <Switch>
          <Route path='/'>
            <h1>Galería</h1>
            <Gallery />
          </Route>
          <Route path='/category/:id'>
            {params => <h1>Category: {params.id}</h1>}
          </Route>
        </Switch>
      </main>
    </main>
  )
}

export default App
