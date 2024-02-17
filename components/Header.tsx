import React from "react";
import { ThemeToggler } from "./ThemeToggler";
import Link from "next/link";
import Search from "./Search";
import GenreDropDown from "./GenreDropDown";

function Header() {
  const pathname =
    typeof window !== "undefined" ? window.location.pathname : "/";
  console.log(pathname);

  const isActive = pathname === "/";

  return (
    <div className="flex max-w-[80%] w-full  py-5 justify-between mx-auto items-center border-b-[1px] ">
      <div className="w-full justify-between mx-auto flex flex-col md:flex-row items-center">
        <div>
          <Link href="/">
            <h1 className="text-center md:text-left text-2xl font-bold text-primary cursor-pointer">
              MovieTheater
            </h1>
          </Link>
        </div>
        <div className="flex-1  ">
          <div className="flex flex-row mt-5 md:mt-0 justify-center gap-x-6 md:gap-x-14 items-center text-sm">
            <Link
              href="/"
              className={
                isActive
                  ? "border-b-2 border-primary"
                  : "border-b-2 border-transparent py-1 transition-colors ease-linear hover:border-primary"
              }
            >
              Home
            </Link>
            <Link
              href="/"
              className="border-b-2 border-transparent py-1 transition-colors ease-linear hover:border-primary"
            >
              TV Shows
            </Link>
            <Link
              href="/"
              className="border-b-2 border-transparent py-1 transition-colors ease-linear hover:border-primary"
            >
              Movies
            </Link>
            <Link
              href="/"
              className="border-b-2 border-transparent py-1 transition-colors ease-linear hover:border-primary "
            >
              Most Recents
            </Link>
            <span className="flex items-center">
              <GenreDropDown />
            </span>
          </div>
        </div>
        <div className="flex flex-row py-5 md:py-0">
          <div>
            <Search />
          </div>
          <div>
            <ThemeToggler />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
