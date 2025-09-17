import Image from "next/image";

const Form = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto px-6 py-16">
      {/* Conteúdo */}
      <div className="w-full h-screen md:w-1/2 md:pl-12 mt-8 md:mt-0 text-left bg-black">
        <h2 className="text-5xl text-white mb-4 font-semibold">
          Fale agora com um consultor de venda
        </h2>
        <p className="text-lg text-white mb-6">
          Tire suas dúvidas e conheço de perto o seu novo jeito de morar.
        </p>
        <div className="flex flex-col items-start">
          <p className="text-white mb-2">Consultores online</p>

          <div className="relative w-80 h-96 flex flex-col items-start">
            <div className="absolute left-0 z-10">
              <Image
                src="/images/image-1.png"
                alt="Imagem 1"
                width={50}
                height={50}
                className="rounded-full shadow-lg border-amber-50 border-4"
                priority
              />
            </div>

            {/* Imagem do meio */}
            <div className="absolute left-10 z-20">
              <Image
                src="/images/image-2.png"
                alt="Imagem 2"
                width={50}
                height={50}
                className="rounded-full shadow-lg border-amber-50 border-4"
                priority
              />
            </div>

            {/* Imagem de cima */}
            <div className="absolute left-20 z-30">
              <Image
                src="/images/image-3.png"
                alt="Imagem 3"
                width={50}
                height={50}
                className="rounded-full shadow-lg border-amber-50 border-4"
                priority
              />
            </div>
          </div>
        </div>
      </div>

      {/* Banner / imagem */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/images/pexels-1.png"
          alt="Banner About"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  );
};

export default Form;
