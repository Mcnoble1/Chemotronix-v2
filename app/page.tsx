import Hero from "@/components/Hero";
import { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Chemotronix | Home",
  description: "",
  // other metadata
};


export default function Home() {
  return (
   <Hero />
  );
}
