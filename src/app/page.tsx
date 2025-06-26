import { ChatInterface } from '@/components/chat-interface';
import Image from 'next/image';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4 sm:p-8 md:p-12">
      <div className="mb-4">
        <Image
          src="https://www.logo.wine/a/logo/Aptech/Aptech-Logo.wine.svg"
          alt="Aptech Logo"
          width={240}
          height={120}
          priority
        />
      </div>
      <div className="text-center mb-8">
        <h1 className="text-5xl md:text-7xl font-bold text-primary">
          Aptech
        </h1>
        <p className="mt-2 text-lg md:text-xl text-muted-foreground font-headline">
          Worldwide IT training and education.
        </p>
      </div>
      <ChatInterface />
    </main>
  );
}
