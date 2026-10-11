import { useState } from "react"
import "./Question.css"

const questions = [
  ["What does NETLINKS do?", "NETLINKS delivers Odoo ERP, custom software, AI automation, staff augmentation, and cloud services for organizations that need dependable enterprise technology."],
  ["How experienced is NETLINKS with Odoo?", "Our team has delivered more than 50 Odoo deployments, including a national HR and payroll system serving 500,000 employees."],
  ["What industries does NETLINKS serve?", "We work across manufacturing, retail, professional services, public sector, nonprofits, and field services, adapting proven templates to each organization."],
  ["How does an engagement with NETLINKS start?", "It begins with a 30-minute discovery call. We clarify the goal, identify the right delivery path, and create a practical plan for the next steps."],
]

export default function Question() {
  const [openQuestion, setOpenQuestion] = useState(null)

  return (
    <section className="questions" aria-labelledby="questions-title">
      <div className="questions__wrap">
        <p className="questions__eyebrow">Questions</p>
        <h2 id="questions-title">Answers to what CIOs actually ask.</h2>
        <div className="questions__list">
          {questions.map(([question, answer], index) => {
            const isOpen = openQuestion === index
            return (
              <div className="question" key={question}>
                <button type="button" aria-expanded={isOpen} onClick={() => setOpenQuestion(isOpen ? null : index)}>
                  <span>{question}</span><span className="question__icon" aria-hidden="true">{isOpen ? "−" : "+"}</span>
                </button>
                {isOpen && <p className="question__answer">{answer}</p>}
              </div>
            )
          })}
        </div>

        <div className="questions__cta" id="contact">
          <h3>Talk to a senior architect <em>this week.</em></h3>
          <p>30-minute call. Walk away with a phased plan and fixed-fee<br className="questions__desktop-break" /> scoping in 5 business days.</p>
          <a href="#contact">Book a 30-min discovery call <span aria-hidden="true">↗</span></a>
        </div>
      </div>
    </section>
  )
}
