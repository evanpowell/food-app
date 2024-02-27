import Link from 'next/link';

import logoImg from '@/assets/logo.png';
import Image from 'next/image';

const MainHeader = () => {
  return (
    <header>
      <Link href="/">
        <Image
          src={logoImg.src}
          alt="A plate with food on it"
          width={50}
          height={50}
        />
        Level Up Food
      </Link>
      <nav>
        <ul>
          <li>
            <Link href="/meals">Meals</Link>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export { MainHeader };
