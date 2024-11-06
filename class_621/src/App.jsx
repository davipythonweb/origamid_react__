import React from 'react'
import viteLogo from '/vite.svg'
import Produto  from './Produto'
import { GlobalStorage } from './GlobalContext'


const App = () => {
  return (
    <GlobalStorage>
      <Produto />
    </GlobalStorage>
  )
}

export default App
