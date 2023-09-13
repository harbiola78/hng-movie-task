import { useContext } from "react";
import MoviesContext from "./context";

const useMovies = () => {
    return useContext(MoviesContext)
}

export default useMovies