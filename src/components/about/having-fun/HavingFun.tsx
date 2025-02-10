import { Container } from "react-bootstrap";

interface HavingFunProps {
  data: {
    title?: string;
    description?: string;
    video?: string;
  };
}

export default function HavingFun({ data }: HavingFunProps) {
  return (
    <div id="having-fun" className="pt-5 pt-md-6">
      <Container className="text-center">
        <div className="pb-3 pb-md-4">
          <h2>{data.title ?? "نحن نستمتع"}</h2>
          <p className="fw-medium">
            {data.description ??
              "شاهد فريقنا في العمل مع هذا الفيديو القصير ليعطيك ابتسامة."}
          </p>
        </div>
        <div
          className="about-video-right embed-responsive embed-responsive-16by9 mx-auto"
          style={{ maxWidth: "700px", display: "inline-block" }}
        >
          <video src={data.video} controls width={500} height={500} />
        </div>
      </Container>
    </div>
  );
}
