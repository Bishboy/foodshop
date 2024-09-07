import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { sliderList } from '../_utils/data';
import Image from 'next/image';


function Slider() {
  return (
    <div className='mt-[8rem]'>
    <Carousel>
      <CarouselContent >
          {sliderList.map((item, index)=>(
            <CarouselItem key={item.id} >
              <Image src={item.photo} alt='slider' width={10000} height={400} className='w-full  object-cover h-[200px] md:h-[450px] z-0 rounded-2xl' />
            </CarouselItem>
          ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
    </div>
  );
}

export default Slider