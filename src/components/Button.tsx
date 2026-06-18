"use client";

import type { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
}

export function Button({ className = '', variant = 'primary', ...props }: ButtonProps) {
  const base = 'inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-semibold transition disabled:cursor-not-allowed disabled:opacity-50';
  const styles =
    variant === 'primary'
      ? 'bg-gold text-slate shadow-royal hover:bg-[#f0c774]'
      : 'border border-white/12 bg-white/5 text-white hover:bg-white/10';
  const MotionButton = motion.button as unknown as React.ComponentType<any>;

  return (
    <MotionButton
      whileTap={{ scale: 0.98 }}
      className={`${base} ${styles} ${className}`}
      {...(props as React.ComponentPropsWithoutRef<'button'>)}
    />
  );
}
