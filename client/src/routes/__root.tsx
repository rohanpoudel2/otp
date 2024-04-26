import { createRootRoute } from '@tanstack/react-router';
import NotFound from '../layout/NotFound';

export const Route = createRootRoute({
  notFoundComponent: () => {
    return <NotFound />
  }
});
