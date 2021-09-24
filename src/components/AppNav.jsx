import React, { useEffect, useState } from 'react'
import '../styles/AppNav.css';
import '../styles/General.css';

function AppNav({setNavType, setBothListener}) {

    const [navListener, setNavListener] = useState(false);    

    useEffect(() => {
      setTimeout(() => {
        setNavListener(true);
      }, 2000);
    }, []);

    const changeListener = () => {
        setTimeout(() => {
            setBothListener(true);
        }, 2000)
    }

    return (
        <>
        { (!navListener) 
        ? <div className={'appNav skeletonWrapper'}>
                <span className={'skeletonWrapper__text'}></span>
                <span className={'skeletonWrapper__text'}></span>
                <span className={'skeletonWrapper__text'}></span>
        </div>
        : <div className={'appNav'}>
            <span className={'appNav__item'} onClick={() => setNavType('Skeleton')}> Skeleton </span>
            <span className={'appNav__item'} onClick={() => {setNavType('Both'); setBothListener(false); changeListener();}}> Both </span>
            <span className={'appNav__item'} onClick={() => setNavType('ReactReveal') }> React-Reveal </span>
        </div>        
        }
        </>
    )
}

export default AppNav
