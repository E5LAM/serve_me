"use client";
import Accordion from "react-bootstrap/Accordion";

export default function QuestionsAccordion({ items }: { items: any }) {
  console.log(items);

  return (
    <Accordion>
      {items.map((item: any) => (
        <Accordion.Item eventKey={item.question} key={item.question}>
          <Accordion.Header>{item.question}</Accordion.Header>
          <Accordion.Body>{item.answer}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}
