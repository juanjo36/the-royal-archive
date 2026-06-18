'use client';

import { createContext, useContext, useMemo, useReducer } from 'react';
import { levels, totalLevels } from '@/data/levels';
import type {
  ConflictChoice,
  GameContextValue,
  GameState,
  GitOperationType,
  LevelStep,
  TimelineNode
} from '@/types/game';

const initialState: GameState = {
  currentLevel: 0,
  currentStep: 0,
  phase: 'intro',
  timeline: [],
  branches: [
    { id: 'main', label: 'main', color: '#d9b45f', active: true }
  ],
  activeBackground: levels[0].steps[0].background,
  conflictStepId: null,
  resolvedConflictChoice: null
};

type GameAction =
  | { type: 'GO_NEXT' }
  | { type: 'PERFORM_ACTION'; operation: GitOperationType }
  | { type: 'RESOLVE_CONFLICT'; choice: ConflictChoice }
  | { type: 'RESET_GAME' };

function getStep(state: GameState): LevelStep {
  return levels[state.currentLevel].steps[state.currentStep];
}

function addTimelineNode(timeline: TimelineNode[], node?: TimelineNode) {
  if (!node) {
    return timeline;
  }

  return [...timeline, node];
}

function gameReducer(state: GameState, action: GameAction): GameState {
  switch (action.type) {
    case 'GO_NEXT': {
      const level = levels[state.currentLevel];
      const isLastStep = state.currentStep >= level.steps.length - 1;
      const isLastLevel = state.currentLevel >= totalLevels - 1;

      if (!isLastStep) {
        const nextStep = level.steps[state.currentStep + 1];
        return {
          ...state,
          currentStep: state.currentStep + 1,
          phase: nextStep.conflict ? 'action' : 'story',
          activeBackground: nextStep.background,
          conflictStepId: nextStep.conflict ? nextStep.id : null
        };
      }

      if (isLastLevel) {
        return {
          ...state,
          phase: 'complete'
        };
      }

      const nextLevel = levels[state.currentLevel + 1];
      const nextFirstStep = nextLevel.steps[0];
      return {
        ...state,
        currentLevel: state.currentLevel + 1,
        currentStep: 0,
        phase: nextFirstStep.conflict ? 'action' : 'story',
        activeBackground: nextFirstStep.background,
        conflictStepId: nextFirstStep.conflict ? nextFirstStep.id : null,
        resolvedConflictChoice: null
      };
    }
    case 'PERFORM_ACTION': {
      const step = getStep(state);
      const nextTimeline = addTimelineNode(state.timeline, step.timelineNode);

      return {
        ...state,
        timeline: nextTimeline,
        phase: step.conflict ? 'action' : 'animating',
        activeBackground: step.background,
        conflictStepId: step.conflict ? step.id : null
      };
    }
    case 'RESOLVE_CONFLICT': {
      const step = getStep(state);
      const nextTimeline = addTimelineNode(state.timeline, step.timelineNode);

      return {
        ...state,
        resolvedConflictChoice: action.choice,
        timeline: nextTimeline,
        phase: 'animating',
        conflictStepId: null
      };
    }
    case 'RESET_GAME': {
      return initialState;
    }
    default:
      return state;
  }
}

const GameContext = createContext<GameContextValue | undefined>(undefined);

export function GameProvider({ children }: { children: React.ReactNode }) {
  const [state, dispatch] = useReducer(gameReducer, initialState);

  const currentLevelData = levels[state.currentLevel];
  const currentStepData = currentLevelData.steps[state.currentStep];

  const value = useMemo<GameContextValue>(() => {
    return {
      state,
      currentLevelData,
      currentStepData,
      goNext: () => dispatch({ type: 'GO_NEXT' }),
      performAction: (operation) => dispatch({ type: 'PERFORM_ACTION', operation }),
      resolveConflict: (choice) => dispatch({ type: 'RESOLVE_CONFLICT', choice }),
      resetGame: () => dispatch({ type: 'RESET_GAME' })
    };
  }, [currentLevelData, currentStepData, state]);

  return <GameContext.Provider value={value}>{children}</GameContext.Provider>;
}

export function useGameContext() {
  const context = useContext(GameContext);

  if (!context) {
    throw new Error('useGameContext must be used inside GameProvider');
  }

  return context;
}
