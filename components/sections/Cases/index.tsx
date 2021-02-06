import CaseCard from "components/cards/CaseCard";

const Cases = () => {
  return (
    <section className="h-auto w-screen flex flex-col p-4">
      <b className="text-white text-3xl md:text-4xl pb-2">Cases de Sucesso</b>
      <div className="flex flex-col h-auto p w-full sm:flex-row p-4 items-center">
        <CaseCard
          name="Aluísio Chulapa"
          imgurl="https://p2.trrsf.com/image/fget/cf/1200/1200/filters:quality(85)/images.terra.com/2018/03/22/5ab36868c3c3c.jpeg"
          alt="placeholder"
          testimony="Ainda bem que decidi participar do grupo de apostas da Le Green, depois que o 7 faliu quase tive que parar de tomar danone, mas graças aos meninos hoje estou mais rico do que nunca. #MIMACHER"
        />
        <CaseCard
          name="Agostinho Carrara"
          imgurl="https://www.hypeness.com.br/1/2019/07/Pedro-Cardoso-Agostinho-Carrara-1-1.jpg"
          alt="placeholder"
          testimony="Parei de apostar meu dinheiro no jogo do bicho e investi no grupo, hoje consegui comprar um vw Santana 2.0 AP ano 2000 só com o dinheiro das apostas   , isso sim que é vida."
        />
        <CaseCard
          name="Cristiano Ronaldo"
          imgurl="https://pbs.twimg.com/profile_images/472584058350735360/SajLeRPI.jpeg"
          alt="placeholder"
          testimony="Sou lindo."
        />
      </div>
    </section>
  );
};

export default Cases;
