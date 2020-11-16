import React from "react";



const vidSrc= () => {
    if(window.innerWidth <=770) return ("videobackground/V1_480p.m4v"); 
    else return ("videobackground/V1_720p.m4v");
}

console.log(vidSrc);

function WelcomeHero(props)
{
 return(

<section className="welcome-hero">
    <h1 className="heroTitle">{props.title}</h1>
    <video className='videoTag' poster="images/v1.jpg" muted playsInline autoPlay loop >
    <source src={vidSrc()} type='video/mp4' />
</video>
</section>


 )
}

export default WelcomeHero;