import {urls} from '../configs';
import {axiosService} from './axios.service';


export const genresService = {

    getAll: () =>
        axiosService.get(`${urls.genres}?api_key=${process.env.REACT_APP_API_KEY}`).then(value => value.data.genres),
    getGenreById: ({genre_ids}) =>
        axiosService.get(`${urls.movies}?api_key=${process.env.REACT_APP_API_KEY}&with_genres=%${genre_ids}`).then(value => value.data.results)
}

