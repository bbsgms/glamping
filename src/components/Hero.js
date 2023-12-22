import React from 'react';

export default function Hero({ children, hero }) {//props bc i have this hero imported in several js files, so to pass children 
  return (
    <header className={hero}>
      <div className="hero-overlay">{children}</div>
    </header>
  );
}

