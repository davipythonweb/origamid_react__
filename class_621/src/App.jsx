import React from 'react'
import viteLogo from '/vite.svg'
import Produto  from './Produto'
import { GlobalStorage } from './GlobalContext'
import Limpar from './Limpar'

const App = () => {
  return (
    <GlobalStorage>
      <Produto />
      <Limpar />
    </GlobalStorage>
  )
}

export default App
