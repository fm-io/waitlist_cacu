import React from 'react'

function WeCacu() {
  const whatsappLink = " https://chat.whatsapp.com/HX55RoAQQM62QPUU9cEJEf "
  const surveyLink = " https://forms.gle/HPxhn8YQ41q6qYkg9 ";

  const handleSurveyClick = () => {
    window.open(surveyLink, "_blank", "noopener,noreferrer")
  }

  const handleCommunityLink = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }



  return (
    <div className="cacu-hero">
    <div className="hero-content">
      <div className="text-section">
        <h1>Meet Cacu.</h1>
        <p className="tagline">
        More than an app—we’re a movement. Your financial co-pilot, empowering Nigerian MSMEs to thrive smarter and faster
        </p>
        <p className="subtext">
          Simplifying how business is done and powering growth for MSMEs in Nigeria.
        </p>
        <div className="cta-buttons">
          <button className="primary-btn" onClick={handleSurveyClick}> Take Survey</button>
          <button className="secondary-btn" onClick={handleCommunityLink}>Join Community</button>
        </div>
        <div className="community-perks">
          <p>
            <span className="highlight">Community Perks:</span> Join 1,000+ MSMEs and get exclusive
            resources, free business tools, and early access to Cacu features!
          </p>
        </div>
      </div>
      <div className="image-section">
        <img 
          src="/images/1r3.png" 
          alt="Cacu App Interface" 
          className="hero-image"
        />
      </div>
    </div>
  </div>
  )
}

export default WeCacu