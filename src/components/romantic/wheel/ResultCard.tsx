import React from "react";
import { Card } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";
import { MovieSuggestion } from "./MovieSuggestion";

interface ResultCardProps {
  icon: LucideIcon;
  color: string;
  label: string;
  emoji: string;
  description: string;
  suggestion: string;
}

export const ResultCard = ({
  icon: Icon,
  color,
  label,
  emoji,
  description,
  suggestion,
}: ResultCardProps) => {
  // If it's a movie suggestion, render the MovieSuggestion component
  if (label === "Movie Night") {
    return <MovieSuggestion suggestion={suggestion} />;
  }

  // Otherwise render the default card
  return (
    <Card className="w-full max-w-md p-6 bg-white/90 backdrop-blur-sm animate-fade-in">
      <div className="flex flex-col items-center space-y-4 text-center">
        <div className={cn("p-3 rounded-full", color)}>
          <Icon className="w-8 h-8 text-white" />
        </div>
        <h3 className="text-xl font-semibold text-love-900">
          {label} {emoji}
        </h3>
        <p className="text-love-700">{suggestion}</p>
        <p className="text-sm text-love-500 italic">{description}</p>
      </div>
    </Card>
  );
};
