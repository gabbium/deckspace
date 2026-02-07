import { IconCards } from '@tabler/icons-react';
import { createFileRoute } from '@tanstack/react-router';

export const Route = createFileRoute('/_app/decks/')({
  component: RouteComponent,
});

function RouteComponent() {
  return (
    <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6">
      <div className="flex items-start justify-between gap-4">
        <div className="flex gap-4">
          <div className="flex flex-col gap-1">
            <h1 className="text-lg font-semibold leading-tight">My Decks</h1>
            <p className="text-sm text-muted-foreground max-w-xl">
              Manage and study your flashcard collections
            </p>
          </div>
        </div>
      </div>
      <div className="mb-8 grid gap-4 sm:grid-cols-3">
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <IconCards className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Cards</p>
              <p className="text-xl font-bold text-foreground">20</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <IconCards className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Cards</p>
              <p className="text-xl font-bold text-foreground">20</p>
            </div>
          </div>
        </div>
        <div className="rounded-2xl border border-border bg-card p-4">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
              <IconCards className="h-5 w-5 text-primary" />
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Cards</p>
              <p className="text-xl font-bold text-foreground">20</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
