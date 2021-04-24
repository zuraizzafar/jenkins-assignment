import React from 'react'
import './navabr.css';
import logo from '../../assets/logo.png'
function Navbar() {
    return(
        <div>
            <nav className='navbar navbar-expand-lg navbar-dark top bg-dark fixed-top'>
            <a className="navbar-brand" href="{#}">Jenkins</a>
            <button className="navbar-toggler" data-toggle="collapse" data-target="#mynavbar">
            <span className="navbar-toggler-icon"></span>
            </button>
           <div className="collapse navbar-collapse" id="mynavbar">
            <ul className="nav navbar-nav mr-auto"> 
                <li className="nav-item dropdown">
                   
                
                    <a href="{}" className="nav-link dropdown-toggle" data-toggle="dropdown" id="logo">
                         <img src={logo} alt="logo" width="30px" />
                          </a> 
                          <div className="dropdown-menu">
            <a href="{}" className="dropdown-item">What is CDF?</a>
            <a href="{}" className="dropdown-item">Jenkins X</a>
            <a href="{}" className="dropdown-item">Tekton</a>
            <a href="{}" className="dropdown-item">Spinnaker</a>
        </div>
                </li>
            </ul>   
           <ul className="navbar-nav ml-auto">
            <li className="nav-item">
        <a className="nav-link" href="{#}">Blog</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="{#}" data-toggle="dropdown">Documentation</a>
        <div className="dropdown-menu">
            <a href="{}" className="dropdown-item">User Guide</a>
            <a href="{}" className="dropdown-item">Solution Page</a>
            <a href="{}" className="dropdown-item">Tutorials</a>
            <a href="{}" className="dropdown-item">Developer Guide</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="{#}">Plugins</a>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="{#}" data-toggle="dropdown">Community</a>
      <div className="dropdown-menu">
            <a href="{}" className="dropdown-item">OverView</a>
            <a href="{}" className="dropdown-item">Chat</a>
            <a href="{}" className="dropdown-item">Meet</a>
            <a href="{}" className="dropdown-item">Events</a>
        </div>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="{#}" data-toggle="dropdown">Subprojects</a>
      <div className="dropdown-menu">
            <a href="{}" className="dropdown-item">Overview</a>
            <a href="{}" className="dropdown-item">Evergreen</a>
            <a href="{}" className="dropdown-item">Jenkins Operator</a>
            <a href="{}" className="dropdown-item">Jenkins Remoting</a>
        </div>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="{#}" data-toggle="dropdown">About</a>
      <div className="dropdown-menu">
            <a href="{}" className="dropdown-item">Roadmap</a>
            <a href="{}" className="dropdown-item">Security</a>
            <a href="{}" className="dropdown-item">Press</a>
            <a href="{}" className="dropdown-item">Awards</a>
        </div>
      </li>
      <li className="nav-item dropdown">
      <a className="nav-link dropdown-toggle" href="{#}" data-toggle="dropdown">English</a>
      <div className="dropdown-menu">
            <a href="{}" className="dropdown-item">Urdu</a>
            <a href="{}" className="dropdown-item">Chinese</a> 
        </div>
      </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
    {/* <button className=" nav-link btn btn-outline-secondary" type="submit">Download</button> */}
    <a class='nav-link btn btn-outline-secondary' href='{}'>
Download
</a>
      <input className="form-control ml-sm-2 searchbox" type="search" placeholder="Search" aria-label="Search" />
    </form>
           </div>
            </nav>
        </div>
    )
}
export default Navbar;