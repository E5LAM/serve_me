import { Container } from "react-bootstrap";
type Second = {
  serviceSecound: any;
};

const ServiceOffered: React.FC<Second> = ({ serviceSecound }) => {
  return (
    <section className="service-offered py-5">
      <Container>
        <div>
          <h2 className="service-title mb-4 fw-bold">
            {serviceSecound?.title}{" "}
          </h2>
          <p className="service-description">{serviceSecound?.description}</p>
        </div>
      </Container>
    </section>
  );
};

export default ServiceOffered;
