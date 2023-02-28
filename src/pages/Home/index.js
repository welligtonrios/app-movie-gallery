import { useEffect, useState } from "react";
import movies_db_service from '../../services/moviesDbService';
import {PRIVATE_KEY_MOVIES_DB} from '../../services/Constants/constants'

const Home = () => {

    const [filmes, setFilmes] = useState([]);

    useEffect(()=>{
        async function loadFilmes(){
            const response = await movies_db_service.get("movie/now_playing",{
                params:{
                    api_key: PRIVATE_KEY_MOVIES_DB,
                    language: "us-US",
                    page:1
                }
            });
        }
        loadFilmes();
    })

    return(
        <div>
            <h1>Home</h1>
        </div>
    );
}

export default Home;