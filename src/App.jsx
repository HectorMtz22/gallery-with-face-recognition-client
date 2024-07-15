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
        <h1>Galería</h1>
        <Switch>
          <Route path='/'>
            <Gallery />
          </Route>
          <Route path='/category/:id'>
            {params => <Gallery category={params.id} />}
          </Route>
        </Switch>
      </main>
    </main>
  )
}

export default App
