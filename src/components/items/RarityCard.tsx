import React from "react";
import Image from "next/image";

interface RarityCardProps {
  name: string;
  imageUrl: string;
  rarity: "Legendary" | "Rare" | "Common";
}

const rarityBg: Record<RarityCardProps["rarity"], string> = {
  Legendary: "bg-red-500/20",
  Rare: "bg-blue-500/20",
  Common: "bg-green-500/20",
};

const rarityRing: Record<RarityCardProps["rarity"], string> = {
  Legendary: "ring-red-400",
  Rare: "ring-blue-400",
  Common: "ring-green-400",
};

export const RarityCard: React.FC<RarityCardProps> = ({ name, imageUrl, rarity }) => {
  return (
    <div
      className={`flex flex-col items-center justify-between rounded-xl shadow-md overflow-hidden p-4 w-full max-w-xs mx-auto min-h-[320px] ${rarityBg[rarity]} animate-pulse-slow transition-colors duration-300`}
      style={{ animationDelay: "0.2s" }}
    >
      <div className={`relative w-full aspect-[4/3] mb-4 rounded-lg overflow-hidden ring-2 ${rarityRing[rarity]}`}>
        <Image
          src={imageUrl}
          alt={name}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 300px"
        />
      </div>
      <div className="w-full flex-1 flex items-end">
        <h3 className="w-full text-center font-bold text-lg text-gray-900 drop-shadow-sm bg-white/60 rounded-md py-2 px-2">
          {name}
        </h3>
      </div>
    </div>
  );
};

// Tailwind custom animation (add to globals.css or tailwind.config.js):
// @layer utilities {
//   @keyframes pulse-slow {
//     0%, 100% { opacity: 1; }
//     50% { opacity: 0.7; box-shadow: 0 0 0 4px theme('colors.red.200' / 0.2); }
//   }
//   .animate-pulse-slow {
//     animation: pulse-slow 2.5s cubic-bezier(0.4, 0, 0.6, 1) infinite;
//   }
// }
