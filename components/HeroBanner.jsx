import React from 'react';
import LINK from 'next/link';
import { urlFor } from '../lib/client';

const HeroBanner = ({ heroBanner }) => {
  return (
    <div className="hero-banner-container">
      <div>
        <p className="beats-solo">{heroBanner.smallText}</p>
        <h3>{heroBanner.midText}</h3>
        <h1>{heroBanner.largeText1}</h1>
        <img
          className="hero-banner-image"
          src={urlFor(heroBanner.image)}
          alt="headphones"
        />
        <div>
          <LINK href={`/product/${heroBanner.product}`}>
            <button type="button">{heroBanner.buttonText}</button>
          </LINK>
          <div className="desc">
            <h5>Best Headphones on the market</h5>
            <p>{heroBanner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
