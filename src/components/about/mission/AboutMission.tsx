import { Card, CardBody, Col, Container, Row } from "react-bootstrap";

export default function AboutMission() {
  return (
    <section id="our-mission" className="pt-md-4 about__mission">
      <div className="py-5 pt-md-10 mt-md-n10 about__mission-bg">
        <Container className="text-center">
          <div className="pb-3 pb-md-4 text-white">
            <h2 className="fw-bold">مهمتنا</h2>
          </div>
          <Row className="align-items-stretch">
            <Col xs={12} md={6} className="pb-3 pb-md-4">
              <Card className="w-100 h-100">
                <CardBody>
                  <div className="card-icon p-2 p-md-3">
                    <img
                      src="/images/about/Price.svg"
                      alt="Industry-Leading Wages"
                      height="50"
                    />
                  </div>
                  <div className="card-text pb-2 pb-md-3">
                    <h5 className="fw-bold pb-2">الرواتب الرائدة في الصناعة</h5>
                    <p>
                      الموظفون لدينا هم موظفون دائمون في الذين يتقاضون أجراً
                      سنوياً يتراوح بين 19-28 دولار للساعة، مما يعكس اعترافنا
                      بعملهم الشاق وتفانيهم.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} className="pb-3 pb-md-4">
              <Card className="w-100 h-100">
                <CardBody>
                  <div className="card-icon p-2 p-md-3">
                    <img
                      src="/images/about/maids-team.svg"
                      alt="دعم الأمهات العاملات"
                      height="50"
                    />
                  </div>
                  <div className="card-text pb-2 pb-md-3">
                    <h5 className="fw-bold pb-2">دعم الأمهات العاملات</h5>
                    <p>
                      نستوعب المسؤوليات المزدوجة للعمل والعائلة. جداولنا الزمنية
                      تضمن أن معظم موظفينا، الذين يديرون الأمهات، يمكنهم إنهاء
                      يوم العمل في الساعة 3 مساءً لوقت العائلة.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} className="pb-3 pb-md-4">
              <Card className="w-100 h-100">
                <CardBody>
                  <div className="card-icon p-2 p-md-3">
                    <img
                      src="/images/about/Smile.svg"
                      alt="مخصصات صحية شاملة"
                      height="50"
                    />
                  </div>
                  <div className="card-text pb-2 pb-md-3">
                    <h5 className="fw-bold pb-2">مخصصات صحية شاملة</h5>
                    <p>
                      نقدم مخصصات صحية وخدمات مما يضمن أن صحة ورفاهية فريقنا
                      دائماً على رأس أولوياتنا.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
            <Col xs={12} md={6} className="pb-3 pb-md-4">
              <Card className="w-100 h-100">
                <CardBody>
                  <div className="card-icon p-2 p-md-3">
                    <img
                      src="/images/about/post.svg"
                      alt="منح دراسية"
                      height="50"
                    />
                  </div>
                  <div className="card-text pb-2 pb-md-3">
                    <h5 className="fw-bold pb-2">منح دراسية</h5>
                    <p>
                      نحن نقدم منح دراسية سنوية لأبناء موظفينا للجامعات. كليات
                      المجتمع أو مدارس حرفية. نحن ملتزمون بدعم مستقبلهم.
                    </p>
                  </div>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
}
