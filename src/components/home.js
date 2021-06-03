import React from 'react';
import ReactDOM from 'react-dom'; 
import './../style/App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from './../images/i10.jpg'
import Logo2 from './../images/i9.jpg'
import Logo3 from './../images/i8.jpg'
import Logo4 from './../images/i8.jpg'
import Logo5 from './../images/i8.jpg'

function Home() {
  return (
  
  <>
<div className="heading">
<div id="heading1">15% OFF ON ALL NEW CUSTOMERS</div>
</div>
<div className="head2">
  <div className="nav">
  <a className="btn btn-large btn-dark" href="/shop">SHOP</a>
  <a className="btn btn-large btn-dark" href="/">BLOG</a>
{/* <button className="btn1">BLOG</button> */}
<a className="btn btn-large btn-dark" href="/">LOGOUT</a>

  </div>

</div>


  
<div className="head3">
  <div className="card">
    <div className="pro1">
<h3>
Shop our high quality art supplies</h3>
<h5 id="style1">Get encouraged to create with confidence while supporting a community of artists</h5>
</div>
<button id="btn2">SHOP NOW</button>
  </div>
</div>

<div className="colorbytes">
  <div>
  <h1>Know exactly which supplies are right for you</h1>
  <h5>"Vehement old woman"    Blissfull eyes and joyful </h5>
  <h5>smiles through all the misery and pain</h5>
</div>
</div>

<img src={Logo1} className="image"/>
<div className="colorbytes1">
  <div>
  <h1>Wanderlust Paris</h1>
<h5>A sentimental yearning for reality that isn't genuine</h5>
<h5>an irrecoverable condition for fantasy that evokes nostalgia or day dreams </h5> 
<h5>Chainsmokers @thechainsmokers .</h5>
</div>
<div className="btn2">
<button id="bttn2">Explore products</button>
</div>
</div>

<div className="grid1">
<div className="gridd1">
<h2>Be Encouraged to Create</h2>
<div>Can’t lose your mind as it’s inescapable.
So you follow it inwards as the spiral tightens infinitely,
‘Cause to be alive is to be missing.nspired by James Blake’s album cover.</div>
</div>


<div className="gridd2">
<img src={Logo2} id="craft1"/>
</div>
</div>


  </> 
   );
}

export default Home;
