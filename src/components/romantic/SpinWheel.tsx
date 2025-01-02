import React, { useState, useRef, useEffect } from "react";
import confetti from "canvas-confetti";
import { cn } from "@/lib/utils";
import { wheelOptions, suggestions } from "./wheel/wheelOptions";
import { WheelSegment } from "./wheel/WheelSegment";
import { SpinButton } from "./wheel/SpinButton";
import { ResultCard } from "./wheel/ResultCard";

export function SpinWheel() {
  const [isSpinning, setIsSpinning] = useState(false);
  const [rotation, setRotation] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [suggestion, setSuggestion] = useState<string | null>(null);
  const [usedSuggestions, setUsedSuggestions] = useState<Set<string>>(new Set());
  const wheelRef = useRef<HTMLDivElement>(null);

  const getUnusedSuggestion = (category: string) => {
    const categorySuggestions = suggestions[category as keyof typeof suggestions];
    const unusedSuggestions = categorySuggestions.filter(s => !usedSuggestions.has(s));
    
    if (unusedSuggestions.length === 0) {
      setUsedSuggestions(new Set());
      return categorySuggestions[Math.floor(Math.random() * categorySuggestions.length)];
    }
    
    return unusedSuggestions[Math.floor(Math.random() * unusedSuggestions.length)];
  };

  const spinWheel = () => {
    if (isSpinning) return;

    setIsSpinning(true);
    setSelectedOption(null);
    setSuggestion(null);

    const spinCount = 5 + Math.random() * 5;
    const extraDegrees = Math.random() * 360;
    const totalRotation = spinCount * 360 + extraDegrees;
    
    const finalRotation = totalRotation % 360;
    const segmentSize = 360 / wheelOptions.length;
    const selectedIndex = Math.floor((360 - (finalRotation % 360)) / segmentSize);
    
    setRotation(rotation + totalRotation);

    setTimeout(() => {
      setIsSpinning(false);
      const selected = wheelOptions[selectedIndex].label;
      setSelectedOption(selected);
      
      const newSuggestion = getUnusedSuggestion(selected);
      setSuggestion(newSuggestion);
      setUsedSuggestions(prev => new Set([...prev, newSuggestion]));
      
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#fde1d3', '#fda4af', '#f43f5e'],
        shapes: ['heart'],
      });
    }, 5000);
  };

  return (
    <div className="flex flex-col items-center space-y-8 p-4 animate-fade-in">
      <h2 className="text-3xl font-bold text-love-900 text-center">
        Spin the Wheel of Romance {selectedOption && `- ${wheelOptions.find(opt => opt.label === selectedOption)?.emoji}`}
      </h2>
      
      <div className="relative w-80 h-80 md:w-96 md:h-96">
        {/* Wheel */}
        <div
          ref={wheelRef}
          className={cn(
            "absolute inset-0 rounded-full border-4 border-love-300",
            "shadow-xl transition-transform duration-5000 ease-out",
            "bg-gradient-to-br from-love-50 to-love-100",
            isSpinning && "animate-pulse"
          )}
          style={{
            transform: `rotate(${rotation}deg)`,
            transition: isSpinning ? 'transform 5s cubic-bezier(0.17, 0.67, 0.12, 0.99)' : '',
          }}
        >
          {wheelOptions.map((option, index) => (
            <WheelSegment
              key={option.id}
              {...option}
              rotation={(360 / wheelOptions.length) * index}
              isSpinning={isSpinning}
            />
          ))}
        </div>
        
        <SpinButton onClick={spinWheel} isSpinning={isSpinning} />
      </div>

      {selectedOption && suggestion && wheelOptions.find(opt => opt.label === selectedOption) && (
        <ResultCard
          {...wheelOptions.find(opt => opt.label === selectedOption)!}
          suggestion={suggestion}
        />
      )}
    </div>
  );
}