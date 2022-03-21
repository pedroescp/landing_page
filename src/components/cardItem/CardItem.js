import { Link } from "react-router-dom";
import React from "react";

function CardItem() {
    <>
        <li className="cards__item">
            <Link 
            className="cards__item__link">
                <figure className="cards__item__figure">
                    <img src="/" alt="Travel" className="cards__item__img" />
                </figure>
                <div className="cards__item__info">
                    <h5 className="cards__item__text"></h5>
                </div>
            </Link>
        </li>
    </>
}

export default CardItem;