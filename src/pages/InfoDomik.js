import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { DomikContext } from '../Context';
import StyledHero from "../components/StyledHero";


export default function InfoDomik() {
  const { info } = useParams();
  const { getDomik } = React.useContext(DomikContext);

  const domik = getDomik(info);
  

  if (!domik) {
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

  const [main, ...defaultImages] = images;
  console.log(defaultImages);

  return (
    <>
    <StyledHero img={images[0] || this.state.defaultBcg}></StyledHero>
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
