'use client';

import { Button } from '@/components/Button';
import { ProgressBar } from '@/components/ProgressBar';
import type { ActionOption } from '@/types/game';

interface ActionPanelProps {
  title: string;
  explanation: string;
  actions: ActionOption[];
  onAction: (operation: ActionOption['operation']) => void;
  currentLevel: number;
  totalLevels: number;
}

export function ActionPanel({ title, explanation, actions, onAction, currentLevel, totalLevels }: ActionPanelProps) {
  return (
    <section className="glass-panel rounded-[2rem] p-5 lg:p-6">
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Git concept</p>
        <h2 className="font-[family-name:var(--font-title)] text-3xl text-white">{title}</h2>
        <p className="max-w-3xl text-sm leading-7 text-white/70">{explanation}</p>
      </div>

      <div className="mt-5 flex flex-wrap gap-3">
        {actions.map((action) => (
          <Button key={action.id} onClick={() => onAction(action.operation)}>
            {action.label}
          </Button>
        ))}
      </div>

      <div className="mt-6 space-y-3">
        <div className="flex items-center justify-between text-xs uppercase tracking-[0.35em] text-white/50">
          <span>Level {currentLevel + 1}</span>
          <span>{totalLevels} total</span>
        </div>
        <ProgressBar current={currentLevel} total={totalLevels} />
      </div>
    </section>
  );
}
