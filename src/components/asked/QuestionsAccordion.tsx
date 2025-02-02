"use client";
import { Accordion } from "react-bootstrap";

type FAQ = {
  id: number;
  question: string;
  answer: string;
};

export default function QuestionsAccordion({ items }: { items: FAQ[] }) {
  console.log(items);

  return (
    <Accordion>
      {items.map((item) => (
        <Accordion.Item eventKey={String(item.id)} key={item.id}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
