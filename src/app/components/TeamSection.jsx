"use client";
import React, { useState, useRef } from "react";
import TeamCard from "./TeamCard";
import { motion, useInView } from "framer-motion";


<section
      id="cards"
    ></section>

const CardsData = [
  {
    id: 1,
    title: "Kennith Almond",
    description: "Not sure what he does.",
    image: "/images/profiles/sq4.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 2,
    title: "Ozzy Pistachio",
    description: "Project Manager",
    image: "/images/profiles/sq3.jpg",
    tag: ["All", "Web"],
  },
  {
    id: 3,
    title: "Dave Cashew",
    description: "Head of Design",
    image: "/images/profiles/sq3.jpg",
    tag: ["All", "Web"],
  },
];

const TeamSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredCards = CardsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section className="text-white" id="cards">
      <h2 className="text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12">
        Our Team
      </h2>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredCards.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <TeamCard
              key={project.id}
              title={project.title}
              description={project.description}
              imgUrl={project.image}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default TeamSection;
