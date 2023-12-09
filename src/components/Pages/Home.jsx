import React from 'react'
import image from './images/1.png'
import image2 from './images/logo.svg'

const Home = () => {
    return (
        <>
            <div className="container m-auto grid grid-cols-3 gap-2 md:grid-cols-5 lg:grid-cols-8">
                <div className="tile col-span-3 bg-teal-500 md:col-span-5 lg:col-span-8">
                    <h1 className="tile-marker">ONe</h1>
                </div>
                <div class="tile col-span-1 row-start-2 row-end-5 bg-amber-500 md:col-span-2 lg:col-span-3">
                    <h1 class="tile-marker">TWO</h1>
                </div>
                {/* <img src={image2} alt="home" className="absolute object-cover w-1/3 rounded-md" />  */}
            </div>
        </>
    )
}

export default Home