/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faLinkedin,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState<{
    type: "success" | "danger" | null;
    message: string;
  }>({ type: null, message: "" });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setStatus({ type: null, message: "" });

    try {
      // Here you would typically send the form data to your backend
      // Simulating API call with timeout
      await new Promise((resolve) => setTimeout(resolve, 1000));

      setStatus({
        type: "success",
        message: "شكراً لرسالتك. سنعود إليك قريباً!",
      });
      setFormData({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      setStatus({
        type: "danger",
        message: "حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    {
      icon: faFacebook,
      name: "فيسبوك",
      url: "https://facebook.com",
      color: "#1877F2",
      description: "انضم إلى مجتمعنا المكون من أكثر من 50 ألف متابع",
      backgroundColor: "rgba(24, 119, 242, 0.1)",
    },
    {
      icon: faTwitter,
      name: "تويتر",
      url: "https://twitter.com",
      color: "#1DA1F2",
      description: "تحديثات وإعلانات فورية",
      backgroundColor: "rgba(29, 161, 242, 0.1)",
    },
    {
      icon: faInstagram,
      name: "انستغرام",
      url: "https://instagram.com",
      color: "#E4405F",
      description: "كواليس وعروض المنتجات",
      backgroundColor: "rgba(228, 64, 95, 0.1)",
    },
    {
      icon: faLinkedin,
      name: "لينكد إن",
      url: "https://linkedin.com",
      color: "#0A66C2",
      description: "رؤى مهنية وأخبار الشركة",
      backgroundColor: "rgba(10, 102, 194, 0.1)",
    },
    {
      icon: faYoutube,
      name: "يوتيوب",
      url: "https://youtube.com",
      color: "#FF0000",
      description: "دروس ومحتوى فيديو",
      backgroundColor: "rgba(255, 0, 0, 0.1)",
    },
  ];

  return (
    <Container className="py-5" dir="rtl">
      <Row className="justify-content-center mb-5">
        <Col lg={8} className="text-center">
          <h1 className="display-4 fw-bold mb-3">تواصل معنا</h1>
          <p className="lead text-muted mb-0">
            هل لديك أسئلة؟ نحن نحب أن نسمع منك. أرسل لنا رسالة وسنرد في أقرب وقت
            ممكن.
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center g-4">
        <Col lg={7} className="mb-5 mb-lg-0">
          {status.type && (
            <Alert
              variant={status.type}
              className="mb-4 d-flex align-items-center"
            >
              <div className="me-3">
                {status.type === "success" ? "✅" : "⚠️"}
              </div>
              {status.type === "success"
                ? "شكراً لرسالتك. سنعود إليك قريباً!"
                : "حدث خطأ في إرسال رسالتك. يرجى المحاولة مرة أخرى."}
            </Alert>
          )}
          <Form
            onSubmit={handleSubmit}
            className="contact-form p-4 p-md-5 border rounded shadow-sm bg-white"
          >
            <Row>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formName">
                  <Form.Label>الاسم الكامل</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="أدخل اسمك الكامل"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
              <Col md={6}>
                <Form.Group className="mb-3" controlId="formEmail">
                  <Form.Label>البريد الإلكتروني</Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="أدخل بريدك الإلكتروني"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </Form.Group>
              </Col>
            </Row>

            <Form.Group className="mb-3" controlId="formSubject">
              <Form.Label>الموضوع</Form.Label>
              <Form.Control
                type="text"
                placeholder="أدخل الموضوع"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group className="mb-4" controlId="formMessage">
              <Form.Label>الرسالة</Form.Label>
              <Form.Control
                as="textarea"
                rows={5}
                placeholder="أدخل رسالتك"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <div className="text-center">
              <Button
                variant="primary"
                type="submit"
                size="lg"
                disabled={isSubmitting}
                className="px-5"
              >
                {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
              </Button>
            </div>
          </Form>
        </Col>

        <Col lg={5}>
          <div className="contact-info p-4 p-md-5 border rounded shadow-sm bg-white h-100">
            <h2 className="h3 mb-4">تواصل معنا</h2>
            <p className="text-muted mb-4">
              انضم إلى مجتمعنا على وسائل التواصل الاجتماعي للبقاء على اطلاع بآخر
              الأخبار والعروض الحصرية والمحتوى المميز.
            </p>
            <div className="social-links d-flex flex-wrap gap-3 justify-content-center">
              {socialLinks.map((link, index) => (
                <div key={index} className="social-link-container">
                  <a
                    href={link.url}
                    className="social-link-circle"
                    target="_blank"
                    rel="noopener noreferrer"
                    title={link.name}
                    style={{
                      backgroundColor: link.backgroundColor,
                    }}
                  >
                    <FontAwesomeIcon
                      icon={link.icon}
                      size="lg"
                      style={{ color: link.color }}
                    />
                  </a>
                  <div className="social-tooltip">{link.name}</div>
                </div>
              ))}
            </div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactUs;
