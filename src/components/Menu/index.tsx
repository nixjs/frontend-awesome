"use client";

import React from "react";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { ElementTypes } from "types";
import { composeRef } from "configs/ref";
import { MenuTitle } from "./MenuTitle";
import { MenuItem } from "./MenuItem";
import { MenuChildren } from "./MenuChildren";
import { MenuStyled } from "./index.styled";
import { Navigation } from "./types";

export interface MenuPropArg {
  /**
   * Data of the menu
   */
  data: Navigation[];
  locale?: string;
}

export const Menu = React.forwardRef<
  HTMLDivElement,
  MenuPropArg & ElementTypes.StyledProps
>(
  (
    props: MenuPropArg & ElementTypes.StyledProps,
    ref: React.Ref<HTMLDivElement | undefined>
  ) => {
    const { data, locale, overrideStyled } = props;
    const navRef = React.useRef<HTMLInputElement>(null);
    const pathname = usePathname();

    const handleClick = (e: React.MouseEvent<HTMLElement>) => {
      e.preventDefault();
      if (e.currentTarget && e.currentTarget.parentElement)
        e.currentTarget.parentElement.classList.toggle("open");
    };

    const navList = React.useCallback(
      (navs?: Navigation[]) => {
        if (!navs || navs.length === 0) return <></>;
        return navs.map((item, idx) => {
          const { path, children } = item;
          if (children || path)
            return children ? (
              <MenuChildren
                key={idx}
                navigation={item}
                navList={navList}
                routerPathName={pathname}
                onClick={handleClick}
              />
            ) : (
              <MenuItem key={idx} navigation={item} locale={locale} />
            );
          return <MenuTitle key={idx} navigation={item} />;
        });
      },
      [locale, pathname]
    );

    return (
      <MenuStyled
        ref={composeRef(navRef, ref) as React.RefObject<HTMLDivElement>}
        css={overrideStyled}
      >
        <ul className="select-none reset-ul menu-menu">{navList(data)}</ul>
      </MenuStyled>
    );
  }
);

Menu.displayName = "Menu";

export * as MenuProps from "./types";

// example

// const MenuData: MenuProps.Navigation[] = [
//     {
//         title: 'Home',
//         icon: { kind: 'font', source: 'ic_icon text-24 ic_QR-code' },
//         path: {
//             href: ''
//         }
//     },
//     {
//         title: 'Inhouse',
//         icon: {
//             kind: 'font',
//             source: 'ic_icon text-24 ic_ball'
//         },
//         children: [
//             {
//                 title: 'Dice',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/dice/dice.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: '/inhouse/limbo'
//                 }
//             },
//             {
//                 title: 'Keno',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/instant-keno/keno.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: '/inhouse/keno'
//                 }
//             },
//             {
//                 title: 'Limbo',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/game.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: '/inhouse/limbo'
//                 }
//             }
//         ]
//     },
//     {
//         title: 'Break Line',
//         icon: {
//             kind: 'image',
//             source: '/modules/games/game.svg',
//             size: 24,
//             env: env || ''
//         }
//     },
//     {
//         title: 'Lottery',
//         icon: {
//             kind: 'image',
//             source: '/modules/games/game.svg',
//             size: 24,
//             env: env || ''
//         },
//         children: [
//             {
//                 title: 'Keno',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/game.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: 'lottery/keno'
//                 }
//             },
//             {
//                 title: 'Mega 6/45',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/game.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: 'lottery/mega-645'
//                 }
//             },
//             {
//                 title: '3D Max',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/game.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: 'lottery/3d-max'
//                 }
//             },
//             {
//                 title: '4D Max',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/game.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: 'lottery/4d-max'
//                 }
//             },
//             {
//                 title: '5D Max',
//                 icon: {
//                     kind: 'image',
//                     source: '/modules/games/game.svg',
//                     size: 24,
//                     env: env || ''
//                 },
//                 path: {
//                     href: 'lottery/5d-max'
//                 }
//             }
//         ]
//     }
// ]
