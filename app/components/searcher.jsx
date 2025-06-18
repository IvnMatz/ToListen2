import { useState, useRef, useEffect } from "react";

function Results(){

    return(
        <div className="results">

        </div>
    );
}

export default function Searcher(){
    const refInput = useRef(null);
    const refer = useRef(null);
    const debounceTimeout = useRef(null);
    const [response, setResponse] = useState([]);

    function changeInput(e){
        if (debounceTimeout.current) {
            clearTimeout(debounceTimeout.current);
        }

        async function getSp(type, q){
            fetch("/api/spotifyr?type=" + type + "&q=" + q)
            .then(res => res.json())
            .then(data => {setResponse(data.token)});
        }

        debounceTimeout.current = setTimeout( ()=>{
            console.log(refInput.current.value);
            console.log(refer.current.value);

            if(refInput.current.value != "" || refer.current.value != "none"){
                getSp(refer.current.value, refInput.current.value);
            }
        }, 1000 );
    }

    useEffect(() => {
        console.log(response);
    }, [response] );

    return(
        <div className="searcher">
            <input type="text" name="inputSearch" id="search" ref={refInput} onChange={changeInput} />
            <select name="type" id="typer" ref={refer} >
                <option value="none"> Select an option </option>
                <option value="album"> Album </option>
                <option value="artist"> Artist </option>
                <option value="track"> Song </option>
            </select>
            <Results />
        </div>
    );
}