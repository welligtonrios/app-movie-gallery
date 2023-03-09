import { Link } from "react-router-dom";
import './error.css';

const Herror = () => {
    return (
        <div className="not-found">
            <h1>404</h1>
            <h2>Página não encontrada</h2>
            <Link to="/">VEja todos os filmes</Link>
        </div>
    );
}

export default Herror;