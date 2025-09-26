import React, { useState } from 'react';
import tawana from '../assets/employees/tawana.jpeg';
import safi from '../assets/employees/safi.jpeg';
import rad from '../assets/employees/rad.jpeg';
import ibrahim from '../assets/employees/ibrahim.jpeg';
import hamza from '../assets/employees/hamza.jpeg';
import farahmand from '../assets/employees/farahmand.jpeg';
import whoWeAre from '../assets/who_we_are.jpeg';
import mission_1 from '../assets/mission_1.jpeg';
import mission_2 from '../assets/mission_2.jpeg';
import mission_3 from '../assets/mission_3.jpeg';
import future_1 from '../assets/future_1.jpeg';
import future_2 from '../assets/future_2.jpeg';
import future_3 from '../assets/future_3.jpeg';
import future_4 from '../assets/future_4.jpeg';

const About = () => {
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

 const employees = [
    {
      id: 1,
      name: "Mawloda Tawana",
      position: "President and Founder",
      image: tawana,
      bio: "Mawloda Tawana is a distinguished women's rights activist and political leader with over 15 years of dedicated service to gender equality and human rights advocacy. Her extensive background in political science and international relations has positioned her as a formidable voice for Afghan women's rights on both national and international platforms.",
      fullBio: `Mawloda Tawana is a prominent women's rights activist and political leader with a distinguished career spanning over 15 years. She holds a Bachelor's degree in Political Science and International Relations, which provided the academic foundation for her lifelong commitment to social justice. Her professional journey began with the Afghanistan Human Rights Defenders Committee in 2013, where she documented human rights violations and advocated for legal reforms.

Mawloda's expertise in gender issues led to her appointment as Gender Advisor at the Ministry of Interior Affairs of Afghanistan in 2018, where she developed and implemented gender mainstreaming strategies across security institutions. She subsequently served as Secretary at the Ministry of Education and later as Director of Gender at the National Public Protection Force, where she pioneered initiatives to increase women's participation in public security roles and addressed gender-based violence within institutional frameworks.

Her leadership extends beyond national borders, having represented Afghan women at numerous international forums including the United Nations. Most recently, she participated in the Women Empowerment Summit in Albania (September 2024) and the WFA Gender Justice and Accountability conference (November 2024), where she contributed to strategic discussions on accountability mechanisms for gender-based crimes. Under her visionary leadership, the Progressive Forces of Afghanistan Movement has grown into a robust network of activists across multiple countries, united in their commitment to gender equality, justice, and democratic values.`
    },
    {
      id: 2,
      name: "Zohal Rad",
      position: "Leadership Member",
      image: rad,
      bio: "Zohal Rad is an accomplished educator, media professional, and human rights advocate with more than 14 years of experience in educational development and women's empowerment initiatives. Her multifaceted approach combines traditional education with modern media strategies to advance gender equality.",
      fullBio: `Zohal Rad brings a wealth of experience in education, media, and human rights advocacy to our movement. With a Bachelor's degree in Persian Dari Language and Literature from Mawlana Jalaluddin Mohammad Balkhi University, she began her career as a teacher in public schools, dedicating over 13 years to educating the next generation of Afghan youth. Her commitment to human rights led her to work with the Afghanistan Independent Human Rights Commission in Mazar-e-Sharif, where she documented violations and supported victims.

Since 2016, Zohal has served as Director of Gahwara Organization, where she has developed innovative educational programs for marginalized communities, particularly focusing on girls' education and women's literacy. Her media activities since 2018 have included producing educational content and awareness campaigns that challenge gender stereotypes and promote women's rights. Zohal's unique ability to bridge traditional educational methods with modern communication technologies has made her programs particularly effective in reaching remote and conservative communities.

Her work has been recognized by several educational and human rights organizations, and she continues to develop curriculum materials that integrate human rights education with traditional subjects, creating a holistic approach to empowerment through knowledge.`
    },
    {
      id: 3,
      name: "Fatima Farahmand",
      position: "Leadership Member",
      image: farahmand,
      bio: "Fatima Farahmand is a technology professional and human rights defender who combines her technical expertise with passionate advocacy for gender equality. Her innovative approaches to community mobilization and digital security have significantly enhanced our movement's effectiveness.",
      fullBio: `Fatima Farahmand represents the new generation of Afghan women leaders who leverage technology for social change. With a Bachelor's degree in Computer Science, she began her career in marketing at Moore Afghanistan, where she developed digital strategies for social enterprises. Her commitment to human rights led her to work as a Human Rights Defender with the Central Highlands Civil Societies Coordination Assembly, where she documented rights violations and organized community awareness programs.

Fatima's technical skills have been instrumental in developing secure communication systems for women activists operating in restrictive environments. As an Interview Facilitator and researcher for Albany International Associates, she conducted sensitive research on women's access to education and employment opportunities. Currently serving as Afghan Community Mobilizer with Community World Service Asia, Fatima has successfully organized numerous workshops on digital literacy, women's economic empowerment, and leadership development.

Her board membership with the People Council of Hemat demonstrates her commitment to grassroots community development. Fatima's unique contribution lies in her ability to design technology-based solutions that address traditional barriers to women's participation, creating innovative platforms for advocacy and mobilization that transcend geographical limitations.`
    },
    {
      id: 4,
      name: "Humaira Ibrahim",
      position: "Leadership Member",
      image: ibrahim,
      bio: "Humaira Ibrahim is a versatile activist who combines artistic expression with human rights advocacy. Her innovative approach integrates traditional crafts with contemporary activism, creating unique pathways for women's economic and social empowerment.",
      fullBio: `Humaira Ibrahim brings a creative and multidimensional approach to women's rights advocacy. With a diploma from Sayeed Jamaludin Afghan University, she has developed a unique methodology that combines vocational training with rights awareness. As a tailor and painter with over 14 years of experience, Humaira has established community-based workshops where women learn marketable skills while discussing their rights and building collective consciousness.

Her work with Dornika Social Organization as a human rights advocate focused on providing legal literacy and economic opportunities for marginalized women. Humaira's artistic talents have become a powerful tool for advocacy; her paintings depicting the struggles and resilience of Afghan women have been exhibited in several cultural events, drawing attention to gender inequality through visual storytelling.

What distinguishes Humaira's approach is her belief in the transformative power of economic independence combined with raised consciousness. She has developed a comprehensive curriculum that integrates skill development with human rights education, creating sustainable pathways for women's empowerment. Her community-based model has been replicated in several locations, demonstrating how traditional skills can be leveraged for contemporary social change while preserving cultural heritage.`
    },
    {
      id: 5,
      name: "Qandi Safi",
      position: "Leadership Member",
      image: safi,
      bio: "Qandi Safi is a seasoned women's rights activist, educator, and media professional whose courageous advocacy has amplified the voices of Afghan women through various platforms. Her multifaceted career spans education, media, and grassroots mobilization.",
      fullBio: `Qandi Safi's dedication to women's rights spans over two decades, beginning with her work as a school teacher where she educated generations of Afghan girls. Her commitment to gender equality led her to become a founding member of the "Wak" Afghan Women's Movement in 2018, through which she has organized numerous campaigns addressing educational access, economic empowerment, and political participation for women.

As a TV Presenter with Khyber TV Channel, Qandi used media platforms to discuss sensitive social issues affecting women, often challenging conservative narratives and providing alternative perspectives. Her programs focused on cultural and social issues have reached wide audiences, creating important spaces for public discussion about gender equality. Qandi's approach combines traditional advocacy with modern communication strategies, making her messages accessible to diverse audiences.

Her extensive experience in community organizing includes establishing women's circles for discussion and support, developing early warning systems for gender-based violence, and creating economic cooperatives that enable women to achieve financial independence. Qandi's work demonstrates how sustained community engagement, combined with strategic media presence, can create meaningful change at both individual and societal levels.`
    },
    {
      id: 6,
      name: "Mohammad Nasim Hamza",
      position: "Leadership Member",
      image: hamza,
      bio: "Mohammad Nasim Hamza brings over three decades of distinguished public service experience to our movement. His extensive background in security sector governance and administrative leadership provides crucial strategic perspective to our advocacy efforts.",
      fullBio: `Mohammad Nasim Hamza offers invaluable expertise gained through a remarkable 30-year career in public service, primarily as General Director of Education and Training at the Ministry of Interior Affairs of Afghanistan. His military background and administrative experience have provided him with deep insight into institutional governance and strategic planning. Throughout his career, Mohammad worked tirelessly to reform security institutions, emphasizing the importance of gender sensitivity and women's inclusion in public security roles.

His contributions to developing training curricula that integrated human rights principles and gender equality considerations have had lasting impact on security sector reform efforts. Mohammad's understanding of governmental systems and bureaucratic processes makes him particularly effective in navigating complex institutional landscapes and developing sustainable advocacy strategies. His commitment to women's rights is rooted in his belief that genuine national development requires the full participation of all citizens, regardless of gender.

Since joining the movement, Mohammad has been instrumental in developing our strategic planning framework, organizational structure, and engagement strategies with international institutions. His ability to bridge traditional governance systems with progressive values makes him a unique asset in our collective pursuit of gender equality and social justice.`
    }
  ];

  const openModal = (employee) => {
    setSelectedEmployee(employee);
    setIsModalOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedEmployee(null);
    document.body.style.overflow = 'auto';
  };

  return (
    <section id="about" className="container py-5 employee-section">
      <h2 className="section-title">Our Leadership Team</h2>
      <p className="text-center mb-5 lead" style={{color: 'var(--primary-light)', maxWidth: '600px', margin: '0 auto 50px'}}>
        Meet the dedicated individuals leading our movement for gender equality and women's rights
      </p>
      
      <div className="row">
        {employees.map((employee) => (
          <div key={employee.id} className="col-lg-4 col-md-6 mb-4">
            <div className="employee-card">
              <div 
                className="employee-image-container"
                onClick={() => openModal(employee)}
              >
                <img src={employee.image} alt={employee.name} />
              </div>
              
              <h3 
                className="employee-name"
                onClick={() => openModal(employee)}
              >
                {employee.name}
              </h3>
              
              <p className="employee-position">{employee.position}</p>
              <p className="employee-bio">{employee.bio}</p>
              
              <button 
                className="read-more-btn"
                onClick={() => openModal(employee)}
              >
                Read Full Bio
              </button>
            </div>
          </div>
        ))}
      </div>

{isModalOpen && selectedEmployee && (
  <div className="employee-modal" onClick={closeModal}>
    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
      <button className="modal-close" onClick={closeModal}>×</button>

      {/* Header */}
      <div className="modal-header">
        <img 
          src={selectedEmployee.image} 
          alt={selectedEmployee.name} 
          className="modal-image" 
        />
        <div className="modal-title-container">
          <h2 className="modal-title">{selectedEmployee.name}</h2>
          <p className="modal-subtitle">{selectedEmployee.position}</p>
        </div>
      </div>

      {/* Scrollable Body */}
      <div className="modal-body">
        <div className="modal-bio">
          {selectedEmployee.fullBio
            .split(/\n\s*\n/) // paragraph splitting
            .map((paragraph, index) => (
              <p key={index}>{paragraph.trim()}</p>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="modal-footer">
        <button className="back-button" onClick={closeModal}>
          <span className="back-arrow">←</span>
          Back to Team
        </button>
      </div>
    </div>
  </div>
)}



      {/* Who We Are Section */}
      <section id="who-we-are" className="py-5 who-we-are-section">
        <div className="container">
          <h2 className="section-title">Who We Are</h2>
          <div className="row align-items-center">
            <div className="col-md-6">
              <p className="lead">
                The Progressive Forces of Afghanistan Movement is a spontaneous
                and non-profit initiative that was established after the
                collapse of the Republic in 2022.
              </p>
              <p>
                Our movement is dedicated to defending the rights of women,
                advocating for their systematic participation in social and
                political life, and promoting gender equality, justice, and
                freedom. We are committed to eradicating violence, ensuring
                equal opportunities, and securing access to education,
                employment, and public engagement for girls and women across the
                country.
              </p>
              <p>
                We firmly oppose all forms of deprivation and restrictions
                imposed on women worldwide, and in particular, we advocate for
                Afghan women who have been stripped of their fundamental human
                rights by the repressive Taliban regime.
              </p>
              <div className="impact-stats mt-4">
                <div className="row">
                  <div className="col-6">
                    <div className="impact-stat">
                      <h3>10+</h3>
                      <p>Countries with active members</p>
                    </div>
                  </div>
                  <div className="col-6">
                    <div className="impact-stat">
                      <h3>500+</h3>
                      <p>Women supported</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card border-0 shadow-lg">
                <img
                  src={whoWeAre}  className="card-img-top"
                  alt="Protest for women's rights"
                />
                <div className="card-body">
                  <p className="card-text text-center">
                    Advocating for women's rights and gender equality
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Purpose Section */}
      <section id="mission" className="py-5 mission-section">
        <div className="container">
          <h2 className="section-title">Mission & Purpose</h2>
          <div className="row g-4">
            <div className="col-md-4">
              <div className="mission-card bg-white shadow-sm animate__animated">
                <div className="card-img-container">
                  <img
                    src={mission_1}
                    alt="Equality"
                  />
                </div>
                <h5>Commitment to Equality</h5>
                <p>
                  We act for the elimination of all forms of gender-based
                  discrimination and promote equality between women and men in all
                  spheres of life. Our initiatives focus on legal reforms, awareness
                  campaigns, and community engagement to build a more equitable society.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="mission-card bg-white shadow-sm animate__animated">
                <div className="card-img-container">
                  <img
                    src={mission_2}
                    alt="Combating Violence"
                  />
                </div>
                <h5>Combating Violence</h5>
                <p>
                  We are committed to preventing, addressing, and eradicating all
                  forms of gender-based violence against women and girls through
                  advocacy and accountability initiatives. We provide safe spaces,
                  legal support, and psychological assistance to survivors.
                </p>
              </div>
            </div>
            
            <div className="col-md-4">
              <div className="mission-card bg-white shadow-sm animate__animated">
                <div className="card-img-container">
                  <img
                    src={mission_3}
                    alt="Equal Opportunities"
                  />
                </div>
                <h5>Equal Opportunities</h5>
                <p>
                  We strive to ensure equal access for women and girls to quality
                  education, employment opportunities, political participation,
                  and public decision-making. Our scholarship programs and vocational
                  training initiatives empower women to become self-sufficient leaders.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Future Vision Section */}
      <section id="vision" className="vision-section py-5">
        <div className="container">
          <h2 className="section-title" style={{color: "white"}}>Our Future Vision</h2>
          <div className="row">
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_1}
                    alt="Equal Society"
                  />
                </div>
                <h4>An Equal Society</h4>
                <p>
                  We envision an Afghanistan free from discrimination, where
                  women and men enjoy equal rights and opportunities in all
                  aspects of life. A society where gender no longer determines
                  one's destiny or limits one's potential.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_2}
                    alt="Education for All"
                  />
                </div>
                <h4>Education for All</h4>
                <p>
                  We dream of a future where every girl has access to quality
                  education and the opportunity to pursue her dreams without
                  restrictions. Education is the foundation for empowerment and
                  social transformation.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_3}
                    alt="Women in Leadership"
                  />
                </div>
                <h4>Women in Leadership</h4>
                <p>
                  We work toward a future where women actively participate in
                  decision-making processes and hold leadership positions at all
                  levels. Women's perspectives are essential for creating inclusive
                  policies and sustainable development.
                </p>
              </div>
            </div>
            
            <div className="col-md-6">
              <div className="vision-item animate__animated">
                <div className="card-img-container">
                  <img
                    src={future_4}
                    alt="Peaceful Afghanistan"
                  />
                </div>
                <h4>Peaceful Afghanistan</h4>
                <p>
                  We envision a peaceful Afghanistan where all citizens can live
                  with dignity, security, and hope for a brighter future. A nation
                  where diversity is celebrated and human rights are protected for all.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;