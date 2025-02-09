import Image from "next/image";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

export default function Footer({ footerData, footebox }: any) {
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
                  src={`${footerData.image}`}
                  alt={`صورة ${footerData.header}`}
                />
              )}
            </div>
          </Col>
          {/* <Col md={4}>
            <div className="footer-area-we-serve">
              <h3>المناطق التي نخدمها</h3>
              <ul>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-services">
              <h3>خدماتنا (الكلمة الرئيسية)</h3>
              <ul>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
                <li>
                  <Link href="#">رابط صفحة المنطقة</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="info footer-contact-information">
              <h3>ترخيص # XX - XXXXXXX</h3>
              <div className="send-mail d-flex">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "#fff", width: "30px", height: "30px" }}
                />
                <span>info@thewebsite.com</span>
              </div>
              <div className="social-media-icons my-4">
                <h5 className="mb-3">ابحث عنا على الإنترنت</h5>
                <ul className="list-unstyled d-flex gap-3">
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <FontAwesomeIcon icon={faLinkedin} />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-contact-information">
              <h3>معلومات الاتصال</h3>
              <ul>
                <li>
                  <Link href="#">1234 أي مكان هنا</Link>
                </li>
                <li>
                  <Link href="#">(123) 456 - 7890</Link>
                </li>
              </ul>
            </div>
          </Col>
          <Col md={4}>
            <div className="footer-terms-condition">
              <h3>الشروط والأحكام</h3>
              <ul>
                <li>
                  <Link href="/terms-condition">الشروط والأحكام</Link>
                </li>
                <li>
                  <Link href="/privacy-policy">سياسة الخصوصية</Link>
                </li>
                <li>
                  <Link href="#">خريطة الموقع</Link>
                </li>
              </ul>
            </div>
          </Col> */}
        </Row>
        <div className="footer-location">
          <Row>
            {footebox?.map((box: any) => (
              <Col md={3} key={box.name + box.id}>
                <div className="footer-location-box ">
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
            {/* <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col>
            <Col md={3}>
              <div className="footer-location-box ">
                <div className="box-header d-flex justify-content-center align-items-center">
                  <h3 className="mb-3">اسم النشاط التجاري المحدد بالموقع</h3>
                  <FontAwesomeIcon icon={faX} />
                </div>

                <div className="address">
                  <p>1234 أي مكان هنا، اسم المدينة، XX 123456</p>
                  <Link href={"#"}>ابحث عنا على الخريطة</Link>
                </div>

                <div className="phone">
                  <h5>رقم الهاتف</h5>
                  <p>(123) 456 - 7890</p>
                </div>
              </div>
            </Col> */}
          </Row>
        </div>
      </Container>
    </section>
  );
}
