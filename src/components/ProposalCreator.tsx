import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Share2, Heart, Lock, Unlock, Link2, Copy } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ProposalCreatorProps {
  suggestedQuotes: string[];
}

export const ProposalCreator = ({ suggestedQuotes }: ProposalCreatorProps) => {
  const [recipientName, setRecipientName] = useState("");
  const [message, setMessage] = useState("");
  const [isPublic, setIsPublic] = useState(true);
  const [customLink, setCustomLink] = useState("");
  const [shareableLink, setShareableLink] = useState("");
  const { toast } = useToast();

  const generateUniqueId = () => {
    return Math.random().toString(36).substring(2, 15);
  };

  const handleShare = () => {
    if (!recipientName || !message) {
      toast({
        title: "Missing Information",
        description: "Please fill in both the recipient's name and your message.",
        variant: "destructive",
      });
      return;
    }

    const uniqueId = customLink || generateUniqueId();
    // Use relative path for better portability
    const link = `/love/${uniqueId}`;
    setShareableLink(window.location.origin + link);

    // In a real app, this is where we would save the proposal data
    // For now, we'll use localStorage to simulate data persistence
    const proposalData = {
      recipientName,
      message,
      isPublic,
      createdAt: new Date().toISOString(),
    };
    localStorage.setItem(`proposal_${uniqueId}`, JSON.stringify(proposalData));

    toast({
      title: "Proposal Link Created! 💝",
      description: "Your proposal link is ready to be shared.",
    });
  };

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(shareableLink);
      toast({
        title: "Link Copied! 📋",
        description: "Share it with your special someone.",
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try copying the link manually.",
        variant: "destructive",
      });
    }
  };

  const handleSuggestedQuote = (quote: string) => {
    setMessage((prev) => (prev ? `${prev}\n\n${quote}` : quote));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto bg-white/80 backdrop-blur-sm shadow-xl">
      <CardHeader>
        <CardTitle className="text-xl md:text-2xl text-center text-love-950">
          Create Your Perfect Proposal
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4 md:space-y-6">
        <div className="space-y-2">
          <label htmlFor="recipient" className="text-sm font-medium">
            Recipient's Name
          </label>
          <Input
            id="recipient"
            placeholder="Enter their name"
            value={recipientName}
            onChange={(e) => setRecipientName(e.target.value)}
            className="bg-white/50"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium">
            Your Message
          </label>
          <Textarea
            id="message"
            placeholder="Write your heartfelt message..."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="min-h-[150px] bg-white/50"
          />
        </div>

        <div className="space-y-2">
          <p className="text-sm font-medium">Suggested Love Quotes</p>
          <div className="grid gap-2">
            {suggestedQuotes.slice(0, 3).map((quote, index) => (
              <Button
                key={index}
                variant="outline"
                className="text-left h-auto py-2 px-4 hover:bg-pink-50"
                onClick={() => handleSuggestedQuote(quote)}
              >
                <span className="line-clamp-2">{quote}</span>
              </Button>
            ))}
          </div>
        </div>

        {!shareableLink && (
          <div className="space-y-2">
            <label htmlFor="customLink" className="text-sm font-medium">
              Customize Your Link (Optional)
            </label>
            <Input
              id="customLink"
              placeholder="Enter a custom link name"
              value={customLink}
              onChange={(e) => setCustomLink(e.target.value.toLowerCase().replace(/\s+/g, '-'))}
              className="bg-white/50"
            />
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsPublic(!isPublic)}
            className="w-full sm:w-auto gap-2"
          >
            {isPublic ? (
              <>
                <Unlock className="w-4 h-4" /> Public
              </>
            ) : (
              <>
                <Lock className="w-4 h-4" /> Private
              </>
            )}
          </Button>
          <div className="w-full sm:w-auto flex flex-col sm:flex-row gap-2">
            {!shareableLink ? (
              <Button
                onClick={handleShare}
                className="w-full sm:w-auto gap-2 bg-gradient-to-r from-pink-500 to-rose-500 hover:from-pink-600 hover:to-rose-600"
              >
                <Share2 className="w-4 h-4" />
                Create Shareable Link
              </Button>
            ) : (
              <div className="w-full flex flex-col sm:flex-row gap-2">
                <Input
                  value={shareableLink}
                  readOnly
                  className="bg-white/50 min-w-0 flex-1"
                />
                <Button
                  onClick={copyToClipboard}
                  variant="outline"
                  className="gap-2 whitespace-nowrap"
                >
                  <Copy className="w-4 h-4" />
                  Copy
                </Button>
              </div>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};