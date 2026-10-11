
import image from "../../assets/home-hero-640.webp"
import "./Hero.css"




export default function Hero() {
  return (
    <div className="Hero-section">
      <div className="Hero-AI"> <p className="Hero-p">20 years delivering from Kabul · Afghanistan's enterprise technology partner</p>
      <h1 className="Hero-h1">Enterprise Odoo, custom software, and AI, <br />
<span className="Hero-span">engineered in Afghanistan.</span></h1>

<p className="h1-p">Afghanistan-based since 2005. We built the 500,000-employee Odoo HR and payroll system for the national government, and Jobs.af, the country's largest job-hunting platform. Senior teams in Kabul delivering for clients across Afghanistan, the GCC, India, and the US.</p>

<div className="Hero-btn"><a className="btn-purple" href="">Book a 30-min discovery call</a> <a className="btn-white" href="">Explore services</a></div>

<div className="Num-Hero"><div><h1>500K +</h1>
<p>Employees · national-government Odoo HR rollout</p>
</div>
<div><h1>20 <span className="Hero-span">yrs</span></h1>
<p>Delivering enterprise software from Kabul</p>
</div>

<div><h1>Jobs.af</h1>
<p>Afghanistan's largest job platform, built by NETLINKS</p></div>

</div>
      
      </div>
      <img className="Hero-img" src={image} alt="" />
    </div>
  )
}
