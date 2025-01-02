import { Card, CardContent } from "@/components/ui/card";
import { Heart } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProposalPreviewProps {
  recipientName: string;
  message: string;
  showReactions?: boolean;
}

export const ProposalPreview = ({ recipientName, message, showReactions = false }: ProposalPreviewProps) => {
  const reactions = ["❤️", "😊", "😍"];

  return (
    <Card className="w-full max-w-md mx-auto bg-gradient-to-br from-pink-100 to-rose-100 shadow-xl animate-float">
      <CardContent className="p-6 text-center space-y-4">
        <Heart className="w-12 h-12 mx-auto text-rose-500 animate-pulse" />
        <h2 className="text-2xl font-serif text-rose-900">
          Dear {recipientName || "..."}
        </h2>
        <p className="text-lg text-gray-800 whitespace-pre-wrap">
          {message || "Your heartfelt message will appear here..."}
        </p>
        
        {showReactions && (
          <div className="pt-4 space-y-4">
            <p className="text-sm text-gray-600">React to this proposal:</p>
            <div className="flex justify-center gap-2">
              {reactions.map((emoji, index) => (
                <Button
                  key={index}
                  variant="outline"
                  className="text-xl hover:scale-110 transition-transform"
                  onClick={() => {
                    // Here we would handle the reaction
                    console.log(`Reacted with ${emoji}`);
                  }}
                >
                  {emoji}
                </Button>
              ))}
            </div>
            <Button
              variant="outline"
              className="w-full mt-4 bg-white/50 hover:bg-white/80"
              onClick={() => {
                // Here we would handle navigation to create a new proposal
                console.log("Create your own proposal clicked");
              }}
            >
              Make Your Own Proposal
            </Button>
          </div>
        )}
      </CardContent>
    </Card>
  );
};