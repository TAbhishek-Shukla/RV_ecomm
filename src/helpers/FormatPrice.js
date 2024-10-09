import React from 'react';
import { useProducts } from '../context/productContext';

const FormatPrice = ({price}) => {
  const {currency}= useProducts()
  const conversionRates = {
    'USD': 1,
    'EUR': 0.90,
    'INR': 83.62
};

const convertedAmount = price * conversionRates[currency];
    const newPrice= currency ==='INR'? Intl.NumberFormat('en-IN',{style:'currency',currency:'INR',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2
    }).format(convertedAmount/100)
    : currency === 'USD'
    ?
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(convertedAmount)
    :
    new Intl.NumberFormat('de-DE', { style: 'currency', currency: 'EUR', minimumFractionDigits: 2, maximumFractionDigits: 2 }).format(convertedAmount)
    ;
  return newPrice;
}

export default FormatPrice;
