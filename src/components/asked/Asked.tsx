import { Container } from "react-bootstrap";
import Loading from "../ui/Loader";
import QuestionsAccordion from "./QuestionsAccordion";

export default async function Asked() {
  const res = await fetch(`${process.env.BASE_URL}/faqs`);
  const data = await res.json();

  return (
    <section className="asked">
      <Container>
        <h2 className="text-center my-5">الأسئلة المتكررة حول خدمات التنظيف</h2>
        {data?.data ? <QuestionsAccordion items={data.data} /> : <Loading />}
      </Container>
    </section>
  );
}
