import React, { Component } from "react";
import { Card, CardBody, CardHeader, Col, Row } from "reactstrap";

export default class Inquiries extends Component {
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xs="12" sm="6" md="4">
            <Card className="card-accent-primary">
              <CardHeader>Inquiries-Card with accent</CardHeader>
              <CardBody>Email me!</CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
