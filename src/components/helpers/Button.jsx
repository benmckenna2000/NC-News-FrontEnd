import React from "react";
import { Link } from "@reach/router";
import "../../css/General.css";


function Button(props) {
  const { linkTo, text } = props;

  return (
    <div className="button__holder">
      <Link to={linkTo}>
        <button className="button">{text}</button>
      </Link>
    </div>
  );
}

export default Button;
