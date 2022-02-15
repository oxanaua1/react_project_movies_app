import './App.css';
import {Route, Routes} from "react-router-dom";
import {MoviesPage} from "./containers";
import {GenreBadge, Header, MovieInfo, MoviesList} from "./components";

function App() {


    return (
        <div>
            <Routes>

                <Route path={'/'} element={<MoviesPage/>}>
                    <Route index element={<Header/>}/>
                    <Route path={'movies'} element={<MoviesList/>}/>
                    <Route path={'movies/:id'} element={<MovieInfo/>}/>

                    <Route path={'genres'} element={<GenreBadge/>}>
                        <Route path={':genre_ids/movies'} element={<GenreBadge/>}/>
                    </Route>

                </Route>


            </Routes>




        </div>
    );
}

export default App;
