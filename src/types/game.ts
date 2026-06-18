export type GamePhase = 'intro' | 'story' | 'action' | 'animating' | 'complete';

export type GitOperationType = 'init' | 'add' | 'commit' | 'branch' | 'checkout' | 'merge' | 'conflict';

export type ConflictChoice = 'tower' | 'wall' | 'both';

export interface DialogueLine {
  speaker: string;
  text: string;
}

export interface ActionOption {
  id: string;
  label: string;
  operation: GitOperationType;
  description: string;
}

export interface TimelineNode {
  id: string;
  label: string;
  branch: 'main' | 'fortress' | 'trade' | 'merged';
  x: number;
  y: number;
  color: string;
  highlighted?: boolean;
}

export interface BranchState {
  id: string;
  label: string;
  color: string;
  active: boolean;
}

export interface LevelStep {
  id: string;
  story: string;
  conceptTitle: string;
  conceptExplanation: string;
  operation: GitOperationType;
  actionLabel: string;
  timelineNode?: TimelineNode;
  background: string;
  conflict?: boolean;
  conflictPrompt?: string;
  conflictChoices?: Array<{
    id: ConflictChoice;
    label: string;
    outcome: string;
  }>;
}

export interface LevelDefinition {
  id: number;
  title: string;
  subtitle: string;
  npc: string;
  portrait: string;
  steps: LevelStep[];
}

export interface GameState {
  currentLevel: number;
  currentStep: number;
  phase: GamePhase;
  timeline: TimelineNode[];
  branches: BranchState[];
  activeBackground: string;
  conflictStepId: string | null;
  resolvedConflictChoice: ConflictChoice | null;
}

export interface GameContextValue {
  state: GameState;
  currentLevelData: LevelDefinition;
  currentStepData: LevelStep;
  goNext: () => void;
  performAction: (operation: GitOperationType) => void;
  resolveConflict: (choice: ConflictChoice) => void;
  resetGame: () => void;
}
