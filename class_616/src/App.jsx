import React from 'react'
import viteLogo from '/vite.svg'


// Dica do Professor:
// Um componete eh como se fosse uma funcao JavaScript.
// O Hook eh algo especial que vai conseguir dizer pra ele:
// não renderiza novamente isso ou renderize.


const App = () => {
  const [contar, setContar] = React.useState(0)

 
  // primeiro argumento do useEffect é uma função
  // o segundo é uma array
  React.useEffect( () => {
    console.info('Executou')
    // o array faz o seguinte:
    // se o estado do item mudar, execute o codigo novamente, se não, não execute novamente
    // por exemplo: pode ser utilizado para puxar dados de um servidor, assim que o elemento eh renderizado inicialmente eu quero fazer uma busca dos produtos a venda.

  }, [])

  // usando mais um efeito.
  // toda vez que o contar mudar, ele atuiliza o efeito somando o valor do contar ao Titulo.
 React.useEffect( () => {
    document.title = 'Total ' + contar
  }, [contar])

  return <button className='btn btn-primary ' onClick={() => setContar(contar + 1)}>{contar}</button>
}

 
export default App
