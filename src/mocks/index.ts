export async function initMocks() {
  if (typeof window === 'undefined') {
    const { server } = await import('./server');
    server.listen();
  } else {
    const { worker } = await import('./browser');
    worker.start({
      // turn off MSW warnings for specific routes
      onUnhandledRequest(req, print) {
        // specify routes to exclude
        const excludedRoutes = ['/images', '/_next/image'];

        // check if the req.url.pathname contains excludedRoutes
        const isExcluded = excludedRoutes.some(route => req.url.pathname.includes(route));

        if (isExcluded) {
          return;
        }

        print.warning();
      },
    });
  }
}
