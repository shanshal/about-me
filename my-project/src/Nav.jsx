import { Link, animateScroll as scroll } from "react-scroll";

export default function Nav() {
  return (
    <div className="Nav flex justify-between bg-primary opacity-100 text-subprim">
      <div className="title pl-4 pt-4 text-2xl w-1/2 text-subsec">
        Ahmed Mahdi Shanshal
      </div>
      
      <div className="rout flex justify-between w-1/2">
      <div className="w-1/2 text-center pt-4 pb-4 font-bold hover:bg-subprim hover:border-secondary transition-all hover:text-primary hover:font-italic">
        Home
      </div>
        <Link
          activeClass="active"
          to="about"
          spy={true}
          smooth={true}
          offset={-130}
          duration={500}
          className="w-1/2 text-center pt-4 pb-4 font-bold hover:bg-subprim hover:border-secondary transition-all hover:text-primary hover:font-italic"
        >
          About
        </Link>
      </div>
    </div>
  );
}
