export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-white/10 border-t bg-black/20 backdrop-blur-sm">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left side - Name and tagline */}
          <div className="text-center sm:text-left">
            <h3 className="font-bold text-lg text-white">Henrik Kvamme</h3>
            <p className="text-sm text-white/60">
              Full-Stack Developer & AI Engineer
            </p>
          </div>

          {/* Right side - Links and copyright */}
          <div className="flex flex-col items-center gap-4 sm:items-end">
            <div className="flex gap-6">
              <a
                className="text-sm text-white/60 transition-colors hover:text-white"
                href="https://github.com/henrik392"
                rel="noopener noreferrer"
                target="_blank"
              >
                GitHub
              </a>
              <a
                className="text-sm text-white/60 transition-colors hover:text-white"
                href="https://linkedin.com/in/henrik-kvamme"
                rel="noopener noreferrer"
                target="_blank"
              >
                LinkedIn
              </a>
              <a
                className="text-sm text-white/60 transition-colors hover:text-white"
                href="https://www.instagram.com/henrikhalvorsenkvamme/"
                rel="noopener noreferrer"
                target="_blank"
              >
                Instagram
              </a>
              <a
                className="text-sm text-white/60 transition-colors hover:text-white"
                href="mailto:henrik@example.com"
              >
                Email
              </a>
            </div>
            <p className="text-white/40 text-xs">
              © {currentYear} Henrik Kvamme. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
