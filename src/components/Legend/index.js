import React from "react";
import { redDot, yellowDot } from "../../constants";
import './index.scss';

const Legend = () => (
  <div className="legend">
  <h4> LEGEND </h4>
  <div>
    <img src={redDot} />
    <span> Death </span>
  </div>

  <div>
    <img src={yellowDot} />
    <span> Physical Assault </span>
  </div>
  </div>
);

export default Legend;
