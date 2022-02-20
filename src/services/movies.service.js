import {urls} from '../configs';
import {axiosService} from './axios.service';



export const moviesService = {

    getAll: ({page}) => axiosService.get(`${urls.movies}?api_key=${process.env.REACT_APP_API_KEY}&page=${page}`).then(value => value.data.results),
    getById: ({id}) => axiosService.get(`${urls.movie}/${id}?api_key=${process.env.REACT_APP_API_KEY}`).then(value => value.data),

}

// https://api.themoviedb.org/3/discover/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce
//https://api.themoviedb.org/3/movie?api_key=e9a488e6ea1f2a8b453bb5067ca250ce
// https://api.themoviedb.org/3/genre/movie/list?api_key=e9a488e6ea1f2a8b453bb5067ca250ce
//https://api.themoviedb.org/3/discover/movie?api_key=9d0492a7c445cae0ed65774bb928dc58&with_genres=%7Bid
//https://api.themoviedb.org/3/discover/movie?api_key=9d0492a7c445cae0ed65774bb928dc58&with_genres=12


export const urlMovieImg = 'https://image.tmdb.org/t/p/w300/';