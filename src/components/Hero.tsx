import "./hero.css";

function Hero() {
  return (
    <>
      <div className="hero">
        <div className="hero-info">
          <h1 className="hero-intro-1">Good day! I'm VO ANH THIEN!</h1>
          <p className="hero-intro-2">
            A developer with a passion for visualizing and logical thinking. I
            value personal space and cooperation and motivate colleagues toward
            our goal. My goal is to deeply understand developing and deploying
            websites.
          </p>
          <div className="hero-intro-3">
            <div className="hero-intro-3-1">
              <img src="/img/her0-intro-3.1.svg" alt="her0-intro-3.1" />
              <p>162/42A Phan Dang Luu str, Duc Nhuan dist, Ho Chi Minh city</p>
            </div>
            <div className="hero-intro-3-2">
              <img src="/img/her0-intro-3.2.svg" alt="her0-intro-3.2" />
              <p>2. Available for new projects</p>
            </div>
          </div>
          <div className="hero-intro-4">
            <img src="/img/her0-intro-4.1.svg" alt="her0-intro-4.1" />
            <img src="/img/her0-intro-4.2.svg" alt="her0-intro-4.2" />
            <img src="/img/her0-intro-4.3.svg" alt="her0-intro-4.3" />
          </div>
        </div>
        <div className="hero-image">
          <img src="/img/hero-image.jpg" alt="hero-image" />
        </div>
      </div>
    </>
  );
}

export default Hero;
