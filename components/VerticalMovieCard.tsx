import { getImagePath } from "@/lib/utils";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { PlayCircle, PlayIcon } from "lucide-react";
import Link from "next/link";

function VerticalMovieCard({ movie }: any) {
  return (
    <>
      <div
        key={movie.id}
        className="border-[1px] flex flex-col md:flex-row gap-x-5 items-center my-5 py-10"
      >
        <div className="md:w-[30%]">
          <Image
            src={getImagePath(movie.backdrop_path || movie.poster_path)}
            height={1920}
            width={1920}
            alt={movie.original_title}
            className="h-[400px] w-full  bg-cover object-cover"
          />
        </div>
        <div className="flex-1 relative m-5 md:m-0 ">
          <h1 className="text-2xl md:text-3xl font-extrabold text-balance dark:text-white">
            {movie.original_title}
          </h1>
          <div className="flex divide-x-2 dark:divide-white gap-x-2 mt-5 dark:text-white">
            <div>{movie.release_date}</div>
            <div className="pl-2">{movie.popularity} - Popular</div>
            <div className="pl-2">{movie.vote_count} - Vote</div>
          </div>
          <p className="text-sm md:text-md mt-5 dark:text-white">
            {movie.overview}
          </p>
          <div className="flex gap-x-5 mt-5">
            <Link href={`/movie/${movie.id}?name=${movie.original_title}`}>
              <Button className="py-6">
                <PlayIcon size={22} className="mr-2" />
                Start Watching
              </Button>
            </Link>

            <Button variant={"outline"} className="py-6">
              <PlayCircle size={22} className="mr-2" />
              Watch Trailer
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default VerticalMovieCard;
