import "./experience.css";

function Experiences() {
  return (
    <>
      <div className="experiences">
        <button className="btn-exp">WORK EXPERIENCE</button>
        <div className="exp-info">
          <div className="exp-1">
            <img
              src="/img/logo-pnj-vector-inkythuatso-2-01-17-14-52-42 1.png"
              alt="pnj"
            />
            <div className="exp-1-info">
              <h3>2016 - 2020</h3>
              <h2>PHU NHUAN JEWELRY FACTORY</h2>
              <div className="deceive-line"></div>
              <h3>Data & information employee - Office Administrator</h3>
            </div>
          </div>
          <div className="exp-2">
            <img src="/img/Logo-NTT-SV 1.png" alt="ntt" />
            <div className="exp-2-info">
              <h3>2021</h3>
              <h2>NTT</h2>
              <div className="deceive-line"></div>
              <h3>IT Heldesk support L1 (remote and onsite).</h3>
            </div>
          </div>
          <div className="exp-3">
            <img src="/img/Logo-01 1.png" alt="vinatech" />
            <div className="exp-3-info">
              <h3>2022</h3>
              <h2>VINATECH</h2>
              <div className="deceive-line"></div>
              <h3>IT Heldesk support L1 (remote and onsite).</h3>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Experiences;
