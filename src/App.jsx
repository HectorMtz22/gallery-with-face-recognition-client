import './App.css'
import Gallery from './components/Gallery'
import ListOfCategories from './components/ListOfCategories'
import { Route, Switch } from 'wouter'
import { useState } from 'react'

function App () {
  const [invalidate, setInvalidate] = useState(false)

  return (
    <main className='body'>
      <aside className='sidebar'>
        <ListOfCategories setInvalidate={setInvalidate} />
      </aside>
      <main className='main-content'>
        <h1>Galería</h1>
        <Switch>
          <Route path='/'>
            <Gallery invalidate={invalidate} />
          </Route>
          <Route path='/category/:id'>
            {params => <Gallery category={params.id} invalidate={invalidate} />}
          </Route>
        </Switch>
      </main>
    </main>
  )
}

export default App
