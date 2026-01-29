import "./skill.css";

function Skill() {
  return (
    <>
      <div className="skill">
        <button className="btn-skill" id="#skill">
          TECHNICAL SKILL
        </button>
        <p className="skill-intro">
          The skills, tools and technologies I am adapted:
        </p>
        <div className="list-skill">
          <div className="list-skill-1">
            <button>Web Development</button>
            <div className="skill-info">
              <div className="skill-item">
                <img src="/img/html-icon.svg" alt="html" />
                <h3>HTML</h3>
              </div>
              <div className="skill-item">
                <img src="/img/CSS-icon.svg" alt="CSS" />
                <h3>CSS</h3>
              </div>
              <div className="skill-item">
                <img src="/img/JS-icon.svg" alt="JS" />
                <h3>Javascript</h3>
              </div>
              <div className="skill-item">
                <img src="/img/react-icon.svg" alt="react" />
                <h3>React</h3>
              </div>
            </div>
          </div>
          <div className="deceive"></div>
          <div className="list-skill-2">
            <button>Web Deploy</button>
            <div className="skill-info">
              <div className="skill-item">
                <img src="./img/ubuntu-icon.svg" alt="ubuntu" />
                <h3>Ubuntu</h3>
              </div>
              <div className="skill-item">
                <img src="./img/aws-icon.svg" alt="aws" />
                <h3>AWS</h3>
              </div>
              <div className="skill-item">
                <img src="./img/docker-icon.svg" alt="docker" />
                <h3>Docker</h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Skill;
