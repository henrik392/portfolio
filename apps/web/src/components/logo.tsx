import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-1 sm:gap-1">
      {/* Logo image */}
      <div className="relative">
        <Image
          alt="Henrik Kvamme Logo"
          className="h-8 w-8 object-contain sm:h-12 sm:w-12"
          height={64}
          priority
          src="/images/logo-white.png"
          width={64}
        />
      </div>

      {/* Name text */}
      <div className="text-lg text-white tracking-wide sm:text-xl">
        <span className="font-geist-mono font-medium">Henrik Kvamme</span>
      </div>
    </div>
  );
}
