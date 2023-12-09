import React from 'react'
import image from './images/1.png'
import image2 from './images/logo.svg'

const Home = () => {
    return (
        <>
           <img src={image2} alt="home" className="absolute object-cover w-1/3 rounded-md" /> 
        </>
    )
}

export default Home