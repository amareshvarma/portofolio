import {  Linkedin, Insta, Git } from "../assets/icons";
const Hrader = () => {
  return (
    <header className="relative w-full p-[25px] overflow-hidden">
      <div className="flex justify-center sm:justify-end">
        <a href="https://github.com/amareshvarma" className="px-3 scale-100 hover:scale-110 duration-300">
          <Git />
        </a>
        <a href="https://www.instagram.com/baswanth_p/" className="px-3 scale-100 hover:scale-110 duration-300">
          <Insta />
        </a>
        <a href="https://www.linkedin.com/in/amaresh-varma" className="px-3 scale-100 hover:scale-110 duration-300">
          <Linkedin />
        </a>
      </div>
    </header>
  );
};

export default Hrader;
