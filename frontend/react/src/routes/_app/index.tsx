import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return <div className="flex flex-col gap-4 p-4 md:gap-6 md:p-6"></div>;
};

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
});
