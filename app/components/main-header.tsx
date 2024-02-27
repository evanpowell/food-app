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
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">Level Up Food</span>
            <Image
              className="h-8 w-auto"
              src={logoImg.src}
              alt="A plate with food on it"
              width={50}
              height={50}
            />
          </Link>
        </div>
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
