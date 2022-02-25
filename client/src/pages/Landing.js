import React from 'react';

import main from "../assets/images/main-alternative.svg";
import Wrapper from "../assets/wrappers/LandingPage"
import {Logo}  from '../components';
import {Link} from "react-router-dom";


export default function Landing() {
  return (
    <Wrapper>
    <nav>
     <Logo />
    </nav>
    <div className="container page">
    <div className='info'>
        <h1>
            job <span>tracking</span> app
        </h1>
        <p>I'm baby flannel fingerstache portland,
         williamsburg quinoa woke YOLO 3 wolf moon.
          Cronut banjo austin, narwhal kinfolk 
          pickled chicharrones brunch quinoa cred organic tacos before they sold out. 
          Crucifix viral photo booth try-hard. </p>
          <Link to="/register"> Login/Register </Link>
    </div>
    <img src={main} alt="job hunt" className='img main-img'/>

    </div>

   </Wrapper>
  )
}


