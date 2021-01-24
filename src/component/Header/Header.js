import React, { useState } from "react";
import Navigator from "./Navigator";
import Alertlabel from "./Alertlabel";

const Header = () => {
  const [toggle, setToggle] = useState(true);

  const showhide = () => {
    setToggle(false);
  };
  return (
    <>
      <div className="HeaderWrapper">
        <div className="Subhead">
          <Navigator />
        </div>
        <div className="Mainhead">
          {toggle && <Alertlabel display={showhide} />}
        </div>
      </div>
    </>
  );
};

export default Header;
