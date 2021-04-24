import React from 'react';
import './slider.css'
import pic1 from '../../assets/picture1.svg';
import pic2 from '../../assets/picture2.png';
import pic3 from '../../assets/picture3.jpg';
import pic4 from '../../assets/picture4.png';

function Slider() {
    return(
        <div>
 <div className='carousel carousel_562 slide' data-ride='carousel' id='ProjectCarousel_562'>
<div className='container'>
<ol className='carousel-indicators'>
<li className='active' data-slide-to='0' data-target='#ProjectCarousel_562'></li>
<li data-slide-to='1' data-target='#ProjectCarousel_562'></li>
<li data-slide-to='2' data-target='#ProjectCarousel_562'></li>
<li data-slide-to='3' data-target='#ProjectCarousel_562'></li>
</ol>
<div className='carousel-inner carousel_562'>
<div className='active carousel-item carousel_562'>
<div className='container'>
<div className='pt-4'>
&nbsp;
</div>
<div className='row'>
<div className='col-md-12 col-lg-8 order-first order-lg-last'>
 <img src={pic1} alt="pic1" height='300px'/>
</div>
<div className='col-md-12 col-lg-4 order-last order-lg-first'>
<a href='{}'>
<h2>
SheCodeAfrica Contributhon
</h2>
<p>
The SheCodeAfrica Contributhon started April 1, 2021. Jenkins Project is mentoring women in Africa as they propose pull requests to improve Pipeline help and Pipeline examples. The participants include Onyinye Ezike, Sharon Jebitok, Esther Ejidike, Cynthia Iradukunda, and Lucy Karimi
</p>
</a>
<div>
<a className='btn btn-primary' href='{}'>
More info
</a>
</div>
</div>
</div>
<div className='pt-4'>
&nbsp;
</div>
</div>
</div>
<div className='carousel-item carousel_562'>
<div className='container'>
<div className='pt-4'>
&nbsp;
</div>
<div className='row'>
<div className='col-md-12 col-lg-8 order-first order-lg-last'>
<img src={pic2} alt="pic2" height='285px'/>
</div>
<div className='col-md-12 col-lg-4 order-last order-lg-first'>
<a href='{}'>
<h2>
Jenkins is the Way!
</h2>
<p>
We are looking for experiences of Jenkins users from around the world showcasing how they are building, deploying, and automating great software with Jenkins. Check out their user stories and share yours
</p>
</a>
<div>
<a class='btn btn-primary' href='{}'>
More info
</a>
</div>
</div>
</div>
<div class='pt-4'>
&nbsp;
</div>
</div>
</div>
<div className='carousel-item carousel_562'>
<div className='container'>
<div className='pt-4'>
&nbsp;
</div>
<div className='row'>
<div className='col-md-12 col-lg-8 order-first order-lg-last'>

<img src={pic3} alt="pic3" height='300px'/>
</div>
<div className='col-md-12 col-lg-4 order-last order-lg-first'>
<a href='{}'>
<h2>
cdCon
</h2>
<p>
Join Jenkins at cdCon on June 22-25, 2021! The event is focused on improving the world's capacity to deliver software with security and speed. Become part of the conversation that drives continuous delivery by meeting peers, sharing ideas and talking to industry leaders on all things software delivery and DevOps.
</p>
</a>
<div>
<a className='btn btn-primary' href='{}'>
Register for cdCon
</a>
</div>
</div>
</div>
<div className='pt-4'>
&nbsp;
</div>
</div>
</div>
<div className='carousel-item carousel_562'>
<div className='container'>
<div className='pt-4'>
&nbsp;
</div>
<div className='row'>
<div className='col-md-12 col-lg-8 order-first order-lg-last'>
<img src={pic4} alt="pic4" height='320px'/>
</div>
<div className='col-md-12 col-lg-4 order-last order-lg-first'>
<a href='{}'>
<h2>
Participate and Contribute!
</h2>
<p>
Jenkins is a community-driven project. We invite everyone to join us and move it forward. Any contribution matters: code, documentation, localization, blog posts, artwork, meetups, and anything else. If you have five minutes or a few hours, you can help!
</p>
</a>
<div>
<a className='btn btn-primary' href='{}'>
More info
</a>
</div>
</div>
</div>
<div className='pt-4'>
&nbsp;
</div>
</div>
</div>
</div>
</div>
</div>

        </div>
    )
}
export default Slider;