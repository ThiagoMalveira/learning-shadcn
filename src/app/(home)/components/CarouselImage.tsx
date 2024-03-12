"use client";

import { Card, CardContent } from "@/components/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import * as React from "react";
import { Result } from "./types";

interface CarouselImageProps {
  result: Result[];
}

export default function CarouselImage({ result }: CarouselImageProps) {
  const plugin = React.useRef(
    Autoplay({ delay: 15000, stopOnInteraction: true })
  );

  return (
    <>
      <div className="h-full flex-1 flex-col space-y-8 p-8 md:flex">
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-w-[968px] max-h-[540px]"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {result.map((image: Result, index: number) => (
              <CarouselItem key={index}>
                <div>
                  <Card>
                    <CardContent className="flex aspect-auto items-center justify-center">
                      <Image
                        className="rounded-xl max-h-[540px]"
                        src={image.thumbnail}
                        width={968}
                        height={540}
                        alt={`thumbnail + ${index}`}
                      />
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </>
  );
}
