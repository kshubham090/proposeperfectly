import React from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Play, Link as LinkIcon } from "lucide-react";
import { movieDetails } from "./wheelOptions";

interface MovieSuggestionProps {
  suggestion: string;
}

export const MovieSuggestion = ({ suggestion }: MovieSuggestionProps) => {
  // Extract movie title from suggestion (assumes format: "Genre: 'Title' - Description")
  const movieTitle = suggestion.match(/'([^']+)'/)?.[1] || "";
  const movie = movieDetails[movieTitle as keyof typeof movieDetails];
  const challenge = suggestion.split("Challenge:")[1]?.trim() || "";

  if (!movie) return null;

  return (
    <Card className="w-full max-w-2xl p-6 bg-white/90 backdrop-blur-sm animate-fade-in space-y-6">
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-full bg-love-100">
          <Film className="w-6 h-6 text-love-600" />
        </div>
        <div className="flex-1">
          <h3 className="text-2xl font-semibold text-love-900">{movie.title}</h3>
          <p className="text-love-600">{movie.year} • {movie.duration}</p>
          <div className="flex flex-wrap gap-2 mt-2">
            {movie.genre.map((g) => (
              <span key={g} className="px-2 py-1 text-sm rounded-full bg-love-100 text-love-700">
                {g}
              </span>
            ))}
          </div>
        </div>
      </div>

      <p className="text-love-700 leading-relaxed">{movie.description}</p>

      <div className="space-y-4">
        <h4 className="font-semibold text-love-900">Couple's Challenge:</h4>
        <p className="text-love-600 italic">{challenge}</p>
      </div>

      <div className="flex flex-wrap gap-4">
        <Button
          variant="outline"
          className="gap-2"
          onClick={() => window.open(movie.trailerUrl, '_blank')}
        >
          <Play className="w-4 h-4" />
          Watch Trailer
        </Button>
        <div className="flex-1">
          <p className="text-sm text-love-600 mb-2">Available on:</p>
          <div className="flex gap-2">
            {movie.streamingOn.map((platform) => (
              <span
                key={platform}
                className="px-3 py-1 text-sm rounded-full bg-love-50 text-love-700 flex items-center gap-1"
              >
                <LinkIcon className="w-3 h-3" />
                {platform}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};