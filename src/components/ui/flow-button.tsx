'use client';

import * as React from "react";
import { ArrowRight } from 'lucide-react';
import { cn } from "@/lib/utils";

interface FlowButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  text?: string;
}

export function FlowButton({ text = "Modern Button", className, ...props }: FlowButtonProps) {
  return (
    <button 
      className={cn(
        "group relative flex cursor-pointer items-center gap-1 overflow-hidden rounded-[100px] border-[1.5px] border-border bg-transparent px-8 py-3 text-sm font-semibold text-foreground transition-all duration-[600ms] ease-[cubic-bezier(0.23,1,0.32,1)] hover:rounded-[12px] hover:border-transparent hover:text-primary-foreground active:scale-[0.95] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        className
      )}
      {...props}
    >
      <ArrowRight className="absolute left-[-25%] z-[9] h-4 w-4 stroke-foreground transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:left-4 group-hover:stroke-primary-foreground" />

      <span className="relative z-[1] -translate-x-3 transition-all duration-[800ms] ease-out group-hover:translate-x-3">
        {text}
      </span>

      <span className="absolute left-1/2 top-1/2 h-4 w-4 -translate-x-1/2 -translate-y-1/2 rounded-[50%] bg-primary opacity-0 transition-all duration-[800ms] ease-[cubic-bezier(0.19,1,0.22,1)] group-hover:h-[220px] group-hover:w-[220px] group-hover:opacity-100" />

      <ArrowRight className="absolute right-4 z-[9] h-4 w-4 stroke-foreground transition-all duration-[800ms] ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:right-[-25%] group-hover:stroke-primary-foreground" />
    </button>
  );
}
