import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import Image from 'next/image';

const MainHeader = () => {
  return (
    <header>
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <Link href="/" className="flex items-center lg:flex-1">
          <Image
            className="h-8 w-auto"
            src={logoImg.src}
            alt="A plate with food on it"
            width={50}
            height={50}
          />
          <span className="ml-1.5">Level Up Food</span>
        </Link>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link href="/meals" className="text-sm font-semibold leading-6">
            Meals
          </Link>
          <Link href="/community" className="text-sm font-semibold leading-6">
            Community
          </Link>
        </div>
      </nav>
    </header>
  );
};

export { MainHeader };
