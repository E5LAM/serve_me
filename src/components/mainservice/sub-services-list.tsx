import { faKorvue } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { Container } from "react-bootstrap";

const SubServicesList = () => {
  return (
    <section className="service-offered py-5">
      <Container>
        <div >
          <h2 className="service-title mb-4 fw-bold" > الخدمات الفرعية</h2>
          <div className="SubServicesList">
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
            <Link href={'##'}>
            <FontAwesomeIcon icon={faKorvue} style={{ width: "30px" }}/>
            اسم الخدمة
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default SubServicesList;
