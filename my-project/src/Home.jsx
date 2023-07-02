import github from "../public/github.png";
import linkedin from "../public/linkedin.png";
import instagram from "../public/instagram.png";
import telegram from "../public/telegram.png";
import avatar from "../public/dev-ed-wave.png";
import back from "../public/cod.svg";

export default function Home() {
  return (
    <div className="relative pt-32 pb-48 bg-secondary text-subsec">
      <img
        src={back}
        alt="Background"
        className="absolute top-0 left-0 w-screen h-screen object-cover opacity-50 z-0"
      />
      <div className="hero flex items-center justify-center relative z-10">
        <img
          src={avatar}
          alt="My personal Avatar"
          className="rounded-full w-96 h-87 ml-64 mr-12 bg-primary"
        />
        <div className="flex flex-col items-center">
          <h1 className="text-4xl font-bold p-4 text-subprim">
            Entry-Level Web Developer
          </h1>
          <h2 className="text-center text-primary">
            Biomedical Engineering student with a passion for frontend
            development and computer science.
          </h2>
          <div className="socials grid grid-cols-2 p-2 bg-subsec rounded-2xl m-6">
            <a href="https://github.com/shanshal" className="p-2">
              <img src={github} alt="Github icon" />
            </a>
            <a
              href="https://www.linkedin.com/in/ahmed-mahdi-8971b1224"
              className="p-2"
            >
              <img src={linkedin} alt="LinkedIn Icon" />
            </a>
            <a href="https://www.instagram.com/zpace_cowboy" className="p-2">
              <img src={instagram} alt="Instagram Icon" />
            </a>
            <a href="https://t.me/zpace" className="p-2">
              <img src={telegram} alt="Telegram icon" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
