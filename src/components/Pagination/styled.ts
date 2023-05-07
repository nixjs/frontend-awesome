import { styled } from "configs/stitches.config";

export const PaginationStyled = styled("div", {
  "--base-pagination-item-margin": "0.125rem",
  "--base-pagination-item-size": "2.25rem",
  "--base-pagination-item-radius": "24%",
  "--base-pagination-transition": "var(--base-transition-slow)",
  ".pagination-item": {
    position: "relative",
    fontSize: "0.875rem",
    display: "inline-flex",
    margin: "0 var(--base-pagination-item-margin)",
    alignItems: "center",
    justifyContent: "center",
    padding: "0px",
    boxSizing: "border-box",
    textTransform: "capitalize",
    userSelect: "none",
    whiteSpace: "nowrap",
    textAlign: "center",
    verticalAlign: "middle",
    boxShadow: "none",
    outline: "none",
    cursor: "pointer",
    height: "var(--base-pagination-item-size)",
    minWidth: "var(--base-pagination-item-size)",
    borderRadius: "var(--base-pagination-item-radius)",
    color: "var(--base-pagination-item-color, white)",
    background: "var(--base-pagination-item-background, transparent)",
    border: "1px solid var(--base-pagination-item-border, #f5f5f51a)",
    transition:
      "background var(--base-pagination-transition) ease, color var(--base-pagination-transition) ease",
    "&:hover": {
      background: "var(--base-pagination-item-hover-background, #f5f5f51a)",
      borderColor: "var(--base-pagination-item-hover-border, #f5f5f51a)",
    },
    "&:disabled": {
      color: "var(--base-pagination-item-disabled-color, var(--base-white-7))",
      cursor: "not-allowed",
      opacity: "var(--base-pagination-item-disabled-opacity, 0.75)",
      "&:hover": {
        background:
          "var(--base-pagination-item-disabled-background, transparent)",
        borderColor: "var(--base-pagination-item-disabled-border, transparent)",
      },
    },
    "&-icon": {
      fontSize: "1.2rem",
    },
    "&-dot": {
      position: "relative",
      "&:before": {
        content: "",
        display: "block",
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 1,
        opacity: 0,
        visibility: "hidden",
        transition:
          "visibility var(--base-pagination-transition) ease, opacity var(--base-pagination-transition) ease",
      },
      "&:hover": {
        ".pagination-item-3dot": {
          opacity: 0,
          visibility: "hidden",
        },
        "&:before": {
          opacity: 1,
          visibility: "visible",
        },
      },
      "&--prev": {
        "&:hover": {
          "&:before": {
            content: "«",
          },
        },
      },
      "&--next": {
        "&:hover": {
          "&:before": {
            content: "»",
          },
        },
      },
    },
    "&--number": {
      "&.active": {
        fontWeight: "var(--pagination-item-active-font-weight, 700)",
        background: "var(--pagination-item-active-background, #59b287)",
        borderColor: "var(--pagination-item-active-border, #59b287)",
      },
    },
  },
});
