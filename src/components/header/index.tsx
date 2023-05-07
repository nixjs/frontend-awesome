import Link from "next/link";
import HeaderStyled from "./index.styled";

const Header: React.FC = () => {
  return (
    <HeaderStyled className="position-fixed left-0 top-0 right-0 w-100 header">
      <div className="header-container">
        <div className="d-flex align-items-center flex-wrap m-auto header-wrap">
          <p className="header-logo">
            <Link className="d-block" href="/" title="Go $HOME">
              Changelog
            </Link>
          </p>

          <nav className="header-nav">
            <div className="d-flex align-items-center header-nav-wrap">
              <ul className="reset-ul header-nav-primary header-nav-list">
                <li className="header-nav-list-item w500">
                  <a
                    href="/"
                    title="Changelog Podcasts"
                    className="d-inline-block position-relative"
                  >
                    Podcasts
                  </a>
                </li>
                <li className="header-nav-list-item w500">
                  <a
                    href="/posts"
                    title="Changelog Posts"
                    className="d-inline-block position-relative"
                  >
                    Posts
                  </a>
                </li>
                <li className="header-nav-list-item w500">
                  <a
                    href="/community"
                    title="Changelog Community"
                    className="d-inline-block position-relative"
                  >
                    Community
                  </a>
                </li>

                <li className="header-nav-list-item w500is-active">
                  <a
                    href="/subscribe"
                    className="d-inline-block position-relative"
                  >
                    Subscribe
                  </a>
                </li>

                <li className="header-nav-list-item w500header-nav-list-item--ten">
                  <a
                    href="/++"
                    title="Join Changelog++"
                    className="d-inline-block position-relative"
                  >
                    Changelog++
                  </a>
                </li>
              </ul>

              <div className="d-flex align-items-center mt-0 header-nav-secondary">
                <ul className="reset-ul header-nav-list">
                  <li className="header-nav-list-item w500header-nav-list-item--live is-hidden  js-live-indicator">
                    <a
                      href="/live"
                      title="Listen Live"
                      className="d-inline-block position-relative"
                    >
                      Live
                    </a>
                  </li>
                  <li className="header-nav-list-item w500is-desktop_only">
                    <a
                      href="/news/submit"
                      title="Submit News"
                      className="d-inline-block position-relative"
                    >
                      Submit News
                    </a>
                  </li>
                </ul>

                <ul className="header-nav-list">
                  <li className="header-nav-list-item">
                    <a className="header-button" href="/in" title="Sign In">
                      Sign In
                    </a>
                  </li>
                </ul>
                <button
                  className="header-menu js-toggle-nav"
                  title="Toggle Menu"
                >
                  <span className="header-menu-box">
                    <span className="header-menu-inner"></span>
                  </span>
                </button>
              </div>
            </div>
          </nav>
        </div>
      </div>
    </HeaderStyled>
  );
};
export default Header;
