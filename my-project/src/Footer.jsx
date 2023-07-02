import html from "../public/html.png";
import c from "../public/c.png";
import js from "../public/js.png";
import reactl from "../public/reactl.png";
import linux from "../public/linux.png";
import css from "../public/css.png";
import { Link, animateScroll as scroll } from "react-scroll";

export default function Footer() {
    const scrollBack = () => {
        scroll.scrollToTop({
          duration: 500,
          smooth: true,
        });
      };


  return (
    <div className="footer flex pb-8 bg-secondary text-primary">
      <div className="Hello flex flex-col items-center w-1/3 mt-16 ml-8">
        <p>Say Hello!</p>
        <a href="https://t.me/zpace">@zpace</a>
        <a href="ahmedmahdii2003@gmail.com">ahmedmahdii2003@gmail.com</a>
      </div>
      <div className="w-1/3 text-center mt-16">
      <button
            type="button"
            class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-secondary text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
            onClick={scrollBack}
          >
            Scroll Back
          </button>
      </div>
      <div className="Tooling grid justify-center items-center w-1/3 mt-16 ">
        <h2 className="mb-8 border border-primary rounded-2xl text-center">Tooling</h2>
        <div className="grid grid-cols-3 gap-4">
          <img src={html} alt="html" />
          <img src={css} alt="css" />
          <img src={js} alt="javascript" />
          <img src={reactl} alt="react" className="w-50 h-50" />
          <img src={linux} alt="linux" />
          <img src={c} alt="C language" />
        </div>
      </div>
    </div>
  );
}
