import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

interface FooterProps {
  footerData?: {
    header?: string;
    description?: string;
    image?: string;
  };
  footebox?: {
    id: number;
    name: string;
    description: string;
    image: string;
    link: string;
    phone: string;
  }[];
}

export default function Footer({ footerData, footebox }: FooterProps) {
  return (
    <section className="footer">
      <Container>
        <Row>
          <Col>
            <div className="footer-info text-capitalize footer-contact-information">
              <h2 className="footer-logo">{footerData?.header ?? "اخدمني"}</h2>
              <p>{footerData?.description}</p>

              {footerData?.image && (
                <Image
                  width={50}
                  height={50}
                  src={footerData.image}
                  alt={`صورة ${footerData.header ?? "اخدمني"}`}
                />
              )}
            </div>
          </Col>
        </Row>
        <div className="footer-location">
          <Row>
            {footebox?.map((box) => (
              <Col md={3} key={box.id}>
                <div className="footer-location-box">
                  <div className="box-header d-flex justify-content-between align-items-center">
                    <h3
                      style={{
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        whiteSpace: "nowrap",
                        width: "70%",
                      }}
                    >
                      {box.name}
                    </h3>
                    <Image
                      width={80}
                      height={50}
                      src={box.image}
                      alt={box.name}
                      className="object-fit-contain"
                    />
                  </div>

                  <div className="address">
                    <p>{box.description}</p>
                    <Link href={box.link} target="_blank">
                      ابحث عنا على الخريطة
                    </Link>
                  </div>

                  <div className="phone mt-3">
                    <h5>رقم الهاتف:</h5>
                    <p>{box.phone}</p>
                  </div>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </section>
  );
}
