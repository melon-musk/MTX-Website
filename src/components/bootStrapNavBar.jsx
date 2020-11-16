import React from 'react';



function bootStrapNavBar(props)
{
    return (
    <div >
    <nav class="navbar navbar-expand-lg navbar-dark">
    <a class="navbar-brand" href="#">
    <img className="logo" src="images/logo.png"></img>
    MagnaTech Xystems</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
      <div class="navbar-nav ml-auto">
       {props.children}
      </div>
    </div>
  </nav>
  </div>
  )
}

export default bootStrapNavBar;