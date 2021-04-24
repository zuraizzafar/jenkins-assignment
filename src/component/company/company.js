import React from "react";
import pic5 from "../../assets/picture5.png"
import pic6 from "../../assets/picture6.png"
import pic7 from "../../assets/picture7.png"
import pic8 from "../../assets/picture8.png"
import pic9 from "../../assets/picture9.png"
import pic10 from "../../assets/picture10.png"
import "./company.css"
function Company() {
    return(
        <div>
        <div className="jumbotron" id="sponsorsblock">
<div className="sponsors">
<p>
<strong>
We thank the following organizations for their major commitments to
support the Jenkins project.
</strong>
</p>
<ul>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">
<img src={pic5} alt="pic5"/>
</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">
<img src={pic6} alt="pic6"/>
</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">
<img src={pic7} alt="pic7"/>
</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">
</a>
<img src={pic8} alt="pic8"/>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">
<img src={pic9} alt="pic9"/>
</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">
<img src={pic10} alt="pic10"/>
</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">
</a>
</li>
</ul>
</div>
<div className="supporters">
<p>
<strong>
We thank the following organizations for their support of the Jenkins
project through free and/or open source licensing programs.
</strong>
</p>
<ul>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">Atlassian</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">Datadog</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">Mac Cloud</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">PagerDuty</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">Sentry</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">XMission</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">Tsinghua University</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">Fastly</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">SpinUp</a>
</li>
<li>
<a href="{}" rel="noreferrer noopener" target="_blank">IBM</a>
</li>
</ul>
</div>
</div>
        </div>
    )
}
export default Company;