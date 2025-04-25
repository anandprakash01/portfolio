import React, {useState} from "react";
import "./services.css";
import ServicesModal from "./ServicesModal";

const Services = () => {
  const serve = [
    {
      title: "UI/UX",
      content: [
        "Design intuitive and visually appealing user interfaces tailored to user needs.",
        "Utilize modern CSS frameworks like Tailwind CSS to ensure responsive, elegant designs.",
        "Add animations and transitions to enhance user engagement and bring designs to life.",
      ],
    },
    {
      title: "Web development",
      content: [
        "Build dynamic, responsive websites using the MERN stack (MongoDB, Express.js, React, and Node.js).",
        "Develop robust back-end systems and RESTful APIs for seamless functionality.",
        "End-to-end solutions for web applications.",
        "Build applications ready to grow with your business.",
        "Optimize websites for speed, performance, and cross-browser compatibility.",
      ],
    },
    {
      title: "Programming",
      content: [
        "Solve unique challenges with tailored programming solutions.",
        "Refactor existing projects for improved performance and maintainability.",
        "Adopt best practices for project organization, ensuring clean, efficient, and maintainable workflows.",
      ],
    },
  ];

  const [isUIModalOpen, setIsUIModalOpen] = useState(false);
  const [isWebModalOpen, setIsWebModalOpen] = useState(false);
  const [isProgrammingModalOpen, setIsProgrammingModalOpen] = useState(false);

  return (
    <>
      {isUIModalOpen && (
        <ServicesModal item={serve[0]} onClick={() => setIsUIModalOpen(false)} />
      )}
      {isWebModalOpen && (
        <ServicesModal item={serve[1]} onClick={() => setIsWebModalOpen(false)} />
      )}
      {isProgrammingModalOpen && (
        <ServicesModal item={serve[2]} onClick={() => setIsProgrammingModalOpen(false)} />
      )}

      <section className="services section" id="services">
        <h2 className="section_title">Services</h2>
        <span className="section_subtitle">What i offer</span>
        <div className="services_container container grid">
          <div className="services_content">
            <div>
              <i className="uil uil-web-grid services_icon"></i>
              <h3 className="services_title">UI/UX</h3>
            </div>
            <span className="services_button" onClick={() => setIsUIModalOpen(true)}>
              View more<i className="uil uil-arrow-right services_button-icon"></i>
            </span>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-arrow services_icon"></i>
              <h3 className="services_title">Web development</h3>
            </div>
            <span onClick={() => setIsWebModalOpen(true)} className="services_button">
              View more<i className="uil uil-arrow-right services_button-icon"></i>
            </span>
          </div>

          <div className="services_content">
            <div>
              <i className="uil uil-edit services_icon"></i>
              <h3 className="services_title">Programming</h3>
            </div>
            <span
              onClick={() => setIsProgrammingModalOpen(true)}
              className="services_button"
            >
              View more <i className="uil uil-arrow-right services_button-icon"></i>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
