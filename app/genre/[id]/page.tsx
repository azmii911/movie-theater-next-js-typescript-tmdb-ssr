import { notFound } from "next/navigation";
import getMoviews from "@/lib/getMovies";
import VerticalMovieCard from "@/components/VerticalMovieCard";

async function Genre({ params: { id }, searchParams: { genre } }: any) {
  if (!id) notFound();
  const genreId:string = decodeURI(id);

  const url: string = `https://api.themoviedb.org/3/discover/movie?with_genres=${genreId}`;
  const moviesBasedOnGenre: any = await getMoviews(url);
  

  return (
    <div>
      <div className="my-10">
        <div className="flex justify-between gap-x-2 items-center">
          <div>
            <div>
              <span className="text-sm">
                {moviesBasedOnGenre.length} Result for
              </span>
              <h1 className="text-3xl md:text-4xl font-extrabold text-balance dark:text-white">
                {genre}
              </h1>
            </div>
          </div>
        </div>
      </div>
      <div id="" className="flex flex-col">
        {moviesBasedOnGenre?.map((movie: any) => (
          <VerticalMovieCard key={movie.id} keyword={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
}

export default Genre;
