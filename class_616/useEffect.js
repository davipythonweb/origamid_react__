// Aula 616 - useEffect

// Todo componente possui um ciclo de vida. Os principais momentos
// acontecem quando o componente eh renderizado, atualizado ou
// destruido.

// Com o React.useEffect() podemos definir um callback
// que ira ser executado durante certos momentos do ciclo de vida
// do componente.

// exemplo:
const App = () => {
    const [contar, setContar] = React.useState(0)

    React.useEffect( () => {
        console.log('Ocorre ao renderizar e ao atualizar')
    })

    return <button onClick={() => setContar(contar + 1)}>{contar}</button>
}