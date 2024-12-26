import Link from "next/link";
import { Col, Container } from "react-bootstrap";

interface TextSectionProps {
  title: string;
  subTitle?: string;
  paragraph: string[];
  btnText: string;
}

export default function TextSection({
  title,
  subTitle,
  paragraph,
  btnText,
}: TextSectionProps) {
  return (
    <section className="fix">
      <Container>
        <Col>
          <div className="hero-info">
            <h2>{title}</h2>
            <h3 className="mb-5 mt-3">{subTitle}</h3>
            {paragraph.map((text, index) => (
              <p key={index}>{text}</p>
            ))}
            <Link href={"/node_modules"}>
              <button className="btn-prim mt-2">{btnText}</button>
            </Link>
          </div>
        </Col>
      </Container>
    </section>
  );
}
