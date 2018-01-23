import React from 'react';
import PropTypes from 'prop-types';
import { Col, Card, CardImg, CardBody, CardTitle, CardSubtitle, CardText, Button } from 'reactstrap';
import { LimitedTextTitle } from '../custom-styled/CustomStyledComponents';

const MovieCard = ({ movie }) => (
  <Col md="4">
    <Card>
      <CardImg top width="100%" src={movie.Poster} alt="blah" />
    </Card>
    <CardBody>
      <CardTitle>
        <LimitedTextTitle id={movie.imdbID}>{`${movie.Title} - (${movie.Year})`}</LimitedTextTitle>
      </CardTitle>
      <CardSubtitle>{`Rated: ${movie.Rated} Country: ${movie.Country}`}</CardSubtitle>
      <CardText className="text-justify">{movie.Plot}</CardText>
      <Button color="primary">More</Button>
    </CardBody>
  </Col>
);

MovieCard.propTypes = {
  movie: PropTypes.object.isRequired // eslint-disable-line
};

export default MovieCard;
