import React from 'react';
import '../styles/General.css';
import '../styles/DataItem.css';
import '../styles/SkeletonContainer.css';
import {Fade, Flip, Rotate, Zoom, Bounce, Slide, Roll, LightSpeed} from 'react-reveal';
import Jump from 'react-reveal/Jump';
import Flash from 'react-reveal/Flash';
import HeadShake from 'react-reveal/HeadShake';
import Jello from 'react-reveal/Jello';
import Pulse from 'react-reveal/Pulse';
import RubberBand from 'react-reveal/RubberBand';
import Shake from 'react-reveal/Shake';
import Spin from 'react-reveal/Spin';
import Swing from 'react-reveal/Swing';
import Tada from 'react-reveal/Tada';
import Wobble from 'react-reveal/Wobble';
import DataItemCard from './DataItemCard';

function DataItem({navType, payload, animationType, bothListener, direc, rotDirec, ltspDirec}) {
    return ( <> {
        ( (navType === 'Both' &&  bothListener === false)  || navType === 'Skeleton') ?
        <div className={'skeletonWrapper'}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'transparent', marginBottom: '0.35rem' }}>
                <span className={'skeletonWrapper__img'}></span>
                <div style={{ width: '7rem' }}>
                    <span className={'skeletonWrapper__text'} style={{ display: 'block' }}></span>
                    <span className={'skeletonWrapper__text'} style={{ display: 'block' }}></span>
                </div>
            </div>
            <span className={'skeletonWrapper__text'}></span>
            <span className={'skeletonWrapper__text'}></span>
            <span className={'skeletonWrapper__text'}></span>
            <span className={'skeletonWrapper__text'}></span>
            <span className={'skeletonWrapper__buttonSm'}></span>
        </div>

        : ( (navType === 'Both' && bothListener === true)  || navType === 'ReactReveal') ?
            (animationType === 'Fade') ?        
                (direc === 'top') ?  <Fade top>    <DataItemCard payload={payload} />  </Fade>
                :(direc === 'right') ?  <Fade right>    <DataItemCard payload={payload} />  </Fade>
                :(direc === 'bottom') ?  <Fade bottom>    <DataItemCard payload={payload} />  </Fade>
                :(direc === 'left') ?  <Fade left>    <DataItemCard payload={payload} />  </Fade>
                : null            

            :(animationType === 'Flip') ?
                (direc === 'top') ?  <Flip top>    <DataItemCard payload={payload} />  </Flip>
                :(direc === 'right') ?  <Flip right>    <DataItemCard payload={payload} />  </Flip>
                :(direc === 'bottom') ?  <Flip bottom>    <DataItemCard payload={payload} />  </Flip>
                :(direc === 'left') ?  <Flip left>    <DataItemCard payload={payload} />  </Flip>
                : null            

            :(animationType === 'Rotate') ?     
                (rotDirec === 'top-left') ?  <Rotate top left>    <DataItemCard payload={payload} />  </Rotate>
                :(rotDirec === 'top-right') ?  <Rotate top right>    <DataItemCard payload={payload} />  </Rotate>
                :(rotDirec === 'bottom-left') ?  <Rotate bottom left>    <DataItemCard payload={payload} />  </Rotate>
                :(rotDirec === 'bottom-right') ?  <Rotate bottom right>    <DataItemCard payload={payload} />  </Rotate>
                : null            

            :(animationType === 'Zoom') ?       
                (direc === 'top') ?  <Zoom top>    <DataItemCard payload={payload} />  </Zoom>
                :(direc === 'right') ?  <Zoom right>    <DataItemCard payload={payload} />  </Zoom>
                :(direc === 'bottom') ?  <Zoom bottom>    <DataItemCard payload={payload} />  </Zoom>
                :(direc === 'left') ?  <Zoom left>    <DataItemCard payload={payload} />  </Zoom>
                : null            

            :(animationType === 'Bounce') ?    
                (direc === 'top') ?  <Bounce top>    <DataItemCard payload={payload} />  </Bounce>
                :(direc === 'right') ?  <Bounce right>    <DataItemCard payload={payload} />  </Bounce>
                :(direc === 'bottom') ?  <Bounce bottom>    <DataItemCard payload={payload} />  </Bounce>
                :(direc === 'left') ?  <Bounce left>    <DataItemCard payload={payload} />  </Bounce>
                : null            

            :(animationType === 'Slide') ?      
                (direc === 'top') ?  <Slide top>    <DataItemCard payload={payload} />  </Slide>
                :(direc === 'right') ?  <Slide right>    <DataItemCard payload={payload} />  </Slide>
                :(direc === 'bottom') ?  <Slide bottom>    <DataItemCard payload={payload} />  </Slide>
                :(direc === 'left') ?  <Slide left>    <DataItemCard payload={payload} />  </Slide>
                : null            

            :(animationType === 'Roll') ?       
                (direc === 'top') ?  <Roll top>    <DataItemCard payload={payload} />  </Roll>
                :(direc === 'right') ?  <Roll right>    <DataItemCard payload={payload} />  </Roll>
                :(direc === 'bottom') ?  <Roll bottom>    <DataItemCard payload={payload} />  </Roll>
                :(direc === 'left') ?  <Roll left>    <DataItemCard payload={payload} />  </Roll>
                : null            

            :(animationType === 'LightSpeed') ? 
                (ltspDirec === 'left') ?  <LightSpeed  left>    <DataItemCard payload={payload} />   </LightSpeed>
                :(ltspDirec === 'right') ?  <LightSpeed  right>    <DataItemCard payload={payload} />   </LightSpeed>
                : null
            
            :(animationType === 'Jump') ?       <Jump>    <DataItemCard payload={payload} />    </Jump>
            :(animationType === 'Flash') ?      <Flash>     <DataItemCard payload={payload} />  </Flash>
            :(animationType === 'HeadShake') ?  <HeadShake>   <DataItemCard payload={payload} />   </HeadShake>
            :(animationType === 'Jello') ?      <Jello>     <DataItemCard payload={payload} />  </Jello>
            :(animationType === 'Pulse') ?      <Pulse>     <DataItemCard payload={payload} />  </Pulse>
            :(animationType === 'RubberBand') ? <RubberBand  >     <DataItemCard payload={payload} />   </RubberBand>
            :(animationType === 'Shake') ?      <Shake>     <DataItemCard payload={payload} />  </Shake>
            :(animationType === 'Spin') ?       <Spin>    <DataItemCard payload={payload} />   </Spin>
            :(animationType === 'Swing') ?      <Swing>     <DataItemCard payload={payload} /> </Swing>
            :(animationType === 'Tada') ?       <Tada>    <DataItemCard payload={payload} />    </Tada>
            :(animationType === 'Wobble') &&     <Wobble>     <DataItemCard payload={payload} />  </Wobble>
                    
        :null
    } </> )
}

export default DataItem
