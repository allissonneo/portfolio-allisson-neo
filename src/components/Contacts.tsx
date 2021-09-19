import React from 'react';
import whatsapp from '../assets/whatsapp.png';
import github from '../assets/github.png';

import linkedin from '../assets/linkedin.png';
import '../Styles.scss';
const Contatos: React.FC = () => {
  return (
      <section className= 'section-contacts'>
          <div className="contatos">
            <div className="contact-style">

          <a className = 'contact-Icon' target="_blank" rel="noreferrer" href= "https://api.whatsapp.com/send?phone=5588996600351&text=Ol%C3%A1%2C%20estou%20entrando%20em%20contato%20atrav%C3%A9s%20do%20seu%20portf%C3%B3lio.">
              <img className='contactImage bounce' src={whatsapp} alt="Logo Whatsapp" />
            <p className="contact-title">Whatsapp</p>
          </a>
            </div>
            <div className="contact-style">

          <a  className = 'contact-Icon' target="_blank" rel="noreferrer" href= "https://github.com/allissonneo">
              <img className='contactImage bounce'src={github} alt="Logo Whatsapp" />
            <p>GitHub</p>
          </a>
            </div>
            <div className="contact-style">

          <a  className = 'contact-Icon' target="_blank" rel="noreferrer" href= "https://linkedin.com/in/allisson-neo">
              <img className='contactImage bounce' src={linkedin} alt="Logo Whatsapp" />
            <p>Linkedin</p>
          </a>
            </div>
           
          </div>
      </section>
  );
}

export default Contatos;