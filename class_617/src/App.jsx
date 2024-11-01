import React from 'react'
import viteLogo from '/vite.svg'
import Produto from './Produto'


const App = () => {

  // produto que ira ser referenciado, quando for clicado
const [produto, setProduto] = React.useState(null)

// efeito para definir apenas uma vez só quando o site inicia
React.useEffect(() => {
  const produtoLocal = window.localStorage.getItem('produto')
  // verificar se o efeito nao existir
  if (produtoLocal !== null) setProduto(produtoLocal)
  
}, [])

// sanvando (a preferencia) no localStorage  do browser com Hook userEffect
React.useEffect(() => {
  // define o localStorage se for diferente de null
  if (produto !== null) window.localStorage.setItem('produto', produto)
    // a dependencia será o produto, sempre que o produto for modificado, o efeito sera acionando
}, [produto])

// funçao que eh chamada com o click nos botoes , acionando o evento
function handleClick( { target }) {
  // prorpiedade para pegar o texto de dentro do produto
  setProduto(target.innerText)
}

  return (

    <div>
      {/* pegando o produto e exibindo */}
      <h1>Preferência: {produto}</h1>

      {/* botoes com as funçoes => onClick */}
      <button onClick={handleClick} style={{marginRight: '1rem'}} className='btn btn-outline-danger'>notebook</button>
      <button onClick={handleClick} className='btn btn-outline-danger'>smartphone</button>

      {/* chamando o componete Produto e atribuindo a preferencia (produto) */}
      <Produto produto={produto} />
    </div>
  )
}

export default App
