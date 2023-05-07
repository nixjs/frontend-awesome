import { styled } from "configs/stitches.config";

const FooterStyled = styled("footer", {
  background: "#fff",
  borderTop: "2px solid #f5f5f5",
  fontFamily: "Roboto Mono,Courier,monospace",
  fontSize: "0.875rem",
  ".footer": {
    "&-primary": {
      borderBottom: "1px solid #f5f5f5",
      "&-list--company, &-list--social": {
        "li, li> a": {
          color: "#101820",
        },
      },
      "&-list--company": {
        li: {
          margin: "2px 1.5em 0 0",
        },
      },
      "&-list--social": {
        li: {
          margin: "2px 20px 0 0",
        },
      },
      "&_wrap": {
        padding: "20px 35px",
      },
    },
    "&-nav": {
      margin: "35px auto",
      padding: "0 35px",
      "&-list": {
        flex: "1 1 25%",
        padding: "0 2em 1.625rem 0",
        "h4, a": {
          color: "#101820",
        },
        h4: { marginBottom: "1rem" },
        ul: {
          li: {
            color: "#101820",
            marginBottom: "1em",
            "&:last-child": {
              marginBottom: 0,
            },
          },
        },
      },
    },
    "&-partners": {
      borderTop: "1px solid #f5f5f5",
      margin: "1.625rem auto 0",
      padding: "35px 0 0",
      "&-item": {
        flex: "0 200px",
        fontFamily: "Roboto Mono,Courier,monospace",
        marginBottom: "20px",
        textAlign: "center",
        a: {
          color: "#101820",
        },
      },
    },
  },
});
export default FooterStyled;
