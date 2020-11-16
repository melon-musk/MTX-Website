import React from 'react';

function WelcomeHero2(props)
{
    return(
        <section className={props.name}>

        <div className="text">
        <h2>{props.title}</h2>
        <hr></hr>
        <p>{props.bodyText}</p>
        </div>

        <div className="images">
        <img src="images/welcome-background.png" alt="cpu-coolers-welcome"></img>
        </div>
       


        </section>

    )
}


export default WelcomeHero2;


