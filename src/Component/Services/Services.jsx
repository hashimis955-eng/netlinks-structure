
import "./Services.css"

const services = [
  ["01", "ERP", "Odoo ERP services.", "Odoo implementation, customization, integration, and migration from SAP, NetSuite, Dynamics, and QuickBooks. 50+ deployments, including a 500,000-employee HR and payroll engagement."],
  ["02", "BUILD", "Custom software development.", "Enterprise web, mobile, and backend systems when shelf products don't fit. Senior-only squads, the team that builds also maintains."],
  ["03", "INTELLIGENCE", "AI & automation.", "Production AI agents grounded in your data, governed by your rules, observable end to end. Not demos."],
  ["04", "PEOPLE", "IT staff augmentation.", "Senior engineers, architects, and DevOps embedded with your team. US-led delivery, direct-hire model, global bench in India and the UAE."],
  ["05", "STRATEGY", "Digital transformation.", "Executive roadmap, enterprise architecture, build-vs-buy, and program delivery. Twenty years of pattern recognition you can execute."],
  ["06", "CLOUD", "Cloud & managed services.", "Managed Odoo hosting, cloud infrastructure, 24/7 monitoring, and ERP managed services on AWS, Azure, GCP, and private cloud."],
]

export default function Services() {
  return (
    <section className="services" id="services" aria-labelledby="services-title">
      <div className="services__intro">
        <div>
          <p className="services__eyebrow">What we do</p>
          <h2 id="services-title">Six services. One <em>accountable partner.</em></h2>
        </div>
        <p className="services__summary">One Afghanistan-based vendor for ERP, custom software, AI, staff augmentation, and cloud, so nothing falls between the seams.</p>
      </div>
      <div className="services__grid">
        {services.map(([number, category, title, description, featured]) => (
          <article className={`service-card${featured ? " service-card--featured" : ""}`} key={number}>
            <div className="service-card__top">
              <p>{number} / {category}</p>
              <a href="#contact" className="service-card__link" aria-label={`Learn more about ${title}`}><span aria-hidden="true">↗</span></a>
            </div>
            <h3>{title}</h3>
            <p className="service-card__description">{description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
