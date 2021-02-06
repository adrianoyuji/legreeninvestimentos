interface Props {
  imgurl: string;
  name: string;
  testimony: string;
  alt: string;
}

const CaseCard = ({ imgurl, name, testimony, alt }: Props) => {
  return (
    <div className="flex flex-col h-auto w-aut p-8 items-start items-center justify-items-center">
      <div className="h-auto w-1/2">
        <img src={imgurl} alt={alt} className="casecard-img" />
      </div>
      <div className="flex flex-col p-2 sm:p-1">
        <b className="text-white font-xl sm:text-center ">{name}</b>
        <p className="text-white font-xl sm:text-center ">"{testimony}"</p>
      </div>
    </div>
  );
};

export default CaseCard;
