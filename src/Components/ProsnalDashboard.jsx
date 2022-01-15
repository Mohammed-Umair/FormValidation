import React, { useState } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
const ProsnalDashboard = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [status, setStatus] = useState("");

  const onSubmit = (e) => {
    const per = { name, email, mobile, status }; //{name: name, email: email, mobile: mobile }  es6 feature
    console.log("==>", per);
    localStorage.setItem("person", JSON.stringify(per));
  };
  return (
    <div>
      <React.Fragment>
        <Row>
          <Form>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Name
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="text"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                />
              </Col>
            </Form.Group>
            <Form.Group as={Row} className="mb-3">
              <Form.Label column sm={2}>
                Mobile
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="Number"
                  onChange={(e) => setMobile(e.target.value)}
                  placeholder="Mobile"
                />
              </Col>
            </Form.Group>

            <Form.Group
              as={Row}
              className="mb-3"
              controlId="formHorizontalEmail"
            >
              <Form.Label column sm={2}>
                Email
              </Form.Label>
              <Col sm={10}>
                <Form.Control
                  type="Email"
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter-Email"
                />
              </Col>
            </Form.Group>
            <fieldset>
              <Form.Group
                as={Row}
                className="mb-3"
                onChange={(e) => setStatus(e.targat.value)}
              >
                <Form.Label as="legend" column sm={2}>
                  Radios
                </Form.Label>
                <Col sm={10}>
                  <Form.Check
                    type="radio"
                    label="Inprogress"
                    value={"Inprogress"}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios1"
                  />
                  <Form.Check
                    type="radio"
                    label="ON Hold"
                    value={"ON Hold"}
                    name="formHorizontalRadios"
                    id="formHorizontalRadios2"
                  />
                  <Form.Check
                    type="radio"
                    label="Complited"
                    name="formHorizontalRadios"
                    id="formHorizontalRadios3"
                  />
                </Col>
              </Form.Group>
            </fieldset>
            <Row>
              <Col lg={2}></Col>
              <Col lg={2}>
                <Button variant="primary " onClick={onSubmit}>
                  Submit
                </Button>
              </Col>
              <Col lg={2}>
                <Button variant="primary " onClick={onSubmit}>
                  Cancel
                </Button>
              </Col>
            </Row>
          </Form>
        </Row>
      </React.Fragment>
    </div>
  );
};

export default ProsnalDashboard;
