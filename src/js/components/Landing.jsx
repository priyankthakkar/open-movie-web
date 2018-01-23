import React from 'react';
import { Container, Row } from 'reactstrap';
import MovieCard from './MovieCard';
import { RowContainer } from '../custom-styled/CustomStyledComponents';
import getMovies from '../constants/constants';

export const renderMovies = () => {
  const movies = getMovies();
  const cards = movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />);
  return cards;
};

export const Landing = () => (
  <Container>
    <RowContainer>
      <Row>{renderMovies()}</Row>
    </RowContainer>
  </Container>
);
