"use client";
import Testimonials from "@/components/testimonials/Testimonials";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState, useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";

interface Blog {
  id: number;
  title: string | null;
  description: string | null;
  created_at: string;
  updated_at: string;
}

interface BlogHeader {
  id: number;
  title: string;
  image: string;
  created_at: string;
  updated_at: string;
}

interface BlogData {
  success: boolean;
  message: string;
  data: {
    blogheader: BlogHeader;
    blogs: Blog[];
  };
}

export default function Page() {
  const [data, setData] = useState<BlogData | null>(null);

  useEffect(() => {
    async function getBlog(): Promise<void> {
      try {
        const res = await fetch("https://programming-fashion.store/api/blogs");
        if (!res.ok) {
          throw new Error("حدث خطأ أثناء جلب البيانات");
        }
        const result: BlogData = await res.json();
        setData(result);
      } catch (err) {
        console.error(err);
      }
    }
    getBlog();
  }, []);

  return (
    <section className="blog">
      <div className="blog-header">
        {data?.data?.blogheader && (
          <div key={data.data.blogheader.id}>
            <h2>{data.data.blogheader.title || "عنوان الصفحة"}</h2>
          </div>
        )}
      </div>
      <Container>
        <div className="blog-body">
          {data?.data?.blogs?.map((blog) => (
            <div key={blog.id}>
              <h2>{blog.title || "عنوان المقالة"}</h2>
              <p
                dangerouslySetInnerHTML={{
                  __html: blog.description || "وصف المقالة",
                }}
              />
            </div>
          ))}
        </div>

        <section className="map">
          <Container>
            <Row>
              <Col md={6}>
                <div className="map-location">
                  <div className="mapouter">
                    <div className="gmap_canvas">
                      <iframe
                        className="gmap_iframe"
                        src="https://maps.google.com/maps?width=600&height=400&hl=en&q=University of Oxford&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                      />
                    </div>
                  </div>
                </div>
              </Col>
              <Col md={6}>
                <h2>خدمات (الكلمة الرئيسية) في جميع أنحاء منطقة (الموقع)</h2>
                <p>1234 Anywhere PL someCity, XX</p>
                <h6>(123) 456 - 7890</h6>
                <div className="mail">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    style={{ width: "30px" }}
                  />
                  <span className="me-2">info@thewebsite.com</span>
                </div>

                <ul className="list-unstyled d-flex align-items-center gap-3 text-md-end text-center mt-3">
                  {[...Array(3)].map((_, index) => (
                    <li key={index}>
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        style={{ width: "30px", color: "#0a66c2" }}
                      />
                    </li>
                  ))}
                </ul>
              </Col>
            </Row>
          </Container>
        </section>

        <section className="testimonials">
          <Container>
            <Testimonials cols={undefined} />
          </Container>
        </section>
      </Container>
    </section>
  );
}
