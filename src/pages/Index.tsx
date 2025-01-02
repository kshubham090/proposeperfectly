import { useState } from "react";
import { QuoteCard } from "@/components/QuoteCard";
import { PinnedBoard } from "@/components/PinnedBoard";
import { Button } from "@/components/ui/button";
import { Heart, Sparkles, Share2, MessageCircleHeart, Calendar, MessagesSquare } from "lucide-react";
import { ProposalCreator } from "@/components/ProposalCreator";
import { ProposalPreview } from "@/components/ProposalPreview";
import { SpinWheel } from "@/components/romantic/SpinWheel";
import { MoodBasedMovies } from "@/components/romantic/MoodBasedMovies";

const loveQuotes = [
  "Every love story is beautiful, but ours is my favorite.",
  "In all the world, there is no heart for me like yours.",
  "I have found the one whom my soul loves.",
  "To love and to be loved is to feel the sun from both sides.",
  "You don't marry someone you can live with – you marry someone you cannot live without.",
  "I love you not only for what you are, but for what I am when I am with you.",
  "Forever is a long time, but I wouldn't mind spending it by your side.",
  "You are my today and all of my tomorrows.",
  "Life is not the amount of breaths you take, it's the moments that take your breath away.",
  "I want all of my lasts to be with you.",
];

const features = [
  {
    icon: Heart,
    title: "Perfect Proposal Creator",
    description: "Create beautiful, personalized proposals with our easy-to-use tools."
  },
  {
    icon: Share2,
    title: "Shareable Links",
    description: "Share your proposal with a unique, customized link that your special someone can view."
  },
  {
    icon: MessageCircleHeart,
    title: "Love Quotes",
    description: "Get inspired with our collection of romantic quotes and save your favorites."
  },
  {
    icon: Calendar,
    title: "Romantic Escapes",
    description: "Discover perfect date ideas and romantic getaways for every occasion."
  },
  {
    icon: MessagesSquare,
    title: "Intimate Talks",
    description: "Meaningful conversation starters to deepen your connection."
  }
];

const Index = () => {
  const [currentQuote, setCurrentQuote] = useState(loveQuotes[0]);
  const [pinnedQuotes, setPinnedQuotes] = useState<string[]>([]);

  const generateNewQuote = () => {
    let newQuote;
    do {
      newQuote = loveQuotes[Math.floor(Math.random() * loveQuotes.length)];
    } while (newQuote === currentQuote);
    setCurrentQuote(newQuote);
  };

  const togglePin = (quote: string) => {
    if (pinnedQuotes.includes(quote)) {
      setPinnedQuotes(pinnedQuotes.filter((q) => q !== quote));
    } else {
      setPinnedQuotes([...pinnedQuotes, quote]);
    }
  };

  return (
    <div className="min-h-screen love-gradient">
      <div className="container py-8 space-y-12">
        <header className="text-center space-y-4">
          <h1 className="text-4xl sm:text-5xl font-bold text-love-950">
            Propose Perfectly
          </h1>
          <p className="text-lg text-love-900 max-w-2xl mx-auto">
            Find the perfect words to express your love and make your proposal unforgettable.
          </p>
        </header>

        {/* Features Section */}
        <section className="py-12">
          <h2 className="text-2xl font-bold text-love-900 text-center mb-8">
            Everything You Need for the Perfect Proposal
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-lg p-6 shadow-lg hover:shadow-xl transition-all duration-300 animate-fade-in"
              >
                <div className="flex flex-col items-center text-center space-y-4">
                  <div className="p-3 bg-love-100 rounded-full">
                    <feature.icon className="w-6 h-6 text-love-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-love-900">{feature.title}</h3>
                  <p className="text-love-700">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Spin the Wheel Section */}
        <section className="py-12 bg-white/50 backdrop-blur-sm rounded-lg">
          <SpinWheel />
        </section>

        {/* Movie Mood Selector Section */}
        <section className="py-12 bg-white/50 backdrop-blur-sm rounded-lg">
          <MoodBasedMovies />
        </section>

        <div className="flex flex-col items-center space-y-6">
          <QuoteCard
            quote={currentQuote}
            isPinned={pinnedQuotes.includes(currentQuote)}
            onPin={() => togglePin(currentQuote)}
            className="bg-white/80 backdrop-blur-sm"
          />
          <Button
            size="lg"
            onClick={generateNewQuote}
            className="gap-2 animate-float"
          >
            <Sparkles className="w-5 h-5" />
            Generate New Quote
          </Button>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-12">
          <ProposalCreator suggestedQuotes={pinnedQuotes.length > 0 ? pinnedQuotes : loveQuotes} />
          <ProposalPreview
            recipientName="Your Love"
            message="Your perfect proposal will appear here as you type..."
          />
        </div>

        <section className="mt-16">
          <PinnedBoard
            pinnedQuotes={pinnedQuotes}
            onUnpin={togglePin}
          />
        </section>
      </div>
    </div>
  );
};

export default Index;
