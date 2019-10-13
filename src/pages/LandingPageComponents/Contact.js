import React from 'react';
import { Button, Col, Container, Row} from 'react-bootstrap';
const Contact = ()=>{
    return (
        <div className="item-d">
    <Container >
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <form className="text-center">
            <p className="h4 text-center mb-4" style={{color:"black"}}>Contact Me</p>
            <label htmlFor="defaultFormContactNameEx" className="grey-text">
              Your name
            </label>
            <input
              type="text"
              id="defaultFormContactNameEx"
              className="form-control"
            />
            <br />
            <label htmlFor="defaultFormContactEmailEx" className="grey-text">
              Your email
            </label>
            <input
              type="email"
              id="defaultFormContactEmailEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactSubjectEx"
              className="grey-text"
            >
              Subject
            </label>
            <input
              type="text"
              id="defaultFormContactSubjectEx"
              className="form-control"
            />
            <br />
            <label
              htmlFor="defaultFormContactMessageEx"
              className="grey-text"
            >
              Your message
            </label>
            <textarea
              type="text"
              id="defaultFormContactMessageEx"
              className="form-control"
              rows="3"
            />
            <div className="text-center mt-4">
              <Button color="warning" outline type="submit">
                Send
              </Button>
            </div>
          </form>
        </Col>
      </Row>
    </Container>
        </div>
    );
}
export default Contact;