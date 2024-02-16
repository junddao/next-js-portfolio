"use client";

import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import { useRef } from "react";

const Page = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef);

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef);

  console.log(scrollYProgress);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* Container */}
      <div className="h-full overflow-scroll lg:flex " ref={containerRef}>
        {/* text container */}
        <div className="p-4 sm:p-8 md:p-12  lg:p-20 xl:p-48 flex flex-col gap-40 md:gap-52 lg:gap-y-64 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* biography container */}
          <div className="flex flex-col gap-12 justify-center ">
            {/* TITLE */}
            <h1 className="text-4xl md:text-2xl font-bold">About Me</h1>
            {/* DESCRIPTION */}
            <p className="md:text-lg">
              Flutter 잘하는 개발자입니다.
              <br />
              <br /> 이 포트폴리오는 Next.js로 만들어 졌습니다.
              <br /> 언어는 필요할 때 배우는게 가장 빠르다는걸
              <br /> 이 포트폴리오를 만들면서 다시 알게되었습니다.
              <br />
              <br /> 취미는 깃허브 잔디 심기, 특기는 사이드 프로젝트 뿌시기
              입니다.
              <div className="h-5"></div>
              코딩말고 프로젝트 하고 싶은 개발자 입니다.
            </p>

            <span className="italic">
              오늘 내가 짠 코드는 GPT가 더 잘짜더라..
            </span>
            <div className="self-end">
              <svg
                width="185"
                height="77"
                viewBox="0 0 3072 2036"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g filter="url(#filter0_d_1451_2165)">
                  <path
                    d="M29.9375 2002.94C29.9375 1313.7 272.58 559.577 771.525 70.6111C875.642 -31.4235 861.075 59.5931 861.075 158.762C861.075 369.692 866.023 582.589 842.885 792.609C823.126 971.96 782.633 1149.62 715.556 1317.32C692.925 1373.9 684.916 1393.75 670.781 1327.11C623.911 1106.16 670.357 909.561 810.703 726.846C869.959 649.7 1296.41 348.726 1364.79 544.947C1487.54 897.186 1366.01 1379.43 1300.43 1731.49C1277.38 1855.24 1309.14 1536.16 1314.42 1499.22"
                    stroke="black"
                    stroke-width="50"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1616.65 1020.68C1616.65 1118.97 1593.21 1203.47 1566.28 1297.73"
                    stroke="black"
                    stroke-width="50"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1566.28 1524.4C1569.09 1653.5 1576.66 1782.26 1591.47 1910.59C1592.81 1922.19 1626.8 2048.42 1591.47 1977.75"
                    stroke="black"
                    stroke-width="50"
                    stroke-linecap="round"
                  />
                  <path
                    d="M1843.33 1171.8C1851.49 1416.77 1886.28 1660.05 1893.7 1904.99C1896.01 1981.35 1901.49 1760.22 1907.69 1730.09C1939.26 1576.78 2076.03 1499.22 2221.12 1499.22"
                    stroke="black"
                    stroke-width="50"
                    stroke-linecap="round"
                  />
                  <path
                    d="M2724.84 1423.66C2606.4 1447.34 2569.55 1693.59 2548.53 1784.66C2453.25 2197.55 2966.58 1641.84 3015.87 1500.62C3085.39 1301.45 3011.78 1073.42 2892.74 908.745C2806.26 789.109 2805.13 909.108 2800.39 995.497C2796.83 1060.46 2711.03 1552.02 2825.58 1322.91"
                    stroke="black"
                    stroke-width="50"
                    stroke-linecap="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_1451_2165"
                    x="0.9375"
                    y="0.868164"
                    width="3070.9"
                    height="2035.07"
                    filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB"
                  >
                    <feFlood flood-opacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="2" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_1451_2165"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_1451_2165"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          {/* skills container */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* skills title */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-2xl font-bold"
            >
              SKILL
            </motion.h1>
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex flex-col gap-4"
            >
              {/* skills list */}
              <div className="font-bold">Mobile</div>
              <div className="gap-4 flex flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Flutter
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Android
                </div>
              </div>
              <div className="font-bold">Web</div>
              <div className="gap-4 flex flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Javascript
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  ReactJS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  NextJS
                </div>
              </div>
              <div className="font-bold">Server</div>
              <div className="gap-4 flex flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  NestJS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  AWS
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Supabase
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Firebase
                </div>
              </div>
              <div className="font-bold">Other Languages</div>
              <div className="gap-4 flex flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  C#
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  WPF
                </div>
              </div>
              <div className="font-bold">ETC</div>
              <div className="gap-4 flex flex-wrap">
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Firebase
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Supabase
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Figma
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Slack
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Jira
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Bitbucket
                </div>
                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black ">
                  Github
                </div>
              </div>
            </motion.div>
          </div>

          {/* experience container */}
          <div
            className="flex flex-col gap-12 justify-center"
            ref={experienceRef}
          >
            {/* TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isExperienceRefInView ? { x: 0 } : {}}
              className="text-4xl md:text-2xl font-bold"
            >
              EXPERIENCE
            </motion.h1>
            {/* experience list */}
            <div className="">
              {/* experience list item */}
              <div className="flex justify-between h-60">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg w-fit">
                    생산기술 자동화 개발자
                  </div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">
                    C#, WPF로 검사 프로그램 개발 및 장비 소프트웨어 개발
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2010 - 2018
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    삼성테크윈
                  </div>
                </div>
                {/* center */}
                <div className="w=1/6 bg-red-600">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -left-2 bg-white "></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* experience list item */}
              <div className="flex justify-between h-60">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w=1/6 bg-red-600">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -left-2 bg-white "></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Project Manager
                  </div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">
                    로보틱스 사업부문 PM, 로봇 개발 프로젝트 관리
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2018 - 2021
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    현대중공업지주(로보틱스)
                  </div>
                </div>
              </div>
              {/* experience list item */}
              <div className="flex justify-between h-60">
                {/* left */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg w-fit">
                    CTO
                  </div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">
                    제조 매칭 플랫폼 스타트업 CTO, 서비스 기획 및 개발
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 2021
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    Credi.co
                  </div>
                </div>
                {/* center */}
                <div className="w=1/6 bg-red-600">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -left-2 bg-white "></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3"></div>
              </div>
              {/* experience list item */}
              <div className="flex justify-between h-60">
                {/* left */}
                <div className="w-1/3"></div>
                {/* center */}
                <div className="w=1/6 bg-red-600">
                  {/* line */}
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    {/* line circle */}
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 -left-2 bg-white "></div>
                  </div>
                </div>
                {/* right */}
                <div className="w-1/3">
                  {/* job title */}
                  <div className="p-3 bg-white font-semibold rounded-b-lg rounded-s-lg w-fit">
                    Flutter Developer
                  </div>
                  {/* job description */}
                  <div className="p-3 text-sm italic">
                    현재는 플러터 개발자로 살아가고 있습니다.
                  </div>
                  {/* job date */}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    2021 - 현재
                  </div>
                  {/* job company */}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    휴피스
                  </div>
                  <div className="h-10"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* svg container */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:1/2">
          <Brain scrollYProgress={scrollYProgress}></Brain>
        </div>
      </div>
    </motion.div>
  );
};

export default Page;
