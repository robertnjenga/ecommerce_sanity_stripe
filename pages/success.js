import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { BsBagCheckFill } from 'react-icons/bs';

import { useStateContext } from '../context/StateContext';
import { runStars } from '../lib/utils';

const Success = () => {
  const { setCartItems, setTotalQuantities, setTotalPrice } = useStateContext();

  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    runStars();
  }, []);

  return (
    <div className="succes-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thank You For Your Purchase!</h2>
        <p className="email-msg">Check your email for the receipt</p>
        <p className="description">
          If you have any questions, please email me at:
          <a className="email" href="rnnjenga@gmail.com">
            rnnjenga@gmail.com
          </a>
        </p>
        <Link href="/">
          <button type="button" className="btn" width="300px">
            Continue Shopping
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Success;
