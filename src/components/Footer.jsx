import React from 'react'
import { FaTwitter, FaFacebookF, FaInstagram, FaWhatsapp } from 'react-icons/fa';


function Footer() {
  const whatsappLink = "https://chat.whatsapp.com/HX55RoAQQM62QPUU9cEJEf";


  const handleWhatsappCommunity = () => {
    window.open(whatsappLink, "_blank", "noopener,noreferrer")
  }


  return (
    <div>
         <footer className="cacu-footer">
            <div className="footer-container">
              <div className="brand-section">
                <h1 className="footer-logo">Cacu</h1>
                <p className="footer-tagline">
                  Building the financial OS for everyday business owners in Africa.
                </p>
              </div>

              <div className="footer-grid">
                <div className="footer-column">
                  <h3 className="footer-heading">Resources</h3>
                  <ul className="footer-links">
                    <li><a href="#">Take Survey</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms of Service</a></li>
                  </ul>
                </div>

                <div className="footer-column">
                  <h3 className="footer-heading">Community</h3>
                  <ul className="footer-links">
                    <li>
                      <a href="#" className='whatsapp-link'>
                        <span className="whatsapp-icon" onClick={handleWhatsappCommunity}>Whatsapp Community</span>
                      </a>
                      <div className="social-icons">
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"><FaTwitter /></a>
                            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
                            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
                        </div>                     
                    </li>
                  </ul>
                </div>
              </div>

              <div className="footer-bottom">
                <p className="copyright">
                  © 2025 Cacu. All rights reserved.
                </p>
              </div>
            </div>
         </footer>
    </div>
  )
}

export default Footer