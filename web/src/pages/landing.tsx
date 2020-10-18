import React from 'react';
import {FiArrowRight} from 'react-icons/fi'; /*"importa o icone do pacote fi"*/
import { Link } from 'react-router-dom'; /*"usado para navegar entre as telas sem recarregar a tela por completo"*/
import '../styles/pages/landing.css';
import logoImg from "../images/Logo.svg"

function Landing(){
    return(
        <div id="page-landing">
        <div className="content-wrapper">
          <img src={logoImg} alt="OlphaHappy"/>
          <main>
            <h1>Leve felicidade para o mundo</h1>
            <p>Visite orfanatos e faça crianças felizes!</p>
          </main>
          <div className="location">
            <strong>Guarabira</strong>
            <span>Paraiba - PB</span>
          </div>
          <Link to="/app" className="enter-app"> <FiArrowRight size={26} color="rgba(0,0,0,0.6)"/></Link>
        </div>
      </div>
    );
}
export default Landing;