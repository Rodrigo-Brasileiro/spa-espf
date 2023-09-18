import {Link} from "react-router-dom"

export default function Cabecalho() {
    return (
      <>
        <header>
          <h1>Vite+React coded by - RM98952</h1>
          <nav>
            <ul>
              <li><Link to="/">Homem</Link></li>
              <li><Link to="/produtos">produtos</Link></li>
              <li><Link to="/editar/produtos/1">Editar</Link></li>
            </ul>
          </nav>
        </header>
      </>
    );
  }