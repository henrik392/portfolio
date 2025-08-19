import Image from 'next/image';

export default function Logo() {
  return (
    <div className="flex items-center gap-2">
      {/* Logo image */}
      <div className="relative">
        <Image
          alt="Henrik Kvamme Logo"
          className="m-1 h-7 w-7 object-contain sm:h-8 sm:w-8"
          height={64}
          priority
          src="/images/logo.png"
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
