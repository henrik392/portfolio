import clsx from 'clsx';
import type React from 'react';
import { DEFAULT_SOCIAL_LINKS, type FooterProps } from '../types';

const Footer: React.FC<FooterProps> = ({
  title = 'Henrik Kvamme',
  tagline = 'Full-Stack Developer & AI Engineer',
  links = DEFAULT_SOCIAL_LINKS,
  showCopyright = true,
  copyrightText,
  copyrightHolder = 'Henrik Kvamme',
  className,
}) => {
  const currentYear = new Date().getFullYear();

  const finalCopyrightText =
    copyrightText ||
    `© ${currentYear} ${copyrightHolder}. All rights reserved.`;

  return (
    <footer className={clsx('hk-footer', className)}>
      <div className="hk-footer-container">
        <div className="hk-footer-content">
          {/* Left side - Name and tagline */}
          <div className="hk-footer-brand">
            <h3>{title}</h3>
            <p>{tagline}</p>
          </div>

          {/* Right side - Links and copyright */}
          <div className="hk-footer-links-section">
            {links && links.length > 0 && (
              <div className="hk-footer-links">
                {links.map((link) => (
                  <a
                    className="hk-footer-link"
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
              <p className="hk-footer-copyright">{finalCopyrightText}</p>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
