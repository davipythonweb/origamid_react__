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
  
   

// O useEffect sera especialmente utilizado quando precisamos
//  definir um efeito que deve ocorrer uma vez apenas, como o fetch de dados no servidor por exemplo.


// exemplo da api = https://ranekapi.origamid.dev/json/api/produto/