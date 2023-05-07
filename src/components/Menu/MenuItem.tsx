import React from "react";
import NavLink from "components/NavLink";
import { MenuContentLink } from "./MenuContentLink";
import { Navigation } from "./types";

export const MenuItem: React.FC<{
  navigation: Navigation;
  locale?: string;
}> = ({ navigation: { title, path, icon, hidden }, locale }) => {
  if (hidden) return <></>;
  return (
    <li className="menu-item">
      {path ? (
        <NavLink
          {...path}
          locale={locale}
          href={path.href}
          className="d-flex align-items-center menu-link"
          activeClassName="active"
        >
          <MenuContentLink title={title} icon={icon} />
        </NavLink>
      ) : (
        <a
          className="d-flex align-items-center menu-link"
          lang={locale}
          role="presentation"
        >
          <MenuContentLink title={title} icon={icon} />
        </a>
      )}
    </li>
  );
};
