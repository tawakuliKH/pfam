import React from 'react';
import begining from '../assets/begining.jpeg';

const Story = () => {
  return (
    <section id="story" className="container py-5 story-section">
      <h2 className="section-title">How We Started</h2>
      <div className="row align-items-center">
        <div className="col-md-6">
          <div className="card border-0 shadow-lg">
            <img
              src={begining}
              className="card-img-top"
              alt="Our beginnings"
            />
            <div className="card-body">
              <p className="card-text text-center">
                The beginning of our movement in 2022
              </p>
            </div>
          </div>
        </div>
        <div className="col-md-6">
          <p className="lead">
            The Progressive Forces of Afghanistan Movement emerged as a
            spontaneous, non-profit movement following the collapse of the
            republic.
          </p>
          <p>
            In early 2022, a group of dedicated activists—including exiled
            fighters, human rights advocates, women's rights campaigners,
            journalists, employees of international organizations, and former
            military personnel, both women and men—came together to formally
            launch the Progressive Forces of Afghanistan.
          </p>
          <p>
            Under the leadership of Mawloda Tawana, and guided by a shared
            vision of human commitment, we founded this movement to defend
            women's rights, promote gender equality, achieve justice, eradicate
            violence, and ensure that girls and women have access to education,
            employment, and meaningful participation in social and political
            life.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Story;