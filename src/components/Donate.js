import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');
  const [showSpendingBreakdown, setShowSpendingBreakdown] = useState(true);
  
  const { t } = useTranslation();

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    if (amount !== 'custom') {
      setCustomAmount('');
    }
  };

  const handlePaymentMethodSelect = (method) => {
    setPaymentMethod(method);
  };

  const handleDonateSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!donorName || !donorEmail) {
      alert(t('donate.alerts.requiredFields'));
      return;
    }
    
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount;
    
    if (!amount || amount <= 0) {
      alert(t('donate.alerts.validAmount'));
      return;
    }
    
    // Process donation
    alert(t('donate.alerts.thankYou', { amount: amount }));
    
    // Reset form
    setSelectedAmount(25);
    setCustomAmount('');
    setDonorName('');
    setDonorEmail('');
  };

  const donationOptions = t('donate.donationOptions', { returnObjects: true });
  const spendingCategories = t('donate.spendingBreakdown.categories', { returnObjects: true });
  const paymentOptions = t('donate.paymentOptions', { returnObjects: true });
  const additionalInfo = t('donate.additionalInfo', { returnObjects: true });

  // Add colors for spending breakdown (not in translations since they're design elements)
  const spendingColors = ['#0b6b6b', '#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4'];

  return (
    <section id="donate" className="donate-section py-5">
      <div className="container">
        <div className="text-center mb-5">
          <h2 className="section-title text-white mb-3">{t('donate.title')}</h2>
          <p className="lead text-white mb-4">
            {t('donate.subtitle')}
          </p>
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <div className="impact-badge">
                <div className="row">
                  <div className="col-md-4">
                    <div className="impact-item">
                      <i className="fas fa-users fa-2x mb-2"></i>
                      <h4 className="mb-1">500+</h4>
                      <small>{t('donate.impact.women')}</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="impact-item">
                      <i className="fas fa-graduation-cap fa-2x mb-2"></i>
                      <h4 className="mb-1">10</h4>
                      <small>{t('donate.impact.programs')}</small>
                    </div>
                  </div>
                  <div className="col-md-4">
                    <div className="impact-item">
                      <i className="fas fa-globe fa-2x mb-2"></i>
                      <h4 className="mb-1">8</h4>
                      <small>{t('donate.impact.countries')}</small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row justify-content-center">
          <div className="col-lg-10">
            <div className="card shadow donation-card">
              <div className="card-body p-4">
                <div className="row">
                  {/* Donation Amount Selection */}
                  <div className="col-lg-6">
                    <h4 className="card-title mb-4">{t('donate.chooseImpact')}</h4>
                    
                    <div className="donation-options mb-4">
                      <div className="row g-3">
                        {donationOptions.map((item, index) => (
                          <div className="col-6" key={index}>
                            <div
                              className={`donation-option ${selectedAmount === item.amount ? 'selected' : ''}`}
                              onClick={() => handleAmountSelect(item.amount)}
                            >
                              <div className="option-icon">{item.icon}</div>
                              <h5>{item.display}</h5>
                              <small>{item.impact}</small>
                            </div>
                          </div>
                        ))}
                      </div>

                      {selectedAmount === 'custom' && (
                        <div className="custom-amount mt-3">
                          <label htmlFor="customAmount" className="form-label">
                            {t('donate.customAmount.label')}
                          </label>
                          <div className="input-group">
                            <span className="input-group-text">$</span>
                            <input
                              type="number"
                              className="form-control"
                              id="customAmount"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              placeholder={t('donate.customAmount.placeholder')}
                              min="1"
                              required
                            />
                          </div>
                        </div>
                      )}
                    </div>

                    {/* Spending Breakdown */}
                    <div className="spending-breakdown">
                      <div className="d-flex justify-content-between align-items-center mb-3">
                        <h5 className="mb-0">{t('donate.spendingBreakdown.title')}</h5>
                        <button
                          type="button"
                          className="btn btn-link p-0"
                          onClick={() => setShowSpendingBreakdown(!showSpendingBreakdown)}
                        >
                          {showSpendingBreakdown ? 
                            t('donate.spendingBreakdown.hideDetails') : 
                            t('donate.spendingBreakdown.showDetails')
                          }
                        </button>
                      </div>
                      
                      {showSpendingBreakdown && (
                        <div className="breakdown-content">
                          {spendingCategories.map((item, index) => (
                            <div key={index} className="breakdown-item mb-3">
                              <div className="d-flex justify-content-between mb-1">
                                <span className="breakdown-category">{item.category}</span>
                                <span className="breakdown-percentage">{item.percentage}%</span>
                              </div>
                              <div className="progress mb-2" style={{ height: '8px' }}>
                                <div 
                                  className="progress-bar" 
                                  style={{ 
                                    width: `${item.percentage}%`,
                                    backgroundColor: spendingColors[index]
                                  }}
                                ></div>
                              </div>
                              <small className="text-muted">{item.description}</small>
                            </div>
                          ))}
                          <div className="transparency-note">
                            <i className="fas fa-shield-alt me-2"></i>
                            {t('donate.spendingBreakdown.transparency')}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div className="col-lg-6">
                    <form onSubmit={handleDonateSubmit}>
                      <h5 className="mb-4">{t('donate.completeDonation')}</h5>

                      {/* Donor Information */}
                      <div className="mb-4">
                        <div className="row g-3">
                          <div className="col-12">
                            <label htmlFor="name" className="form-label">
                              {t('donate.donorInfo.name')}
                            </label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              value={donorName}
                              onChange={(e) => setDonorName(e.target.value)}
                              placeholder={t('donate.donorInfo.namePlaceholder')}
                              required
                            />
                          </div>
                          <div className="col-12">
                            <label htmlFor="email" className="form-label">
                              {t('donate.donorInfo.email')}
                            </label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              value={donorEmail}
                              onChange={(e) => setDonorEmail(e.target.value)}
                              placeholder={t('donate.donorInfo.emailPlaceholder')}
                              required
                            />
                          </div>
                        </div>
                      </div>

                      {/* Payment Method */}
                      <div className="payment-options mb-4">
                        <label className="form-label mb-3">{t('donate.paymentMethod')}</label>
                        <div className="row g-3">
                          {paymentOptions.map((method) => (
                            <div className="col-12" key={method.id}>
                              <div 
                                className={`payment-method ${paymentMethod === method.id ? 'selected' : ''}`}
                                onClick={() => handlePaymentMethodSelect(method.id)}
                              >
                                <div className="form-check mb-0">
                                  <input
                                    className="form-check-input"
                                    type="radio"
                                    name="paymentMethod"
                                    id={method.id}
                                    checked={paymentMethod === method.id}
                                    onChange={() => {}}
                                    required
                                  />
                                  <label className="form-check-label w-100" htmlFor={method.id}>
                                    <div className="d-flex align-items-center">
                                      <i className={`fas ${method.icon} fa-2x me-3`}></i>
                                      <div>
                                        <h6 className="mb-1">{method.label}</h6>
                                        {method.methods && (
                                          <div className="payment-icons">
                                            {method.methods.map((card, idx) => (
                                              <i key={idx} className={`fab fa-cc-${card} me-1`}></i>
                                            ))}
                                          </div>
                                        )}
                                      </div>
                                    </div>
                                  </label>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Donation Summary */}
                      <div className="donation-summary mb-4">
                        <div className="summary-item d-flex justify-content-between">
                          <span>{t('donate.donationSummary.amount')}</span>
                          <strong>${selectedAmount === 'custom' ? customAmount : selectedAmount}</strong>
                        </div>
                        <div className="summary-item d-flex justify-content-between">
                          <span>{t('donate.donationSummary.fee')}</span>
                          <span>{t('donate.donationSummary.free')}</span>
                        </div>
                        <hr />
                        <div className="summary-total d-flex justify-content-between">
                          <span>{t('donate.donationSummary.total')}</span>
                          <strong>${selectedAmount === 'custom' ? customAmount : selectedAmount}</strong>
                        </div>
                      </div>

                      {/* Submit Button */}
                      <button type="submit" className="btn btn-primary btn-lg w-100 donate-btn-2">
                        <i className="fas fa-heart me-2"></i>
                        {t('donate.donateButton')}
                      </button>

                      <div className="text-center mt-3">
                        <small className="text-muted">
                          <i className="fas fa-lock me-1"></i>
                          {t('donate.securityNote')}
                        </small>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="row mt-4">
              {additionalInfo.map((info, index) => (
                <div key={index} className="col-md-6">
                  <div className="info-card">
                    <i className={info.icon}></i>
                    <h5>{info.title}</h5>
                    <p>{info.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;