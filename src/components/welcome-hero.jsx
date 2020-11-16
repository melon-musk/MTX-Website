import React from "react";



function WelcomeHero(props)
{
 return(

<section className="welcome-hero">
    <h1 className="heroTitle">{props.title}</h1>
    <video className='videoTag' autoPlay loop muted>
    <source src="videobackground/v1.m4v" type='video/mp4' />
</video>
</section>


 )
}

export default WelcomeHero;