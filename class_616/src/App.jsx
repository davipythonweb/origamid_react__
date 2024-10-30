import React from 'react'
import viteLogo from '/vite.svg'

function App() {
  const [contar, setContar] = React.useState(0)

  React.useEffect( () => {
    console.info('Executou')
  })

  return <button className='btn btn-primary ' onClick={() => setContar(contar + 1)}>{contar}</button>
}

 
export default App
