import { styled } from "configs/stitches.config";

const HeaderStyled = styled("header", {
  zIndex: "99999",
  ".header": {
    "&-logo": {
      flex: "0 auto",
      margin: "0 0.75rem 0 0",
      textIndent: "-9999px",
      a: {
        height: "2.25rem",
        width: "2.25rem",
      },
    },
    "&-nav": {
      flex: "1 0 auto",
      "&-list": {
        display: "flex",
        flexWrap: "wrap",
        margin: 0,
        textAlign: "center",
        "&-item": {
          lineHeight: "1.125rem",
          margin: "0 0.75rem",
        },
      },
      "&-primary": {
        display: "none",
        flex: "1 0 auto",
        "@sm": {
          display: "flex",
        },
      },
      "&-wrap": {},
    },
    "&-container": {
      background: "#17171a",
      borderBottom: "1px solid hsla(0,0%,96%,.1)",
      "@sm": {
        padding: "0.75rem 2.25rem",
      },
    },
    "&-wrap": {
      maxWidth: "1217px",
    },
  },
});
export default HeaderStyled;
