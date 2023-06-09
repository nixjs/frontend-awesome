"use client";

import Link from "next/link";
import { Menu, MenuProps } from "components/Menu";
import SidebarStyled from "./index.styled";

const Sidebar: React.FC<{ data: MenuProps.Navigation[] }> = ({ data }) => {
  return (
    <SidebarStyled>
      <div className="sidebar-inner">
        <div className="mb-24 sidebar-top">
          <div className="sidebar-nav-list-item">
            <Link
              href={"/"}
              className="w-100 h-100 d-flex align-items-center  pt-10 pb-10 pl-12 pr-12 w500 sidebar-nav-list-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  d="M11.0021 4.45004L12.7832 8.311C12.8755 8.51119 13.0177 8.68435 13.1961 8.81393C13.3744 8.94352 13.583 9.02518 13.802 9.05113L18.0239 9.55194L14.9022 12.439C14.7403 12.5887 14.6195 12.7773 14.5514 12.987C14.4832 13.1967 14.47 13.4203 14.5129 13.6366L15.3413 17.8065L11.6318 15.7296C11.4394 15.6218 11.2226 15.5653 11.0021 15.5653C10.7816 15.5653 10.5648 15.6218 10.3724 15.7296L6.66273 17.806L7.49116 13.6361C7.53404 13.42 7.52079 13.1964 7.45268 12.9868C7.38456 12.7773 7.26385 12.5887 7.10208 12.439L3.9804 9.55194L8.2023 9.05113C8.42123 9.02518 8.62985 8.94352 8.80822 8.81393C8.98658 8.68435 9.12874 8.51119 9.22109 8.311L11.0021 4.45004ZM11.0021 2.42191C10.8572 2.42056 10.7151 2.4614 10.593 2.53946C10.4709 2.61751 10.3742 2.7294 10.3146 2.86148L8.0504 7.77109L2.68146 8.40789C2.04101 8.48395 1.7832 9.27608 2.25714 9.71414L6.22681 13.3843L5.17408 18.6871C5.0746 19.1851 5.46884 19.5933 5.9155 19.5933C6.04493 19.5929 6.17207 19.5591 6.2846 19.4951L11.0021 16.8543L15.7197 19.4951C15.8322 19.5591 15.9593 19.5929 16.0888 19.5933C16.5352 19.5933 16.9295 19.1851 16.8308 18.6877L15.7773 13.3843L19.7471 9.71414C20.2209 9.27608 19.9635 8.48395 19.3226 8.40789L13.9537 7.77109L11.6888 2.86148C11.6292 2.72938 11.5325 2.61748 11.4104 2.53942C11.2883 2.46136 11.1462 2.42053 11.0013 2.42191H11.0021Z"
                  fill="#E5E5E5"
                />
              </svg>
              <span className="ml-6">My Favorite</span>
            </Link>
          </div>
          <div className="sidebar-nav-list-item">
            <Link
              href={"/"}
              className="w-100 h-100 d-flex align-items-center  pt-10 pb-10 pl-12 pr-12 w500 sidebar-nav-list-link"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M15.8835 5.58692C14.547 4.37459 12.8078 3.70186 11.0034 3.69922C10.0268 3.69714 9.0598 3.89225 8.16039 4.27285C6.49815 4.97495 5.15593 6.26941 4.39408 7.90512C3.63222 9.54083 3.50504 11.4012 4.03721 13.1254C4.56938 14.8496 5.72296 16.3146 7.27418 17.2364C8.82541 18.1582 10.6637 18.471 12.4325 18.1141C14.2013 17.7572 15.7745 16.7561 16.8469 15.3049C17.9194 13.8538 18.4146 12.056 18.2366 10.2604C18.0586 8.46477 17.22 6.79925 15.8835 5.58692ZM2.40967 11.0039C2.40967 6.25758 6.25709 2.41016 11.0034 2.41016C15.7497 2.41016 19.5972 6.25758 19.5972 11.0039C19.5972 15.7502 15.7497 19.5977 11.0034 19.5977C6.25709 19.5977 2.40967 15.7502 2.40967 11.0039ZM11.6445 6.7964C11.6445 6.44044 11.3559 6.15187 11 6.15187C10.644 6.15187 10.3554 6.44044 10.3554 6.7964V11.645C10.3554 12.0002 10.6428 12.2884 10.998 12.2895L14.5066 12.3003C14.8626 12.3014 15.152 12.0137 15.1531 11.6577C15.1542 11.3017 14.8665 11.0123 14.5106 11.0112L11.6445 11.0024V6.7964Z"
                  fill="#E5E5E5"
                />
              </svg>
              <span className="ml-6">Browser history</span>
            </Link>
          </div>
        </div>
        <div className="sidebar-list">
          <div className="mb-24 sidebar-box">
            <Menu data={data} />
          </div>
        </div>
      </div>
    </SidebarStyled>
  );
};

export default Sidebar;
