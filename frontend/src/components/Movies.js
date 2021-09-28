import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Movies extends Component {
  state = {
    movies: [],
  };

  componentDidMount() {
    this.setState({
      movies: [
        {
          id: 1,
          title: "The Shawshank Redemption",
          runtime: 142,
        },
        {
          id: 2,
          title: "The Godfather ",
          runtime: 175,
        },
        {
          id: 3,
          title: "The Dark Knight",
          runtime: 153,
        },
      ],
    });
  }

  render() {
    return (
      <>
        <h2>Movies mudafucka!</h2>
        <ul>
          {this.state.movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}
