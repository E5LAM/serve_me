/* eslint-disable @next/next/no-img-element */
import { Container } from "react-bootstrap";

type SubService = {
  id: number;
  name: string;
  description: string;
  image: string;
};
type SubServiceWeOfferProps = {
  subServices: SubService[];
};

const SubServicesList: React.FC<SubServiceWeOfferProps> = ({ subServices }) => {
  return (
    <section className="service-offered py-5">
      <Container>
        <div>
          <h2 className="service-title mb-4 fw-bold"> الخدمات الفرعية</h2>
          <div className="SubServicesList">
            {subServices.map((e: SubService) => (
              <button key={e.id}>
                <img src={e.image} alt="" />
                {e.name}
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubServicesList;
