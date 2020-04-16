import React from "react";
import FontAwesome from 'react-fontawesome'

function MovieList(props) {

    const movieClicked = movie => evt =>{
        props.movieClicked(movie);

    };

    const editClicked = movie => {
        props.editClicked(movie);
    }

    const removeClicked = movie => {
        fetch(`${process.env.REACT_APP_API_URL}/api/movies/${movie.id}/`, {
            method:"DELETE",
            headers: {
                'Content-Type' : 'application/json',
                'Authorization':`Token ${this.props.token}`
            },
            }).then(resp=> props.movieDeleted(movie))
            .catch(error => console.log(error))

    };

    const mm={
        cursor: "pointer",
    }

    const newMovie = ()=>{
        props.newMovie();
    };

    return(
        <div>
            {props.movies.map(movie => {
                return (
                    <div key={movie.id}>
                        <h3 key={movie.id} className="movie-item" >
                            <span style={mm}  onClick={movieClicked(movie)}>{movie.title}</span>
                            <FontAwesome style={mm} className="movieicon" name="edit" onClick={()=>editClicked(movie)}/>
                            <FontAwesome style={mm} className="movieicon" name="trash" onClick={()=>removeClicked(movie)}/>
                        </h3>

                    </div>
                )
            })}
            <button onClick={newMovie}>Add new</button>
        </div>
    )
}

export default MovieList;