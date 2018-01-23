import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Header from './Header';
import MovieCard from './MovieCard';
import getMovies from '../constants/constants';

class App extends Component {
  static renderMovies() {
    const movies = getMovies();
    const cards = movies.map(movie => {
      return <MovieCard key={movie.name} movie={movie} />;
    });
    return cards;
  }

  render() {
    return (
      <div>
        <Header title="Open Movie App" />
        <Container>
          <Row>{App.renderMovies()}</Row>
        </Container>
      </div>
    );
  }
}

export default App;
