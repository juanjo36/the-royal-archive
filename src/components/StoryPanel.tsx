'use client';

import { motion } from 'framer-motion';
import { Button } from '@/components/Button';
import type { DialogueLine } from '@/types/game';

interface StoryPanelProps {
  npc: string;
  portrait: string;
  dialogue: DialogueLine[];
  currentIndex: number;
  onContinue: () => void;
}

export function StoryPanel({ npc, portrait, dialogue, currentIndex, onContinue }: StoryPanelProps) {
  const line = dialogue[currentIndex];

  return (
    <section className="glass-panel rounded-[2rem] p-5 lg:p-6">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="h-20 w-20 shrink-0 overflow-hidden rounded-2xl border border-white/10 bg-white/5">
          <img src={portrait} alt={npc} className="h-full w-full object-cover" />
        </div>
        <div className="space-y-1">
          <p className="text-xs uppercase tracking-[0.35em] text-gold/80">{npc}</p>
          <motion.p
            key={line.text}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="text-lg leading-7 text-white"
          >
            {line.text}
          </motion.p>
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4">
        <p className="text-sm text-white/50">{currentIndex + 1} / {dialogue.length}</p>
        <Button onClick={onContinue} variant="secondary">
          Continue
        </Button>
      </div>
    </section>
  );
}
