import React from "react";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface WheelSegmentProps {
  id: number;
  label: string;
  icon: LucideIcon;
  color: string;
  emoji: string;
  rotation: number;
  isSpinning: boolean;
}

export const WheelSegment = ({ 
  id, 
  label, 
  icon: Icon, 
  color, 
  rotation, 
  isSpinning 
}: WheelSegmentProps) => {
  return (
    <div
      className={cn(
        "absolute w-full h-full origin-center transition-all duration-300",
        color,
        isSpinning ? "opacity-90 shadow-lg" : "opacity-100",
        "before:content-[''] before:absolute before:inset-0 before:bg-gradient-to-r before:from-white/10 before:to-transparent before:opacity-50"
      )}
      style={{
        clipPath: `polygon(50% 50%, 50% 0%, ${50 + 50 * Math.cos((2 * Math.PI * (id + 1)) / 8)}% ${50 + 50 * Math.sin((2 * Math.PI * (id + 1)) / 8)}%)`,
        transform: `rotate(${rotation}deg)`,
      }}
    >
      <div
        className="absolute left-1/2 top-12 -translate-x-1/2 transform text-white font-semibold text-sm flex flex-col items-center gap-2 transition-transform duration-300 hover:scale-110"
        style={{ transform: `translateX(-50%) rotate(${90 + rotation}deg)` }}
      >
        <Icon className="w-6 h-6 drop-shadow-lg" />
        <span className="whitespace-nowrap text-shadow">{label}</span>
      </div>
    </div>
  );
};