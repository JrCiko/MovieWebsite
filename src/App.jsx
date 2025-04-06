import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './css/App.css'
import MovieCard from './components/MovieCard'
import Home from "./pages/Home"
import { Routes, Route } from 'react-router-dom'
import Favourites from './pages/Favourites'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  const movieNumber = 2;

  return (
    <>
    <MovieProvider>
      <NavBar />
    {/* {movieNumber === 1 ? <MovieCard movie={{title: "Film", release_date: "2026"}} /> : <MovieCard movie={{title: "aaaaaaa", release_date: "2016"}} />} */}
    <main className='main-content'>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/favourites" element={<Favourites />} />
      </Routes>
    </main>
    {/* <Text display="Hello!"/>
    <Text display="Sup?"></Text> */}
    </MovieProvider>
    
    </>
  )
}

// function Text({display}){
//   return (
//     <div>
//       <h1>{display}</h1>
//     </div>
//   )
// }
export default App
