import Link from "next/link";
import { IconType } from "react-icons";

interface Props {
  Icon: IconType;
  name: string;
  url: string;
}

const SocialMediaCard = ({ Icon, name, url }: Props) => {
  return (
    <Link href={url}>
      <div className="flex flex-col h-auto w-aut p-8 items-start cursor-pointer items-center justify-items-center">
        <Icon size="5em" />
        <div className="flex flex-col p-2 sm:p-1">
          <a target="_blank" className="text-black font-xl sm:text-center">
            {name}
          </a>
        </div>
      </div>
    </Link>
  );
};

export default SocialMediaCard;
