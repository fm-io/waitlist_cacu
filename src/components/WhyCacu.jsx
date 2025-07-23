import React from 'react'
import { FaCheckSquare, FaTimesCircle, FaExclamationTriangle } from "react-icons/fa";


function WhyCacu() {
    const data = [
        {
            title: "Built for Nigerian MSMEs",
            cacu: <FaCheckSquare color="green" />,
            others: [<FaTimesCircle color="red" />, <FaCheckSquare color="green" />],
          },
          {
            title: "Multi-language Support",
            cacu: <FaCheckSquare color="green" />,
            others: [<FaTimesCircle color="red" />, <FaTimesCircle color="red" />],
          },
          {
            title: "Offline-first access",
            cacu: <FaCheckSquare color="green" />,
            others: [<FaTimesCircle color="red" />, <FaTimesCircle color="red" />],
          },
          {
            title: "Use via WhatsApp",
            cacu: <FaCheckSquare color="green" />,
            others: [<FaTimesCircle color="red" />, <FaTimesCircle color="red" />],
          },
          {
            title: "Business Growth Tools",
            cacu: <FaCheckSquare color="green" />,
            others: [<FaTimesCircle color="red" />, <FaTimesCircle color="red" />],
          },
          {
            title: "Cultural Context & UX",
            cacu: <FaCheckSquare color="green" />,
            others: [<FaTimesCircle color="red" />, <FaExclamationTriangle color="orange" />],
          },
    ]


  return (
    <div className="why-cacu-container">
    <section className="why-cacu">
      <h2 className="section-title">WHY CACU WINS?</h2>
      <p className="section-subtitle">
        Cacu isn't just an app. It's a financial co-pilot for real Nigerian business owners.
      </p>
      <div className="cards">
        {data.map((item, index) => (
          <div 
            className="card" 
            key={index}
            style={{ '--delay': index * 0.1 + 's' }} // Staggered animation
          >
            <h3 className="card-title">{item.title}</h3>
            <div className="row">
              <span className="label">Cacu</span>
              <span className="label">Others</span>
            </div>
            <div className="row icons">
              <span className="icon cacu-icon">{item.cacu}</span>
              <span className="icon others-icon">{item.others[1]}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  </div>
  )
}

export default WhyCacu