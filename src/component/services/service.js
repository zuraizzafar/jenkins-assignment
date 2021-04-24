import React from 'react'
import './service.css'
function Service() {
    return(
        <div>
<div className='segment' id='feature-list-segment'>
<div className='container'>
<div className='row chunks features uniform-height'>
<div className='col-md-6 col-lg-4'>
<div className='box cicd'>
<i className='fas fa-random'></i>
<h5>
Continuous Integration and Continuous Delivery
</h5>
<p>
As an extensible automation server, Jenkins can be used as a simple
CI server or turned into the continuous delivery hub for any project.
</p>
</div>
</div>
<div className='col-md-6 col-lg-4'>
<div className='box install'>
<i className='fas fa-download'></i>

<h5>
Easy installation
</h5>
<p>
Jenkins is a self-contained Java-based program, ready to run
out-of-the-box, with packages for Windows, Linux, macOS and other
Unix-like operating systems.
</p>
</div>
</div>
<div className='col-md-6 col-lg-4'>
<div className='box settings'>
<i className="fas fa-braille"></i>
<h5>
Easy configuration
</h5>
<p>
Jenkins can be easily set up and configured via its web interface,
which includes on-the-fly error checks and built-in help.
</p>
</div>
</div>
<div className='col-md-6 col-lg-4'>
<div className='box ecosystem'>
<i className='fas fa-deaf'></i>
<h5>
Plugins
</h5>
<p>
With hundreds of plugins in the Update Center, Jenkins integrates
with practically every tool in the continuous integration and
continuous delivery toolchain.
</p>
</div>
</div>
<div className='col-md-6 col-lg-4'>
<div className='box extend'>
<i className='fas fa-universal-access'></i>
<h5>
Extensible
</h5>
<p>
Jenkins can be extended via its plugin architecture, providing
nearly infinite possibilities for what Jenkins can do.
</p>
</div>
</div>
<div className='col-md-6 col-lg-4'>
<div className='box distributed'>
<i className='fas fa-closed-captioning'></i>
<h5>
Distributed
</h5>
<p>
Jenkins can easily distribute work across multiple machines,
helping drive builds, tests and deployments across multiple
platforms faster.
</p>
</div>
</div>
</div>
</div>
</div>
        </div>
    )
}
export default Service;