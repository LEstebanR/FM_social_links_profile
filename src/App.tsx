import Card from "./components/card";

const CARD_INFO = {
  name: "Jessica Randall",
  avatar: "/avatar-jessica.jpeg",
  location: "London, United Kingdom",
  career: "Front-end developer and avid reader",
  socialNetworks: [
    {
      name: "GitHub",
      link: "#",
    },
    {
      name: "Frontend Mentor",
      link: "#",
    },
    {
      name: "LinkedIn",
      link: "#",
    },
    {
      name: "Twitter",
      link: "#",
    },
    {
      name: "Instagram",
      link: "#",
    },
  ],
};

function App() {
  return (
    <div className="flex min-h-screen min-w-full items-center justify-center bg-black">
      <Card info={CARD_INFO} />
    </div>
  );
}

export default App;
