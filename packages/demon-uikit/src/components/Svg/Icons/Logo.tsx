import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 32 32" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#633001"
      />
      <path
        fill="#FEDC90"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        fill="#D1884F"
      />
      <path
        className="left-eye"
        fill="#633001"
      />
      <path
        className="right-eye"
        fill="#633001"
      />
    </Svg>
  );
};

export default Icon;
