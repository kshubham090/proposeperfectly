import React from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

interface SpinButtonProps {
  onClick: () => void;
  isSpinning: boolean;
}

export const SpinButton = ({ onClick, isSpinning }: SpinButtonProps) => {
  return (
    <Button
      onClick={onClick}
      disabled={isSpinning}
      className={cn(
        "absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2",
        "transform rounded-full w-16 h-16",
        "bg-love-500 hover:bg-love-600 disabled:opacity-50",
        "shadow-lg z-10 transition-all duration-300",
        "border-4 border-white/50",
        "animate-pulse hover:animate-none",
        isSpinning && "scale-90"
      )}
    >
      <Sparkles className={cn("w-6 h-6", isSpinning && "animate-spin")} />
    </Button>
  );
};