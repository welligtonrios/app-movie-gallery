import { useEffect, useState } from "react";
import movies_db_service from '../../services/moviesDbService';
import {PRIVATE_KEY_MOVIES_DB} from '../../services/Constants/constants';
import { Link } from "react-router-dom";
import './home.css';

const URL_TMDB = "https://image.tmdb.org/t/p/original/";

const Home = () => {

    const [filmes, setFilmes] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await movies_db_service.get("movie/now_playing",{
                params:{
                    api_key: PRIVATE_KEY_MOVIES_DB,
                    language: "us-US",
                    page:1
                }
            });
            setFilmes(response.data.results.slice(0,10));
        }
        loadFilmes();
        setLoading(false);
    });

    {
        if(loading === true){
           return(
            <div className="loading">
                <h1>Carregando filmes...</h1>
            </div>
           );
        }
    }

    return(
        <div className="container">
            <div className="lista-filmes">
                { filmes.map((filme)=>{
                   return(
                    <article key={filme.id}>
                        <strong>{filme.title}</strong>
                        <img src={`${URL_TMDB}${filme.poster_path}`} alt={filme.title}/>
                        <Link to={`/filme/${filme.id}`}>Acessar</Link>
                    </article>
                   );
                })}
            </div> 
        </div>
    );
}

export default Home;