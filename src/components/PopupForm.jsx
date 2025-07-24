import React, { useState } from 'react'

function PopupForm({  onClose }) {

    const [formData, setFormData] = useState({
        name: '',
        email: ''
    })

    const [isSubmitting, setIsSubmitting] = useState(false)
    const [submitStatus, setSubmitStatus] = useState(null) //if its success or error
    const [statusMessage, setStatusMessage] = useState('');


    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
      
        setSubmitStatus(null);
        setStatusMessage('');
      
        // Validation
        if (!formData.name.trim()) {
          setSubmitStatus('error');
          setStatusMessage('Please enter your name');
          return;
        }
      
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
          setSubmitStatus('error');
          setStatusMessage('Please enter a valid email address');
          return;
        }
      
        setIsSubmitting(true);
      
        try {
          const response = await fetch("https://restapi-django-3.onrender.com/api/waitlist/", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              name: formData.name.trim(),
              email: formData.email.trim().toLowerCase(),
            }),
          });
      
          const data = await response.json();
      
          if (!response.ok) {
            throw new Error(data.message || 'Email already exits');
          }
      
          setSubmitStatus('success');
          setStatusMessage('🎉 Thank you for joining!');
          setFormData({ name: '', email: '' });
      
        } catch (error) {
          console.error('Error:', error);
          setSubmitStatus('error');
          setStatusMessage(error.message || 'An error occurred. Please try again.');
        } finally {
          setIsSubmitting(false);
        }
      };
      
      



  return (
    <div>
        <div className="popup-overlay">
            <div className="popup">
                <span className="close" onClick={onClose}>x</span>
                <h3>Join Waitlist</h3>
                <p>Shape the future of business tools for African entrepreneurs.</p>
                <form action="" onSubmit={handleSubmit}>
                    <input 
                    type="text" 
                    placeholder="Enter full name" 
                    name = "name"
                    value={formData.name}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required 
                    />
                    <input 
                    type="email" 
                    placeholder="Enter email address" 
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    disabled={isSubmitting}
                    required />

                    <button type="submit" className="btn primary" disabled={isSubmitting}
                    >
                    {isSubmitting ? (
                        <span className="spinner-container">
                            <span className="spinner" /> Processing...
                        </span>
                    ) : (
                        'Proceed'
                    )} 
                    </button>       
                </form>

                {submitStatus && (
                    <div
                        style={{
                        marginTop: '1rem',
                        color: submitStatus === 'success' ? 'green' : 'red',
                        fontWeight: 'bold',
                        }}
                    >
                        {statusMessage}
                    </div>
                )}


                <div className="bottom-buttons">
                    {/* <button>Take Survey</button> */}
                    {/* <button>Join Community</button> */}
                </div>
            </div>
        </div>
    </div>
  )
}

export default PopupForm