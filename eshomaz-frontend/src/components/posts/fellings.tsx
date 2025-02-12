import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { useState } from "react";

interface FellingsProps {
  setNewPost: (callback: (prevPost: any) => any) => void;
}

export const Fellings = ({ setNewPost }: FellingsProps) => {
    const [selectedEmotion, setSelectedEmotion] = useState<{ emoji: string; text: string } | null>(null);

    const emotions = [
        { emoji: "😊", text: "Happy", color: "bg-yellow-100" },
        { emoji: "🥰", text: "Loved", color: "bg-red-100" },
        { emoji: "😃", text: "Excited", color: "bg-green-100" },
        { emoji: "😡", text: "Angry", color: "bg-orange-100" },
        { emoji: "😢", text: "Sad", color: "bg-blue-100" },
        { emoji: "😐", text: "Meh", color: "bg-gray-100" }
    ];

    const handleEmotionSelect = (emotion: { emoji: string; text: string; color: string }) => {
        setSelectedEmotion(emotion);
        setNewPost((prevPost: any) => ({
            ...prevPost,
            felling: emotion
        }))
    };

    return (
        <div className="flex items-center justify-between">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="text-[#1877F2] border-0 hover:bg-gray-100">
              {selectedEmotion ? (
                <>
                  <span className="mr-2 text-xl">{selectedEmotion.emoji}</span>
                  Feeling {selectedEmotion.text}
                </>
              ) : (
                <>
                  <span className="mr-2 text-xl">😊</span>
                  Feeling
                </>
              )}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="w-56 p-2 animate-in fade-in-80 zoom-in-95">
            {emotions.map((emotion, index) => (
              <DropdownMenuItem
                key={index}
                onClick={() => handleEmotionSelect(emotion)}
                className={`flex items-center p-2 rounded-md cursor-pointer transition-colors ${emotion.color} dark:text-white dark:mb-2 dark:bg-[#27272A80] hover:${emotion.color} hover:bg-opacity-80`}
              >
                <span className="text-2xl mr-3">{emotion.emoji}</span>
                <span className="font-medium">{emotion.text}</span>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    )
};