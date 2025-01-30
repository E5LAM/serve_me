"use client";
import { AxiosInstance } from "@/Api/Api";
import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";

export default function Page() {
  const [terms, setTerms] = useState("");

  useEffect(() => {
    const handleFetch = async () => {
      try {
        const response = await AxiosInstance.get("terms");
        console.log(response.data.data.description);
        setTerms(response.data.data.description);
      } catch (error) {
        console.error("Error fetching terms:", error);
      }
    };
    handleFetch();
  }, []);
  return (
    <section className="privacy-policy">
      <div className="privacy-header text-center">
        <h2 className="mb-5">الشروط والأحكام</h2>
      </div>
      <div className="privacy-body">
        <Container dangerouslySetInnerHTML={{ __html: terms }} />
      </div>
    </section>
  );
}
