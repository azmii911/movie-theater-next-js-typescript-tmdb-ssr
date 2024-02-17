import React from "react";
import { Button } from "./ui/button";
import { Ghost, PlayCircle, PlayIcon } from "lucide-react";
import { getImagePath } from "@/lib/utils";
import Link from "next/link";

type Props = {
  image: string;
  text: string;
  buttonText: string;
  link: string;
};

// { image, text, buttonText, link }: Props
function CarouselSlide({ movie }: any) {
  return (
    <div className="relative">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url(${getImagePath(
            movie.backdrop_path || movie.poster_path
          )})`,
        }}
      ></div>
      <div className="absolute inset-0 bg-black opacity-60"></div>
      <div className="flex flex-col md:flex-row justify-between items-center py-20 md:h-[700px] px-16 relative">
        <div className="md:w-[40%] relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold text-balance text-white md:leading-[55px]">
            {movie.original_title}
          </h1>
          <div className="flex divide-x-2 divide-white gap-x-2 mt-5 text-white">
            <div>{movie.release_date}</div>
            <div className="pl-2">{movie.popularity} - Popular</div>
            <div className="pl-2">{movie.vote_count} - Vote</div>
          </div>
          <p className="text-sm md:text-base mt-5 text-white">
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
        <div className="flex-1 relative z-10"></div>
      </div>
    </div>
  );
}

export default CarouselSlide;
