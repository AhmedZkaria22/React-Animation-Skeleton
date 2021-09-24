import React, { useEffect, useState } from 'react';
import '../styles/Hero.css';
import '../styles/General.css';

function Hero() {

    const [payloadVals, setPayloadVals] = useState(false);

    useEffect(() => {
        setTimeout(() => {
            setPayloadVals(true);
        }, 2000);
    }, []);

    return (
        <>
        { (!payloadVals) 
        ? <div className={'hero'}>
            <div className="skeletonWrapper" style={{gridColumn: '1 / 3'}}>
                <span className={'skeletonWrapper__title'}></span>
                <span className={'skeletonWrapper__text'}></span>
                <span className={'skeletonWrapper__text'}></span>
                <span className={'skeletonWrapper__button'}></span>
            </div> 
            <div className="skeletonWrapper azDFlexCC hero__imgs">
                <span className={'skeletonWrapper__img'}></span>
                <span className={'skeletonWrapper__text'}></span>
            </div>
        </div>
        : <div className={'hero'}>
            <div className="hero__desc">
                <h1>{'React reveal & Skeleton'}</h1>
                <p> This react app built using react reveal liberary to animate cards , it's has a skeleton design using css classes , there are 3 moods : skeleton , react reveal animations and both. </p>
                <button>Scroll Down</button>
            </div>
            <div className="hero__imgs">
                <img src='https://icon-library.com/images/animation-icon-png/animation-icon-png-24.jpg' alt='img' />
                <span> {'React reveal & Skeleton'} </span>
            </div>
        </div>
        }
        </>
    )
}

export default Hero
