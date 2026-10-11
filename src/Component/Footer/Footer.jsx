import logo from "../../assets/logo.png"
import xIcon from "../../assets/x.svg"
import githubIcon from "../../assets/github.svg"
import instagramIcon from "../../assets/instagram.svg"
import youtubeIcon from "../../assets/youtube.svg"
import "./Footer.css"

const columns = [
  ["Solutions", "CRM", "Sales management", "Point of sale", "Accounting", "Inventory"],
  ["Services", "Odoo ERP services", "Custom software", "AI & automation", "IT staff augmentation", "Digital transformation", "Cloud & managed"],
  ["Industries", "Manufacturing", "Retail & e-commerce", "Trades & field services", "Professional services", "Nonprofits"],
  ["Company", "About", "Customers", "Service areas", "Blog", "Contact", "NETLINKS US"],
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__about">
          <img src={logo} alt="Netlinks" />
          <p>A global technology partner for Odoo ERP implementation, custom software development, AI automation, and digital transformation.</p>
          <address>info@netlinks.af<br />077-302-0101<br />NETLINKS Plaza, Street 6, Lane 3, Shar-e-naw<br />Kabul, Afghanistan</address>
          <div className="footer__socials" aria-label="Social media links">
            {[[xIcon, "X"], [githubIcon, "GitHub"], [instagramIcon, "Instagram"], [youtubeIcon, "YouTube"]].map(([icon, label]) => <a href="#contact" key={label} aria-label={label}><img src={icon} alt="" /></a>)}
          </div>
        </div>
        <nav className="footer__links" aria-label="Footer navigation">
          {columns.map(([heading, ...links]) => <div key={heading}><h2>{heading}</h2>{links.map((link) => <a href="#contact" key={link}>{link}</a>)}</div>)}
        </nav>
      </div>
      <div className="footer__bottom"><span>© 2026 NETLINKS. All rights reserved.</span><span>Sitemap · Business ethics · Privacy policy · Terms of use · Dark mode</span></div>
    </footer>
  )
}
