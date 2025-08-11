"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

interface HumanVerificationProps {
  onVerify: (verified: boolean) => void;
  isOpen: boolean;
  onClose: () => void;
}

const CANNABIS_IMAGES = [
  "🌿",
  "🍃",
  "🌱",
  "🌾",
  "🌳",
  "🌲",
  "🌴",
  "🌵",
  "🌸",
  "🌺",
  "🌻",
  "🌹",
];

const CANNABIS_LEAF_EMOJIS = ["🌿", "🍃", "🌱"];

export default function HumanVerification({
  onVerify,
  isOpen,
  onClose,
}: HumanVerificationProps) {
  const [selectedTiles, setSelectedTiles] = useState<number[]>([]);
  const [tiles, setTiles] = useState<string[]>([]);
  const [correctTiles, setCorrectTiles] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [isCorrect, setIsCorrect] = useState(false);

  useEffect(() => {
    if (isOpen) {
      generateTiles();
      setSelectedTiles([]);
      setShowResult(false);
      setIsCorrect(false);
    }
  }, [isOpen]);

  const generateTiles = () => {
    const newTiles = [];
    const newCorrectTiles = [];

    // Add 3-4 cannabis leaf tiles
    const cannabisCount = Math.floor(Math.random() * 2) + 3; // 3 or 4
    const cannabisPositions = [];

    // Generate random positions for cannabis tiles
    while (cannabisPositions.length < cannabisCount) {
      const pos = Math.floor(Math.random() * 9);
      if (!cannabisPositions.includes(pos)) {
        cannabisPositions.push(pos);
        newCorrectTiles.push(pos);
      }
    }

    // Fill all 9 tiles
    for (let i = 0; i < 9; i++) {
      if (cannabisPositions.includes(i)) {
        newTiles[i] =
          CANNABIS_LEAF_EMOJIS[
            Math.floor(Math.random() * CANNABIS_LEAF_EMOJIS.length)
          ];
      } else {
        const nonCannabis = CANNABIS_IMAGES.filter(
          (img) => !CANNABIS_LEAF_EMOJIS.includes(img),
        );
        newTiles[i] =
          nonCannabis[Math.floor(Math.random() * nonCannabis.length)];
      }
    }

    setTiles(newTiles);
    setCorrectTiles(newCorrectTiles);
  };

  const handleTileClick = (index: number) => {
    if (showResult) return;

    setSelectedTiles((prev) => {
      if (prev.includes(index)) {
        return prev.filter((i) => i !== index);
      } else {
        return [...prev, index];
      }
    });
  };

  const handleVerify = () => {
    const correct =
      selectedTiles.length === correctTiles.length &&
      selectedTiles.every((tile) => correctTiles.includes(tile)) &&
      correctTiles.every((tile) => selectedTiles.includes(tile));

    setIsCorrect(correct);
    setShowResult(true);

    setTimeout(() => {
      onVerify(correct);
      if (correct) {
        onClose();
      } else {
        // Reset for another try
        generateTiles();
        setSelectedTiles([]);
        setShowResult(false);
      }
    }, 1500);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <Card className="w-full max-w-md mx-4 bg-[#021612] border-[#008347]">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-[#35f6ae] font-mono">
            I Am Human Verification
          </CardTitle>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-[#35f6ae] hover:bg-[#008347]/20"
          >
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-[#35f6ae] font-mono text-sm">
            Select all tiles that contain leaves:
          </p>

          <div className="grid grid-cols-3 gap-2">
            {tiles.map((tile, index) => (
              <button
                key={index}
                onClick={() => handleTileClick(index)}
                disabled={showResult}
                className={`
                  aspect-square border-2 rounded-lg flex items-center justify-center text-4xl
                  transition-all duration-200 hover:scale-105
                  ${
                    selectedTiles.includes(index)
                      ? "border-[#35f6ae] bg-[#35f6ae]/20"
                      : "border-[#008347] bg-[#008347]/10 hover:bg-[#008347]/20"
                  }
                  ${
                    showResult && correctTiles.includes(index)
                      ? "border-green-500 bg-green-500/20"
                      : ""
                  }
                  ${
                    showResult &&
                    selectedTiles.includes(index) &&
                    !correctTiles.includes(index)
                      ? "border-red-500 bg-red-500/20"
                      : ""
                  }
                `}
              >
                {tile}
              </button>
            ))}
          </div>

          {showResult && (
            <div
              className={`text-center font-mono ${
                isCorrect ? "text-green-400" : "text-red-400"
              }`}
            >
              {isCorrect ? "✓ Verification successful!" : "✗ Try again..."}
            </div>
          )}

          {!showResult && (
            <div className="flex gap-2">
              <Button
                onClick={handleVerify}
                disabled={selectedTiles.length === 0}
                className="flex-1 bg-[#35f6ae] text-[#021612] hover:bg-[#35f6ae]/90 font-mono"
              >
                Verify
              </Button>
              <Button
                onClick={generateTiles}
                variant="outline"
                className="border-[#008347] text-[#35f6ae] hover:bg-[#008347]/20 font-mono"
              >
                New Images
              </Button>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
