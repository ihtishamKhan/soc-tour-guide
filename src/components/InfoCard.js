import React from 'react'
import myImage from '../assets/my-image.png'
import './InfoCard.css'

function InfoCard() {
    return (
        <div className='info-card'>
            <img src={myImage} className='my-image' alt="My profile" />

            <h1 className='my-name'>Ihtisham Khan</h1>
            <p className='my-bio'>Full Stack Developer</p>
        </div>
    )
}

export default InfoCard