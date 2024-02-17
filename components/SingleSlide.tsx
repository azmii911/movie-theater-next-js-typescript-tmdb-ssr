import Image from "next/image";
import React from "react";
import imageSrc from "@/app/check.jpg";
import { getImagePath } from "@/lib/utils";
import Link from "next/link";

function SingleSlide({ movie }: any) {
  return (
    <Link href={`/movie/${movie.id}?name=${movie.original_title}`}>
      <div className=" relative cursor-pointer">
        <div className="">
          <div className="absolute inset-0">
            <div className="h-full bg-gradient-to-t from-gray-800 to-transparent hover:from-gray-900 transition-colors ease-linear"></div>
          </div>
          <Image
            src={getImagePath(movie.backdrop_path || movie.poster_path)}
            height={1920}
            width={1920}
            alt={movie.original_title}
          />
        </div>
        <div className="absolute bottom-0 px-5 pb-5">
          <h3 className="text-white text-base md:text-xl text-balance">
            {movie.original_title}
          </h3>
        </div>
      </div>
    </Link>
  );
}

export default SingleSlide;
