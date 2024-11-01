import React from 'react'

const Produto = ({produto}) => {
    // definindo um estado como reativo
  const [dados, setDados] = React.useState(null)

//   fazendo o fetch com o efeito userEffect
  React.useEffect(() => {
    // verificando se o produto eh diferente de null, para executar o efeito
    if (produto !== null)
        // fazendo o fetch na API  e já passando o valor do produto
        fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
            // transformando os dados da API da resposta para json 
            .then((response) => response.json())
            // mudando o estado dos dados para json
            .then((json) => setDados(json))
    // chamando a dependencia de produto
  }, [produto])

//   verifica se os dados forem diferentes de null, retorna os dados de baixo
  if (dados === null) return null
    return (
        <div>
            {/* pegado os dados  */}
            <h1>{dados.nome}</h1>
            <h1>R$ {dados.preco}</h1>
        </div>
  )
}

export default Produto