'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { GameProvider, useGameContext } from '@/context/GameContext';
import { levels, totalLevels } from '@/data/levels';
import { StoryPanel } from '@/components/StoryPanel';
import { KingdomBackground } from '@/components/KingdomBackground';
import { TimelineVisualization } from '@/components/TimelineVisualization';
import { ActionPanel } from '@/components/ActionPanel';
import { ConflictResolver } from '@/components/ConflictResolver';
import { Button } from '@/components/Button';

function GameScreen() {
  const {
    state,
    currentLevelData,
    currentStepData,
    goNext,
    performAction,
    resolveConflict,
    resetGame
  } = useGameContext();

  const dialogue = [
    { speaker: currentLevelData.npc, text: currentStepData.story },
    { speaker: 'Archive', text: currentStepData.conceptExplanation }
  ];

  const actionOptions = [
    {
      id: currentStepData.id,
      label: currentStepData.actionLabel,
      operation: currentStepData.operation,
      description: currentStepData.conceptExplanation
    }
  ];

  return (
    <main className="min-h-screen px-4 py-4 text-[var(--text)] lg:px-8 lg:py-6">
      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-7xl flex-col gap-4">
        <header className="glass-panel flex items-center justify-between rounded-[1.5rem] px-5 py-4">
          <div>
            <p className="text-xs uppercase tracking-[0.35em] text-gold/80">The Royal Archive</p>
            <h1 className="font-[family-name:var(--font-title)] text-3xl text-white">{currentLevelData.title}</h1>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-sm text-white/70">Level {state.currentLevel + 1} / {totalLevels}</span>
            <Button variant="secondary" onClick={resetGame}>Reset</Button>
          </div>
        </header>

        <AnimatePresence mode="wait">
          {state.phase === 'complete' ? (
            <motion.section
              key="complete"
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="glass-panel flex flex-1 flex-col items-center justify-center rounded-[2rem] p-10 text-center"
            >
              <p className="text-xs uppercase tracking-[0.4em] text-gold/70">Journey complete</p>
              <h2 className="mt-3 font-[family-name:var(--font-title)] text-5xl text-white">Master Archivist</h2>
              <p className="mt-4 max-w-2xl text-white/70">
                The kingdom&apos;s history is restored. You have learned Git through timeline changes, branching futures, merges, and conflict resolution.
              </p>
              <div className="mt-8">
                <Button onClick={resetGame}>Replay the archive</Button>
              </div>
            </motion.section>
          ) : (
            <motion.div
              key="game"
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="grid flex-1 gap-4 xl:grid-cols-[0.9fr_1.1fr]"
            >
              <div className="flex flex-col gap-4">
                <StoryPanel
                  npc={currentLevelData.npc}
                  portrait={currentLevelData.portrait}
                  dialogue={dialogue}
                  currentIndex={0}
                  onContinue={goNext}
                />
                <ActionPanel
                  title={currentStepData.conceptTitle}
                  explanation={currentStepData.conceptExplanation}
                  actions={actionOptions}
                  onAction={performAction}
                  currentLevel={state.currentLevel}
                  totalLevels={totalLevels}
                />
              </div>

              <div className="flex flex-col gap-4">
                <div className="h-[360px] overflow-hidden rounded-[2rem]">
                  <KingdomBackground src={state.activeBackground} alt={currentLevelData.title} />
                </div>
                <TimelineVisualization nodes={state.timeline} activeBranch={state.branches.find((branch) => branch.active)?.label ?? 'main'} />
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <ConflictResolver
        open={Boolean(currentStepData.conflict && state.phase !== 'complete')}
        prompt={currentStepData.conflictPrompt ?? ''}
        choices={currentStepData.conflictChoices ?? []}
        onResolve={resolveConflict}
      />
    </main>
  );
}

export function GameContainer() {
  return (
    <GameProvider>
      <GameScreen />
    </GameProvider>
  );
}
