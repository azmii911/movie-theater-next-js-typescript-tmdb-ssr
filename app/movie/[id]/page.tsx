import VideoFrame from "@/components/VideoFrame";
import { Badge } from "@/components/ui/badge";
import getMovieDetails from "@/lib/getMovieDetails";
import Link from "next/link";
import { notFound } from "next/navigation";

async function Movie({ params: { id }, searchParams: { name } }: any) {
  if (!id) notFound();
  const movieId: string = decodeURI(id);
  const url: string = `https://api.themoviedb.org/3/movie/${movieId}?language=en-US`;
  const getMovieDetailsResult: any = await getMovieDetails(url);


  const {results} = await getMovieDetails(
    `https://api.themoviedb.org/3/movie/${getMovieDetailsResult.id}/videos`
  );
  const getTheVideoKey = results[0].key;
  


  return (
    <div className="py-10">
      <div>
        <VideoFrame videoKey={getTheVideoKey} />
      </div>
      <div>
        {/* IMAGE BANNER */}
        {/* <div className="relative">
          <div className="absolute inset-0 bg-black opacity-20"></div>
          <Image
            src={getImagePath(
              getMovieDetailsResult.backdrop_path ||
                getMovieDetailsResult.poster_path
            )}
            height={1920}
            width={1920}
            alt={getMovieDetailsResult.original_title}
            className="h-[700px] object-cover"
          />
        </div> */}

        <div className="pt-10">
          <h1 className="text-3xl md:text-5xl font-extrabold text-balance dark:text-white">
            {getMovieDetailsResult.original_title}
          </h1>
        </div>
        <div className="flex divide-x-2 dark:divide-white gap-x-2 mt-5 dark:text-white">
          <div>{getMovieDetailsResult.release_date}</div>
          <div className="pl-2">
            {getMovieDetailsResult.popularity} - Popular
          </div>
          <div className="pl-2">{getMovieDetailsResult.vote_count} - Vote</div>
        </div>

        <div>
          <p className="text-sm md:text-md mt-5 dark:text-white">
            {getMovieDetailsResult.overview}
          </p>
        </div>
        <div className="flex gap-5 mt-3">
          {getMovieDetailsResult.genres.map(({ id, name }: any) => (
            <Link key={id} href={`/search/${id}?genre=${name}`} target="_blank">
              <Badge>{name}</Badge>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Movie;
