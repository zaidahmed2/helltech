import { ChatInterface } from '@/components/chat-interface';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-primary animate-pulse">
          HellTech
        </h1>
        <p className="mt-2 text-lg md:text-xl text-muted-foreground font-headline">
          "Go to Hell instead of taking admission in Aptech."
        </p>
      </div>
      <ChatInterface />
    </main>
  );
}
