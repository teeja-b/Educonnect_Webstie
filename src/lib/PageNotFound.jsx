import { Link, useLocation } from 'react-router-dom';

export default function PageNotFound() {
  const location = useLocation();
  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-background">
      <div className="max-w-md w-full text-center space-y-6">
        <h1 className="font-display text-7xl font-light text-muted-foreground/40">404</h1>
        <div>
          <h2 className="font-display text-2xl font-semibold text-primary">Page not found</h2>
          <p className="mt-2 text-muted-foreground">
            There's no page at <span className="font-medium text-primary">{location.pathname}</span>.
          </p>
        </div>
        <Link to="/" className="inline-flex items-center px-5 py-2.5 text-sm font-semibold text-primary-foreground bg-primary rounded-full hover:bg-primary/90 transition-colors">
          Go to the home page
        </Link>
      </div>
    </div>
  );
}
