import { useEffect, useState} from "react";
import './filmes.css'
import {useParams, useNavigate} from "react-router-dom";

import movies_db_service from '../../services/moviesDbService';
import {PRIVATE_KEY_MOVIES_DB} from '../../services/Constants/constants';

const URL_TMDB = "https://image.tmdb.org/t/p/original/";

const Filme = () => {

    const {id} = useParams();
    const navigate = useNavigate();

    const [filme, setFilmes] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await movies_db_service.get(`movie/${id}`,{
                params:{
                    api_key: PRIVATE_KEY_MOVIES_DB,
                    language: "us-US",
                }
            }).catch(()=>{
                navigate("/", {replace:true});
                return;
            });
            
            setFilmes(response.data);
        }
        loadFilmes();
        setLoading(false);

    },[navigate, id]);

    {
        if(loading){
           return(
            <div className="filme-info">
                <h1>Carregando detalhes do filme...</h1>
             </div>
           );
        }
    }

    return(
        <div className="filme-info">
            <h1>{filme.title}</h1>
            <img src={`${URL_TMDB}${filme.backdrop_path}`} alt={filme.title}/>

            <h3>Sinopse</h3>
            <span>{filme.overview}</span>
            <strong>Avalição: {filme.vote_average} / 10</strong>

            <div className="area-buttons">
                <button>Salvar</button>
                <button>
                <a href= {`https://youtube.com/results?search_query=${filme.title}`}>
                    Trailer
                </a>
                </button>
            </div>
        </div>
    );
}

export default Filme;