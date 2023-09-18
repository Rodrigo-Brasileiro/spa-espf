import React from "react";
import { useParams } from "react-router";

export default function EditarProdutos (){

    document.title = "Editar Produtos";

    const{id} = useParams()

    return(
        <div>
            <h1>EditarProdutos</h1>
            <h2>Produto selecionado: {id}</h2>        
        
        
        </div>
   
    )
}