import React, { Component } from 'react';
import { Container, Row } from 'reactstrap';
import Header from './Header';
import MovieCard from './MovieCard';
import { RowContainer } from '../custom-styled/CustomStyledComponents';
import getMovies from '../constants/constants';

class App extends Component {
  static renderMovies() {
    const movies = getMovies();
    const cards = movies.map(movie => <MovieCard key={movie.imdbID} movie={movie} />);
    return cards;
  }

  render() {
    return (
      <div>
        <Header title="Open Movie App" />
        <Container>
          <RowContainer>
            <Row>{App.renderMovies()}</Row>
          </RowContainer>
        </Container>
      </div>
    );
  }
}

export default App;
