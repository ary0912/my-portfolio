import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";

const projects = [
  {
    title: "OpenTrials Platform",
    category: "Clinical Analytics Dashboard (2026)",
    description: "Built a full-stack clinical research web application to ingest and analyse schema-agnostic CSV datasets.",
    tools: "Next.js, FastAPI, PostgreSQL, Pandas, SQLAlchemy",
    image: "/images/1.png",
    live: "https://open-trial-platform.vercel.app/",
    github: "https://github.com/ary0912/open-trial-platform",
  },
  {
    title: "EcoDash",
    category: "Sustainability Dashboard (2026)",
    description: "Designed a responsive analytics dashboard to visualise environmental metrics like carbon emissions and energy usage.",
    tools: "React, TypeScript, Tailwind, Recharts",
    image: "/images/sapphire.png",
    live: "https://eco-dash-2.vercel.app/",
    github: "https://github.com/ary0912/EcoDash",
  },
  {
    title: "MoveWell",
    category: "Health Assessment Platform (Jan 2026)",
    description: "Frontend-first health assessment platform transforming complex pain and mobility inputs into accessible dashboards.",
    tools: "React, TypeScript, Tailwind CSS, Recharts",
    image: "/images/Maxlife.png",
    live: "https://movewell2.vercel.app/",
    github: "https://github.com/ary0912/movewell",
  },
  {
    title: "SignalScope",
    category: "Real-Time Telemetry Monitor (2026)",
    description: "Developed a real-time telemetry monitoring interface with interactive time-series visualisations and anomaly detection.",
    tools: "React, TypeScript, WebSocket Streaming",
    image: "/images/bond.png",
    live: "https://telemetry-monitor-bx3tjnnix-ary0912s-projects.vercel.app/",
    github: "https://github.com/ary0912/telemetry-monitor",
  },
  {
    title: "Environmental Risk Intelligence Platform",
    category: "Risk Analysis Backend (2026)",
    description: "Engineered a scalable backend platform to analyze environmental datasets and compute ecological risk scores.",
    tools: "Python, FastAPI, REST APIs, Docker, Pytest",
    image: "/images/radix.png",
    live: "https://environmental-risk-platform.vercel.app",
    github: "https://github.com/ary0912/environmental-risk-platform",
  },
  {
    title: "Socio-Economic Clustering & Forecasting",
    category: "Forecasting Model (May 2025)",
    description: "Analyzed data from 33,000+ LSOAs using PCA/t-SNE and developed Bayesian models to forecast WFH trends.",
    tools: "PyMC3, Scikit-learn, PCA, t-SNE, GLM",
    image: "/images/Solidx.png",
    github: "https://github.com/ary0912/WFH_Dashboard",
  },
  {
    title: "Morphological Diversification",
    category: "Machine Learning / Clustering (May 2025)",
    description: "Analyzed 3M+ morphometric time-series points to detect evolutionary patterns in plankton using unsupervised learning.",
    tools: "Python, Pandas, KMeans, SciPy",
    image: "/images/radix.png",
    github: "https://github.com/ary0912/foraminifera-morpho-evolution",
  },
  {
    title: "Word Similarity Clustering",
    category: "NLP Pipeline (Apr 2025)",
    description: "Spearheaded an NLP pipeline to semantically cluster frequent nouns from classic novels using graph and KMeans clustering.",
    tools: "Python, NLP, NLTK, NetworkX, KMeans",
    image: "/images/bond.png",
    github: "https://github.com/ary0912/semantic-clustering-classic-novels",
  },
  {
    title: "Climate Sentiment Classification",
    category: "Sentiment Analysis & NER (Apr 2025)",
    description: "Developed sentiment classifiers for ESG financial disclosures and fine-tuned BERT for climate-related Twitter NER.",
    tools: "Python, BERTopic, HuggingFace, BERT",
    image: "/images/sapphire.png",
    github: "https://github.com/ary0912/climate-ner-transformer-nlp",
  },
  {
    title: "EcoVision",
    category: "Computer Vision System (Feb 2025)",
    description: "Smart environment system integrating real-time trash segregation, waste detection, and crowd density analysis.",
    tools: "Python, OpenCV, YOLOv5, IoT, Flask",
    image: "/images/Maxlife.png",
    github: "https://github.com/anirudh24471/BrisHack25",
  },
  {
    title: "MyTravel",
    category: "Serverless Blogging MVP (Dec 2024)",
    description: "Architected and deployed a serverless blogging MVP using AWS services including Lambda, S3, and Cognito.",
    tools: "AWS Lambda, S3, Cognito, API Gateway",
    image: "/images/Solidx.png",
    github: "https://github.com/ary0912/MyTravel",
  },
  {
    title: "GoCart",
    category: "Peer-to-Peer Platform MVP (Jun 2024)",
    description: "Designed and prototyped a secure peer-to-peer platform in Figma enabling verified exchange of physical goods.",
    tools: "Figma, UX Design, Prototyping",
    image: "/images/radix.png",
    behance: "https://www.behance.net/gallery/200088939/The-Grocery-App",
  },
  {
    title: "Knee Arthritis Detection",
    category: "Deep Learning / CNN (Nov 2023)",
    description: "Analyzed convolutional neural networks for arthritis prediction from X-rays, boosting classification accuracy to 97%.",
    tools: "TensorFlow, EfficientNetB5, Medical Imaging",
    image: "/images/bond.png",
    github: "https://github.com/ary0912/Image-Augumentation-in-Knee-Arthritis",
  },
  {
    title: "Property Portal",
    category: "Real Estate Portal (Mar 2023)",
    description: "Developed a secure real estate portal within 24 hours featuring user verification to enhance transaction transparency.",
    tools: "React, Node.js, Firebase",
    image: "/images/sapphire.png",
    github: "https://github.com/ary0912/Property-Portal",
  },
  {
    title: "PLANITNOW",
    category: "Productivity Web App (Mar 2023)",
    description: "Designed a journaling and productivity web app integrating secure login, to-do lists, and time logs.",
    tools: "MongoDB, Express.js, React, Node.js, JWT",
    image: "/images/Maxlife.png",
    github: "https://github.com/ary0912/PlanITNow",
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const goToSlide = useCallback(
    (index: number) => {
      if (isAnimating) return;
      setIsAnimating(true);
      setCurrentIndex(index);
      setTimeout(() => setIsAnimating(false), 500);
    },
    [isAnimating]
  );

  const goToPrev = useCallback(() => {
    const newIndex =
      currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  const goToNext = useCallback(() => {
    const newIndex =
      currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    goToSlide(newIndex);
  }, [currentIndex, goToSlide]);

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>

        <div className="carousel-wrapper">
          {/* Navigation Arrows */}
          <button
            className="carousel-arrow carousel-arrow-left"
            onClick={goToPrev}
            aria-label="Previous project"
            data-cursor="disable"
          >
            <MdArrowBack />
          </button>
          <button
            className="carousel-arrow carousel-arrow-right"
            onClick={goToNext}
            aria-label="Next project"
            data-cursor="disable"
          >
            <MdArrowForward />
          </button>

          {/* Slides */}
          <div className="carousel-track-container">
            <div
              className="carousel-track"
              style={{
                transform: `translateX(-${currentIndex * 100}%)`,
              }}
            >
              {projects.map((project, index) => (
                <div className="carousel-slide" key={index}>
                  <div className="carousel-content">
                    <div className="carousel-info">
                      <div className="carousel-number">
                        <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
                      </div>
                      <div className="carousel-details">
                        <div style={{ display: "flex", alignItems: "center", gap: "15px", flexWrap: "wrap" }}>
                          <h4>{project.title}</h4>
                          <div style={{ display: "flex", gap: "10px", alignItems: "center" }}>
                            {project.github && (
                              <a href={project.github} target="_blank" rel="noreferrer" style={{ color: "white", fontSize: "20px", display: "flex" }} data-cursor="disable">
                                <FaGithub />
                              </a>
                            )}
                            {project.behance && (
                              <a href={project.behance} target="_blank" rel="noreferrer" style={{ color: "white", fontSize: "20px", display: "flex" }} data-cursor="disable">
                                <FaBehance />
                              </a>
                            )}
                            {project.live && (
                              <a href={project.live} target="_blank" rel="noreferrer" style={{ color: "white", fontSize: "22px", display: "flex" }} data-cursor="disable">
                                <MdArrowOutward />
                              </a>
                            )}
                          </div>
                        </div>
                        <p className="carousel-category">
                          {project.category}
                        </p>
                        <p className="carousel-description" style={{ marginTop: "12px", fontSize: "15px", color: "#adacac", lineHeight: "1.5", fontWeight: 300 }}>
                          {project.description}
                        </p>
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>{project.tools}</p>
                        </div>
                      </div>
                    </div>
                    <div className="carousel-image-wrapper">
                      <WorkImage image={project.image} alt={project.title} link={project.live || project.behance || project.github} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dot Indicators */}
          <div className="carousel-dots">
            {projects.map((_, index) => (
              <button
                key={index}
                className={`carousel-dot ${index === currentIndex ? "carousel-dot-active" : ""
                  }`}
                onClick={() => goToSlide(index)}
                aria-label={`Go to project ${index + 1}`}
                data-cursor="disable"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
