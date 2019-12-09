import React, { Component } from "react";
import QrReader from "react-qr-reader";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Row,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader
} from "reactstrap";

export default class KerchangScanner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      success: false,
      scannedresult: "No result"
    };
    this.toggleModalSuccess = this.toggleModalSuccess.bind(this);
  }
  toggleModalSuccess() {
    this.setState({
      success: !this.state.success
    });
  }
  // state = {
  //   result: "No result"
  // };

  handleScan = data => {
    if (data) {
      this.setState({
        scannedresult: data
      });
    }
  };
  handleError = err => {
    console.error(err);
  };
  render() {
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl>
            <Card className="card-accent-y">
              <CardHeader className="text-center">
                <strong>Kerchang's Scanner</strong>
              </CardHeader>
              <CardBody>
                <p className="text-center">
                  Place and scan the Kerchang's QR Code
                </p>

                {/* qr scanner container */}
                <div>
                  <QrReader
                    delay={300}
                    onError={this.handleError}
                    onScan={this.handleScan}
                    style={{ width: "100%" }}
                  />

                  {/* modal will open after click button */}
                  <p className="text-center py-5">
                    <Button color="success" onClick={this.toggleModalSuccess}>
                      {this.state.scannedresult}
                    </Button>

                    <Modal
                      isOpen={this.state.success}
                      toggle={this.toggleModalSuccess}
                      className={
                        "modal-dialog-centered modal-sm modal-success " +
                        this.props.className
                      }
                    >
                      <ModalHeader toggle={this.toggleModalSuccess}>
                        Kerchang Informations
                      </ModalHeader>
                      <ModalBody>
                        <p>Kerchang's Name : Bin Sulung</p>
                        <p>Origin : Sabah</p>
                        <p>Ethnicity : Sabah</p>
                      </ModalBody>
                      <ModalFooter>
                        <Button
                          className="btn-block text-center m-auto p-auto"
                          color="success"
                          onClick={this.toggleModalSuccess}
                        >
                          Learn More
                        </Button>
                      </ModalFooter>
                    </Modal>
                  </p>
                </div>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
