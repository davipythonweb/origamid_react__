// Aula 616 - useEffect


// ESTADO => O estado de uma aplicacao representa as caracteristicas dela
//  naquele momento. Por exemplo: Os dados do usuario foram carregados,
// o botao esta ativo, o usuario esta na pagina de contato e etc.

// Hooks ==> São funcoes especiais do React que permitem
// controlarmos o estado e o ciclo de vida de componentes
// funcionais.


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

const App2 = () => {
    const [contar, setContar] = React.useState(0)
    const [dados, setDados] = React.useState(null)
   
    React.useEffect( () => {
      fetch('https://ranekapi.origamid.dev/json/api/produto/notebook')
      .then((response) => response.json())
      .then((json) => setDados(json))
    }, [])
  
    return (
      <div>
  
        {dados && (
          <div>
            <h1>{dados.nome}</h1>
            <p>R$ {dados.preco * contar}</p>
          </div>
        )}
        <button className='btn btn-primary ' onClick={() => setContar(contar + 1)}>{contar}</button>
      </div>
  
  )
  }


// DICA: PODEMOS ter diversos useEffect no nosso codigo.
// O ideal eh separarmos efeitos diferentes em useEffect diferentes.


// DICA==> Antes de Desmontar

// As vezes precisamos executar um efeito sempre que um
// componente for desmontado. Para isso utilizamos um callback no
// retorno do callback do efeito.

const Produto2 = () => {

    React.useEffect( () => {
        // utilizamod o useEffect para adicionarmos eventos direto ao
        function handleScrol(event) {
            console.info(event)
        }
        window.addEventListener('scroll', handleScrol)
        // Limpa o evento quando o elemento eh removido do DOM 
        return () => {
            window.removeEventListener('scroll', handleScrol)
        }
    }, [])
}




