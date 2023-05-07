import { Pagination } from "components/Pagination";
import CardBox from "./CardBox";
import ContentStyled from "./index.styled";
import { data } from "./data";

const Content: React.FC = () => {
  return (
    <ContentStyled>
      <h2 className="mb-36">React Development Tools</h2>
      <div className="w-100 card-list">
        <div className="d-grid mb-36 w-100 flex-wrap justify-content-start card-list-inner">
          {data.map((child, idx) => (
            <CardBox {...child} key={idx} />
          ))}
        </div>
        <div className="text-center">
          <Pagination initialPage={6} total={14} siblings={1} />
        </div>
      </div>
    </ContentStyled>
  );
};
export default Content;
