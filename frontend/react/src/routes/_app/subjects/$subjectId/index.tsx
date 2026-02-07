import { createFileRoute, Link } from '@tanstack/react-router';
import { IconBook, IconBooks, IconCards, IconHistory, IconPlayerPlay } from '@tabler/icons-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Item, ItemActions, ItemContent, ItemDescription, ItemTitle } from '@/components/ui/item';

type DeckCardProps = {
  title: string;
  meta: string;
  progress: number;
};

const DeckCard = ({ title, meta, progress }: DeckCardProps) => {
  return (
    <Card size="default" className="mx-auto w-full max-w-sm">
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{meta}</CardDescription>
      </CardHeader>
      <CardContent>
        <Progress value={progress} className="h-1.5" />
      </CardContent>
      <CardFooter>
        <Button variant="outline" className="w-full" asChild>
          <Link to="/decks/$deckId" params={{ deckId: '1' }}>
            View
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
};

const SUBJECT_DECKS = [
  {
    id: 'linear-algebra',
    title: 'Linear Algebra',
    meta: '24 cards • 80% completed',
    progress: 80,
  },
  {
    id: 'integral-calculus',
    title: 'Integral Calculus',
    meta: '45 cards • 12% completed',
    progress: 12,
  },
  {
    id: 'differential-calculus',
    title: 'Differential Calculus',
    meta: '38 cards • 55% completed',
    progress: 55,
  },
  {
    id: 'probability',
    title: 'Probability',
    meta: '30 cards • 40% completed',
    progress: 40,
  },
  {
    id: 'statistics',
    title: 'Statistics',
    meta: '52 cards • 22% completed',
    progress: 22,
  },
  {
    id: 'discrete-math',
    title: 'Discrete Mathematics',
    meta: '41 cards • 65% completed',
    progress: 65,
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
        {SUBJECT_DECKS.map((item) => (
          <DeckCard key={item.id} title={item.title} meta={item.meta} progress={item.progress} />
        ))}
      </div>
    </div>
  );
};

export const Route = createFileRoute('/_app/subjects/$subjectId/')({
  component: RouteComponent,
});
