import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Software Developer</h4>
                <h5>Bizumi</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Developed a full-stack web application by translating Figma designs into reusable front-end components using
              FlutterFlow, React, and integrating them with RESTful APIs and PostgreSQL-backed services.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Technical Lead / Web Application Developer</h4>
                <h5>Concussion Toolkit</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Constructed a digital concussion recovery management web application used by 10+ universities. Designed structured data collection workflows backed by PostgreSQL.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer Intern</h4>
                <h5>E Connect Solutions Pvt. Ltd.</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Optimised front-end interfaces for the RAJ-SIMS web application with React & Material-UI, improving usability for 79+ departments resulting in significant improvement in load times.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>ECCube Open Lab</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Developed Java backend services and RESTful APIs for PostgreSQL/MySQL web applications. Built scalable containerized auth microservices and automated CI/CD workflows.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
