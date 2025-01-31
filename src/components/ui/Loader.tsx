import React from "react";
import { Spinner } from "react-bootstrap";
const Loading = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    }}
  >
    <Spinner animation="border" style={{ color: "#2254aa" }} />
  </div>
);
export default Loading;
