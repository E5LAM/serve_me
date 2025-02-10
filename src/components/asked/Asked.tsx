import { Container } from "react-bootstrap";
import QuestionsAccordion from "./QuestionsAccordion";

interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

interface FAQResponse {
  data: FAQItem[];
}

export default async function Asked() {
  let data: FAQResponse | null = null;

  try {
    const res = await fetch(`${process.env.BASE_URL}/faqs`);
    if (!res.ok) throw new Error("فشل في جلب البيانات");
    data = await res.json();
  } catch (error) {
    console.error("خطأ في جلب الأسئلة:", error);
  }

  return (
    <section className="asked">
      <Container>
        <h2 className="text-center my-5">الأسئلة المتكررة حول خدمات التنظيف</h2>
        {data?.data?.length ? (
          <QuestionsAccordion items={data.data} />
        ) : (
          <p>غير متوفر أسئلة حاليا...</p>
        )}
      </Container>
    </section>
  );
}
