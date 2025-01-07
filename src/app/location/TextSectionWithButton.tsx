import Link from "next/link";
import { Container } from "react-bootstrap";

export default function TextSectionWithButton1() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-info">
          <h1>Our Expert (Service) Helps (Location) Residents</h1>
          <h3>Some support Text here for the H3</h3>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolorem tempora adipisci repudiandae reprehenderit at illum
            laboriosam alias molestiae? Ullam deserunt ex totam recusandae?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolorem tempora adipisci repudiandae reprehenderit at illum
            laboriosam alias molestiae? Ullam deserunt ex totam recusandae?
          </p>
          <div className="cta d-flex justify-content-start align-items-center gap-3">
            <Link href={"tel:+201000962127"}>
              <button className="btn-prim">+201000962127</button>
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
