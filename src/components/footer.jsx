import React from 'react';

function footer()
{
    return(
    <section className="footer">
    <h5>{"©cruzinfotek " + new Date().getFullYear()}</h5>
    <a className="fab fa-instagram footer-icons" href="https://www.instagram.com/mtx_pc/"></a>
    <a className="fab fa-facebook-f footer-icons" href="https://www.facebook.com/cruzinfotech/"></a>
  </section>
  )
    
}


export default footer