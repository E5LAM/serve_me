import Image from "next/image";
import { Card, Container, Row, Col, CardBody } from "react-bootstrap";

export default function HappinessGuarantee({ data, featurs }: any) {
  return (
    <div id="happiness-guarantee" className="pt-5 pt-md-6 mb-5">
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} sm={10} md={9} className="text-center pb-3 pb-md-4">
            <h2> {data.title ?? "أقل من القيام. المزيد للاستمتاع."}</h2>
            <p className="fw-medium">
              {data?.description ??
                " كعمال عائلة، نحن ملتزمون بالعناية بالعملاء والطاقم بالشكل الأفضل."}
            </p>
          </Col>
        </Row>
        <Row className="align-items-stretch text-center">
          {featurs?.map((item: any) => (
            <Col key={item.id} xs={12} sm={6} md={4} className="pb-3 pb-md-4">
              <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
                <CardBody>
                  <div className="card-icon p-2 p-md-3">
                    <img src={item.image} alt={item.header} height="60" />
                  </div>
                  <div className="card-text pb-2 pb-md-3">
                    <h5 className="fw-bold pb-2">{item.header}</h5>
                    <div>{item.description}</div>
                  </div>
                </CardBody>
              </Card>
            </Col>
          ))}

          {/* <Col xs={12} sm={6} md={4} className="pb-3 pb-md-4">
            <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
              <CardBody>
                <div className="card-icon p-2 p-md-3">
                  <img
                    src="/images/about/Family-photo.png"
                    alt="ملك عائلة"
                    height="60"
                  />
                </div>
                <div className="card-text pb-2 pb-md-3">
                  <h5 className="fw-bold pb-2">ملك عائلة</h5>
                  <div>
                    كعمال عائلة، نحن ملتزمون بالعناية بالعملاء والطاقم بالشكل
                    الأفضل.
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className="pb-3 pb-md-4">
            <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
              <CardBody>
                <div className="card-icon p-2 p-md-3">
                  <img
                    src="/images/about/no-cancelations-badge.svg"
                    alt="نحن لا نلغي. أبداً."
                    height="60"
                  />
                </div>
                <div className="card-text pb-2 pb-md-3">
                  <h5 className="fw-bold pb-2">نحن لا نلغي. أبداً.</h5>
                  <div>
                    التنظيف هو التزام. إذا اضطررنا للإلغاء، سندفع لك 100 دولار.
                    مضمون.
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className="pb-3 pb-md-4">
            <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
              <CardBody>
                <div className="card-icon p-2 p-md-3">
                  <img
                    src="/images/about/Happy-staff.svg"
                    alt="موظفون سعداء، أنت سعيد"
                    height="60"
                  />
                </div>
                <div className="card-text pb-2 pb-md-3">
                  <h5 className="fw-bold pb-2">موظفون سعداء، أنت سعيد</h5>
                  <div>
                    نحن نعامل موظفينا بالاحترام. جميع موظفينا يكسبون أجرًا
                    معيشيًا، مما يؤدي إلى عمل عالي الجودة وعملاء سعداء.
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className="pb-3 pb-md-4">
            <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
              <CardBody>
                <div className="card-icon p-2 p-md-3">
                  <img
                    src="/images/about/Pride.svg"
                    alt="نحن نفخر بعملنا"
                    height="60"
                  />
                </div>
                <div className="card-text pb-2 pb-md-3">
                  <h5 className="fw-bold pb-2">نحن نفخر بعملنا</h5>
                  <div>
                    إذا لم تكن راضيًا بنسبة 100% عن خدماتنا، سنعود ونعيد
                    التنظيف.
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className="pb-3 pb-md-4">
            <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
              <CardBody>
                <div className="card-icon p-2 p-md-3">
                  <img
                    src="/images/about/laundry-fold.svg"
                    alt="نعم، نقوم بغسيل ملابسك"
                    height="60"
                  />
                </div>
                <div className="card-text pb-2 pb-md-3">
                  <h5 className="fw-bold pb-2">نعم، نقوم بغسيل ملابسك</h5>
                  <div>
                    مع كل زيارة تنظيف، سنقوم بغسل الملابس وتجفيفها وطيها. ونحن
                    حتى نضعها في مكانها.
                  </div>
                </div>
              </CardBody>
            </Card>
          </Col>
          <Col xs={12} sm={6} md={4} className="pb-3 pb-md-4">
            <Card className="w-100 h-100 mh-shadow rounded-4 border-0">
              <CardBody>
                <div className="card-icon p-2 p-md-3">
                  <img
                    src="/images/about/no-contracts.svg"
                    alt="بدون عقود"
                    height="60"
                  />
                </div>
                <div className="card-text pb-2 pb-md-3">
                  <h5 className="fw-bold pb-2">بدون عقود</h5>
                  <div>يمكنك الإلغاء في أي وقت. لا يوجد التزام طويل الأمد.</div>
                </div>
              </CardBody>
            </Card>
          </Col> */}
        </Row>
      </Container>
    </div>
  );
}
