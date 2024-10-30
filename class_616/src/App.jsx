import React from 'react'
import viteLogo from '/vite.svg'


// Dica do Professor:
// Um componete eh como se fosse uma funcao JavaScript.
// O Hook eh algo especial que vai conseguir dizer pra ele:
// não renderiza novamente isso ou renderize.


const App = () => {
  const [contar, setContar] = React.useState(0)
  const [dados, setDados] = React.useState(null)
 
  React.useEffect( () => {
    fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
    .then(Response => Response.json())
    .then(json => setDados(json))
   
  }, [])

  return <button className='btn btn-primary ' onClick={() => setContar(contar + 1)}>{contar}</button>
}

 
export default App
