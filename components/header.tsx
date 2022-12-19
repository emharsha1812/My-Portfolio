import Link from "next/link";
import React from "react";

const Header: React.FC = () => (
  <header className="!bg-gray-900 sm:h-20 py-5 sticky z-50  sm:sticky top-0 dark">
    <div className="max-w-5xl mx-auto px-6">
      <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-between items-center">
        <div className="flex flex-col sm:flex-row items-center mb-4 sm:mb-0">
          {/* <img
            src="/react-bricks-logo.svg"
            className="w-48"
            alt="React Bricks"
          /> */}
          <div className="sm:ml-8 flex space-x-5 text-center text-lg">
            <Link href="/">
              <a className="text-gray-500 hover:text-green-400 hover:animate-pulse  ">
                Home
              </a>
            </Link>
            <Link href="/aboutme">
              <a className="text-gray-500 hover:text-green-400 hover:animate-pulse ">
                About Me
              </a>
            </Link>
            <Link href="/blog">
              <a className="text-gray-500 hover:text-green-400 hover:animate-pulse">
                Blog
              </a>
            </Link>
            {/* <Link href="/webdev2">
              <a className="text-gray-500 hover:text-green-400 hover:animate-bounce">
                {" "}
                All Projects
              </a>
            </Link> */}
            <Link href="https://drive.google.com/drive/folders/1EnFGdxTofySPw0cih9aKFUzYoV69KziB?usp=share_link">
              <a
                // className="btn btn-outline btn-success"
                download="Harshwardhan's Resume"
                className="text-gray-500 hover:text-green-400 hover:animate-pulse"
              >
                Download CV
              </a>
            </Link>
          </div>
        </div>
        <Link href="/admin" prefetch={false}>
          <a className="py-2 px-5 rounded text-white font-medium bg-cyan-500 hover:bg-cyan-600 hover:shadow-lg transition duration-200">
            Edit content
          </a>
        </Link>
      </div>
    </div>
  </header>
);

export default Header;
