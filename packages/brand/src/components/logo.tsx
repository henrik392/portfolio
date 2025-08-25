import clsx from 'clsx';
import Image from 'next/image';
import type React from 'react';
import logoBlack from '../../assets/logo-black.png';

// Import logo assets
import logoWhite from '../../assets/logo-white.png';
import type { LogoProps } from '../types';

const Logo: React.FC<LogoProps> = ({
  size = 'md',
  showText = true,
  alt = 'Henrik Kvamme Logo',
  onClick,
  href,
  target = '_self',
  className,
}) => {
  // Size mappings
  const sizeClasses = {
    sm: {
      container: 'gap-2',
      image: 'w-5 h-5 sm:w-6 sm:h-6',
      text: 'text-sm sm:text-base',
    },
    md: {
      container: 'gap-2',
      image: 'w-7 h-7 sm:w-8 sm:h-8',
      text: 'text-lg sm:text-xl',
    },
    lg: {
      container: 'gap-3',
      image: 'w-10 h-10 sm:w-12 sm:h-12',
      text: 'text-xl sm:text-2xl',
    },
    xl: {
      container: 'gap-4',
      image: 'w-12 h-12 sm:w-16 sm:h-16',
      text: 'text-2xl sm:text-3xl',
    },
  };

  const currentSize = sizeClasses[size];

  const logoContent = (
    <>
      {/* Logo image - show white logo in dark mode, black logo in light mode */}
      <div className="relative">
        {/* Light mode logo (black) */}
        <Image
          alt={alt}
          className={clsx(
            'hk-logo-image m-1 block object-contain dark:hidden',
            currentSize.image
          )}
          height={64}
          src={logoBlack}
          width={64}
        />

        {/* Dark mode logo (white) */}
        <Image
          alt={alt}
          className={clsx(
            'hk-logo-image m-1 hidden object-contain dark:block',
            currentSize.image
          )}
          height={64}
          src={logoWhite}
          width={64}
        />
      </div>

      {/* Name text */}
      {showText && (
        <div
          className={clsx(
            'hk-logo-text hk-font-mono font-medium tracking-wide',
            currentSize.text
          )}
        >
          <span>Henrik Kvamme</span>
        </div>
      )}
    </>
  );

  const baseClasses = clsx(
    'hk-logo flex items-center',
    currentSize.container,
    className
  );

  // If href is provided, render as link
  if (href) {
    return (
      <a
        className={clsx(baseClasses, 'no-underline')}
        href={href}
        onClick={onClick}
        rel={target === '_blank' ? 'noopener noreferrer' : undefined}
        target={target}
      >
        {logoContent}
      </a>
    );
  }

  // If onClick is provided, render as button
  if (onClick) {
    return (
      <button
        className={clsx(
          baseClasses,
          'cursor-pointer border-none bg-transparent'
        )}
        onClick={onClick}
        type="button"
      >
        {logoContent}
      </button>
    );
  }

  // Otherwise render as div
  return <div className={baseClasses}>{logoContent}</div>;
};

export default Logo;
