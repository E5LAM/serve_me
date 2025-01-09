import { Col, Container, Row } from "react-bootstrap";
import Testimonials from "@/components/testimonials/Testimonials";
import { Metadata } from "next";
import { LocationList } from "./LocationList";

export const metadata: Metadata = {
  title: "أخدمنى | الموقع",
  description: "موقع اخدمنى لخدمات التنظيف",
};

export interface Location {
  [key: string]: (string | Location)[];
}

const locations: Location[] = [
  {
    القاهرة: [{ الجيزة: ["الهرم", "المنيرة"] }, "فيصل", "مقطم"],
    الاسكندرية: ["سموحة", { "كفر عبده": ["ش 90"] }],
  },
];

export default function LocationPage() {
  return (
    <main className="location mt-4">
      <Container>
        <Row>
          <Col className="mb-md-0 mb-4">
            <div className="hero-info">
              <h1>مواقع خدمتنا</h1>
              <p>سنقوم بالوصول إليك اينما كنت فى الاماكن التالية:</p>
              <LocationList locations={locations} />
            </div>
          </Col>
        </Row>

        <section className="testimonials">
          <Container>
            <Testimonials cols={undefined} />
          </Container>
        </section>
      </Container>
    </main>
  );
}
