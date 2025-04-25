import "./Navbar.css";
import logo from "../Assets/hindustan-logo.svg";
import supportLogo from "../Assets/message-regular.svg";
import whatsApp from "../Assets/round-whats.svg";
import youtube from "../Assets/round-yt.svg";
import linkdin from "../Assets/round-link.svg";
import facebook from "../Assets/round-fb.svg";
const Navbar = () => {
  
  return (
    <div className="navbar">
      <div className="logo">
        <img src={logo} className="weblogo" alt="" />
      </div>
      <div className="list-items">
        <ul>
          <li>Services</li>
          <li>About Us</li>
          <li>Insights</li>
          <li>Careers</li>
          <li>Disclouser</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="contact">
        <img src={supportLogo} className="supportpng" alt="" />
        <div className="number">
          <p>
            CONTACT FOR SUPPORT <br />
            <b className="num">+91 82877 22777</b>
          </p>
          <p></p>
          <div className="social-logo">
            <img className="logo-socioimg" src={whatsApp} alt="" />
            <img className="logo-socioimg" src={facebook} alt="" />
            <img className="logo-socioimg" src={linkdin} alt="" />
            <img className="logo-socioimg" src={youtube} alt="" />
          </div>
          {/* <div>
            <h1>sujal</h1>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
