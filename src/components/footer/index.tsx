import Link from "next/link";
import FooterStyled from "./index.styled";

const Header: React.FC = () => {
  return (
    <FooterStyled className="footer">
      <div className="container">
        <nav className="footer-primary">
          <div className="d-flex flex-wrap justify-content-between footer-primary_wrap">
            <ul className="reset-ul d-flex flex-wrap p-10 footer-primary-list footer-primary-list--company">
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="tel:+1-888-974-2454">888-974-CHLG (2454)</a>
              </li>
            </ul>

            <ul className="reset-ul d-flex flex-wrap p-10 footer-primary-list footer-primary-list--social">
              <li>
                <a
                  href="https://twitter.com/changelog"
                  title="Changelog on Twitter"
                >
                  <img
                    alt="Twitter Icon"
                    height="20"
                    loading="lazy"
                    src="https://cdn.changelog.com/static/images/icons/icon-twitter-black-7fe99bf8092ff726d7e4ea4f05d6fd0a.svg"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://changelog.social"
                  title="Changelog on Mastodon"
                >
                  <img
                    alt="Mastodon Icon"
                    height="20"
                    loading="lazy"
                    src="https://cdn.changelog.com/static/images/icons/icon-mastodon-black-6b482a9651ed99cc841c8cb6a1e6e150.svg"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/changelog"
                  title="Changelog on LinkedIn"
                >
                  <img
                    alt="LinkedIn Icon"
                    height="22"
                    loading="lazy"
                    src="https://cdn.changelog.com/static/images/icons/icon-linkedin-black-479c72365b360c08d1ffe6f74f136bb7.svg"
                    width="22"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thechangelog"
                  title="Changelog on GitHub"
                >
                  <img
                    alt="GitHub Icon"
                    height="20"
                    loading="lazy"
                    src="https://cdn.changelog.com/static/images/icons/icon-github-black-aba4a2842b26aebde535c083c65cadc0.svg"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/changelog"
                  title="Changelog on YouTube"
                >
                  <img
                    alt="YouTube Icon"
                    height="20"
                    loading="lazy"
                    src="https://cdn.changelog.com/static/images/icons/icon-youtube-black-40c69360b86a887d33344f2e01cdbd05.svg"
                    width="20"
                  />
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/changelog_"
                  title="Changelog on Instagram"
                >
                  <img
                    alt="Instagram Icon"
                    height="20"
                    loading="lazy"
                    src="https://cdn.changelog.com/static/images/icons/icon-instagram-black-6902021ad1ffe9e54865935db2cf5de3.svg"
                    width="20"
                  />
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <nav className="d-flex flex-wrap w-100 footer-nav">
          <div className="footer-nav-list">
            <h4>
              <a href="/podcasts" title="View all podcasts">
                Podcasts
              </a>
            </h4>
            <ul className="reset-ul">
              <li>
                <a href="/friends" title="Changelog &amp; Friends">
                  Changelog &amp; Friends
                </a>
              </li>

              <li>
                <a href="/news" title="Changelog News">
                  Changelog News
                </a>
              </li>

              <li>
                <a href="/podcast" title="Changelog Interviews">
                  Changelog Interviews
                </a>
              </li>

              <li>
                <a href="/founderstalk" title="Founders Talk">
                  Founders Talk
                </a>
              </li>

              <li>
                <a href="/jsparty" title="JS Party">
                  JS Party
                </a>
              </li>

              <li>
                <a href="/gotime" title="Go Time">
                  Go Time
                </a>
              </li>

              <li>
                <a href="/brainscience" title="Brain Science">
                  Brain Science
                </a>
              </li>

              <li>
                <a href="/practicalai" title="Practical AI">
                  Practical AI
                </a>
              </li>

              <li>---</li>
              <li>
                <a href="/master" title="Master feed">
                  Master
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-list">
            <h4>Social</h4>
            <ul className="reset-ul">
              <li>
                <a
                  href="https://twitter.com/changelog"
                  title="Changelog on Twitter"
                >
                  Twitter
                </a>
              </li>
              <li>
                <a
                  href="https://changelog.social"
                  title="Changelog on Mastodon"
                >
                  Mastodon
                </a>
              </li>
              <li>
                <a
                  href="https://linkedin.com/company/changelog"
                  title="Changelog on LinkedIn"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thechangelog"
                  title="Changelog on GitHub"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/changelog"
                  title="Changelog on YouTube"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/changelog_"
                  title="Changelog on Instagram"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-list">
            <h4>Community</h4>
            <ul className="reset-ul">
              <li>
                <a
                  href="https://merch.changelog.com"
                  title="Changelog's Merch Shop"
                >
                  Merch Shop
                </a>
              </li>
              <li>
                <a href="/community" title="Join the community">
                  Join the Community
                </a>
              </li>
              <li>
                <a href="/coc" title="Read the code of conduct">
                  Code of Conduct
                </a>
              </li>
              <li>
                <a href="https://changelog.slack.com" title="Sign in to Slack">
                  Sign in to Slack
                </a>
              </li>
              <li>---</li>
              <li>
                <a href="/request" title="Request an episode">
                  Request Episode
                </a>
              </li>
              <li>
                <a href="/news/submit" title="Submit news">
                  Submit News
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-nav-list">
            <h4>Etc.</h4>
            <ul className="reset-ul">
              <li>
                <a href="/posts" title="Changelog Posts">
                  Posts
                </a>
              </li>
              <li>
                <a href="/nightly" title="Changelog Nightly">
                  Changelog Nightly
                </a>
              </li>
              <li>
                <a href="/sponsor" title="Sponsor Changelog">
                  Sponsor
                </a>
              </li>
              <li>
                <a href="/search" title="Search Changelog">
                  Search
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/thechangelog/changelog.com"
                  title="Changelog.com source code"
                >
                  View Source
                </a>
              </li>
              <li>---</li>
              <li>
                <a
                  href="https://github.com/thechangelog/changelog.com/issues"
                  title="Changelog.com issue tracker"
                >
                  Report Issues
                </a>
              </li>
              <li>
                <a href="/terms" title="Terms &amp; Conditions">
                  Terms &amp; Conditions
                </a>
              </li>
              <li>
                <a href="/privacy" title="Privacy Policy">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </nav>
        <div className="footer-partners">
          <div className="d-flex flex-wrap justify-content-center m-auto footer-partners_wrap">
            <div className="footer-partners-item">
              <a
                href="https://www.fastly.com/?utm_source=changelog"
                title="Bandwidth by Fastly"
              >
                <p>Bandwidth</p>
                <img
                  alt="Fastly"
                  height="100"
                  loading="lazy"
                  src="https://cdn.changelog.com/static/images/content/footer/partner-fastly-3a248ce64df99943668790fa019d00b1.png"
                  width="200"
                />
              </a>
            </div>
            <div className="footer-partners-item">
              <a href="https://fly.io" title="Hosting by Fly.io">
                <p>Hosting</p>
                <img
                  alt="Fly"
                  height="100"
                  loading="lazy"
                  src="https://cdn.changelog.com/static/images/content/footer/partner-fly-ac772f3e335ae5f2e1b3d1868c1999a6.png"
                  width="200"
                />
              </a>
            </div>
            <div className="footer-partners-item">
              <a
                href="https://typesense.org/?utm_source=changelog&amp;utm_campaign=changelog-search&amp;utm_medium=referral"
                title="Search by Typesense"
              >
                <p>Search</p>
                <img
                  alt="Typesense"
                  height="100"
                  loading="lazy"
                  src="https://cdn.changelog.com/static/images/content/footer/partner-typesense-d5620c5e2008403ceffe1d78e3fccf37.png"
                  width="200"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </FooterStyled>
  );
};
export default Header;
