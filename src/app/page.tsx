import Image from "next/image";
import React from "react";
import { aboutMe, workExperience, projects } from "@/data";

const getData = () => {
  return {
    data: { about: aboutMe, works: workExperience, projects },
  };
};

export default function Home() {
  const {
    data: { about, works, projects },
  } = getData();

  return (
    <div className="flex flex-col  lg:items-center items-stretch justify-center mt-8">
      <h1 className="font-bold text-xl text-center">{"<World of Coding />"}</h1>

      <div className="bg-[url(/grid.svg)] h-[53.5rem] mt-16 mx-2">
        <div className="flex flex-row justify-between items-center">
          <div className="mx-2 flex flex-row items-center gap-4">
            <Image
              src={about.avatar}
              width={65}
              height={65}
              className="rounded-full"
              alt="Abdi Zamed's Avatar"
            />
            <div>
              <h1>{about.name}</h1>
              <div
                dangerouslySetInnerHTML={{ __html: about.bio }}
                className="text-sm opacity-80"
              />
            </div>
          </div>

          <div>
            <h2>{about.experience} years of experience</h2>
          </div>
        </div>
        {/* hero about me */}
        <div className="max-w-[810px] mt-[35px] px-4">
          <p className="opacity-80">{about.description}</p>
        </div>
        {/* work experience */}
        <div className="max-w-[850px] mt-[35px] px-4">
          <h1 className="underline text-xl font-bold">Work Experience</h1>
          {works.map(({ name, endDate, startDate, description }, index) => (
            <div className="mt-[21px]" key={index}>
              <div className="flex justify-between opacity-80">
                <h1 className="font-bold">{name}</h1>
                <h1>
                  {startDate} - {endDate}
                </h1>
              </div>
              <p className="pt-4">{description}</p>
            </div>
          ))}
        </div>
        {/* personal projects */}
        <div className="max-w-[850px] mt-[35px] px-4">
          <h1 className="underline text-xl font-bold">Projects</h1>
          {projects.map(({ title, description, link, githubUrl }, index) => (
            <div
              className="mt-[21px] flex md:flex-row flex-col gap-12 justify-center "
              key={index}
            >
              <div className="bg-gray-100  h-[225px] w-[225px] rounded-3xl" />

              <div className="md:w-[500px] w[250px]">
                <h1>{title}</h1>
                <p className="my-4 opacity-80">{description}</p>
                <button className="bg-gray-950 rounded-lg text-white p-2.5">
                  Visit Here
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
