import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import { LoginView } from "../login-view/login-view";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export class MainView extends React.Component {
  // One of the "hooks" available in a React Component
  // state = {
  //   movies: []
  // };
  constructor() {
    super();

    this.state = {
      movies: [],
      selectedMovie: null,
      user: null
    };
  }
  componentDidMount() {
    axios.get(`https://terranovas.herokuapp.com/movies`).then(res => {
      const movies = res.data;
      this.setState({ movies });
    });
  }

  onMovieClick(movie) {
    this.setState({
      selectedMovie: movie
    });
  }
  onLoggedIn(user) {
    this.setState({
      user
    });
  }
  goBack = () => {
    this.setState({ selectedMovie: null });
  };
  render() {
    const { movies, selectedMovie, user } = this.state;

    // Before the movies have been loaded
    if (!movies) return <div className="main-view" />;
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;
    return (
      <div className="main-view">
        {selectedMovie ? (
          <MovieView goBack={this.goBack} movie={selectedMovie} />
        ) : (
          this.state.movies.map(movie => (
            <MovieCard
              key={movie._id}
              movie={movie}
              onClick={movie => this.onMovieClick(movie)}
            />
          ))
        )}
      </div>
    );
  }
}
