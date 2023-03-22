import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FiThumbsUp } from "react-icons/fi";
export default function Card({ results }) {
  return (
    <div className="cursor-pointer sm: p-3 sm:hover:shadow-slate-400 sm:shadow-md rounded-lg sm:border sm:border-slate-400 sm:m-2 transition-shadow duration-200 group">
      <Link href={`/movie/${results.id}`}>
        <Image
          src={`https://image.tmdb.org/t/p/original/${
            results.backdrop_path || results.poster_path
          }`}
          width={500}
          height={300}
          className="sm:rounded-t-lg group-hover:opacity-80 transition-opacity duration-200"
          placeholder="blur"
          blurDataURL="/spinner.svg"
          alt="image is not available"
          style={{ maxWidth: "100%", height: "auto" }}
        ></Image>
        <div className="p-2">
          <p className="line-clamp-2 text-md">{results.overview}</p>
          <h2 className="truncate text-lg font-bold">
            {results.original_titles || results.title}
          </h2>
          <p className="flex items-center">
            {results.release_date}
            <FiThumbsUp className="h-5 mr-1 ml-3" /> {results.vote_count}
          </p>
        </div>
      </Link>
    </div>
  );
}
