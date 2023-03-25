import { Inter } from "next/font/google";
import LargeHeading from "@/components/ui/LargeHeading";
import type { Metadata } from "next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Similarity API",
  authors: [{ name: "Weiller" }, { url: "https://weillercarvalho.com" }],
};

export default function Home() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-x-hidden">
      <div className="container pt-32 max-w-7xl mx-auto w-full h-full">
        <div className="h-full gap-6 flex flex-col justify-start lg:justify-center items-center lg:items-start">
          <LargeHeading></LargeHeading>
        </div>
      </div>
    </div>
  );
}
