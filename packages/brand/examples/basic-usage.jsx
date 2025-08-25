import { DEFAULT_SOCIAL_LINKS, Footer, Logo } from '@henrikkvamme/brand';

// Don't forget to import the CSS!
import '@henrikkvamme/brand/dist/index.css';

export default function App() {
  return (
    <div className="min-h-screen bg-white dark:bg-black">
      {/* Header with Logo */}
      <header className="p-4">
        <Logo href="/" showText={true} size="md" />
      </header>

      {/* Main Content */}
      <main className="p-8">
        <h1 className="mb-4 font-bold text-3xl">Welcome to my website</h1>
        <p className="text-gray-600 dark:text-gray-300">
          This is an example of using the Henrik Kvamme brand package.
        </p>

        {/* Logo in different sizes */}
        <div className="mt-8 space-y-4">
          <h2 className="font-semibold text-xl">Logo Sizes</h2>
          <div className="flex items-center gap-8">
            <div className="text-center">
              <Logo showText={false} size="sm" />
              <p className="mt-2 text-sm">Small</p>
            </div>
            <div className="text-center">
              <Logo showText={false} size="md" />
              <p className="mt-2 text-sm">Medium</p>
            </div>
            <div className="text-center">
              <Logo showText={false} size="lg" />
              <p className="mt-2 text-sm">Large</p>
            </div>
            <div className="text-center">
              <Logo showText={false} size="xl" />
              <p className="mt-2 text-sm">Extra Large</p>
            </div>
          </div>
        </div>

        {/* Dark mode toggle example */}
        <div className="mt-8">
          <h2 className="mb-4 font-semibold text-xl">Theme Support</h2>
          <div className="rounded-lg border p-4 dark:border-gray-700">
            <p className="mb-4">
              Toggle your system dark mode to see the theme change
              automatically!
            </p>
            <Logo size="md" />
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

// Custom footer example
export function CustomFooterExample() {
  const customLinks = [
    { label: 'Home', href: '/', external: false },
    { label: 'About', href: '/about', external: false },
    { label: 'Blog', href: '/blog', external: false },
    ...DEFAULT_SOCIAL_LINKS,
  ];

  return (
    <Footer
      copyrightHolder="My Company Inc."
      links={customLinks}
      tagline="Building amazing software since 2024"
      title="My Company"
    />
  );
}
