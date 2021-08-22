import { useState } from "react";
import NavLink from "./NavLink";

const Nav = () => {
  const [showLinks, setShowLinks] = useState(window.innerWidth > 1000);

  return (
    <nav>
      <a className="home-link" href="#">
        Home
      </a>
      {showLinks && (
        <ul className="links">
          <NavLink href="#features">Features</NavLink>
          <NavLink className="invite-link" href="#invite">
            Invite
          </NavLink>
          <NavLink className="premium-link" href="#go-premium">
            Go Premium
          </NavLink>
        </ul>
      )}
      <div className="hamburger" onClick={() => setShowLinks(!showLinks)}>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Nav;
