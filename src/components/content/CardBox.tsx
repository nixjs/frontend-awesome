import Image from "next/image";
import Link from "next/link";

interface CardBoxPropArg {
  title: string;
  description: string;
  url: string;
}
const CardBox: React.FC<CardBoxPropArg> = ({ title, description, url }) => {
  return (
    <article className="d-block position-relative cursor-pointer card-box">
      <div className="w-100 h-100 rounded-8 position-relative card-box-content">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="card-box-image">
            <Link href={url} aria-hidden="true">
              <Image
                src="https://cdn.bitkeep.vip/u_b_3ebc1d10-a3f6-11eb-9f5e-d184ba33d3a3.png"
                alt="PancakeSwap"
                title="PancakeSwap"
                className="rounded-circle"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="flex-fill pl-6 w700 truncate card-box-name">
            <Link href={url} className="d-block w-100 h-100">
              {title}
            </Link>
            <div className="mt-6 card-box-tag">
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                Typescript
              </span>
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                React
              </span>
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                React-web
              </span>
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                +2
              </span>
            </div>
          </div>
        </div>
        <div
          title={description}
          className="text-14 w500 mt-10 truncate text-ellipsis card-box-content-message"
        >
          {description}
        </div>
        <div className="mt-12 d-flex align-items-center justify-content-start">
          <div className="text-12 card-box-author">by ▲ Vercel</div>
        </div>
      </div>
      <div className="w-100 rounded-8 position-absolute top-0 left-0 w-100 card-box-content card-box-content-hover">
        <div className="w-100 d-flex justify-content-between align-items-center">
          <div className="card-box-image">
            <Link href={url} aria-hidden="true">
              <Image
                src="https://cdn.bitkeep.vip/u_b_3ebc1d10-a3f6-11eb-9f5e-d184ba33d3a3.png"
                alt="PancakeSwap"
                title="PancakeSwap"
                className="rounded-circle"
                width={40}
                height={40}
              />
            </Link>
          </div>
          <div className="flex-fill pl-6 w700 truncate card-box-name">
            <Link href={url} className="d-block w-100 h-100">
              {title}
            </Link>
            <div className="mt-6 card-box-tag">
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                Typescript
              </span>
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                React
              </span>
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                React-web
              </span>
              <span className="text-10 pt-4 pb-4 pl-6 pr-6 d-inline-flex card-box-tag-item">
                +2
              </span>
            </div>
          </div>
        </div>
        <div
          title={description}
          className="text-14 w500 mt-10 truncate text-ellipsis card-box-content-message"
        >
          {description}
        </div>
        <div className="mt-12 d-flex align-items-center justify-content-between">
          <div className="text-12 card-box-author">by ▲ Vercel</div>
          <div className="d-flex align-items-center justify-content-end card-box-share">
            <div className="position-relative shareicon">
              <a
                href="https://t.me/pancakeswap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      fill="#707076"
                      d="m15.273 16.59 1.636-7.735c.064-.328.027-.564-.118-.7-.146-.146-.337-.164-.573-.082L6.573 11.79c-.218.082-.364.173-.437.282-.072.109-.09.2-.027.3.064.09.182.163.355.218l2.463.773 5.728-3.61c.154-.1.272-.127.354-.063.055.036.037.09-.045.164l-4.628 4.181-.181 2.546c.172 0 .336-.082.5-.246l1.209-1.163 2.5 1.845c.481.264.781.118.909-.427zM22 12a9.784 9.784 0 0 1-.79 3.882c-.528 1.236-1.237 2.3-2.128 3.19-.891.892-1.955 1.6-3.191 2.128A9.711 9.711 0 0 1 12 22a9.784 9.784 0 0 1-3.882-.79c-1.236-.528-2.3-1.237-3.19-2.128-.892-.891-1.6-1.955-2.128-3.191A9.837 9.837 0 0 1 2 12c0-1.354.264-2.645.79-3.882.528-1.236 1.237-2.3 2.137-3.19.9-.892 1.955-1.6 3.191-2.128A9.793 9.793 0 0 1 12 2c1.354 0 2.646.264 3.882.79 1.236.528 2.3 1.237 3.19 2.128.892.891 1.6 1.955 2.128 3.191.536 1.246.8 2.537.8 3.891z"
                      data-follow-fill="#919899"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="position-relative shareicon">
              <a
                href="https://t.me/pancakeswap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      fill="#707076"
                      d="M21.955 5.93c-.75.334-1.544.55-2.357.65a4.125 4.125 0 0 0 1.806-2.267c-.794.46-1.67.795-2.61.985a4.103 4.103 0 0 0-6.988 3.738c-3.395-.163-6.42-1.806-8.443-4.28a4.078 4.078 0 0 0-.55 2.067c0 1.427.722 2.673 1.824 3.414a4.078 4.078 0 0 1-1.86-.515v.054c0 1.95 1.372 3.63 3.286 4.018a4.097 4.097 0 0 1-1.842.072 4.1 4.1 0 0 0 3.838 2.845 8.242 8.242 0 0 1-5.084 1.751c-.325 0-.65-.018-.975-.054a11.688 11.688 0 0 0 6.293 1.842c7.54 0 11.666-6.248 11.666-11.657 0-.171 0-.352-.009-.523A8.325 8.325 0 0 0 22 5.948l-.045-.018z"
                      data-follow-fill="#919899"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
            <div className="position-relative shareicon">
              <a
                href="https://t.me/pancakeswap"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  preserveAspectRatio="xMidYMid meet"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <g>
                    <path
                      fill="#707076"
                      d="m15.273 16.59 1.636-7.735c.064-.328.027-.564-.118-.7-.146-.146-.337-.164-.573-.082L6.573 11.79c-.218.082-.364.173-.437.282-.072.109-.09.2-.027.3.064.09.182.163.355.218l2.463.773 5.728-3.61c.154-.1.272-.127.354-.063.055.036.037.09-.045.164l-4.628 4.181-.181 2.546c.172 0 .336-.082.5-.246l1.209-1.163 2.5 1.845c.481.264.781.118.909-.427zM22 12a9.784 9.784 0 0 1-.79 3.882c-.528 1.236-1.237 2.3-2.128 3.19-.891.892-1.955 1.6-3.191 2.128A9.711 9.711 0 0 1 12 22a9.784 9.784 0 0 1-3.882-.79c-1.236-.528-2.3-1.237-3.19-2.128-.892-.891-1.6-1.955-2.128-3.191A9.837 9.837 0 0 1 2 12c0-1.354.264-2.645.79-3.882.528-1.236 1.237-2.3 2.137-3.19.9-.892 1.955-1.6 3.191-2.128A9.793 9.793 0 0 1 12 2c1.354 0 2.646.264 3.882.79 1.236.528 2.3 1.237 3.19 2.128.892.891 1.6 1.955 2.128 3.191.536 1.246.8 2.537.8 3.891z"
                      data-follow-fill="#919899"
                    ></path>
                  </g>
                </svg>
              </a>
            </div>
          </div>
        </div>
        <div className="d-flex align-items-center justify-content-center position-absolute top-0 right-0 card-box-collect un-collect">
          <span className="collect-icon"></span>
        </div>
      </div>
    </article>
  );
};

export default CardBox;
