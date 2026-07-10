"use client";

import { useRef, useState } from "react";

type BeatPlayerProps = {
  title: string;
  audioUrl: string;
};

export default function BeatPlayer({
  title,
  audioUrl,
}: BeatPlayerProps) {
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const [isPlaying, setIsPlaying] = useState(false);
  const [audioError, setAudioError] = useState(false);

  const togglePlayback = async (): Promise<void> => {
    const audio = audioRef.current;

    if (!audio || audioError) {
      return;
    }

    try {
      if (audio.paused) {
        await audio.play();
        setIsPlaying(true);
      } else {
        audio.pause();
        setIsPlaying(false);
      }
    } catch (error) {
      console.error("Audio playback error:", error);
      setAudioError(true);
      setIsPlaying(false);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        preload="metadata"
        onEnded={() => setIsPlaying(false)}
        onError={() => {
          setAudioError(true);
          setIsPlaying(false);
        }}
      >
        <source src={audioUrl} type="audio/mpeg" />
      </audio>

      <button
        type="button"
        onClick={togglePlayback}
        disabled={audioError}
        aria-label={`${isPlaying ? "Pause" : "Play"} ${title}`}
        className="absolute left-1/2 top-1/2 z-10 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-black/60 text-2xl text-white backdrop-blur transition hover:scale-110 hover:bg-violet-600 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {audioError ? "!" : isPlaying ? "⏸" : "▶"}
      </button>
    </>
  );
}