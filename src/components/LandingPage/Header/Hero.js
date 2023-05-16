import React from "react";
import Intersect from "../../../assets/Intersect.png";

const Hero = () => {


    return (
        <>
            <section className=" container hero__container">
                <div className="hero">
                    {/* <div className=" hero__img">fsdfsdffdgfgdfgdfgdfgdfgdgfdggdfgsdgsdfgdfgdfgdfgdsfgsdfgdfgsdfgsdgfgdfg

                    </div> */}
                    {/* <div className="hero__img">
                        <img src="./assets/Intersect.png" width='100%'></img>
                    </div> */}
                    <div className="hero__text">
                        <h2>Welcome to MangaGate</h2>
                        <p>Get the latest news on your favourite mangas, anime and manhwa around the world!</p>
                        <div className="form__field form__field--subscribe">
                            <label className="form__label">Subscribe</label>
                            <input className="form__input" type="text" name="subscribe" id="subscribe" placeholder="Enter your email" />
                            <button className="form__input--button">&#62;</button>
                        </div>
                    </div>
                    {/* <img className=" hero__img" src="./assets/Intersect.png"/> */}
                    <img className=" hero__img" src={Intersect}/>
                    <ul className="hero__list">
                        <li>Action</li>
                        <li>Comedy</li>
                        <li>Drama</li>
                        <li>Military</li>
                        <li>Fantasy</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default Hero;