import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2 sm:gap-3">
      {/* Logo image */}
      <div className="relative">
        <Image
          alt="Henrik Kvamme Logo"
          className="h-6 w-6 object-contain sm:h-12 sm:w-12"
          height={64}
          priority
          src="/images/logo-white.png"
          width={64}
        />
      </div>

      {/* Name text */}
      <div className="text-lg tracking-wide sm:text-xl">
        <span className="font-medium">Henrik Kvamme</span>
      </div>
    </div>
  );
}
