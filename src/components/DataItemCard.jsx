import React from 'react';
import '../styles/DataItem.css';

function DataItemCard({payload}) {
    return (
        <div className={'DataItem'}>
            <div className={'DataItem__bio'}>
                <img src={`${payload.avatar}`} alt="img" /> 
                <div>
                    <span>{payload.user}</span>
                    <span> {payload.title} </span>
                </div> 
            </div>
            <p>{payload.bio}</p> 
            {/* <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto dicta delectus beatae reprehenderit iusto suscipit ducimus dolore? </p> */}
            <a href={payload.link}>Click</a>
        </div>
    )
}

export default DataItemCard
