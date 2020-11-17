// import {useState,useEffect} from 'react';
import quranCaligraphy from '../assets/homepage/quranCaligraphy.png'
import './banner.css';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

export default function Banner(props) {
    return (
        <div id='banner'>
            <section id="QuranCaligraphySection">
                <Fade bottom>
                    <img src={quranCaligraphy} />
                </Fade>
            </section>
            <section id="bannerContentSection">
                <Zoom left cascade>
                    <h1>
                        YOUR JOURNEY TO
                        THE GLORIOUS QURAN
                     </h1>
                </Zoom>
                <Zoom right cascade>
                    <h3>
                        Learn with the best Tutors you choose for Tajweed, Recitation,
                        Hifz and Arabic lessons, in your feasible timings...
                    </h3>
                </Zoom>
            </section>
        </div>
    )
}