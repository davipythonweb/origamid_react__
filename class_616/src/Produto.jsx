import React from 'react'
import viteLogo from '/vite.svg'


const Produto = () => {

    React.useEffect( () => {
        function handleScroll(event) {
            console.info(event)
        }
        window.addEventListener('scroll', handleScroll)

        // esta funcao de retorno so ocorre, quando o elemento some da tela.
        return () => {
            // OBS: para tirar o evento, tem que ter definido ele como uma funcao.
            window.removeEventListener('scroll', handleScroll)
        }

        // array de dependencia unica
    }, [])

    return (
    <div style={{height:"200vh"}}>
        <p>Meu Produto</p>
        </div>
  )
}

export default Produto