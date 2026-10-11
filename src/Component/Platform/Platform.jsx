import odooImage from "../../assets/home-feature-odoo-1280.webp"
import aiImage from "../../assets/home-feature-ai-1280.webp"
import engineeringImage from "../../assets/home-feature-engineering-1280.webp"
import "./Platform.css"

const platforms = [
  {
    number: "01",
    label: "ODOO ERP",
    title: <>Odoo that works <em>your way.</em></>,
    intro: "Enterprise Odoo implementation, customization, and support from a team that has delivered at national scale.",
    points: [
      "50+ Odoo deployments delivered, including a 500,000-employee HR, payroll, and custom modules engagement",
      "Odoo migration from SAP, NetSuite, Microsoft Dynamics, QuickBooks, and legacy Odoo",
      "Upgrade-safe custom Odoo modules by senior Python engineers",
      "Enterprise Odoo for manufacturing, distribution, field service, and public sector",
    ],
    button: "Explore Odoo services",
    image: odooImage,
  },
  {
    number: "02",
    label: "AI & AUTOMATION",
    title: <>Agents that don't just chat, <em>they work.</em></>,
    intro: "Production AI agents that close tickets, reconcile invoices, and answer procurement queries. Grounded, governed, observable, not demos.",
    points: [
      "Retrieval-grounded agents with full citation and audit trail",
      "AI-powered ERP: intelligent automation inside Odoo workflows",
      "Human-in-the-loop controls for regulated and high-stakes processes",
      "Typical outcomes: 30%+ reduction in manual-task hours",
    ],
    button: "See how it works",
    image: aiImage,
    reverse: true,
  },
  {
    number: "03",
    label: "CUSTOM ENGINEERING",
    title: <>When nothing off-the-shelf <em>quite fits.</em></>,
    intro: "A senior product team, designers, PMs, engineers, embedded with yours. Prototype in weeks, ship in months, maintain what we build. No junior hand-offs.",
    points: [
      "Senior-only squads, no ticket-shuffling to offshore pools",
      "Modern stacks: TypeScript, Python, PHP, Postgres, Kubernetes, serverless",
      "ISO 12207 + ISO 27001 certified delivery at the group level",
      "Compliance-ready from day one: SSO via SAML/OIDC, RBAC, audit logs, encryption",
    ],
    button: "Engineering philosophy",
    image: engineeringImage,
  },
]

export default function Platform() {
  return (
    <section className="platform" aria-label="Technology platforms">
      {platforms.map(({ number, label, title, intro, points, button, image, reverse }) => (
        <article className={`platform__feature${reverse ? " platform__feature--reverse" : ""}`} key={number}>
          <div className="platform__content">
            <p className="platform__eyebrow">{number}, {label}</p>
            <h2>{title}</h2>
            <p className="platform__intro">{intro}</p>
            <ul>{points.map((point) => <li key={point}>{point}</li>)}</ul>
            <a href="#contact" className="platform__button">{button} <span aria-hidden="true">↗</span></a>
          </div>
          <div className="platform__visual">
            <img src={image} alt="" />
          </div>
        </article>
      ))}
    </section>
  )
}
