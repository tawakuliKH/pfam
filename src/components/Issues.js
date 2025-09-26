import React from 'react';

const Issues = () => {
  const issues = [
    {
      icon: '🛡️',
      title: 'Gender-based Violence',
      description: 'We fight against all forms of gender-based violence and discrimination against women and girls, which remains pervasive in Afghanistan under Taliban rule. Our initiatives include emergency shelters, legal aid, and awareness campaigns to break the cycle of violence.'
    },
    {
      icon: '📚',
      title: 'Denial of Education',
      description: 'We work to restore access to education for women and girls who have been systematically excluded from schools and universities by the Taliban regime. Through underground schools and online education platforms, we\'re ensuring learning continues.'
    },
    {
      icon: '🗳️',
      title: 'Political Suppression',
      description: 'We oppose the suppression of civil and political freedoms, including freedom of expression and political participation for women in Afghanistan. We advocate for women\'s inclusion in peace processes and future governance structures.'
    },
    {
      icon: '⚖️',
      title: 'Religious Extremism',
      description: 'We combat religious and ideological extremism that limits women\'s rights and freedoms, working to promote moderate and inclusive interpretations of faith. Our theological dialogues highlight the compatibility of Islam with gender equality.'
    }
  ];

  return (
    <section id="issues" className="py-5 issues-section">
      <div className="container">
        <h2 className="section-title text-center mb-5">Issues We Address</h2>
        <div className="row">
          {issues.map((issue, index) => (
            <div key={index} className="col-lg-6 mb-4">
              <div className="issue-item d-flex align-items-start p-4">
                <div className="issue-icon-wrapper me-4">
                  <span className="issue-icon">{issue.icon}</span>
                </div>
                <div className="issue-content">
                  <h4 className="issue-title mb-3">{issue.title}</h4>
                  <p className="issue-description mb-0">{issue.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Issues;