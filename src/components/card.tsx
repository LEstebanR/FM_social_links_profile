import { FC } from "react";

type CardProps = {
  info: {
    name: string;
    avatar: string;
    location: string;
    career: string;
    socialNetworks: {
      name: string;
      link: string;
    }[];
  };
};

const Card: FC<CardProps> = ({ info }) => {
  return (
    <main className="flex max-h-card w-11/12 max-w-card flex-col items-center gap-6   rounded-xl bg-darkGrey p-10 font-sans">
      <img src={info.avatar} className="h-16 rounded-full" alt="avatar" />
      <div className="flex flex-col">
        <h1 className="text-2xl text-white">{info.name}</h1>
        <p className="text-sm font-bold text-primary">{info.location}</p>
      </div>

      <p className="text-sm font-thin text-white">"{info.career}".</p>
      <div className="flex w-full flex-col gap-4">
        {info.socialNetworks.map((network, index) => (
          <a key={index} href={network.link} className="w-full">
            <div className="flex h-11 w-full items-center justify-center rounded-lg bg-grey text-white hover:bg-primary hover:text-black">
              <p className="text-sm ">{network.name}</p>
            </div>
          </a>
        ))}
      </div>
    </main>
  );
};

export default Card;
