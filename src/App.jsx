import Cabecalho from "./components/cabecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg";
import style from "./app.module.css";
import { Outlet } from "react-router-dom";

export default function App() {
  let viteLogoAlt = "Vite Logo"
  return (
    <>
      <h1 className={style.titulo}>APP - Componente principal!</h1>
      <div className={style.container}>
        {/* Iniciando a área do cabeçalho */}
        <Cabecalho />

        <Outlet/>

        {/* Iniciando a área do rodapé */}
        <Rodape />
      </div>
    </>
  );
}
