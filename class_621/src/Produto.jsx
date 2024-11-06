import React from 'react'
import { GlobalContext } from './GlobalContext'


const Produto = () => {
    const { dados } = React.useContext(GlobalContext)
    console.info(dados)
    if (dados === null) return null
   
    return(
        <div>
             Produto: {' '} 
            {dados.map((produto) =>(
                <li key={produto.id}>{produto.nome}</li>
            ))}
        </div>
    ) 
}

export default Produto