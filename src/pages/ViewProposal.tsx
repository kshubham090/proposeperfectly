import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { ProposalPreview } from "@/components/ProposalPreview";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

export function ViewProposal() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [proposal, setProposal] = useState<{ recipientName: string; message: string } | null>(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    const loadProposal = () => {
      setLoading(true);
      try {
        const proposalData = localStorage.getItem(`proposal_${id}`);
        if (proposalData) {
          setProposal(JSON.parse(proposalData));
        } else {
          toast({
            title: "Proposal Not Found",
            description: "This proposal link seems to be invalid or has expired.",
            variant: "destructive",
          });
          setProposal(null);
        }
      } catch (error) {
        console.error("Error loading proposal:", error);
        toast({
          title: "Error",
          description: "Something went wrong while loading the proposal.",
          variant: "destructive",
        });
        setProposal(null);
      } finally {
        setLoading(false);
      }
    };

    loadProposal();
  }, [id, toast]);

  if (loading) {
    return (
      <div className="min-h-screen love-gradient flex items-center justify-center">
        <div className="animate-pulse text-love-600">Loading your special message...</div>
      </div>
    );
  }

  if (!proposal) {
    return (
      <div className="min-h-screen love-gradient flex flex-col items-center justify-center p-4">
        <h1 className="text-2xl font-bold text-love-900 mb-4">Oops! This proposal couldn't be found.</h1>
        <p className="text-love-700 mb-8">The link might be invalid or has expired.</p>
        <Button
          onClick={() => navigate('/')}
          className="bg-love-500 hover:bg-love-600 text-white"
        >
          Create Your Own Proposal
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen love-gradient flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl mx-auto">
        <ProposalPreview
          recipientName={proposal.recipientName}
          message={proposal.message}
          showReactions={true}
        />
      </div>
    </div>
  );
}

export default ViewProposal;