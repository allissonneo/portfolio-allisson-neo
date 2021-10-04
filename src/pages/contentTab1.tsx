import React from 'react';
import Dio from '../assets/dio.png';
import '../Styles.scss';

const ContentTab1: React.FC = () => {
  return (
    <section className= 'grid-content'>
        <a target = "_blank" href="https://imgur.com/a/PtU1SSf" rel="noreferrer" className = "grid-image bounce" >
        <img className = 'grid-image bounce' src="https://www.technewsbb.com/media/2020/11/hM6lnfw8_400x400.jpg" alt="logo amazon" />
        <h4>Amazon Web Services</h4>
        </a>
        <a target = "_blank" href="https://imgur.com/a/agXH2Pv" rel="noreferrer" className = "grid-image bounce" >
        <img className = 'grid-image bounce' src="https://yt3.ggpht.com/T-aiIk1cU_-qChpC_yAAl8ueLOy0gpfvVvHj0JPIq28rvp_ycbajcQLoYmvtz0yCzK8x7fhIZoM=s900-c-k-c0x00ffffff-no-rj" alt="logo vtex" />
        <h4>VTEX</h4>
        </a>
        <a target = "_blank" href="https://imgur.com/a/iUUNJ0B" rel="noreferrer" className = "grid-image bounce" >
        <img className = 'grid-image bounce' src="https://www.amvo.org.mx/wp-content/uploads/2020/02/Corebiz.jpg" alt="logo core" />
        <h4>Corebiz</h4>
        </a>
        <a target = "_blank" href="https://imgur.com/a/iUUNJ0B" rel="noreferrer" className = "grid-image bounce">
       <img src={Dio} className="grid-image bounce" alt="logo dio"/>
       <h4>Digital Inovation One</h4>
        </a>
        </section>
  );
}

export default ContentTab1;
