import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import useScrollFade from '../hooks/useScrollFade';

export default function Contact() {
  const { ref, visible } = useScrollFade();
  const formRef = useRef();
  
  const [formData, setFormData] = useState({
    user_name: '',
    user_email: '',
    user_company: '',
    user_retainer: 'Business Retainer (R9,999/mo)',
    message: ''
  });

  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState(null); // 'success' | 'error'

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    // Read environment service keys or fallback to a gorgeous mockup transition
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!serviceId || !templateId || !publicKey) {
      // Mockup submission for testing environments
      setTimeout(() => {
        setLoading(false);
        setStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          user_company: '',
          user_retainer: 'Business Retainer (R9,999/mo)',
          message: ''
        });
      }, 1500);
      return;
    }

    // Direct EmailJS browser API triggers
    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setLoading(false);
        setStatus('success');
        setFormData({
          user_name: '',
          user_email: '',
          user_company: '',
          user_retainer: 'Business Retainer (R9,999/mo)',
          message: ''
        });
      })
      .catch((error) => {
        console.error('EmailJS Send Error:', error);
        setLoading(false);
        setStatus('error');
      });
  };

  return (
    <section id="contact" className="bg-bg-primary py-20 relative z-20">
      <div className="w-full max-w-7xl mx-auto px-6">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Form Description */}
          <div className="lg:col-span-5 select-none">
            <span className="section-label mb-2 block">Secure Your Retainer Plan</span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-text-dark tracking-tight leading-tight mb-6">
              Let's build reliable IT foundations together.
            </h2>
            <p className="text-base text-text-secondary leading-relaxed mb-6">
              Submit your inquiry and our certified cloud engineers will connect with you within 2 hours to audit your current system setups.
            </p>
            
            <div className="flex flex-col gap-4 mt-8 text-sm font-semibold text-text-secondary">
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 bg-accent/8 border border-accent/20 rounded-lg flex items-center justify-center text-accent">
                  📍
                </span>
                <span>Gauteng, South Africa (Sandton Office)</span>
              </div>
              <div className="flex items-center gap-3.5">
                <span className="w-9 h-9 bg-accent/8 border border-accent/20 rounded-lg flex items-center justify-center text-accent">
                  ✉️
                </span>
                <span>support@lkdigitalsolutions.co.za</span>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Capture Card */}
          <div 
            ref={ref}
            className="lg:col-span-7"
            style={{
              opacity: visible ? 1 : 0,
              transform: visible ? 'translateY(0)' : 'translateY(24px)',
              transition: 'all 0.7s ease-out 100ms'
            }}
          >
            <div className="bg-white border border-border-dark rounded-2xl p-6 sm:p-8 shadow-sm">
              <form ref={formRef} onSubmit={handleFormSubmit} className="flex flex-col gap-5">
                
                {/* Full name input */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_name" className="text-xs font-bold text-text-dark uppercase tracking-wider">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="user_name"
                    name="user_name"
                    required
                    value={formData.user_name}
                    onChange={handleInputChange}
                    placeholder="Enter your name"
                    className="bg-bg-light border border-border-light rounded-xl py-3 px-4 text-sm text-text-dark font-medium placeholder-text-muted focus:outline-none focus:border-accent focus:bg-white transition-all"
                  />
                </div>

                {/* Grid Inputs (Email & Company) */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="user_email" className="text-xs font-bold text-text-dark uppercase tracking-wider">
                      Business Email
                    </label>
                    <input
                      type="email"
                      id="user_email"
                      name="user_email"
                      required
                      value={formData.user_email}
                      onChange={handleInputChange}
                      placeholder="name@company.co.za"
                      className="bg-bg-light border border-border-light rounded-xl py-3 px-4 text-sm text-text-dark font-medium placeholder-text-muted focus:outline-none focus:border-accent focus:bg-white transition-all"
                    />
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="user_company" className="text-xs font-bold text-text-dark uppercase tracking-wider">
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="user_company"
                      name="user_company"
                      required
                      value={formData.user_company}
                      onChange={handleInputChange}
                      placeholder="Your firm name"
                      className="bg-bg-light border border-border-light rounded-xl py-3 px-4 text-sm text-text-dark font-medium placeholder-text-muted focus:outline-none focus:border-accent focus:bg-white transition-all"
                    />
                  </div>
                </div>

                {/* Retainer Selection Box */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="user_retainer" className="text-xs font-bold text-text-dark uppercase tracking-wider">
                    Select Retainer Tier
                  </label>
                  <select
                    id="user_retainer"
                    name="user_retainer"
                    value={formData.user_retainer}
                    onChange={handleInputChange}
                    className="bg-bg-light border border-border-light rounded-xl py-3 px-4 text-sm text-text-dark font-semibold focus:outline-none focus:border-accent focus:bg-white transition-all cursor-pointer"
                  >
                    <option value="Starter Retainer (R4,999/mo)">Starter Retainer (R4,999 / month)</option>
                    <option value="Business Retainer (R9,999/mo)">Business Retainer (R9,999 / month)</option>
                    <option value="Enterprise Retainer (Custom)">Enterprise Retainer (Custom Quoted)</option>
                  </select>
                </div>

                {/* Message text area */}
                <div className="flex flex-col gap-1.5">
                  <label htmlFor="message" className="text-xs font-bold text-text-dark uppercase tracking-wider">
                    How can our cloud engineers help you?
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows="4"
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Describe your current IT setups or challenges..."
                    className="bg-bg-light border border-border-light rounded-xl py-3 px-4 text-sm text-text-dark font-medium placeholder-text-muted focus:outline-none focus:border-accent focus:bg-white transition-all resize-none"
                  />
                </div>

                {/* Feedback overlays */}
                {status === 'success' && (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-700 text-xs font-bold py-3 px-4.5 rounded-xl flex items-center gap-2 animate-fadeIn">
                    <span className="text-sm">✓</span> Inquiry successfully sent! Our cloud engineering team will call you within 2 hours.
                  </div>
                )}
                {status === 'error' && (
                  <div className="bg-red-50 border border-red-200 text-red-700 text-xs font-bold py-3 px-4.5 rounded-xl flex items-center gap-2 animate-fadeIn">
                    <span className="text-sm">⚠️</span> An error occurred while sending. Please contact support@lkdigitalsolutions.co.za directly.
                  </div>
                )}

                {/* Submit action button */}
                <button
                  type="submit"
                  disabled={loading}
                  className="btn-primary w-full py-3.5 font-bold uppercase tracking-wider flex items-center justify-center gap-2 cursor-pointer shadow-md"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                      </svg>
                      <span>Transmitting Inquiry...</span>
                    </>
                  ) : (
                    <span>Submit Inquiry</span>
                  )}
                </button>

              </form>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
