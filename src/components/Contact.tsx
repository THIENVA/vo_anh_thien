import "./contact.css";

function Contact() {
  return (
    <>
      <div className="contact">
        <button className="btn-contact">CONTACT ME</button>
        <p>
          Feel free to reach out to me if you're looking for a developer, have a
          query, or simply want to connect.
        </p>
        <div className="contact-info">
          <div className="phone">
            <img src="/img/phone-icon.svg" alt="phone" />
            <h4>083-445-5322</h4>
          </div>
          <div className="email">
            <img src="/img/mail-icon.svg" alt="email" />
            <h4>v.voanhthien@gmail.com</h4>
          </div>
          <div className="address">
            <img src="/img/address-icon.svg" alt="address" />
            <h4>162/42A Phan Dang Luu str, Duc Nhuan dist</h4>
          </div>
          <div className="github">
            <img src="/img/github-icon.svg" alt="github" />
            <h4>https://github.com/THIENVA/THIENVA.git</h4>
          </div>
        </div>
      </div>
    </>
  );
}

export default Contact;
