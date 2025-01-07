import Link from "next/link";
import { Container } from "react-bootstrap";

export default function TextSectionWithButton3() {
  return (
    <section className="hero">
      <Container>
        <div className="hero-info">
          <h1>
            (Location) clients have trusted our (Keyword) Services for....
          </h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolorem tempora adipisci repudiandae reprehenderit at illum
            laboriosam alias molestiae? Ullam deserunt ex totam recusandae?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolorem tempora adipisci repudiandae reprehenderit at illum
            laboriosam alias molestiae? Ullam deserunt ex totam recusandae?
          </p>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolorem tempora adipisci repudiandae reprehenderit at illum
            laboriosam alias molestiae? Ullam deserunt ex totam recusandae?
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Mollitia,
            corporis dolorem tempora adipisci repudiandae reprehenderit at illum
            laboriosam alias molestiae? Ullam deserunt ex totam recusandae?
          </p>
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
