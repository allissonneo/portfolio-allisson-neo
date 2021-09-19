import React from 'react';
import Dio from '../assets/dio.png';
import '../Styles.scss';

const ContentTab1: React.FC = () => {
  return (
    <section className= 'grid-content'>
        <a target = "_blank" href="https://imgur.com/a/PtU1SSf" rel="noreferrer" className = "grid-image bounce" >
        <img className = 'grid-image bounce' src="https://www.technewsbb.com/media/2020/11/hM6lnfw8_400x400.jpg" alt="" />
        <h4>Amazon Web Services</h4>
        </a>
        <a target = "_blank" href="https://imgur.com/a/agXH2Pv" rel="noreferrer" className = "grid-image bounce" >
        <img className = 'grid-image bounce' src="https://yt3.ggpht.com/T-aiIk1cU_-qChpC_yAAl8ueLOy0gpfvVvHj0JPIq28rvp_ycbajcQLoYmvtz0yCzK8x7fhIZoM=s900-c-k-c0x00ffffff-no-rj" alt="" />
        <h4>VTEX</h4>
        </a>
        <a target = "_blank" href="https://imgur.com/a/iUUNJ0B" rel="noreferrer" className = "grid-image bounce" >
        <img className = 'grid-image bounce' src="https://scontent.ffor1-2.fna.fbcdn.net/v/t1.6435-9/64504199_1311371319016771_6533678321404739584_n.png?_nc_cat=100&ccb=1-5&_nc_sid=973b4a&_nc_eui2=AeFQnG0RJ74LxjhQfbXRhzPwWK31faykzsJYrfV9rKTOwkmwGmbiWEEMsMdvjNJ6FXB4Q357th5aWKJPYbIvWKvm&_nc_ohc=mWR9c5om1cYAX_-LqIR&_nc_ht=scontent.ffor1-2.fna&oh=5221712800c3b6a1865e075768b63593&oe=61699704" alt="" />
        <h4>Corebiz</h4>
        </a>
        <a target = "_blank" href="https://imgur.com/a/iUUNJ0B" rel="noreferrer" className = "grid-image bounce">
       <img src={Dio} className="grid-image bounce" alt=""/>
       <h4>Digital Inovation One</h4>
        </a>
        </section>
  );
}

export default ContentTab1;