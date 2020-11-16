import React from "react";



function contentSection(props)
{

return (

<section id={props.id} className={props.clName}>
    <h2>{props.title}</h2>
    <div className="subHeading">
    <h4>{props.subHeading}</h4>
    <hr></hr>
    </div>

    <div className ="image-text" >
    <img src={props.imgURL}></img>
    <p>{props.bodyText}</p>
    </div>
    
</section>


)



}





export default contentSection;