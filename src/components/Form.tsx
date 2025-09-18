"use client";

import Image from "next/image";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";

const schema = yup.object({
  nome: yup.string().required("O nome é obrigatório"),
  telefone: yup
    .string()
    .matches(/^\d{10,11}$/, "Telefone inválido")
    .required("O telefone é obrigatório"),
  email: yup
    .string()
    .email("E-mail inválido")
    .required("O e-mail é obrigatório"),
  mensagem: yup
    .string()
    .min(10, "A mensagem deve ter pelo menos 10 caracteres")
    .required("Mensagem é obrigatório"),
});

type FormData = yup.InferType<typeof schema>;

const Form = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<FormData>({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: FormData) => {
    setIsSuccess(false);

    try {
      // simula envio (ex: API)
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setIsSuccess(true);
      reset(); // limpa o formulário
    } catch (error) {
      console.error("Erro ao enviar:", error);
    }
  };

  return (
    <div
      id="noticias"
      className="min-w-full flex flex-col md:flex-row items-stretch max-w-7xl mx-auto py-16 relative"
    >
      {/* Conteúdo */}
      <div className="w-full h-full md:w-1/2 md:pl-12 md:mt-0 px-6 pt-40 text-left bg-black flex flex-col justify-center gap-4">
        <h2 className="text-5xl text-white mb-4 font-semibold pr-6 md:pr-40 lg:pr-60">
          Fale agora com um consultor de venda
        </h2>
        <p className="text-lg text-white mb-6 pr-15">
          Tire suas dúvidas e conheça de perto o seu novo jeito de morar.
        </p>

        {/* Form no mobile */}
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="block md:hidden w-full mb-6"
        >
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-md shadow-lg w-full">
            <h3 className="mb-5 text-lg font-semibold">
              Fale agora mesmo com a Liva
            </h3>

            {/* Nome */}
            <div className="relative w-full h-[55px] border-2 border-black rounded-sm flex items-center mb-1">
              <input
                type="text"
                id="nome"
                placeholder=" "
                {...register("nome")}
                className="peer w-full border-none outline-none px-3 text-gray-900 placeholder-transparent h-full"
              />
              <label
                htmlFor="nome"
                className="absolute left-3 transition-all
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                Nome
              </label>
            </div>
            {errors.nome && (
              <p className="text-red-500 text-xs mb-3">{errors.nome.message}</p>
            )}

            {/* Telefone */}
            <div className="relative w-full h-[55px] border-2 border-black rounded-sm flex items-center mb-1">
              <input
                type="text"
                id="telefone"
                placeholder=" "
                {...register("telefone")}
                className="peer w-full border-none outline-none px-3 text-gray-900 placeholder-transparent h-full"
              />
              <label
                htmlFor="telefone"
                className="absolute left-3 transition-all
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                Telefone
              </label>
            </div>
            {errors.telefone && (
              <p className="text-red-500 text-xs mb-3">
                {errors.telefone.message}
              </p>
            )}

            {/* Email */}
            <div className="relative w-full h-[55px] border-2 border-black rounded-sm flex items-center mb-1">
              <input
                type="email"
                id="email"
                placeholder=" "
                {...register("email")}
                className="peer w-full border-none outline-none px-3 text-gray-900 placeholder-transparent h-full"
              />
              <label
                htmlFor="email"
                className="absolute left-3 transition-all
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                E-mail
              </label>
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mb-3">
                {errors.email.message}
              </p>
            )}

            {/* Mensagem */}
            <div className="relative w-full border-2 border-black rounded-sm mb-1">
              <textarea
                id="mensagem"
                rows={4}
                placeholder=" "
                {...register("mensagem")}
                className="peer w-full border-none outline-none py-4 px-3 text-gray-900 placeholder-transparent resize-none"
              ></textarea>
              <label
                htmlFor="mensagem"
                className="absolute left-3 top-3 transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                Mensagem
              </label>
            </div>
            {errors.mensagem && (
              <p className="text-red-500 text-xs mb-3">
                {errors.mensagem.message}
              </p>
            )}

            {/* Botão */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-3 bg-[#1AA584] px-4 py-2 rounded-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <p className="uppercase text-white text-center">
                {isSubmitting
                  ? "enviando mensagem..."
                  : isSuccess
                  ? "mensagem enviada!"
                  : "enviar mensagem"}
              </p>
            </button>
          </div>
        </form>

        {/* Consultores */}
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

      {/* Banner + Form desktop */}
      <div className="hidden md:block md:w-1/2 relative">
        <img
          src="/images/pexels-1.png"
          alt="Banner About"
          className="w-full h-full object-cover"
        />

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="bg-white/90 backdrop-blur-md p-6 rounded-md shadow-lg w-96">
            <h3 className="mb-5 text-lg font-semibold">
              Fale agora mesmo com a Liva
            </h3>

            {/* Nome */}
            <div className="relative w-full h-[55px] border-2 border-black rounded-sm flex items-center mb-1">
              <input
                type="text"
                id="nome"
                placeholder=" "
                {...register("nome")}
                className="peer w-full border-none outline-none px-3 text-gray-900 placeholder-transparent h-full"
              />
              <label
                htmlFor="nome"
                className="absolute left-3 transition-all
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                Nome
              </label>
            </div>
            {errors.nome && (
              <p className="text-red-500 text-xs mb-3">{errors.nome.message}</p>
            )}

            {/* Telefone */}
            <div className="relative w-full h-[55px] border-2 border-black rounded-sm flex items-center mb-1">
              <input
                type="text"
                id="telefone"
                placeholder=" "
                {...register("telefone")}
                className="peer w-full border-none outline-none px-3 text-gray-900 placeholder-transparent h-full"
              />
              <label
                htmlFor="telefone"
                className="absolute left-3 transition-all
              peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
              peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                Telefone
              </label>
            </div>
            {errors.telefone && (
              <p className="text-red-500 text-xs mb-3">
                {errors.telefone.message}
              </p>
            )}

            {/* Email */}
            <div className="relative w-full h-[55px] border-2 border-black rounded-sm flex items-center mb-1">
              <input
                type="email"
                id="email"
                placeholder=" "
                {...register("email")}
                className="peer w-full border-none outline-none px-3 text-gray-900 placeholder-transparent h-full"
              />
              <label
                htmlFor="email"
                className="absolute left-3 transition-all
            peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
            peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                E-mail
              </label>
            </div>
            {errors.email && (
              <p className="text-red-500 text-xs mb-3">
                {errors.email.message}
              </p>
            )}

            {/* Mensagem */}
            <div className="relative w-full border-2 border-black rounded-sm mb-1">
              <textarea
                id="mensagem"
                rows={4}
                placeholder=" "
                {...register("mensagem")}
                className="peer w-full border-none outline-none py-4 px-3 text-gray-900 placeholder-transparent resize-none"
              ></textarea>
              <label
                htmlFor="mensagem"
                className="absolute left-3 top-3 transition-all
                  peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400
                  peer-not-placeholder-shown:top-1 peer-not-placeholder-shown:text-sm peer-not-placeholder-shown:text-gray-700"
              >
                Mensagem
              </label>
            </div>
            {errors.mensagem && (
              <p className="text-red-500 text-xs mb-3">
                {errors.mensagem.message}
              </p>
            )}

            {/* Botão */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full flex justify-center items-center gap-3 bg-[#1AA584] px-4 py-2 rounded-sm cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
            >
              <p className="uppercase text-white text-center">
                {isSubmitting
                  ? "enviando mensagem..."
                  : isSuccess
                  ? "mensagem enviada!"
                  : "enviar mensagem"}
              </p>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Form;
