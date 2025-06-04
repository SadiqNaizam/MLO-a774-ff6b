import React from 'react';
import { cn } from '@/lib/utils';

interface MainAppLayoutProps {
  children: React.ReactNode;
  className?: string; // Allows custom classes on the outermost container
}

const MainAppLayout: React.FC<MainAppLayoutProps> = ({ children, className }) => {
  return (
    // Overall layout structure as per Layout Requirements: overall.definition
    // "flex justify-center items-center h-screen bg-[background]"
    // font-sans is added to ensure consistent font application within the layout scope
    <div
      className={cn(
        'flex justify-center items-center h-screen bg-background font-sans',
        className
      )}
    >
      {/* 
        Centered card container as per Layout Requirements: overall.sizing.container
        "w-96 p-8 bg-[surface] rounded-lg shadow-md"
        In Tailwind, 'bg-card' maps to 'hsl(var(--card))', which is defined as the 'surface' color.
        'text-card-foreground' ensures default text color within the card aligns with card's theme.
      */}
      <div className="w-96 bg-card text-card-foreground p-8 rounded-lg shadow-md">
        {/* 
          Main content wrapper inside the card as per Layout Requirements: mainContent.container
          "w-full flex flex-col gap-4"
          This <main> element will host the children components (e.g., LoginForm).
        */}
        <main className="w-full flex flex-col gap-4">
          {children}
        </main>
      </div>
    </div>
  );
};

export default MainAppLayout;
