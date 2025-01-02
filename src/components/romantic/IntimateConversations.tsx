import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageCircle, Heart, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

type ConversationType = "icebreakers" | "deep" | "spicy";

const conversationPrompts = {
  icebreakers: [
    "What's your idea of a perfect romantic evening?",
    "What was your first impression of me?",
    "What's the most adventurous thing you'd like us to try together?",
  ],
  deep: [
    "What makes you feel most loved in our relationship?",
    "How do you envision our future together?",
    "What's one thing you'd like us to work on together?",
  ],
  spicy: [
    "What's a romantic fantasy you'd like to explore together?",
    "What makes you feel most attractive?",
    "What's the most memorable romantic moment we've shared?",
  ],
};

export function IntimateConversations() {
  const [selectedType, setSelectedType] = useState<ConversationType>("icebreakers");
  const [favorites, setFavorites] = useState<string[]>([]);
  const [currentPrompt, setCurrentPrompt] = useState<string | null>(null);

  const toggleFavorite = (prompt: string) => {
    setFavorites(prev => 
      prev.includes(prompt) 
        ? prev.filter(p => p !== prompt)
        : [...prev, prompt]
    );
  };

  const getRandomPrompt = () => {
    const prompts = conversationPrompts[selectedType];
    let newPrompt;
    do {
      newPrompt = prompts[Math.floor(Math.random() * prompts.length)];
    } while (newPrompt === currentPrompt);
    setCurrentPrompt(newPrompt);
  };

  return (
    <div className="space-y-8 animate-fade-in">
      <div className="flex flex-wrap justify-center gap-4">
        <Button
          variant={selectedType === "icebreakers" ? "default" : "outline"}
          onClick={() => setSelectedType("icebreakers")}
          className="gap-2"
        >
          <MessageCircle className="w-4 h-4" />
          Icebreakers
        </Button>
        <Button
          variant={selectedType === "deep" ? "default" : "outline"}
          onClick={() => setSelectedType("deep")}
          className="gap-2"
        >
          <Heart className="w-4 h-4" />
          Deep Connection
        </Button>
        <Button
          variant={selectedType === "spicy" ? "default" : "outline"}
          onClick={() => setSelectedType("spicy")}
          className="gap-2"
        >
          <Sparkles className="w-4 h-4" />
          Spicy Topics
        </Button>
      </div>

      <Card className="bg-white/80 backdrop-blur-sm max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle className="text-center">
            {currentPrompt || "Click the button below to get a conversation starter"}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex justify-center gap-4">
          <Button onClick={getRandomPrompt} className="gap-2">
            <MessageCircle className="w-4 h-4" />
            New Question
          </Button>
          {currentPrompt && (
            <Button
              variant="outline"
              onClick={() => toggleFavorite(currentPrompt)}
              className={cn(
                "gap-2",
                favorites.includes(currentPrompt) && "text-love-500"
              )}
            >
              <Heart className="w-4 h-4" />
              {favorites.includes(currentPrompt) ? "Favorited" : "Favorite"}
            </Button>
          )}
        </CardContent>
      </Card>

      {favorites.length > 0 && (
        <div className="mt-8">
          <h3 className="text-2xl font-semibold text-center mb-4">Your Favorite Prompts</h3>
          <div className="grid gap-4">
            {favorites.map((prompt) => (
              <Card key={prompt} className="bg-white/80 backdrop-blur-sm">
                <CardContent className="flex justify-between items-center p-4">
                  <p>{prompt}</p>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => toggleFavorite(prompt)}
                    className="text-love-500"
                  >
                    <Heart className="w-5 h-5" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}