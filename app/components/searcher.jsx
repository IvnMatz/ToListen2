import { useState, useRef } from "react";

function Results(){

    return(
        <div className="results">

        </div>
    );
}

export default function Searcher(){
    const refInput = useRef(null);

    function changeInput(e){

        setTimeout( ()=>{
            
        }, 1000 );
    }

    return(
        <div className="searcher">
            <input type="text" name="inputSearch" id="search" ref={refInput} onChange={changeInput} />
            <Results />
        </div>
    );
}