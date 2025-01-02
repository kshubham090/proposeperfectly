import React, { useState } from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Pin } from "lucide-react";
import { movieDetails, moodCategories } from './wheel/wheelOptions';
import { MovieSuggestion } from './wheel/MovieSuggestion';
import { useToast } from "@/hooks/use-toast";

export function MoodBasedMovies() {
  const [selectedMood, setSelectedMood] = useState<string | null>(null);
  const [selectedMovie, setSelectedMovie] = useState<string | null>(null);
  const [pinnedMovies, setPinnedMovies] = useState<Array<{ mood: string, title: string }>>([]);
  const { toast } = useToast();

  const getMoviesByMood = (mood: string) => {
    return Object.entries(movieDetails)
      .filter(([_, movie]) => movie.mood === mood)
      .map(([title]) => title);
  };

  const getRandomMovie = (movies: string[], currentMovie: string | null) => {
    const availableMovies = movies.filter(movie => movie !== currentMovie);
    if (availableMovies.length === 0) return movies[0];
    const randomIndex = Math.floor(Math.random() * availableMovies.length);
    return availableMovies[randomIndex];
  };

  const handleMoodSelect = (mood: string) => {
    setSelectedMood(mood);
    const moviesForMood = getMoviesByMood(mood);
    if (moviesForMood.length > 0) {
      const newMovie = getRandomMovie(moviesForMood, selectedMovie);
      setSelectedMovie(newMovie);
    }
  };

  const handlePinMovie = () => {
    if (selectedMovie && selectedMood) {
      const newPin = { mood: selectedMood, title: selectedMovie };
      if (!pinnedMovies.some(movie => movie.title === selectedMovie)) {
        setPinnedMovies([...pinnedMovies, newPin]);
        toast({
          title: "Movie Pinned!",
          description: `${selectedMovie} has been added to your pinned movies.`,
        });
      }
    }
  };

  const handleUnpinMovie = (title: string) => {
    setPinnedMovies(pinnedMovies.filter(movie => movie.title !== title));
    toast({
      title: "Movie Unpinned",
      description: `${title} has been removed from your pinned movies.`,
    });
  };

  return (
    <div className="space-y-8 p-4 animate-fade-in">
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold text-love-900">
          Movie Night Mood Selector 🎬
        </h2>
        <p className="text-love-700">
          Choose your mood and get personalized movie suggestions!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {moodCategories.map((category) => (
          <Card
            key={category.mood}
            className={`p-6 cursor-pointer transition-all duration-300 hover:scale-105 ${
              selectedMood === category.mood ? 'ring-2 ring-love-500' : ''
            }`}
            onClick={() => handleMoodSelect(category.mood)}
          >
            <div className="text-center space-y-2">
              <div className={`inline-block p-3 rounded-full ${category.color}`}>
                <span className="text-2xl">{category.emoji}</span>
              </div>
              <h3 className="font-semibold text-love-900">{category.mood}</h3>
              <p className="text-sm text-love-600">{category.description}</p>
            </div>
          </Card>
        ))}
      </div>

      {selectedMovie && (
        <div className="space-y-4">
          <MovieSuggestion
            suggestion={`${selectedMood}: '${selectedMovie}' - Challenge: Watch this movie together and share your favorite scenes!`}
          />
          <div className="flex justify-center">
            <Button
              onClick={handlePinMovie}
              className="gap-2"
              variant="outline"
            >
              <Pin className="w-4 h-4" />
              Pin This Movie
            </Button>
          </div>
        </div>
      )}

      {pinnedMovies.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-2xl font-bold text-love-900 text-center">
            Your Pinned Movies 📌
          </h3>
          <div className="grid gap-4 md:grid-cols-2">
            {pinnedMovies.map(({ mood, title }) => (
              <Card key={title} className="p-4">
                <MovieSuggestion
                  suggestion={`${mood}: '${title}' - Challenge: Watch this movie together and share your favorite scenes!`}
                />
                <div className="mt-4 flex justify-end">
                  <Button
                    onClick={() => handleUnpinMovie(title)}
                    variant="outline"
                    size="sm"
                  >
                    Unpin
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}