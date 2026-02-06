import { createFileRoute } from '@tanstack/react-router';

const RouteComponent = () => {
  return <div>Hello &quot;/_app/&quot;!</div>;
};

export const Route = createFileRoute('/_app/')({
  component: RouteComponent,
});
