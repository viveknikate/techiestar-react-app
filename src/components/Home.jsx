import React from 'react'
import vg from '../assets/2.webp';

import {
    AiFillGoogleCircle,
    AiFillAmazonCircle,
    AiFillYoutube, 
    AiFillInstagram} from 'react-icons/ai';

import '../styles/home.scss';

const Home = () => {
    return (
        <>
            <div className={'home'}>
                <main>
                    <h1>TechieStar</h1>
                    <p>Solution for all your techical problems</p>
                </main>
            </div>

            <div className="home2">
                <img src={vg} alt="VectorGraphics" />
                <div>
                    <p>
                        We are the one only solution for tech problems you face everyday.
                        We are leading tech company whose aim is to increase the problem solving ability in children
                    </p>
                </div>
            </div>

            <div className="home3" id='about'>
                <div>
                    <h1>Who we are?</h1>
                    <p>
                        We are the one only solution for tech problems you face everyday. 
                        We are leading tech company whose aim is to increase the problem solving ability in&nbsp;children.
                        <br />
                        The advance of technology is based on making it fit in so 
                        that you don't really even notice it, so it's part of everyday life.
                    </p>
                </div>
            </div>

            <div className="home4" id='brand'>
                <div>
                    <h1>Brands</h1>
                    <article>
                    <div style={{
                            animationDelay:"0.3s",
                        }}>
                            <AiFillGoogleCircle />
                            <p>Google</p>
                        </div>

                        <div style={{
                            animationDelay:".5s",
                        }}>
                            <AiFillYoutube />
                            <p>YouTube</p>
                        </div>

                        <div style={{
                            animationDelay:".7s",
                        }}>
                            <AiFillInstagram />
                            <p>Instagram</p>
                        </div>

                        <div style={{
                            animationDelay:"1s",
                        }}>
                            <AiFillAmazonCircle />
                            <p>Amazon</p>
                        </div>
                    </article>
                </div>
            </div>
        </>
    )
}

export default Home
