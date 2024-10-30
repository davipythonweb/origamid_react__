import React from 'react'
import viteLogo from '/vite.svg'
import Produto from './Produto'


// Dica do Professor:
// Um componete eh como se fosse uma funcao JavaScript.
// O Hook eh algo especial que vai conseguir dizer pra ele:
// não renderiza novamente isso ou renderize.


const App = () => {
  const [ativo, setAtivo] = React.useState(false)
 

  return (
    <div>
      {ativo && <Produto />}
      <button className='btn btn-info ' onClick={() => setAtivo(!ativo)}>Ativar</button>
    </div>

)
}

 
export default App
