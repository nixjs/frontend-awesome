import React from "react";
import classNames from "classnames";
import Image from "next/image";
import { Icon } from "./types";

export const MenuIcon: React.FC<{ icon: Icon }> = ({ icon }) => {
  const { kind } = icon;
  if (kind === "html")
    return <div className="menu-icon menu-icon--html">{icon?.source}</div>;
  if (kind === "image")
    return (
      <div className="menu-icon menu-icon--image">
        <Image src={icon?.source} width={icon.size} height={icon.size} alt="" />
      </div>
    );
  if (kind === "font")
    return (
      <i className={classNames("menu-icon menu-icon--font", icon?.source)} />
    );
  return (
    <>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 12 12"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="menu-icon menu-icon--default"
      >
        <path d="M1.30385 3.28868L6 0.57735L10.6962 3.28868L10.6962 8.71132L6 11.4226L1.30385 8.71132L1.30385 3.28868Z"></path>
      </svg>
    </>
  );
};
