import { useState } from 'react'
import { HashRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import Pokedex from './components/Pokedex';
import PokemonDetail from './components/PokemonDetail';
import UserInput from './components/UserInput';
import ProtectedRoutes from './components/ProtectedRoutes';

function App() {


  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<UserInput />}/>

        <Route element={<ProtectedRoutes />}>
          <Route path='/pokedex' element={<Pokedex />}/>
          <Route path='/pokedex/:id' element={<PokemonDetail />}/>
        </Route>
      </Routes>
    </HashRouter>
  )
}

export default App
