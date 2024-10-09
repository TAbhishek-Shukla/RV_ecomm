import React, { useState } from 'react';
import { useProducts } from '../context/productContext';
 import '../styles/currencyformatter.css'
const CurrencyForamatter = () => {
    const {currency='INR',setCurrency}= useProducts()

    const handleCurrencyChange = (e) => {
        setCurrency(e.target.value);
    };

    return (
        <div className="currency-formatter">
            <h3>Select Currency</h3>
            <div className="radio-group">
                <div>
                    <input 
                        type="radio" 
                        id="usd" 
                        name="currency" 
                        value="USD" 
                        checked={currency === 'USD'} 
                        onChange={handleCurrencyChange} 
                    />
                    <label htmlFor="usd">USD</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="eur" 
                        name="currency" 
                        value="EUR" 
                        checked={currency === 'EUR'} 
                        onChange={handleCurrencyChange} 
                    />
                    <label htmlFor="eur">EUR</label>
                </div>
                <div>
                    <input 
                        type="radio" 
                        id="inr" 
                        name="currency" 
                        value="INR" 
                        checked={currency === 'INR'} 
                        onChange={handleCurrencyChange} 
                    />
                    <label htmlFor="inr">INR</label>
                </div>
            </div>
        </div>
    );
};


export default CurrencyForamatter;
