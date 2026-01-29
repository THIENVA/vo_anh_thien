import "./header.css"; // Import file CSS vào đây

function Header() {
  return (
    <>
      <div className="header">
        <div className="logo">
          <a href="/">VÕ ANH THIỆN</a>
        </div>
        <div className="main-menu">
          <nav className="nav-links">
            <a href="#about">About</a>
            <a href="#skill">Skill</a>
            <a href="#experience">Experience</a>
            <a href="#project">Project</a>
            <a href="#contact">Contact</a>
          </nav>
          <div className="divider"></div>
          <div className="actions">
            <button className="theme-toggle">☀️</button>
            <button className="btn-cv">Download CV</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
