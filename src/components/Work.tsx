import { useState, useCallback } from "react";
import "./styles/Work.css";
import WorkImage from "./WorkImage";
import { MdArrowBack, MdArrowForward, MdArrowOutward } from "react-icons/md";
import { FaGithub } from "react-icons/fa6";
import { FaBehance } from "react-icons/fa6";

interface Project {
  title: string;
  category: string;
  description: string;
  impact?: string;
  tools: string;
  features?: string[];
  image: string;
  live?: string;
  github?: string;
  behance?: string;
}

const projects: Project[] = [
  // ======================
  // 🔥 FEATURED PROJECTS
  // ======================

  {
    title: "OpenTrials Platform",
    category: "Clinical Analytics Dashboard (2026)",
    description:
      "Full-stack platform for analysing schema-agnostic clinical datasets with dynamic analytics dashboards.",
    impact:
      "Reduced dataset onboarding effort by 100% and enabled scalable clinical data analysis.",
    tools: "Next.js, FastAPI, PostgreSQL, Pandas",
    features: ["Full-Stack", "Data Engineering", "Analytics"],
    image: "/images/open-trials.png",
    live: "https://open-trial-platform.vercel.app/",
    github: "https://github.com/ary0912/open-trial-platform",
  },

  {
    title: "EcoDash",
    category: "Sustainability Analytics Dashboard (2026)",
    description:
      "Interactive dashboard to track carbon emissions, energy usage, and sustainability metrics.",
    impact:
      "Improved decision-making through real-time environmental data visualisation.",
    tools: "React, TypeScript, Tailwind, Recharts",
    features: ["UI/UX", "Data Viz", "ESG"],
    image: "/images/ecodash.png",
    live: "https://eco-dash-2.vercel.app/",
    github: "https://github.com/ary0912/EcoDash",
  },

  {
    title: "Campaign Experience Dashboard",
    category: "Interactive Analytics Platform (2026)",
    description:
      "Scroll-driven storytelling dashboard transforming static campaign reports into interactive experiences.",
    impact:
      "Increased user engagement and insight clarity through motion-driven UI.",
    tools: "Next.js, TypeScript, GSAP, Tailwind",
    features: ["Animations", "Storytelling UI"],
    image: "/images/campaign.png",
    live: "https://cedstats.vercel.app/",
  },

  {
    title: "SignalScope",
    category: "Real-Time Telemetry Monitor (2026)",
    description:
      "Real-time monitoring interface with WebSocket streaming and anomaly detection.",
    impact:
      "Enabled instant anomaly detection through live signal visualisation.",
    tools: "React, TypeScript, WebSockets",
    features: ["Real-Time", "Streaming"],
    image: "/images/signalscope.png",
    live: "https://telemetry-monitor-bx3tjnnix-ary0912s-projects.vercel.app/",
    github: "https://github.com/ary0912/telemetry-monitor",
  },

  {
    title: "MoveWell",
    category: "Health Assessment Platform (2026)",
    description:
      "Accessible health dashboard transforming complex mobility inputs into intuitive insights.",
    impact:
      "Reduced cognitive load through structured UX and WCAG accessibility.",
    tools: "React, TypeScript, Tailwind",
    features: ["Accessibility", "UX"],
    image: "/images/movewell.png",
    live: "https://movewell2.vercel.app/",
    github: "https://github.com/ary0912/movewell",
  },

  {
    title: "Environmental Risk Platform",
    category: "Backend Risk Analysis System (2026)",
    description:
      "Backend system for analysing environmental data and computing ecological risk scores.",
    impact:
      "Built scalable API architecture for environmental intelligence systems.",
    tools: "FastAPI, Docker, REST APIs",
    features: ["Backend", "API Design"],
    image: "/images/env-risk.png",
    live: "https://environmental-risk-platform.vercel.app",
    github: "https://github.com/ary0912/environmental-risk-platform",
  },

  // ======================
  // 🧠 AI / RESEARCH PROJECTS
  // ======================

  {
    title: "Eye Movement Cognitive Load Analysis",
    category: "Deep Learning Dissertation (2025)",
    description:
      "End-to-end pipeline analysing eye-tracking data to classify cognitive load using engineered gaze features.",
    impact:
      "Achieved 98.8% accuracy using Hybrid TCN + ViT with strong generalisation across participants.",
    tools: "Python, Deep Learning, SHAP, Grad-CAM++",
    features: ["Deep Learning", "Time Series", "Explainability"],
    image: "/images/eye-tracking.png",
  },

  {
    title: "EcoVision",
    category: "Computer Vision System (2025)",
    description:
      "Smart system for waste detection and crowd density analysis using computer vision.",
    impact:
      "Enabled real-time environmental monitoring for public safety systems.",
    tools: "Python, OpenCV, YOLOv5",
    features: ["Computer Vision", "Real-Time"],
    image: "/images/ecovision.png",
    github: "https://github.com/anirudh24471/BrisHack25",
  },

  {
    title: "Knee Arthritis Detection",
    category: "Deep Learning Medical Imaging (2023)",
    description:
      "CNN-based system for arthritis detection from X-rays with optimised preprocessing.",
    impact:
      "Improved model accuracy from 40% to 97%.",
    tools: "TensorFlow, EfficientNet",
    features: ["CNN", "Medical AI"],
    image: "/images/knee.png",
    github: "https://github.com/ary0912/Image-Augumentation-in-Knee-Arthritis",
  },

  {
    title: "GoCart",
    category: "UX Case Study (2024)",
    description:
      "Peer-to-peer platform designed through user research and iterative UX prototyping.",
    impact:
      "Improved usability through multiple testing and design iterations.",
    tools: "Figma, UX Research",
    features: ["UX", "Design Thinking"],
    image: "/images/gocart.png",
    behance: "https://www.behance.net/gallery/200088939/The-Grocery-App",
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
                        {project.impact && (
                          <p className="carousel-impact" style={{ marginTop: "8px", fontSize: "14px", color: "#14b8a6", fontWeight: 400 }}>
                            <strong>Impact:</strong> {project.impact}
                          </p>
                        )}
                        <div className="carousel-tools">
                          <span className="tools-label">Tools & Features</span>
                          <p>
                            {project.tools}
                            {project.features && project.features.length > 0 && (
                              <>
                                <span style={{ margin: "0 10px", opacity: 0.3 }}>|</span>
                                {project.features.join(", ")}
                              </>
                            )}
                          </p>
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
