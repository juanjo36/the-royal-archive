import type { LevelDefinition } from '@/types/game';

export const levels: LevelDefinition[] = [
  {
    id: 0,
    title: 'The Broken Archive',
    subtitle: 'A missing history opens the game.',
    npc: 'Royal Historian',
    portrait: '/assets/characters/NPC_HISTORIAN.png',
    steps: [
      {
        id: 'level-0-step-0',
        story: 'The archive has lost its memory. We need a repository to begin preserving the kingdom again.',
        conceptTitle: 'Git and Repository',
        conceptExplanation: 'Git tracks changes over time. A repository is the place where that history lives.',
        operation: 'init',
        actionLabel: 'Initialize the archive',
        background: '/assets/backgrounds/BG_01_ROYAL_ARCHIVE.png',
        timelineNode: { id: 'commit-0', label: 'Archive restored', branch: 'main', x: 120, y: 84, color: '#d9b45f' }
      }
    ]
  },
  {
    id: 1,
    title: 'The Marketplace',
    subtitle: 'Prepare the trade district before saving it.',
    npc: 'Builder',
    portrait: '/assets/characters/NPC_BUILDER.png',
    steps: [
      {
        id: 'level-1-step-0',
        story: 'The builders are ready. Stage the work before the marketplace enters history.',
        conceptTitle: 'Add and Commit',
        conceptExplanation: 'Changes are staged first, then committed to history when they are ready.',
        operation: 'add',
        actionLabel: 'Stage the marketplace',
        background: '/assets/backgrounds/BG_02_TOWN_SQUARE.png',
        timelineNode: { id: 'commit-1a', label: 'Prepared trade plans', branch: 'main', x: 220, y: 84, color: '#f08a5d' }
      },
      {
        id: 'level-1-step-1',
        story: 'The site is ready. Record the change so the new marketplace becomes official history.',
        conceptTitle: 'Commit',
        conceptExplanation: 'A commit records the staged work as a permanent point in the timeline.',
        operation: 'commit',
        actionLabel: 'Commit the marketplace',
        background: '/assets/backgrounds/BG_03_MARKETPLACE.png',
        timelineNode: { id: 'commit-1b', label: 'Marketplace committed', branch: 'main', x: 300, y: 84, color: '#d9b45f' }
      }
    ]
  },
  {
    id: 2,
    title: 'Diverging Futures',
    subtitle: 'Split the timeline into two safe possibilities.',
    npc: 'Council Member',
    portrait: '/assets/characters/NPC_COUNCIL_MEMBER.png',
    steps: [
      {
        id: 'level-2-step-0',
        story: 'The council wants to explore a fortress and a wider trade route at the same time.',
        conceptTitle: 'Branch',
        conceptExplanation: 'A branch lets you try a new line of work without losing the main history.',
        operation: 'branch',
        actionLabel: 'Create the fortress branch',
        background: '/assets/backgrounds/BG_04_COUNCIL_CHAMBER.png',
        timelineNode: { id: 'commit-2', label: 'Branch created', branch: 'fortress', x: 190, y: 160, color: '#8b5cf6' }
      }
    ]
  },
  {
    id: 3,
    title: 'A Different Path',
    subtitle: 'Switch attention to the branch under review.',
    npc: 'Council Member',
    portrait: '/assets/characters/NPC_COUNCIL_MEMBER.png',
    steps: [
      {
        id: 'level-3-step-0',
        story: 'Move into the alternate timeline and inspect how the fortress version looks.',
        conceptTitle: 'Checkout',
        conceptExplanation: 'Checkout moves your focus to another branch so you can work there.',
        operation: 'checkout',
        actionLabel: 'Checkout the fortress branch',
        background: '/assets/backgrounds/BG_05_FORTRESS_TIMELINE.png',
        timelineNode: { id: 'commit-3', label: 'Fortress branch active', branch: 'fortress', x: 280, y: 160, color: '#8b5cf6' }
      }
    ]
  },
  {
    id: 4,
    title: 'Unification',
    subtitle: 'Bring the fortress and trade improvements together.',
    npc: 'Merchant',
    portrait: '/assets/characters/NPC_MERCHANT.png',
    steps: [
      {
        id: 'level-4-step-0',
        story: 'Both ideas are valuable. Merge the best parts into one stronger kingdom.',
        conceptTitle: 'Merge',
        conceptExplanation: 'Merge combines work from different branches into one shared history.',
        operation: 'merge',
        actionLabel: 'Merge the branches',
        background: '/assets/backgrounds/BG_07_MERGED_KINGDOM.png',
        timelineNode: { id: 'commit-4', label: 'Histories merged', branch: 'merged', x: 390, y: 100, color: '#34d399' }
      }
    ]
  },
  {
    id: 5,
    title: 'Historical Contradiction',
    subtitle: 'Resolve the castle conflict before the archive breaks.',
    npc: 'Architect',
    portrait: '/assets/characters/NPC_ARCHITECT.png',
    steps: [
      {
        id: 'level-5-step-0',
        story: 'Two versions of the castle clash. Choose how the final history should read.',
        conceptTitle: 'Merge Conflict',
        conceptExplanation: 'A conflict happens when two branches change the same place in different ways.',
        operation: 'conflict',
        actionLabel: 'Resolve the contradiction',
        background: '/assets/backgrounds/BG_08_CASTLE_CONFLICT.png',
        conflict: true,
        conflictPrompt: 'Which castle version should become official history?',
        conflictChoices: [
          { id: 'tower', label: 'Keep the tower', outcome: 'The defensive tower stands in the final record.' },
          { id: 'wall', label: 'Keep the wall', outcome: 'The fortified wall becomes the official version.' },
          { id: 'both', label: 'Combine both', outcome: 'The castle keeps the tower and the wall together.' }
        ]
      }
    ]
  },
  {
    id: 6,
    title: 'Master Archivist',
    subtitle: 'The restored kingdom stands complete.',
    npc: 'Royal Historian',
    portrait: '/assets/characters/NPC_HISTORIAN.png',
    steps: [
      {
        id: 'level-6-step-0',
        story: 'Every major event is now preserved. Review the complete timeline and claim your title.',
        conceptTitle: 'Full Recap',
        conceptExplanation: 'Git lets you preserve, branch, merge, and recover the full story of a project.',
        operation: 'commit',
        actionLabel: 'Review the restored archive',
        background: '/assets/backgrounds/BG_09_FINAL_KINGDOM.png',
        timelineNode: { id: 'commit-6', label: 'Master Archivist crowned', branch: 'merged', x: 500, y: 76, color: '#f59e0b' }
      }
    ]
  }
];

export const totalLevels = levels.length;
