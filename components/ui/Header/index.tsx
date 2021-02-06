import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <header className="flex flex-col sm:flex-row h-30 w-screen p-4 items-center border-b-2 border-limegreen">
      <div className="bg-white rounded-full h-16 w-16 p-1">
        <Image src="/images/mini-logo.png" height={64} width={64} />
      </div>
      <div className="sm:flex sm:flex-grow " />
      <nav className="flex flex-row space-x-4 mt-4 sm:mt-0">
        <Link href="/">
          <a className="text-white text-lg sm:text-2xl hover:text-limegreen transition ease-in-out duration-200">
            Home
          </a>
        </Link>
        <Link href="/planos">
          <a className="text-white text-lg sm:text-2xl hover:text-limegreen transition ease-in-out duration-200">
            Planos
          </a>
        </Link>
        <Link href="/quemsomos">
          <a className="text-white text-lg sm:text-2xl hover:text-limegreen transition ease-in-out duration-200">
            Quem Somos
          </a>
        </Link>
        <Link href="/contato">
          <a className="text-white text-lg sm:text-2xl hover:text-limegreen transition ease-in-out duration-200">
            Contato
          </a>
        </Link>
      </nav>
    </header>
  );
};

export default Header;
