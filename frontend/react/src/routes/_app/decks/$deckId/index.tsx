import { createFileRoute } from '@tanstack/react-router';
import {
  IconBook,
  IconCards,
  IconCheck,
  IconChecklist,
  IconCircle,
  IconCircleFilled,
  IconClock,
  IconDots,
  IconPencil,
  IconSparkles,
} from '@tabler/icons-react';

import { Button } from '@/components/ui/button';
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Item,
  ItemActions,
  ItemContent,
  ItemDescription,
  ItemGroup,
  ItemTitle,
} from '@/components/ui/item';

const flashcards = [
  {
    id: 1,
    front: 'Definition of the derivative',
    back: "f'(x) = lim_{h->0} (f(x+h) - f(x)) / h — the instantaneous rate of change.",
  },
  {
    id: 2,
    front: 'Power Rule',
    back: 'd/dx x^n = n * x^(n-1).',
  },
  {
    id: 3,
    front: 'Product Rule',
    back: "d/dx [u*v] = u' * v + u * v'.",
  },
  {
    id: 4,
    front: 'Chain Rule',
    back: "d/dx f(g(x)) = f'(g(x)) * g'(x).",
  },
  {
    id: 5,
    front: 'Implicit Differentiation',
    back: 'Differentiate both sides wrt x, then solve for dy/dx when y is implicit.',
  },
  {
    id: 6,
    front: 'Applications: Critical Points & Optimization',
    back: "Find where f'(x)=0 or undefined; use first/second derivative tests to classify extrema.",
  },
];

const RouteComponent = () => {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
            <IconBook size={24} />
          </div>
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold leading-tight">Calculus I - Derivatives</h1>
            <p className="text-sm text-muted-foreground max-w-xl">
              Master the fundamentals of derivatives and their applications
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <Card>
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-violet-100 text-violet-600 dark:bg-violet-900/30 dark:text-violet-400">
                <IconCards size={20} />
              </div>
              <CardTitle>Flashcards</CardTitle>
              <CardDescription>Review content using spaced repetition.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button className="w-full">Study</Button>
            </CardFooter>
          </Card>
          <Card className="ring-0 border border-dashed">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-orange-100 text-orange-600 dark:bg-orange-900/30 dark:text-orange-400">
                <IconSparkles size={20} />
              </div>
              <CardTitle>Quiz</CardTitle>
              <CardDescription>Test your knowledge with quick questions.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button disabled variant="outline" size="sm" className="w-full">
                Generate
              </Button>
            </CardFooter>
          </Card>
          <Card className="ring-0 border border-dashed">
            <CardHeader>
              <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 dark:bg-emerald-900/30 dark:text-emerald-400">
                <IconChecklist size={20} />
              </div>
              <CardTitle>Exam</CardTitle>
              <CardDescription>Take a full exam under real conditions.</CardDescription>
            </CardHeader>
            <CardFooter>
              <Button disabled variant="outline" size="sm" className="w-full">
                Start
              </Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
};

export const Route = createFileRoute('/_app/decks/$deckId/')({
  component: RouteComponent,
});
