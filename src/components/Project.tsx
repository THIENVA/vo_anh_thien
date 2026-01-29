import "./project.css";

function Projects() {
  return (
    <>
      <div className="projects">
        <button className="btn-project">PROJECTS</button>
        <p>Some of the noteworthy projects I have built:</p>
        <div className="project-info">
          <div className="project-1">
            <img
              src="/img/Screenshot 2025-12-31 213136 1.png"
              alt="project-1"
            />
            <div className="deceive-line-2"></div>
            <div className="project-1-info">
              <h2>SHOP.COM</h2>
              <h4>
                A web app for fashion trade and business. View your top
                products, top style, recently top model, and combo.
              </h4>
            </div>
          </div>
          <div className="project-2">
            <div className="project-2-info">
              <h2>LESSON.COM</h2>
              <h4>An education app with specify special courses for sell.</h4>
            </div>
            <div className="deceive-line-2"></div>
            <img
              src="/img/Screenshot 2025-12-31 214315 2.png"
              alt="project-2"
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Projects;
