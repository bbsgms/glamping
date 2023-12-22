import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DomikContext } from '../Context';


export default function InfoDomik() {
  const { info } = useParams(); //info acts as unique identifier for each of my domiks. if URL looks like this: /domik/single-standard that means details of this specific domik are retrieved
  const { getDomik } = React.useContext(DomikContext);
  const domik = getDomik(info);
  

  if (!domik) {  //for errored url-s
    return (
      <div className="error">
        <h3>Такого домика нет</h3>
        <Link to="/domiki" className="btn-primary">
          Вернуться
        </Link>
      </div>
    );
  }


  const {
    name,
    description,
    size,
    price,
    breakfast,
    images
  } = domik;

  const [...defaultImages] = images; //...spread operator to create an array images belonging to this specific domik
  

  return (
    <>
    
    <section className="infodomik">
      <div className="infodomik-images">
      {defaultImages.map((item, index) => (
              <img key={index} src={item} alt={name} />))}

      </div>
      <div className="infodomik-info">
            <article className="desc">
              <h3>Детали</h3>
              <p>{description}</p>
            </article>
            <article className="inform">
              <h3>Информация</h3>
              <h6>Цена : {price} тыс тенге</h6>
              <h6>Размер : {size} кв.м</h6>
              <h6>{breakfast && "Вам будет предоставлен бесплатный завтрак"}</h6>
            </article>
          </div>
    </section>
      
      
    </>
  )


  
}
