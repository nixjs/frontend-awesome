"use client";
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import Link, { LinkProps } from "next/link";

type Props = LinkProps & {
  className?: string;
  locale?: string;
  activeClassName: string;
  children?:
    | React.ReactNode
    | ((props: { isActive: boolean }) => React.ReactNode);
};

export default function NavLink({
  children,
  activeClassName,
  className,
  locale,
  ...props
}: Props) {
  const pathname = usePathname();
  const [computedClassName, setComputedClassName] = React.useState(className);

  const isActive = pathname === props.href;

  React.useEffect(() => {
    // Check if the router fields are updated client-side
    const newClassName = isActive
      ? `${className} ${activeClassName}`.trim()
      : className;

    if (newClassName !== computedClassName) {
      setComputedClassName(newClassName);
    }
  }, [
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
    isActive,
  ]);

  return (
    <Link className={computedClassName} locale={locale} {...props}>
      {typeof children === "function" ? children({ isActive }) : children}
    </Link>
  );
}
