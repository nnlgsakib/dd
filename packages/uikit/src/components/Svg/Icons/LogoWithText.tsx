import React from "react";
// import Svg from "../Svg";
// import {Image} from "@pancakeswap/uikit"
import { SvgProps } from "../types";

interface LogoProps extends SvgProps {
  isDark: boolean;
}

const Logo: React.FC<React.PropsWithChildren<LogoProps>> = ({ isDark, ...props }) => {
  const textColor = isDark ? "#FFFFFF" : "#000000";
  return (

    <img

    // src="images/mind.png"
    width={24}
    height={24}
    />
  );
};

export default React.memo(Logo, (prev, next) => prev.isDark === next.isDark);
