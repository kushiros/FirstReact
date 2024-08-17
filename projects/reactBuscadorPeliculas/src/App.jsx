import { useState } from 'react'
import './App.css'

import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'



function App() {
  const {movies : mappedMovies} = useMovies()
  const [query,setQuery] = useState()

  const handleSubmit = (event) =>{
    event.preventDefault()
    const data = new window.FormData(event.target)
    const query = data.get('query')
    console.log(query)
  }

  return (

    <div className='page'>
    <header>
    <h1>prueba tecnica</h1>
      <form className='form'onSubmit={handleSubmit}>
        <input name='query' placeholder='avengers, robocop,matrix. . .'type="text" />
        <button type='subtmit'>buscar</button>
      </form> 
    </header>
   
      <main>
        <Movies movies={mappedMovies}/>
        resultados
      </main>

    </div>
  )
}

export default App
