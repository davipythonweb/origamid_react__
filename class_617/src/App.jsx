import React from 'react'
import viteLogo from '/vite.svg'


const App = () => {
  
const [produto, setProduto] = React.useState(null)

function handleClick( { target }) {
  setProduto(target.innerText)
}

  return (

    <div>
      <h1>Preferência: {produto}</h1>
      <button onClick={handleClick} style={{marginRight: '1rem'}}>notebook</button>
      <button onClick={handleClick}>smartphone</button>
    </div>
  )
}

export default App
