import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import "@react-pdf-viewer/default-layout/lib/styles/index.css";

// About Page
export default class Construction extends React.Component {
  render() {
    const headerContent = <h1>Computer Vision Project</h1>;
    const pageContent = (
      <div style={{ height: "100vh" }}>
        <Worker
          workerUrl={`https://unpkg.com/pdfjs-dist@3.0.279/build/pdf.worker.min.js`}
        >
          <Viewer fileUrl="/VehicleDetection.pdf" />
        </Worker>
      </div>
    );

    return this.props.renderHeader ? headerContent : pageContent;
  }
}
