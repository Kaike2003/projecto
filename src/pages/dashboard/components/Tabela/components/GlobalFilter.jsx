import React from "react";
import "./GlobalFilter.css"
import { Search } from "lucide-react";

export default function GlobalFilter({filter, setFilter}){

    return(
        <>

        <span> 
            <Search className="search_input_tabela"></Search>
            <input 
            type="text" 
            name="" 
            id="search_input_tabela_filter"
            value={filter || ''}
            onChange={(e)=>{
                return (
                    setFilter((old)=>{
                        return old = e.target.value
                    })
                )
            }}
            placeholder={"Pesquisar"}
            />

        </span>
        
        

        </>
    )

}