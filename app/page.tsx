import GeneralSlider from "@/components/GeneralSlider";
import { HeroCarousel } from "@/components/HeroCarousel";
import getMoviews from "@/lib/getMovies";

export default async function Home() {
  const upComingMoviewsURL: string =
    "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1";

  const popularMoviewsURL: string =
    "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1";

  const topRatedMoviewsURL: string =
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1";

  const upComingMoviews = await getMoviews(upComingMoviewsURL);
  const popularMoviews = await getMoviews(popularMoviewsURL);
  const topRatedMoviews = await getMoviews(topRatedMoviewsURL);
  const checkk = await getMoviews(
    `https://api.themoviedb.org/3/movie/245891?language=en-US`
  );
 
  return (
    <main className="mt-5">
      <div className=" ">
        <HeroCarousel />
        <div className="mt-10 ">
          <GeneralSlider movies={popularMoviews} title="Most Popular Movies" />
        </div>
     
        <GeneralSlider movies={upComingMoviews} title="Up Coming Movies" />
        <GeneralSlider movies={topRatedMoviews} title="Top Rated Movies" />
      </div>
    </main>
  );
}
