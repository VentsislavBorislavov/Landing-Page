import gitIcon from "../images/github-icon.png";
import NavLink from "./NavLink";

const Footer = () => {
  return (
    <footer>
      <div className="wrapper">
        <div className="nav">
          <h2>
            <a href="#intro">Weather Report</a>
          </h2>
          <ul>
            <NavLink href="#features">Features</NavLink>
            <NavLink className="invite-link" href="#invite">
              Invite
            </NavLink>
            <NavLink className="premium-link" href="#go-premium">
              Go Premium
            </NavLink>
          </ul>
        </div>
        <div className="personal-link">
          <span>
            Created by{" "}
            <a href="https://github.com/VentsislavBorislavov">
              Ventsislav Borislavov
              <img src={gitIcon} alt="" />
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
