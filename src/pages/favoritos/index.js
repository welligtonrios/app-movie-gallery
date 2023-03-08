import { useEffect, useState } from "react";
import './favoritos.css'
import { Link } from "react-router-dom";

const Favoritos = () => {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{

        const myList = localStorage.getItem("@primeFlix");
        setFilmes(JSON.parse(myList) || []);

    },[]);

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
                                    <button>Excluir</button>
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