import { createFileRoute, Link } from '@tanstack/react-router';
import { IconBooks } from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

type DeckCardProps = {
  title: string;
  meta: string;
  progress: number;
};

const DeckCard = ({ title, meta }: DeckCardProps) => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{meta}</CardDescription>
      </CardHeader>
      <CardFooter>
        <Button className="w-full" asChild>
          <Link to="/decks/$deckId" params={{ deckId: '1' }}>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const DECKS = [
  {
    id: 'linear-algebra',
    title: 'Linear Algebra',
    meta: '24 cards',
  },
  {
    id: 'integral-calculus',
    title: 'Integral Calculus',
    meta: '45 cards',
  },
  {
    id: 'differential-calculus',
    title: 'Differential Calculus',
    meta: '38 cards',
  },
  {
    id: 'probability',
    title: 'Probability',
    meta: '30 cards',
  },
  {
    id: 'statistics',
    title: 'Statistics',
    meta: '52 cards',
  },
  {
    id: 'discrete-math',
    title: 'Discrete Mathematics',
    meta: '41 cards',
  },
];

const RouteComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <IconBooks size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold leading-tight">Mathematics</h1>
            <p className="text-sm text-muted-foreground max-w-xl">6 decks · 139 flashcards</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {DECKS.map((deck) => (
          <Card key={deck.id}>
            <CardHeader>
              <CardTitle>{deck.title}</CardTitle>
              <CardDescription>{deck.meta}</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full" asChild>
                <Link to="/decks/$deckId" params={{ deckId: '1' }}>
                  View
                </Link>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export const Route = createFileRoute('/_app/subjects/$subjectId/')({
  component: RouteComponent,
});
