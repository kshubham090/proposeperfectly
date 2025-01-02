import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Star, Home, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type DateCategory = "budget" | "luxury" | "seasonal" | "home";

const dateIdeas = {
  budget: [
    { title: "Stargazing Picnic", description: "Pack some snacks and find a cozy spot under the stars" },
    { title: "Cooking Adventure", description: "Try cooking a new cuisine together at home" },
    { title: "Nature Walk", description: "Explore local hiking trails and take photos together" },
  ],
  luxury: [
    { title: "Hot Air Balloon Ride", description: "Watch the sunrise from high above" },
    { title: "Private Wine Tasting", description: "Book a private wine tasting experience" },
    { title: "Spa Day Retreat", description: "Indulge in a couples spa day" },
  ],
  seasonal: [
    { title: "Winter Ice Skating", description: "Glide hand in hand on the ice" },
    { title: "Summer Beach Picnic", description: "Enjoy sunset views and ocean breeze" },
    { title: "Fall Foliage Drive", description: "Take a scenic drive to see autumn colors" },
  ],
  home: [
    { title: "DIY Spa Night", description: "Create a relaxing spa experience at home" },
    { title: "Movie Marathon", description: "Set up a cozy fort with fairy lights and snacks" },
    { title: "Indoor Picnic", description: "Transform your living room into a romantic picnic spot" },
  ],
};

export function DateIdeasSection() {
  const [selectedCategory, setSelectedCategory] = useState<DateCategory>("budget");
  const [favorites, setFavorites] = useState<string[]>([]);

  const toggleFavorite = (title: string) => {
    setFavorites(prev => 
      prev.includes(title) 
        ? prev.filter(t => t !== title)
        : [...prev, title]
    );
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          variant={selectedCategory === "budget" ? "default" : "outline"}
          onClick={() => setSelectedCategory("budget")}
          className="gap-2"
        >
          <Heart className="w-4 h-4" />
          Budget-Friendly
        </Button>
        <Button
          variant={selectedCategory === "luxury" ? "default" : "outline"}
          onClick={() => setSelectedCategory("luxury")}
          className="gap-2"
        >
          <Star className="w-4 h-4" />
          Luxurious
        </Button>
        <Button
          variant={selectedCategory === "seasonal" ? "default" : "outline"}
          onClick={() => setSelectedCategory("seasonal")}
          className="gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Seasonal
        </Button>
        <Button
          variant={selectedCategory === "home" ? "default" : "outline"}
          onClick={() => setSelectedCategory("home")}
          className="gap-2"
        >
          <Home className="w-4 h-4" />
          At-Home
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dateIdeas[selectedCategory].map((idea) => (
          <Card key={idea.title} className="bg-white/80 backdrop-blur-sm hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="flex justify-between items-center">
                <span>{idea.title}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => toggleFavorite(idea.title)}
                  className={cn(
                    "hover:text-love-500",
                    favorites.includes(idea.title) && "text-love-500"
                  )}
                >
                  <Heart className="w-5 h-5" />
                </Button>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">{idea.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}