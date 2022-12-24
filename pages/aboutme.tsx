/* eslint-disable react/no-unescaped-entities */
import userData from "../constants/userData";

import ReactGithubCalender from "../components/ReactGithubCalender";
import Image from "next/image";

import LeetCodeStats from "../components/LeetCodeStats";
import Header from "../components/header";

const AboutMe = () => {
  return (
    <div>
      <Header />
      <section className=" bg-grey-500 ">
        <div className="max-w-6xl mx-auto h-48">
          <h1 className=" text-5xl md:text-9xl font-bold py-20 text-center md:text-left">
            About Me.
          </h1>
        </div>
        <div className=" -mt-10">
          <div className="text-container max-w-6xl mx-auto pt-20">
            <p
              className="leading-loose text-2xl md:text-4xl font-semibold mx-4"
              style={{ lineHeight: "3rem" }}
            >
              {userData.about.title}.
              <div className="indicator">
                {/* <a
                  className="bg-red-500 rounded-md px-2 py-1 text-white"
                  href={userData.about.currentProjectUrl}
                > */}
                {/* {userData.about.currentProject} ✈️ */}
                {/* </a> */}
              </div>
            </p>
          </div>
        </div>
        <div className="px-4">
          <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
            {/* Social Buttons */}
            <div className="inline-flex flex-col">
              <div>
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Contact
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  For any sort help / enquiry, shoot a{" "}
                  <a
                    href={`mailto:${userData.email}`}
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    mail
                  </a>{" "}
                  and I'll get back. I swear.
                </p>
              </div>
              <div className="mt-8">
                <h1 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                  Job Opportunities
                </h1>
                <p className="text-lg text-gray-500 mt-4 dark:text-gray-300">
                  I'm looking for a job currently, If you see me as a good fit,
                  check my{" "}
                  <a
                    href={userData.resumeUrl}
                    target="__blank"
                    className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                  >
                    CV
                  </a>{" "}
                  and I'd love to work for you.
                </p>
              </div>
              {/* Social Links */}
              <h1 className="text-xl font-semibold text-gray-700 mt-8 dark:text-gray-200">
                Social Links
              </h1>
              <div className="mt-4 ml-4">
                <div className="flex flex-row justify-start items-center ">
                  <a
                    href={userData.socialLinks.leetcode}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      Leetcode
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.codechef}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      CodeChef
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.github}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      GitHub
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.linkedin}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-24 group-hover:translate-x-0 transition duration-300"></div>
                      LinkedIn
                    </p>
                  </a>
                </div>
                <div className="flex flex-row justify-start items-center">
                  <a
                    href={userData.socialLinks.instagram}
                    className="flex flex-row items-center space-x-4 group"
                  >
                    <div className="my-4">&rarr;</div>
                    <p className="text-lg text-gray-500 font-mono relative overflow-hidden dark:text-gray-300">
                      <div className="absolute h-0.5 w-full bg-gray-400 bottom-0 transform -translate-x-28 group-hover:translate-x-0 transition duration-300"></div>
                      Instagram
                    </p>
                  </a>
                </div>
              </div>
            </div>
            <div className="col-span-1 md:col-span-2">
              {/* <ReactGithubCalendar name="emharsha1812" /> */}
              <span className="!text-white">
                <ReactGithubCalender />
              </span>
              {/* {userData.about.description?.map((desc, idx) => (
                <p
                  key={idx}
                  className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
                >
                  {desc}
                </p>
              ))} */}

              <LeetCodeStats />

              <h1 className="bg-red-500 text-3xl rounded-md px-2 py-1 inline-block font-bold text-gray-50">
                Tech Stack
              </h1>
              <div className="flex flex-row flex-wrap mt-8 gap-x-8 gap-y-4">
                {/* Images */}
                <Image
                  alt="Python"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg"
                  className="h-20 w-20 mx-4 my-4"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                  alt="HTML5"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"
                  alt="TypeScript"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg"
                  alt="cplusplus"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ruby/ruby-original.svg"
                  alt="Ruby"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4 text-white"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/solidity/solidity-original.svg"
                  alt="Solidity"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg"
                  alt="GraphQL"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firebase/firebase-plain.svg"
                  alt="Firebase"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg"
                  alt="Google Cloud"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg"
                  alt="nextjs"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg"
                  alt="Tailwind CSS"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg"
                  alt="Figma"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg"
                  alt="Tensorflow"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kaggle/kaggle-original-wordmark.svg"
                  alt="kaggle"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg"
                  alt="OpenCV"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg"
                  alt="Pytorch"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original-wordmark.svg"
                  alt="pandas"
                  height={80}
                  width={80}
                />
                <Image
                  className="h-20 w-20 mx-4 my-4"
                  src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg"
                  alt="Numpy"
                  height={80}
                  width={80}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutMe;
