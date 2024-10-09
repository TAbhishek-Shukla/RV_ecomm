import React from 'react';
import '../styles/pagenavigate.css'
import { NavLink } from 'react-router-dom';

const PageNavigation = ({ title }) => {
    return (
      <section className='pagenavigate-sect'>
        <NavLink to="/">Home</NavLink>/{title}
      </section>
    );
  };
  

export default PageNavigation;
