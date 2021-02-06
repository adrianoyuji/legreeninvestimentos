import SocialMediaCard from "components/cards/SocialMediaCard";
import { FaInstagram, FaFacebook, FaWhatsapp } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <section className="h-auto w-screen flex flex-col p-4 bg-limegreen">
      <b className="text-black text-3xl md:text-4xl pb-2">
        Acesse nossas redes sociais
      </b>
      <div className="flex flex-row h-auto w-full p-4 overflow-x-auto">
        <div className="flex-1">
          <SocialMediaCard
            Icon={FaInstagram}
            name="Instagram"
            url="https://www.instagram.com/legreeninvest/"
          />
        </div>
        <div className="flex-1">
          <SocialMediaCard
            Icon={FaFacebook}
            name="Facebook"
            url="https://www.instagram.com/legreeninvest/"
          />
        </div>
        <div className="flex-1">
          <SocialMediaCard
            Icon={FaWhatsapp}
            name="WhatsApp"
            url="https://api.whatsapp.com/send?phone=5567992968778&text=Ol%C3%A1,%20gostaria%20de%20come%C3%A7ar%20a%20lucrar%20com%20o%20grupo%20de%20picks!"
          />
        </div>
      </div>
    </section>
  );
};

export default SocialMedia;
