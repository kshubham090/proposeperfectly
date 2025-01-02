import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, Calendar, MessageCircle, Sparkles } from "lucide-react";
import { DateIdeasSection } from "@/components/romantic/DateIdeasSection";
import { IntimateConversations } from "@/components/romantic/IntimateConversations";

export function RomanticEscapes() {
  const [activeSection, setActiveSection] = useState<"dates" | "talks">("dates");

  return (
    <div className="min-h-screen love-gradient">
      <div className="container py-8 space-y-8 animate-fade-in">
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-love-950 font-playfair">
            Romantic Escapes & Intimate Talks
          </h1>
          <p className="text-lg text-love-900 max-w-2xl mx-auto">
            Discover perfect date ideas and meaningful conversation starters to deepen your connection
          </p>
        </header>

        <div className="flex justify-center gap-4 my-8">
          <Button
            variant={activeSection === "dates" ? "default" : "outline"}
            onClick={() => setActiveSection("dates")}
            className="gap-2"
          >
            <Calendar className="w-4 h-4" />
            Date Ideas
          </Button>
          <Button
            variant={activeSection === "talks" ? "default" : "outline"}
            onClick={() => setActiveSection("talks")}
            className="gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Intimate Talks
          </Button>
        </div>

        {activeSection === "dates" ? <DateIdeasSection /> : <IntimateConversations />}
      </div>
    </div>
  );
}