import React from 'react';
import '../styles/listview.css'
import { NavLink } from 'react-router-dom';
import FormatPrice from '../helpers/FormatPrice';
const ListView = ({ products }) => {
    return (
        <section className="list-section">
            <div className="container grid">
                {products.map((curElem, index) => {
                    const { id, name, image, price, description } = curElem;
                    return (
                        <div className="card grid grid-two-col" key={id+index}>
                            <figure>
                                <img src={image} alt={name} />
                            </figure>

                            <div className="card-data">
                                <h3>{name}</h3>
                                <p>
                                    <FormatPrice price={price} />
                                </p>
                                <p>{description.slice(0, 90)}...</p>

                                <NavLink to={`/singleproduct/${id}`} className="btn-main">
                                    <button className="btn">Read More</button>
                                </NavLink>
                            </div>
                        </div>
                    );
                })}
            </div>
        </section>
    );
}

export default ListView;
