import React from 'react';

import '../Styles.scss';
import FotoPerfil from '../assets/MyPost.png'
import Titles from './Titles';


const Header: React.FC = () => {
  return (
    <>
      <header>
        <div className="Capa">
          <img className="Foto-Capa" src="https://images.unsplash.com/photo-1489257900339-13e688fb85fd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&h=160&q=0" alt="Foto de Capa" />
        </div>
        <div className="Capa">
          <img className="imgPerfil" src={FotoPerfil} alt="Foto do Perfil"  />
        </div>
      </header>
        <Titles/>
        </>
  );
}

export default Header;