import React from 'react';
import Hero from '../components/Hero';
import { Link } from 'react-router-dom';

export const Error = () => {
  const title = "Page Not Found";

  return (
    <>
      <Hero></Hero>
      <div className="banner">
        <h1>{title}</h1>
        <div />
        <Link to="/" className="btn-home">
          <span>На главную страницу</span>
        </Link>
      </div>
    </>
  );
};
