import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";

import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  componentWillUnmount() {
    this.props.getMovieDetail()
  }

  render() {
    return (
      <div className="movie-detail">
        Detalle de la pelicula
        {this.props.movies === undefined ? (
          <>
            <h2>Cargando...</h2>
          </>
        ) : this.props.movies === null ? (
          <>
            <h2>Not Found</h2>
          </>
        ) : (
          <>
            <h2>{`Título: ${this.props.movies.Title}`}</h2>
            <img src={this.props.movies.Poster} alt="Img not found" />
            <h4>{`Año: ${this.props.movies.Year}`}</h4>
            <h4>{`Duración: ${this.props.movies.Runtime}`}</h4>
            <h4>{`Elenco: ${this.props.movies.Actors}`}</h4>
            <h4>{`Director: ${this.props.movies.Director}`}</h4>
          </>
        )}
      </div>
    );
  }
}

export default connect((state) => ({ movies: state.movieDetail }), {
  getMovieDetail,
})(Movie);

// import React from 'react';
// import { connect } from 'react-redux';
// import { getDetails } from '../../actions/index';

// import './Movie.css';

// class Movie extends React.Component {
//     componentDidMount() {
//         const movieId = this.props.match.params.id;
//         this.props.getMovieDetail(movieId)
//     }

//     render() {
//         return (
//             <div className="movie-detail">
//                 Detalle de la pelicula
//                 <h2>{`Título: ${this.props.movies.Title}`}</h2>
//                 <img src={this.props.movies.Poster} alt="Img not found"/>
//                 <h4>{`Año: ${this.props.movies.Year}`}</h4>
//                 <h4>{`Duración: ${this.props.movies.Runtime}`}</h4>
//                 <h4>{`Elenco: ${this.props.movies.Actors}`}</h4>
//                 <h4>{`Director: ${this.props.movies.Director}`}</h4>
//             </div>
//         );
//     }
// }

// function mapStateToProps(state) {
//     return {
//         movies: state.movieDetail
//     }
// }
// function mapDispatchToProps(dispatch){
//     return {
//         getMovieDetail: (id) => dispatch(getDetails(id))
//     }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Movie);
