import React from 'react';
import ReactDOM from 'react-dom'; 
import './../style/App.css'
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo1 from './../images/i13.jpeg'
import Logo2 from './../images/i12.jpg'
import Logo3 from './../images/i8.jpg'
import Logo4 from './../images/i9.jpg'
import Logo5 from './../images/i10.jpg'
import Logo6 from './../images/i11.JPG'
import Logo7 from './../images/i14.jpeg'
import Logo8 from './../images/i15.jpeg'
import Logo9 from './../images/i16.jpeg'


function Shop(){
    return(
        <>
<div className="heading">
<div id="heading1">15% OFF ON ALL NEW CUSTOMERS</div>
</div>

<div className="head2">
  <div className="nav">

  <a className="btn btn-large btn-dark" href="/home">HOME</a>
  <a className="btn btn-large btn-dark" href="/">BLOG</a>
{/* <button className="btn1">BLOG</button> */}
<a className="btn btn-large btn-dark" href="/">LOGOUT</a>

  </div>

</div>


<div className="shop1">
<img src={Logo1} id="s1" />
<img src={Logo2} id="s1" />
<img src={Logo3} id="s1" />
<img src={Logo4} id="s1" />
        </div>

<div className="shop2">
<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>

<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>

<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>

<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>
 </div>


 <div className="shop1">
<img src={Logo6} id="s1" />
<img src={Logo7} id="s1" />
<img src={Logo8} id="s1" />
<img src={Logo9} id="s1" />
        </div>

<div className="shop2">
<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>

<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>

<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>

<div id="s1">
    <h3>painting work</h3>
    <p id="sty1">$22.45</p>
    <button id="bttn2">Add to Cart</button>
</div>
 </div>




</>
        
    );
}

export default Shop;