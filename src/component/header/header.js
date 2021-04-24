import './header.css' 
import React from 'react';
import jenkin from '../../assets/jenkiv.png'
function Header() {
   return(
    <div>
 <div className='banner-container'>
<div className='skew'></div>
<div className='container'>
<div className='row'>
&nbsp;
</div>
<div className='row'>
<div className='col-md-1 col-lg-2'></div>
<div className='col-md-5 col-lg-4'>
<div className='logo'>
 <img src={jenkin} alt="jenkins" height='350px' width='250px'/>
</div>
</div>
<div className='col-md-5 col-lg-4'>
<h1 className='page-title'><span>
Jenkins
</span></h1>
<p>
<strong>
Build great things at any scale
</strong>
</p>
<p>
The leading open source automation server, Jenkins provides
hundreds of plugins to support building, deploying and automating
any project.
</p>
<div className='container'>
<div className='row'>
<a className='btn btn-secondary m-1' href='{}'>
Documentation
</a>
<a className='btn btn-primary m-1' href='{}'>
Download
</a>
</div>
</div>
</div>
<div className='col-md-1 col-lg-2'></div>
</div>
</div>
</div>

       </div>
   )
  
}
export default Header;