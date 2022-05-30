import React, { Component } from "react";
import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
import { removeMovieFavorite } from "../../actions";
import "./Favorites.css";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {/* Aqui deberias poner tu lista de peliculas! */}
          {this.props.favs.map((movie) => (
            <li key={movie.imdbID}>
              <span>{movie.Title}</span>
              <button
                onClick={() => this.props.removeMovieFavorite(movie.imdbID)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default connect((state) => ({ favs: state.moviesFavourites }), {
  removeMovieFavorite,
})(ConnectedList);



// import React, { Component } from "react";
// import { connect } from "react-redux";
// import { Link } from 'react-router-dom';
// //importo la action removeMovieFavorite
// import { removeMovieFavorite } from "../../actions"
// import './Favorites.css';

// export class ConnectedList extends Component {

//   render() {
//     return (
//       <div>
//         <h2>Películas Favoritas</h2>
//         <ul>
//           {/* Aqui deberias poner tu lista de peliculas! */}
//           {this.props.movies?.map((movie) => {
//             return (
//               <div key={movie.id}>
//                 <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
//                 <button onClick={() => this.props.removeMovieFavorite(movie.id)}>X</button>
//               </div>
//             )
//           })}
//         </ul>
//       </div>
//     );
//   }
// }
// function mapStateToProps(state) {
//   return {
//     movies: state.moviesFavourites
//   }
// }
// function mapDispatchToProps(dispatch) {
//   return {
//     removeMovieFavorite: (id) => dispatch(removeMovieFavorite(id))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
