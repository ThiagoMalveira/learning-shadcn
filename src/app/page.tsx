import { HomeService } from "@/services/home";
import { Metadata } from "next";
import CarouselImage from "./(home)/components/CarouselImage";

export const metadata: Metadata = {
  title: "Home",
  description: "Trying to apply some things!",
};

export default async function Home() {
  const { results } = await HomeService.fetchCarousel();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <CarouselImage result={results} />
    </main>
  );
}
