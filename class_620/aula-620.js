// createContext

// o o contexto ira permitir passarmos dados/estado a todos os
// componentes, sem a necessidade de utilizar propriedades.
// Serve principalmente para dados/estados globais como exempl:
// dados do usuario logado.

import React from 'react'

const UserContext = React.createContext()

export default UserContext