import { useState } from "react";
import { QuoteCard } from "./QuoteCard";
import { Button } from "./ui/button";
import { Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface PinnedBoardProps {
  pinnedQuotes: string[];
  onUnpin: (quote: string) => void;
}

export function PinnedBoard({ pinnedQuotes, onUnpin }: PinnedBoardProps) {
  const { toast } = useToast();
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(pinnedQuotes.join("\n\n"));
      toast({
        title: "Copied to clipboard!",
        description: "Your favorite quotes have been copied to your clipboard.",
      });
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again or copy manually.",
        variant: "destructive",
      });
    }
  };

  if (pinnedQuotes.length === 0) {
    return (
      <div className="text-center text-muted-foreground italic">
        No pinned quotes yet. Click the heart icon to save your favorites!
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-playfair">Your Favorites</h2>
        <Button
          variant="outline"
          size="sm"
          onClick={handleShare}
          className="gap-2"
        >
          <Share2 className="w-4 h-4" />
          Share
        </Button>
      </div>
      <div className="grid gap-4 sm:grid-cols-2">
        {pinnedQuotes.map((quote, index) => (
          <QuoteCard
            key={index}
            quote={quote}
            isPinned={true}
            onPin={() => onUnpin(quote)}
          />
        ))}
      </div>
    </div>
  );
}