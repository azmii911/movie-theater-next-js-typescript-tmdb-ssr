import { HeartIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

function Footer() {
  return (
    <footer className="w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto border-t">
      <div className="text-center">
        <div>
          <Link href="/">
            <h1 className="text-center text-2xl font-bold text-primary cursor-pointer">
              MovieTheater
            </h1>
          </Link>
        </div>

        <div className="mt-3 text-sm">
          <p className="text-gray-500"></p>

          <p className="text-gray-500">
            © 2024 Movie Theater. All rights reserved.
            <span className="flex justify-center items-center mt-1">
              Design & Develop with{" "}
              <HeartIcon size={18} className="text-primary mx-1" />
              <Link
                href="https://www.upwork.com/freelancers/raheelazmi"
                className="hover:text-primary transition-colors ease-linear"
                target="_blank"
              >
                Raheel Azmi
              </Link>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
