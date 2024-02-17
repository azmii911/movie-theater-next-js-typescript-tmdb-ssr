import VerticalMovieCard from "@/components/VerticalMovieCard";
import getMovies from "@/lib/getMovies";
import { notFound } from "next/navigation";
type Props = {
  params: {
    term: string;
  };
};

async function Term({ params: { term } }: Props) {
  if (!term) notFound();

  const keyword = decodeURI(term);
  const url: string = `https://api.themoviedb.org/3/search/movie?query=${keyword}&include_adult=false&language=en-US&page=1`;
  const getSearchedMovies = await getMovies(url);
  console.log("getSearchedMovies >>>>", getSearchedMovies);
  
    return (
      <>
        <div className="my-10">
          <div>
            <div className="flex justify-between gap-x-2 items-center">
              <div>
                <div>
                  <span className="text-sm">
                    {getSearchedMovies.length} Searched Result for
                  </span>
                  <span className="ml-1 font-bold italic underline">
                    {keyword}
                  </span>
                </div>
              </div>
            </div>

            {getSearchedMovies.length > 0 ? (
              getSearchedMovies?.map((movie: any) => (
                <VerticalMovieCard key={movie.id} movie={movie} />
              ))
            ) : (
              <main className="h-full w-full">
                <div className="grid min-h-full place-items-center  px-6 py-24 sm:py-32 lg:px-8">
                  <div className="text-center">
                    <p className="text-base font-semibold underline">
                      {term}
                    </p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight  sm:text-5xl text-destructive">
                      No Movie found
                    </h1>
                    <p className="mt-6 text-base leading-7 light:text-gray-600">
                      Sorry, we couldn’t find the the movie you’re looking for.
                    </p>
                    
                  </div>
                </div>
              </main>
            )}
          </div>
        </div>
      </>
    );
}

export default Term;
