import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

const ProblemList = props => (
  <Container>
    <Row>
      <Col sm={3}>&nbsp;</Col>
      <Col sm={6}>
        <h3>Problems</h3>
      </Col>
      <Col sm={3}>&nbsp;</Col>
    </Row>
    <Row>
      <Col sm>
        <Link to="/ttt">Tic Tac Toe</Link>
      </Col>
      <Col sm>
        <Link to="/linked-list">Linked List</Link>
      </Col>
      <Col sm>
        <Link to="/path-finder">Path Finder</Link>
      </Col>
      <Col sm>
        <Link to="/meeting-times">Find Meeting</Link>
      </Col>
    </Row>
  </Container>
);

export default ProblemList;
