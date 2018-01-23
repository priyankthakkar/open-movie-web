import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import { RowContainer } from '../custom-styled/CustomStyledComponents';

const MovieDetails = () => (
  <Container>
    <RowContainer>
      <Row>
        <Col>
          <h1>This is a movie details page</h1>
        </Col>
      </Row>
    </RowContainer>
  </Container>
);

export default MovieDetails;
