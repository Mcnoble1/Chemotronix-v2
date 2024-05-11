import Hero from "@/components/Hero";
import Offer from "@/components/Offer";
import Partners from "@/components/Partners";
import Whitepaper from "@/components/Whitepaper";
import WhyChem from "@/components/WhyChem";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Chemotronix | Home",
  description: "",
  // other metadata
};


export default function Home() {
  return (
    <main>
      <Hero />
      <WhyChem />
      <Offer />
      <Whitepaper />
      <Partners />
    </main>
  );
}
