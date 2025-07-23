import React from 'react'

function Hero({ onOpen }) {
  return (
    <div>
    <section className="hero">
      <h1>Join Cacu to 10x Your Business Growth</h1>
      <p>The financial OS for everyday business owners in Africa. Simplifying how business is done and powering growth for MSMEs in Nigeria.</p>
      <div className="buttons">
        <button className="btn primary" onClick={onOpen}>Reserve Your Spot</button>
        {/* <button className="btn">Contact Us</button> */}
      </div>
    </section>
    </div>
  )
}

export default Hero