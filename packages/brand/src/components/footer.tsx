import clsx from 'clsx';
import type React from 'react';
import { EXTERNAL_SOCIAL_LINKS, type FooterProps } from '../types';
import Logo from './logo';

const Footer: React.FC<FooterProps> = ({
  tagline = 'Full-Stack Developer & AI Engineer',
  links = EXTERNAL_SOCIAL_LINKS,
  showCopyright = true,
  copyrightText,
  copyrightHolder = 'Henrik Kvamme',
  theme = 'dark',
  websiteUrl = 'https://henrikkvamme.no',
  showWebsiteLink = false,
  className,
}) => {
  const currentYear = new Date().getFullYear();

  const finalCopyrightText =
    copyrightText ||
    `© ${currentYear} ${copyrightHolder}. All rights reserved.`;

  // Theme-based styling
  const themeStyles = {
    light: {
      footer: 'bg-gray-50 border-gray-200',
      title: 'text-gray-900',
      tagline: 'text-gray-600',
      link: 'text-gray-500 hover:text-gray-900',
      copyright: 'text-gray-400',
      websiteLink: 'text-blue-600 hover:text-blue-800',
    },
    dark: {
      footer: 'bg-black/20 backdrop-blur-sm border-white/10',
      title: 'text-white',
      tagline: 'text-white/60',
      link: 'text-white/60 hover:text-white',
      copyright: 'text-white/40',
      websiteLink: 'text-blue-400 hover:text-blue-300',
    },
  };

  const styles = themeStyles[theme];

  return (
    <footer className={clsx('border-t', styles.footer, className)}>
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between gap-6 sm:flex-row">
          {/* Left side - Logo, name and tagline */}
          <div className="text-center sm:text-left">
            {showWebsiteLink && websiteUrl ? (
              <Logo
                className={clsx(
                  'justify-center sm:justify-start',
                  styles.websiteLink
                )}
                href={websiteUrl}
                size="sm"
                target="_blank"
              />
            ) : (
              <Logo
                className={clsx(
                  'justify-center sm:justify-start',
                  styles.title
                )}
                size="sm"
              />
            )}
            <p className={clsx('mt-1 text-sm', styles.tagline)}>{tagline}</p>
            {showWebsiteLink && websiteUrl && (
              <p className={clsx('mt-1 text-xs', styles.link)}>
                Visit my portfolio →
              </p>
            )}
          </div>

          {/* Right side - Links and copyright */}
          <div className="flex flex-col items-center gap-4 sm:items-end">
            {links && links.length > 0 && (
              <div className="flex gap-6">
                {links.map((link) => (
                  <a
                    className={clsx('text-sm transition-colors', styles.link)}
                    href={link.href}
                    key={`${link.href}-${link.label}`}
                    rel={link.external ? 'noopener noreferrer' : undefined}
                    target={link.external ? '_blank' : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}

            {showCopyright && (
              <p className={clsx('text-xs', styles.copyright)}>
                {finalCopyrightText}
              </p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
