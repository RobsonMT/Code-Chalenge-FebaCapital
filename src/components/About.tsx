const About = () => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start max-w-7xl mx-auto px-6 py-16">
      {/* Banner / imagem */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/images/pexels.png"
          alt="Banner About"
          className="w-full h-full object-cover rounded-lg shadow-lg"
        />
      </div>

      {/* Conteúdo */}
      <div className="w-full md:w-1/2 md:pl-12 mt-8 md:mt-0 text-left">
        <h2 className="text-5xl mb-4 font-light">
          Construimos confiança e{" "}
          <span className="font-medium text-[#1AA584]">realizamos sonhos!</span>
        </h2>
        <p className="text-lg text-gray-700 mb-6">
          Na Liva, cada projeto é planejado para facilitar a vida dos moradores,
          trazendo uma sensação máxima de bem-estar.Espaços que obrigam
          histórias de vida e que são desenvolvidos para que você viva momentos
          incríveis ao lado da sua familia.
        </p>
        <button className="px-4 py-2 border-2 rounded-lg text-lg font-medium transition-colors cursor-pointer">
          Saiba mais
        </button>
      </div>
    </div>
  );
};

export default About;
