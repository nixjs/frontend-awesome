import { createStitches } from "@stitches/react";

export const { styled, getCssText, keyframes, prefix, globalCss, config, css } =
  createStitches({
    prefix: "awesome",
    theme: {
      fonts: {
        system: "system-ui",
      },
      colors: {},
    },
    media: {
      sm: "screen and (min-width: 576px)",
      md: "screen and (min-width: 768px)",
      lg: "screen and (min-width: 992px)",
      hd: "screen and (min-width: 1028px)",
      xl: "screen and (min-width: 1200px)",
      xxl: "screen and (min-width: 1400px)",
      /* Smartphones and touchscreens */
      noDesktopHovering: "(hover: none) and (pointer: coarse)",
      /* Desktops with mouse */
      desktopHovering: "(hover: hover) and (pointer: fine)",
    },
    utils: {
      $transitionNormal: (value: string) => ({
        transition: `${value} .3s ease`,
      }),
      $transitionFast: (value: string) => ({
        transition: `${value} .1s ease`,
      }),
      $flexCenter: () => ({
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }),
      $fitImage: () => ({
        width: "auto",
        height: "auto",
        margin: 0,
        padding: 0,
      }),
      $elementCenter: () => ({
        position: "absolute",
        left: "50%",
        top: "50%",
        transform: "translate(-50%,-50%)",
      }),
    },
  });
