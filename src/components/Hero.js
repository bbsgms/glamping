import React from 'react';

export default function Hero({ children, hero }) {
  return (
    <header className={hero}>
      <div className="hero-overlay">{children}</div>
    </header>
  );
}

Hero.defaultProps = {
  hero: 'defaultHero',
};
