import React from "react";

const d = new Date();
let year = d.getFullYear();

const Footer =()=>{
    return(
        <footer className="container footer">
            <section className=" footer__container footer__box">
                <div className="footer__box--boxes">
                    <h2 className="logo__element">Manga<span className="logo__element--sec">Gate.com</span></h2>
                    <p>
                        Gates is a blog that focuses on Japanese art and anime. They feature information on Otaku conventions and other anime topics. Hear from famous anime filmmakers and artists as well as plenty of news about the art of cartoon creation in the Japanese culture.
                    </p>
                </div>
                <div className="footer__box">                        
                    <div className="form__field form__field--subscribe">
                        <label className="form__label">Subscribe</label>
                        <input className="form__input" type="text" name="subscribe" id="subscribe" placeholder="Enter your email" />
                        <button className="form__input--button">&#62;</button>
                    </div>
                </div>
            </section>
            <section className="footer__container">
                <div className="copyright">@copyright {year} MangaGates</div>
            </section>
        </footer>
    )
}


export default Footer;