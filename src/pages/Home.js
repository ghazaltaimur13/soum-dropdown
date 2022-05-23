import React from "react";
import {Row, Form, Col } from "react-bootstrap";
import Sidebar from "../components/Sidebar/Sidebar";

function Home() {
  return (
    <div className="container-fluid p-4 w-100">
      <Row>
        <Col xs={12} sm={12} md={12} lg={12}>
          <Sidebar />
        </Col>
      </Row>
    </div>
  );
}

export default Home;
