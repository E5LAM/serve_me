import Link from 'next/link'
import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function Fix2() {
  return (
    <section className='fix2'>
      <Container>
        <Row>
          <Col md={6}>
            <div className="hero-image text-center border rounded">
              <Image
                src={"/images/fix/fix2.png"}
                width={300}
                height={220}
                alt="صورة البطل"
              />
            </div>
            <div className="our-serve text-center py-3">
              <Link href={"/node_modules"}>
                <button className="btn-prim">خدمتنا</button>
              </Link>
            </div>
          </Col>
          <Col md={6}>
            <div className="hero-info">
              <h2>نحن نصلح جميع أنواع مشاكل (الكلمة الرئيسية)</h2>
              <p>
                لوريم إيبسوم، دولور سيت أميت كونسكتتور أديبيسيسينغ إيليت.
                موليتيا، كوربوريس دولوريم تيمبورا أديبسي ريبودياندي
                ريهريبريت آت إلوم لابوريوسام ألياس موليستي؟ أولام ديسيرنت إكس
                توتام ريكوساند؟
              </p>
              <div className="cta d-flex justify-content-start align-items-center gap-3">
                <p className="mb-0">(XXX) 123 - 4567</p>
                <Link href={"/node_modules"}>
                  <button className="btn-prim">رقم الهاتف</button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
