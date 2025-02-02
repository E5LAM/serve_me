import { Container } from "react-bootstrap";

type Secound = {
  servicesecound: {
    title: string;
    description: string;
    image: string;
  };
};

const ServiceOffered: React.FC<Secound> = ({ servicesecound }) => {
  return (
    <section className="service-offered py-5">
      <Container>
        <div>
          <h2 className="service-title mb-4 fw-bold">
            {servicesecound?.title}{" "}
          </h2>
          <p className="service-description">{servicesecound?.description}</p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOffered;
