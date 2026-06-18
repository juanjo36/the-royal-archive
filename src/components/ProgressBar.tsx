interface ProgressBarProps {
  current: number;
  total: number;
}

export function ProgressBar({ current, total }: ProgressBarProps) {
  return (
    <div className="flex items-center gap-2">
      {Array.from({ length: total }).map((_, index) => (
        <span
          key={index}
          className={`h-2.5 flex-1 rounded-full transition-colors ${index <= current ? 'bg-gold' : 'bg-white/10'}`}
        />
      ))}
    </div>
  );
}
