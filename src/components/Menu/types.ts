import React from "react";
import { LinkProps } from "next/link";
import { UrlObject } from "url";

export type Url = string | UrlObject;
type IconImage = {
  kind: "image";
  source: string;
  size: number;
  env: string;
};
type IconFont = {
  kind: "font";
  source: string;
};
type IconHTML = {
  kind: "html";
  source: JSX.Element | React.ReactNode | string;
};
type IconDefault = {
  kind: "default";
};
export type Icon = IconDefault | IconImage | IconFont | IconHTML;

export type Navigation = {
  title: string;
  icon?: Icon;
  path?: LinkProps & {
    target?: React.HTMLAttributeAnchorTarget | undefined;
    rel?:
      | "alternate"
      | "author"
      | "bookmark"
      | "external"
      | "help"
      | "license"
      | "next"
      | "nofollow"
      | "noopener"
      | "noreferrer"
      | "prev"
      | "search"
      | "tag";
  };
  hidden?: boolean;
  children?: Navigation[];
};
