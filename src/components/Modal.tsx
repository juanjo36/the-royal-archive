'use client';

import type { PropsWithChildren } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface ModalProps {
  open: boolean;
  title: string;
  onClose?: () => void;
}

export function Modal({ open, title, onClose, children }: PropsWithChildren<ModalProps>) {
  return (
    <AnimatePresence>
      {open ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/70 px-4 backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 18 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 18 }}
            transition={{ duration: 0.25 }}
            className="glass-panel w-full max-w-lg rounded-[1.75rem] p-6"
          >
            <div className="mb-4 flex items-start justify-between gap-4">
              <h2 className="font-[family-name:var(--font-title)] text-3xl text-gold">{title}</h2>
              {onClose ? (
                <button onClick={onClose} className="text-sm text-white/60 hover:text-white">
                  Close
                </button>
              ) : null}
            </div>
            {children}
          </motion.div>
        </div>
      ) : null}
    </AnimatePresence>
  );
}
