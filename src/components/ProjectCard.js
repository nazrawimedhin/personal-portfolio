import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, img, url }) => {
  function redirect() {
    window.location.href = url;
  }

  return (
    <Col onClick={redirect} size={12} sm={6} md={4} role="button">
      <div className="project-img-box">
        <img src={img} alt="project" />
        <div className="project-txt">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  );
};
