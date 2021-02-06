import Link from "next/link";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="flex flex-col bg-limegreen w-screen h-auto p-4 sm:text-center">
      <div className="flex flex-col sm:flex-row">
        <nav className="flex flex-1 flex-col">
          <b className="font-mono text-xl py-2">Links</b>
          <Link href="/">
            <a className="font-mono text-lg hover:text-gray-800">Home</a>
          </Link>
          <Link href="/planos">
            <a className="font-mono text-lg hover:text-gray-800">Planos</a>
          </Link>
          <Link href="/quemsomos">
            <a className="font-mono text-lg hover:text-gray-800">Quem Somos</a>
          </Link>
          <Link href="/contato">
            <a className="font-mono text-lg hover:text-gray-800">Contato</a>
          </Link>
        </nav>
        <nav className="flex-1 flex-col">
          <nav className="flex flex-1 flex-col">
            <b className="font-mono text-xl py-2">Redes Sociais</b>

            <a
              href="https://facebook.com"
              target="_blank"
              className="font-mono text-lg hover:text-gray-800"
            >
              Facebook
            </a>

            <a
              href="https://www.instagram.com/legreeninvest/"
              target="_blank"
              className="font-mono text-lg hover:text-gray-800"
            >
              Instagram
            </a>

            <a
              target="_blank"
              className="font-mono text-lg hover:text-gray-800"
            >
              WhatsApp
            </a>

            <a
              target="_blank"
              className="font-mono text-lg hover:text-gray-800"
            >
              Youtube
            </a>
          </nav>
        </nav>
        <nav className="flex-1 flex-col">
          <nav className="flex flex-1 flex-col">
            <b className="font-mono text-xl py-2">Razão Social</b>
            <a className="font-mono text-lg">Pepe & Shino ltda.</a>
            <a className="font-mono text-lg">CNPJ: 64.619.940/0001-46</a>
            <a className="font-mono text-lg">Todos os direitos reservados</a>
          </nav>
        </nav>
      </div>
      <span className="mt-4 text-mds">
        Le Green Investimentos © {currentYear}
      </span>
    </footer>
  );
};

export default Footer;
