import dynamic from "next/dynamic";
import { Metadata } from "next";

import { Col, Container, Row } from "react-bootstrap";
import Loading from "@/components/ui/Loader";

const Testimonials = dynamic(
  () => import("@/components/testimonials/Testimonials"),
  {
    loading: () => <Loading />,
  }
);
import { LocationList } from "./LocationList";
import Footer from "@/components/layout/Footer";
import Image from "next/image";

export const metadata: Metadata = {
  title: "أخدمنى | الموقع",
  description: "موقع اخدمنى لخدمات التنظيف",
};

export default async function LocationPage() {
  const res = await fetch(`${process.env.BASE_URL}/new/location`);
  const locationPageData = await res.json();

  const firstsection = locationPageData?.data?.firstsection;
  const locations = locationPageData?.data?.locations;
  const testmonils = locationPageData?.data?.reviews;
  const footer = locationPageData?.data?.footer;
  const footebox = locationPageData?.data?.footerSquare;

  return (
    <>
      <main className="location mt-4">
        <Container>
          <Row>
            <Col className="mb-md-0 mb-4">
              <div className="hero-info">
                <div className="d-flex align-items-center justify-content-between">
                  <div>
                    <h1>{firstsection.title}</h1>
                    <p>{firstsection.description}</p>
                  </div>
                  {/* {firstsection.image && (
                    <Image
                      width={360}
                      height={226}
                      src={firstsection.image}
                      alt={`${firstsection.title} image`}
                    />
                  )} */}
                </div>
                {locations ? (
                  <LocationList locations={locations} />
                ) : (
                  <h6 className="text-center">لا يتوفر أماكن خدمات حاليا!!</h6>
                )}
              </div>
            </Col>
          </Row>

          <section className="testimonials">
            <Container>
              <Testimonials data={testmonils} cols={undefined} />
            </Container>
          </section>
        </Container>
      </main>
      <Footer footerData={footer} footebox={footebox} />
    </>
  );
}
