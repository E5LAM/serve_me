import Footer from "@/components/layout/Footer";
import { Container } from "react-bootstrap";

async function getTermsData() {
  try {
    const res = await fetch(`${process.env.BASE_URL}/terms`);

    if (!res.ok) throw new Error("Failed to fetch terms data");

    const data = await res.json();

    return {
      terms: data.data.description || "",
      footer: data.data.footer || null,
      footersquares: data.data.footersquares || [],
    };
  } catch (error) {
    console.error("Error fetching terms data:", error);
    return {
      terms: "",
      footer: null,
      footersquares: [],
    };
  }
}

export default async function Page() {
  const { terms, footer, footersquares } = await getTermsData();

  return (
    <>
      <section className="privacy-policy">
        <div className="privacy-header text-center">
          <h2 className="mb-5">الشروط والأحكام</h2>
        </div>
        <div className="privacy-body">
          <Container dangerouslySetInnerHTML={{ __html: terms }} />
        </div>
      </section>
      {footer && <Footer footerData={footer} footebox={footersquares} />}
    </>
  );
}
