import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Buscador.css";
import { getMovies, addMovieFavorite } from "../../actions";

export class Buscador extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    };
  }
  handleChange(event) {
    this.setState({ title: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();
    this.props.getMovies(this.state.title);
  }

  render() {
    const { title } = this.state;
    return (
      <div>
        <h2>Buscador</h2>
        <form className="form-container" onSubmit={(e) => this.handleSubmit(e)}>
          <div>
            <label className="label" htmlFor="title">
              Película:{" "}
            </label>
            <input
              type="text"
              id="title"
              autoComplete="off"
              value={title}
              onChange={(e) => this.handleChange(e)}
            />
          </div>
          <button type="submit">BUSCAR</button>
        </form>
        <ul>
          {/* Aqui tienes que escribir tu codigo para mostrar la lista de peliculas */}
          {this.props.movies.map((movie) => (
            <li key={movie.imdbID}>
              <Link to={`/movie/${movie.imdbID}`}>{movie.Title}</Link>
              <button
                onClick={() => this.props.addMovieFavorite(movie)}
                disabled={this.props.favs.find(
                  ({ imdbID }) => imdbID === movie.imdbID
                )}
              >
                FAV
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ movies: state.moviesLoaded, favs: state.moviesFavourites }), {
  getMovies,
  addMovieFavorite,
})(Buscador);
