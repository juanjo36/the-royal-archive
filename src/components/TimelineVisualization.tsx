'use client';

import { motion } from 'framer-motion';
import { timelineHeight, timelineWidth } from '@/utils/constants';
import type { TimelineNode } from '@/types/game';

interface TimelineVisualizationProps {
  nodes: TimelineNode[];
  activeBranch: string;
}

const branchPaths: Record<string, string> = {
  main: 'M 60 140 C 180 140, 240 140, 320 108',
  fortress: 'M 60 140 C 170 140, 250 170, 360 160',
  trade: 'M 60 140 C 180 140, 250 110, 380 92',
  merged: 'M 60 140 C 200 140, 300 120, 460 108'
};

export function TimelineVisualization({ nodes, activeBranch }: TimelineVisualizationProps) {
  return (
    <section className="glass-panel rounded-[2rem] p-5 lg:p-6">
      <div className="mb-4 flex items-center justify-between">
        <div>
          <p className="text-xs uppercase tracking-[0.35em] text-gold/80">Git timeline</p>
          <h2 className="font-[family-name:var(--font-title)] text-3xl text-white">Live history</h2>
        </div>
        <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/70">
          {activeBranch}
        </span>
      </div>

      <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-slate-950/60">
        <svg viewBox={`0 0 ${timelineWidth} ${timelineHeight}`} className="h-[220px] w-full">
          {Object.entries(branchPaths).map(([branch, path]) => (
            <motion.path
              key={branch}
              d={path}
              fill="none"
              stroke={branch === activeBranch ? '#f08a5d' : '#ffffff33'}
              strokeWidth="5"
              strokeLinecap="round"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.75, ease: 'easeOut' }}
            />
          ))}
          {nodes.map((node) => (
            <g key={node.id}>
              <motion.circle
                cx={node.x}
                cy={node.y}
                r="13"
                fill={node.color}
                stroke={node.highlighted ? '#fff' : '#050816'}
                strokeWidth="4"
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.35, ease: 'easeOut' }}
              />
              <text
                x={node.x + 22}
                y={node.y + 4}
                fill="#f8f2e7"
                fontSize="13"
                fontFamily="Manrope, sans-serif"
              >
                {node.label}
              </text>
            </g>
          ))}
        </svg>
      </div>
    </section>
  );
}
