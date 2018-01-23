import React from 'react';
import PropTypes from 'prop-types';

import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';

const MovieCard = ({ movie }) => (
  <Col md="4">
    <Card>
      <CardImg
        top
        width="100%"
        // src="https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180"
        src={movie.Poster}
        alt="blah"
      />
    </Card>
    <CardBody>
      <CardTitle>{`${movie.Title} - (${movie.Year})`}</CardTitle>
      <CardSubtitle>{`Rated: ${movie.Rated} Country: ${movie.Country}`}</CardSubtitle>
      <CardText>{movie.Plot}</CardText>
      <Button>Read More</Button>
    </CardBody>
  </Col>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired // eslint-disable-line
};

export default MovieCard;
