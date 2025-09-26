import React, { useState, useEffect } from 'react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(25);
  const [customAmount, setCustomAmount] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [donorName, setDonorName] = useState('');
  const [donorEmail, setDonorEmail] = useState('');

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
      alert('Please fill in all required fields');
      return;
    }
    
    const amount = selectedAmount === 'custom' ? customAmount : selectedAmount;
    
    if (!amount || amount <= 0) {
      alert('Please enter a valid donation amount');
      return;
    }
    
    // Process donation (this would connect to your payment processor)
    alert(`Thank you for your donation of $${amount}! We will process your payment shortly.`);
    
    // Reset form
    setSelectedAmount(25);
    setCustomAmount('');
    setDonorName('');
    setDonorEmail('');
  };

  // Initialize donation option functionality
  useEffect(() => {
    const donationOptions = document.querySelectorAll(".donation-option");
    const paymentMethods = document.querySelectorAll(".payment-method");
    
    // Add click handlers
    donationOptions.forEach(option => {
      option.addEventListener("click", function() {
        donationOptions.forEach(opt => opt.classList.remove("selected"));
        this.classList.add("selected");
        
        if (this.dataset.amount === "custom") {
          document.querySelector(".custom-amount").style.display = "block";
        } else {
          document.querySelector(".custom-amount").style.display = "none";
        }
      });
    });
    
    paymentMethods.forEach(method => {
      method.addEventListener("click", function() {
        paymentMethods.forEach(m => m.classList.remove("selected"));
        this.classList.add("selected");
        this.querySelector("input[type='radio']").checked = true;
      });
    });
    
    // Cleanup
    return () => {
      donationOptions.forEach(option => {
        option.removeEventListener("click", () => {});
      });
      paymentMethods.forEach(method => {
        method.removeEventListener("click", () => {});
      });
    };
  }, []);

  return (
    <section id="donate" className="donate-section py-5">
      <div className="container">
        <h2 className="section-title text-white">Support Our Cause</h2>
        <p className="lead text-center text-white mb-5">
          Your contribution helps us fight for women's rights and create change
        </p>
        <div className="row justify-content-center">
          <div className="col-lg-10">
            <form onSubmit={handleDonateSubmit}>
              <div className="card shadow donation-card">
                <div className="card-body p-5">
                  <div className="row">
                    <div className="col-md-6">
                      <h4 className="card-title mb-4">Make a Donation</h4>
                      <p className="mb-4">
                        Your support enables us to continue our vital work:
                      </p>
                      <ul className="mb-4">
                        <li>Educational workshops and training programs</li>
                        <li>Awareness campaigns and advocacy efforts</li>
                        <li>Legal and social support for women at risk</li>
                        <li>Organizing protests and international lobbying</li>
                        <li>Emergency aid for women in crisis situations</li>
                      </ul>

                      <div className="donation-options mb-4">
                        <h5 className="mb-3">Select Amount</h5>
                        <div className="row">
                          <div className="col-4 mb-3">
                            <div
                              className={`donation-option ${selectedAmount === 25 ? 'selected' : ''}`}
                              onClick={() => handleAmountSelect(25)}
                              data-amount="25"
                            >
                              <h5>$25</h5>
                              <small>Provides educational materials</small>
                            </div>
                          </div>
                          <div className="col-4 mb-3">
                            <div
                              className={`donation-option ${selectedAmount === 50 ? 'selected' : ''}`}
                              onClick={() => handleAmountSelect(50)}
                              data-amount="50"
                            >
                              <h5>$50</h5>
                              <small>Supports a week of advocacy</small>
                            </div>
                          </div>
                          <div className="col-4 mb-3">
                            <div
                              className={`donation-option ${selectedAmount === 100 ? 'selected' : ''}`}
                              onClick={() => handleAmountSelect(100)}
                              data-amount="100"
                            >
                              <h5>$100</h5>
                              <small>Funds legal assistance</small>
                            </div>
                          </div>
                          <div className="col-4 mb-3">
                            <div
                              className={`donation-option ${selectedAmount === 250 ? 'selected' : ''}`}
                              onClick={() => handleAmountSelect(250)}
                              data-amount="250"
                            >
                              <h5>$250</h5>
                              <small>Sponsors a workshop</small>
                            </div>
                          </div>
                          <div className="col-8 mb-3">
                            <div
                              className={`donation-option ${selectedAmount === 'custom' ? 'selected' : ''}`}
                              onClick={() => handleAmountSelect('custom')}
                              data-amount="custom"
                            >
                              <h5>Custom Amount</h5>
                              <small>Enter any amount you wish to donate</small>
                            </div>
                          </div>
                        </div>

                        {selectedAmount === 'custom' && (
                          <div className="custom-amount mt-3">
                            <label htmlFor="customAmount" className="form-label">Enter Amount ($)</label>
                            <input
                              type="number"
                              className="form-control"
                              id="customAmount"
                              value={customAmount}
                              onChange={(e) => setCustomAmount(e.target.value)}
                              placeholder="Enter amount"
                              min="1"
                              required={selectedAmount === 'custom'}
                            />
                          </div>
                        )}
                      </div>
                    </div>

                    <div className="col-md-6">
                      <div className="payment-options">
                        <h5 className="mb-3">Payment Method</h5>

                        <div 
                          className={`payment-method ${paymentMethod === 'creditCard' ? 'selected' : ''}`}
                          onClick={() => handlePaymentMethodSelect('creditCard')}
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentMethod"
                              id="creditCard"
                              checked={paymentMethod === 'creditCard'}
                              onChange={() => handlePaymentMethodSelect('creditCard')}
                              required
                            />
                            <label
                              className="form-check-label w-100"
                              htmlFor="creditCard"
                            >
                              <i className="fab fa-cc-visa fa-2x me-2"></i>
                              <i className="fab fa-cc-mastercard fa-2x me-2"></i>
                              <i className="fab fa-cc-amex fa-2x"></i>
                              <p className="mt-2 mb-0">Credit/Debit Card</p>
                            </label>
                          </div>
                        </div>

                        <div 
                          className={`payment-method ${paymentMethod === 'paypal' ? 'selected' : ''}`}
                          onClick={() => handlePaymentMethodSelect('paypal')}
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentMethod"
                              id="paypal"
                              checked={paymentMethod === 'paypal'}
                              onChange={() => handlePaymentMethodSelect('paypal')}
                            />
                            <label className="form-check-label w-100" htmlFor="paypal">
                              <i className="fab fa-cc-paypal fa-2x"></i>
                              <p className="mt-2 mb-0">PayPal</p>
                            </label>
                          </div>
                        </div>

                        <div 
                          className={`payment-method ${paymentMethod === 'bankTransfer' ? 'selected' : ''}`}
                          onClick={() => handlePaymentMethodSelect('bankTransfer')}
                        >
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="paymentMethod"
                              id="bankTransfer"
                              checked={paymentMethod === 'bankTransfer'}
                              onChange={() => handlePaymentMethodSelect('bankTransfer')}
                            />
                            <label
                              className="form-check-label w-100"
                              htmlFor="bankTransfer"
                            >
                              <i className="fas fa-university fa-2x"></i>
                              <p className="mt-2 mb-0">Bank Transfer</p>
                            </label>
                          </div>
                        </div>

                        <div className="mt-4">
                          <h5 className="mb-3">Donor Information</h5>
                          <div className="mb-3">
                            <label htmlFor="name" className="form-label">Full Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                              value={donorName}
                              onChange={(e) => setDonorName(e.target.value)}
                              placeholder="Enter your name"
                              required
                            />
                          </div>
                          <div className="mb-3">
                            <label htmlFor="email" className="form-label">Email Address *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                              value={donorEmail}
                              onChange={(e) => setDonorEmail(e.target.value)}
                              placeholder="Enter your email"
                              required
                            />
                          </div>
                        </div>

                        <div className="text-center mt-4">
                          <button type="submit" className="btn btn-primary btn-lg w-100">
                            Donate Now
                          </button>
                          <p className="small mt-2">
                            Your donation is secure and tax-deductible
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>

            <div className="impact-stats mt-5">
              <div className="row">
                <div className="col-md-4">
                  <div className="impact-stat">
                    <h3>500+</h3>
                    <p>Women supported through our programs</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="impact-stat">
                    <h3>42</h3>
                    <p>Advocacy campaigns launched</p>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="impact-stat">
                    <h3>18</h3>
                    <p>Countries where we have presence</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="text-center mt-4">
              <p className="text-white">
                For alternative donation methods or to learn about recurring
                donations,{" "}
                <a href="#contact" className="text-warning">contact us</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Donate;