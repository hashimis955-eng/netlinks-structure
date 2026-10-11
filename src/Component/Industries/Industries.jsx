import "./Industries.css"

const industries = [
  ["01", "Manufacturing", "Manufacturing ERP on Odoo, MRP, production planning, quality control, and shop-floor visibility."],
  ["02", "Retail & eCommerce", "Retail ERP, Odoo POS, omnichannel inventory, loyalty, and Shopify/Magento integrations."],
  ["03", "Professional Services", "PSA on Odoo, project accounting, timesheet-to-invoice, resource planning, and utilization tracking."],
  ["04", "Public Sector", "Public sector ERP at national scale, HR, payroll, grants, procurement controls, and auditable trails."],
  ["05", "Nonprofits", "Nonprofit ERP, donor CRM, grant lifecycle, restricted fund accounting, and outcome reporting."],
  ["06", "Trades & Field Services", "Field service software on Odoo, dispatch, mobile workforce, service contracts, and preventive maintenance."],
]

export default function Industries() {
  return (
    <section className="industries" id="industries" aria-labelledby="industries-title">
      <div className="industries__wrap">
        <header className="industries__intro">
          <div>
            <p className="industries__eyebrow">Industries</p>
            <h2 id="industries-title">Pattern recognition <em>across verticals.</em></h2>
          </div>
          <p>Two decades of implementations means we've seen your problem before. Industry templates, compliance defaults, and playbooks included.</p>
        </header>

        <div className="industries__list">
          {industries.map(([number, title, description]) => (
            <a href="#contact" className="industry-row" key={number}>
              <span className="industry-row__number">{number}</span>
              <h3>{title}</h3>
              <p>{description}</p>
              <span className="industry-row__arrow" aria-hidden="true">↗</span>
            </a>
          ))}
        </div>
      </div>

      <blockquote className="industries__quote">
        <span className="industries__quote-mark" aria-hidden="true">“</span>
        <p>We didn't watch Afghanistan's tech sector emerge, <em>we helped build it.</em></p>
        <footer>Farshid Ghyasi · Founder, NETLINKS</footer>
      </blockquote>
    </section>
  )
}
