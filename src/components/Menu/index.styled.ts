import { styled } from "configs/stitches.config";

export const MenuStyled = styled("nav", {
  ".menu": {
    "&-icon": {
      "&--default": {
        width: "0.75rem",
        height: "0.75rem",
        fill: "var(--icon-color, white)",
        transition: "fill .15s ease-out,height .15s ease-out",
      },
    },
    "&-link, &-title, &-dropdown-title": {
      padding: "0.5rem 0.5rem 0.5rem 0.75rem",
      color: " var(--base-white-5)",
      textDecoration: "none",
      $transitionNormal: "background",
    },
    "&-link, &-dropdown-title": {
      "&:hover": {
        background: "var(--base-white-05)",
        ".menu": {
          "&-icon": {
            "&--default": {
              "--icon-color": "#59b287",
            },
          },
          "&-link": {
            color: "var(--base-white)",
          },
        },
      },
    },
    "&-link": {
      transition: "color 0.1s ease-in-out 0s",
      "&:hover": {
        color: "#59b287",
      },
    },
    "&-dropdown": {
      "&--arrow": {
        transition: "transform 0.1s ease-in-out 0s",
      },
      "&-content": {
        height: 0,
        overflow: "hidden",
        willChange: "height",
        transition: "height 258ms ease-in-out 0s",
        display: "none",
        paddingLeft: "0.75rem",
      },
    },
    "&-item": {
      position: "relative",
      fontSize: "0.875rem",

      "&:after": {
        "--vline": "hidden",
        "--vline-color": "rgba(245, 245, 245, 0.1)",
        content: "",
        width: "2px",
        height: "100%",
        visibility: "var(--vline)",
        background: "var(--vline-color,rgba(245, 245, 245, 0.1))",
        position: "absolute",
        top: 0,
        left: "5px",
        transition: "background-color .15s ease-out",
      },
      "&.menu-dropdown": {
        "> .menu-dropdown-content": {
          "> .menu": {
            "&-item": {
              paddingLeft: "1rem",
              "&:after": {
                "--vline": "visible",
                "--vline-color": "rgba(245, 245, 245, 0.1)",
              },
            },
          },
        },
      },
      "&.open": {
        ".menu": {
          "&-icon": {
            "&--default": {
              "--icon-color": "#59b287",
            },
          },
          "&-dropdown": {
            "&-title": { fontWeight: 700 },
            "&-title, &--arrow": {
              color: "var(--base-white)",
            },
            "&-content": {
              height: "auto",
              overflow: "visible",
              display: "block",
            },
          },
        },
        ".menu-dropdown": {
          "&--arrow": {
            transform: "rotate(180deg)",
          },
        },
      },
      ".menu-link": {
        "&.active": {
          fontWeight: 700,
          color: "var(--base-white)",
          background: "var(--base-white-05)",
        },
      },
    },
  },
});
