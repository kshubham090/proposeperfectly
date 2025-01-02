import { Heart } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
} from "@/components/ui/card";

interface QuoteCardProps {
  quote: string;
  isPinned: boolean;
  onPin: () => void;
  className?: string;
}

export function QuoteCard({ quote, isPinned, onPin, className }: QuoteCardProps) {
  return (
    <Card className={cn("w-full max-w-md animate-fade-in", className)}>
      <CardContent className="pt-6">
        <p className="text-lg text-center font-playfair italic">{quote}</p>
      </CardContent>
      <CardFooter className="justify-end">
        <Button
          variant="ghost"
          size="icon"
          onClick={onPin}
          className={cn(
            "transition-colors duration-200",
            isPinned && "text-love-500 hover:text-love-600"
          )}
        >
          <Heart className={cn("w-5 h-5", isPinned && "fill-current")} />
        </Button>
      </CardFooter>
    </Card>
  );
}