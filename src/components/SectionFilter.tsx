import Image from "next/image";
import { FaFilter } from "react-icons/fa";

const SectionFilter = () => {
  return (
    <div className="min-w-full max-w-7xl mx-auto px-8 py-16">
      <div className="flex flex-col md:flex-row justify-between mb-8">
        <h2 className="text-4xl sm:text-5xl mb-4 font-light flex flex-col">
          Confira todos os{" "}
          <span className="font-medium text-[#1AA584]">
            empreendimentos da Liva
          </span>
        </h2>

        <button className="h-[40px] w-full md:w-[135px] flex flex-row justify-center items-center md:self-end mb-4 gap-3 bg-black px-6 py-2 rounded-sm cursor-pointer">
          <FaFilter className="text-white" />
          <p className="uppercase text-white">filtros</p>
        </button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 p-0">
        <div className="w-full card col-span-1 sm:col-span-2 md:col-span-2 row-span-2 relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-9.png"}
            alt="bg-9"
            width={200}
            height={200}
          />
          <div className="absolute bottom-8 left-8 text-white text-shadow-lg">
            <span className="bg-white text-black font-bold text-xs px-2 py-2 rounded-sm">
              PRÉ-LANÇAMENTO
            </span>
            <h3 className="mt-2 text-xl font-semibold">HORIZONTE RESIDENCE</h3>
          </div>
        </div>

        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-3.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">ONE TOWER</h3>
          </div>
        </div>

        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-8.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">INFINITY COAST</h3>
          </div>
        </div>

        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-2.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">SKYLINE TOWER</h3>
          </div>
        </div>
        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-1.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">GRANDE PLACE TOWER</h3>
          </div>
        </div>
        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-4.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">IMPERIUM TOWER</h3>
          </div>
        </div>
        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-5.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">TITANIUM TOWER</h3>
          </div>
        </div>
        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-6.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">BLUE COST TOWER</h3>
          </div>
        </div>
        <div className="card relative">
          <Image
            className="w-full h-full object-cover"
            src={"/images/bg-7.png"}
            alt="bg-9"
            width={200}
            height={100}
          />
          <div className="absolute bottom-5 left-5 text-white text-shadow-lg">
            <h3 className="text-lg font-semibold">GRAND PLACE TOWER</h3>
          </div>
        </div>
      </div>
      <div className="min-w-full flex justify-center mt-10">
        <button className="uppercase h-[40px] px-4 py-0 border-gray-400 text-gray-400 border-2 rounded-sm text-lg font-medium transition-colors cursor-pointer">
          carregar mais
        </button>
      </div>
    </div>
  );
};

export default SectionFilter;
