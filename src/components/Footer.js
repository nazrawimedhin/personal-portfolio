import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/linkedin-icon.png";
import navIcon2 from "../assets/img/twitter-icon.png";
import navIcon3 from "../assets/img/github-icon.png";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/nazrawimedhin">
                <img src={navIcon1} alt="Icon" />
              </a>
              <a href="https://twitter.com/medhinnazrawi">
                <img src={navIcon2} alt="Icon" />
              </a>
              <a href="https://github.com/nazrawimedhin">
                <img src={navIcon3} alt="Icon" />
              </a>
            </div>
            <p>Copyright © 2023. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
