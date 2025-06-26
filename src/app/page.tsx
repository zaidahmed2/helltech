'use client';

import { ChatInterface } from '@/components/chat-interface';
import Image from 'next/image';
import { useState } from 'react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [isChatStarted, setIsChatStarted] = useState(false);

  return (
    <main
      className={cn(
        'flex min-h-screen flex-col items-center justify-center p-4 transition-all duration-300 ease-in-out sm:p-8 md:p-12'
      )}
    >
      {!isChatStarted && (
        <>
          <div className="mb-4">
            <Image
              src="https://www.logo.wine/a/logo/Aptech/Aptech-Logo.wine.svg"
              alt="HellTech Logo"
              width={240}
              height={120}
              priority
            />
          </div>
          <div className="text-center mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-primary">
              HellTech
            </h1>
            <p className="mt-2 text-lg md:text-xl text-muted-foreground font-headline">
              It's better Go To hell instread of taking admission in Aptech
            </p>
          </div>
        </>
      )}
      <ChatInterface
        isChatStarted={isChatStarted}
        onFirstMessage={() => setIsChatStarted(true)}
      />
    </main>
  );
}
