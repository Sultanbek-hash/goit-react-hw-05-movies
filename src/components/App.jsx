import { lazy } from "react";
import {Routes, Route} from "react-router-dom";
import { SharedLayout } from "./SheredLayout/SheredLayout";

const Cast = lazy(() => import('components/Cast/Cast'));
const Reviews = lazy(() => import('components/Reviews/Reviews'));
const Home = lazy(() => import('components/path/to/pages/Home'));
const MovieDetails = lazy(() => import('components/path/to/pages/MovieDetails'));
const Movies = lazy(() => import('components/path/to/pages/Movies'));

export const App = () => {
  return (
    <>
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<Home />} />
        <Route path="/movies" element={<Movies />} />

        <Route path="movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="reviews" element={<Reviews />} />
        </Route>
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
    </>
  )
};
