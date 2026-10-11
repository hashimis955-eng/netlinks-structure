
import image from "../../assets/logo.png"
import "./Navbar.css"
export default function Navbar() {
  return (
    <div className="Nav">
      <img className="imgnav" src={image} alt="" />
      <div className="divnav"><a href="">Solutions</a>
      <a href="">Services</a>
      <a href="">Industries</a>
      <a href="">Partnesrs</a>
      <a href="">Company</a>
      </div>

      <a className="Nav-btn" href="">Get Started</a>
    </div>
  )
}
