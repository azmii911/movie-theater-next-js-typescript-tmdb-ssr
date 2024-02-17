import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown, IndentIcon } from "lucide-react";
import Link from "next/link";

async function GenreDropDown() {
  const url: string =
    "https://api.themoviedb.org/3/genre/movie/list?language=en";
  const options: RequestInit = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: `Bearer ${process.env.TMDB_ACCESS_KEY}`,
    },
    next: { revalidate: 60 * 60 * 24 },
  };

  const response = await fetch(url, options);
  const { genres } = await response.json();

  return (
    <div className="py-1">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <span className="flex flex-row items-center cursor-pointer">
            Genre
            <ChevronDown size={16} className="ml-1" />
          </span>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {genres.map((genre: any) => (
            <DropdownMenuItem key={genre.id}>
              <Link href={`/genre/${genre.id}?genre=${genre.name}`}>
                {genre.name}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default GenreDropDown;
