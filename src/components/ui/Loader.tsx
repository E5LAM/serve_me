import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = ({ isFullPage = false }: { isFullPage?: boolean }) => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: isFullPage ? "100vh" : undefined,
    }}
  >
    <Spinner animation="border" style={{ color: "#2254aa" }} />
  </div>
);
export default Loading;
