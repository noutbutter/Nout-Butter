import { ReactNode } from "react";

export function Marquee({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-4 px-4">
        {children}
        {children}
        {children}
        {children}
      </div>
      <div className="animate-marquee flex min-w-full shrink-0 items-center justify-around gap-4 px-4" aria-hidden="true">
        {children}
        {children}
        {children}
        {children}
      </div>
    </div>
  );
}
