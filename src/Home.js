import React from 'react';
import Video from './video3.mp4'

function Home() {


    return(
        <div className="home">
            <video src={Video} className="video" autoPlay loop muted/>

            <div className="content-home">
                <h1>Guangzhou</h1>
                <h3>Guangzhou is nothing less than a glittering metropolis containing centuries-old temples and shimmering skyscrapers. Here you will discover a fusion of old as well as new China. The capital of Guangdong province, Guangzhou has a rich history, vibrant commence, and picturesque natural scenery, making it an unforgettable travel destination.</h3>
            </div>
        </div>
    )
}

export default Home;