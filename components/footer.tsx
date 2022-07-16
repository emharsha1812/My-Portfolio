import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const Footer = () => {
  return (
    <footer className="bg-gray-900 border-t py-12 h-32 ">
      <div className="max-w-5xl mx-auto flex justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="/react-bricks-icon.svg"
            alt="React Bricks"
            className="w-8"
          />
          <div className="uppercase text-sm tracking-wider">
            Next.js website starter
          </div>
        </div>
        <div className="text-gray-500 md:place-self-center md:justify-self-end">
          © {new Date().getFullYear()}{" "}
          <a href="https://reactbricks.com" className="hover:text-pink-600">
            React Bricks
          </a>
          <a
            href="https://www.linkedin.com/in/emharsha1812/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin className="h-[4vh] w-[4vh]" />
          </a>
          <a
            href="https://www.instagram.com/emharsha_1812/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillInstagram className="h-[4vh] w-[4vh]" />
          </a>
          <a
            href="https://github.com/emharsha1812"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub className="h-[4vh] w-[4vh]" />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
