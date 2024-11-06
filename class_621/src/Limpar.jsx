import React from "react";
import { GlobalContext } from "./GlobalContext";

const Limpar = () => {
    const {limparDados} = React.useContext(GlobalContext)
    console.log(limparDados)

    return(
        <div>
            <button className="btn btn-warning" onClick={limparDados}>
                Limpar
            </button>
        </div>
    )
}

export default Limpar