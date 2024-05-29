"use client";
import React from "react";
import dynamic from "next/dynamic";

const AnimatedNumbers = dynamic(
  () => {
    return import("react-animated-numbers");
  },
  { ssr: false }
);

const scoreList = [
  {
    metric: "Challenges and Tasks",
    value: "100",
    postfix: "+",
  },
  {
    prefix: "~",
    metric: "Hours of courses",
    value: "210,000",
  },
  {
    metric: "Team Projects",
    value: "45",
  },
  {
    metric: "Solo Projects",
    value: "67",
  },
];

const ScoreSection = () => {
  return (
    <div className="py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
      <div className="sm:border-[#008DBA] sm:border rounded-md py-8 px-16 flex flex-col sm:flex-row items-center justify-between">
        {scoreList.map((score, index) => {
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center mx-4 my-4 sm:my-0"
            >
              <h2 className="text-white text-4xl font-bold flex flex-row">
                {score.prefix}
                <AnimatedNumbers
                  includeComma
                  animateToNumber={parseInt(score.value)}
                  locale="en-US"
                  className="text-white text-4xl font-bold"
                  configs={(_, index) => {
                    return {
                      mass: 1,
                      friction: 100,
                      tensions: 140 * (index + 1),
                    };
                  }}
                />
                {score.postfix}
              </h2>
              <p className="text-[#ADB7BE] text-base">{score.metric}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ScoreSection;
