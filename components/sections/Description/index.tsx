import Image from "next/image";
const Description = () => {
  return (
    <section className="h-auto w-screen flex flex-col p-4">
      <div className="flex flex-col h-auto p w-full lg:flex-row ">
        <div className="flex flex-1 w-full items-start justify-center">
          <div className="w-3/4 h-3/4 2xl:w-1/2 2xl:h-1/2 my-8">
            <Image
              className="rounded-full"
              src="/images/description-image.jpg"
              alt="profile pic"
              height="100%"
              width="100%"
              layout="responsive"
            />
          </div>
        </div>
        <div className="flex flex-1 flex-col">
          <p className="text-white text-lg sm:text-xl py-2">
            Somos uma empresa especializada em investimentos esportivos, atuando
            há mais de 5 anos no mercado. Focada em futebol brasileiro e
            desportos em geral, sempre prezando pela transparência e honestidade
            com nossos clientes!
          </p>
          <p className="text-white text-lg sm:text-xl py-2">
            Somos uma empresa especializada em investimentos esportivos, atuando
            há mais de 5 anos no mercado. Focada em futebol brasileiro e
            desportos em geral, sempre prezando pela transparência e honestidade
            com nossos clientes! Após a experiência adquirida ao longo dos anos,
            decidimos expandir nossos horizontes e tornar público o nosso
            trabalho.
          </p>
          <p className="text-white text-lg sm:text-xl py-2">
            Tendo em vista o crescimento das apostas esportivas no Brasil,
            decidimos então dar andamento neste novo projeto. Como padrão em
            investimentos de renda váriavel, todo o trabalho é focado em longo
            prazo, trazendo assim um desenvolvimento consistente com o passar
            dos meses e nos dando mais segurança ao passar pelos meses de
            variância negativa.
          </p>
          <p className="text-white text-lg sm:text-xl py-2">
            Chegamos para difundir as apostas esportivas em nosso estado de Mato
            Grosso do Sul e no Brasil, trazendo uma fonte de renda antes vista
            com maus olhos, mas que agora vem ganhando seu espaço e mostrando
            ser muito mais do que apenas um hobby!
          </p>
        </div>
      </div>
    </section>
  );
};

export default Description;
