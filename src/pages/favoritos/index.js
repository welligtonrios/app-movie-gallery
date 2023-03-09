import { useEffect, useState } from "react";
import './favoritos.css';
import { toast } from 'react-toastify';

import { Link } from "react-router-dom";

const Favoritos = () => {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        const myList = localStorage.getItem("@primeFlix");
        setFilmes(JSON.parse(myList) || []);

    },[]);

    function movie_remove(filmeId){
        const newList = filmes.filter( (filme)=> {
           return (filme.id !== filmeId);
        });

        setFilmes(newList);
        localStorage.setItem("@primeFlix", JSON.stringify(newList));
        toast.success("Filme removido com sucesso!!");
    }

    return (
        <div className="meus-filmes">
            <h1>Meus filmes</h1>
            <ul>
                {
                    filmes.map((filme)=>{
                        return(
                            <li key={filme.id}>
                                <span>{filme.title}</span>
                                <div>
                                    <Link to={`/filme/${filme.id}`}>Ver detalhes</Link>
                                    <button onClick={()=>movie_remove(filme.id)}>Excluir</button>
                                </div>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
    );
}

export default Favoritos;