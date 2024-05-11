import Image from "next/image";
import { Inter } from "next/font/google";
import { VideoCard } from "@/components/VideoCard";
import cyberpunk from "cyberpunk_car.png"

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className="">
      <VideoCard image={"cyberpunk_car.png"}author="jang kun lee" days="12" title="hakuna matata pellam thio veta" views="46M" thumbImage={"cyberpunk_car.png"} ></VideoCard>
    </div>
  );
}
