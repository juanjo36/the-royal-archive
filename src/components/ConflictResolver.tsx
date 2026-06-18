'use client';

import { Modal } from '@/components/Modal';
import { Button } from '@/components/Button';
import type { ConflictChoice } from '@/types/game';

interface ConflictResolverProps {
  open: boolean;
  prompt: string;
  choices: Array<{
    id: ConflictChoice;
    label: string;
    outcome: string;
  }>;
  onResolve: (choice: ConflictChoice) => void;
}

export function ConflictResolver({ open, prompt, choices, onResolve }: ConflictResolverProps) {
  return (
    <Modal open={open} title="Merge Conflict">
      <p className="text-sm leading-7 text-white/75">{prompt}</p>
      <div className="mt-5 grid gap-3 sm:grid-cols-3">
        {choices.map((choice) => (
          <button
            key={choice.id}
            onClick={() => onResolve(choice.id)}
            className="rounded-2xl border border-white/10 bg-white/5 px-4 py-4 text-left transition hover:bg-white/10"
          >
            <p className="font-semibold text-white">{choice.label}</p>
            <p className="mt-2 text-sm leading-6 text-white/60">{choice.outcome}</p>
          </button>
        ))}
      </div>
      <div className="mt-6 flex justify-end">
        <Button variant="secondary">Resolve the timeline</Button>
      </div>
    </Modal>
  );
}
