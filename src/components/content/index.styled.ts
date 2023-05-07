import { styled } from "configs/stitches.config";

const ContentStyled = styled("div", {
  ".card": {
    "&-box": {
      width: "100%",
      marginBottom: "0.625rem",
      marginRight: 0,
      "@md": {
        marginBottom: 0,
      },
      "&-tag-item": {
        fontSize: "0.625rem",
        background: "#2a292e",
        marginRight: "0.25rem",
        borderRadius: "0.25rem",
      },
      "&-name": { color: "white", "> a": { color: "white" } },
      "&-collect": {
        width: "2.875rem",
        height: "2.875rem",
        ".collect-icon": {
          display: "block",
          width: "1rem",
          height: "1rem",
          background:
            "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguMDAyIDEyLjI1OGwtMy40MzEgMS45MmEuNTUuNTUgMCAwMS0uODA4LS41ODdsLjc2NS0zLjg1Ni0yLjg4Ni0yLjY3YS41NS41NSAwIDAxLjMwOC0uOTVsMy45MDUtLjQ2MyAxLjY0Ny0zLjU3YS41NS41NSAwIDAxLjk5OSAwbDEuNjQ3IDMuNTcgMy45MDUuNDYzYS41NS41NSAwIDAxLjMwOS45NWwtMi44ODggMi42Ny43NjYgMy44NTZhLjU1LjU1IDAgMDEtLjgwOC41ODdsLTMuNDMtMS45MnoiIGZpbGw9IiNGRkI4MDAiLz48L3N2Zz4=) no-repeat",
          backgroundSize: "100% 100%",
        },
        "&.un-collect": {
          ".collect-icon": {
            background:
              "url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTguMDAyIDEyLjI1OGwtMy40MzEgMS45MmEuNTUuNTUgMCAwMS0uODA4LS41ODdsLjc2NS0zLjg1Ni0yLjg4Ni0yLjY3YS41NS41NSAwIDAxLjMwOC0uOTVsMy45MDUtLjQ2MyAxLjY0Ny0zLjU3YS41NS41NSAwIDAxLjk5OSAwbDEuNjQ3IDMuNTcgMy45MDUuNDYzYS41NS41NSAwIDAxLjMwOS45NWwtMi44ODggMi42Ny43NjYgMy44NTZhLjU1LjU1IDAgMDEtLjgwOC41ODdsLTMuNDMtMS45MnoiIGZpbGw9IiNDN0NCQ0IiLz48L3N2Zz4=) no-repeat",
          },
        },
      },
      "&-share": {
        ".shareicon": {
          marginLeft: "0.425rem",
          width: "1rem",
          height: "1rem",
          "&:first-child": {
            marginLeft: 0,
          },
        },
      },
      "&-content": {
        padding: "0.625rem",
        border: "1px solid hsla(0,0%,96%,.1)",
        background: "#17171a",
        "@md": {
          padding: "1.25rem",
        },
        "&-top": {
          minHeight: "2.5rem",
        },
        "&-message": {
          lineHeight: 1.5,
          overflow: "hidden",
          color: "#878b8f",
          minHeight: "2.625rem",
          "@supports (-webkit-line-clamp: 2)": {
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "initial",
            display: "-webkit-box",
            "-webkit-line-clamp": 2,
            "-webkit-box-orient": "vertical",
          },
        },
        "&-hover": {
          minHeight: "100%",
          zIndex: 1,
          boxShadow: "0 10px 40px rgba(0,0,0,.8)",
          display: "none",
          ".card-box-content-message": {
            "@supports (-webkit-line-clamp: 5)": {
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "initial",
              display: "-webkit-box",
              "-webkit-line-clamp": 5,
              "-webkit-box-orient": "vertical",
            },
          },
        },
      },
      "&:hover": {
        ".card": {
          "&-box": {
            "&-content": {
              "&-hover": {
                display: "block",
              },
            },
          },
        },
      },
    },
    "&-list": {
      minHeight: "48rem",
      "&-inner": {
        gridGap: "1.5rem",
        gap: "1.5rem",
        gridTemplateColumns: "repeat(3,1fr)",
      },
    },
  },
});
export default ContentStyled;
