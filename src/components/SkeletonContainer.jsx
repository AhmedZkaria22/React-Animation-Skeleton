import React, { useEffect } from 'react';
import '../styles/SkeletonContainer.css';
import DataItem from './DataItem';
import { db } from '../DummyData';


function SkeletonContainer({navType, animationType, bothListener}) {

    const direction = ['top', 'right', 'bottom', 'left'],
    rotateDirection = ['top-left', 'top-right', 'bottom-left', 'bottom-right'],
    ltspDirec = ['left', 'right'],
    animationTypes2 = ['Jump', 'Flash', 'HeadShake', 'Jello', 'Pulse', 'RubberBand', 'Shake', 'Spin', 'Swing', 'Tada', 'Wobble'];

    return (
        <div className={'skeletonContainer'}>{
            ( animationTypes2.indexOf(animationType) !== -1 ) ?
                <DataItem className={'skeletonContainer__item'} 
                navType={navType} payload={db[0]} animationType = {animationType} bothListener={bothListener} />
            
            : ( animationType === 'LightSpeed' ) ?
                db.map( (item, i) => { return(  (i < 2) &&  
                    <DataItem  key={i} className={'skeletonContainer__item'} 
                    navType={navType} payload={item} animationType = {animationType} 
                    bothListener={bothListener} ltspDirec={ltspDirec[i]}/>
                ) } )

            : db.map( (item, i) => { return(
                <DataItem  key={i} className={'skeletonContainer__item'} 
                navType={navType} payload={item} animationType = {animationType} 
                bothListener={bothListener} direc={direction[i]} rotDirec={rotateDirection[i]} />
            ) } )
        }</div>
    )
}

export default SkeletonContainer
