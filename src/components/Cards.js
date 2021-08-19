import React from 'react';
import CardItem from './CardItem';
import './Cards.css';
import Img9 from '../images/img-9.jpg';
import Img2 from '../images/img-2.jpg';
import Img10 from '../images/img-10.jpg';
import Img1 from '../images/img-1.jpg';
import Img5 from '../images/img-5.jpg';

function Cards() {
    return (
        <div className="cards">
            <h1>Discover the Beauty of the World around you!</h1>
            <div className="card__container">
                <div className="card__wrapper">
                    <ul className="card__items">
                        <CardItem
                            src={Img9}
                            text="Experience the incredible view from the tops of the Tatra mountains in eastern Slovakia"
                            label="Adventure"
                            path="/services"
                        />
                        <CardItem
                            src={Img2}
                            text="Live the outdoor dream of rowing accross the mountain lakes of Alaska"
                            label="Relaxation"
                            path="/traverse-web/services"
                        />
                    </ul>
                    <ul className="card__items">
                        <CardItem
                            src={Img1}
                            text="See a whole new horizon from the coast of New York City"
                            label="Discovery"
                            path="/traverse-web/services"
                        />
                        <CardItem
                            src={Img5}
                            text="Be Astounded by the natural beauty of Arches National Park in Southern Utah, USA"
                            label="Adventure"
                            path="/traverse-web/services"
                        />
                        <CardItem
                            src={Img10}
                            text="Travel through the Incredible Islands of Bali on a 15 day private cruise"
                            label="Luxury"
                            path="/traverse-web/services"
                        />
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Cards
