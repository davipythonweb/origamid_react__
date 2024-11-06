import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produto = () => {
    const global = React.useContext(GlobalContext)
   
  return(
    <div>
      Produto: {global.contar} <button  className='btn btn-primary' onClick={() => global.adicionarDois()}>Adicionar</button>
      </div>
  ) 
}

export default Produto