import { RouterProvider, createRouter, createRoute, createRootRoute } from '@tanstack/react-router';
import { Toaster } from '@/components/ui/sonner';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';
import CompareEducatePage from './pages/CompareEducatePage';
import ClaimAssistancePage from './pages/ClaimAssistancePage';
import AboutUsPage from './pages/AboutUsPage';
import ContactPage from './pages/ContactPage';
import TestimonialsPage from './pages/TestimonialsPage';

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const servicesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/services',
  component: ServicesPage,
});

const compareEducateRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/compare-educate',
  component: CompareEducatePage,
});

const claimAssistanceRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/claim-assistance',
  component: ClaimAssistancePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutUsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const testimonialsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/testimonials',
  component: TestimonialsPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  servicesRoute,
  compareEducateRoute,
  claimAssistanceRoute,
  aboutRoute,
  contactRoute,
  testimonialsRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <>
      <RouterProvider router={router} />
      <Toaster />
    </>
  );
}

export default App;
