//to display a preview of domik. unlike infodomik this js shows just a small info eg name and img0 on the grid

import React from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types';
import defaultImg from "../images/room-1.jpeg";

export default function Domik({domik}) {
const{info, images} = domik;

  return (
    <article className = "domik"> 
    <div className= "img-container">
      <img src = {images[0] || defaultImg} alt = " domik"/> 
     
      <Link to={`/domiki/${info}`} className="btn-primary domik-link"> Подробнее

      </Link>
      </div>
      
      
    
     </article>
  )
}

Domik.propTypes = {
  domik:PropTypes.shape({
    name: PropTypes.string.isRequired,
    info: PropTypes.string.isRequired,
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
  }

  )
}
