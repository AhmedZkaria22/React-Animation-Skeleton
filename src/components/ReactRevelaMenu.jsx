import React, { useEffect, useState } from 'react';
import '../styles/Menus.css';
import '../styles/General.css';

function ReactRevelaMenu({setAnmyType}) {

    const [animationTypes, setAnimationTypes] = useState([]);
    const menuLength = ['', '', '', '', '', '', '', '', '', '','', '', '', '', '', '', '']; 

    useEffect(() => {
      setTimeout(() => {
        setAnimationTypes(['Fade', 'Flip', 'Rotate', 'Zoom', 'Bounce', 'Slide', 'Roll', 'LightSpeed',
        'Jump', 'Flash', 'HeadShake', 'Jello', 'Pulse', 'RubberBand', 'Shake', 'Spin', 'Swing', 'Tada', 'Wobble']);
      }, 2000);
    }, []);

    return (
      <> 
      {
        (animationTypes.length === 0) ?
        <>
          <div className="skeletonWrapper azDFlexCSevn" style={{flexWrap: 'wrap', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 3px 8px', margin: '0.3rem 0rem'}}>
            {
              menuLength.map( (item, i) => { return(
                <span key={i} className={'skeletonWrapper__menu'}>{item}</span>
              ) } )
            }
          </div>
        </>
        :
        <>
          <div className={'ReactRevelaMenu'}>{
            animationTypes.map( (animationType, i) => {return(
              <div key={i} className={`ReactRevelaMenu__item ${animationType}`}
              onClick={() => setAnmyType(`${animationType}`)}
              >{animationType}</div>
            )})
          }</div>
        </>
      }
      </>
    )
}


export default ReactRevelaMenu;
