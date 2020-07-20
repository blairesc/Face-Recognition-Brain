import React from 'react';
import './FaceRecognition.css';

const FaceRecognition = ({ imageUrl }) => {
    return(
        <div className='center ma'>
            <div className='absolute mt2'>
                <img id='inputImage' src={imageUrl} alt="" width='500px' height='auto'/>
                <div></div>
            </div>
        </div>
    );
}

export default FaceRecognition;