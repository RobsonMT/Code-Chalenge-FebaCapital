import Image from "next/image";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdWhatsapp } from "react-icons/md";

const Footer = () => {
  return (
    <div
      id="contatos"
      className="h-full w-full bg-black flex flex-col px-8 py-16"
    >
      {/* Conteúdo principal */}
      <div className="h-full w-full bg-black flex flex-col md:flex-row gap-10 md:gap-20 mb-8">
        {/* Logo + descrição */}
        <div className="w-full md:w-1/4 flex flex-col gap-4">
          <Image
            src={"/images/logo-2.png"}
            alt="logo"
            height={40}
            width={100}
          />
          <p className="text-white">
            Duis cute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore eu fugiat nulla pariatur
          </p>
        </div>

        {/* Navegação */}
        <div className="text-white w-full md:w-1/4">
          <h3 className="uppercase text-[#48B79D] mb-2">Navegue no site</h3>
          <ul className="flex flex-col gap-2">
            <li className="uppercase">
              <a href="/#home">Home</a>
            </li>
            <li className="uppercase">
              <a href="/#sobre">Sobre a liva</a>
            </li>
            <li className="uppercase">
              <a href="/#empreendimentos">Empreendimentos</a>
            </li>
            <li className="uppercase">
              <a href="/#noticias">Notícias</a>
            </li>
            <li className="uppercase">
              <a href="/#contatos">Contato</a>
            </li>
          </ul>
        </div>

        {/* Redes sociais */}
        <div className="text-white w-full md:w-1/4 self-start md:self-end mb-6 flex flex-col gap-4">
          <p>Acompanhe nas redes</p>
          <div className="flex flex-row gap-3">
            <FaFacebook className="text-white" size={25} />
            <FaSquareInstagram className="text-white rounded-full" size={25} />
          </div>
        </div>

        {/* Contato */}
        <div className="text-white w-full md:w-1/4 flex flex-col md:items-end">
          <p className="md:text-right mb-4">
            Duis aute irure dolor in reprehenderit in voluptate velit esse
            cillum dolore
          </p>
          <div className="flex flex-col mb-4 md:text-right">
            <p className="font-semibold">(11) 9909-9091</p>
            <p>contato@liva.com.br</p>
          </div>
          <button className="flex flex-row items-center mb-4 gap-3 bg-[#1AA584] px-4 py-2 rounded-sm cursor-pointer">
            <MdWhatsapp size={25} className="text-white" />
            <p className="uppercase text-white">whatsapp</p>
          </button>
        </div>
      </div>

      {/* Rodapé */}
      <div className="w-full text-[#6F6F6F] border-t border-t-gray-600 flex flex-col md:flex-row justify-between items-center py-4 gap-2">
        <small>Liva © 2022 Todos os direitos reservados.</small>
        <small className="uppercase font-semibold">Febacapital</small>
      </div>
    </div>
  );
};

export default Footer;
