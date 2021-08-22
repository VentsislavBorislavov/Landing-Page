import profilePic from "../images/profile-pic.jpg";
import { ReactComponent as CheckIcon } from "../images/check-icon.svg";
const Intro = () => {
  return (
    <section id="intro">
      <div className="container">
        <div className="img-wrapper">
          <img className="profile-pic" src={profilePic} alt="profile image" />
        </div>
        <div className="bot-title">
          <h1>Weather Report</h1>
          <div className="bot-badge">
            <CheckIcon />
            <span>Bot</span>
          </div>
        </div>
        <h4 className="about">About me</h4>
        <p>
          Jojo Weather Report Bot that gives you all the weather information of
          a given location
        </p>
      </div>
    </section>
  );
};

export default Intro;
