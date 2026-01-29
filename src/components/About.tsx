import "./about.css";

function About() {
  return (
    <>
      <div className="about">
        <button className="btn-about" id="#about">
          ABOUT ME
        </button>
        <div className="about-info">
          <img
            src="/img/482252446_4007445956166062_6666068470433458609_1.jpg"
            alt="about-image"
            className="about-image"
          />
          <div>
            <p>
              I'm a passionate, self-proclaimed developer who specializes in
              full stack development (React.js & Node.js). I am very
              enthusiastic about bringing the technical and visual aspects of
              digital products to life. User experience, pixel perfect design,
              and writing clear, readable, highly performant code matters to me.
              I am very much a progressive thinker and enjoy working on products
              end to end, from ideation all the way to development.
            </p>
            <div className="list-job">
              <p>Finally, some opportunities that's my interest.</p>
              <ul>
                <li>Front-end developer</li>
                <li>IT Technician</li>
                <li>System Administrator</li>
                <li>Website Administrator</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
