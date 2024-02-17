import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from './ui/carousel';
import SingleSlide from './SingleSlide';

function GeneralSlider({ movies, title }: any) {

  return (
    <div className="">
        <h2 className="text-3xl font-bold">{title || "Some Title"}</h2>
          <Carousel>
            <CarouselContent className="-ml-2 md:-ml-4">
              {movies?.map((movie: any) => (
                <CarouselItem key={movie.id} className="pl-2 md:pl-4  basis-2/4 md:basis-1/4 flex items-center">
                  <SingleSlide movie={movie} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
    </div>
  );
}

export default GeneralSlider