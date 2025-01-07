import { Container } from "react-bootstrap";

export default function HavingFun() {
  return (
    <div id="having-fun" className="pt-5 pt-md-6">
      <Container className="text-center">
        <div className="pb-3 pb-md-4">
          <h2>نحن نستمتع</h2>
          <p className="fw-medium">
            شاهد فريقنا في العمل مع هذا الفيديو القصير ليعطيك ابتسامة.
          </p>
        </div>
        <div
          className="about-video-right embed-responsive embed-responsive-16by9 mx-auto"
          style={{ maxWidth: "700px", display: "inline-block" }}
        >
          <div className="d-md-none">
            <iframe
              src="https://player.vimeo.com/video/492216591"
              allow="autoplay; fullscreen; picture-in-picture"
            />
            <iframe
              width="560"
              height="315"
              src="https://www.youtube.com/embed/Pmieyp75SrA?si=1_aC6zFLua-Gi_US"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
          </div>
          <div className="d-none d-md-block">
            <iframe
              style={{ zIndex: 1 }}
              src="https://www.youtube.com/embed/Pmieyp75SrA?si=1_aC6zFLua-Gi_US"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen={false}
            ></iframe>
          </div>
        </div>
      </Container>
    </div>
  );
}
