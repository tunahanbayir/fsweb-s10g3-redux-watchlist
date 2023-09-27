import { movies } from "../movies";
import { NEXT_MOVIE, PREV_MOVIE, ADD_FAVORITE, REMOVE_FAVORITE, FIRST_MOVIE } from "../action/action";

const initialState = {
    movies: movies,
    sira: 0,
    favMovies: [],
};
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case NEXT_MOVIE:
            return { ...state, sira: state.sira + 1 };
            case FIRST_MOVIE:
                return { ...state,}
        case PREV_MOVIE:
            return { ...state, sira: state.sira - 1  };
        case ADD_FAVORITE:
            return { ...state, favMovies: [ ...state.favMovies, action.payload ], movies: state.movies.filter((movie) => movie.id !== action.payload.id), };
        case REMOVE_FAVORITE:
            return { ...state, favMovies: state.favMovies.filter(
                (movie => movie.id !== action.payload)
            ),
        movies: [...state.movies, state.favMovies.find((movie) => movie.id === action.payload),]
        };
        default:
            return state;
    }
}

export default reducer;